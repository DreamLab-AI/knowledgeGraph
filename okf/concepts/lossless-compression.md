---
okf_version: "0.2"
type: Class
title: Lossless Compression
resource: urn:ngm:class:lossless-compression
domain: infrastructure
description: Lossless compression is a class of data compression in which the original data can be reconstructed exactly, bit for bit, from the compressed representation. It exploits statistical redundancy through techniques such as entropy coding and dictionary substitution, contrasting with lossy compression which discards perceptually insignificant information for higher ratios. It is essential where fideli
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data-compression
hasPart:
  - urn:ngm:class:codec
requires:
  - urn:ngm:class:data-quality
enables:
  - urn:ngm:class:data-format
  - urn:ngm:class:backup-and-recovery
  - urn:ngm:class:backup
dependsOn:
  - urn:ngm:class:information-theory
implements:
  - urn:ngm:class:data-compression
contrastsWith:
  - urn:ngm:class:lossy-compression
uses:
  - urn:ngm:class:entropy-coding
  - urn:ngm:class:information-theory
supports:
  - urn:ngm:class:data-warehouse
  - urn:ngm:class:data-storage
partOf:
  - urn:ngm:class:data-compression
relatedTo:
  - urn:ngm:class:image-compression
  - urn:ngm:class:video-compression
---

# Lossless Compression

Lossless compression is a class of data compression in which the original data can be reconstructed exactly, bit for bit, from the compressed representation. It exploits statistical redundancy through techniques such as entropy coding and dictionary substitution, contrasting with lossy compression which discards perceptually insignificant information for higher ratios. It is essential where fidelity must be preserved, such as for text, executables, and archival data.
