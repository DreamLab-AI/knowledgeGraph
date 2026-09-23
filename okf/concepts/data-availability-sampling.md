---
okf_version: "0.2"
type: Class
title: Data Availability Sampling
resource: urn:ngm:class:data-availability-sampling
domain: blockchain
description: "Data availability sampling (DAS) is a technique that lets resource-limited clients gain high statistical confidence that all the data behind a block has been published, without downloading the whole block. Each client requests a few random fragments of an erasure-coded dataset; if enough randomly chosen fragments are returned across many clients, the full data can be reconstructed, so withholding "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:data-availability
hasPart:
  - urn:ngm:class:erasure-coding
requires:
  - urn:ngm:class:erasure-coding
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:light-client
dependsOn:
  - urn:ngm:class:peer-to-peer-network
implements:
  - urn:ngm:class:data-availability
bridgesTo:
  - urn:ngm:class:rollup
uses:
  - urn:ngm:class:erasure-coding
supports:
  - urn:ngm:class:rollup
  - urn:ngm:class:sharding
partOf:
  - urn:ngm:class:data-availability
relatedTo:
  - urn:ngm:class:celestia
  - urn:ngm:class:fraud-proof
  - urn:ngm:class:ethereum
  - urn:ngm:class:light-client
---

# Data Availability Sampling

Data availability sampling (DAS) is a technique that lets resource-limited clients gain high statistical confidence that all the data behind a block has been published, without downloading the whole block. Each client requests a few random fragments of an erasure-coded dataset; if enough randomly chosen fragments are returned across many clients, the full data can be reconstructed, so withholding it becomes detectable. DAS is a foundational primitive for scalable, modular blockchains and rollup-centric architectures.
