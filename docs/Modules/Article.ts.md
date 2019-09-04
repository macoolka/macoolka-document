---
title: Article.ts
nav_order: 1
parent: Modules
---

# Overview

Print `Article` struct to string

---

<h2 class="text-delta">Table of contents</h2>

- [Article (interface)](#article-interface)
- [ArticleSection (interface)](#articlesection-interface)
- [printArticle (function)](#printarticle-function)

---

# Article (interface)

**Signature**

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

# ArticleSection (interface)

**Signature**

```ts
interface ArticleSection {
  content?: string[] | string
  title?: string
}
```

# printArticle (function)

The print a `Article` to document `app`

Added in v0.2.0
