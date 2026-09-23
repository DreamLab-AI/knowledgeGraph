---
okf_version: "0.2"
type: Class
title: NFT Renting
resource: urn:ngm:class:nft-renting
domain: spatial-computing
description: Process of temporarily assigning usage rights for a non-fungible token without transferring ownership, enforced through smart contract time-bound licensing mechanisms.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-platform-and-environment
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:smart-contract
  - urn:ngm:class:time-lock-mechanism
  - urn:ngm:class:usage-rights-token
  - urn:ngm:class:rental-agreement-terms
requires:
  - urn:ngm:class:nft-ownership-proof
  - urn:ngm:class:smart-contract-execution
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:payment-system
  - urn:ngm:class:nft-ownership-proof
enables:
  - urn:ngm:class:collateral-management
  - urn:ngm:class:temporary-asset-access
  - urn:ngm:class:revenue-generation
  - urn:ngm:class:asset-utilization
dependsOn:
  - urn:ngm:class:blockchain-network
  - urn:ngm:class:token-standard
  - urn:ngm:class:escrow-mechanism
  - urn:ngm:class:time-oracle
partOf:
  - urn:ngm:class:digital-asset-lending
  - urn:ngm:class:nft-marketplace
---

# NFT Renting

Process of temporarily assigning usage rights for a non-fungible token without transferring ownership, enforced through smart contract time-bound licensing mechanisms.
