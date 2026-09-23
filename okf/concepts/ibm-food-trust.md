---
okf_version: "0.2"
type: Class
title: IBM Food Trust
resource: urn:ngm:class:ibm-food-trust
domain: blockchain
description: IBM Food Trust is a permissioned blockchain network, built on Hyperledger Fabric, that enables food industry participants — growers, processors, distributors, retailers, and regulators — to digitally record, share, and verify supply chain events from farm to shelf. By anchoring provenance records in an immutable distributed ledger, it supports rapid traceability during food safety incidents, reduc
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:supply-chain
hasPart:
  - urn:ngm:class:smart-contract
  - urn:ngm:class:distributed-ledger
requires:
  - urn:ngm:class:hyperledger-fabric
  - urn:ngm:class:permissioned-blockchain
  - urn:ngm:class:digital-identity
enables:
  - urn:ngm:class:food-safety
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:provenance-verification
  - urn:ngm:class:product-recall-management
  - urn:ngm:class:product-recall-management
implements:
  - urn:ngm:class:gs-1-standards
  - urn:ngm:class:food-safety-modernization-act
contrastsWith:
  - urn:ngm:class:public-blockchain
  - urn:ngm:class:centralised-database
bridgesTo:
  - urn:ngm:class:iot-sensor
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:erp-system
uses:
  - urn:ngm:class:cryptographic-hash
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:api-gateway
supports:
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:sustainability-reporting
  - urn:ngm:class:sustainability-reporting
partOf:
  - urn:ngm:class:food-supply-chain
relatedTo:
  - urn:ngm:class:ethereum
  - urn:ngm:class:non-fungible-token
  - urn:ngm:class:data-governance
---

# IBM Food Trust

IBM Food Trust is a permissioned blockchain network, built on Hyperledger Fabric, that enables food industry participants — growers, processors, distributors, retailers, and regulators — to digitally record, share, and verify supply chain events from farm to shelf. By anchoring provenance records in an immutable distributed ledger, it supports rapid traceability during food safety incidents, reduces waste through better freshness visibility, and builds consumer confidence in product origin claims. The platform operates as a multi-party ecosystem in which each participant controls the data they contribute while selectively sharing access with downstream trading partners. Walmart, Carrefour, Nestlé, and other major retailers have deployed it to meet regulatory traceability mandates such as the US FDA Food Safety Modernization Act.
