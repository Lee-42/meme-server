import { h } from 'vue';
import { NAvatar, NTag } from 'naive-ui';
import { formatToDateTime } from '@/utils/dateUtil';

export const columns = [
  {
    type: 'selection',
    fixed: 'left',
  },
  {
    title: 'ID',
    key: 'id',
    width: 80,
  },
  {
    title: '用户',
    key: 'username',
    width: 180,
    render(row) {
      return h('div', { class: 'flex items-center' }, [
        h(NAvatar, {
          size: 32,
          src: row.avatar || '/resource/img/avatar.jpg',
        }),
        h('div', { class: 'ml-2' }, [
          h('div', row.username),
          row.nickname && h('div', { class: 'text-xs text-gray-400' }, row.nickname),
        ]),
      ]);
    },
  },
  {
    title: '手机号',
    key: 'mobile',
    width: 120,
  },
  {
    title: '邮箱',
    key: 'email',
    width: 180,
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render(row) {
      const statusMap = {
        1: { type: 'success', text: '正常' },
        2: { type: 'error', text: '禁用' },
      };
      const status = statusMap[row.status] || { type: 'default', text: '未知' };
      return h(
        NTag,
        {
          type: status.type,
        },
        {
          default: () => status.text,
        }
      );
    },
  },
  {
    title: '最后登录时间',
    key: 'lastLoginAt',
    width: 180,
    render(row) {
      return row.lastLoginAt ? formatToDateTime(row.lastLoginAt) : '-';
    },
  },
  {
    title: '最后登录IP',
    key: 'lastLoginIp',
    width: 140,
  },
  {
    title: '注册时间',
    key: 'createdAt',
    width: 180,
    render(row) {
      return formatToDateTime(row.createdAt);
    },
  },
];
