public:: true

# Barcode

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:barcode", "@type":"Page", "title":"Barcode", "vc:slug":"barcode", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:barcode",
  "@type": "Class",
  "label": "Barcode",
  "definition": "A barcode is a machine-readable optical representation of data that encodes information in the widths and spacings of parallel lines (one-dimensional) or in patterns of dots, squares and other geometric shapes (two-dimensional). Barcodes are scanned by optical readers or cameras to retrieve an identifier that links a physical item to a record in an information system. They underpin automatic identification and data capture in retail, logistics and inventory control.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:qr-code",
        "label": "QR Code"
      },
      {
        "@id": "urn:ngm:class:rfid",
        "label": "RFID"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:product-identification",
        "label": "Product Identification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inventory-management",
        "label": "Inventory Management"
      },
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      },
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inventory-management",
        "label": "Inventory Management"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:gs-1-standards",
        "label": "GS1 Standards"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:gs-1-standards",
        "label": "GS1 Standards"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rfid",
        "label": "RFID"
      },
      {
        "@id": "urn:ngm:class:nfc",
        "label": "NFC"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:qr-code",
        "label": "QR Code"
      },
      {
        "@id": "urn:ngm:class:epcis",
        "label": "EPCIS"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A [[Barcode]] is a machine-readable optical label that encodes a product or item identifier as a pattern of bars, spaces or geometric shapes, scanned to link a physical object to a digital record.
	- It is the foundational technology for automatic identification and data capture, standardised through [[GS1 Standards]] and complemented by [[QR Code]] and [[RFID]].
	- Barcodes enable [[Inventory Management]] and [[Supply Chain Traceability]] across retail and logistics.
- ### Overview
	- The barcode originated as a linear (1D) symbology in which numeric or alphanumeric data is encoded in the relative widths of dark bars and light spaces. Common 1D symbologies include UPC, EAN, Code 128 and Code 39.
	- Two-dimensional (2D) symbologies such as QR Code and Data Matrix encode data in a grid, dramatically increasing information density and allowing capture by ordinary camera sensors.
	- A scanner illuminates the symbol, measures the reflected light, decodes the pattern into a string and passes that identifier to an application, which resolves it against a database to retrieve item attributes.
	- Barcodes are cheap to print and require no power at the tag, distinguishing them from active and passive radio technologies.
- ### Key aspects
	- Symbology: the rule set that defines how data is encoded into the visual pattern and how check digits guard against misreads.
	- Resolution and quiet zones: minimum bar widths and surrounding blank margins required for reliable optical decoding.
	- Error detection: check digits and, in 2D codes, Reed-Solomon error correction that tolerates partial damage.
	- Global identifiers: codes typically carry a GS1 Global Trade Item Number (GTIN) or similar registered key.
	- Capture hardware: laser scanners, CCD imagers and smartphone cameras with software decoders.
- ### Applications
	- Retail point-of-sale pricing and checkout.
	- Warehouse and inventory management with item-level tracking.
	- Healthcare for medication and specimen identification.
	- Logistics and parcel routing using carrier-specific symbologies.
	- Document workflows and ticketing via QR codes.
- ### Relationships
	- uses:: [[QR Code]]
	- uses:: [[RFID]]
	- requires:: [[Product Identification]]
	- enables:: [[Inventory Management]]
	- enables:: [[Traceability]]
	- enables:: [[Supply Chain Traceability]]
	- supports:: [[Inventory Management]]
	- standardizedBy:: [[GS1 Standards]]
	- partOf:: [[GS1 Standards]]
	- contrastsWith:: [[RFID]]
	- contrastsWith:: [[NFC]]
	- bridgesTo:: [[Supply Chain Traceability]]
	- relatedTo:: [[QR Code]]
	- relatedTo:: [[EPCIS]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
