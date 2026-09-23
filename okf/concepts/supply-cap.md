---
okf_version: "0.2"
type: Class
title: Supply Cap
resource: urn:ngm:class:supply-cap
domain: blockchain
description: A Supply Cap is a hard-coded or governance-determined upper bound on the total number of tokens or coins that will ever be issued by a blockchain protocol, creating a form of programmatic scarcity that underpins deflationary monetary policy. Bitcoin's 21 million coin cap is the canonical example, encoded in the protocol's halvening schedule and providing a predictable issuance curve. Supply caps d
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-defi-and-economics
  - urn:ngm:class:blockchain-entity
  - urn:ngm:class:economic-mechanism
requires:
  - urn:ngm:class:block-reward
  - urn:ngm:class:consensus-algorithm
enables:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-standard
  - urn:ngm:class:bitcoin-proof-of-work-protocol-value-proposition
dependsOn:
  - urn:ngm:class:blockchain-protocol
contrastsWith:
  - urn:ngm:class:fee-market
relatedTo:
  - urn:ngm:class:circulating-supply
  - urn:ngm:class:tokenomics
  - urn:ngm:class:token-economics
  - urn:ngm:class:cryptocurrency
---

# Supply Cap

A Supply Cap is a hard-coded or governance-determined upper bound on the total number of tokens or coins that will ever be issued by a blockchain protocol, creating a form of programmatic scarcity that underpins deflationary monetary policy. Bitcoin's 21 million coin cap is the canonical example, encoded in the protocol's halvening schedule and providing a predictable issuance curve. Supply caps differentiate blockchain-native assets from fiat currencies and influence long-run security models, since block rewards approach zero as the cap is neared and transaction fees must compensate.
