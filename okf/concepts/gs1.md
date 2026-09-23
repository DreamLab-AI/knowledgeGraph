---
okf_version: "0.2"
type: Class
title: GS1
resource: urn:ngm:class:gs1
domain: standards
description: GS1 is the global not-for-profit standards organisation responsible for designing, administering, and maintaining the world's most widely deployed open supply chain identification system, used by over two million companies in more than 150 countries. Its core standards define globally unique identification schemes for trade items (GTIN), locations (GLN), logistic units (SSCC), and assets (GIAI), e
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:supply-chain-management
hasPart:
  - urn:ngm:class:global-trade-item-number
  - urn:ngm:class:global-location-number
  - urn:ngm:class:serial-shipping-container-code
  - urn:ngm:class:gs1-epcis
  - urn:ngm:class:gs1-digital-link
  - urn:ngm:class:gs1-epcis
requires:
  - urn:ngm:class:barcode
  - urn:ngm:class:electronic-data-interchange
enables:
  - urn:ngm:class:supply-chain-traceability
  - urn:ngm:class:pharmaceutical-traceability
  - urn:ngm:class:supply-chain-visibility
  - urn:ngm:class:food-safety-blockchain
implements:
  - urn:ngm:class:open-standards
  - urn:ngm:class:data-interoperability
bridgesTo:
  - urn:ngm:class:decentralised-identifier
  - urn:ngm:class:verifiable-credential-vc
  - urn:ngm:class:verifiable-credential-vc
supports:
  - urn:ngm:class:digital-product-passport
  - urn:ngm:class:rfid
  - urn:ngm:class:automated-identification
standardizedBy:
  - urn:ngm:class:iso-standards
  - urn:ngm:class:iso-standards
partOf:
  - urn:ngm:class:global-standards-infrastructure
relatedTo:
  - urn:ngm:class:supply-chain
  - urn:ngm:class:supply-chain-provenance
  - urn:ngm:class:provenance-tracking
  - urn:ngm:class:logistics-optimisation
  - urn:ngm:class:retail-technology
  - urn:ngm:class:healthcare-supply-chain
---

# GS1

GS1 is the global not-for-profit standards organisation responsible for designing, administering, and maintaining the world's most widely deployed open supply chain identification system, used by over two million companies in more than 150 countries. Its core standards define globally unique identification schemes for trade items (GTIN), locations (GLN), logistic units (SSCC), and assets (GIAI), encoding them in barcodes (EAN-13, ITF-14, GS1-128), two-dimensional symbols (GS1 DataMatrix, GS1 QR), and digital web URIs via GS1 Digital Link. GS1 also governs EPCIS (Electronic Product Code Information Services), the event-data exchange standard that captures What, Where, When, Why, and How across the supply chain, and underpins regulatory traceability mandates in pharmaceuticals, food safety, and sustainable products across the EU, US, and beyond.
