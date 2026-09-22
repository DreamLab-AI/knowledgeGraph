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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-1005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Minimax Algorithm"
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
  "@id": "urn:ngm:class:minimax-algorithm",
  "@type": "Class",
  "label": "Minimax Algorithm",
  "definition": "Minimax Algorithm is a artificial intelligence concept and a type of Search Algorithms. that enables Adversarial Search.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:search-algorithms",
      "label": "Search Algorithms"
    }
  ],
  "relations": {},
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
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
