public:: true

# Monte Carlo Tree Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab8ea661ed766f4e57e62c13dc63c06b96128d1b8d19f3d57f3a12f3eb9e30cd",
  "@type": "Page",
  "vc:slug": "monte-carlo-tree-search",
  "title": "Monte Carlo Tree Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:game-playing-ai",
      "vc:label": "Game Playing AI"
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
      "vc:value": "AI-1006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Monte Carlo Tree Search"
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
  "@id": "urn:ngm:class:monte-carlo-tree-search",
  "@type": "Class",
  "label": "Monte Carlo Tree Search",
  "definition": "Monte Carlo Tree Search (MCTS) is a heuristic search algorithm for sequential decision-making that builds a game tree incrementally through random simulations, balancing exploration and exploitation via the Upper Confidence Bound (UCB) formula. It enables strong play in games with large branching factors and generalises to planning under uncertainty.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:search-algorithms",
    "label": "Search Algorithms"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation Update"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:game-tree-search",
        "label": "Game Tree Search"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:game-ai",
        "label": "Game Playing AI"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-structure",
        "label": "Tree Data Structure"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:exploration-exploitation-tradeoff",
        "label": "Exploration-Exploitation Tradeoff"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:alphago",
        "label": "AlphaGo"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:minimax-algorithm",
        "label": "Minimax Search"
      },
      {
        "@id": "urn:ngm:class:dynamic-programming",
        "label": "Dynamic Programming"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:deep-neural-network",
        "label": "Deep Neural Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:mcts",
      "label": "MCTS"
    },
    {
      "@id": "urn:ngm:class:uct-search",
      "label": "UCT Search"
    }
  ],
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:monte-carlo-tree-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab8ea661ed766f4e57e62c13dc63c06b96128d1b8d19f3d57f3a12f3eb9e30cd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Game Playing AI]]",
      "resolved": "urn:visionflow:linked:game-playing-ai",
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
  - Monte Carlo Tree Search is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MonteCarloTreeSearch
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Search Algorithms]]
  - enables:: [[Game Playing AI]]

- ### Content

  ### Definition
  Monte Carlo Tree Search (MCTS) is a heuristic search algorithm that makes optimal decisions in game trees by building a search tree incrementally through random simulations. It balances exploration of new possibilities with exploitation of known good moves using the Upper Confidence Bound (UCB) formula, making it particularly effective for games with large branching factors.

  ### Four-Phase Algorithm
  **1. Selection:**
  - Traverse tree using UCB1 policy
  - Balance exploration vs exploitation

  **2. Expansion:**
  - Add new node(s) to tree
  - Extend search frontier

  **3. Simulation (Rollout):**
  - Play out randomly to terminal state
  - Quick evaluation of position

  **4. Backpropagation:**
  - Update statistics along path
  - Propagate win/loss information

  ### UCB1 Formula
  - UCB1 = (wins/visits) + C * sqrt(ln(parent_visits)/visits)
  - C: Exploration constant
  - Balances winning rate with uncertainty

  ### Advantages
  - No evaluation function required
  - Handles large state spaces
  - Anytime algorithm (improves with time)
  - Asymmetrically grows tree toward promising regions

  ### Notable Applications
  - AlphaGo (defeating world Go champion)
  - Computer Go programs
  - General game playing
  - Planning under uncertainty
  - Automated theorem proving

  ### Variants
  - UCT (Upper Confidence bounds applied to Trees)
  - RAVE (Rapid Action Value Estimation)
  - PUCT (Predictor + UCT, used in AlphaZero)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
