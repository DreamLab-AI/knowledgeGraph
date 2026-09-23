---
okf_version: "0.2"
type: Class
title: Blockchain Identity
resource: urn:ngm:class:blockchain-identity
domain: security
description: Blockchain Identity is an approach to digital identity in which identifiers, credentials and attestations are anchored to a distributed ledger rather than a single central authority. It gives users cryptographic control over their identity through key pairs, enables verifiable claims that any party can check against on-chain or anchored data, and underpins self-sovereign identity models. By decent
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:decentralized-identity
hasPart:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:verifiable-credentials
requires:
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:single-sign-on
dependsOn:
  - urn:ngm:class:did
contrastsWith:
  - urn:ngm:class:identity-management
bridgesTo:
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:authentication
  - urn:ngm:class:access-control
  - urn:ngm:class:privacy
partOf:
  - urn:ngm:class:decentralized-identity
relatedTo:
  - urn:ngm:class:digital-identity
---

# Blockchain Identity

Blockchain Identity is an approach to digital identity in which identifiers, credentials and attestations are anchored to a distributed ledger rather than a single central authority. It gives users cryptographic control over their identity through key pairs, enables verifiable claims that any party can check against on-chain or anchored data, and underpins self-sovereign identity models. By decentralising the registry of identifiers, it reduces reliance on intermediaries and supports portable, tamper-evident identity across services.
