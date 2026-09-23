---
okf_version: "0.2"
type: Class
title: Bitstring Status List
resource: urn:ngm:class:bitstring-status-list
domain: governance
description: Bitstring Status List is a W3C specification for expressing the revocation or suspension status of Verifiable Credentials through a compressed, publicly-hosted bitstring in which each credential is assigned a position index; setting that bit to 1 indicates revocation without disclosing which specific credential holder triggered the change. The mechanism is privacy-preserving because verifiers obse
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:revocation-mechanism
enables:
  - urn:ngm:class:credential-verification
uses:
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:cryptographic-hash
standardizedBy:
  - urn:ngm:class:verifiable-credential-standard
relatedTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:revocation-registry
---

# Bitstring Status List

Bitstring Status List is a W3C specification for expressing the revocation or suspension status of Verifiable Credentials through a compressed, publicly-hosted bitstring in which each credential is assigned a position index; setting that bit to 1 indicates revocation without disclosing which specific credential holder triggered the change. The mechanism is privacy-preserving because verifiers observe only a large compressed list, not individual credential identifiers. It supersedes the earlier Credential Status List 2021 specification and is designed to be bandwidth-efficient and herd-privacy-compatible.
