---
title: Document.ts
nav_order: 2
parent: 模块
---

# 概述

定义了文章的接口。

描述了一个文章的结构

将被 html、markdown 实现

---

<h2 class="text-delta">目录</h2>

- [Document (接口)](#document-%E6%8E%A5%E5%8F%A3)
- [FormattingElement (接口)](#formattingelement-%E6%8E%A5%E5%8F%A3)
- [Header (接口)](#header-%E6%8E%A5%E5%8F%A3)
- [List (接口)](#list-%E6%8E%A5%E5%8F%A3)
- [MonadDocument (接口)](#monaddocument-%E6%8E%A5%E5%8F%A3)
- [DocApp (类型)](#docapp-%E7%B1%BB%E5%9E%8B)

---

# Document (接口)

定义一份文档

**签名**

```ts
interface Document extends Header, List, FormattingElement {
  /**
   *标记内容为一篇文章
   */
  article: (code: string) => string
  /**
   *标记内容为引用别人的论述
   */
  blockquote: (code: string[]) => string
  /**
   *换行
   */
  br: (code: string) => string
  /**
   *标记内容为一段程序代码
   */
  code: (language: string) => (a: string) => string
  /**
   *水平线
   */
  hr: () => string
  /**
   *标记内容为图片
   */
  img: (text: string, href: string, title?: string) => string
  /**
   *标记内容为链接,一般指向外部资源
   */
  link: (text: string, href: string, title?: string) => string
  /**
   *标记内容为一个段落
   */
  p: (code: string) => string
  /**
   *标记内容为一个章节
   */
  section: (code: string) => string
  /**
   *定义一个表格
   */
  table: (as: string[][]) => string
}
```

# FormattingElement (接口)

格式化一个元素，给一个元素加上特殊效果。

**签名**

```ts
interface FormattingElement {
  /**
   *定义主要的文本
   */
  bold: (code: string) => string
  /**
   *定义一个事物的标题
   */
  cite: (code: string) => string
  /**
   *定义一个删除标记的文本
   */
  del: (text: string) => string
  /**
   *定义一个术语
   */
  dfn: (code: string) => string
  /**
   *定义一个强调的文本
   */
  em: (code: string) => string
  /**
   *定义一个插入的文本
   */
  ins: (code: string) => string
  /**
   *定义一个斜体文本
   */
  italic: (code: string) => string
  /**
   *定义一个高亮的文本
   */
  mark: (code: string) => string
  /**
   *给文本加引号
   */
  q: (code: string) => string
}
```

v0.2.0 中添加

# Header (接口)

定义了标题

数字为标题的级别

**签名**

```ts
interface Header {
  h1: (title: string) => string
  h2: (title: string) => string
  h3: (title: string) => string
  h4: (title: string) => string
  h5: (title: string) => string
  h6: (title: string) => string
}
```

v0.2.0 中添加

# List (接口)

列表定义

**签名**

```ts
interface List {
  /**
   *有顺序列表
   */
  ol: (as: string[]) => string
  /**
   *无顺序列表
   */
  ul: (as: string[]) => string
}
```

# MonadDocument (接口)

App effect

**签名**

```ts
interface MonadDocument {
  doc: Document
}
```

v0.2.0 中添加

# DocApp (类型)

为`Document`提供边界效果

**签名**

```ts
export type DocApp = (a: MonadDocument) => string
```
