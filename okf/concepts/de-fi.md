---
okf_version: "0.2"
type: Class
title: DeFi
resource: urn:ngm:class:de-fi
domain: blockchain
description: DeFi (Decentralised Finance) is the ecosystem of open, permissionless financial protocols and applications deployed as Smart Contracts on public blockchains — primarily Ethereum — that replicate and extend traditional financial services such as lending, borrowing, trading, yield generation, and derivatives without centralised intermediaries such as banks, brokers, or clearinghouses. Core DeFi prim
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:bc-defi-and-economics
hasPart:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:flash-loan
  - urn:ngm:class:yield-aggregator
requires:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:blockchain
  - urn:ngm:class:oracle
  - urn:ngm:class:wallet
  - urn:ngm:class:wallet
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:permissionless-lending
  - urn:ngm:class:on-chain-derivatives
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:gas-fee
contrastsWith:
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:traditional-finance
bridgesTo:
  - urn:ngm:class:algorithmic-trading
  - urn:ngm:class:digital-identity
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:stablecoin
  - urn:ngm:class:ethereum-smart-contract-platform-virtual-machine
  - urn:ngm:class:token-standard
relatedTo:
  - urn:ngm:class:dao-governance
  - urn:ngm:class:token-economics
  - urn:ngm:class:maximal-extractable-value
  - urn:ngm:class:cross-chain-bridge
---

# DeFi

DeFi (Decentralised Finance) is the ecosystem of open, permissionless financial protocols and applications deployed as Smart Contracts on public blockchains — primarily Ethereum — that replicate and extend traditional financial services such as lending, borrowing, trading, yield generation, and derivatives without centralised intermediaries such as banks, brokers, or clearinghouses. Core DeFi primitives include Automated Market Makers (AMMs), over-collateralised lending protocols, stablecoins, flash loans, and yield aggregators, all coordinated through token-based incentive mechanisms and governed by Decentralised Autonomous Organisations (DAOs). DeFi protocols are composable — outputs of one protocol become inputs to another, enabling complex financial strategies assembled from protocol primitives. The open, programmable architecture distinguishes DeFi from traditional finance and from centralised cryptocurrency exchanges, making it a distinct paradigm within the broader blockchain economy.
