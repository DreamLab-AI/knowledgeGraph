public:: true

# tree of thoughts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7577f2f641779b3f3070ba4598a19718f441b49d4057410225334f6ddacc5bf4",
  "@type": "Page",
  "vc:slug": "tree-of-thoughts",
  "title": "tree of thoughts",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tree-of-thoughts",
  "@type": "Class",
  "label": "Tree of Thoughts",
  "definition": "Tree of Thoughts (ToT) is a deliberate reasoning framework for large language models that generalises linear chain-of-thought prompting into a tree-structured search over intermediate thought steps. At each node in the tree the model generates multiple candidate next-thoughts, evaluates their promise using an LLM-based heuristic, and selects branches to expand via breadth-first or depth-first search with backtracking. This enables systematic exploration of alternative reasoning paths and is particularly effective for combinatorial planning, mathematical proof construction, or multi-step problem-solving where greedy left-to-right decoding is insufficient. ToT was formalised by Yao et al. (2023) and represents the foundational instance of inference-time compute scaling through structured search.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:tot-prompting", "label": "ToT Prompting"},
    {"@id": "urn:ngm:class:tree-search-prompting", "label": "Tree Search Prompting"}
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:inference-time-compute", "label": "Inference-Time Compute"},
      {"@id": "urn:ngm:class:deliberate-reasoning", "label": "Deliberate Reasoning"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:thought-generator", "label": "Thought Generator"},
      {"@id": "urn:ngm:class:thought-evaluator", "label": "Thought Evaluator"},
      {"@id": "urn:ngm:class:tree-search-algorithm", "label": "Tree Search Algorithm"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:mathematical-reasoning", "label": "Mathematical Reasoning"},
      {"@id": "urn:ngm:class:automated-planning", "label": "Automated Planning"},
      {"@id": "urn:ngm:class:combinatorial-problem-solving", "label": "Combinatorial Problem Solving"},
      {"@id": "urn:ngm:class:multi-step-reasoning", "label": "Multi-Step Reasoning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:breadth-first-search", "label": "Breadth-First Search"},
      {"@id": "urn:ngm:class:depth-first-search", "label": "Depth-First Search"},
      {"@id": "urn:ngm:class:beam-search", "label": "Beam Search"},
      {"@id": "urn:ngm:class:backtracking", "label": "Backtracking"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:chain-of-thought", "label": "Chain of Thought"},
      {"@id": "urn:ngm:class:self-consistency", "label": "Self-Consistency"},
      {"@id": "urn:ngm:class:react-prompting", "label": "ReAct Prompting"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:monte-carlo-tree-search", "label": "Monte Carlo Tree Search"},
      {"@id": "urn:ngm:class:process-reward-model", "label": "Process Reward Model"},
      {"@id": "urn:ngm:class:speculative-decoding", "label": "Speculative Decoding"},
      {"@id": "urn:ngm:class:graph-of-thoughts", "label": "Graph of Thoughts"},
      {"@id": "urn:ngm:class:skeleton-of-thought", "label": "Skeleton of Thought"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:heuristic-search", "label": "Heuristic Search"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - **Tree of Thoughts** (ToT) is a deliberate [[Inference-Time Compute]] framework for [[Large Language Models]] that generalises linear [[Chain of Thought]] prompting into a tree-structured search over intermediate reasoning steps. At each node the model generates multiple candidate next-thoughts, evaluates their promise with an LLM-based heuristic (analogous to a [[Process Reward Model]]), and expands promising branches using classical search algorithms such as [[Breadth-First Search]] or [[Depth-First Search]] with [[Backtracking]]. Formalised by Yao et al. (2023), ToT enables systematic exploration of alternative reasoning paths and is particularly effective for tasks requiring combinatorial planning, [[Mathematical Reasoning]], or multi-step constraint satisfaction where greedy left-to-right decoding fails.

- ### Overview
  - Tree of Thoughts arose from the observation that human problem-solving rarely proceeds linearly: people explore multiple partial solutions, abandon dead ends, and revisit earlier decisions. Standard [[Chain of Thought]] prompting forces an LLM to commit to a single left-to-right sequence, offering no mechanism to recover from an early reasoning error.
  - ToT addresses this by reframing LLM reasoning as a classical [[Tree Search Algorithm|tree search]] problem with three cooperating components: a **thought generator**, a **thought evaluator**, and a **search controller**. This decomposition makes inference-time computation explicit and steerable.
  - The framework is model-agnostic: any instruction-following [[Large Language Models|LLM]] can serve as both the generator and evaluator, requiring only well-structured prompts. No additional training or fine-tuning is required, making it a zero-shot prompting strategy that complements [[Prompt Engineering]] best practices.
  - ToT is a landmark instance of **inference-time scaling**, the broader paradigm in which spending more compute at inference (rather than training) unlocks qualitatively harder problems. It directly influenced subsequent work on [[Process Reward Model|process reward models]], [[Graph of Thoughts]], and OpenAI o1-style reasoning models.

- ### Key Mechanisms
  - #### Thought Generator
    - Produces $k$ candidate intermediate reasoning steps (thoughts) at each tree node.
    - Two generation strategies are used:
      - **Sample**: draw $k$ independent thoughts from the LLM at temperature > 0 (promotes diversity).
      - **Propose**: prompt the LLM to enumerate multiple thoughts in one call (more coherent but less diverse).
    - Each "thought" is a short natural-language chunk representing a coherent intermediate state — a sentence, an equation line, or a plan step.
  - #### Thought Evaluator
    - Scores or ranks the candidate thoughts to guide [[Heuristic Search|heuristic pruning]].
    - Two evaluation modes:
      - **Value**: the LLM assigns a scalar score (e.g. "certain / likely / impossible") to each thought independently. Aggregated across sampled evaluations to reduce noise.
      - **Vote**: the LLM compares multiple thoughts and votes on the most promising — better when absolute scoring is ill-calibrated.
    - This component is conceptually analogous to the value network in [[Monte Carlo Tree Search]] (as used in [[AlphaGo]]), substituting a learned game-position evaluator with LLM reasoning quality assessment.
  - #### Search Controller
    - Orchestrates tree expansion using classical algorithms:
      - **Breadth-First Search** ([[Breadth-First Search]]): explores all nodes at depth $d$ before proceeding to $d+1$; complete but memory-intensive.
      - **Depth-First Search** ([[Depth-First Search]]): expands one branch fully before [[Backtracking]]; memory-efficient but may waste compute on dead ends.
      - **[[Beam Search]]**: keeps only the top-$b$ nodes at each level; balances quality and cost.
    - The controller decides when to prune (discard low-valued branches), when to backtrack, and when to terminate (solution found or budget exhausted).
  - #### Problem Decomposition
    - Effective ToT applications require decomposing the problem into discrete, evaluable intermediate states — the "thoughts". This decomposition is task-specific and provided via the system prompt.
    - Well-suited problems have clear intermediate states (proof steps, plan stages, code lines) and a reliable evaluability criterion.

- ### Applications / Use Cases
  - **Mathematical game puzzles**: the original paper demonstrated ToT on Game of 24, where the model must combine four numbers with arithmetic operations to reach 24; success jumped from 4% (chain-of-thought) to 74% (ToT with BFS).
  - **Creative writing**: ToT was applied to crossword-clue solving and coherent multi-paragraph story planning where locally plausible continuations must remain globally consistent.
  - **Code generation**: planning and then verifying partial code sketches before committing to an implementation, reducing syntactic dead ends.
  - **Automated planning** ([[Automated Planning]]): generating and pruning candidate action sequences for agentic tasks, complementing [[ReAct Prompting]] and [[Tool Use]] frameworks.
  - **Scientific hypothesis exploration**: enumerating candidate molecular structures or experimental designs and ranking their feasibility before detailed simulation.
  - **Educational tutoring**: generating multiple solution paths to a problem, selecting the clearest for explanation to a student.
  - **Legal and policy reasoning**: exploring multiple interpretive branches of a statutory question and evaluating their consistency before presenting a conclusion.

- ### Variants and Extensions
  - **[[Graph of Thoughts]]** (Besta et al., 2023): generalises ToT from a tree to a directed acyclic graph, allowing thoughts to be merged and recombined rather than only forked. This captures the non-tree structure of many real problems.
  - **[[Skeleton of Thought]]**: parallelises generation by first producing a structural skeleton, then filling branches concurrently — trading search depth for latency reduction.
  - **RAP (Reasoning via Planning)**: integrates a world model (also implemented via LLM) into the search loop, enabling model-based planning analogous to [[MCTS]].
  - **Deliberate Problem Solving (DPS)**: applies ToT ideas to [[Reinforcement Learning]] environments where the LLM evaluator can be replaced or supplemented by environment rewards.
  - **Hybrid ToT/CoT**: problem-complexity classifiers switch between cheap linear [[Chain of Thought]] and expensive tree search based on estimated difficulty, reducing average inference cost.
  - **Process Reward Models for pruning**: replace the LLM evaluator with a dedicated [[Process Reward Model]] trained on annotated solution traces, improving evaluation efficiency and accuracy.

- ### Relationships
  - partOf:: [[Inference-Time Compute]]
  - partOf:: [[Deliberate Reasoning]]
  - hasPart:: [[Thought Generator]]
  - hasPart:: [[Thought Evaluator]]
  - hasPart:: [[Tree Search Algorithm]]
  - requires:: [[Large Language Models]]
  - requires:: [[Prompt Engineering]]
  - enables:: [[Mathematical Reasoning]]
  - enables:: [[Automated Planning]]
  - enables:: [[Combinatorial Problem Solving]]
  - enables:: [[Multi-Step Reasoning]]
  - uses:: [[Breadth-First Search]]
  - uses:: [[Depth-First Search]]
  - uses:: [[Beam Search]]
  - uses:: [[Backtracking]]
  - contrastsWith:: [[Chain of Thought]]
  - contrastsWith:: [[Self-Consistency]]
  - contrastsWith:: [[ReAct Prompting]]
  - relatedTo:: [[Monte Carlo Tree Search]]
  - relatedTo:: [[Process Reward Model]]
  - relatedTo:: [[Speculative Decoding]]
  - relatedTo:: [[Graph of Thoughts]]
  - relatedTo:: [[Skeleton of Thought]]
  - bridges-to:: [[Heuristic Search]]
  - bridges-to:: [[Reinforcement Learning]]

- ### Comparison with Related Approaches
  - | Approach | Search Structure | Evaluation | Backtracking | Inference Cost |
    |---|---|---|---|---|
    | Standard prompting | None | None | No | 1× |
    | [[Chain of Thought]] | Linear | None | No | 1–2× |
    | [[Self-Consistency]] | Parallel samples | Majority vote | No | $k$× |
    | **Tree of Thoughts** | Tree | LLM heuristic | Yes | $k^d$× |
    | [[Graph of Thoughts]] | DAG | LLM heuristic | Yes | Higher |
    | [[Monte Carlo Tree Search]] | Tree | Value network | Yes | Varies |
  - ToT sits between self-consistency (embarrassingly parallel, no structured search) and full MCTS (requiring a trained value function). Its key differentiator is LLM-as-evaluator enabling zero-shot heuristic guidance.

- ### Limitations and Challenges
  - **Inference cost**: branching factor $k$ and search depth $d$ multiply LLM calls multiplicatively; cost is $O(k^d)$ in the worst case, making deep trees prohibitively expensive.
  - **Evaluation quality**: the LLM evaluator is itself imperfect; poor evaluation degrades search quality — "garbage in, garbage out" at the heuristic level.
  - **Decomposition difficulty**: problems without natural intermediate states are hard to frame as tree search; the decomposition prompt is task-specific and requires expert design.
  - **Latency**: sequential tree expansion introduces high wall-clock latency, limiting real-time applications. Parallelisation mitigates cost but requires managing concurrent LLM calls.
  - **Prompt sensitivity**: like all [[Prompt Engineering]] techniques, ToT performance is sensitive to exact prompt wording and few-shot example quality.

- ### Standards & Context
  - ToT emerged within the [[AI Safety]] and [[AI Alignment]] adjacent discourse on making LLM reasoning legible: tree-structured intermediate states are explicitly observable and auditable, contrasting with opaque next-token prediction.
  - It influenced the design philosophy of OpenAI's o1 and o3 reasoning model series, which implement inference-time chain-of-thought extension internally, and DeepSeek-R1 which uses a similar search-and-evaluate paradigm during training via [[Reinforcement Learning]] from verifier feedback.
  - The framework intersects with classical [[Automated Planning]] (STRIPS, PDDL) research, reconnecting modern [[Large Language Models|LLM]] capabilities to symbolic AI traditions.
  - No formal standardisation body governs ToT; it is an academic framework adopted by the practitioner community and extended through open-source implementations (e.g. `princeton-nlp/tree-of-thought-llm` on GitHub).

- ### Provenance
  - sources:: Yao et al. (2023) "Tree of Thoughts: Deliberate Problem Solving with Large Language Models" (NeurIPS 2023); Long (2023) "Large Language Model Guided Tree-of-Thought"; Besta et al. (2023) "Graph of Thoughts"
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
