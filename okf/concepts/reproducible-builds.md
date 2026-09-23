---
okf_version: "0.2"
type: Class
title: Reproducible Builds
resource: urn:ngm:class:reproducible-builds
domain: infrastructure
description: Reproducible builds are a software build practice in which compiling the same source code under the same recorded conditions always yields bit-for-bit identical artifacts. By removing sources of non-determinism such as timestamps, build paths, and ordering, independent parties can verify that a published binary corresponds exactly to its claimed source. This independent verifiability strengthens s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:supply-chain-security
hasPart:
  - urn:ngm:class:provenance
  - urn:ngm:class:reproducibility
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:continuous-integration
enables:
  - urn:ngm:class:verification
  - urn:ngm:class:trust
  - urn:ngm:class:attestation
dependsOn:
  - urn:ngm:class:continuous-integration
bridgesTo:
  - urn:ngm:class:attestation
uses:
  - urn:ngm:class:content-addressed-storage
  - urn:ngm:class:hash-function
supports:
  - urn:ngm:class:software-supply-chain
  - urn:ngm:class:supply-chain-security
relatedTo:
  - urn:ngm:class:provenance
  - urn:ngm:class:caching
  - urn:ngm:class:reproducibility
---

# Reproducible Builds

Reproducible builds are a software build practice in which compiling the same source code under the same recorded conditions always yields bit-for-bit identical artifacts. By removing sources of non-determinism such as timestamps, build paths, and ordering, independent parties can verify that a published binary corresponds exactly to its claimed source. This independent verifiability strengthens software supply-chain security and trust in distributed binaries.
