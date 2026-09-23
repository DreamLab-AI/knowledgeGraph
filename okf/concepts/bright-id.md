---
okf_version: "0.2"
type: Class
title: BrightID
resource: urn:ngm:class:bright-id
domain: blockchain
description: BrightID is a decentralised social identity network that establishes the uniqueness of human participants by analysing the topology of a peer-to-peer social connection graph, without collecting personally identifying information. Each user creates an account identified solely by a public key, then builds mutual verification links with trusted contacts; graph-analysis algorithms infer whether an ac
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:digital-identity
requires:
  - urn:ngm:class:social-network-graph
  - urn:ngm:class:peer-to-peer-network
  - urn:ngm:class:public-key-cryptography
  - urn:ngm:class:social-network-graph
enables:
  - urn:ngm:class:sybil-resistance
  - urn:ngm:class:quadratic-voting
  - urn:ngm:class:universal-basic-income
  - urn:ngm:class:decentralised-governance
contrastsWith:
  - urn:ngm:class:sybil-attack
  - urn:ngm:class:centralised-identity
  - urn:ngm:class:biometric-identity
bridgesTo:
  - urn:ngm:class:reputation-system
  - urn:ngm:class:federated-learning
  - urn:ngm:class:privacy-preserving-computation
uses:
  - urn:ngm:class:graph-analytics
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:decentralised-application
relatedTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:proof-of-personhood
  - urn:ngm:class:web-of-trust
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:token-distribution
  - urn:ngm:class:airdrop
---

# BrightID

BrightID is a decentralised social identity network that establishes the uniqueness of human participants by analysing the topology of a peer-to-peer social connection graph, without collecting personally identifying information. Each user creates an account identified solely by a public key, then builds mutual verification links with trusted contacts; graph-analysis algorithms infer whether an account corresponds to a distinct human rather than a bot or duplicate. The system provides applications with a binary or graded uniqueness signal usable for Sybil-resistant resource allocation, quadratic voting, and universal basic income distribution without requiring biometric data or a central identity authority.
