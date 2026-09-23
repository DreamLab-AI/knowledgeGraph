---
okf_version: "0.2"
type: Class
title: Reed-Solomon Erasure Coding
resource: urn:ngm:class:reed-solomon-erasure-coding
domain: infrastructure
description: Reed-Solomon erasure coding is a family of error-correcting codes that transform k data symbols into n encoded symbols such that any k of the n suffice to reconstruct the original data, tolerating up to n minus k erasures. Operating over finite (Galois) fields, it provides maximum-distance-separable efficiency, meaning no scheme can recover from more erasures for the same redundancy. It is foundat
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:erasure-coding
enables:
  - urn:ngm:class:data-availability
  - urn:ngm:class:fault-tolerance
uses:
  - urn:ngm:class:error-correction
relatedTo:
  - urn:ngm:class:distributed-storage
---

# Reed-Solomon Erasure Coding

Reed-Solomon erasure coding is a family of error-correcting codes that transform k data symbols into n encoded symbols such that any k of the n suffice to reconstruct the original data, tolerating up to n minus k erasures. Operating over finite (Galois) fields, it provides maximum-distance-separable efficiency, meaning no scheme can recover from more erasures for the same redundancy. It is foundational to RAID storage, optical media, QR codes, satellite communication, and distributed-storage and blockchain data-availability systems.
