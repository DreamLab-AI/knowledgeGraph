public:: true

# IoT Sensor
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:iot-sensor",
  "@type": "Page",
  "title": "IoT Sensor",
  "vc:slug": "iot-sensor",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iot-sensor",
  "@type": "Class",
  "label": "IoT Sensor",
  "definition": "An IoT sensor is a networked device that measures physical or environmental conditions — such as temperature, humidity, location, vibration or light — and transmits the resulting data over a communications network to back-end systems for monitoring and analysis. By embedding sensing and connectivity into assets and environments, IoT sensors provide continuous, real-time visibility that supports automation and data-driven decisions. In supply chains they are central to cold-chain monitoring, asset tracking and condition-based maintenance.",
  "domain": "supply-chain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sensor",
      "label": "Sensor"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:traceability",
        "label": "Traceability"
      },
      {
        "@id": "urn:ngm:class:provenance-tracking",
        "label": "Provenance Tracking"
      },
      {
        "@id": "urn:ngm:class:asset-management-system",
        "label": "Asset Management System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:food-safety",
        "label": "Food Safety"
      },
      {
        "@id": "urn:ngm:class:digital-product-passport",
        "label": "Digital Product Passport"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:oracle",
        "label": "Oracle"
      },
      {
        "@id": "urn:ngm:class:supply-chain",
        "label": "Supply Chain"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:asset-management-system",
        "label": "Asset Management System"
      },
      {
        "@id": "urn:ngm:class:supply-chain-management",
        "label": "Supply Chain Management"
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
  - An IoT sensor is a networked device that measures physical or environmental conditions — such as temperature, humidity, location, vibration or light — and transmits the resulting data over a communications network to back-end systems for monitoring and analysis. By embedding sensing and connectivity into assets and environments, IoT sensors provide continuous, real-time visibility that supports automation and data-driven decisions. In supply chains they are central to cold-chain monitoring, asset tracking and condition-based maintenance.
  - Related: [[Sensor]] [[Supply Chain Management]] [[Edge Computing]] [[Traceability]]
- ### Overview
  - IoT sensors combine a sensing element, embedded processing, power management and a network interface into a compact, often battery-powered device. They sample physical quantities on a schedule or by event, may pre-process readings at the edge to reduce bandwidth, and stream data to gateways or cloud platforms over wireless protocols. In supply chains, fleets of such sensors yield granular, time-stamped records of where goods are and the conditions they experience, feeding traceability systems and, via oracles, even blockchain-based provenance ledgers.
- ### Key aspects
  - Sensing modalities: temperature, humidity, GPS, vibration
  - Edge pre-processing and data reduction
  - Wireless connectivity and gateways
  - Power and battery-life constraints
  - Calibration, drift and data quality
  - Integration with oracles and ledgers
- ### Applications
  - Cold-chain monitoring for food and pharmaceuticals
  - Real-time asset and shipment tracking
  - Condition-based maintenance of equipment
  - Feeding traceability and provenance systems
  - Supplying verified data to blockchain oracles
- ### Relationships
  - subClassOf:: [[Sensor]]
  - partOf:: [[Supply Chain Management]]
  - requires:: [[Edge Computing]]
  - uses:: [[Sensor]]
  - uses:: [[Sensor Fusion]]
  - enables:: [[Traceability]]
  - enables:: [[Provenance Tracking]]
  - enables:: [[Asset Management System]]
  - supports:: [[Food Safety]]
  - supports:: [[Digital Product Passport]]
  - dependsOn:: [[Edge Computing]]
  - bridgesTo:: [[Oracle]]
  - bridgesTo:: [[Supply Chain]]
  - relatedTo:: [[Asset Management System]]
  - relatedTo:: [[Supply Chain Management]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
