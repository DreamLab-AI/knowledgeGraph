---
okf_version: "0.2"
type: Class
title: Blob Transaction
resource: urn:ngm:class:blob-transaction
domain: blockchain
description: "A blob transaction is an Ethereum transaction type introduced by EIP-4844 (Proto-Danksharding) that carries a large binary payload of 'blob' data alongside the standard transaction fields, priced separately from calldata gas. Blobs are stored by consensus nodes for a limited retention window rather than persisted in perpetuity by the EVM, which keeps the cost of posting rollup data far lower than "
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:transaction
requires:
  - urn:ngm:class:transaction
partOf:
  - urn:ngm:class:danksharding
---

# Blob Transaction

A blob transaction is an Ethereum transaction type introduced by EIP-4844 (Proto-Danksharding) that carries a large binary payload of 'blob' data alongside the standard transaction fields, priced separately from calldata gas. Blobs are stored by consensus nodes for a limited retention window rather than persisted in perpetuity by the EVM, which keeps the cost of posting rollup data far lower than embedding it as ordinary calldata. Blob transactions are the mechanism by which layer-2 rollups post the data needed for fraud or validity proofs back to layer 1.
