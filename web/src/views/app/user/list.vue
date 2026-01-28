<template>
  <div>
    <n-card :bordered="false" class="proCard">
      <BasicForm
        @register="register"
        @submit="handleSubmit"
        @reset="handleReset"
        ref="searchFormRef"
      >
      </BasicForm>

      <BasicTable
        :openChecked="true"
        :columns="columns"
        :request="loadDataTable"
        :row-key="(row) => row.id"
        ref="actionRef"
        :actionColumn="actionColumn"
        @update:checked-row-keys="onCheckedRow"
        :scroll-x="1400"
      >
        <template #tableTitle>
          <n-button type="primary" @click="addTable" class="min-left-space">
            <template #icon>
              <n-icon>
                <PlusOutlined />
              </n-icon>
            </template>
            添加用户
          </n-button>
          <n-button
            type="error"
            @click="batchDelete"
            :disabled="batchDeleteDisabled"
            class="min-left-space"
          >
            <template #icon>
              <n-icon>
                <DeleteOutlined />
              </n-icon>
            </template>
            批量删除
          </n-button>
        </template>
      </BasicTable>
    </n-card>

    <!-- 编辑/添加用户表单 -->
    <n-modal
      v-model:show="showModal"
      :mask-closable="false"
      :show-icon="false"
      preset="dialog"
      :title="formParams?.id > 0 ? '编辑用户 #' + formParams?.id : '添加用户'"
      :style="{ width: modalWidth }"
    >
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-grid x-gap="24" :cols="2">
          <n-gi>
            <n-form-item label="用户名" path="username">
              <n-input placeholder="请输入用户名" v-model:value="formParams.username" />
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="密码" path="password">
              <n-input
                type="password"
                :placeholder="formParams.id === 0 ? '请输入密码' : '不填则不修改'"
                v-model:value="formParams.password"
                show-password-on="click"
              />
            </n-form-item>
          </n-gi>
        </n-grid>

        <n-grid x-gap="24" :cols="2">
          <n-gi>
            <n-form-item label="昵称" path="nickname">
              <n-input placeholder="请输入昵称" v-model:value="formParams.nickname" />
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="手机号" path="mobile">
              <n-input placeholder="请输入手机号" v-model:value="formParams.mobile" />
            </n-form-item>
          </n-gi>
        </n-grid>

        <n-grid x-gap="24" :cols="2">
          <n-gi>
            <n-form-item label="邮箱" path="email">
              <n-input placeholder="请输入邮箱" v-model:value="formParams.email" />
            </n-form-item>
          </n-gi>
          <n-gi>
            <n-form-item label="性别" path="sex">
              <n-radio-group v-model:value="formParams.sex">
                <n-radio-button
                  v-for="item in sexOptions"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                />
              </n-radio-group>
            </n-form-item>
          </n-gi>
        </n-grid>

        <n-grid x-gap="24" :cols="2">
          <n-gi>
            <n-form-item label="状态" path="status">
              <n-radio-group v-model:value="formParams.status">
                <n-radio-button
                  v-for="item in statusOptions"
                  :key="item.value"
                  :value="item.value"
                  :label="item.label"
                />
              </n-radio-group>
            </n-form-item>
          </n-gi>
        </n-grid>

        <n-form-item label="备注" path="remark">
          <n-input type="textarea" placeholder="请输入备注" v-model:value="formParams.remark" />
        </n-form-item>
      </n-form>

      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </div>
</template>

