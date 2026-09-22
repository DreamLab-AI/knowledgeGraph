public:: true

# IoT Device

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:iot-device",
  "@type": "Page",
  "title": "IoT Device",
  "vc:slug": "iot-device",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:iot-device",
  "@type": "Class",
  "label": "IoT Device",
  "definition": "An IoT device is a networked physical object embedding sensing, processing and communication capabilities that allows it to collect, exchange and act on data over a network. Such devices range from simple sensors and actuators to complex embedded systems, and typically operate under tight power, compute and bandwidth constraints. They form the edge of the Internet of Things, feeding data to gateways, edge nodes and cloud services.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:internet-of-things",
      "label": "Internet of Things"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:mqtt",
        "label": "MQTT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:firewall",
        "label": "Firewall"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      },
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
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
  - An IoT device is a networked physical object embedding sensing, processing and communication capabilities that allows it to collect, exchange and act on data over a network. Such devices range from simple sensors and actuators to complex embedded systems, and typically operate under tight power, compute and bandwidth constraints. They form the edge of the Internet of Things, feeding data to gateways, edge nodes and cloud services.
  - Related concepts: [[Internet of Things]] [[Sensor]] [[Actuator]] [[Embedded System]] [[Edge Computing]]
- ### Overview
  - IoT Device is situated within the [[Internet of Things]] area of the infrastructure domain.
  - It connects a number of established concepts in the knowledge graph, anchoring edges that previously referenced it without a defining page.
- ### Key aspects
  - Sensor (hasPart)
  - Actuator (hasPart)
  - Internet of Things (partOf)
  - Embedded System (implements)
  - Network Protocol (uses)
  - MQTT (uses)
- ### Mechanisms
  - Operates through its relationships with [[Internet of Things]] and [[Sensor]].
  - Provides capabilities consumed by dependent and enabled classes listed under Relationships.
- ### Applications
  - Supports [[Edge Computing]]
  - Supports [[Interoperability]]
- ### Relationships
  - subClassOf:: [[Internet of Things]]
  - partOf:: [[Internet of Things]]
  - hasPart:: [[Sensor]]
  - hasPart:: [[Actuator]]
  - implements:: [[Embedded System]]
  - uses:: [[Network Protocol]]
  - uses:: [[MQTT]]
  - enables:: [[Edge Computing]]
  - supports:: [[Interoperability]]
  - dependsOn:: [[Firewall]]
  - bridgesTo:: [[Edge Computing]]
  - bridgesTo:: [[Cloud Computing]]
  - requires:: [[Bandwidth]]
  - relatedTo:: [[Internet Protocol]]
  - relatedTo:: [[Embedded System]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
