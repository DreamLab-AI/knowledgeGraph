---
okf_version: "0.2"
type: Class
title: Burn-and-Mint Bridge
resource: urn:ngm:class:burn-and-mint-bridge
domain: blockchain
description: A Burn-and-Mint Bridge is a cross-chain asset transfer mechanism in which tokens are irreversibly destroyed (burned) on the source blockchain and an equivalent quantity of canonical tokens is newly created (minted) on the destination blockchain, ensuring that the total circulating supply across chains remains constant. This contrasts with lock-and-mint approaches by eliminating custodial reserves,
maturity: emerging
quality: 0.8
is-a:
  - urn:ngm:class:cross-chain-bridge
enables:
  - urn:ngm:class:cross-chain-asset-transfer
  - urn:ngm:class:blockchain-interoperability
contrastsWith:
  - urn:ngm:class:lock-and-mint-bridge
uses:
  - urn:ngm:class:cross-chain-messaging
  - urn:ngm:class:cryptographic-proof
relatedTo:
  - urn:ngm:class:tokenomics
---

# Burn-and-Mint Bridge

A Burn-and-Mint Bridge is a cross-chain asset transfer mechanism in which tokens are irreversibly destroyed (burned) on the source blockchain and an equivalent quantity of canonical tokens is newly created (minted) on the destination blockchain, ensuring that the total circulating supply across chains remains constant. This contrasts with lock-and-mint approaches by eliminating custodial reserves, instead relying on protocol-level guarantees and verifiable burn proofs to authorise minting on the receiving chain.
