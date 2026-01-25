- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-4000
  - preferred-term:: Search Algorithms
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:SearchAlgorithms

### Relationships
- is-subclass-of:: [[Artificial Intelligence]]
  collapsed:: true
  - #### Inverse Relationships (Inferred by Reasoner)
    - A-Star Algorithm is-subclass-of Search Algorithms
    - Minimax Algorithm is-subclass-of Search Algorithms
    - Monte Carlo Tree Search is-subclass-of Search Algorithms
- skos:related:: [[Optimization]]
- skos:related:: [[Graph Theory]]
- enables:: [[Planning and Scheduling]]
- enables:: [[Pathfinding]]

### Definition
Search algorithms are computational methods used to navigate through problem spaces to find solutions, optimal paths, or goal states. They systematically explore possible states and transitions, employing various strategies such as breadth-first, depth-first, heuristic-guided, or adversarial search to efficiently discover solutions to complex problems.

### Categories
**Uninformed Search:**
- Breadth-first search (BFS)
- Depth-first search (DFS)
- Uniform cost search

**Informed Search:**
- Greedy best-first search
- A* algorithm
- Iterative deepening A*

**Adversarial Search:**
- Minimax
- Alpha-beta pruning
- Monte Carlo Tree Search

**Local Search:**
- Hill climbing
- Simulated annealing
- Genetic algorithms

### Applications
- Route planning and navigation
- Game playing (chess, Go)
- Scheduling and resource allocation
- Puzzle solving
- Robotics path planning
