---
okf_version: "0.2"
type: Class
title: Liquid Proof of Stake
resource: urn:ngm:class:liquid-proof-of-stake
domain: blockchain
description: A Proof of Stake consensus variant that decouples staking participation from token illiquidity by allowing holders to delegate validation rights to elected validators (bakers) while retaining full ownership and transferability of their tokens. Pioneered by Tezos, it combines on-chain governance with delegated staking, enabling small token holders to participate in consensus rewards without running
maturity: established
quality: 0
is-a:
  - urn:ngm:class:bc-protocol-and-consensus
  - urn:ngm:class:proof-of-stake
hasPart:
  - urn:ngm:class:delegation
requires:
  - urn:ngm:class:validator-node
  - urn:ngm:class:epoch
enables:
  - urn:ngm:class:tokenomics-governance
  - urn:ngm:class:dao
  - urn:ngm:class:on-chain-governance
  - urn:ngm:class:staking-reward
dependsOn:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:blockchain-governance
  - urn:ngm:class:smart-contract
implements:
  - urn:ngm:class:byzantine-fault-tolerance
  - urn:ngm:class:slashing
contrastsWith:
  - urn:ngm:class:proof-of-work
  - urn:ngm:class:delegated-proof-of-stake
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:governance
uses:
  - urn:ngm:class:token-economics
  - urn:ngm:class:validator-set
  - urn:ngm:class:cryptographic-signature
relatedTo:
  - urn:ngm:class:proof-of-stake-sustainability
  - urn:ngm:class:governance-token
  - urn:ngm:class:tezos
  - urn:ngm:class:liquid-staking
---

# Liquid Proof of Stake

A Proof of Stake consensus variant that decouples staking participation from token illiquidity by allowing holders to delegate validation rights to elected validators (bakers) while retaining full ownership and transferability of their tokens. Pioneered by Tezos, it combines on-chain governance with delegated staking, enabling small token holders to participate in consensus rewards without running validator infrastructure.
