public:: true

# Human Interface Device
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e9472fd01f847516daa52197dd44081f4c07d265ee2e00de3fa2623715cdee0d",
  "@type": "Page",
  "vc:slug": "human-interface-device",
  "title": "Human Interface Device",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bluetooth",
      "vc:label": "Bluetooth"
    },
    {
      "@id": "urn:visionflow:linked:calibration",
      "vc:label": "Calibration"
    },
    {
      "@id": "urn:visionflow:linked:communication-interface",
      "vc:label": "Communication Interface"
    },
    {
      "@id": "urn:visionflow:linked:device-drivers",
      "vc:label": "Device Drivers"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:input-sensors",
      "vc:label": "Input Sensors"
    },
    {
      "@id": "urn:visionflow:linked:interaction-system",
      "vc:label": "Interaction System"
    },
    {
      "@id": "urn:visionflow:linked:output-actuators",
      "vc:label": "Output Actuators"
    },
    {
      "@id": "urn:visionflow:linked:power-management",
      "vc:label": "Power Management"
    },
    {
      "@id": "urn:visionflow:linked:tracking-components",
      "vc:label": "Tracking Components"
    },
    {
      "@id": "urn:visionflow:linked:usb-protocol",
      "vc:label": "USB Protocol"
    },
    {
      "@id": "urn:visionflow:linked:user-input",
      "vc:label": "User Input"
    },
    {
      "@id": "urn:visionflow:linked:wireless-communication",
      "vc:label": "Wireless Communication"
    },
    {
      "@id": "urn:visionflow:owl:class:haptic-feedback",
      "vc:label": "Haptic Feedback"
    },
    {
      "@id": "urn:visionflow:owl:class:haptics",
      "vc:label": "Haptics"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-tracking",
      "vc:label": "Motion Tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "PhysicalLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-interaction",
      "vc:label": "Spatial Interaction"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20154"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Human Interface Device"
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
  "@id": "urn:ngm:class:human-interface-device",
  "@type": "Class",
  "label": "Human Interface Device",
  "definition": "Physical hardware component enabling user input or feedback in immersive systems through controllers, sensors, and actuators.",
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
        "@id": "urn:ngm:class:communication-interface",
        "label": "Communication Interface"
      },
      {
        "@id": "urn:ngm:class:input-sensors",
        "label": "Input Sensors"
      },
      {
        "@id": "urn:ngm:class:output-actuators",
        "label": "Output Actuators"
      },
      {
        "@id": "urn:ngm:class:tracking-components",
        "label": "Tracking Components"
      },
      {
        "@id": "urn:ngm:class:haptics",
        "label": "Haptics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      },
      {
        "@id": "urn:ngm:class:device-drivers",
        "label": "Device Drivers"
      },
      {
        "@id": "urn:ngm:class:power-management",
        "label": "Power Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:user-input",
        "label": "User Input"
      },
      {
        "@id": "urn:ngm:class:haptic-feedback",
        "label": "Haptic Feedback"
      },
      {
        "@id": "urn:ngm:class:motion-tracking",
        "label": "Motion Tracking"
      },
      {
        "@id": "urn:ngm:class:spatial-interaction",
        "label": "Spatial Interaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:interaction-system",
        "label": "Interaction System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:human-interface-device:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e9472fd01f847516daa52197dd44081f4c07d265ee2e00de3fa2623715cdee0d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bluetooth]]",
      "resolved": "urn:visionflow:linked:bluetooth",
      "kind": "StubLink"
    },
    {
      "raw": "[[Calibration]]",
      "resolved": "urn:visionflow:linked:calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Communication Interface]]",
      "resolved": "urn:visionflow:linked:communication-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[Device Drivers]]",
      "resolved": "urn:visionflow:linked:device-drivers",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[Input Sensors]]",
      "resolved": "urn:visionflow:linked:input-sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interaction System]]",
      "resolved": "urn:visionflow:linked:interaction-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Output Actuators]]",
      "resolved": "urn:visionflow:linked:output-actuators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Power Management]]",
      "resolved": "urn:visionflow:linked:power-management",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tracking Components]]",
      "resolved": "urn:visionflow:linked:tracking-components",
      "kind": "StubLink"
    },
    {
      "raw": "[[USB Protocol]]",
      "resolved": "urn:visionflow:linked:usb-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Input]]",
      "resolved": "urn:visionflow:linked:user-input",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wireless Communication]]",
      "resolved": "urn:visionflow:linked:wireless-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Haptic Feedback]]",
      "resolved": "urn:visionflow:owl:class:haptic-feedback",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Haptics]]",
      "resolved": "urn:visionflow:owl:class:haptics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Tracking]]",
      "resolved": "urn:visionflow:owl:class:motion-tracking",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PhysicalLayer]]",
      "resolved": "urn:visionflow:owl:class:physical-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Interaction]]",
      "resolved": "urn:visionflow:owl:class:spatial-interaction",
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
  - Physical hardware component enabling user input or feedback in immersive systems through controllers, sensors, and actuators.

- ### Semantic Classification
  - owl-class:: spatial-computing:HumanInterfaceDevice
  - owl-role:: Object
  - owl-inferred:: spatial-computing:PhysicalObject
  - belongs-to-domain:: [[InteractionDomain]]
  - implemented-in-layer:: [[PhysicalLayer]]

- ### Relationships
  - has-part:: [[Input Sensors]], [[Output Actuators]], [[Haptics]], [[Tracking Components]], [[Communication Interface]]
  - is-part-of:: [[Interaction System]]
  - requires:: [[Power Management]], [[Device Drivers]], [[Calibration]]
  - enables:: [[User Input]], [[Haptic Feedback]], [[Motion Tracking]], [[Spatial Interaction]]
  - depends-on:: [[USB Protocol]], [[Bluetooth]], [[Wireless Communication]]

- ### Content
  Human Interface Device — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]]
  - migration-date:: 2026-04-26T00:00:00Z
