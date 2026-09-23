---
okf_version: "0.2"
type: Class
title: Witness Data
resource: urn:ngm:class:witness-data
domain: blockchain
description: "Witness data is the portion of a Bitcoin transaction that contains the signatures and scripts proving authorisation to spend inputs, separated from the core transaction body by Segregated Witness. Moving this data into a distinct structure fixes transaction malleability and allows witness bytes to be discounted when computing block weight. Witness data is also the field where inscriptions such as "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:transaction
hasPart:
  - urn:ngm:class:digital-signature
  - urn:ngm:class:script
requires:
  - urn:ngm:class:transaction
enables:
  - urn:ngm:class:taproot
  - urn:ngm:class:ordinals
contrastsWith:
  - urn:ngm:class:block-size
bridgesTo:
  - urn:ngm:class:ordinals
uses:
  - urn:ngm:class:merkle-tree
supports:
  - urn:ngm:class:block-size
partOf:
  - urn:ngm:class:transaction
  - urn:ngm:class:blockchain
relatedTo:
  - urn:ngm:class:bitcoin
  - urn:ngm:class:ordinals
  - urn:ngm:class:taproot
---

# Witness Data

Witness data is the portion of a Bitcoin transaction that contains the signatures and scripts proving authorisation to spend inputs, separated from the core transaction body by Segregated Witness. Moving this data into a distinct structure fixes transaction malleability and allows witness bytes to be discounted when computing block weight. Witness data is also the field where inscriptions such as Ordinals embed arbitrary content.
