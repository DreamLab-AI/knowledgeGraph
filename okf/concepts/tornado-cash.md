---
okf_version: "0.2"
type: Class
title: Tornado Cash
resource: urn:ngm:class:tornado-cash
domain: blockchain
description: "Tornado Cash is a set of non-custodial smart contracts on Ethereum and compatible networks that obscure the on-chain link between a deposit and a withdrawal. Users deposit a fixed denomination of a token into a pool and later withdraw the same amount to a different address, using a zero-knowledge proof to demonstrate ownership of a valid deposit without revealing which one. It became widely known "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cryptographic-primitive
  - urn:ngm:class:cryptographic-domain
requires:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:ethereum-smart-contract-platform
  - urn:ngm:class:zk-snark
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:transaction-privacy
implements:
  - urn:ngm:class:smart-contract
contrastsWith:
  - urn:ngm:class:blockchain-analysis
  - urn:ngm:class:custodial-exchange
bridgesTo:
  - urn:ngm:class:financial-privacy
  - urn:ngm:class:infra-legal-and-regulatory
  - urn:ngm:class:zk-snark
  - urn:ngm:class:regulatory-domain
uses:
  - urn:ngm:class:commitment-scheme
  - urn:ngm:class:relayer
relatedTo:
  - urn:ngm:class:aml-kyc-compliance
  - urn:ngm:class:de-fi
---

# Tornado Cash

Tornado Cash is a set of non-custodial smart contracts on Ethereum and compatible networks that obscure the on-chain link between a deposit and a withdrawal. Users deposit a fixed denomination of a token into a pool and later withdraw the same amount to a different address, using a zero-knowledge proof to demonstrate ownership of a valid deposit without revealing which one. It became widely known both as a privacy tool and as the subject of sanctions by the United States Office of Foreign Assets Control in 2022.
