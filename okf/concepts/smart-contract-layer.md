---
okf_version: "0.2"
type: Class
title: Smart Contract Layer
resource: urn:ngm:class:smart-contract-layer
domain: blockchain
description: The Smart Contract Layer is the stratum that holds self-executing programmes whose logic runs deterministically against agreed state. In the canonical stack it sits above the Middleware Layer and below the Application Layer, turning a shared ledger into a programmable platform. It contains contract code, virtual machine execution semantics, and the state these contracts read and write.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:middleware-layer
  - urn:ngm:class:consensus-layer
enables:
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:de-fi
---

# Smart Contract Layer

The Smart Contract Layer is the stratum that holds self-executing programmes whose logic runs deterministically against agreed state. In the canonical stack it sits above the Middleware Layer and below the Application Layer, turning a shared ledger into a programmable platform. It contains contract code, virtual machine execution semantics, and the state these contracts read and write.
