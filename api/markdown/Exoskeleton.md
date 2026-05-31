public:: true

# Exoskeleton
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:81d0fabe39830f896a1eab244db31c4b2aee2c9bad7b2785c27c6df95822c6a8",
  "@type": "Page",
  "vc:slug": "exoskeleton",
  "title": "Exoskeleton",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuator",
      "vc:label": "Actuator"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:assistive-robotics",
      "vc:label": "Assistive Robotics"
    },
    {
      "@id": "urn:visionflow:linked:human-robot-collaboration",
      "vc:label": "Human-Robot Collaboration"
    },
    {
      "@id": "urn:visionflow:linked:human-robot-interaction",
      "vc:label": "Human Robot Interaction"
    },
    {
      "@id": "urn:visionflow:linked:exoskeleton-robot",
      "vc:label": "Exoskeleton Robot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Exoskeleton"
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
  "@id": "urn:ngm:class:exoskeleton",
  "@type": "Class",
  "label": "Exoskeleton",
  "definition": "An exoskeleton is a wearable robotic structure that augments or supports human movement by applying forces in parallel with the wearer's limbs, used for assistance, rehabilitation and load support.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:exoskeleton-robot",
      "label": "Exoskeleton Robot"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:assistive-robotics",
        "label": "Assistive Robotics"
      },
      {
        "@id": "urn:ngm:class:human-robot-collaboration",
        "label": "Human-Robot Collaboration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:exoskeleton:7b35ca031410",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:81d0fabe39830f896a1eab244db31c4b2aee2c9bad7b2785c27c6df95822c6a8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Actuator]]",
      "resolved": "urn:visionflow:linked:actuator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Assistive Robotics]]",
      "resolved": "urn:visionflow:linked:assistive-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human-Robot Collaboration]]",
      "resolved": "urn:visionflow:linked:human-robot-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Human Robot Interaction]]",
      "resolved": "urn:visionflow:linked:human-robot-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Exoskeleton Robot]]",
      "resolved": "urn:visionflow:linked:exoskeleton-robot",
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
  - An exoskeleton is a wearable robotic structure that augments or supports human movement by applying forces in parallel with the wearer's limbs, used for assistance, rehabilitation and load support.

- ### Semantic Classification
  - owl-class:: robotics:Exoskeleton
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Exoskeleton Robot]]
  - bridges-to:: [[Human Robot Interaction]]
  - requires:: [[Actuator]], [[Sensor Fusion]]
  - enables:: [[Assistive Robotics]], [[Human-Robot Collaboration]]

- ### Content
  - An exoskeleton attaches to the body and uses actuators, sensors and control to add torque at joints, reducing effort or restoring movement. Sensing of joint angles, forces and the wearer's intent drives control that must remain compliant and safe in close physical contact.
  - Applications include industrial load support, mobility assistance and rehabilitation after injury. As a wearable robot in direct contact with a person, the exoskeleton is a demanding case of human-robot collaboration where comfort, safety and responsiveness are tightly coupled.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
