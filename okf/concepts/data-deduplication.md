---
okf_version: "0.2"
type: Class
title: Data Deduplication
resource: urn:ngm:class:data-deduplication
domain: data
description: Data deduplication is the process of detecting and eliminating redundant copies of data so that only unique instances are retained or referenced. In storage it reduces capacity and bandwidth needs through chunk- or block-level matching, while in data preparation it removes duplicate records to improve quality. It is foundational for clean training data and for identity resolution where records mus
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:training-data
  - urn:ngm:class:identity-resolution
---

# Data Deduplication

Data deduplication is the process of detecting and eliminating redundant copies of data so that only unique instances are retained or referenced. In storage it reduces capacity and bandwidth needs through chunk- or block-level matching, while in data preparation it removes duplicate records to improve quality. It is foundational for clean training data and for identity resolution where records must be matched and merged.
