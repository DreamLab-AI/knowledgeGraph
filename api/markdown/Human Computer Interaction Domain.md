public:: true

# Human Computer Interaction Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e0c15441192767f289195e4f8cfcf1afe3bfb986233876dd3497c2d74693ca3d",
  "@type": "Page",
  "vc:slug": "human-computer-interaction-domain",
  "title": "Human Computer Interaction Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:usability",
      "vc:label": "Usability"
    },
    {
      "@id": "urn:visionflow:linked:interaction-design",
      "vc:label": "Interaction Design"
    },
    {
      "@id": "urn:visionflow:linked:accessibility",
      "vc:label": "Accessibility"
    },
    {
      "@id": "urn:visionflow:linked:user-experience",
      "vc:label": "User Experience"
    },
    {
      "@id": "urn:visionflow:linked:information-architecture",
      "vc:label": "Information Architecture"
    },
    {
      "@id": "urn:visionflow:linked:cognitive-science-domain",
      "vc:label": "Cognitive Science Domain"
    },
    {
      "@id": "urn:visionflow:linked:adoption",
      "vc:label": "Adoption"
    },
    {
      "@id": "urn:visionflow:linked:task-efficiency",
      "vc:label": "Task Efficiency"
    },
    {
      "@id": "urn:visionflow:linked:accessibility-domain",
      "vc:label": "Accessibility Domain"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing-domain",
      "vc:label": "Spatial Computing Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-9241-210",
      "vc:label": "ISO 9241-210"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Human Computer Interaction Domain"
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
  "@id": "urn:ngm:class:human-computer-interaction-domain",
  "@type": "Class",
  "label": "Human Computer Interaction Domain",
  "definition": "The Human Computer Interaction Domain classifies concepts concerning the design, evaluation and study of interfaces between people and computational systems. It covers how users perceive, reason about and act upon technology, and how systems should present information and accept input. As a top-level subject axis it connects cognitive and behavioural concerns with the engineering of interactive systems.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Sc Interaction"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:usability",
        "label": "Usability"
      },
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:user-experience",
        "label": "User Experience"
      },
      {
        "@id": "urn:ngm:class:information-architecture",
        "label": "Information Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cognitive-science-domain",
        "label": "Cognitive Science Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:adoption",
        "label": "Adoption"
      },
      {
        "@id": "urn:ngm:class:task-efficiency",
        "label": "Task Efficiency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:human-computer-interaction-domain:8d4c73cf8287",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e0c15441192767f289195e4f8cfcf1afe3bfb986233876dd3497c2d74693ca3d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Usability]]",
      "resolved": "urn:visionflow:linked:usability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interaction Design]]",
      "resolved": "urn:visionflow:linked:interaction-design",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accessibility]]",
      "resolved": "urn:visionflow:linked:accessibility",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Experience]]",
      "resolved": "urn:visionflow:linked:user-experience",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Information Architecture]]",
      "resolved": "urn:visionflow:linked:information-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cognitive Science Domain]]",
      "resolved": "urn:visionflow:linked:cognitive-science-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Adoption]]",
      "resolved": "urn:visionflow:linked:adoption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Task Efficiency]]",
      "resolved": "urn:visionflow:linked:task-efficiency",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accessibility Domain]]",
      "resolved": "urn:visionflow:linked:accessibility-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Domain]]",
      "resolved": "urn:visionflow:linked:spatial-computing-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 9241-210]]",
      "resolved": "urn:visionflow:linked:iso-9241-210",
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
  - The Human Computer Interaction Domain classifies concepts concerning the design, evaluation and study of interfaces between people and computational systems. It covers how users perceive, reason about and act upon technology, and how systems should present information and accept input. As a top-level subject axis it connects cognitive and behavioural concerns with the engineering of interactive systems.

- ### Semantic Classification
  - owl-class:: hci:HumanComputerInteractionDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Accessibility Domain]], [[Spatial Computing Domain]]
  - has-part:: [[Usability]], [[Interaction Design]], [[Accessibility]], [[User Experience]], [[Information Architecture]]
  - requires:: [[Cognitive Science Domain]]
  - enables:: [[Adoption]], [[Task Efficiency]]

- ### Content
  - Human computer interaction studies the dialogue between users and systems, treating the interface as a designed artefact subject to empirical evaluation. It draws on perception, attention and motor control to predict how design choices affect error rates, learning time and satisfaction. Methods include task analysis, usability testing, heuristic evaluation and controlled experimentation.
  - Interaction design is concerned with the structure of input and output across modalities including pointing, touch, voice and gesture. The domain establishes principles such as visibility of system status, consistency and feedback, and codifies them in guidelines and patterns. Accessibility is integral, ensuring interfaces accommodate the full range of human abilities and assistive technologies.
  - The domain bridges to accessibility and spatial computing, where novel input modalities and immersive displays raise new interaction questions. It requires grounding in cognitive science to model the mental processes that interfaces engage.

- ### Provenance
  - sources:: [[ISO 9241-210]]
  - migration-date:: 2026-05-29T00:00:00Z
