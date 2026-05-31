public:: true

# HRI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2309035946dcc416c6a381e3c474e3e1695d5652fdaa8c15a13a477c2272cc07",
  "@type": "Page",
  "vc:slug": "hri",
  "title": "HRI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:user-experience",
      "vc:label": "User Experience"
    },
    {
      "@id": "urn:visionflow:linked:robot-control",
      "vc:label": "Robot Control"
    },
    {
      "@id": "urn:visionflow:linked:conversational-ai",
      "vc:label": "Conversational AI"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-humanrobotinteraction-org",
      "vc:label": "https://humanrobotinteraction.org"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-human-e-2-80-93-robot-interaction",
      "vc:label": "https://en.wikipedia.org/wiki/Human%E2%80%93robot_interaction"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "HRI"
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
  "@id": "urn:ngm:class:hri",
  "@type": "Class",
  "label": "HRI",
  "definition": "Human-Robot Interaction is the study and design of how people and robots communicate and work together. It draws on robotics, psychology, and human-computer interaction.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hri:8146b5037c5d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2309035946dcc416c6a381e3c474e3e1695d5652fdaa8c15a13a477c2272cc07"
  },
  "vc:resolutions": [
    {
      "raw": "[[User Experience]]",
      "resolved": "urn:visionflow:linked:user-experience",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Control]]",
      "resolved": "urn:visionflow:linked:robot-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Conversational AI]]",
      "resolved": "urn:visionflow:linked:conversational-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://humanrobotinteraction.org]]",
      "resolved": "urn:visionflow:linked:https-humanrobotinteraction-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Human%E2%80%93robot_interaction]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-human-e-2-80-93-robot-interaction",
      "kind": "StubLink"
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
  - Human-Robot Interaction is the study and design of how people and robots communicate and work together. It draws on robotics, psychology, and human-computer interaction.

- ### Semantic Classification
  - owl-class:: robotics:HRI
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - bridges-to:: [[Conversational AI]]
  - requires:: [[User Experience]]
  - enables:: [[Robot Control]]

- ### Content
  - Human-Robot Interaction examines how robots perceive human intent, communicate their own state, and behave safely around people. It covers physical interaction, social cues, and shared task execution.
  - Research in the field addresses interfaces for teleoperation, methods for robots to signal their intentions, and the trust people place in autonomous systems. Findings inform the design of robots used in industry, healthcare, and the home.

- ### Provenance
  - sources:: [[https://humanrobotinteraction.org]], [[https://en.wikipedia.org/wiki/Human%E2%80%93robot_interaction]]
  - migration-date:: 2026-05-29T00:00:00Z
