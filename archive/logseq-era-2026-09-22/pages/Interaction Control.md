public:: true

# Interaction Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:352e487d458eefb05cf5ff6ba934199f5b019c8b386ce8b7b459670f16b5783e",
  "@type": "Page",
  "vc:slug": "interaction-control",
  "title": "Interaction Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9514"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Interaction Control"
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
  "@id": "urn:ngm:class:interaction-control",
  "@type": "Class",
  "label": "Interaction Control",
  "definition": "A robotics control paradigm that explicitly manages contact forces and compliant behaviour when a robot interacts with its environment or human collaborators. Interaction control encompasses impedance control, admittance control, and force control strategies that allow robots to operate safely during physical contact, adapting stiffness, damping, and inertia in response to sensed forces.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-robot-interaction",
      "label": "Human-Robot Interaction"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:impedance-control",
        "label": "Impedance Control"
      },
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:control-system",
        "label": "Control System"
      },
      {
        "@id": "urn:ngm:class:robot-sensor",
        "label": "Robot Sensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:motion-control",
        "label": "Motion Control"
      },
      {
        "@id": "urn:ngm:class:robot-safety",
        "label": "Robot Safety"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:interaction-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:352e487d458eefb05cf5ff6ba934199f5b019c8b386ce8b7b459670f16b5783e"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A robotics control paradigm that explicitly manages contact forces and compliant behaviour when a robot interacts with its environment or human collaborators. Interaction control encompasses impedance control, admittance control, and force control strategies that allow robots to operate safely during physical contact, adapting stiffness, damping, and inertia in response to sensed forces.

- ### Semantic Classification
  - owl-class:: robotics:InteractionControl
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: Human-Robot Interaction
  - Has Part [[Impedance Control]]
  - Has Part [[Force Control]]
  - Requires [[Control System]]
  - Requires [[Robot Sensor]]
  - Enables [[Human Robot Interaction]]
  - Related To [[Motion Control]]
  - Related To [[Robot Safety]]

- ### Content

  ## Overview

  Interaction control governs how a robot manages physical contact with objects and people. Unlike pure position control, interaction control strategies such as impedance and force control allow the robot to adapt its mechanical behaviour in response to sensed contact forces. This is essential for safe human-robot collaboration, assembly tasks, and teleoperation in unstructured environments.

  #### Related Concepts
  - [[Impedance Control]]
  - [[Force Control]]
  - [[Human Robot Interaction]]
  - [[Motion Control]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
