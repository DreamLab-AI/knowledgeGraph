---
okf_version: "0.2"
type: Class
title: Curve Finance
resource: urn:ngm:class:curve-finance
domain: blockchain
description: "Curve Finance is a decentralised exchange protocol operating across Ethereum and multiple EVM-compatible chains, specialising in low-slippage swaps between assets expected to maintain near-parity in value, such as stablecoins and liquid staking tokens. It employs a hybrid invariant automated market maker that blends constant-sum and constant-product behaviour, concentrating liquidity near the peg "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:de-fi
hasPart:
  - urn:ngm:class:vote-escrow
  - urn:ngm:class:liquidity-pool
  - urn:ngm:class:curve-dao-token
  - urn:ngm:class:vote-escrow
requires:
  - urn:ngm:class:ethereum
  - urn:ngm:class:smart-contract
  - urn:ngm:class:stablecoin
enables:
  - urn:ngm:class:yield-farming
  - urn:ngm:class:flash-loan
dependsOn:
  - urn:ngm:class:evm-compatible-blockchain
  - urn:ngm:class:oracle
implements:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:concentrated-liquidity
contrastsWith:
  - urn:ngm:class:uniswap
  - urn:ngm:class:balancer
  - urn:ngm:class:centralised-exchange
bridgesTo:
  - urn:ngm:class:mechanism-design
  - urn:ngm:class:game-theory
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:decentralised-autonomous-organisation
partOf:
  - urn:ngm:class:decentralised-finance-domain
relatedTo:
  - urn:ngm:class:impermanent-loss
  - urn:ngm:class:convex-finance
  - urn:ngm:class:defi-composability
  - urn:ngm:class:token-incentive-design
---

# Curve Finance

Curve Finance is a decentralised exchange protocol operating across Ethereum and multiple EVM-compatible chains, specialising in low-slippage swaps between assets expected to maintain near-parity in value, such as stablecoins and liquid staking tokens. It employs a hybrid invariant automated market maker that blends constant-sum and constant-product behaviour, concentrating liquidity near the peg to dramatically reduce trading costs for correlated assets. The protocol's CRV governance token is distributed to liquidity providers and can be locked in a vote-escrow mechanism (veCRV) that grants voting power over pool incentive allocation, creating a flywheel dynamic known as the Curve Wars. Curve v2 extended the model to volatile asset pairs using a price-repegging invariant, broadening the protocol's scope from stablecoin-only pools to general concentrated-liquidity trading.
