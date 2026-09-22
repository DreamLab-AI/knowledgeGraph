public:: true
alias:: Data Center

# Data Centre
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-centre",
  "@type": "Page",
  "vc:slug": "data-centre",
  "title": "Data Centre",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-centre",
  "@type": "Class",
  "label": "Data Centre",
  "definition": "A data centre is a dedicated facility that houses computing, storage and networking infrastructure together with the power, cooling and physical security needed to operate them reliably. It provides the consolidated environment for hosting servers, cloud services and high-performance workloads such as AI training. Its energy and power demands make efficiency, measured through metrics like PUE, a central operational and sustainability concern.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:computing-infrastructure",
    "label": "Computing Infrastructure"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:server",
        "label": "Server"
      },
      {
        "@id": "urn:ngm:class:liquid-cooling",
        "label": "Liquid Cooling"
      },
      {
        "@id": "urn:ngm:class:cooling-system",
        "label": "Cooling System"
      },
      {
        "@id": "urn:ngm:class:power-distribution-unit",
        "label": "Power Distribution Unit"
      },
      {
        "@id": "urn:ngm:class:network-switch",
        "label": "Network Switch"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:energy-and-power",
        "label": "Energy and Power"
      },
      {
        "@id": "urn:ngm:class:physical-security",
        "label": "Physical Security"
      },
      {
        "@id": "urn:ngm:class:high-speed-network-connectivity",
        "label": "High-Speed Network Connectivity"
      },
      {
        "@id": "urn:ngm:class:power-grid",
        "label": "Power Grid"
      },
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "AI Model Training"
      },
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High-Performance Computing"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:power-grid",
        "label": "Power Grid"
      },
      {
        "@id": "urn:ngm:class:fibre-optic-network",
        "label": "Fibre Optic Network"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:virtualisation",
        "label": "Virtualisation"
      },
      {
        "@id": "urn:ngm:class:power-usage-effectiveness",
        "label": "Power Usage Effectiveness"
      },
      {
        "@id": "urn:ngm:class:hot-aisle-cold-aisle-containment",
        "label": "Hot-Aisle Cold-Aisle Containment"
      },
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:failover",
        "label": "Failover"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:tier-classification-standard",
        "label": "Tier Classification Standard"
      },
      {
        "@id": "urn:ngm:class:iso-iec-27001",
        "label": "ISO/IEC 27001"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:fog-computing",
        "label": "Fog Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:carbon-footprint",
        "label": "Carbon Footprint"
      },
      {
        "@id": "urn:ngm:class:renewable-energy",
        "label": "Renewable Energy"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:energy-and-power",
        "label": "Energy and Power"
      },
      {
        "@id": "urn:ngm:class:colocation-services",
        "label": "Colocation Services"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:geographic-distribution",
        "label": "Geographic Distribution"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:data-centre",
      "label": "Data Center"
    },
    {
      "@id": "urn:ngm:class:computer-room",
      "label": "Computer Room"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.73
}
```

- ### Definition
  - A data centre is a purpose-built facility housing compute, storage and network hardware along with the [[Energy and Power]] and cooling systems required to keep them running reliably.
- ### Content
  - Facilities are engineered for redundancy across power, cooling and connectivity, with tiered availability classifications. Because cooling and electricity dominate operating cost and environmental impact, efficiency metrics such as power usage effectiveness drive design and sustainability efforts.
- ### Overview
  - Data centres are the physical substrate of the digital economy, concentrating compute and storage where power and connectivity are abundant.
  - Their design balances reliability, density, energy use, and cost, with tiered standards describing redundancy and uptime expectations.
  - As [[GPU]]-driven AI workloads grow, power delivery and advanced cooling such as [[Liquid Cooling]] have become defining constraints.
  - Geographic distribution across facilities supports latency reduction, disaster recovery, and content delivery.
- ### Key aspects
  - Power and cooling: redundant supply, backup generation, and thermal management of dense racks.
  - Reliability tiering: redundancy levels that determine tolerated downtime and concurrent maintainability.
  - Physical and network security: access control, monitoring, and resilient connectivity.
  - Energy efficiency: power usage effectiveness, heat reuse, and renewable sourcing.
  - Scale tiers: from edge micro-facilities to hyperscale campuses serving global cloud demand.
- ### Applications
  - Hosting public and private cloud platforms and their virtualised workloads.
  - Running AI training and inference clusters that demand high-density power and cooling.
  - Anchoring content delivery networks and low-latency edge presence.
  - Providing disaster-recovery and high-availability sites through geographic redundancy.
- ### Relationships
  - partOf:: [[Cloud Computing]]
  - hasPart:: [[Server]]
  - hasPart:: [[Liquid Cooling]]
  - requires:: [[Power Grid]]
  - requires:: [[Renewable Energy]]
  - uses:: [[Redundancy]]
  - uses:: [[GPU]]
  - supports:: [[Edge Computing]]
  - supports:: [[Failover]]
  - bridgesTo:: [[Infrastructure]]
  - enables:: [[High Availability]]
  - relatedTo:: [[Content Delivery Network]]
  - relatedTo:: [[Geographic Distribution]]
