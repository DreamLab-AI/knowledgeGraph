---
okf_version: "0.2"
type: Class
title: Mint-Burn Mechanism
resource: urn:ngm:class:mint-burn-mechanism
domain: blockchain
description: A token supply-management pattern in which new units are created (minted) when value enters a system and permanently destroyed (burned) when it leaves, keeping circulating supply in one-to-one correspondence with the assets, collateral, or claims backing it. Implemented as privileged mint and burn functions in a token's smart contract, the pattern underlies fiat-backed and algorithmic stablecoins,
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:tokenomics
enables:
  - urn:ngm:class:wrapped-token
  - urn:ngm:class:peg
uses:
  - urn:ngm:class:smart-contract
partOf:
  - urn:ngm:class:stable-coins
  - urn:ngm:class:synthetic-asset
relatedTo:
  - urn:ngm:class:token-standard
  - urn:ngm:class:token-bridge
  - urn:ngm:class:collateral
---

# Mint-Burn Mechanism

A token supply-management pattern in which new units are created (minted) when value enters a system and permanently destroyed (burned) when it leaves, keeping circulating supply in one-to-one correspondence with the assets, collateral, or claims backing it. Implemented as privileged mint and burn functions in a token's smart contract, the pattern underlies fiat-backed and algorithmic stablecoins, wrapped tokens that represent assets locked on another chain, synthetic assets minted against collateral, and cross-chain bridges that burn on the source chain and mint on the destination. Its integrity depends entirely on access control and honest accounting of the backing: compromised mint authority or unbacked minting is a recurring cause of catastrophic protocol failures.
