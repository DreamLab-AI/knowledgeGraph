---
okf_version: "0.2"
type: Class
title: Liquidation Engine
resource: urn:ngm:class:liquidation-engine
domain: blockchain
description: A liquidation engine is the component of a decentralised lending or derivatives protocol that detects under-collateralised positions and forcibly closes or partially repays them to keep the system solvent. It continuously evaluates position health against collateral values supplied by price oracles, and when a position breaches its maintenance threshold it triggers liquidation, typically auctionin
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:lending-protocol
hasPart:
  - urn:ngm:class:collateral
requires:
  - urn:ngm:class:oracle
  - urn:ngm:class:collateral
enables:
  - urn:ngm:class:lending-protocol
dependsOn:
  - urn:ngm:class:oracle
implements:
  - urn:ngm:class:risk-management
bridgesTo:
  - urn:ngm:class:automated-market-maker
  - urn:ngm:class:perpetual-futures
uses:
  - urn:ngm:class:oracle
  - urn:ngm:class:smart-contract
supports:
  - urn:ngm:class:perpetual-futures
partOf:
  - urn:ngm:class:de-fi
relatedTo:
  - urn:ngm:class:de-fi
  - urn:ngm:class:risk-management
  - urn:ngm:class:smart-contract
---

# Liquidation Engine

A liquidation engine is the component of a decentralised lending or derivatives protocol that detects under-collateralised positions and forcibly closes or partially repays them to keep the system solvent. It continuously evaluates position health against collateral values supplied by price oracles, and when a position breaches its maintenance threshold it triggers liquidation, typically auctioning or selling collateral and rewarding external liquidators or keepers who execute the transaction. By enforcing collateralisation guarantees on-chain, the liquidation engine is central to risk management in DeFi lending, perpetual-futures, and collateralised-debt systems.
