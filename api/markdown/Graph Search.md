public:: true

# Graph Search
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11",
  "@type": "Page",
  "vc:slug": "graph-search",
  "title": "Graph Search",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graph Search"
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
  "@id": "urn:ngm:class:graph-search",
  "@type": "Class",
  "label": "Graph Search",
  "definition": "Graph search encompasses algorithms that systematically traverse graph-structured state spaces — sets of nodes (states) connected by edges (transitions) — to discover paths, optimal solutions, or reachable configurations satisfying given criteria. Classical uninformed methods (Breadth-First Search, Depth-First Search, Dijkstra) provide completeness and optimality guarantees on finite discrete graphs; informed heuristic methods (A*, IDA*, weighted A*) accelerate search using problem-specific cost estimates; sampling-based planners (RRT, PRM, RRT*) extend graph search to high-dimensional continuous configuration spaces by building implicit graphs from random samples. Graph search is the algorithmic backbone of robot motion planning, AI planning, knowledge graph querying, route navigation, and game-tree evaluation.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graph-algorithms",
      "label": "Graph Algorithms"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:graph-traversal",
      "label": "Graph Traversal"
    },
    {
      "@id": "urn:ngm:class:state-space-search",
      "label": "State Space Search"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:breadth-first-search",
        "label": "Breadth-First Search"
      },
      {
        "@id": "urn:ngm:class:depth-first-search",
        "label": "Depth-First Search"
      },
      {
        "@id": "urn:ngm:class:a-star-search",
        "label": "A* Search"
      },
      {
        "@id": "urn:ngm:class:dijkstra-algorithm",
        "label": "Dijkstra Algorithm"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:graph-algorithms",
        "label": "Graph Algorithms"
      },
      {
        "@id": "urn:ngm:class:combinatorial-optimisation",
        "label": "Combinatorial Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:graph-data-structure",
        "label": "Graph Data Structure"
      },
      {
        "@id": "urn:ngm:class:heuristic-function",
        "label": "Heuristic Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:navigation",
        "label": "Navigation"
      },
      {
        "@id": "urn:ngm:class:route-planning",
        "label": "Route Planning"
      },
      {
        "@id": "urn:ngm:class:game-tree-search",
        "label": "Game Tree Search"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:data-structures",
        "label": "Data Structures"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:heuristic-function",
        "label": "Heuristic Function"
      },
      {
        "@id": "urn:ngm:class:priority-queue",
        "label": "Priority Queue"
      },
      {
        "@id": "urn:ngm:class:dynamic-programming",
        "label": "Dynamic Programming"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:evolutionary-algorithm",
        "label": "Evolutionary Algorithm"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:graph-neural-network",
        "label": "Graph Neural Network"
      },
      {
        "@id": "urn:ngm:class:spatial-indexing",
        "label": "Spatial Indexing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monte-carlo-tree-search",
        "label": "Monte Carlo Tree Search"
      },
      {
        "@id": "urn:ngm:class:satisfiability",
        "label": "Satisfiability"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:graph-search:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:49306f64e5c43a0a4e8fc28b6d65926cc7175eaeba65971ff4fbd550f6375c11"
  },
  "vc:resolutions": [],
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
  - Graph search refers to the family of algorithms that systematically explore [[Graph Data Structure]]s — collections of nodes (vertices representing states or entities) connected by edges (arcs representing transitions or relationships) — to locate paths, optimal solutions, or reachable configurations satisfying specified criteria. It forms the algorithmic backbone of [[Motion Planning]], [[Automated Planning]], [[Knowledge Graph]] querying, [[Navigation]], and adversarial [[Game Tree Search]], and underpins virtually every domain where decisions unfold over a structured state space. Informed variants exploit [[Heuristic Function]]s (as in [[A* Search]]) to dramatically prune the search frontier, while sampling-based methods (RRT, PRM) build implicit graphs to cope with high-dimensional [[Continuous Configuration Space]]s.

- ### Overview
  - Graph search is one of the oldest and most thoroughly studied problem classes in computer science, dating from the 19th-century mathematical work on Eulerian paths and formalised computationally in the mid-20th century by Moore (BFS, 1959) and Dijkstra (shortest paths, 1959).
  - The central task is to find, within a graph G = (V, E), a path from a source node s to a goal node g satisfying a cost or constraint criterion (shortest, least cost, time-bounded, etc.).
  - **Why it matters:**
    - Almost every AI problem with discrete structure can be cast as graph search: game playing, theorem proving, scheduling, protein folding, circuit layout, and more.
    - The quality of a search strategy — completeness, optimality, time complexity, space complexity — determines feasibility for real-world problem sizes.
    - Modern AI systems often combine classical graph search with [[Machine Learning]] (learned heuristics, neural value functions) to scale to previously intractable problem instances.
  - **Core properties of search algorithms:**
    - *Completeness*: guarantees finding a solution if one exists.
    - *Optimality*: guarantees finding the lowest-cost solution.
    - *Time complexity*: typically expressed in terms of branching factor b and depth d.
    - *Space complexity*: the memory footprint of the open/closed frontier.

