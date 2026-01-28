import { http } from '@/utils/http/axios';

/**
 * @description: C端用户列表（后台管理）
 */
export function List(params?) {
  return http.request({
    url: '/user/list',
    method: 'GET',
    params,
  });
}

/**
 * @description: 获取用户详情
 */
export function View(params) {
  return http.request({
    url: '/user/view',
    method: 'GET',
    params,
  });
}

/**
 * @description: 编辑用户
 */
export function Edit(params) {
  return http.request({
    url: '/user/edit',
    method: 'POST',
    params,
  });
}

/**
 * @description: 删除用户
 */
export function Delete(params) {
  return http.request({
    url: '/user/delete',
    method: 'POST',
    params,
  });
}

/**
 * @description: 更新用户状态
 */
export function Status(params) {
  return http.request({
    url: '/user/status',
    method: 'POST',
    params,
  });
}
