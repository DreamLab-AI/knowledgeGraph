schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#DijkstraAlgorithm
legacy_uri:: urn:visionclaw:concept:robotics:dijkstra-algorithm
public:: true

# Dijkstra Algorithm
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ff186978d098fd8f5cdc9d88272671750ff0a852e6dc63623e98c3dbef2e704e",
  "@type": "Page",
  "vc:slug": "dijkstra-algorithm",
  "title": "Dijkstra Algorithm",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:bellman-ford-algorithm",
      "vc:label": "Bellman-Ford Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:completeness",
      "vc:label": "Completeness"
    },
    {
      "@id": "urn:visionflow:linked:edsger-dijkstra-1956",
      "vc:label": "Edsger Dijkstra 1956"
    },
    {
      "@id": "urn:visionflow:linked:gps-systems",
      "vc:label": "GPS Systems"
    },
    {
      "@id": "urn:visionflow:linked:graph-representation",
      "vc:label": "Graph Representation"
    },
    {
      "@id": "urn:visionflow:linked:graph-search-algorithm",
      "vc:label": "Graph Search Algorithm"
    },
    {
      "@id": "urn:visionflow:linked:graph-theory",
      "vc:label": "Graph Theory"
    },
    {
      "@id": "urn:visionflow:linked:network-routing",
      "vc:label": "Network Routing"
    },
    {
      "@id": "urn:visionflow:linked:non-negative-weights",
      "vc:label": "Non-negative Weights"
    },
    {
      "@id": "urn:visionflow:linked:optimality",
      "vc:label": "Optimality"
    },
    {
      "@id": "urn:visionflow:linked:priority-queue",
      "vc:label": "Priority Queue"
    },
    {
      "@id": "urn:visionflow:linked:rb-1016-path-planning",
      "vc:label": "RB-1016-path-planning"
    },
    {
      "@id": "urn:visionflow:linked:rb-1017-rrt-algorithm",
      "vc:label": "RB-1017-rrt-algorithm"
    },
    {
      "@id": "urn:visionflow:linked:shortest-path",
      "vc:label": "Shortest Path"
    },
    {
      "@id": "urn:visionflow:linked:weighted-graph",
      "vc:label": "Weighted Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:a-star-algorithm",
      "vc:label": "A-Star Algorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-search",
      "vc:label": "Graph Search"
    },
    {
      "@id": "urn:visionflow:owl:class:navigation",
      "vc:label": "Navigation"
    },
    {
      "@id": "urn:visionflow:owl:class:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.99"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-90ace6a8a1aa"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-24T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#DijkstraAlgorithm"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-1018"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Dijkstra Algorithm"
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
      "vc:value": "urn:visionclaw:concept:robotics:dijkstra-algorithm"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:robotics:dijkstra-algorithm"
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
    "@id": "urn:visionflow:page:ff186978d098fd8f5cdc9d88272671750ff0a852e6dc63623e98c3dbef2e704e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:dijkstra-algorithm",
  "@type": "OntologyClass",
  "label": "Dijkstra Algorithm",
  "subClassOf": [
    {
      "@id": "urn:visionflow:linked:rb-1016-path-planning",
      "vc:label": "RB-1016-path-planning"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-search",
      "vc:label": "Graph Search"
    }
  ],
  "vc:sourceDomain": "robotics",
  "vc:status": "complete",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:ff186978d098fd8f5cdc9d88272671750ff0a852e6dc63623e98c3dbef2e704e"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:ff186978d098fd8f5cdc9d88272671750ff0a852e6dc63623e98c3dbef2e704e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A graph search algorithm that finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights. It systematically explores nodes in order of increasing distance from the source, guaranteeing optimal solutions.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.99",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:non-negative-weights",
      "vc:label": "Non-negative Weights"
    },
    {
      "@id": "urn:visionflow:linked:weighted-graph",
      "vc:label": "Weighted Graph"
    }
  ],
  "vc:uses": [
    {
      "@id": "urn:visionflow:linked:graph-representation",
      "vc:label": "Graph Representation"
    },
    {
      "@id": "urn:visionflow:linked:priority-queue",
      "vc:label": "Priority Queue"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:dijkstra-algorithm:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ff186978d098fd8f5cdc9d88272671750ff0a852e6dc63623e98c3dbef2e704e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Bellman-Ford Algorithm]]",
      "resolved": "urn:visionflow:linked:bellman-ford-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Completeness]]",
      "resolved": "urn:visionflow:linked:completeness",
      "kind": "StubLink"
    },
    {
      "raw": "[[Edsger Dijkstra 1956]]",
      "resolved": "urn:visionflow:linked:edsger-dijkstra-1956",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPS Systems]]",
      "resolved": "urn:visionflow:linked:gps-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graph Representation]]",
      "resolved": "urn:visionflow:linked:graph-representation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graph Search Algorithm]]",
      "resolved": "urn:visionflow:linked:graph-search-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graph Theory]]",
      "resolved": "urn:visionflow:linked:graph-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Routing]]",
      "resolved": "urn:visionflow:linked:network-routing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Non-negative Weights]]",
      "resolved": "urn:visionflow:linked:non-negative-weights",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optimality]]",
      "resolved": "urn:visionflow:linked:optimality",
      "kind": "StubLink"
    },
    {
      "raw": "[[Priority Queue]]",
      "resolved": "urn:visionflow:linked:priority-queue",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1016-path-planning]]",
      "resolved": "urn:visionflow:linked:rb-1016-path-planning",
      "kind": "StubLink"
    },
    {
      "raw": "[[RB-1017-rrt-algorithm]]",
      "resolved": "urn:visionflow:linked:rb-1017-rrt-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Shortest Path]]",
      "resolved": "urn:visionflow:linked:shortest-path",
      "kind": "StubLink"
    },
    {
      "raw": "[[Weighted Graph]]",
      "resolved": "urn:visionflow:linked:weighted-graph",
      "kind": "StubLink"
    },
    {
      "raw": "[[A-Star Algorithm]]",
      "resolved": "urn:visionflow:owl:class:a-star-algorithm",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graph Search]]",
      "resolved": "urn:visionflow:owl:class:graph-search",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Navigation]]",
      "resolved": "urn:visionflow:owl:class:navigation",
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
    },
    {
      "raw": "[[Spatial Computing]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:ff186978d098fd8f5cdc9d88272671750ff0a852e6dc63623e98c3dbef2e704e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A graph search algorithm that finds the shortest path from a source node to all other nodes in a weighted graph with non-negative edge weights. It systematically explores nodes in order of increasing distance from the source, guaranteeing optimal solutions.

- ### Semantic Classification
  - owl-class:: robotics:DijkstraAlgorithm
  - owl-role:: Algorithm
  - belongs-to-domain:: [[Robotics]], [[Path Planning]], [[Graph Theory]]

- ### Relationships
  - bridges-to:: [[Spatial Computing]]
  - is-subclass-of:: [[RB-1016-path-planning]], [[Graph Search]]
  - requires:: [[Non-negative Weights]]

- ### Content

  - #### OWL Restrictions
  - is-subclass-of:: [[RB-1016-path-planning]]
  - is-instance-of:: [[Graph Search Algorithm]]
  - requires:: [[Weighted Graph]]
  - requires:: [[Non-negative Weights]]
  - produces:: [[Shortest Path]]
  - characterized-by:: [[Optimality]], [[Completeness]]

  - #### Relationships
  - is-subclass-of:: [[RB-1016-path-planning]], [[Graph Search]]
  - alternative-to:: [[RB-1017-rrt-algorithm]], [[A-Star Algorithm]]
  - generalized-by:: [[A-Star Algorithm]] (with heuristic)
  - special-case-of:: [[Bellman-Ford Algorithm]] (simpler, faster)
  - uses:: [[Priority Queue]], [[Graph Representation]]
  - applied-in:: [[Navigation]], [[Network Routing]], [[GPS Systems]]

  - **Algorithm Overview**
  1. Initialize distances: source = 0, all others = ∞
  2. Add source to priority queue
  3. **While** queue not empty:
     a. Extract node u with minimum distance
     b. **For each** neighbor v of u:
        - Calculate distance through u: d = dist[u] + weight(u, v)
        - If d < dist[v]:
          - Update dist[v] = d
          - Set predecessor[v] = u
          - Add/update v in priority queue
  4. Return distances and paths

  - **Data Structures**
  - **Graph Representation**:
    - Adjacency List (preferred for sparse graphs)
    - Adjacency Matrix (dense graphs)
  - **Priority Queue**:
    - Min-Heap (most common)
    - Fibonacci Heap (better theoretical bounds)
  - **Distance Array**: dist[v] for each vertex
  - **Predecessor Array**: parent[v] to reconstruct path

  - **Properties**
  - **Optimal**: Finds shortest paths (minimum cost)
  - **Complete**: Always finds solution if exists
  - **Deterministic**: Same input → same output
  - **Greedy**: Selects minimum distance node
  - **Single-Source**: Finds paths from one source to all nodes

  - **Complexity**
  - **Time Complexity**:
    - Binary Heap: O((V + E) log V)
    - Fibonacci Heap: O(E + V log V)
    - Simple Array: O(V²)
  - **Space Complexity**: O(V + E)
  - V = vertices, E = edges

  - **Requirements**
  - Non-negative edge weights (critical)
  - Connected graph (or checks reachability)
  - Well-defined edge costs

  - **Advantages**
  - Guarantees optimal shortest path
  - Conceptually simple
  - Well-studied and proven
  - Computes paths to all nodes (useful for multiple queries)
  - Works on general graphs

  - **Limitations**
  - Requires non-negative weights (fails with negative cycles)
  - No heuristic guidance (explores all directions)
  - Computationally expensive in large graphs
  - Requires discretized space (grid or graph)
  - Not suitable for high-dimensional continuous spaces

  - **Applications in Robotics**
  - Grid-based robot path planning
  - Roadmap-based planning
  - Network routing for multi-robot systems
  - Visibility graph shortest paths
  - Voronoi diagram navigation
  - Task scheduling optimization

  - **Variants and Extensions**
  - **A* Algorithm**:
    - Dijkstra + heuristic function
    - Faster, still optimal (with admissible heuristic)
  - **Bidirectional Dijkstra**:
    - Search from both source and goal
    - Faster for single goal queries
  - **D* (Dynamic)**:
    - Handles changing edge costs
    - Incremental replanning
  - **D* Lite**:
    - Simplified version of D*
    - Used in autonomous vehicles

  - **Comparison with Other Algorithms**
  - **vs A***:
    - Dijkstra: No heuristic, explores uniformly
    - A*: Uses heuristic, more efficient
  - **vs Breadth-First Search (BFS)**:
    - Dijkstra: Weighted graphs
    - BFS: Unweighted graphs only
  - **vs [[RB-1017-rrt-algorithm]]**:
    - Dijkstra: Discrete, optimal, complete
    - RRT: Continuous, probabilistic, not optimal

  - **Path Reconstruction**
  - Trace back using predecessor array
  - Start from goal, follow parents to source
  - Reverse to get start-to-goal path

  - **Optimization Techniques**
  - Early termination (stop when goal reached)
  - Bidirectional search
  - Goal-directed heuristic (→ A*)
  - Lazy evaluation of edges

  - **Applications Beyond Robotics**
  - GPS and map routing (Google Maps, etc.)
  - Network routing protocols (OSPF)
  - Social network analysis
  - Logistics and supply chain
  - Video game pathfinding
  - Flight scheduling

  - **Historical Significance**
  - Developed by Edsger W. Dijkstra (1956)
  - Published in 1959
  - One of most fundamental algorithms
  - Basis for many modern pathfinding methods

  - **Implementation Pseudocode**
  ```
  function Dijkstra(Graph, source):
      dist[source] ← 0
      for each vertex v in Graph:
          if v ≠ source:
              dist[v] ← ∞
          add v to Q

      while Q is not empty:
          u ← vertex in Q with min dist[u]
          remove u from Q

          for each neighbor v of u:
              alt ← dist[u] + weight(u, v)
              if alt < dist[v]:
                  dist[v] ← alt
                  prev[v] ← u

      return dist[], prev[]
  ```

  - **Quality Metrics**
  - authority-score:: 0.99
  - completeness:: 0.98
  - accuracy:: 0.99

- ### Provenance
  - sources:: [[Graph Theory]], [[Edsger Dijkstra 1956]]
  - migration-date:: 2026-04-26T00:00:00Z
