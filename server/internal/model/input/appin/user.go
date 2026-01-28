// Package appin
// @Link  https://github.com/bufanyun/hotgo
// @Copyright  Copyright (c) 2023 HotGo CLI
// @Author  Ms <133814250@qq.com>
// @License  https://github.com/bufanyun/hotgo/blob/master/LICENSE
package appin

import "hotgo/internal/model/input/form"

// UserRegisterInp 用户注册输入
type UserRegisterInp struct {
	Username string `json:"username" dc:"用户名"`
	Password string `json:"password" dc:"密码"`
	Mobile   string `json:"mobile" dc:"手机号"`
	Email    string `json:"email" dc:"邮箱"`
}

// UserLoginInp 用户登录输入
type UserLoginInp struct {
	Username string `json:"username" dc:"用户名"`
	Password string `json:"password" dc:"密码"`
}

// UserUpdateProfileInp 更新用户资料输入
type UserUpdateProfileInp struct {
	Nickname string `json:"nickname" dc:"昵称"`
	Avatar   string `json:"avatar" dc:"头像"`
	Sex      int    `json:"sex" dc:"性别"`
	Birthday string `json:"birthday" dc:"生日"`
}

// UserListInp 用户列表输入
type UserListInp struct {
	form.PageReq
	Username  string   `json:"username" dc:"用户名"`
	Mobile    string   `json:"mobile" dc:"手机号"`
	Email     string   `json:"email" dc:"邮箱"`
	Status    int      `json:"status" dc:"状态"`
	CreatedAt []string `json:"createdAt" dc:"创建时间"`
}

// UserEditInp 用户编辑输入
type UserEditInp struct {
	Id       int64  `json:"id" dc:"用户ID"`
	Username string `json:"username" dc:"用户名"`
	Password string `json:"password" dc:"密码"`
	Nickname string `json:"nickname" dc:"昵称"`
	Mobile   string `json:"mobile" dc:"手机号"`
	Email    string `json:"email" dc:"邮箱"`
	Avatar   string `json:"avatar" dc:"头像"`
	Sex      int    `json:"sex" dc:"性别"`
	Status   int    `json:"status" dc:"状态"`
	Remark   string `json:"remark" dc:"备注"`
}

// UserStatusInp 用户状态输入
type UserStatusInp struct {
	Id     int64 `json:"id" dc:"用户ID"`
	Status int   `json:"status" dc:"状态"`
}

// UserDeleteInp 删除用户输入
type UserDeleteInp struct {
	Id interface{} `json:"id" dc:"用户ID"`
}

// UserViewInp 获取用户详情输入
type UserViewInp struct {
	Id int64 `json:"id" dc:"用户ID"`
}
