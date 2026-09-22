public:: true

# Trajectory Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d1b3cd903e5f979aa2324bc539edca42ef6def86f853c39a6f8b3318b90ab3b3",
  "@type": "Page",
  "vc:slug": "trajectory-optimisation",
  "title": "Trajectory Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optimisation",
      "vc:label": "Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:linked:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:motion-planning",
      "vc:label": "Motion Planning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Trajectory Optimisation"
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
  "@id": "urn:ngm:class:trajectory-optimisation",
  "@type": "Class",
  "label": "Trajectory Optimisation",
  "definition": "Trajectory optimisation is the computation of a path and control profile for a dynamic system that minimises a cost subject to physical and operational constraints. It is widely used in robotics, aerospace and autonomous vehicles.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:motion-planning",
      "label": "Motion Planning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:trajectory-optimisation:b9767a76715b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d1b3cd903e5f979aa2324bc539edca42ef6def86f853c39a6f8b3318b90ab3b3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Optimisation]]",
      "resolved": "urn:visionflow:linked:optimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:linked:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:linked:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:linked:motion-planning",
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
  - Trajectory optimisation is the computation of a path and control profile for a dynamic system that minimises a cost subject to physical and operational constraints. It is widely used in robotics, aerospace and autonomous vehicles.

- ### Semantic Classification
  - owl-class:: robotics:TrajectoryOptimisation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - bridges-to:: [[Robotics]]
  - requires:: [[Optimisation]], [[Control Theory]]
  - enables:: [[Path Planning]]

- ### Content
  - Trajectory optimisation formulates motion as an optimal control problem, seeking state and input sequences that minimise a cost such as time, energy or jerk while satisfying dynamics, actuator limits and obstacle constraints. Solution methods include direct collocation, shooting methods and differential dynamic programming.
  - In robotics it produces smooth, dynamically feasible motions for manipulators and mobile platforms, often refining coarse paths from a planner. The approach connects motion planning with control theory by jointly reasoning about geometry and system dynamics.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