<script lang="ts" setup>
  import { h, reactive, ref, computed } from 'vue';
  import { useDialog, useMessage } from 'naive-ui';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, useForm } from '@/components/Form/index';
  import { Delete, Edit, List, Status } from '@/api/app/user';
  import { columns } from './columns';
  import { PlusOutlined, DeleteOutlined } from '@vicons/antd';
  import { sexOptions, statusOptions } from './model';
  import { cloneDeep } from 'lodash-es';

  const defaultFormState = {
    id: 0,
    username: '',
    password: '',
    nickname: '',
    mobile: '',
    email: '',
    sex: 0,
    status: 1,
    remark: '',
  };

  const rules = {
    username: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入用户名',
    },
    password: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入密码',
      validator: (rule, value) => {
        if (formParams.value.id === 0 && !value) {
          return new Error('请输入密码');
        }
        return true;
      },
    },
  };

  const message = useMessage();
  const dialog = useDialog();
  const actionRef = ref();
  const searchFormRef = ref<any>({});
  const formRef = ref<any>({});
  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const batchDeleteDisabled = ref(true);
  const checkedIds = ref([]);
  const formParams = ref<any>(cloneDeep(defaultFormState));

  const modalWidth = computed(() => {
    return '800px';
  });

  const [register] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas: [
      {
        field: 'username',
        label: '用户名',
        component: 'NInput',
        componentProps: {
          placeholder: '请输入用户名',
        },
      },
      {
        field: 'mobile',
        label: '手机号',
        component: 'NInput',
        componentProps: {
          placeholder: '请输入手机号',
        },
      },
      {
        field: 'email',
        label: '邮箱',
        component: 'NInput',
        componentProps: {
          placeholder: '请输入邮箱',
        },
      },
      {
        field: 'status',
        label: '状态',
        component: 'NSelect',
        componentProps: {
          placeholder: '请选择状态',
          options: [{ label: '全部', value: 0 }, ...statusOptions],
        },
      },
    ],
  });

  const actionColumn = reactive({
    width: 200,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '编辑',
            onClick: handleEdit.bind(null, record),
          },
          {
            label: '删除',
            onClick: handleDelete.bind(null, record),
          },
        ],
        dropDownActions: [
          {
            label: record.status === 1 ? '禁用' : '启用',
            key: 'status',
            onClick: handleStatus.bind(null, record),
          },
        ],
        select: (key) => {
          if (key === 'status') {
            handleStatus(record);
          }
        },
      });
    },
  });

  const loadDataTable = async (res) => {
    return await List({ ...res, ...searchFormRef.value?.formModel });
  };

  function onCheckedRow(rowKeys) {
    batchDeleteDisabled.value = rowKeys.length <= 0;
    checkedIds.value = rowKeys;
  }

  function reloadTable() {
    actionRef.value.reload();
  }

  function addTable() {
    showModal.value = true;
    formParams.value = cloneDeep(defaultFormState);
  }

  function confirmForm(e) {
    e.preventDefault();
    formBtnLoading.value = true;
    formRef.value.validate((errors) => {
      if (!errors) {
        Edit(formParams.value)
          .then((_res) => {
            message.success('操作成功');
            setTimeout(() => {
              showModal.value = false;
              reloadTable();
            });
          })
          .finally(() => {
            formBtnLoading.value = false;
          });
      } else {
        message.error('请填写完整信息');
        formBtnLoading.value = false;
      }
    });
  }

  function handleEdit(record: Recordable) {
    showModal.value = true;
    formParams.value = cloneDeep(record);
  }

  function handleDelete(record: Recordable) {
    dialog.warning({
      title: '警告',
      content: '你确定要删除该用户吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        Delete({ id: record.id }).then((_res) => {
          message.success('删除成功');
          reloadTable();
        });
      },
    });
  }

  function handleStatus(record: Recordable) {
    const newStatus = record.status === 1 ? 2 : 1;
    const statusText = newStatus === 1 ? '启用' : '禁用';

    dialog.warning({
      title: '警告',
      content: `你确定要${statusText}该用户吗？`,
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        Status({ id: record.id, status: newStatus }).then((_res) => {
          message.success('操作成功');
          reloadTable();
        });
      },
    });
  }

  function batchDelete() {
    dialog.warning({
      title: '警告',
      content: '你确定要批量删除选中的用户吗？',
      positiveText: '确定',
      negativeText: '取消',
      onPositiveClick: () => {
        Delete({ id: checkedIds.value }).then((_res) => {
          message.success('删除成功');
          reloadTable();
        });
      },
    });
  }

  function handleSubmit(_values: Recordable) {
    reloadTable();
  }

  function handleReset(_values: Recordable) {
    reloadTable();
  }
</script>

<style lang="less" scoped></style>
