---
okf_version: "0.2"
type: Class
title: Block Timestamp
resource: urn:ngm:class:block-timestamp
domain: blockchain
description: A block timestamp is the time value that a block producer embeds in a blockchain block header, recording when the block was created according to that producer's clock. Because it is set by the block producer rather than a trusted external clock, it is only approximately accurate and is bounded by consensus rules to prevent large manipulation; difficulty adjustment algorithms and timelocks both dep
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:block
---

# Block Timestamp

A block timestamp is the time value that a block producer embeds in a blockchain block header, recording when the block was created according to that producer's clock. Because it is set by the block producer rather than a trusted external clock, it is only approximately accurate and is bounded by consensus rules to prevent large manipulation; difficulty adjustment algorithms and timelocks both depend on it. It provides the ordering and timing primitive on which many on-chain time-dependent mechanisms are built.
