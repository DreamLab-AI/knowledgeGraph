---
okf_version: "0.2"
type: Class
title: BitVM
resource: urn:ngm:class:bit-vm
domain: blockchain
description: BitVM is a proposed approach for expressing complex computations that can be verified on Bitcoin without changing its consensus rules. It uses fraud proofs and challenge-response interactions.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:bitcoin-script
requires:
  - urn:ngm:class:taproot
  - urn:ngm:class:fraud-proof
enables:
  - urn:ngm:class:layer-2-scaling
bridgesTo:
  - urn:ngm:class:smart-contract
---

# BitVM

BitVM is a proposed approach for expressing complex computations that can be verified on Bitcoin without changing its consensus rules. It uses fraud proofs and challenge-response interactions.
