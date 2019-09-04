---
title: Page.ts
nav_order: 3
parent: 模块
---

# 概述

格式化`Page`结构到文本

这是一个工具包,使用户快速的实现`Page`结构的打印。

---

<h2 class="text-delta">目录</h2>

- [NavItem (接口)](#navitem-%E6%8E%A5%E5%8F%A3)
- [Page (接口)](#page-%E6%8E%A5%E5%8F%A3)
- [SearchItem (接口)](#searchitem-%E6%8E%A5%E5%8F%A3)
- [printJekyllPage (函数)](#printjekyllpage-%E5%87%BD%E6%95%B0)

---

# NavItem (接口)

站点导航

**签名**

```ts
interface NavItem {
  /**
   *排除在导航中
   */
  exclude?: boolean
  /**
   *是否有子导航
   */
  hasChildren?: boolean
  /**
   *在导航中的级别
   */
  order: number
  /**
   *父导航的名称
   */
  parent?: string
  /**
   *包含子页面的路径
   */
  permaLink?: string
  /**
   *自动产生子页面的TOC
   */
  toc?: boolean
}
```

v0.2.0 中添加

# Page (接口)

站点页面

**签名**

```ts
interface Page {
  /**
   *页面布局
   */
  layout?: string
  /**
   *页面名称
   */
  name: string
  /**
   *导航信息
   */
  nav: NavItem
  /**
   *页面全局搜索信息
   */
  search?: SearchItem
}
```

v0.2.0 中添加

# SearchItem (接口)

站点搜索

**签名**

```ts
interface SearchItem {
  /**
   *排除在搜索引擎外
   */
  exclude?: boolean
}
```

v0.2.0 中添加

# printJekyllPage (函数)

输出`Jekyll`页面
