public:: true

# Long-Horizon Planning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:long-horizon-planning",
  "@type": "Page",
  "vc:slug": "long-horizon-planning",
  "title": "Long-Horizon Planning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:long-horizon-planning",
  "@type": "Class",
  "label": "Long-Horizon Planning",
  "definition": "Long-horizon planning is the problem of generating and executing sequences of actions over extended time horizons — spanning hundreds to thousands of steps — to achieve high-level goals that cannot be accomplished through simple reactive policies. It requires maintaining coherent goals, managing intermediate subgoal states, and adapting plans in response to environmental changes and unexpected outcomes.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:task-planning", "label": "Task Planning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:llm-agents", "label": "LLM Agents"},
      {"@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:reinforcement-learning-for-robotics", "label": "Reinforcement Learning for Robotics"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Long-horizon planning refers to the capability of an AI or robotic system to decompose complex, temporally extended goals into hierarchical subgoal structures, sequence primitive actions over hundreds or thousands of decision steps, and maintain plan coherence despite stochastic transitions, partial observability, and shifting environmental conditions. It contrasts with short-horizon reactive control in that decisions must account for consequences far beyond the immediate next state. Challenges include credit assignment across long causal chains, combinatorial growth of the plan search space, and the difficulty of maintaining accurate world models over extended episodes.

- ### Relationships
  - Long-horizon planning is a central challenge in [[Task Planning]] research and depends on [[Reinforcement Learning]] for learning hierarchical policies from sparse delayed rewards. [[Large Language Models]] have emerged as a planning backbone for [[LLM Agents]], decomposing high-level goals into actionable subtask sequences in natural language. [[Path Planning]] addresses the spatial subset of the planning problem in robotics and autonomous systems. Long-horizon planning enables [[Agentic Workflow]] pipelines and is essential in [[Multi-Agent System]] coordination where subtasks must be distributed across agents. [[Reinforcement Learning for Robotics]] applies these principles to manipulation and locomotion tasks spanning extended interaction sequences.

- ### Content
  - Long-horizon planning has been studied in artificial intelligence since the 1960s, when STRIPS (Stanford Research Institute Problem Solver, 1971) formalised planning as the search for action sequences that transform an initial state into a goal state. Classical planners operated in fully observable, deterministic domains and were tractable only for moderate horizon lengths. Hierarchical Task Network (HTN) planning introduced decomposition into methods and operators, reducing search complexity by exploiting goal structure. PDDL (Planning Domain Definition Language) standardised the representation of planning problems, enabling cross-system benchmarking on domains such as Blocksworld and Logistics.

  - The shift to learned planning arose from the failure of hand-coded domain models to scale to complex, partially observable real-world environments. Hierarchical reinforcement learning — methods such as options, feudal networks, and DIAYN — provide a principled framework for learning temporally extended actions (options) that abstract over primitive step sequences. Model-based reinforcement learning with Dyna-style planning integrates environment models to enable look-ahead planning without exhaustive real-environment rollouts. World models (Dreamer, MuZero) learn compact latent representations of environment dynamics, enabling efficient long-horizon planning in latent space.

  - In the era of large language models, long-horizon planning has partially shifted from symbolic or RL-based approaches to LLM-orchestrated decomposition. Frameworks such as Tree-of-Thought, Plan-and-Solve, and Code as Policies use LLMs to generate structured plans, verify intermediate states, and re-plan upon failure. SayPlan and Inner Monologue integrate LLM planners with robotic execution, using language-described observations to guide re-planning. In software engineering contexts, Devin and SWE-Agent demonstrate LLM agents executing multi-day coding tasks spanning hundreds of file edits and test-and-fix cycles.

  - By 2025, long-horizon planning remains one of the hardest open problems in AI. Current LLM-based agents exhibit plan drift over extended horizons — accumulating errors that cascade into task failure — and struggle with novel constraint satisfaction. Research directions include neurosymbolic approaches that combine LLM flexibility with symbolic planner guarantees, hierarchical memory architectures that maintain compressed representations of completed plan stages, and multi-agent decomposition that distributes horizon-length across parallel worker agents. Benchmarks such as ALFWorld, WebArena, and OSWorld track progress on long-horizon task completion, with frontier agents achieving 50–75% success on mid-difficulty tasks as of 2024.

