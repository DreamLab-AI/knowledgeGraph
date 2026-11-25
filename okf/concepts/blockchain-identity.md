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
  - urn:ngm:class:decentralised-identity
hasPart:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credentials
requires:
  - urn:ngm:class:public-key-infrastructure
  - urn:ngm:class:distributed-ledger
enables:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:single-sign-on
dependsOn:
  - urn:ngm:class:decentralised-identifier
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
  - urn:ngm:class:decentralised-identity
relatedTo:
  - urn:ngm:class:digital-identity
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Blockchain Identity

Blockchain Identity is an approach to digital identity in which identifiers, credentials and attestations are anchored to a distributed ledger rather than a single central authority. It gives users cryptographic control over their identity through key pairs, enables verifiable claims that any party can check against on-chain or anchored data, and underpins self-sovereign identity models. By decentralising the registry of identifiers, it reduces reliance on intermediaries and supports portable, tamper-evident identity across services.
