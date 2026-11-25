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
  - urn:ngm:class:know-your-customer
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
  - urn:ngm:class:centralised-exchange
  - urn:ngm:class:stablecoin
standardizedBy:
  - urn:ngm:class:regulation
partOf:
  - urn:ngm:class:custody
  - urn:ngm:class:digital-asset-custody
  - urn:ngm:class:digital-asset-custody
relatedTo:
  - urn:ngm:class:audit
  - urn:ngm:class:anti-money-laundering
  - urn:ngm:class:transparency
  - urn:ngm:class:audit
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Custodian

A custodian is an entity entrusted with safeguarding assets on behalf of others, holding and securing them while the legal or beneficial owner retains a claim. In digital-asset markets a custodian secures cryptographic keys and underlying holdings for clients and, in the case of fiat-backed stablecoins, holds the reserves that back issued tokens. Custodianship concentrates security and introduces counterparty risk, which is mitigated through controls such as segregation, audits, and proof of reserves.
