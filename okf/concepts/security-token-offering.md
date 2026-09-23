---
okf_version: "0.2"
type: Class
title: Security Token Offering
resource: urn:ngm:class:security-token-offering
domain: finance
description: A Security Token Offering (STO) is a regulated capital-raising mechanism in which blockchain-based digital tokens representing ownership rights, equity interests, debt obligations, revenue participation, or other financial entitlements are issued and sold to investors in compliance with applicable securities law. STOs require issuers to satisfy jurisdictional regulatory frameworks — such as the SE
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
requires:
  - urn:ngm:class:financial-regulation
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:identity-verification
  - urn:ngm:class:kyc
  - urn:ngm:class:aml
  - urn:ngm:class:investor-accreditation
enables:
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:fractional-ownership
  - urn:ngm:class:secondary-market-integration
  - urn:ngm:class:programmable-compliance
  - urn:ngm:class:secondary-market-integration
contrastsWith:
  - urn:ngm:class:initial-coin-offering
  - urn:ngm:class:initial-public-offering
  - urn:ngm:class:initial-dex-offering
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:dao
  - urn:ngm:class:decentralised-autonomous-organisation
uses:
  - urn:ngm:class:security-token
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:digital-wallet
standardizedBy:
  - urn:ngm:class:erc-1400
  - urn:ngm:class:erc-3643
relatedTo:
  - urn:ngm:class:digital-asset
  - urn:ngm:class:de-fi
  - urn:ngm:class:capital-markets
  - urn:ngm:class:tokenomics
  - urn:ngm:class:de-fi
---

# Security Token Offering

A Security Token Offering (STO) is a regulated capital-raising mechanism in which blockchain-based digital tokens representing ownership rights, equity interests, debt obligations, revenue participation, or other financial entitlements are issued and sold to investors in compliance with applicable securities law. STOs require issuers to satisfy jurisdictional regulatory frameworks — such as the SEC's Regulation D or Regulation S exemptions in the United States, or MiFID II and EU prospectus rules in Europe — including investor accreditation verification, Know Your Customer and Anti-Money Laundering checks, and mandatory disclosure obligations. Unlike Initial Coin Offerings, which frequently issued utility tokens, STOs embed compliance logic directly into programmable smart contracts on distributed ledger platforms, automating transfer restrictions, cap-table management, and dividend or interest distributions. The STO model bridges traditional capital markets infrastructure with blockchain-based asset tokenisation, enabling fractional ownership of previously illiquid assets such as real estate, private equity, and infrastructure funds.
