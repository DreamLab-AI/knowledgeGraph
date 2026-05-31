public:: true

# ROS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5c72627069ddb8db52f4aaad25a4cc5b9afe45da4a221dd6f88ad3be7f60c221",
  "@type": "Page",
  "vc:slug": "ros",
  "title": "ROS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dds-middleware",
      "vc:label": "DDS Middleware"
    },
    {
      "@id": "urn:visionflow:linked:middleware",
      "vc:label": "Middleware"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-navigation",
      "vc:label": "Autonomous Navigation"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:micro-ros",
      "vc:label": "micro-ROS"
    },
    {
      "@id": "urn:visionflow:linked:robot-operating-system",
      "vc:label": "Robot Operating System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ROS"
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
  "@id": "urn:ngm:class:ros",
  "@type": "Class",
  "label": "ROS",
  "definition": "ROS (Robot Operating System) is an open-source middleware framework providing communication, tooling and libraries for building robot software from reusable, distributed components.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot-operating-system",
      "label": "Robot Operating System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:dds-middleware",
        "label": "DDS Middleware"
      },
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Middleware"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ros:1040113abe1b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5c72627069ddb8db52f4aaad25a4cc5b9afe45da4a221dd6f88ad3be7f60c221"
  },
  "vc:resolutions": [
    {
      "raw": "[[DDS Middleware]]",
      "resolved": "urn:visionflow:linked:dds-middleware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Middleware]]",
      "resolved": "urn:visionflow:linked:middleware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Navigation]]",
      "resolved": "urn:visionflow:linked:autonomous-navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[micro-ROS]]",
      "resolved": "urn:visionflow:linked:micro-ros",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robot Operating System]]",
      "resolved": "urn:visionflow:linked:robot-operating-system",
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
  - ROS (Robot Operating System) is an open-source middleware framework providing communication, tooling and libraries for building robot software from reusable, distributed components.

- ### Semantic Classification
  - owl-class:: robotics:ROS
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robot Operating System]]
  - bridges-to:: [[micro-ROS]]
  - requires:: [[DDS Middleware]], [[Middleware]]
  - enables:: [[Autonomous Navigation]], [[Sensor Fusion]]

- ### Content
  - ROS structures robot software as nodes that exchange messages over named topics and services, with a publish and subscribe model that decouples producers and consumers of data. It provides package management, build tooling, visualisation and a large ecosystem of reusable drivers and algorithms.
  - ROS 2 builds its communication layer on DDS to improve real-time behaviour, security and multi-robot deployment. The framework is the de facto standard middleware for robotics research and a growing share of commercial systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
