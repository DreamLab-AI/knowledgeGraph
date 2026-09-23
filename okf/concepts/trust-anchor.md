---
okf_version: "0.2"
type: Class
title: Trust Anchor
resource: urn:ngm:class:trust-anchor
domain: security
description: A trust anchor is an authoritative entity or cryptographic artifact that serves as the root of a chain of trust, providing the foundational level of trust from which all subsequent trust assertions in a system are derived. In public key infrastructure (PKI), the trust anchor is typically a root certificate authority (CA) whose self-signed certificate is pre-installed in operating systems and brows
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:trust-framework
requires:
  - urn:ngm:class:key-management
  - urn:ngm:class:hardware-security-module
enables:
  - urn:ngm:class:decentralized-identity
  - urn:ngm:class:identity-federation
  - urn:ngm:class:trust
  - urn:ngm:class:x-509-certificate
  - urn:ngm:class:secure-communication
contrastsWith:
  - urn:ngm:class:web-of-trust
bridgesTo:
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:cryptographic-keys
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:x-509-certificate
supports:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:credential-verification
relatedTo:
  - urn:ngm:class:certificate-authority
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:trust-framework-policy
  - urn:ngm:class:cryptographic-verification
  - urn:ngm:class:cryptographic-infrastructure
  - urn:ngm:class:root-certificate
  - urn:ngm:class:certificate-transparency
---

# Trust Anchor

A trust anchor is an authoritative entity or cryptographic artifact that serves as the root of a chain of trust, providing the foundational level of trust from which all subsequent trust assertions in a system are derived. In public key infrastructure (PKI), the trust anchor is typically a root certificate authority (CA) whose self-signed certificate is pre-installed in operating systems and browsers as inherently trusted, enabling the validation of all subordinate certificate chains. In decentralised identity systems, trust anchors may be governance-designated issuers, DID-based root entities, or on-chain registries whose cryptographic material is considered authoritative for a particular trust domain. Trust anchors define the scope and boundaries of a trust framework and are the entities that must be trusted by all relying parties in the system.
