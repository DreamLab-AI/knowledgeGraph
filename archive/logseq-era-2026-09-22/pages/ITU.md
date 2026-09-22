public:: true

# ITU

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:itu",
  "@type": "Page",
  "title": "ITU",
  "vc:slug": "itu",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:itu",
  "@type": "Class",
  "label": "ITU",
  "definition": "The International Telecommunication Union (ITU) is the United Nations specialised agency responsible for information and communication technologies, coordinating global use of the radio spectrum and satellite orbits, developing technical standards and working to expand connectivity worldwide. Through its sectors for radiocommunication, standardization and development it produces recommendations that underpin interoperable telecommunications infrastructure. It is one of the principal international bodies governing the global telecommunications system.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-body",
        "label": "Standards Body"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      },
      {
        "@id": "urn:ngm:class:wireless-connectivity",
        "label": "Wireless Connectivity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spectrum-allocation",
        "label": "Spectrum Allocation"
      },
      {
        "@id": "urn:ngm:class:satellite-communication",
        "label": "Satellite Communication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "governs": [
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
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
  - The International Telecommunication Union (ITU) is the United Nations specialised agency responsible for information and communication technologies, coordinating global use of the radio spectrum and satellite orbits, developing technical standards and working to expand connectivity worldwide. Through its sectors for radiocommunication, standardization and development it produces recommendations that underpin interoperable telecommunications infrastructure. It is one of the principal international bodies governing the global telecommunications system.
  - Related concepts: [[Standards Body]] [[Telecommunications]] [[Spectrum Allocation]] [[Wireless Connectivity]] [[IETF]]
- ### Overview
  - The ITU operates through three sectors: ITU-R, which manages the international radio-frequency spectrum and satellite orbital slots; ITU-T, which produces telecommunications standards known as Recommendations; and ITU-D, which promotes equitable access and development. Its work coordinates spectrum across national borders, harmonises technical standards for networks and devices, and shapes policy that affects everything from mobile networks to satellite communications.
- ### Key aspects
  - Radiocommunication sector managing global spectrum and orbital resources
  - Standardization sector producing ITU-T Recommendations
  - Development sector advancing connectivity and digital inclusion
  - World Radiocommunication Conferences setting binding spectrum rules
  - Coordination with other standards bodies and member states
- ### Applications
  - International radio spectrum allocation and harmonisation
  - Telecommunications interoperability standards
  - Satellite orbital slot coordination
  - Global connectivity and digital-divide initiatives
  - Numbering, naming and signalling standards
- ### Relationships
  - subClassOf:: [[Standards Body]]
  - partOf:: [[Standards Body]]
  - standardizedBy:: [[Standards Body]]
  - supports:: [[Telecommunications]]
  - supports:: [[Wireless Connectivity]]
  - enables:: [[Spectrum Allocation]]
  - enables:: [[Satellite Communication]]
  - relatedTo:: [[Network Protocol]]
  - relatedTo:: [[IETF]]
  - relatedTo:: [[ISO]]
  - relatedTo:: [[IEEE]]
  - relatedTo:: [[Internet of Things]]
  - uses:: [[Network Infrastructure]]
  - governs:: [[Telecommunications]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
