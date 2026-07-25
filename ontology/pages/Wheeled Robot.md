public:: true

# Wheeled Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dcc2cb865f7ed49c845141a63219a18c8f63afc7c16bb87051540683ea8680d0",
  "@type": "Page",
  "vc:slug": "wheeled-robot",
  "title": "Wheeled Robot",
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
      "vc:value": "RB-9536"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Wheeled Robot"
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
  "@id": "urn:ngm:class:wheeled-robot",
  "@type": "Class",
  "label": "Wheeled Robot",
  "definition": "A Wheeled Robot is a mobile robot platform that uses wheels as its primary locomotion mechanism. Wheeled robots offer high energy efficiency and speed on flat terrain, making them dominant in warehouse automation, last-mile delivery, and research platforms. Differential drive, omnidirectional, and car-like Ackermann steering configurations each present distinct kinematic constraints that influence navigation algorithm design.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"},
      {"@id": "urn:ngm:class:navigation", "label": "Navigation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:robot-operating-system", "label": "Robot Operating System"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:wheeled-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dcc2cb865f7ed49c845141a63219a18c8f63afc7c16bb87051540683ea8680d0"
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
  - A Wheeled Robot is a mobile robot platform that uses wheels as its primary locomotion mechanism. Wheeled robots offer high energy efficiency and speed on flat terrain, making them dominant in warehouse automation, last-mile delivery, and research platforms. Differential drive, omnidirectional, and car-like Ackermann steering configurations each present distinct kinematic constraints that influence navigation algorithm design.

- ### Semantic Classification
  - owl-class:: robotics:WheeledRobot
  - owl-role:: concept

- ### Relationships
  - partOf [[Mobile Robot]]
  - requires [[Odometry]]
  - requires [[Navigation]]
  - uses [[Robot Operating System]]
  - uses [[SLAM]]

- ### Content

  ## Overview

  Wheeled Robot represents an abstract concept in the robotics ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
