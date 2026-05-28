---
title: 使用Zeabur部署Anuneko2API
published: 2025-12-28
description: 手把手教你将 Anuneko AI 转换为 OpenAI 兼容 API
image: ''
tags:
  - AI
  - LLM
  - 2API
  - 逆向
  - Zeabur
category: 教程
draft: false
lang: ''
---

小东西怪可爱的，逆个向玩玩～

![Anuneko截图](/images/posts/anuneko-screenshot1.png)

## 准备工作

打开F12发送消息测试一下

![F12截图](/images/posts/anuneko-screenshot2.png)

提取X-Token

![X-Token](/images/posts/anuneko-screenshot3.png)

提取cookies里的uk

![Cookies](/images/posts/anuneko-screenshot4.png)

提取chat id

![Chat ID](/images/posts/anuneko-screenshot5.png)

## 部署到Zeabur

打开zeabur创建项目

![Zeabur创建项目](/images/posts/anuneko-screenshot6.png)

点击Github

![点击Github](/images/posts/anuneko-screenshot7.png)

前往 [2API](https://github.com/muyuzier-afk/2api) 点击Fork

![Fork仓库](/images/posts/anuneko-screenshot8.png)

点击Create Fork

![Create Fork](/images/posts/anuneko-screenshot9.png)

回到Zeabur点击配置Github

![配置Github](/images/posts/anuneko-screenshot10.png)

选择自己的账户

![选择账户](/images/posts/anuneko-screenshot11.png)

点击install

![Install](/images/posts/anuneko-screenshot12.png)

选择2api

![选择2api](/images/posts/anuneko-screenshot13.png)

前往环境变量

![环境变量](/images/posts/anuneko-screenshot14.png)

添加配置

![添加配置](/images/posts/anuneko-screenshot15.png)

```
COOKIE_UK=
X_TOKEN=
CHAT_ID=
```

重新部署完成后复制域名就能用了，模型和密钥随便填

![完成部署](/images/posts/anuneko-screenshot16.png)
