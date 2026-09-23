---
okf_version: "0.2"
type: Class
title: Security Token
resource: urn:ngm:class:security-token
domain: blockchain
description: A blockchain-based token representing complete or fractional ownership interests in real-world assets or entities, subject to securities regulations that may restrict transfer based on investor identity, jurisdiction, or asset category. Security tokens provide holders with entitlements such as dividends, profit-sharing, or voting rights, and are typically issued through security token offerings (S
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:fungible-token
hasPart:
  - urn:ngm:class:security-token-offering
  - urn:ngm:class:transfer-restriction
requires:
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:regulatory-approval
  - urn:ngm:class:accredited-investor-verification
enables:
  - urn:ngm:class:fractional-ownership
dependsOn:
  - urn:ngm:class:blockchain
  - urn:ngm:class:cryptographic-infrastructure
contrastsWith:
  - urn:ngm:class:non-fungible-token-nft
  - urn:ngm:class:semi-fungible-token
  - urn:ngm:class:utility-token
bridgesTo:
  - urn:ngm:class:traditional-securities
  - urn:ngm:class:real-world-asset
uses:
  - urn:ngm:class:erc1400-standard
  - urn:ngm:class:smart-contract
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:erc-3643
standardizedBy:
  - urn:ngm:class:securities-exchange-commission
  - urn:ngm:class:regulation-d
  - urn:ngm:class:mifid-ii
partOf:
  - urn:ngm:class:digital-asset-trading
relatedTo:
  - urn:ngm:class:governance-token
  - urn:ngm:class:token-economics
  - urn:ngm:class:de-fi
---

# Security Token

A blockchain-based token representing complete or fractional ownership interests in real-world assets or entities, subject to securities regulations that may restrict transfer based on investor identity, jurisdiction, or asset category. Security tokens provide holders with entitlements such as dividends, profit-sharing, or voting rights, and are typically issued through security token offerings (STOs) under regulatory compliance frameworks.