- ### Key Components
  - #### Graph Representation
    - [[Graph Data Structure]]: the underlying adjacency list, adjacency matrix, or implicit expansion function.
    - *Explicit graphs*: all nodes and edges stored in memory (road maps, knowledge graphs).
    - *Implicit graphs*: nodes generated on-demand by applying transition operators to the current state (puzzle solving, planning).
    - *Weighted graphs*: edges carry costs (distances, times, probabilities) as in [[Dijkstra Algorithm]] and [[A* Search]].
    - *Directed vs. undirected*: direction matters for reachability (e.g., one-way streets in [[Route Planning]]).
  - #### Uninformed (Blind) Search
    - **[[Breadth-First Search]] (BFS)**: expands nodes layer by layer; complete and optimal for uniform-cost edges; O(b^d) time and space.
    - **[[Depth-First Search]] (DFS)**: follows a single path as deep as possible before backtracking; low memory but not optimal; the basis of [[Backtracking]] and [[Recursive Descent]].
    - **Iterative Deepening DFS (IDDFS)**: combines BFS's completeness with DFS's space efficiency; preferred when the solution depth is unknown.
    - **[[Dijkstra Algorithm]]**: shortest-path algorithm on weighted graphs using a [[Priority Queue]]; O((V + E) log V) with a binary heap; optimal when edge weights are non-negative.
    - **Uniform-Cost Search**: generalisation of Dijkstra to implicit state spaces; foundational in AI textbooks.
  - #### Informed (Heuristic) Search
    - **[[A* Search]]**: combines path cost g(n) and admissible heuristic h(n) into f(n) = g(n) + h(n); finds optimal solutions when h never overestimates; the workhorse of [[Route Planning]] and [[Motion Planning]].
    - **IDA\*** (Iterative Deepening A*): memory-efficient variant of A*, expanding nodes up to an f-cost threshold that increases each iteration.
    - **Weighted A\***: trades optimality guarantee for speed by inflating the heuristic (f = g + w·h, w > 1); common in time-critical robotics.
    - **Bidirectional search**: simultaneously expands from source and goal, meeting in the middle; reduces effective search depth from d to d/2.
    - **[[Heuristic Function]] design**: admissibility and consistency (monotonicity) are the key theoretical constraints; problem-specific heuristics derived from relaxed problems, pattern databases, or learned models.
  - #### Anytime and Incremental Methods
    - **Anytime A\*** / ARA\*: begins with an inflated heuristic for fast suboptimal solutions, then iteratively tightens the bound within available computation time.
    - **D\* / D\* Lite**: incremental replanning algorithms that efficiently update the search tree when edge costs change; critical for [[Autonomous Navigation]] in dynamic environments.
    - **Lifelong Planning A\* (LPA\*)**: propagates cost changes from the source, maintaining optimality across repeated queries on the same graph.
  - #### Sampling-Based Planners
    - **RRT (Rapidly-exploring Random Tree)**: builds a tree by extending toward random samples in [[Continuous Configuration Space]]; probabilistically complete; foundational for [[Motion Planning]] in high-dimensional spaces.
    - **RRT\***: asymptotically optimal extension of RRT that rewires the tree to minimise path cost; convergence is gradual but guaranteed.
    - **PRM (Probabilistic Roadmap Method)**: offline phase builds a roadmap by connecting random configurations; online phase queries the roadmap; excels at multi-query settings.
    - **SPARS / BIT\***: informed and batch variants that converge faster by focusing sampling in the relevant heuristic ellipse.
  - #### Adversarial and Game-Tree Search
    - **Minimax**: searches the game tree assuming rational opponents; alternates maximising and minimising layers.
    - **Alpha-Beta Pruning**: prunes branches in minimax that cannot influence the final decision; reduces effective branching factor from b^d to b^(d/2).
    - **[[Monte Carlo Tree Search]] (MCTS)**: combines random roll-outs with UCB selection to estimate node values without an explicit heuristic; underlies AlphaGo/AlphaZero.

