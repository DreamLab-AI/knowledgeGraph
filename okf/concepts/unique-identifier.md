---
okf_version: "0.2"
type: Class
title: Unique Identifier
resource: urn:ngm:class:unique-identifier
domain: supply-chain
description: A unique identifier is a value assigned to an object, entity, or record so that it can be distinguished unambiguously from all others within a defined scope. Identifiers may be globally unique, such as universally unique identifiers, or unique within a namespace, such as a serial number combined with an issuer prefix. In supply chains, unique identifiers underpin serialisation, traceability, and d
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:identification
hasPart:
  - urn:ngm:class:serialisation
requires:
  - urn:ngm:class:namespace
  - urn:ngm:class:identification
enables:
  - urn:ngm:class:traceability
  - urn:ngm:class:asset-tracking
  - urn:ngm:class:supply-chain-provenance
  - urn:ngm:class:tracking
implements:
  - urn:ngm:class:identification
uses:
  - urn:ngm:class:barcode
  - urn:ngm:class:rfid
supports:
  - urn:ngm:class:traceability
standardizedBy:
  - urn:ngm:class:gs1
partOf:
  - urn:ngm:class:data-model
relatedTo:
  - urn:ngm:class:serialisation
  - urn:ngm:class:data-model
---

# Unique Identifier

A unique identifier is a value assigned to an object, entity, or record so that it can be distinguished unambiguously from all others within a defined scope. Identifiers may be globally unique, such as universally unique identifiers, or unique within a namespace, such as a serial number combined with an issuer prefix. In supply chains, unique identifiers underpin serialisation, traceability, and data exchange across organisations.
