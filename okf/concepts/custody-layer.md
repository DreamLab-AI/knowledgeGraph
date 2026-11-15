---
okf_version: "0.2"
type: Class
title: Custody Layer
resource: urn:ngm:class:custody-layer
domain: blockchain
description: The Custody Layer is the stratum that governs the safekeeping and authorised control of assets and the keys that command them. It sits above the Cryptographic and Identity strata it depends on and below the settlement and application activity that moves assets. It contains key storage, signing policies, and the authorisation rules for asset control.
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:bc-token-and-asset
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:cryptographic-layer
  - urn:ngm:class:identity-layer
enables:
  - urn:ngm:class:settlement-layer
  - urn:ngm:class:application-layer
bridgesTo:
  - urn:ngm:class:multisignature
  - urn:ngm:class:key-management
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Custody Layer

The Custody Layer is the stratum that governs the safekeeping and authorised control of assets and the keys that command them. It sits above the Cryptographic and Identity strata it depends on and below the settlement and application activity that moves assets. It contains key storage, signing policies, and the authorisation rules for asset control.
