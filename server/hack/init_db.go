package main

import (
	"context"
	"fmt"

	_ "github.com/gogf/gf/contrib/drivers/mysql/v2"
	"github.com/gogf/gf/v2/frame/g"
)

func main() {
	fmt.Println("Start creating table hg_app_user (MySQL)...")

	// 依赖 manifest/config/config.yaml 中的 MySQL 配置

	sql := `
CREATE TABLE IF NOT EXISTS hg_app_user (
    id bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
    username varchar(50) NOT NULL DEFAULT '' COMMENT '用户名',
    nickname varchar(100) DEFAULT '' COMMENT '昵称',
    password_hash varchar(255) NOT NULL DEFAULT '' COMMENT '密码哈希',
    salt varchar(10) NOT NULL COMMENT '密码盐',
    mobile varchar(20) DEFAULT '' COMMENT '手机号',
    email varchar(100) DEFAULT '' COMMENT '邮箱',
    avatar varchar(500) DEFAULT '' COMMENT '头像URL',
    sex tinyint(1) DEFAULT '0' COMMENT '性别',
    birthday date DEFAULT NULL COMMENT '生日',
    last_login_at datetime DEFAULT NULL COMMENT '最后登录时间',
    last_login_ip varchar(50) DEFAULT '' COMMENT '最后登录IP',
    status tinyint(1) DEFAULT '1' COMMENT '状态',
    remark text COMMENT '备注',
    created_at datetime DEFAULT NULL COMMENT '创建时间',
    updated_at datetime DEFAULT NULL COMMENT '更新时间',
    PRIMARY KEY (id),
    UNIQUE KEY uniq_username (username),
    KEY idx_mobile (mobile),
    KEY idx_email (email),
    KEY idx_status (status),
    KEY idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='应用_普通用户';
`
	if _, err := g.DB().Exec(context.Background(), sql); err != nil {
		fmt.Printf("Error creating table: %v\n", err)
	} else {
		fmt.Println("✅ Table hg_app_user created successfully!")
	}
}
