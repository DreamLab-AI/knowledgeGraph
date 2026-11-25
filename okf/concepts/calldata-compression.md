---
okf_version: "0.2"
type: Class
title: Calldata Compression
resource: urn:ngm:class:calldata-compression
domain: blockchain
description: Calldata compression is the practice of encoding transaction data more compactly before posting it as calldata to a base-layer blockchain, reducing the number of bytes that must be paid for and stored. Rollups such as Arbitrum and Base apply techniques including signature aggregation, zero-byte-heavy encoding and custom serialisation formats to shrink batch size. Because calldata gas cost dominate
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:calldata
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Calldata Compression

Calldata compression is the practice of encoding transaction data more compactly before posting it as calldata to a base-layer blockchain, reducing the number of bytes that must be paid for and stored. Rollups such as Arbitrum and Base apply techniques including signature aggregation, zero-byte-heavy encoding and custom serialisation formats to shrink batch size. Because calldata gas cost dominates rollup transaction fees, compression directly reduces the cost of settling Layer 2 state on the base chain.
