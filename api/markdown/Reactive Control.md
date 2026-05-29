public:: true

# Reactive Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bac564875299e93448e89872011606675c054e8183bdc75a3751d1e933113aae",
  "@type": "Page",
  "vc:slug": "reactive-control",
  "title": "Reactive Control",
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
      "vc:value": "RB-9525"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reactive Control"
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
  "@id": "urn:ngm:class:reactive-control",
  "@type": "Class",
  "label": "Reactive Control",
  "definition": "Reactive Control is a paradigm of robot control architecture in which sensor inputs are mapped directly to actuator outputs through fast, pre-compiled stimulus-response rules, without constructing an explicit world model. Associated with Brooks's subsumption architecture and behaviour-based robotics, it enables low-latency responses to environmental perturbations and is typically combined with deliberative or hybrid planners in practical autonomous systems.",
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
    "uses": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"},
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:closed-loop-control", "label": "Closed-Loop Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:manipulation", "label": "Manipulation"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:reactive-control:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bac564875299e93448e89872011606675c054e8183bdc75a3751d1e933113aae"
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
  - Reactive Control is a paradigm of robot control architecture in which sensor inputs are mapped directly to actuator outputs through fast, pre-compiled stimulus-response rules, without constructing an explicit world model. Associated with Brooks's subsumption architecture and behaviour-based robotics, it enables low-latency responses to environmental perturbations, and is typically combined with deliberative planners in hybrid autonomous systems.

- ### Semantic Classification
  - owl-class:: robotics:ReactiveControl
  - owl-role:: concept

- ### Relationships
  - uses:: [[Sensor Fusion]], [[Feedback Control]]
  - enables:: [[Autonomous Robot]], [[Obstacle Avoidance]]
  - contrastsWith:: [[Closed-Loop Control]]
  - relatedTo:: [[Motion Control]], [[Force Control]], [[Manipulation]]

- ### Content

  ## Overview

  Reactive Control represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
