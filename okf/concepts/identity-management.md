---
okf_version: "0.2"
type: Class
title: Identity Management
resource: urn:ngm:class:identity-management
domain: security
description: Identity management refers to the systems, protocols, and policies enabling individuals and organisations to create, control, and verify digital identities. In decentralised contexts this encompasses DID architectures, verifiable credentials, and self-sovereign identity models that eliminate reliance on centralised authorities through cryptographic proofs and distributed ledger infrastructure.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:digital-wallet
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:cryptographic-key-management
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:privacy-preserving-authentication
  - urn:ngm:class:zero-knowledge-proof
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:distributed-ledger-technology
implements:
  - urn:ngm:class:w3-c-did-specification
  - urn:ngm:class:open-id-connect
contrastsWith:
  - urn:ngm:class:centralised-identity
  - urn:ngm:class:federated-identity
bridgesTo:
  - urn:ngm:class:governance
  - urn:ngm:class:artificial-intelligence-ethics
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:sidetree-protocol
supports:
  - urn:ngm:class:data-protection
  - urn:ngm:class:regulatory-compliance
standardizedBy:
  - urn:ngm:class:w3-c
  - urn:ngm:class:iso-iec-24760
relatedTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:selective-disclosure
  - urn:ngm:class:hyperledger-indy
---

# Identity Management

Identity management refers to the systems, protocols, and policies enabling individuals and organisations to create, control, and verify digital identities. In decentralised contexts this encompasses DID architectures, verifiable credentials, and self-sovereign identity models that eliminate reliance on centralised authorities through cryptographic proofs and distributed ledger infrastructure.
