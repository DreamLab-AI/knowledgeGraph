public:: true

# CAN Bus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e97ad1b0fa0e064d02e5503ed0462738b23f73e3747500a6a703723400994bb0",
  "@type": "Page",
  "vc:slug": "can-bus",
  "title": "CAN Bus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:embedded-systems",
      "vc:label": "Embedded Systems"
    },
    {
      "@id": "urn:visionflow:linked:real-time-control",
      "vc:label": "Real-Time Control"
    },
    {
      "@id": "urn:visionflow:linked:motor-driver",
      "vc:label": "Motor Driver"
    },
    {
      "@id": "urn:visionflow:linked:micro-ros",
      "vc:label": "micro-ROS"
    },
    {
      "@id": "urn:visionflow:linked:power-electronics",
      "vc:label": "Power Electronics"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "CAN Bus"
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
  "@id": "urn:ngm:class:can-bus",
  "@type": "Class",
  "label": "CAN Bus",
  "definition": "CAN Bus (Controller Area Network) is a reliable serial communication standard that lets microcontrollers and devices exchange messages over a shared two-wire bus without a host computer, widely used in vehicles and robotics.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:communication-protocol",
      "label": "Communication Protocol"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      },
      {
        "@id": "urn:ngm:class:motor-driver",
        "label": "Motor Driver"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:can-bus:d615a5799cc2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e97ad1b0fa0e064d02e5503ed0462738b23f73e3747500a6a703723400994bb0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Embedded Systems]]",
      "resolved": "urn:visionflow:linked:embedded-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Control]]",
      "resolved": "urn:visionflow:linked:real-time-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motor Driver]]",
      "resolved": "urn:visionflow:linked:motor-driver",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[micro-ROS]]",
      "resolved": "urn:visionflow:linked:micro-ros",
      "kind": "StubLink"
    },
    {
      "raw": "[[Power Electronics]]",
      "resolved": "urn:visionflow:linked:power-electronics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
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
  - CAN Bus (Controller Area Network) is a reliable serial communication standard that lets microcontrollers and devices exchange messages over a shared two-wire bus without a host computer, widely used in vehicles and robotics.

- ### Semantic Classification
  - owl-class:: robotics:CANBus
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Communication Protocol]]
  - bridges-to:: [[micro-ROS]], [[Power Electronics]]
  - requires:: [[Embedded Systems]]
  - enables:: [[Real-Time Control]], [[Motor Driver]]

- ### Content
  - CAN Bus uses a message-based, priority-arbitrated protocol on a differential pair, giving deterministic access and strong noise immunity suited to electrically harsh environments. Nodes broadcast identified frames and any device can receive messages relevant to it without point-to-point wiring.
  - Originally developed for automotive networks, CAN is widely adopted in industrial machinery, robotics and motor control because of its reliability and low cabling overhead. It connects controllers, sensors and actuators within distributed embedded systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
