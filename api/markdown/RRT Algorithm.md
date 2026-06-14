public:: true
alias:: RB-1017-rrt-algorithm

# RRT Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:41520d5a4901d011aa562d2e9d0badc324ae984269908d98624333d035e4387f",
  "@type": "Page",
  "vc:slug": "rrt-algorithm",
  "title": "RRT Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-vehicles",
      "vc:label": "Autonomous Vehicles"
    },
    {
      "@id": "urn:visionflow:linked:collision-checker",
      "vc:label": "Collision Checker"
    },
    {
      "@id": "urn:visionflow:linked:configuration-space",
      "vc:label": "Configuration Space"
    },
    {
      "@id": "urn:visionflow:linked:informed-rrt-star",
      "vc:label": "Informed RRT-Star"
    },
    {
      "@id": "urn:visionflow:linked:manipulators",
      "vc:label": "Manipulators"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robots",
      "vc:label": "Mobile Robots"
    },
    {
      "@id": "urn:visionflow:linked:probabilistic-completeness",
      "vc:label": "Probabilistic Completeness"
    },
    {
      "@id": "urn:visionflow:linked:randomization",
      "vc:label": "Randomization"
    },
    {
      "@id": "urn:visionflow:linked:rb-1016-path-planning",
      "vc:label": "RB-1016-path-planning"
    },
    {
      "@id": "urn:visionflow:linked:rb-1018-dijkstra-algorithm",
      "vc:label": "RB-1018-dijkstra-algorithm"
    },
    {
      "@id": "urn:visionflow:linked:rrt-connect",
      "vc:label": "RRT-Connect"
    },
    {
      "@id": "urn:visionflow:linked:rrt-star",
      "vc:label": "RRT-Star"
    },
    {
      "@id": "urn:visionflow:linked:sampling-based-method",
      "vc:label": "Sampling-Based Method"
    },
    {
      "@id": "urn:visionflow:linked:steven-la-valle-1998",
      "vc:label": "Steven LaValle 1998"
    },
    {
      "@id": "urn:visionflow:linked:tree-structure",
      "vc:label": "Tree Structure"
    },
    {
      "@id": "urn:visionflow:owl:class:a-star-algorithm",
      "vc:label": "A-Star Algorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:collision-detection",
      "vc:label": "Collision Detection"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-planning",
      "vc:label": "Motion Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:nearest-neighbor-search",
      "vc:label": "Nearest Neighbor Search"
    },
    {
      "@id": "urn:visionflow:owl:class:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1017"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "RRT Algorithm"
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
  "@id": "urn:ngm:class:rrt-algorithm",
  "@type": "Class",
  "label": "RRT Algorithm",
  "definition": "A sampling-based path planning algorithm that incrementally builds a tree of collision-free configurations by randomly sampling the configuration space and connecting samples to the nearest existing tree node. It efficiently explores high-dimensional spaces and is probabilistically complete.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Navigation and Planning"
    },
    {
      "@id": "urn:ngm:class:path-planning",
      "label": "Path Planning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:collision-checker",
        "label": "Collision Checker"
      },
      {
        "@id": "urn:ngm:class:configuration-space",
        "label": "Configuration Space"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Nearest Neighbor Search"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:rrt-algorithm:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:41520d5a4901d011aa562d2e9d0badc324ae984269908d98624333d035e4387f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Vehicles]]",
      "resolved": "urn:visionflow:linked:autonomous-vehicles",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collision Checker]]",
      "resolved": "urn:visionflow:linked:collision-checker",
      "kind": "StubLink"
    },
    {
      "raw": "[[Configuration Space]]",
      "resolved": "urn:visionflow:linked:configuration-space",
      "kind": "StubLink"
    },
    {
      "raw": "[[Informed RRT-Star]]",
      "resolved": "urn:visionflow:linked:informed-rrt-star",
      "kind": "StubLink"
    },
    {
      "raw": "[[Manipulators]]",
      "resolved": "urn:visionflow:linked:manipulators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Robots]]",
      "resolved": "urn:visionflow:linked:mobile-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probabilistic Completeness]]",
      "resolved": "urn:visionflow:linked:probabilistic-completeness",
      "kind": "StubLink"
    },
    {
      "raw": "[[Randomization]]",
      "resolved": "urn:visionflow:linked:randomization",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1016-path-planning]]",
      "resolved": "urn:visionflow:linked:rb-1016-path-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1018-dijkstra-algorithm]]",
      "resolved": "urn:visionflow:linked:rb-1018-dijkstra-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[RRT-Connect]]",
      "resolved": "urn:visionflow:linked:rrt-connect",
      "kind": "StubLink"
    },
    {
      "raw": "[[RRT-Star]]",
      "resolved": "urn:visionflow:linked:rrt-star",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sampling-Based Method]]",
      "resolved": "urn:visionflow:linked:sampling-based-method",
      "kind": "StubLink"
    },
    {
      "raw": "[[Steven LaValle 1998]]",
      "resolved": "urn:visionflow:linked:steven-la-valle-1998",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tree Structure]]",
      "resolved": "urn:visionflow:linked:tree-structure",
      "kind": "StubLink"
    },
    {
      "raw": "[[A-Star Algorithm]]",
      "resolved": "urn:visionflow:owl:class:a-star-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collision Detection]]",
      "resolved": "urn:visionflow:owl:class:collision-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:owl:class:motion-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Nearest Neighbor Search]]",
      "resolved": "urn:visionflow:owl:class:nearest-neighbor-search",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:owl:class:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - A sampling-based path planning algorithm that incrementally builds a tree of collision-free configurations by randomly sampling the configuration space and connecting samples to the nearest existing tree node. It efficiently explores high-dimensional spaces and is probabilistically complete.

- ### Semantic Classification
  - owl-class:: robotics:RRTAlgorithm
  - owl-role:: Algorithm
  - belongs-to-domain:: [[Robotics]], [[Motion Planning]], [[Path Planning]]

- ### Relationships
  - is-subclass-of:: [[RB-1016-path-planning]]
  - requires:: [[Configuration Space]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[RB-1016-path-planning]]
  - is-instance-of:: [[Sampling-Based Method]]
  - requires:: [[Configuration Space]]
  - requires:: [[Collision Checker]]
  - produces:: [[Tree Structure]]
  - characterized-by:: [[Probabilistic Completeness]], [[Randomization]]

  - #### Relationships
  - is-subclass-of:: [[RB-1016-path-planning]]
  - alternative-to:: [[RB-1018-dijkstra-algorithm]], [[A-Star Algorithm]]
  - variant-of:: [[RRT-Star]], [[RRT-Connect]], [[Informed RRT-Star]]
  - uses:: [[Nearest Neighbor Search]], [[Collision Detection]]
  - applied-in:: [[Mobile Robots]], [[Manipulators]], [[Autonomous Vehicles]]

  - **Basic Algorithm**
  1. Initialize tree with start configuration
  2. **Loop** (until goal reached or max iterations):
     a. Sample random configuration q_rand
     b. Find nearest node q_near in tree
     c. Steer from q_near toward q_rand (limited step size)
     d. Check if new configuration q_new is collision-free
     e. If valid, add q_new to tree with edge from q_near
  3. Return path from start to goal (if found)

  - **Key Operations**
  - **Sample()**: Generate random configuration
  - **Nearest(tree, q)**: Find closest node to q
  - **Steer(q_near, q_rand, δ)**: Extend toward q_rand by step δ
  - **CollisionFree(q)**: Check if configuration is valid
  - **AddNode(tree, q_new, q_near)**: Add new node and edge

  - **Sampling Strategies**
  - Uniform Random Sampling (standard)
  - Goal Biasing (sample goal with probability p)
  - Informed Sampling (sample within heuristic regions)
  - Obstacle-based Sampling

  - **Properties**
  - **Probabilistically Complete**: Finds solution as iterations → ∞
  - **Not Optimal**: Initial solution may be far from optimal
  - **Randomized**: Different runs produce different paths
  - **Single-Query**: Builds new tree for each query
  - **Voronoi Bias**: Explores unexplored areas naturally

  - **Advantages**
  - Handles high-dimensional spaces effectively
  - Fast exploration of large spaces
  - No need to discretize configuration space
  - Works with complex constraints
  - Simple to implement
  - Handles non-holonomic constraints

  - **Limitations**
  - Paths are not optimal (jagged, suboptimal length)
  - Difficulty with narrow passages
  - No quality guarantees on solution
  - Sensitive to step size parameter
  - Slow in cluttered environments

  - **RRT Variants**
  - **RRT*** (RRT-star):
    - Asymptotically optimal
    - Rewires tree for better paths
    - Higher computational cost
  - **RRT-Connect**:
    - Bidirectional search (from start and goal)
    - Faster than basic RRT
    - Good for multi-robot coordination
  - **Informed RRT***:
    - Uses heuristics to focus search
    - Faster convergence to optimal
  - **Dynamic RRT**:
    - Handles moving obstacles
    - Replanning capability
  - **Kinodynamic RRT**:
    - Considers velocity/acceleration
    - For dynamic systems
  - **Anytime RRT**:
    - Provides improving solutions over time

  - **Parameters**
  - **Step Size (δ)**: Max extension distance
    - Small: Slower, smoother paths
    - Large: Faster, more jagged paths
  - **Goal Bias**: Probability of sampling goal
    - 0.05-0.10 typical
  - **Max Iterations**: Termination condition

  - **Data Structures**
  - Tree: Nodes and edges
  - KD-Tree or Ball Tree for nearest neighbor search
  - Configuration space representation
  - Collision checker data structures

  - **Applications**
  - Robot arm motion planning
  - Mobile robot navigation
  - Autonomous vehicle path planning
  - Drone flight planning
  - Surgical robot planning
  - Multi-robot coordination
  - Animation and graphics

  - **Extensions and Improvements**
  - Path smoothing post-processing
  - Adaptive step size
  - Multi-tree approaches
  - Learning-based sampling
  - Parallel RRT implementations

  - **Comparison with Graph Search**
  - RRT vs [[RB-1018-dijkstra-algorithm]]:
    - RRT: Sampling-based, probabilistic
    - Dijkstra: Discrete, deterministic
    - RRT: Better for high dimensions
    - Dijkstra: Optimal in discrete spaces

  - **Computational Complexity**
  - Time: O(n log n) per iteration (nearest neighbor)
  - Space: O(n) for n nodes
  - Iterations needed: Problem-dependent

  - **Implementation Considerations**
  - Efficient nearest neighbor search
  - Fast collision checking
  - Step size tuning
  - Goal region definition
  - Early termination conditions

  - **Quality Metrics**
  - authority-score:: 0.96
  - completeness:: 0.94
  - accuracy:: 0.95

- ### Provenance
  - sources:: [[Motion Planning]], [[Steven LaValle 1998]]
  - migration-date:: 2026-04-26T00:00:00Z
