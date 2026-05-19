schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#MinimaxAlgorithm
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:minimax-algorithm
public:: true

# Minimax Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d9e1ec6f3323eba996d79c85a30ff26a9090223ba061defd0eb921e4733e93f4",
  "@type": "Page",
  "vc:slug": "minimax-algorithm",
  "title": "Minimax Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adversarial-search",
      "vc:label": "Adversarial Search"
    },
    {
      "@id": "urn:visionflow:owl:class:search-algorithms",
      "vc:label": "Search Algorithms"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-f734a5144e19"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#MinimaxAlgorithm"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1005"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Minimax Algorithm"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:minimax-algorithm"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:minimax-algorithm"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d9e1ec6f3323eba996d79c85a30ff26a9090223ba061defd0eb921e4733e93f4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:minimax-algorithm",
  "@type": "OntologyClass",
  "label": "Minimax Algorithm",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:search-algorithms",
      "vc:label": "Search Algorithms"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:d9e1ec6f3323eba996d79c85a30ff26a9090223ba061defd0eb921e4733e93f4"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d9e1ec6f3323eba996d79c85a30ff26a9090223ba061defd0eb921e4733e93f4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Minimax Algorithm is a concept within the ai domain.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:adversarial-search",
      "vc:label": "Adversarial Search"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:minimax-algorithm:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d9e1ec6f3323eba996d79c85a30ff26a9090223ba061defd0eb921e4733e93f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Adversarial Search]]",
      "resolved": "urn:visionflow:linked:adversarial-search",
      "kind": "StubLink"
    },
    {
      "raw": "[[Search Algorithms]]",
      "resolved": "urn:visionflow:owl:class:search-algorithms",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d9e1ec6f3323eba996d79c85a30ff26a9090223ba061defd0eb921e4733e93f4@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Minimax Algorithm is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MinimaxAlgorithm
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Search Algorithms]]
  - enables:: [[Adversarial Search]]

- ### Content

  ### Definition
  Minimax is a decision-making algorithm used in two-player zero-sum games that determines the optimal move by minimizing the maximum possible loss. It works by recursively exploring the game tree, assuming the opponent will play optimally, and selecting moves that maximize the player's minimum guaranteed outcome.

  ### Algorithm Principles
  - Maximizing player seeks highest score
  - Minimizing player (opponent) seeks lowest score
  - Recursive depth-first exploration
  - Backpropagation of utility values
  - Assumes perfect opponent play

  ### Enhancements
  **Alpha-Beta Pruning:**
  - Eliminates branches that won't affect final decision
  - Reduces search space significantly
  - Maintains identical results to full minimax

  **Iterative Deepening:**
  - Gradually increases search depth
  - Provides time-bounded responses
  - Improves move ordering

  **Transposition Tables:**
  - Cache evaluated positions
  - Avoid redundant calculations

  ### Applications
  - Chess engines
  - Checkers programs
  - Tic-tac-toe solvers
  - Connect Four
  - General turn-based games

  ### Limitations
  - Exponential time complexity
  - Requires complete game state information
  - Computationally expensive for deep trees

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
