---
okf_version: "0.2"
type: Class
title: Yield Farming
resource: urn:ngm:class:yield-farming
domain: blockchain
description: Yield farming is the practice of actively deploying digital assets into decentralised finance protocols—including liquidity pools, lending markets, and staking contracts—to earn token rewards, trading fees, or interest income, and optimising risk-adjusted returns by dynamically reallocating capital across multiple protocols. Participants typically receive liquidity provider (LP) tokens representin
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:de-fi
hasPart:
  - urn:ngm:class:liquidity-provision
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:staking
requires:
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
  - urn:ngm:class:cryptocurrency-wallet
enables:
  - urn:ngm:class:passive-income
  - urn:ngm:class:protocol-governance
  - urn:ngm:class:liquidity-bootstrapping
dependsOn:
  - urn:ngm:class:oracle
  - urn:ngm:class:decentralised-exchange
  - urn:ngm:class:lending-protocol
contrastsWith:
  - urn:ngm:class:centralised-finance
  - urn:ngm:class:mining
  - urn:ngm:class:hodling
bridgesTo:
  - urn:ngm:class:algorithmic-trading
  - urn:ngm:class:risk-management
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:governance-token
  - urn:ngm:class:token-emission
  - urn:ngm:class:yield-aggregator
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:annual-percentage-yield
  - urn:ngm:class:total-value-locked
  - urn:ngm:class:flash-loan
---

# Yield Farming

Yield farming is the practice of actively deploying digital assets into decentralised finance protocols—including liquidity pools, lending markets, and staking contracts—to earn token rewards, trading fees, or interest income, and optimising risk-adjusted returns by dynamically reallocating capital across multiple protocols. Participants typically receive liquidity provider (LP) tokens representing their proportional pool share, which can themselves be staked or deposited into yield aggregator contracts to compound rewards, creating layered risk and return exposure. The practice emerged prominently during the 2020 DeFi Summer as protocols adopted token-emission incentive models to bootstrap liquidity and governance participation. Yield farming strategies are sensitive to smart contract risk, impermanent loss, reward token price volatility, oracle manipulation, and evolving regulatory classification of token distributions.
