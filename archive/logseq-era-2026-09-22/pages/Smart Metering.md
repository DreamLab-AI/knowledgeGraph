public:: true

# Smart Metering

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:smart-metering",
  "@type": "Page",
  "title": "Smart Metering",
  "vc:slug": "smart-metering",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:smart-metering",
  "@type": "Class",
  "label": "Smart Metering",
  "definition": "Smart Metering is the deployment of digital utility meters that record consumption of electricity, gas, water or heat at fine time resolution and communicate readings automatically to the utility and consumer. It replaces manual periodic readings with two-way communication, enabling near real-time monitoring, remote configuration and dynamic tariffs. Smart meters are a foundational component of advanced metering infrastructure and the broader smart grid.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:energy-management",
      "label": "Energy Management"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:energy-management",
        "label": "Energy Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Network"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:demand-response",
        "label": "Demand Response"
      },
      {
        "@id": "urn:ngm:class:advanced-metering-infrastructure",
        "label": "Advanced Metering Infrastructure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      },
      {
        "@id": "urn:ngm:class:energy-management",
        "label": "Energy Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      },
      {
        "@id": "urn:ngm:class:demand-response",
        "label": "Demand Response"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:advanced-metering-infrastructure",
        "label": "Advanced Metering Infrastructure"
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
  - Smart Metering is the deployment of digital utility meters that record consumption of electricity, gas, water or heat at fine time resolution and communicate readings automatically to the utility and consumer. It replaces manual periodic readings with two-way communication, enabling near real-time monitoring, remote configuration and dynamic tariffs. Smart meters are a foundational component of advanced metering infrastructure and the broader smart grid.
  - Related concepts: [[Energy Management]] [[Smart Grid]] [[Demand Response]] [[Advanced Metering Infrastructure]]
- ### Overview
  - Smart metering transforms the utility meter from a passive register read manually into a networked sensor that streams high-resolution consumption data. Two-way communication lets utilities perform remote reads, firmware updates and supply control, while customers gain visibility into usage. As the edge layer of advanced metering infrastructure, smart meters enable time-of-use tariffs, demand response and faster outage detection.
- ### Key aspects
  - High-resolution interval consumption recording
  - Two-way communication for remote read and control
  - Integration with advanced metering infrastructure head-ends
  - Support for dynamic and time-of-use tariffs
  - Data privacy and security of granular usage records
- ### Mechanisms
  - High-resolution interval consumption recording
  - Two-way communication for remote read and control
  - Integration with advanced metering infrastructure head-ends
- ### Applications
  - Automated billing and remote meter reading
  - Demand response and load shifting programmes
  - Outage detection and grid situational awareness
  - Consumer energy feedback and efficiency apps
  - Distributed energy resource integration
- ### Relationships
  - subClassOf:: [[Energy Management]]
  - subClassOf:: [[Energy Management]]
  - requires:: [[Sensor Network]]
  - requires:: [[Internet of Things]]
  - enables:: [[Demand Response]]
  - enables:: [[Advanced Metering Infrastructure]]
  - supports:: [[Smart Grid]]
  - supports:: [[Energy Management]]
  - uses:: [[Internet of Things]]
  - dependsOn:: [[Sensor Network]]
  - relatedTo:: [[Smart Grid]]
  - relatedTo:: [[Demand Response]]
  - bridgesTo:: [[Advanced Metering Infrastructure]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
