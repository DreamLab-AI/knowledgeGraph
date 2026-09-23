---
okf_version: "0.2"
type: Class
title: Fixed Supply Token
resource: urn:ngm:class:fixed-supply-token
domain: blockchain
description: "A Fixed Supply Token is a fungible blockchain token whose total issuance is capped at a hard-coded maximum that the protocol cannot exceed, regardless of future governance decisions. Distribution of the supply over time is governed by a predetermined emission schedule, and no additional tokens can be minted once the cap is reached, conferring deflationary scarcity properties analogous to precious "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:fungible-token
hasPart:
  - urn:ngm:class:emission-schedule
  - urn:ngm:class:total-supply
enables:
  - urn:ngm:class:burning-mechanism
contrastsWith:
  - urn:ngm:class:inflationary-token
  - urn:ngm:class:deflationary-token
uses:
  - urn:ngm:class:blockchain-protocol
relatedTo:
  - urn:ngm:class:circulating-supply
  - urn:ngm:class:halving
  - urn:ngm:class:market-capitalization
  - urn:ngm:class:tokenomics
  - urn:ngm:class:token-economics
---

# Fixed Supply Token

A Fixed Supply Token is a fungible blockchain token whose total issuance is capped at a hard-coded maximum that the protocol cannot exceed, regardless of future governance decisions. Distribution of the supply over time is governed by a predetermined emission schedule, and no additional tokens can be minted once the cap is reached, conferring deflationary scarcity properties analogous to precious metals.
