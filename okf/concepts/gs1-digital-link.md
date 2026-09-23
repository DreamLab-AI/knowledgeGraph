---
okf_version: "0.2"
type: Class
title: Gs1 Digital Link
resource: urn:ngm:class:gs1-digital-link
domain: standards
description: GS1 Digital Link is a standard that expresses GS1 identifiers, such as the Global Trade Item Number, as web URIs so that a single QR code or data carrier can connect a physical product to multiple online resources. A resolver service interprets the URI and routes requests to information such as product details, instructions, provenance, or recycling guidance. It bridges traditional barcodes with t
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:gs1
hasPart:
  - urn:ngm:class:uri
  - urn:ngm:class:resolver
enables:
  - urn:ngm:class:traceability
  - urn:ngm:class:circular-economy
  - urn:ngm:class:supply-chain-provenance
dependsOn:
  - urn:ngm:class:gs1
implements:
  - urn:ngm:class:web-standard
uses:
  - urn:ngm:class:qr-code
  - urn:ngm:class:barcode
  - urn:ngm:class:uri
supports:
  - urn:ngm:class:interoperability
  - urn:ngm:class:semantic-web-linked-data-standard
standardizedBy:
  - urn:ngm:class:gs1
partOf:
  - urn:ngm:class:gs1
relatedTo:
  - urn:ngm:class:resolver
  - urn:ngm:class:interoperability
---

# Gs1 Digital Link

GS1 Digital Link is a standard that expresses GS1 identifiers, such as the Global Trade Item Number, as web URIs so that a single QR code or data carrier can connect a physical product to multiple online resources. A resolver service interprets the URI and routes requests to information such as product details, instructions, provenance, or recycling guidance. It bridges traditional barcodes with the web and semantic data.
