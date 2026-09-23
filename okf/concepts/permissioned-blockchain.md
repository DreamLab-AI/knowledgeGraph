---
okf_version: "0.2"
type: Class
title: Permissioned Blockchain
resource: urn:ngm:class:permissioned-blockchain
domain: blockchain
description: A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable consensus mechanisms, enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintaining regulatory compliance and business confidentiality. Access control is enforced at multiple layers—node permissioning restrict
maturity: draft
quality: 0.72
is-a:
  - urn:ngm:class:distributed-ledger
hasPart:
  - urn:ngm:class:private-channels
  - urn:ngm:class:membership-service-provider
  - urn:ngm:class:smart-contract
requires:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:proof-of-authority
  - urn:ngm:class:identity-management
  - urn:ngm:class:access-control
  - urn:ngm:class:bc-0120-consensus-mechanism
enables:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-privacy
  - urn:ngm:class:auditability
implements:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:hyperledger-besu
  - urn:ngm:class:quorum-blockchain
  - urn:ngm:class:r3-corda
contrastsWith:
  - urn:ngm:class:public-blockchain
  - urn:ngm:class:private-blockchain
bridgesTo:
  - urn:ngm:class:digital-identity
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:cryptographic-hash-function
  - urn:ngm:class:cryptographic-infrastructure
supports:
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:trade-finance
partOf:
  - urn:ngm:class:enterprise-blockchain-architecture
relatedTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-consensus
  - urn:ngm:class:tokenization
---

# Permissioned Blockchain

A restricted-access distributed ledger controlled by known participants using predefined permissions and pluggable consensus mechanisms, enabling organisations to leverage blockchain technology's immutability, transparency, and smart contract capabilities whilst maintaining regulatory compliance and business confidentiality. Access control is enforced at multiple layers—node permissioning restricting which organisations participate, account permissioning controlling transaction submission, and private channels enabling confidential subsets of participants to conduct transactions invisibly to others.
