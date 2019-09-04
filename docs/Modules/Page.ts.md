---
title: Page.ts
nav_order: 3
parent: Modules
---

# Overview

Print `Page` struct to string

---

<h2 class="text-delta">Table of contents</h2>

- [NavItem (interface)](#navitem-interface)
- [Page (interface)](#page-interface)
- [SearchItem (interface)](#searchitem-interface)
- [printJekyllPage (function)](#printjekyllpage-function)

---

# NavItem (interface)

NavItem on a Site

**Signature**

```ts
interface NavItem {
  /**
   *Exclude in nav
   */
  exclude?: boolean
  /**
   *this is a parent page
   */
  hasChildren?: boolean
  /**
   *Order for the NavItem
   */
  order: number
  /**
   *set parent page name
   */
  parent?: string
  /**
   *set this to the site path that contains the child pages
   */
  permaLink?: string
  /**
   *auto TABLE OF CONTENTS
   */
  toc?: boolean
}
```

Added in v0.2.0

# Page (interface)

Page in Site

**Signature**

```ts
interface Page {
  /**
   *Layout for the page
   */
  layout?: string
  /**
   *Name for the page
   */
  name: string
  /**
   *nav info
   */
  nav: NavItem
  /**
   *search info
   */
  search?: SearchItem
}
```

Added in v0.2.0

# SearchItem (interface)

Search Item in Site

**Signature**

```ts
interface SearchItem {
  /**
   *exclude the search
   */
  exclude?: boolean
}
```

Added in v0.2.0

# printJekyllPage (function)

print `Jekyll` Page
