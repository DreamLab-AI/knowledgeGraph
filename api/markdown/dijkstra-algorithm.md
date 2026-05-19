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