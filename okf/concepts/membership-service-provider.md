---
okf_version: "0.2"
type: Class
title: Membership Service Provider
resource: urn:ngm:class:membership-service-provider
domain: blockchain
description: A Membership Service Provider (MSP) is the component of a permissioned blockchain that abstracts the cryptographic identity material and rules used to authenticate and authorise participants. It defines which certificate authorities are trusted, which roles members hold, and how digital certificates map to organisational identities used in endorsement and access policies. The MSP turns raw public-
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-management
hasPart:
  - urn:ngm:class:digital-certificate
requires:
  - urn:ngm:class:certificate-authority
enables:
  - urn:ngm:class:permissioned-blockchain
dependsOn:
  - urn:ngm:class:certificate-authority
implements:
  - urn:ngm:class:identity-management
contrastsWith:
  - urn:ngm:class:authentication
bridgesTo:
  - urn:ngm:class:trust-infrastructure
uses:
  - urn:ngm:class:cryptography
supports:
  - urn:ngm:class:hyperledger-fabric
standardizedBy:
  - urn:ngm:class:hyperledger-fabric
partOf:
  - urn:ngm:class:permissioned-blockchain
relatedTo:
  - urn:ngm:class:authentication
  - urn:ngm:class:consensus-mechanism
---

# Membership Service Provider

A Membership Service Provider (MSP) is the component of a permissioned blockchain that abstracts the cryptographic identity material and rules used to authenticate and authorise participants. It defines which certificate authorities are trusted, which roles members hold, and how digital certificates map to organisational identities used in endorsement and access policies. The MSP turns raw public-key infrastructure into the network's notion of who is allowed to act and in what capacity.
