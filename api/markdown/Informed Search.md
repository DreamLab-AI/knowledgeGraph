public:: true

# Informed Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a2288c36bb60ae68ed9514ac935d2eb57cff710a1e9816f349485100e0f78d0d",
  "@type": "Page",
  "vc:slug": "informed-search",
  "title": "Informed Search",
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
      "vc:value": "AI-9512"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Informed Search"
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
  "@id": "urn:ngm:class:informed-search",
  "@type": "Class",
  "label": "Informed Search",
  "definition": "A class of search algorithms in artificial intelligence that use domain-specific heuristic knowledge to guide exploration of the search space, reducing computational cost compared to uninformed search. Canonical examples include A* and greedy best-first search, which evaluate states using an estimate of the remaining cost to a goal.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:autonomous-system", "label": "Autonomous System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:active-learning", "label": "Active Learning"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:informed-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a2288c36bb60ae68ed9514ac935d2eb57cff710a1e9816f349485100e0f78d0d"
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
  - Informed Search is a concept within the ai domain. Further enrichment pending.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:InformedSearch
  - owl-role:: concept

- ### Relationships
  - **partOf**: [[Machine Learning Discipline]]
  - **uses**: [[Machine Learning Technique]]
  - **enables**: [[Autonomous Navigation]], [[Autonomous System]]
  - **relatedTo**: [[Reinforcement Learning]], [[Active Learning]]

- ### Content

  ## Overview

  Informed Search represents an abstract concept in the ai ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
