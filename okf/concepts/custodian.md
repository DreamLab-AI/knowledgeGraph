---
okf_version: "0.2"
type: Class
title: Custodian
resource: urn:ngm:class:custodian
domain: blockchain
description: "A custodian is an entity entrusted with safeguarding assets on behalf of others, holding and securing them while the legal or beneficial owner retains a claim. In digital-asset markets a custodian secures cryptographic keys and underlying holdings for clients and, in the case of fiat-backed stablecoins, holds the reserves that back issued tokens. Custodianship concentrates security and introduces "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:custody
hasPart:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:multisig
requires:
  - urn:ngm:class:trust
  - urn:ngm:class:kyc
enables:
  - urn:ngm:class:asset-management
  - urn:ngm:class:proof-of-reserves
dependsOn:
  - urn:ngm:class:trust
implements:
  - urn:ngm:class:institutional-custody
contrastsWith:
  - urn:ngm:class:self-custody
bridgesTo:
  - urn:ngm:class:counterparty-risk
uses:
  - urn:ngm:class:cold-storage
  - urn:ngm:class:hot-wallet
  - urn:ngm:class:multisig
supports:
  - urn:ngm:class:tether
  - urn:ngm:class:centralized-exchange
  - urn:ngm:class:stablecoin
standardizedBy:
  - urn:ngm:class:regulation
partOf:
  - urn:ngm:class:custody
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:digital-asset-custody
relatedTo:
  - urn:ngm:class:audit
  - urn:ngm:class:aml
  - urn:ngm:class:transparency
  - urn:ngm:class:audit
---

# Custodian

A custodian is an entity entrusted with safeguarding assets on behalf of others, holding and securing them while the legal or beneficial owner retains a claim. In digital-asset markets a custodian secures cryptographic keys and underlying holdings for clients and, in the case of fiat-backed stablecoins, holds the reserves that back issued tokens. Custodianship concentrates security and introduces counterparty risk, which is mitigated through controls such as segregation, audits, and proof of reserves.
