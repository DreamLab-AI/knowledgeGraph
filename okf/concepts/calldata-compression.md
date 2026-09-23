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
---

# Calldata Compression

Calldata compression is the practice of encoding transaction data more compactly before posting it as calldata to a base-layer blockchain, reducing the number of bytes that must be paid for and stored. Rollups such as Arbitrum and Base apply techniques including signature aggregation, zero-byte-heavy encoding and custom serialisation formats to shrink batch size. Because calldata gas cost dominates rollup transaction fees, compression directly reduces the cost of settling Layer 2 state on the base chain.
