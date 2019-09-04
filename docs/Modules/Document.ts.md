---
title: Document.ts
nav_order: 2
parent: Modules
---

# Overview

The define a document interface

The provide some function describe document struct.

It will be instanced by markdown or html

---

<h2 class="text-delta">Table of contents</h2>

- [Document (interface)](#document-interface)
- [FormattingElement (interface)](#formattingelement-interface)
- [Header (interface)](#header-interface)
- [List (interface)](#list-interface)
- [MonadDocument (interface)](#monaddocument-interface)
- [DocApp (type alias)](#docapp-type-alias)

---

# Document (interface)

The define a Document

**Signature**

```ts
interface Document extends Header, List, FormattingElement {
  /**
   *Defines an article
   */
  article: (code: string) => string
  /**
   *Defines a section that is quoted from another source
   */
  blockquote: (code: string[]) => string
  /**
   *To create a line break (<br>).
   */
  br: (code: string) => string
  /**
   *Defines a piece of computer code
   */
  code: (language: string) => (a: string) => string
  /**
   *To create a horizontal rule,
   */
  hr: () => string
  /**
   *Defines an image
   */
  img: (text: string, href: string, title?: string) => string
  /**
   *To create a link, Defines the relationship between a document and an external resource
   */
  link: (text: string, href: string, title?: string) => string
  /**
   *To create paragraphs, use a blank line to separate one or more lines of text
   */
  p: (code: string) => string
  /**
   *Defines a section in a document
   */
  section: (code: string) => string
  /**
   *Defines a table
   */
  table: (as: string[][]) => string
}
```

# FormattingElement (interface)

Format a Element
You can add emphasis by making text bold or italic

**Signature**

```ts
interface FormattingElement {
  /**
   *Defines important text
   */
  bold: (code: string) => string
  /**
   *The tag defines the title of a work (e.g. a book, a song, a movie, a TV show, a painting, a sculpture, etc.).
   */
  cite: (code: string) => string
  /**
   *Defines text that has been deleted from a document
   */
  del: (text: string) => string
  /**
   *a definition term
   */
  dfn: (code: string) => string
  /**
   *Defines emphasized text
   */
  em: (code: string) => string
  /**
   *The tag defines a text that has been inserted into a document.
   */
  ins: (code: string) => string
  /**
   *Defines italicize text.
   */
  italic: (code: string) => string
  /**
   *Defines marked text.
   *Use the tag if you want to highlight parts of your text.
   */
  mark: (code: string) => string
  /**
   *The tag defines a short quotation.
   */
  q: (code: string) => string
}
```

Added in v0.2.0

# Header (interface)

The define a document interface

The provide some function describe document struct.

It will be instanced by markdown or html

**Signature**

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

Added in v0.2.0

# List (interface)

The define a List

**Signature**

```ts
interface List {
  /**
   *Defines an ordered list
   */
  ol: (as: string[]) => string
  /**
   *Defines an unordered list
   */
  ul: (as: string[]) => string
}
```

# MonadDocument (interface)

App effect

**Signature**

```ts
interface MonadDocument {
  doc: Document
}
```

Added in v0.2.0

# DocApp (type alias)

Side effect for `Document`

**Signature**

```ts
export type DocApp = (a: MonadDocument) => string
```
