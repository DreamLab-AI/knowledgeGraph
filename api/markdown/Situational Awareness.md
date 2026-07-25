public:: true

# Situational Awareness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e4f4564525fe4330bcb8da7dea4cb796ad387a8c202aaccd075bac535796544e",
  "@type": "Page",
  "vc:slug": "situational-awareness",
  "title": "Situational Awareness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-system",
      "vc:label": "Multi-Agent System"
    },
    {
      "@id": "urn:visionflow:linked:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Situational Awareness"
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
  "@id": "urn:ngm:class:situational-awareness",
  "@type": "Class",
  "label": "Situational Awareness",
  "definition": "Situational awareness is an agent's perception of relevant elements in its environment, comprehension of their meaning and projection of their near-future state, supporting timely decisions.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
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
  "@id": "urn:visionflow:annotation:link-resolutions:situational-awareness:a381d0482489",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e4f4564525fe4330bcb8da7dea4cb796ad387a8c202aaccd075bac535796544e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:linked:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent System]]",
      "resolved": "urn:visionflow:linked:multi-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:linked:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics",
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
  - Situational awareness is an agent's perception of relevant elements in its environment, comprehension of their meaning and projection of their near-future state, supporting timely decisions.

- ### Semantic Classification
  - owl-class:: metaverse:SituationalAwareness
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Multi-Agent System]], [[Digital Twin]]
  - requires:: [[Computer Vision]]
  - enables:: [[Autonomous Agent]]

- ### Content
  - The concept is usually framed in three levels: perceiving entities and events, understanding their significance in context, and anticipating how the situation will evolve. It is central to control of vehicles, robots and operators working under time pressure.
  - In autonomous systems situational awareness is constructed from sensor fusion, tracking and prediction, and in shared digital twins it is presented to human operators. It depends on perception components such as computer vision.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
