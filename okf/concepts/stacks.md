---
okf_version: "0.2"
type: Class
title: Stacks
resource: urn:ngm:class:stacks
domain: blockchain
description: A Bitcoin Layer that enables smart contracts and applications whose state is anchored to the Bitcoin blockchain through its proof-of-transfer consensus.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:bitcoin-proof-of-work-protocol
requires:
  - urn:ngm:class:consensus-protocol
  - urn:ngm:class:bitcoin-proof-of-work-protocol
enables:
  - urn:ngm:class:smart-contract
bridgesTo:
  - urn:ngm:class:bitcoin-protocol
---

# Stacks

A Bitcoin Layer that enables smart contracts and applications whose state is anchored to the Bitcoin blockchain through its proof-of-transfer consensus.
