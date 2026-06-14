public:: true

# Power Electronics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d314fa7544861e16b55b17c618196bcdc66cbbf0e7b3a408d15072f3bfdcca7b",
  "@type": "Page",
  "vc:slug": "power-electronics",
  "title": "Power Electronics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:motor-driver",
      "vc:label": "Motor Driver"
    },
    {
      "@id": "urn:visionflow:linked:electric-motor",
      "vc:label": "Electric Motor"
    },
    {
      "@id": "urn:visionflow:linked:battery-management-system",
      "vc:label": "Battery Management System"
    },
    {
      "@id": "urn:visionflow:linked:servo-motor",
      "vc:label": "Servo Motor"
    },
    {
      "@id": "urn:visionflow:linked:embedded-systems",
      "vc:label": "Embedded Systems Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Power Electronics"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:power-electronics",
  "@type": "Class",
  "label": "Power Electronics",
  "definition": "Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices such as MOSFETs, IGBTs and SiC transistors, central to motor drives, power supplies, inverters and energy management systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:embedded-systems",
    "label": "Embedded Systems Domain"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:inverter",
        "label": "Inverter"
      },
      {
        "@id": "urn:ngm:class:rectifier",
        "label": "Rectifier"
      },
      {
        "@id": "urn:ngm:class:dc-dc-converter",
        "label": "DC-DC Converter"
      },
      {
        "@id": "urn:ngm:class:gate-driver",
        "label": "Gate Driver"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems Domain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:switching-semiconductor",
        "label": "Switching Semiconductor"
      },
      {
        "@id": "urn:ngm:class:thermal-management",
        "label": "Thermal Management"
      },
      {
        "@id": "urn:ngm:class:electromagnetic-compatibility",
        "label": "Electromagnetic Compatibility"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      },
      {
        "@id": "urn:ngm:class:electric-motor",
        "label": "Electric Motor"
      },
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      },
      {
        "@id": "urn:ngm:class:variable-frequency-drive",
        "label": "Variable Frequency Drive"
      },
      {
        "@id": "urn:ngm:class:wireless-power-transfer",
        "label": "Wireless Power Transfer"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:pulse-width-modulation",
        "label": "Pulse Width Modulation"
      },
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mosfet",
        "label": "MOSFET"
      },
      {
        "@id": "urn:ngm:class:igbt",
        "label": "IGBT"
      },
      {
        "@id": "urn:ngm:class:silicon-carbide",
        "label": "Silicon Carbide"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:battery-management-system",
        "label": "Battery Management System"
      },
      {
        "@id": "urn:ngm:class:renewable-energy-integration",
        "label": "Renewable Energy Integration"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee-standards",
        "label": "IEEE Standards"
      },
      {
        "@id": "urn:ngm:class:iec-61800",
        "label": "IEC 61800"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:linear-power-supply",
        "label": "Linear Power Supply"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:electric-vehicle",
        "label": "Electric Vehicle"
      },
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:energy-harvesting",
        "label": "Energy Harvesting"
      },
      {
        "@id": "urn:ngm:class:microcontroller",
        "label": "Microcontroller"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:power-conversion-electronics",
      "label": "Power Conversion Electronics"
    },
    {
      "@id": "urn:ngm:class:electronic-power-control",
      "label": "Electronic Power Control"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:power-electronics:0882f0601c67",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d314fa7544861e16b55b17c618196bcdc66cbbf0e7b3a408d15072f3bfdcca7b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Motor Driver]]",
      "resolved": "urn:visionflow:linked:motor-driver",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Electric Motor]]",
      "resolved": "urn:visionflow:linked:electric-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Battery Management System]]",
      "resolved": "urn:visionflow:linked:battery-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Servo Motor]]",
      "resolved": "urn:visionflow:linked:servo-motor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embedded Systems Domain]]",
      "resolved": "urn:visionflow:linked:embedded-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Power electronics is the engineering discipline concerned with the conversion and control of electrical power using switching semiconductor devices, central to motor drives, power supplies and energy systems.

- ### Semantic Classification
  - owl-class:: robotics:PowerElectronics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Embedded Systems Domain]]
  - bridges-to:: [[Battery Management System]], [[Servo Motor]]
  - enables:: [[Motor Driver]], [[Electric Motor]]
  - hasPart:: [[Inverter]], [[Rectifier]], [[DC-DC Converter]], [[Gate Driver]]
  - requires:: [[Switching Semiconductor]], [[Thermal Management]], [[Electromagnetic Compatibility]]
  - enables:: [[Variable Frequency Drive]], [[Wireless Power Transfer]]
  - dependsOn:: [[Pulse Width Modulation]], [[Feedback Control]]
  - uses:: [[MOSFET]], [[IGBT]], [[Silicon Carbide]]
  - supports:: [[Renewable Energy Integration]]
  - standardizedBy:: [[IEEE Standards]], [[IEC 61800]]
  - contrastsWith:: [[Linear Power Supply]]
  - bridgesTo:: [[Robotics]], [[Electric Vehicle]], [[Smart Grid]]
  - relatedTo:: [[Energy Harvesting]], [[Microcontroller]]

- ### Content
  - Power electronics uses switching converters such as inverters, rectifiers and DC-DC stages to transform voltage, current and frequency efficiently, controlling the flow of electrical energy with minimal loss. Switching devices are modulated to shape output waveforms for the load.
  - In robotics it underpins motor drives, battery management and power supply regulation, directly affecting actuator performance, efficiency and thermal behaviour. Reliable power conversion is a prerequisite for electric actuation in mobile and articulated robots.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
