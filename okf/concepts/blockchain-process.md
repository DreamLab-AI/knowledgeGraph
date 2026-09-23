---
okf_version: "0.2"
type: Class
title: Blockchain Process
resource: urn:ngm:class:blockchain-process
domain: blockchain
description: Blockchain Process encompasses the operational workflows and procedural mechanisms that govern blockchain network functioning, including consensus execution, block validation, transaction verification, mempool management, state transitions, and protocol upgrade procedures. These processes collectively maintain network integrity and enable trustless distributed agreement.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:network-component
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:cryptographic-primitive
enables:
  - urn:ngm:class:blockchain-transaction
  - urn:ngm:class:blockchain-scalability
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:blockchain-network
partOf:
  - urn:ngm:class:blockchain
  - urn:ngm:class:blockchain-domain
---

# Blockchain Process

Blockchain Process encompasses the operational workflows and procedural mechanisms that govern blockchain network functioning, including consensus execution, block validation, transaction verification, mempool management, state transitions, and protocol upgrade procedures. These processes collectively maintain network integrity and enable trustless distributed agreement.
