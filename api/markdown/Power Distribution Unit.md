public:: true

# Power Distribution Unit
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:power-distribution-unit",
  "@type": "Page",
  "title": "Power Distribution Unit",
  "vc:slug": "power-distribution-unit",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-distribution-unit",
  "@type": "Class",
  "label": "Power Distribution Unit",
  "definition": "A power distribution unit (PDU) is a device that delivers and manages electrical power to multiple pieces of equipment within a data centre rack or row. It takes input from an upstream supply such as a UPS or the building electrical feed and distributes regulated, often metered, power across many outlets. Modern intelligent PDUs add remote monitoring, per-outlet switching and environmental sensing to support availability and energy-efficiency goals.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computing-infrastructure",
      "label": "Computing Infrastructure"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:computing-infrastructure",
        "label": "Computing Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      },
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:energy-and-power",
        "label": "Energy and Power"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:redundancy",
        "label": "Redundancy"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      },
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      },
      {
        "@id": "urn:ngm:class:energy-efficiency",
        "label": "Energy Efficiency"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cooling-system",
        "label": "Cooling System"
      },
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
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
  - A [[Power Distribution Unit]] manages [[Energy and Power]] delivery within a [[Data Centre]], drawing from a [[Power Supply]] and supporting [[Redundancy]] and [[High Availability]].
- ### Overview
  - A PDU sits between an upstream power source and the equipment it feeds, providing a controlled set of outlets at the rack level.
  - Basic PDUs simply split a circuit, while intelligent (metered, monitored or switched) PDUs report consumption and allow remote control.
  - PDUs are a core element of data-centre power architecture, contributing to availability targets and to power-usage-effectiveness measurement.
- ### Key aspects
  - Outlet density, form factor (vertical/horizontal) and supported voltage/current ratings.
  - Metering granularity (inlet, branch or per-outlet) for capacity planning and billing.
  - Remote switching for staged power-up, load shedding and recovery automation.
  - Environmental sensing (temperature, humidity) integrated for thermal management.
- ### Applications
  - Rack-level power delivery in enterprise and colocation data centres.
  - Per-outlet metering for chargeback and energy-efficiency reporting.
  - Remote reboot of unresponsive equipment without on-site staff.
  - Capacity and redundancy planning across A/B power feeds.
- ### Relationships
  - partOf:: [[Data Centre]]
  - partOf:: [[Computing Infrastructure]]
  - hasPart:: [[Power Supply]]
  - hasPart:: [[Monitoring]]
  - dependsOn:: [[Energy and Power]]
  - dependsOn:: [[Power Supply]]
  - requires:: [[Redundancy]]
  - requires:: [[High Availability]]
  - supports:: [[Data Centre]]
  - supports:: [[High Availability]]
  - supports:: [[Energy Efficiency]]
  - enables:: [[Observability]]
  - enables:: [[Fault Tolerance]]
  - contrastsWith:: [[Power Supply]]
  - relatedTo:: [[Cooling System]]
  - relatedTo:: [[Sustainability]]
- ### Provenance
  - This class was materialised to resolve existing inbound references in the knowledge graph.
  - updated:: 2026-06-15
