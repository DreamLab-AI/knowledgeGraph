---
okf_version: "0.2"
type: Class
title: Compound
resource: urn:ngm:class:compound
domain: blockchain
description: "Compound is an algorithmic, autonomous interest-rate protocol built on Ethereum that enables users to supply crypto assets to liquidity pools and earn continuously accruing interest, or borrow assets against over-collateralised positions at algorithmically determined rates. Interest rates adjust dynamically based on the utilisation ratio of each asset pool, eliminating the need for bilateral loan "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:bc-defi-and-economics
hasPart:
  - urn:ngm:class:compound-governor-bravo
  - urn:ngm:class:interest-rate-model
  - urn:ngm:class:ctoken
requires:
  - urn:ngm:class:over-collateralisation
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:oracle
enables:
  - urn:ngm:class:digital-asset-lending
  - urn:ngm:class:yield-farming
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:collateralised-borrowing
dependsOn:
  - urn:ngm:class:price-oracle
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
contrastsWith:
  - urn:ngm:class:maker-dao
  - urn:ngm:class:aave
  - urn:ngm:class:uniswap
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:algorithmic-market-design
uses:
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:governance-token
  - urn:ngm:class:ethereum
  - urn:ngm:class:erc-20-token-standard
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:total-value-locked
  - urn:ngm:class:de-fi
  - urn:ngm:class:liquidation
  - urn:ngm:class:collateral-factor
  - urn:ngm:class:autonomous-market-operations
---

# Compound

Compound is an algorithmic, autonomous interest-rate protocol built on Ethereum that enables users to supply crypto assets to liquidity pools and earn continuously accruing interest, or borrow assets against over-collateralised positions at algorithmically determined rates. Interest rates adjust dynamically based on the utilisation ratio of each asset pool, eliminating the need for bilateral loan negotiation or centralised intermediaries. Supplied assets are represented as cTokens — ERC-20 tokens whose exchange rate appreciates with every block as interest accrues — which can themselves be used as collateral or freely traded. Governance of protocol parameters is conducted on-chain through the COMP token and the Compound Governor Bravo smart-contract system, making it one of the earliest fully decentralised autonomous lending protocols in the DeFi ecosystem.
