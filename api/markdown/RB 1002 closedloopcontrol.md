public:: true

# RB 1002 closedloopcontrol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:04183e81eec805c83fd2ce94643c2c0e3eff0e9143e8e9aee90861193bf8f930",
  "@type": "Page",
  "vc:slug": "rb-1002-closedloopcontrol",
  "title": "RB 1002 closedloopcontrol",
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
      "vc:value": "RB-9522"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "RB 1002 closedloopcontrol"
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
  "@id": "urn:ngm:class:rb-1002-closedloopcontrol",
  "@type": "Class",
  "label": "RB 1002 closedloopcontrol",
  "definition": "RB 1002 Closed-Loop Control is an ontology term in the NarrativeGoldmine robotics hierarchy denoting the general class of feedback-based control architectures in which sensor measurements of a system's output are continuously fed back to the controller to correct deviations from a desired set-point. As a superclass it subsumes specific strategies including PID control, model-predictive control, adaptive control, and state-estimation-driven controllers used in robotic actuation and manipulation.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:model-predictive-control", "label": "Model Predictive Control"},
      {"@id": "urn:ngm:class:adaptive-control", "label": "Adaptive Control"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trajectory-control", "label": "Trajectory Control"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-1002-closedloopcontrol:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:04183e81eec805c83fd2ce94643c2c0e3eff0e9143e8e9aee90861193bf8f930"
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
  - RB 1002 Closed-Loop Control denotes the general class of feedback-based control architectures in which sensor measurements of a system's output are continuously fed back to the controller to correct deviations from a desired set-point. As a superclass it subsumes PID control, model-predictive control, adaptive control, and state-estimation-driven controllers used in robotic actuation and manipulation.

- ### Semantic Classification
  - owl-class:: robotics:RB1002closedloopcontrol
  - owl-role:: concept

- ### Relationships
  - hasPart:: [[PID Control]], [[Model Predictive Control]], [[Adaptive Control]]
  - requires:: [[Feedback Control]], [[State Estimation]], [[Sensor Fusion]]
  - enables:: [[Trajectory Control]], [[Autonomous Robot]]

- ### Content

  ## Overview

  R B 1002 closedloopcontrol represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
