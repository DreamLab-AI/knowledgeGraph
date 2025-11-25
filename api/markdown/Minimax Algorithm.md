- ### OntologyBlock
  - ontology:: true
  - public-access:: true
  - term-id:: AI-1005
  - preferred-term:: Minimax Algorithm
  - source-domain:: ai
  - status:: draft

### Relationships
- is-subclass-of:: [[Search Algorithms]]
- is-subclass-of:: [[Game Theory]]
- skos:related:: [[Alpha-Beta Pruning]]
- skos:related:: [[Decision Tree]]
- used-in:: [[Game Playing AI]]
- enables:: [[Adversarial Search]]

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
