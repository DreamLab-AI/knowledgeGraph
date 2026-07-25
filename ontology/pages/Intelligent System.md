public:: true

# Intelligent System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ac6c5604862da5892db318b885e5da3d5b393feb558ae9916f2c9e718786f175",
  "@type": "Page",
  "vc:slug": "intelligent-system",
  "title": "Intelligent System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:robot-perception",
      "vc:label": "Robot Perception"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:https-plato-stanford-edu-entries-artificial-intelligence",
      "vc:label": "https://plato.stanford.edu/entries/artificial-intelligence/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-intelligent-agent",
      "vc:label": "https://en.wikipedia.org/wiki/Intelligent_agent"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Intelligent System"
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
  "@id": "urn:ngm:class:intelligent-system",
  "@type": "Class",
  "label": "Intelligent System",
  "definition": "An intelligent system is a computational system that perceives its environment, reasons over data and takes actions to achieve defined objectives.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception"
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
  "@id": "urn:visionflow:annotation:link-resolutions:intelligent-system:d1c9f9614a01",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ac6c5604862da5892db318b885e5da3d5b393feb558ae9916f2c9e718786f175"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Perception]]",
      "resolved": "urn:visionflow:linked:robot-perception",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://plato.stanford.edu/entries/artificial-intelligence/]]",
      "resolved": "urn:visionflow:linked:https-plato-stanford-edu-entries-artificial-intelligence",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Intelligent_agent]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-intelligent-agent",
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
  - An intelligent system is a computational system that perceives its environment, reasons over data and takes actions to achieve defined objectives.

- ### Semantic Classification
  - owl-class:: general:IntelligentSystem
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - bridges-to:: [[Robotics]]
  - requires:: [[Machine Learning Discipline]]
  - enables:: [[Robot Perception]]

- ### Content
  - Intelligent systems combine sensing, representation, reasoning and action. They process input from sensors or data sources, maintain internal models and select actions based on goals and constraints.
  - Such systems appear in robotics, decision support and automation. They often incorporate machine learning components to adapt behaviour from data and improve performance over time.

- ### Provenance
  - sources:: [[https://plato.stanford.edu/entries/artificial-intelligence/]], [[https://en.wikipedia.org/wiki/Intelligent_agent]]
  - migration-date:: 2026-05-29T00:00:00Z
