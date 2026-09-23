---
okf_version: "0.2"
type: Class
title: Real-World Asset Tokenisation
resource: urn:ngm:class:real-world-asset-tokenisation
domain: blockchain
description: "Real-world asset tokenisation (RWA) is the process of issuing blockchain-based digital tokens that represent legally enforceable ownership or economic claims over physical or financial assets — including real estate, government bonds, private credit, commodities, and infrastructure. Ownership rights, transfer restrictions, and distribution logic are encoded in smart contracts, enabling fractional "
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-token-and-asset
hasPart:
  - urn:ngm:class:token-issuance
  - urn:ngm:class:redemption-mechanism
  - urn:ngm:class:transfer-restriction-mechanism
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:oracle-network
  - urn:ngm:class:special-purpose-vehicle
  - urn:ngm:class:kyc-aml-compliance
  - urn:ngm:class:digital-identity
enables:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:de-fi
  - urn:ngm:class:fractional-ownership
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:on-chain-collateral
contrastsWith:
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:cryptocurrency
bridgesTo:
  - urn:ngm:class:capital-markets
  - urn:ngm:class:asset-management
  - urn:ngm:class:trade-finance
uses:
  - urn:ngm:class:erc-20-token-standard
  - urn:ngm:class:erc-3643
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:zero-knowledge-proof
standardizedBy:
  - urn:ngm:class:financial-stability-board
  - urn:ngm:class:iosco
  - urn:ngm:class:bis-innovation-hub
relatedTo:
  - urn:ngm:class:security-token
  - urn:ngm:class:digital-asset
  - urn:ngm:class:security-token-offering
  - urn:ngm:class:stablecoin
  - urn:ngm:class:tokenised-fund
---

# Real-World Asset Tokenisation

Real-world asset tokenisation (RWA) is the process of issuing blockchain-based digital tokens that represent legally enforceable ownership or economic claims over physical or financial assets — including real estate, government bonds, private credit, commodities, and infrastructure. Ownership rights, transfer restrictions, and distribution logic are encoded in smart contracts, enabling fractional ownership and 24/7 secondary-market liquidity. The process requires a legal wrapper such as a special purpose vehicle or trust, oracle infrastructure to price off-chain assets on-chain, and compliance with applicable securities regulation in each issuing jurisdiction.
