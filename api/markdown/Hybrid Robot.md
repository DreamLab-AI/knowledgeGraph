public:: true

# Hybrid Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7a32a284ed5734e13ed5bbf0b395c091e19fe69895dcce8a4987b36b45744088",
  "@type": "Page",
  "vc:slug": "hybrid-robot",
  "title": "Hybrid Robot",
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
      "vc:value": "RB-9512"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hybrid Robot"
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
  "@id": "urn:ngm:class:hybrid-robot",
  "@type": "Class",
  "label": "Hybrid Robot",
  "definition": "A robotic system that combines two or more distinct locomotion or manipulation modalities—such as wheeled and legged movement, or fixed-base and mobile operation—to extend operational range and adaptability across heterogeneous environments. Hybrid robots exploit the efficiency of specialised subsystems whilst maintaining versatility that no single modality can achieve alone.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
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
        "@id": "urn:ngm:class:robot-actuator",
        "label": "Robot Actuator"
      },
      {
        "@id": "urn:ngm:class:robot-sensor",
        "label": "Robot Sensor"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feedback-control",
        "label": "Feedback Control"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      },
      {
        "@id": "urn:ngm:class:collaborative-robot",
        "label": "Collaborative Robot"
      },
      {
        "@id": "urn:ngm:class:robotic-system",
        "label": "Robotic System"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:hybrid-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7a32a284ed5734e13ed5bbf0b395c091e19fe69895dcce8a4987b36b45744088"
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
  - A robotic system that combines two or more distinct locomotion or manipulation modalities—such as wheeled and legged movement, or fixed-base and mobile operation—to extend operational range and adaptability across heterogeneous environments. Hybrid robots exploit the efficiency of specialised subsystems whilst maintaining versatility that no single modality can achieve alone.

- ### Semantic Classification
  - owl-class:: robotics:HybridRobot
  - owl-role:: concept

- ### Relationships
  - Has part [[Robot Actuator]], [[Robot Sensor]]
  - Uses [[Feedback Control]], [[Sensor Fusion]]
  - Related to [[Autonomous Robot]], [[Collaborative Robot]], [[Robotic System]]

- ### Content

  ## Overview

  Hybrid Robot represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
