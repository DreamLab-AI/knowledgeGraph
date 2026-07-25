public:: true

# Interactive Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4445b429be88ef9202851c306d216e85fa9c541946ae9e9b7bf844ca414ef9cb",
  "@type": "Page",
  "vc:slug": "interactive-learning",
  "title": "Interactive Learning",
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
      "vc:value": "AI-9515"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Interactive Learning"
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
  "@id": "urn:ngm:class:interactive-learning",
  "@type": "Class",
  "label": "Interactive Learning",
  "definition": "A machine learning paradigm in which a model interactively queries a user, oracle, or environment to obtain labels or feedback for the most informative examples, iteratively improving performance while minimising annotation cost. Interactive learning encompasses active learning, online learning, and human-in-the-loop approaches that tighten the loop between model uncertainty and human input.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:human-in-the-loop-learning",
        "label": "Human-in-the- Loop Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      },
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      },
      {
        "@id": "urn:ngm:class:semi-supervised-learning",
        "label": "Semi-Supervised Learning"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:interactive-learning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4445b429be88ef9202851c306d216e85fa9c541946ae9e9b7bf844ca414ef9cb"
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
  - A machine learning paradigm in which a model interactively queries a user, oracle, or environment to obtain labels or feedback for the most informative examples, iteratively improving performance while minimising annotation cost. Interactive learning encompasses active learning, online learning, and human-in-the-loop approaches that tighten the loop between model uncertainty and human input.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:InteractiveLearning
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: AI Technique
  - Uses [[Active Learning]]
  - Uses [[Data Annotation]]
  - Enables [[Human-in-the- Loop Learning]]
  - Related To [[Reinforcement Learning]]
  - Related To [[Reinforcement Learning from Human Feedback]]
  - Related To [[Semi-Supervised Learning]]

- ### Content

  ## Overview

  Interactive learning is a machine learning paradigm where the model actively queries informative examples from a human oracle or environment, iteratively improving with minimal labelling effort. It encompasses active learning, online learning, and human-in-the-loop workflows. Key to this paradigm is uncertainty sampling — identifying the examples the model is least confident about — and using human feedback to refine performance in label-scarce domains.

  #### Related Concepts
  - [[Active Learning]]
  - [[Human-in-the- Loop Learning]]
  - [[Reinforcement Learning from Human Feedback]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
