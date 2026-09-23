---
okf_version: "0.2"
type: Class
title: Off-Chain Scaling
resource: urn:ngm:class:off-chain-scaling
domain: blockchain
description: Off-chain scaling is a class of blockchain scalability techniques that move transaction execution and state off the main chain while retaining its security as a settlement and dispute-resolution layer. By processing many interactions outside the base layer and committing only summaries or final balances on-chain, it greatly increases throughput and lowers fees. Examples include payment and state c
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
relatedTo:
  - urn:ngm:class:payment-channel
  - urn:ngm:class:state-channel
---

# Off-Chain Scaling

Off-chain scaling is a class of blockchain scalability techniques that move transaction execution and state off the main chain while retaining its security as a settlement and dispute-resolution layer. By processing many interactions outside the base layer and committing only summaries or final balances on-chain, it greatly increases throughput and lowers fees. Examples include payment and state channels and various layer-2 constructions.
