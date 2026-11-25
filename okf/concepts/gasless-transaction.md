---
okf_version: "0.2"
type: Class
title: Gasless Transaction
resource: urn:ngm:class:gasless-transaction
domain: blockchain
description: A Gasless Transaction is a blockchain transaction in which the end user does not directly pay the network's gas fee, because a relayer, paymaster, or sponsoring contract covers the cost on their behalf, typically in exchange for an off-chain signature authorising the action. It removes the requirement that a wallet hold the native gas token before it can transact, lowering the barrier to onboardin
maturity: emerging
quality: 0.55
is-a:
  - urn:ngm:class:account-abstraction
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Gasless Transaction

A Gasless Transaction is a blockchain transaction in which the end user does not directly pay the network's gas fee, because a relayer, paymaster, or sponsoring contract covers the cost on their behalf, typically in exchange for an off-chain signature authorising the action. It removes the requirement that a wallet hold the native gas token before it can transact, lowering the barrier to onboarding new users. Account abstraction standards such as ERC-4337 provide the infrastructure that makes gasless transactions practical at scale.
