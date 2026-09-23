---
okf_version: "0.2"
type: Class
title: Clearing House
resource: urn:ngm:class:clearing-house
domain: finance
description: "A clearing house is a financial market intermediary that stands between the buyers and sellers of a trade to guarantee its completion, most often acting as a central counterparty that legally interposes itself through novation. By collecting margin, mutualising risk across a default fund, and netting offsetting obligations, it reduces counterparty credit risk and systemic contagion in securities, "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:financial-market-infrastructure
hasPart:
  - urn:ngm:class:central-counterparty
  - urn:ngm:class:netting
  - urn:ngm:class:margin
  - urn:ngm:class:default-management
enables:
  - urn:ngm:class:settlement-finality
  - urn:ngm:class:financial-stability
implements:
  - urn:ngm:class:settlement
  - urn:ngm:class:clearing
uses:
  - urn:ngm:class:collateral
  - urn:ngm:class:risk-management
supports:
  - urn:ngm:class:derivatives
partOf:
  - urn:ngm:class:financial-market-infrastructure
relatedTo:
  - urn:ngm:class:central-bank
  - urn:ngm:class:institutional-trust
---

# Clearing House

A clearing house is a financial market intermediary that stands between the buyers and sellers of a trade to guarantee its completion, most often acting as a central counterparty that legally interposes itself through novation. By collecting margin, mutualising risk across a default fund, and netting offsetting obligations, it reduces counterparty credit risk and systemic contagion in securities, derivatives, and payment markets. Clearing houses are critical financial market infrastructure, subject to stringent prudential supervision because their failure could propagate across the financial system.
