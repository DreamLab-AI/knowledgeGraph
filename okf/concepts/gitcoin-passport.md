---
okf_version: "0.2"
type: Class
title: Gitcoin Passport
resource: urn:ngm:class:gitcoin-passport
domain: blockchain
description: "Gitcoin Passport is a decentralised identity aggregation and sybil-resistance protocol that collects verifiable credential stamps from diverse identity providers—including Web2 social platforms, biometric services, on-chain activity records, and professional attestation networks—into a composable trust score attesting to the humanness and uniqueness of a wallet address. The system is built on W3C "
maturity: established
quality: 0.73
is-a:
  - urn:ngm:class:decentralized-identity-did
hasPart:
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:did-document
  - urn:ngm:class:trust-score-metric
  - urn:ngm:class:trust-score-metric
requires:
  - urn:ngm:class:ceramic-network
  - urn:ngm:class:decentralized-identifier
  - urn:ngm:class:digital-wallet
enables:
  - urn:ngm:class:quadratic-funding
  - urn:ngm:class:public-goods-funding
  - urn:ngm:class:decentralized-governance
  - urn:ngm:class:token-airdrop
dependsOn:
  - urn:ngm:class:ethereum
  - urn:ngm:class:w3-c-did-specification
implements:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:identity-aggregation
contrastsWith:
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:centralised-identity
bridgesTo:
  - urn:ngm:class:content-authenticity
  - urn:ngm:class:federated-identity
  - urn:ngm:class:content-authenticity
uses:
  - urn:ngm:class:proof-of-humanity
  - urn:ngm:class:ens
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:bright-id
  - urn:ngm:class:ens
partOf:
  - urn:ngm:class:gitcoin
relatedTo:
  - urn:ngm:class:identity-verification
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:reputation-system
---

# Gitcoin Passport

Gitcoin Passport is a decentralised identity aggregation and sybil-resistance protocol that collects verifiable credential stamps from diverse identity providers—including Web2 social platforms, biometric services, on-chain activity records, and professional attestation networks—into a composable trust score attesting to the humanness and uniqueness of a wallet address. The system is built on W3C Decentralised Identifier and Verifiable Credential standards, storing credentials on the Ceramic Network to maintain user sovereignty over personal data without centralised custody. Its primary use case is protecting quadratic funding rounds and other public-goods allocation mechanisms from sybil attacks, where a single actor creates many accounts to multiply their influence. The stamp-based, configurable-weight architecture allows applications to set their own scoring thresholds according to their specific risk tolerance, and the open API enables Gitcoin Passport to function as a composable trust primitive across the broader Web3 ecosystem.
