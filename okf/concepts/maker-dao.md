---
okf_version: "0.2"
type: Class
title: MakerDAO
resource: urn:ngm:class:maker-dao
domain: blockchain
description: MakerDAO is a decentralised autonomous organisation (DAO) on the Ethereum blockchain that governs the Maker Protocol — a system of smart contracts enabling users to generate the DAI stablecoin by locking over-collateralised assets in Vaults (formerly Collateralised Debt Positions). Governance decisions covering collateral onboarding, stability fees, liquidation ratios, and debt ceilings are enacte
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-defi-and-economics
hasPart:
  - urn:ngm:class:dai
  - urn:ngm:class:peg-stability-module
  - urn:ngm:class:mkr-token
  - urn:ngm:class:dai
  - urn:ngm:class:subdao
requires:
  - urn:ngm:class:over-collateralisation
  - urn:ngm:class:oracle-network
  - urn:ngm:class:on-chain-governance
enables:
  - urn:ngm:class:stablecoin
  - urn:ngm:class:decentralized-finance-de-fi
  - urn:ngm:class:real-world-asset-tokenisation
  - urn:ngm:class:algorithmic-stablecoin
contrastsWith:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:fiat-backed-stablecoin
bridgesTo:
  - urn:ngm:class:traditional-finance
  - urn:ngm:class:asset-tokenisation
uses:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:governance-token
  - urn:ngm:class:ethereum
  - urn:ngm:class:dutch-auction
  - urn:ngm:class:collateralised-debt-position
relatedTo:
  - urn:ngm:class:dao
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:tokenomics
---

# MakerDAO

MakerDAO is a decentralised autonomous organisation (DAO) on the Ethereum blockchain that governs the Maker Protocol — a system of smart contracts enabling users to generate the DAI stablecoin by locking over-collateralised assets in Vaults (formerly Collateralised Debt Positions). Governance decisions covering collateral onboarding, stability fees, liquidation ratios, and debt ceilings are enacted by MKR token holders through on-chain Executive Votes. As one of the earliest large-scale deployments of DAO governance and algorithmic stablecoin issuance, MakerDAO is a foundational pillar of decentralised finance (DeFi) and continues to evolve through its Endgame restructuring into a constellation of SubDAOs.
