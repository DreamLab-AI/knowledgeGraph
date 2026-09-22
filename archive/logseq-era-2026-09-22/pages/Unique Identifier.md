public:: true

# Unique Identifier

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:unique-identifier",
  "@type": "Page",
  "title": "Unique Identifier",
  "vc:slug": "unique-identifier",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unique-identifier",
  "@type": "Class",
  "label": "Unique Identifier",
  "definition": "A unique identifier is a value assigned to an object, entity, or record so that it can be distinguished unambiguously from all others within a defined scope. Identifiers may be globally unique, such as universally unique identifiers, or unique within a namespace, such as a serial number combined with an issuer prefix. In supply chains, unique identifiers underpin serialisation, traceability, and data exchange across organisations.",
  "domain": "supply-chain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identification",
      "label": "Identification"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:namespace",
        "label": "Namespace"
      },
      {
        "@id": "urn:ngm:class:identification",
        "label": "Identification"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:serialisation",
        "label": "Serialisation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:identification",
        "label": "Identification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      },
      {
        "@id": "urn:ngm:class:asset-tracking",
        "label": "Asset Tracking"
      },
      {
        "@id": "urn:ngm:class:supply-chain-provenance",
        "label": "Supply Chain Provenance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:barcode",
        "label": "Barcode"
      },
      {
        "@id": "urn:ngm:class:rfid",
        "label": "RFID"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:gs1",
        "label": "GS1"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:serialisation",
        "label": "Serialisation"
      },
      {
        "@id": "urn:ngm:class:data-model",
        "label": "Data Model"
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
  - A unique identifier is a value assigned to an object, entity, or record so that it can be distinguished unambiguously from all others within a defined scope. Identifiers may be globally unique, such as universally unique identifiers, or unique within a namespace, such as a serial number combined with an issuer prefix. In supply chains, unique identifiers underpin serialisation, traceability, and data exchange across organisations.
  - Related: [[Identification]] [[Namespace]] [[Serialisation]] [[Traceability]] [[GS1]]
- ### Overview
  - Uniqueness is always defined relative to a scope and an issuing authority. Centralised schemes assign identifiers from a managed registry to guarantee non-collision, whereas decentralised schemes such as universally unique identifiers rely on sufficiently large random or structured value spaces to make collisions negligible. In supply-chain settings, standards bodies such as GS1 allocate company prefixes that combine with item references and serial numbers to form globally unique product identifiers carried by barcodes and RFID tags.
- ### Key aspects
  - Uniqueness is scoped to a namespace or issuing authority.
  - Centralised allocation guarantees non-collision via a registry.
  - Random or structured value spaces enable decentralised uniqueness.
  - Serialisation extends class-level codes to individual instances.
  - Identifiers may be opaque or carry embedded structure.
- ### Applications
  - Item-level serialisation and product authentication.
  - End-to-end traceability across supply-chain partners.
  - Database primary keys and record linkage.
  - Asset tracking and inventory management.
  - Cross-organisation data exchange and interoperability.
- ### Relationships
  - requires:: [[Namespace]]
  - requires:: [[Identification]]
  - hasPart:: [[Serialisation]]
  - partOf:: [[Data Model]]
  - implements:: [[Identification]]
  - enables:: [[Traceability]]
  - enables:: [[Tracking]]
  - enables:: [[Supply Chain Provenance]]
  - uses:: [[Barcode]]
  - uses:: [[RFID]]
  - standardizedBy:: [[GS1]]
  - supports:: [[Traceability]]
  - relatedTo:: [[Serialisation]]
  - relatedTo:: [[Data Model]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
