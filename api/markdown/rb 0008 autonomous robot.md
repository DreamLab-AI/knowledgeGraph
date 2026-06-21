public:: true

# rb 0008 autonomous robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9de32aec9fdff86684ae277f4652d8e2c062f9bcb5512a70231d493044fe60be",
  "@type": "Page",
  "vc:slug": "rb-0008-autonomous-robot",
  "title": "rb 0008 autonomous robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0008 autonomous robot"
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
  "@id": "urn:ngm:class:rb-0008-autonomous-robot",
  "@type": "Class",
  "label": "rb 0008 autonomous robot",
  "definition": "An autonomous robot is a robotic system capable of performing tasks in unstructured environments without continuous human intervention, relying on onboard sensing, perception, decision-making, and actuation. Autonomy spans a spectrum from simple programmed responses to full cognitive agency; key enabling technologies include SLAM, path planning, machine learning-based perception, and safety-certified control architectures.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:autonomous-system", "label": "Autonomous System"},
      {"@id": "urn:ngm:class:rb-0007-collaborative-robot", "label": "rb 0007 collaborative robot"},
      {"@id": "urn:ngm:class:rb-0012-wheeled-mobile-robot", "label": "rb 0012 wheeled mobile robot"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:rb-0049-motion-planning", "label": "rb 0049 motion planning"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0008-autonomous-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9de32aec9fdff86684ae277f4652d8e2c062f9bcb5512a70231d493044fe60be"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - An **autonomous robot** is a robotic system capable of performing tasks in unstructured environments without continuous human intervention, relying on onboard sensing, perception, decision-making, and actuation. Autonomy spans a spectrum from simple programmed responses to full cognitive agency; key enabling technologies include [[SLAM]], path planning, machine learning-based perception, and safety-certified control architectures.

- ### Semantic Classification
  - owl-class:: robotics:rb0008autonomousrobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
