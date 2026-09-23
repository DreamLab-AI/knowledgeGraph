---
okf_version: "0.2"
type: Class
title: Aave
resource: urn:ngm:class:aave
domain: blockchain
description: Aave is a decentralised, non-custodial liquidity protocol deployed on Ethereum and multiple EVM-compatible networks that allows users to supply crypto assets into pooled reserves to earn algorithmically set interest, and to borrow against over-collateralised positions at variable or stable rates. Pioneered by Stani Kulechov and launched as ETHLend in 2017 before rebranding in 2020, it introduced t
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi
requires:
  - urn:ngm:class:over-collateralisation
  - urn:ngm:class:oracle
  - urn:ngm:class:wallet
  - urn:ngm:class:wallet
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:flash-loan
  - urn:ngm:class:collateralised-borrowing
  - urn:ngm:class:self-liquidation
  - urn:ngm:class:on-chain-arbitrage
implements:
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:algorithmic-interest-rate
  - urn:ngm:class:atoken
contrastsWith:
  - urn:ngm:class:compound
  - urn:ngm:class:maker-dao
  - urn:ngm:class:traditional-finance
  - urn:ngm:class:compound
bridgesTo:
  - urn:ngm:class:risk-modelling
  - urn:ngm:class:ai-driven-trading
uses:
  - urn:ngm:class:smart-contracts
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:ethereum
  - urn:ngm:class:evm
  - urn:ngm:class:chainlink
relatedTo:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:token-governance
  - urn:ngm:class:liquidation-mechanism
  - urn:ngm:class:cross-chain-bridge
  - urn:ngm:class:gho-stablecoin
---

# Aave

Aave is a decentralised, non-custodial liquidity protocol deployed on Ethereum and multiple EVM-compatible networks that allows users to supply crypto assets into pooled reserves to earn algorithmically set interest, and to borrow against over-collateralised positions at variable or stable rates. Pioneered by Stani Kulechov and launched as ETHLend in 2017 before rebranding in 2020, it introduced the flash loan — an uncollateralised loan that must be atomically repaid within a single transaction block — as a foundational DeFi primitive. Governance is exercised by AAVE token holders who vote on Aave Improvement Proposals controlling risk parameters, supported asset listings, protocol upgrades, and treasury allocations.
