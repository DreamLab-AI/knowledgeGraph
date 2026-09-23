---
okf_version: "0.2"
type: Class
title: Securities Settlement
resource: urn:ngm:class:securities-settlement
domain: finance
description: Securities settlement is the process by which the buyer of a security receives the asset and the seller receives payment, completing a trade through the final transfer of legal ownership and funds between counterparties, typically via a central securities depository (CSD) or clearing house. Traditional settlement occurs on a T+1 or T+2 basis after trade execution, involves complex chains of custod
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:financial-system
hasPart:
  - urn:ngm:class:delivery-versus-payment
requires:
  - urn:ngm:class:central-securities-depository
  - urn:ngm:class:central-counterparty-clearing
  - urn:ngm:class:custodian
enables:
  - urn:ngm:class:digital-asset-trading
  - urn:ngm:class:trustless-settlement
  - urn:ngm:class:tokenised-securities
dependsOn:
  - urn:ngm:class:financial-infrastructure
  - urn:ngm:class:payment-system
  - urn:ngm:class:real-time-gross-settlement
contrastsWith:
  - urn:ngm:class:atomic-settlement
  - urn:ngm:class:instant-value-settlement
bridgesTo:
  - urn:ngm:class:blockchain
  - urn:ngm:class:de-fi
uses:
  - urn:ngm:class:digital-asset-infrastructure
  - urn:ngm:class:distributed-ledger-technology
  - urn:ngm:class:smart-contract
standardizedBy:
  - urn:ngm:class:securities-regulation
relatedTo:
  - urn:ngm:class:counterparty-risk
  - urn:ngm:class:systemic-risk
  - urn:ngm:class:financial-market-infrastructure
---

# Securities Settlement

Securities settlement is the process by which the buyer of a security receives the asset and the seller receives payment, completing a trade through the final transfer of legal ownership and funds between counterparties, typically via a central securities depository (CSD) or clearing house. Traditional settlement occurs on a T+1 or T+2 basis after trade execution, involves complex chains of custodians, CSDs, and central counterparty clearing houses (CCPs), and carries counterparty risk during the settlement window. Distributed ledger technology and tokenised securities are driving a shift toward atomic and real-time settlement.
