---
okf_version: "0.2"
type: Class
title: Data Dictionary
resource: urn:ngm:class:data-dictionary
domain: data
description: A data dictionary is a centralised, structured repository that describes the data elements of an information system, recording each element's name, definition, data type, format, allowable values, relationships and ownership. It serves as an authoritative reference for the meaning and structure of data, distinct from the data itself, enabling consistent understanding across teams and systems. Data
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:metadata-management
hasPart:
  - urn:ngm:class:schema
  - urn:ngm:class:metadata
requires:
  - urn:ngm:class:metadata-management
enables:
  - urn:ngm:class:data-quality
contrastsWith:
  - urn:ngm:class:data-catalogue
  - urn:ngm:class:data-lineage
bridgesTo:
  - urn:ngm:class:data-governance
uses:
  - urn:ngm:class:metadata
  - urn:ngm:class:schema
supports:
  - urn:ngm:class:data-quality
  - urn:ngm:class:data-governance
partOf:
  - urn:ngm:class:data-management
  - urn:ngm:class:data-governance
relatedTo:
  - urn:ngm:class:data-catalogue
  - urn:ngm:class:data-lineage
  - urn:ngm:class:data-quality
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Data Dictionary

A data dictionary is a centralised, structured repository that describes the data elements of an information system, recording each element's name, definition, data type, format, allowable values, relationships and ownership. It serves as an authoritative reference for the meaning and structure of data, distinct from the data itself, enabling consistent understanding across teams and systems. Data dictionaries underpin data governance, integration and quality assurance by making the semantics of stored data explicit.
