public:: true

# Power Grid

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:power-grid",
  "@type": "Page",
  "title": "Power Grid",
  "vc:slug": "power-grid",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-grid",
  "@type": "Class",
  "label": "Power Grid",
  "definition": "A power grid is the interconnected network of generation, transmission and distribution infrastructure that delivers electrical power from producers to consumers. It balances supply and demand in real time across high-voltage transmission lines, substations and lower-voltage distribution networks. Modern grids increasingly integrate renewable generation and digital controls to maintain stability and reliability.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:power-infrastructure",
      "label": "Power Infrastructure"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:electrical-power",
        "label": "Electrical Power"
      },
      {
        "@id": "urn:ngm:class:transmission-network",
        "label": "Transmission Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      },
      {
        "@id": "urn:ngm:class:grid-infrastructure",
        "label": "Grid Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:power-management",
        "label": "Power Management"
      },
      {
        "@id": "urn:ngm:class:power-distribution-unit",
        "label": "Power Distribution Unit"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      },
      {
        "@id": "urn:ngm:class:power-systems",
        "label": "Power Systems"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:energy-management",
        "label": "Energy Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:renewable-energy-integration",
        "label": "Renewable Energy Integration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:power-electronics",
        "label": "Power Electronics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
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
  - Relates to [[Electrical Power]]
  - Relates to [[Power Infrastructure]]
  - Relates to [[Transmission Network]]
  - Relates to [[Smart Grid]]
  - Relates to [[Renewable Energy]]
- ### Overview
  - Generation, transmission and distribution stages move power from plants to end users.
  - Grid operators continuously balance supply and demand to keep frequency and voltage within limits.
  - Substations step voltage up for efficient long-distance transmission and down for local distribution.
  - Renewable integration and storage are reshaping how grids are planned and controlled.
- ### Key aspects
  - **Generation** — Conventional and renewable sources feed power into the network at varying scales and profiles.
  - **Transmission** — High-voltage lines carry bulk power over long distances with low losses.
  - **Distribution** — Lower-voltage networks deliver power to homes, businesses and facilities.
  - **Balancing and control** — Real-time matching of supply and demand maintains frequency, voltage and stability.
- ### Applications
  - Supplying electricity to homes, industry and commercial buildings.
  - Powering large data centres and compute infrastructure.
  - Integrating distributed and renewable generation via smart-grid controls.
  - Providing the energy backbone for electrified transport and heating.
- ### Relationships
  - subClassOf:: [[Power Infrastructure]]
  - dependsOn:: [[Electrical Power]]
  - dependsOn:: [[Transmission Network]]
  - relatedTo:: [[Smart Grid]]
  - relatedTo:: [[Grid Infrastructure]]
  - requires:: [[Power Management]]
  - requires:: [[Power Distribution Unit]]
  - hasPart:: [[Power Supply]]
  - hasPart:: [[Power Systems]]
  - supports:: [[Data Centre]]
  - supports:: [[Energy Management]]
  - enables:: [[Renewable Energy Integration]]
  - uses:: [[Power Electronics]]
  - bridgesTo:: [[Renewable Energy]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
