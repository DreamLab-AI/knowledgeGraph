iri:: http://narrativegoldmine.com/artificial-intelligence#MonteCarloTreeSearch
uri:: urn:visionclaw:concept:artificial-intelligence:monte-carlo-tree-search
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:monte-carlo-tree-search
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Monte Carlo Tree Search
content-hash:: sha256-12-369a4d7f52f9
legacy-term-id:: AI-1006
status:: draft
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

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
