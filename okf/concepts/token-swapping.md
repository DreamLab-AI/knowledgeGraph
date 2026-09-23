---
okf_version: "0.2"
type: Class
title: Token Swapping
resource: urn:ngm:class:token-swapping
domain: blockchain
description: "Token swapping is the on-chain exchange of one cryptocurrency or digital token for another without an intermediary custodian, executed atomically within a single transaction through smart contracts. The mechanism is implemented via automated market makers (AMMs), which price assets algorithmically using constant-function market-making formulas against liquidity pools, or via atomic swap protocols "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:decentralized-finance-de-fi
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:smart-contract
  - urn:ngm:class:atomic-swap
relatedTo:
  - urn:ngm:class:decentralized-exchange-dex
  - urn:ngm:class:permissionless-trading
  - urn:ngm:class:uniswap
---

# Token Swapping

Token swapping is the on-chain exchange of one cryptocurrency or digital token for another without an intermediary custodian, executed atomically within a single transaction through smart contracts. The mechanism is implemented via automated market makers (AMMs), which price assets algorithmically using constant-function market-making formulas against liquidity pools, or via atomic swap protocols using hash time-locked contracts (HTLCs) that enable trustless cross-chain exchanges. Token swapping is the primary interaction primitive of decentralised exchanges and a building block for complex DeFi strategies.
