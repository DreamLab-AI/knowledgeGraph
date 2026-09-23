---
okf_version: "0.2"
type: Class
title: RGB Protocol
resource: urn:ngm:class:rgb-protocol
domain: blockchain
description: RGB Protocol is a client-side validation smart-contract system built on Bitcoin and the Lightning Network that enables issuance, transfer, and programmable logic over tokenised assets (fungible and non-fungible) without placing contract state on the public blockchain. Contract state is stored in off-chain client-held directed acyclic graphs (DAGs), with only cryptographic commitments anchored to B
maturity: emerging
quality: 0.74
is-a:
  - urn:ngm:class:blockchain-protocol
requires:
  - urn:ngm:class:bitcoin-transaction
  - urn:ngm:class:taproot
  - urn:ngm:class:merkle-tree
enables:
  - urn:ngm:class:asset-tokenisation
  - urn:ngm:class:smart-contract
  - urn:ngm:class:layer-2-scaling
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:privacy-preserving-computation
implements:
  - urn:ngm:class:client-side-validation
  - urn:ngm:class:deterministic-bitcoin-commitment
contrastsWith:
  - urn:ngm:class:taproot-assets
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
  - urn:ngm:class:ordinals
  - urn:ngm:class:runes-protocol
  - urn:ngm:class:ethereum-smart-contract-platform-smart-contracts
  - urn:ngm:class:ordinals
bridgesTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:digital-asset-management
uses:
  - urn:ngm:class:bitcoin-proof-of-work-protocol-network
  - urn:ngm:class:lightning-network
  - urn:ngm:class:utxo-model
  - urn:ngm:class:cryptographic-commitment
  - urn:ngm:class:single-use-seals
  - urn:ngm:class:single-use-seals
  - urn:ngm:class:alu-vm
relatedTo:
  - urn:ngm:class:rgb-and-client-side-validation
  - urn:ngm:class:lnp-bp-standards-association
  - urn:ngm:class:zero-knowledge-proof
  - urn:ngm:class:coloured-coins
  - urn:ngm:class:lnp-bp-standards-association
---

# RGB Protocol

RGB Protocol is a client-side validation smart-contract system built on Bitcoin and the Lightning Network that enables issuance, transfer, and programmable logic over tokenised assets (fungible and non-fungible) without placing contract state on the public blockchain. Contract state is stored in off-chain client-held directed acyclic graphs (DAGs), with only cryptographic commitments anchored to Bitcoin UTXOs via single-use seals, inheriting Bitcoin's security and censorship resistance while providing scalability, privacy, and programmability unavailable to purely on-chain designs. The AluVM virtual machine executes contract validation logic deterministically off-chain, and Lightning Network channels enable instant, low-fee RGB asset transfers. Developed by the LNP/BP Association from 2018 onward, RGB reached production stability in 2024 with standardised schemas RGB20 (fungible tokens) and RGB21 (non-fungible tokens).