- ### Applications
  - #### Robotics and Autonomous Systems
    - Path planning for mobile robots in static and dynamic environments using D* Lite and [[Motion Planning]] stacks (e.g., ROS MoveIt).
    - Manipulation planning for robotic arms: searching through [[Joint Space]] configurations to reach a target end-effector pose while avoiding collisions.
    - Multi-robot coordination: searching joint configuration spaces or market-based task allocation graphs.
    - [[Autonomous Navigation]] in self-driving vehicles: hierarchical graph search over road networks combined with sampling-based local planners.
  - #### Artificial Intelligence and Planning
    - Classical [[Automated Planning]] (STRIPS, PDDL) represents actions as graph edges and searches for action sequences achieving goal states (LAMA, FastDownward planners).
    - Puzzle solving: 15-puzzle, Rubik's Cube solved via bidirectional A* and pattern databases.
    - [[Game Tree Search]] in board games (chess engines use alpha-beta + heuristics; AlphaZero uses MCTS + neural networks).
    - Theorem proving and program synthesis expressed as proof-search or synthesis-search over expression graphs.
  - #### Knowledge Graph and Semantic Web
    - Shortest path and subgraph reachability queries on [[Knowledge Graph]]s (e.g., Wikidata, Freebase, Neo4j).
    - Entity linking and semantic similarity computed via graph distance metrics.
    - Ontology reasoning: concept subsumption checking via graph traversal over [[Class Hierarchy]].
    - [[SPARQL]] query evaluation over RDF graphs effectively reduces to graph-pattern matching.
  - #### Networks and Infrastructure
    - Internet [[Routing Protocol]]s: OSPF uses Dijkstra to compute shortest-path trees; BGP uses path-vector graph search.
    - Social network analysis: finding shortest social distances, influential nodes, community boundaries.
    - Supply-chain optimisation: searching through logistics graphs for cost-minimising shipment routes.
    - Circuit layout and VLSI routing: finding non-crossing wire paths in placement-and-routing tools.
  - #### Computational Biology
    - Protein structure prediction: graph search over conformational space.
    - Phylogenetic tree construction: maximum parsimony search over tree topologies.
    - Genome assembly: de Bruijn graph traversal and Eulerian path search over k-mer overlap graphs.

- ### Relationships
  - partOf:: [[Graph Algorithms]]
  - partOf:: [[Combinatorial Optimisation]]
  - hasPart:: [[Breadth-First Search]]
  - hasPart:: [[Depth-First Search]]
  - hasPart:: [[A* Search]]
  - hasPart:: [[Dijkstra Algorithm]]
  - requires:: [[Graph Data Structure]]
  - requires:: [[Heuristic Function]]
  - dependsOn:: [[Knowledge Representation]]
  - dependsOn:: [[Data Structures]]
  - uses:: [[Priority Queue]]
  - uses:: [[Dynamic Programming]]
  - enables:: [[Motion Planning]]
  - enables:: [[Navigation]]
  - enables:: [[Route Planning]]
  - enables:: [[Game Tree Search]]
  - supports:: [[Knowledge Graph]]
  - supports:: [[Constraint Satisfaction]]
  - supports:: [[Automated Planning]]
  - contrastsWith:: [[Reinforcement Learning]]
  - contrastsWith:: [[Evolutionary Algorithm]]
  - bridges-to:: [[Graph Neural Network]]
  - bridges-to:: [[Spatial Indexing]]
  - relatedTo:: [[Monte Carlo Tree Search]]
  - relatedTo:: [[Satisfiability]]

- ### Standards & Context
  - Graph search complexity is characterised within the framework of [[Computational Complexity Theory]]: BFS/DFS are O(V + E); Dijkstra O((V + E) log V); A* worst-case exponential but optimal with admissible heuristic.
  - The field is formalised in classical AI textbooks: Russell & Norvig "Artificial Intelligence: A Modern Approach" (Chapter 3-4 on search) and LaValle "Planning Algorithms" (2006, Cambridge University Press, freely available online).
  - Motion planning variants (RRT, PRM, RRT*) are standardised within the **Open Motion Planning Library (OMPL)** used across [[Robotic Operating System]] (ROS) ecosystems.
  - **PDDL** (Planning Domain Definition Language) is the standard input language for classical [[Automated Planning]] systems that employ graph search.
  - IEEE Transactions on Robotics and the International Journal of Robotics Research are the primary venues for sampling-based search advances.
  - [[SPARQL]] 1.1 (W3C Recommendation) and [[Cypher]] (openCypher standard) formalise graph query languages that rely on graph-search primitives.
  - **Graph500** benchmark measures graph search (BFS) throughput on high-performance computing systems.
  - Learned heuristics and [[Neural Network]]-guided search are active areas in NeurIPS, ICAPS, IJCAI, and AAAI conferences.

- ### Provenance
  - sources:: LaValle (2006) Planning Algorithms; Russell & Norvig AIMA 4th ed.; Hart, Nilsson & Raphael (1968) A* original paper; Karaman & Frazzoli (2011) RRT*; Koenig & Likhachev (2002) D* Lite; Coulom (2006) MCTS
  - updated:: 2026-06-13
