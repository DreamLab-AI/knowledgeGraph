public:: true

# Haptics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e122faa66c0cb3c67082128f04433650ef7eb843bbfe5c9efe80fc023f51a5e9",
  "@type": "Page",
  "vc:slug": "haptics",
  "title": "Haptics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:force-feedback",
      "vc:label": "Force Feedback"
    },
    {
      "@id": "urn:visionflow:linked:force-feedback-actuators",
      "vc:label": "Force Feedback Actuators"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-960",
      "vc:label": "ISO 9241-960"
    },
    {
      "@id": "urn:visionflow:linked:low-latency-communication",
      "vc:label": "Low Latency Communication"
    },
    {
      "@id": "urn:visionflow:linked:physical-presence",
      "vc:label": "Physical Presence"
    },
    {
      "@id": "urn:visionflow:linked:piezoelectric-sensors",
      "vc:label": "Piezoelectric Sensors"
    },
    {
      "@id": "urn:visionflow:linked:signal-processing-unit",
      "vc:label": "Signal Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:tactile-actuators",
      "vc:label": "Tactile Actuators"
    },
    {
      "@id": "urn:visionflow:linked:tactile-feedback",
      "vc:label": "Tactile Feedback"
    },
    {
      "@id": "urn:visionflow:linked:texture-simulation",
      "vc:label": "Texture Simulation"
    },
    {
      "@id": "urn:visionflow:linked:vibration-motors",
      "vc:label": "Vibration Motors"
    },
    {
      "@id": "urn:visionflow:owl:class:driver-software",
      "vc:label": "Driver Software"
    },
    {
      "@id": "urn:visionflow:owl:class:human-interface-device",
      "vc:label": "Human Interface Device"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "PhysicalLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:power-supply",
      "vc:label": "Power Supply"
    },
    {
      "@id": "urn:visionflow:owl:class:real-time-processing",
      "vc:label": "Real-time Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20153"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Haptics"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:haptics",
  "@type": "Class",
  "label": "Haptics",
  "definition": "Physical hardware systems that simulate tactile sensations and force feedback within virtual environments through actuators and sensors.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:force-feedback-actuators",
        "label": "Force Feedback Actuators"
      },
      {
        "@id": "urn:ngm:class:piezoelectric-sensors",
        "label": "Piezoelectric Sensors"
      },
      {
        "@id": "urn:ngm:class:tactile-actuators",
        "label": "Tactile Actuators"
      },
      {
        "@id": "urn:ngm:class:vibration-motors",
        "label": "Vibration Motors"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:signal-processing-unit",
        "label": "Signal Processing Unit"
      },
      {
        "@id": "urn:ngm:class:driver-software",
        "label": "Driver Software"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:force-feedback",
        "label": "Force Feedback"
      },
      {
        "@id": "urn:ngm:class:physical-presence",
        "label": "Physical Presence"
      },
      {
        "@id": "urn:ngm:class:tactile-feedback",
        "label": "Tactile Feedback"
      },
      {
        "@id": "urn:ngm:class:texture-simulation",
        "label": "Texture Simulation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:human-interface-device",
        "label": "Human Interface Device"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:haptics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e122faa66c0cb3c67082128f04433650ef7eb843bbfe5c9efe80fc023f51a5e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Force Feedback]]",
      "resolved": "urn:visionflow:linked:force-feedback",
      "kind": "StubLink"
    },
    {
      "raw": "[[Force Feedback Actuators]]",
      "resolved": "urn:visionflow:linked:force-feedback-actuators",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO 9241-960]]",
      "resolved": "urn:visionflow:linked:iso-9241-960",
      "kind": "StubLink"
    },
    {
      "raw": "[[Low Latency Communication]]",
      "resolved": "urn:visionflow:linked:low-latency-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Physical Presence]]",
      "resolved": "urn:visionflow:linked:physical-presence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Piezoelectric Sensors]]",
      "resolved": "urn:visionflow:linked:piezoelectric-sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Signal Processing Unit]]",
      "resolved": "urn:visionflow:linked:signal-processing-unit",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tactile Actuators]]",
      "resolved": "urn:visionflow:linked:tactile-actuators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tactile Feedback]]",
      "resolved": "urn:visionflow:linked:tactile-feedback",
      "kind": "StubLink"
    },
    {
      "raw": "[[Texture Simulation]]",
      "resolved": "urn:visionflow:linked:texture-simulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Vibration Motors]]",
      "resolved": "urn:visionflow:linked:vibration-motors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Driver Software]]",
      "resolved": "urn:visionflow:owl:class:driver-software",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human Interface Device]]",
      "resolved": "urn:visionflow:owl:class:human-interface-device",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PhysicalLayer]]",
      "resolved": "urn:visionflow:owl:class:physical-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Power Supply]]",
      "resolved": "urn:visionflow:owl:class:power-supply",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-time Processing]]",
      "resolved": "urn:visionflow:owl:class:real-time-processing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Physical hardware systems that simulate tactile sensations and force feedback within virtual environments through actuators and sensors.
- ### Semantic Classification
  - owl-class:: spatial-computing:Haptics
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[PhysicalLayer]]
- ### Relationships
  - has-part:: [[Force Feedback Actuators]], [[Tactile Actuators]], [[Vibration Motors]], [[Piezoelectric Sensors]]
  - is-part-of:: [[Human Interface Device]]
  - requires:: [[Power Supply]], [[Signal Processing Unit]], [[Driver Software]]
  - enables:: [[Tactile Feedback]], [[Force Feedback]], [[Texture Simulation]], [[Physical Presence]]
  - depends-on:: [[Real-time Processing]], [[Low Latency Communication]]
- ### Content
  Haptics — content pending enrichment.
- ### Provenance
  - sources:: [[ISO 9241-960]]
  - migration-date:: 2026-04-26T00:00:00Z
