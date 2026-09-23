---
okf_version: "0.2"
type: Class
title: Inverted Index
resource: urn:ngm:class:inverted-index
domain: data
description: An inverted index is a data structure that maps each term to the list of documents (and often positions) in which it appears, enabling fast full-text retrieval over large corpora. It inverts the natural document-to-terms relationship so that a query term immediately yields its posting list, which can then be intersected or scored. It is the foundational index behind search engines and lexical info
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:information-retrieval
relatedTo:
  - urn:ngm:class:semantic-search
  - urn:ngm:class:information-retrieval
---

# Inverted Index

An inverted index is a data structure that maps each term to the list of documents (and often positions) in which it appears, enabling fast full-text retrieval over large corpora. It inverts the natural document-to-terms relationship so that a query term immediately yields its posting list, which can then be intersected or scored. It is the foundational index behind search engines and lexical information retrieval.
