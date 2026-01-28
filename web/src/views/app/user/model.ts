import type { FormSchema } from '@/components/Form';
import { h } from 'vue';

export interface AppUser {
  id: number;
  username: string;
  nickname: string;
  mobile: string;
  email: string;
  avatar: string;
  sex: number;
  birthday: string;
  lastLoginAt: string;
  lastLoginIp: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export const sexOptions = [
  { label: '未知', value: 0 },
  { label: '男', value: 1 },
  { label: '女', value: 2 },
];

export const statusOptions = [
  { label: '正常', value: 1 },
  { label: '禁用', value: 2 },
];

export const schemas: FormSchema[] = [
  {
    field: 'id',
    label: 'ID',
    component: 'NInput',
    show: false,
  },
  {
    field: 'username',
    label: '用户名',
    component: 'NInput',
    required: true,
    componentProps: {
      placeholder: '请输入用户名',
      maxlength: 20,
    },
  },
  {
    field: 'password',
    label: '密码',
    component: 'NInput',
    componentProps: {
      type: 'password',
      placeholder: '不修改请留空',
      maxlength: 20,
      showPasswordOn: 'click',
    },
    ifShow: ({ values }) => {
      return values.id > 0;
    },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'NInput',
    componentProps: {
      placeholder: '请输入昵称',
      maxlength: 100,
    },
  },
  {
    field: 'mobile',
    label: '手机号',
    component: 'NInput',
    componentProps: {
      placeholder: '请输入手机号',
      maxlength: 11,
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
    field: 'sex',
    label: '性别',
    component: 'NRadioGroup',
    defaultValue: 0,
    componentProps: {
      options: sexOptions,
    },
  },
  {
    field: 'status',
    label: '状态',
    component: 'NRadioGroup',
    defaultValue: 1,
    componentProps: {
      options: statusOptions,
    },
  },
  {
    field: 'remark',
    label: '备注',
    component: 'NInput',
    componentProps: {
      type: 'textarea',
      placeholder: '请输入备注',
      rows: 3,
    },
  },
];
