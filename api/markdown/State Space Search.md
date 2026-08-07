public:: true

# State Space Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4be47b63df304e77e7168f28e54be3fdf12d2579eb1403b00dacd08217cdc7e1",
  "@type": "Page",
  "vc:slug": "state-space-search",
  "title": "State Space Search",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:search-algorithm",
      "vc:label": "Search Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:automated-planning",
      "vc:label": "Automated Planning"
    },
    {
      "@id": "urn:visionflow:linked:heuristic-search",
      "vc:label": "Heuristic Search"
    },
    {
      "@id": "urn:visionflow:linked:state-space",
      "vc:label": "State Space"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:state-space-search",
  "@type": "Class",
  "label": "State Space Search",
  "definition": "State space search is a foundational problem-solving paradigm in artificial intelligence in which a problem is formalised as an initial state, a set of operators that transform states, and a goal test; solving the problem means finding a path through the implicit graph of reachable states from the initial state to a goal state. Uninformed strategies such as breadth-first and depth-first search enumerate states systematically, whilst informed strategies exploit heuristic estimates to focus effort, underpinning classical planning, game playing and combinatorial optimisation.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:search-algorithm",
    "label": "Search Algorithm"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      },
      {
        "@id": "urn:ngm:class:classical-planning",
        "label": "Classical Planning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:breadth-first-search",
        "label": "Breadth-First Search"
      },
      {
        "@id": "urn:ngm:class:depth-first-search",
        "label": "Depth-First Search"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:state-space",
        "label": "State Space"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:heuristic-search",
        "label": "Heuristic Search"
      },
      {
        "@id": "urn:ngm:class:graph-search",
        "label": "Graph Search"
      },
      {
        "@id": "urn:ngm:class:planning-and-scheduling",
        "label": "Planning and Scheduling"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "State space search is a foundational problem-solving paradigm in artificial intelligence in which a problem is formalised as an initial state, a set of operators that transform states, and a goal test; solving the problem means finding a path through the implicit graph of reachable states from the initial state to a goal state. Uninformed strategies such as breadth-first and depth-first search enumerate states systematically, whilst informed strategies exploit heuristic estimates to focus effort, underpinning classical planning, game playing and combinatorial optimisation."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:StateSpaceSearch
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Search Algorithm]]
  - is-part-of:: [[Automated Planning]]
  - depends-on:: [[State Space]]
  - related-to:: [[Heuristic Search]]

- ### Content

  ## Definition

  **State space search** formalises problem solving as navigation through a [[State Space]]: the set of all configurations reachable from an initial state by applying operators (actions). A problem instance is the tuple ⟨initial state, operators, goal test, cost function⟩, and a solution is a sequence of operators transforming the initial state into one satisfying the goal test — ideally at minimum cumulative cost. The state graph is almost always implicit: it is generated on demand by expanding states, because enumerating it in full is infeasible (the 15-puzzle has ~10¹³ states; chess vastly more).

  Search strategies differ in the order in which frontier states are expanded. Uninformed (blind) methods — [[Breadth-First Search]], [[Depth-First Search]], uniform-cost search, iterative deepening — use only the problem structure and offer completeness or optimality guarantees at exponential cost. Informed methods, the province of [[Heuristic Search]], use an evaluation function estimating remaining cost; A* with an admissible heuristic returns optimal solutions whilst expanding far fewer states. Local search variants (hill climbing, simulated annealing) abandon paths altogether and search the space of complete states.

  State space search is the computational engine of [[Automated Planning]]: classical planners compile STRIPS/PDDL problems into state space searches guided by domain-independent heuristics (delete-relaxation, landmarks), an approach that has dominated International Planning Competitions since HSP and FF in the late 1990s.

  ## Technical Details

  Key design dimensions include the search direction (progression from the initial state, regression from the goal, or bidirectional), duplicate detection (tree search versus graph search with a closed set), and memory management (IDA* and frontier search trade time for space). Complexity is governed by branching factor b and solution depth d — O(b^d) in the worst case — which is why heuristic accuracy, symmetry pruning and abstraction (pattern databases) matter more in practice than raw speed. Modern applications range from GPS route finding and robot task planning to model checking, program synthesis and the tree searches inside game-playing systems such as AlphaZero, where learned value functions play the role of heuristics.
