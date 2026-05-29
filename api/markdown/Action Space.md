public:: true

# Action Space
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:action-space",
  "@type": "Page",
  "vc:slug": "action-space",
  "title": "Action Space",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:action-space",
  "@type": "Class",
  "label": "Action Space",
  "definition": "The action space in reinforcement learning and control theory is the complete set of actions available to an agent at any given decision step, defining the boundaries of what the agent may do when interacting with its environment. It may be discrete—a finite enumeration of choices—or continuous—a real-valued manifold such as joint torques or steering angles—and its structure fundamentally determines which learning algorithms are applicable and how efficiently a policy can be discovered.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:state-space", "label": "State Space"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:reward-function", "label": "Reward Function"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:policy-optimisation", "label": "Policy Optimisation"},
      {"@id": "urn:ngm:class:reinforcement-learning-algorithm", "label": "Reinforcement Learning Algorithm"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:environment-model", "label": "Environment Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning-for-robotics", "label": "Reinforcement Learning for Robotics"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The action space defines the complete repertoire of moves an agent may select when operating within an [[Environment Model]] during [[Reinforcement Learning]] or control tasks. It is tightly coupled to the [[State Space]]—together they constitute the Markov Decision Process—and its topology determines the applicable [[Reinforcement Learning Algorithm]] class: tabular methods for small discrete spaces, policy gradient methods for continuous manifolds. The [[Reward Function]] maps state-action pairs to scalar feedback, making the action space a defining factor in how policy learning unfolds.

- ### Relationships
  - Action Space is conceptually subordinate to the general [[State Space]] framework and is a central component of [[Reinforcement Learning]] system design. It enables [[Policy Optimisation]] and determines which [[Reinforcement Learning Algorithm]] can be deployed. It depends on an [[Environment Model]] to define what actions are physically or logically valid. It is practically instantiated in [[Reinforcement Learning for Robotics]] tasks where continuous joint-torque action spaces are common, and it is evaluated in conjunction with a [[Reward Function]] to assess agent behaviour.

- ### Content
  - The formal definition of action space originates in Richard Bellman's dynamic programming work in the 1950s, which formalised sequential decision problems in terms of states, actions, transitions, and rewards. The Markov Decision Process (MDP) formulation by Puterman (1994) consolidated the action space as a first-class construct. Early reinforcement learning work operated predominantly in discrete grid-world settings where action spaces were small and finite—typically the four cardinal directions—making tabular Q-learning feasible.

  - Modern reinforcement learning distinguishes several action space types with distinct algorithmic implications. Discrete action spaces (e.g., Atari game controllers with 18 possible actions) suit value-based methods such as DQN and its variants, which maintain a Q-value estimate per action. Continuous action spaces (e.g., a robotic arm with 6-DOF joints) require policy gradient methods—PPO, SAC, TD3—that parameterise the policy as a distribution over continuous values. Multi-discrete spaces (multiple simultaneous discrete choices) and hybrid spaces (a mix of discrete and continuous decisions) require specialised architectures. Hierarchical action spaces, where macro-actions decompose into micro-actions, address the credit assignment problem in long-horizon tasks.

  - Action space design is a significant engineering concern in applied RL. Poorly designed action spaces—too large, redundant, or unnormalised—impede convergence. Action masking, which removes invalid actions from consideration at each step, dramatically improves sample efficiency in combinatorial and constraint-heavy environments. Factorised action spaces, which decompose a joint action into independent dimensions, exploit conditional independence to scale to combinatorially large action sets. These techniques are now standard in game AI, robotics control, and multi-agent trading systems.

  - In 2024–2025, action space design for large language model-based agents has emerged as a distinct challenge. When an LLM agent operates over tool APIs, code execution environments, or web browsers, its action space is effectively natural language—infinite and sparse. Structured action spaces defined by JSON schemas or formal grammars are being investigated to constrain LLM agent behaviour and improve reliability. Simultaneously, [[Reinforcement Learning for Robotics]] research is exploring learned action space representations that adapt based on task context, enabling robots to dynamically adjust their effective action repertoire.