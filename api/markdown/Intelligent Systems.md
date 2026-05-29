public:: true

# Intelligent Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c7f61b198706d714f6d16cec76a5021513f831bce580bdcb668eef423b1cde7",
  "@type": "Page",
  "vc:slug": "intelligent-systems",
  "title": "Intelligent Systems",
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
      "vc:value": "MV-9638"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Intelligent Systems"
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
  "@id": "urn:ngm:class:intelligent-systems",
  "@type": "Class",
  "label": "Intelligent Systems",
  "definition": "Intelligent Systems are computational systems that exhibit goal-directed behaviour through perception, reasoning, learning, and action. They integrate machine learning, knowledge representation, planning, and autonomous decision-making to operate effectively in complex or uncertain environments. In spatial computing contexts, intelligent systems underpin adaptive avatars, AI-driven scene management, and autonomous agents within persistent virtual environments.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:intelligent-systems:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c7f61b198706d714f6d16cec76a5021513f831bce580bdcb668eef423b1cde7"
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
  - Intelligent Systems are computational systems that exhibit goal-directed behaviour through perception, reasoning, learning, and action. They integrate machine learning, knowledge representation, planning, and autonomous decision-making to operate effectively in complex or uncertain environments. In spatial computing contexts, intelligent systems underpin adaptive avatars, AI-driven scene management, and autonomous agents within persistent virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:IntelligentSystems
  - owl-role:: concept

- ### Relationships
  - requires [[Machine Learning]]
  - requires [[Reasoning]]
  - enables [[Artificial Intelligence]]
  - relatedTo [[Knowledge Representation]]

- ### Content

  ## Overview

  Intelligent Systems represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
