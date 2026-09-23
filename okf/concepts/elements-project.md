---
okf_version: "0.2"
type: Class
title: Elements Project
resource: urn:ngm:class:elements-project
domain: blockchain
description: The Elements Project is an open-source blockchain platform, derived from Bitcoin Core, that serves as a testbed and reference implementation for advanced features such as confidential transactions, asset issuance, and federated sidechains. Maintained primarily by Blockstream, it provides the codebase underpinning the Liquid Network and allows developers to experiment with extensions that may later
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:open-source-software
enables:
  - urn:ngm:class:liquid-network
  - urn:ngm:class:confidential-transactions
dependsOn:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
implements:
  - urn:ngm:class:confidential-transactions
  - urn:ngm:class:sidechain
  - urn:ngm:class:segregated-witness
bridgesTo:
  - urn:ngm:class:liquid-network
uses:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-core
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:sidechain
  - urn:ngm:class:smart-contract
standardizedBy:
  - urn:ngm:class:blockstream
partOf:
  - urn:ngm:class:blockstream
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:schnorr-signature
---

# Elements Project

The Elements Project is an open-source blockchain platform, derived from Bitcoin Core, that serves as a testbed and reference implementation for advanced features such as confidential transactions, asset issuance, and federated sidechains. Maintained primarily by Blockstream, it provides the codebase underpinning the Liquid Network and allows developers to experiment with extensions that may later be proposed for Bitcoin itself. It packages cryptographic enhancements like confidential assets and amounts into a deployable, Bitcoin-compatible client.
