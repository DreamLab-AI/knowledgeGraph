public:: true

# Profinet
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:profinet",
  "@type": "Page",
  "title": "Profinet",
  "vc:slug": "profinet",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:profinet",
  "@type": "Class",
  "label": "Profinet",
  "definition": "PROFINET is an open industrial Ethernet standard for real-time communication between controllers, devices and supervisory systems in factory and process automation. Built on standard Ethernet, it supports cyclic real-time data exchange, isochronous motion control and integration with IT networks, while remaining interoperable through the PROFIBUS and PROFINET International organisation. It is widely used to connect programmable logic controllers to distributed I/O, drives and sensors.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:industrial-automation",
      "label": "Industrial Automation"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fieldbus",
        "label": "Fieldbus"
      },
      {
        "@id": "urn:ngm:class:opc-ua",
        "label": "OPC UA"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethernet",
        "label": "Ethernet"
      },
      {
        "@id": "urn:ngm:class:industrial-ethernet",
        "label": "Industrial Ethernet"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:time-sensitive-networking",
        "label": "Time-Sensitive Networking"
      },
      {
        "@id": "urn:ngm:class:scada",
        "label": "SCADA"
      },
      {
        "@id": "urn:ngm:class:deterministic-networking",
        "label": "Deterministic Networking"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "Industrial Automation"
      },
      {
        "@id": "urn:ngm:class:sensor-network",
        "label": "Sensor Network"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ethernet",
        "label": "Ethernet"
      },
      {
        "@id": "urn:ngm:class:real-time-systems",
        "label": "Real-Time Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deterministic-networking",
        "label": "Deterministic Networking"
      },
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:industrial-ethernet",
        "label": "Industrial Ethernet"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "Industrial Automation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "Industrial Automation"
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
  - [[Profinet]] is an [[Infrastructure]] industrial Ethernet standard for [[Real-Time Communication]] in [[Industrial Automation]], running over [[Ethernet]] and related to [[Time-Sensitive Networking]].
- ### Overview
  - PROFINET brings real-time, deterministic communication to standard Ethernet hardware, letting controllers exchange process data with distributed I/O, drives and sensors at industrial cycle times.
  - It coexists with general IT traffic on the same wire and integrates with engineering, diagnostics and asset-management tools.
- ### Key aspects
  - Real-time channels: cyclic RT for fast control and isochronous IRT for synchronised motion.
  - Standard Ethernet base: reuses commodity switches and cabling unlike legacy fieldbuses.
  - Device model: GSDML descriptions and conformance classes ensure interoperability.
- ### Applications
  - Factory automation linking PLCs to remote I/O and intelligent devices.
  - Motion control and synchronised multi-axis machinery.
  - Convergence of operational and information technology networks in Industry 4.0.
- ### Relationships
  - contrastsWith:: [[Fieldbus]]
  - contrastsWith:: [[OPC UA]]
  - uses:: [[Ethernet]]
  - uses:: [[Industrial Ethernet]]
  - uses:: [[Real-Time Communication]]
  - relatedTo:: [[Time-Sensitive Networking]]
  - relatedTo:: [[SCADA]]
  - relatedTo:: [[Deterministic Networking]]
  - supports:: [[Industrial Automation]]
  - supports:: [[Sensor Network]]
  - requires:: [[Ethernet]]
  - requires:: [[Real-Time Systems]]
  - enables:: [[Deterministic Networking]]
  - enables:: [[Real-Time Communication]]
  - dependsOn:: [[Industrial Ethernet]]
  - implements:: [[Industrial Automation]]
  - partOf:: [[Industrial Automation]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
