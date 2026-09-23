---
okf_version: "0.2"
type: Class
title: Vote-Escrow Model
resource: urn:ngm:class:vote-escrow-model
domain: blockchain
description: The vote-escrow model is a DeFi tokenomics mechanism in which holders of a governance token lock their tokens for a chosen duration — typically up to four years — in exchange for a non-transferable vote-escrow token (such as veCRV in Curve Finance) that grants proportional governance voting power and fee-sharing rights, with voting weight decaying linearly as the lock approaches expiry, aligning t
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:tokenomics
enables:
  - urn:ngm:class:liquidity-mining
  - urn:ngm:class:yield-farming
uses:
  - urn:ngm:class:governance-token
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:dao-governance
relatedTo:
  - urn:ngm:class:convex-finance
  - urn:ngm:class:token-economics
  - urn:ngm:class:tokenomics-governance
---

# Vote-Escrow Model

The vote-escrow model is a DeFi tokenomics mechanism in which holders of a governance token lock their tokens for a chosen duration — typically up to four years — in exchange for a non-transferable vote-escrow token (such as veCRV in Curve Finance) that grants proportional governance voting power and fee-sharing rights, with voting weight decaying linearly as the lock approaches expiry, aligning token holder incentives with long-term protocol health by penalising short-term speculation. The model was pioneered by Curve Finance and subsequently adopted across dozens of DeFi protocols, spawning meta-governance layers such as Convex Finance that aggregate and direct veToken voting power.
