public:: true

# SCADA

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:scada",
  "@type": "Page",
  "title": "SCADA",
  "vc:slug": "scada",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:scada",
  "@type": "Class",
  "label": "SCADA",
  "definition": "SCADA (Supervisory Control and Data Acquisition) is a control-system architecture that uses computers, networked data communications and graphical interfaces to monitor and supervise industrial processes across geographically distributed sites. It gathers real-time telemetry from field sensors and controllers, presents it to operators, and issues supervisory commands back to actuators and programmable controllers. SCADA underpins critical infrastructure such as power grids, water treatment, manufacturing and pipeline operations.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:industrial-automation",
      "label": "IndustrialAutomation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:real-time-monitoring",
        "label": "Real-Time Monitoring"
      },
      {
        "@id": "urn:ngm:class:data-serialization",
        "label": "Data Serialization"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      },
      {
        "@id": "urn:ngm:class:manufacturing-automation",
        "label": "Manufacturing Automation"
      },
      {
        "@id": "urn:ngm:class:energy-management",
        "label": "Energy Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:process-control",
        "label": "Process Control"
      },
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:building-automation",
        "label": "Building Automation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      },
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:process-control",
        "label": "Process Control"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards-organization",
        "label": "Standards Organization"
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
  - SCADA (Supervisory Control and Data Acquisition) is a control-system architecture that uses computers, networked data communications and graphical interfaces to monitor and supervise industrial processes across geographically distributed sites. It gathers real-time telemetry from field sensors and controllers, presents it to operators, and issues supervisory commands back to actuators and programmable controllers. SCADA underpins critical infrastructure such as power grids, water treatment, manufacturing and pipeline operations.
  - Related concepts: [[IndustrialAutomation]] [[Real-Time Monitoring]] [[Control System]] [[Sensor]] [[Smart Grid]]
- ### Overview
  - SCADA systems sit at the supervisory layer above field controllers, aggregating telemetry from distributed sites into a central operator view.
  - They combine human-machine interfaces, communication networks and historian databases to monitor and control physical processes.
  - Because SCADA controls critical infrastructure, its reliability and security are of national importance.
- ### Key aspects
  - Field devices such as [[Sensor]] and [[Actuator]] elements feed signals into remote terminal units and controllers.
  - [[Real-Time Monitoring]] presents live process state and alarms to operators.
  - Communication relies on industrial [[Network Protocol]] standards for deterministic data exchange.
  - Historian and [[Data Serialization]] components log time-series data for analysis and compliance.
- ### Applications
  - Supervisory control of [[Smart Grid]] and electrical-distribution networks.
  - Monitoring of [[Manufacturing Automation]] lines and process plants.
  - [[Energy Management]] and [[Building Automation]] across distributed sites.
  - Pipeline, water-treatment and utility-operations oversight.
- ### Relationships
  - subClassOf:: [[IndustrialAutomation]]
  - hasPart:: [[Real-Time Monitoring]]
  - hasPart:: [[Data Serialization]]
  - hasPart:: [[Sensor]]
  - hasPart:: [[Actuator]]
  - requires:: [[Sensor]]
  - requires:: [[Network Protocol]]
  - supports:: [[Smart Grid]]
  - supports:: [[Manufacturing Automation]]
  - supports:: [[Energy Management]]
  - uses:: [[Process Control]]
  - uses:: [[Control System]]
  - enables:: [[Building Automation]]
  - relatedTo:: [[IndustrialAutomation]]
  - relatedTo:: [[Control System]]
  - relatedTo:: [[Process Control]]
  - standardizedBy:: [[Standards Organization]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
