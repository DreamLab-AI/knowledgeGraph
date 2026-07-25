public:: true
alias:: RigidBody

# Rigid Body
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb0256d1bc22599ae43eef770fb6bfae8cb71ff4963a59459b98540ba5a66253",
  "@type": "Page",
  "vc:slug": "rigid-body",
  "title": "Rigid Body",
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
      "vc:value": "RB-9526"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Rigid Body"
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
  "@id": "urn:ngm:class:rigid-body",
  "@type": "Class",
  "label": "Rigid Body",
  "definition": "A Rigid Body is an idealised mechanical object whose internal distances between all constituent points remain constant regardless of applied forces, making it the foundational abstraction for classical mechanics, robotic kinematics, and physics simulation. In robotics, links of a kinematic chain are modelled as rigid bodies connected by joints; their mass, centre of gravity, and inertia tensor parameterise the dynamics equations used for motion planning, control, and simulation. Rigid body assumptions break down for flexible or soft-robotic systems.",
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
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot-component", "label": "Robot Component"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:control-system", "label": "Control System"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rigid-body:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb0256d1bc22599ae43eef770fb6bfae8cb71ff4963a59459b98540ba5a66253"
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
  - A Rigid Body is an idealised mechanical object whose internal distances between all constituent points remain constant regardless of applied forces, making it the foundational abstraction for classical mechanics, robotic kinematics, and physics simulation. In robotics, links of a kinematic chain are modelled as rigid bodies connected by joints; their mass, centre of gravity, and inertia tensor parameterise the dynamics equations used for motion planning, control, and simulation. Rigid body assumptions break down for flexible or soft-robotic systems.

- ### Semantic Classification
  - owl-class:: robotics:RigidBody
  - owl-role:: concept

- ### Relationships
  - **hasPart**: Kinematics
  - **uses**: Inverse Kinematics, Forward Kinematics
  - **partOf**: Robot Component
  - **enables**: Control System

- ### Content

  ## Overview

  Rigid Body represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
