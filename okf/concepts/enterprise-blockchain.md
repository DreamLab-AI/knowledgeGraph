---
okf_version: "0.2"
type: Class
title: Enterprise Blockchain
resource: urn:ngm:class:enterprise-blockchain
domain: blockchain
description: Enterprise blockchain refers to permissioned distributed ledger platforms designed specifically for business use cases, providing organisations with controlled access, enhanced privacy, and regulatory compliance capabilities. Unlike public blockchains, enterprise solutions restrict network participation to authenticated entities, enabling secure data sharing, automated business processes through s
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:distributed-ledger-technology
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:permissioned-network
requires:
  - urn:ngm:class:cryptographic-identity
  - urn:ngm:class:identity-and-access-management
enables:
  - urn:ngm:class:business-process-automation
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:data-sharing
  - urn:ngm:class:audit-trail
dependsOn:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:peer-to-peer-network
implements:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:corda
  - urn:ngm:class:quorum
contrastsWith:
  - urn:ngm:class:public-blockchain
  - urn:ngm:class:centralised-database
bridgesTo:
  - urn:ngm:class:supply-chain-management
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:data-privacy
standardizedBy:
  - urn:ngm:class:hyperledger-foundation
  - urn:ngm:class:iso-tc-307
partOf:
  - urn:ngm:class:distributed-ledger-technology
relatedTo:
  - urn:ngm:class:blockchain-as-a-service
  - urn:ngm:class:tokenization
  - urn:ngm:class:interoperability
---

# Enterprise Blockchain

Enterprise blockchain refers to permissioned distributed ledger platforms designed specifically for business use cases, providing organisations with controlled access, enhanced privacy, and regulatory compliance capabilities. Unlike public blockchains, enterprise solutions restrict network participation to authenticated entities, enabling secure data sharing, automated business processes through smart contracts, and maintenance of a single source of truth without reliance on central authorities.
