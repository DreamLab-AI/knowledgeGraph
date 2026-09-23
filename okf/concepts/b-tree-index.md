---
okf_version: "0.2"
type: Class
title: B-Tree Index
resource: urn:ngm:class:b-tree-index
domain: infrastructure
description: "A B-tree index is a self-balancing tree data structure used by database engines to maintain sorted data and support efficient logarithmic-time lookups, range scans, insertions, and deletions. Each node holds multiple sorted keys and child pointers, keeping the tree shallow and minimising disk reads relative to a binary tree. It is the default index structure in relational database systems such as "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:data-structure
---

# B-Tree Index

A B-tree index is a self-balancing tree data structure used by database engines to maintain sorted data and support efficient logarithmic-time lookups, range scans, insertions, and deletions. Each node holds multiple sorted keys and child pointers, keeping the tree shallow and minimising disk reads relative to a binary tree. It is the default index structure in relational database systems such as PostgreSQL for primary keys and most secondary indexes.
