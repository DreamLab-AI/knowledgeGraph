- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1004
  - preferred-term:: A-Star Algorithm
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:AStarAlgorithm

### Relationships
- is-subclass-of:: [[Search Algorithms]]
- is-subclass-of:: [[Heuristic Methods]]
- skos:related:: [[Dijkstra's Algorithm]]
- skos:related:: [[Graph Theory]]
- uses:: [[Priority Queue]]
- enables:: [[Pathfinding]]
- enables:: [[Route Planning]]

### Definition
A* (A-star) is a best-first search algorithm that finds the optimal path between nodes in a graph by combining actual cost from the start node (g-score) with an estimated cost to the goal (h-score heuristic). It uses the evaluation function f(n) = g(n) + h(n) to prioritize which paths to explore, guaranteeing optimality when using an admissible heuristic.

### Algorithm Components
- **g(n)**: Actual cost from start to node n
- **h(n)**: Heuristic estimated cost from n to goal
- **f(n)**: Total estimated cost (g(n) + h(n))
- Open set: Nodes to be evaluated
- Closed set: Already evaluated nodes

### Properties
- Complete (always finds a solution if one exists)
- Optimal (finds lowest-cost path with admissible heuristic)
- Optimally efficient (expands minimal nodes)
- Time/space complexity: O(b^d) worst case

### Common Heuristics
- Manhattan distance (grid-based)
- Euclidean distance
- Diagonal distance
- Custom domain-specific heuristics

### Applications
- Video game pathfinding
- GPS navigation systems
- Robotics motion planning
- Network routing
- Puzzle solving
