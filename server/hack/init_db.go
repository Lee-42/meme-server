package main

import (
	"context"
	"fmt"

	_ "github.com/gogf/gf/contrib/drivers/pgsql/v2"
	"github.com/gogf/gf/v2/frame/g"
)

func main() {
	fmt.Println("Start creating table hg_app_user...")

	// 简单的建表脚本，依赖 manifest/config/config.yaml 配置
	// 确保运行目录在 server 下，这样能自动找到 resource 配置

	sql := `
CREATE TABLE IF NOT EXISTS hg_app_user (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL DEFAULT '',
    nickname VARCHAR(100) DEFAULT '',
    password_hash VARCHAR(255) NOT NULL DEFAULT '',
    salt VARCHAR(10) NOT NULL,
    mobile VARCHAR(20) DEFAULT '',
    email VARCHAR(100) DEFAULT '',
    avatar VARCHAR(500) DEFAULT '',
    sex SMALLINT DEFAULT 0,
    birthday DATE,
    last_login_at TIMESTAMP,
    last_login_ip VARCHAR(50) DEFAULT '',
    status SMALLINT DEFAULT 1,
    remark TEXT,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_app_user_username ON hg_app_user(username);
CREATE INDEX IF NOT EXISTS idx_app_user_mobile ON hg_app_user(mobile);
CREATE INDEX IF NOT EXISTS idx_app_user_email ON hg_app_user(email);
CREATE INDEX IF NOT EXISTS idx_app_user_status ON hg_app_user(status);
CREATE INDEX IF NOT EXISTS idx_app_user_created_at ON hg_app_user(created_at);
`
	if _, err := g.DB().Exec(context.Background(), sql); err != nil {
		fmt.Printf("Error creating table: %v\n", err)
	} else {
		fmt.Println("✅ Table hg_app_user created successfully!")
	}
}
