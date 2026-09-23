---
okf_version: "0.2"
type: Class
title: Identity
resource: urn:ngm:class:identity
domain: security
description: Identity is the complete, verifiable representation of a principal — person, organisation, device, or agent — within a digital system, constituted by a set of attributes, credentials, and cryptographically anchored claims that distinguish that principal from all others. Digital identity underpins authentication, authorisation, and accountability across networked systems, and increasingly extends t
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:verifiable-credential-standard
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-standard
  - urn:ngm:class:verifiable-claim
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:cryptography
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:digital-signature
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:authorisation
  - urn:ngm:class:trust
  - urn:ngm:class:privacy
  - urn:ngm:class:accountability
dependsOn:
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:distributed-ledger
implements:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:federated-identity
contrastsWith:
  - urn:ngm:class:anonymity
  - urn:ngm:class:pseudonymity
bridgesTo:
  - urn:ngm:class:avatar
  - urn:ngm:class:ai-agent
standardizedBy:
  - urn:ngm:class:w3-c-did-core
  - urn:ngm:class:verifiable-credentials
relatedTo:
  - urn:ngm:class:identity-management
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:digital-twin
  - urn:ngm:class:reputation-system
  - urn:ngm:class:reputation-system
---

# Identity

Identity is the complete, verifiable representation of a principal — person, organisation, device, or agent — within a digital system, constituted by a set of attributes, credentials, and cryptographically anchored claims that distinguish that principal from all others. Digital identity underpins authentication, authorisation, and accountability across networked systems, and increasingly extends to self-sovereign, decentralised forms in which control of the identity record rests with the subject rather than a centralised authority. In spatial computing and metaverse contexts, identity further encompasses persistent avatars, reputational history, and cross-platform portability anchored to decentralised identifiers (DIDs). The coherent management of identity is the foundation upon which access control, trust hierarchies, and privacy-preserving interactions are built.
