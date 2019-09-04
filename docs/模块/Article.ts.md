---
title: Article.ts
nav_order: 1
parent: 模块
---

# 概述

格式化`Article`结构到文本

这是一个工具包,使用户快速的实现`Article`结构的打印。

---

<h2 class="text-delta">目录</h2>

- [Article (接口)](#article-%E6%8E%A5%E5%8F%A3)
- [ArticleSection (接口)](#articlesection-%E6%8E%A5%E5%8F%A3)
- [printArticle (函数)](#printarticle-%E5%87%BD%E6%95%B0)

---

# Article (接口)

**签名**

```ts
interface Article {
  /**
   *Description for the article
   */
  description?: string[] | string
  /**
   *Section for the article
   */
  section?: ArticleSection[] | ArticleSection
  /**
   *A article title
   */
  title?: string
}
```

# ArticleSection (接口)

**签名**

```ts
interface ArticleSection {
  content?: string[] | string
  title?: string
}
```

# printArticle (函数)

转换`Article`到`Dccument App`

v0.2.0 中添加
