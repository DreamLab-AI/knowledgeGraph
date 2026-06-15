public:: true

# QR Code
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:qr-code",
  "@type": "Page",
  "title": "QR Code",
  "vc:slug": "qr-code",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:qr-code",
  "@type": "Class",
  "label": "QR Code",
  "definition": "A QR code (Quick Response code) is a two-dimensional matrix barcode that encodes data in a grid of black and white modules readable by a camera from any orientation. It carries substantially more information than a one-dimensional barcode and includes Reed-Solomon error correction that allows reliable decoding despite damage or partial occlusion. QR codes are standardised under ISO/IEC 18004 and are widely used to bridge physical objects to digital resources, including payment requests, product identifiers and verifiable credentials.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:traceability",
      "label": "Traceability"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:data-structure",
        "label": "Data Structure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      },
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      },
      {
        "@id": "urn:ngm:class:digital-product-passport",
        "label": "Digital Product Passport"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rfid",
        "label": "RFID"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[QR Code]] is a two-dimensional matrix barcode that bridges physical objects to digital actions, supporting [[Authentication]], [[Traceability]] and instant retrieval of a linked resource.
- ### Overview
  - QR codes encode text, URLs, payment instructions or structured payloads in a square grid of modules. Their built-in error correction and orientation-independent finder patterns make them robust to scuffing, partial occlusion and skewed camera angles, which is why they became ubiquitous for connecting print and physical goods to online experiences.
  - In blockchain and payments contexts, QR codes commonly carry addresses, invoices or credential references, letting a phone camera initiate a transaction or verification without manual entry.
- ### Key aspects
  - Capacity: versions scale from tiny payloads to several kilobytes of alphanumeric or binary data.
  - Error correction: Reed-Solomon coding recovers data across four selectable robustness levels.
  - Structure: finder, alignment and timing patterns enable fast, rotation-invariant detection.
  - Standardisation: ISO/IEC 18004 defines symbol structure, encoding and decoding.
- ### Mechanisms
  - Encoders map payload bytes into the module grid with masking to balance light and dark regions.
  - A scanner locates finder patterns, normalises perspective and reads modules into a bitstream.
  - Error-correction decoding reconstructs the original payload even with damaged modules.
- ### Applications
  - Cryptocurrency address and invoice sharing, payment initiation, product authentication, supply-chain tracking, digital product passports and credential presentation.
- ### Relationships
  - uses:: [[Data Structure]]
  - supports:: [[Lightning Network]]
  - supports:: [[Digital Identity]]
  - supports:: [[Authentication]]
  - enables:: [[Traceability]]
  - enables:: [[Supply Chain Traceability]]
  - enables:: [[Digital Product Passport]]
  - contrastsWith:: [[RFID]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Cryptocurrency]]
  - relatedTo:: [[Bitcoin]]
  - implements:: [[Data Integrity]]
  - bridgesTo:: [[Human Computer Interaction]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - maturity:: mature
