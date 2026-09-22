public:: true

# Bellman Equation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:bellman-equation", "@type":"Page", "title":"Bellman Equation", "vc:slug":"bellman-equation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:bellman-equation",
  "@type":"Class",
  "label":"Bellman Equation",
  "definition":"The Bellman equation is a recursive relationship that expresses the value of a state as the immediate reward plus the discounted value of successor states under a given policy. It is the mathematical foundation of dynamic programming and reinforcement learning, characterising optimal behaviour through the principle of optimality. Solving or approximating the Bellman equation yields value functions and optimal policies for sequential decision problems.",
  "domain":"machine-learning",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:dynamic-programming","label":"Dynamic Programming"}],
  "relations":{
    "implements":[{"@id":"urn:ngm:class:dynamic-programming","label":"Dynamic Programming"}],
    "uses":[{"@id":"urn:ngm:class:value-function","label":"Value Function"},{"@id":"urn:ngm:class:reward-function","label":"Reward Function"}],
    "partOf":[{"@id":"urn:ngm:class:markov-decision-process","label":"Markov Decision Process"}],
    "enables":[{"@id":"urn:ngm:class:q-learning","label":"Q Learning"},{"@id":"urn:ngm:class:reinforcement-learning","label":"Reinforcement Learning"}],
    "supports":[{"@id":"urn:ngm:class:optimal-control","label":"Optimal Control"},{"@id":"urn:ngm:class:planning","label":"Planning"}],
    "relatedTo":[{"@id":"urn:ngm:class:value-function","label":"Value Function"},{"@id":"urn:ngm:class:policy","label":"Policy"},{"@id":"urn:ngm:class:state-space","label":"State Space"}],
    "dependsOn":[{"@id":"urn:ngm:class:markov-decision-process","label":"Markov Decision Process"}],
    "bridgesTo":[{"@id":"urn:ngm:class:q-learning","label":"Q Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- The **Bellman Equation** expresses the value of a state recursively as the immediate [[Reward Function]] outcome plus the discounted value of the states it leads to. It is the cornerstone of [[Dynamic Programming]] and gives the [[Value Function]] its self-consistent structure within a [[Markov Decision Process]].
	- By encoding Bellman's principle of optimality, the equation characterises optimal sequential decision-making and underlies [[Reinforcement Learning]] algorithms such as [[Q Learning]].
- ### Overview
	- Richard Bellman introduced the equation in the 1950s as the engine of dynamic programming. Its key idea is that an optimal policy has the property that whatever the initial state and decision, the remaining decisions must constitute an optimal policy for the resulting state.
	- For a fixed policy, the Bellman expectation equation defines the value function as a fixed point: V(s) equals the expected reward plus the discounted expected value of the next state. The Bellman optimality equation replaces the expectation over a fixed policy with a maximisation over actions, characterising the optimal value function.
	- These equations are contraction mappings under discounting, so iterative methods such as value iteration and policy iteration converge to the unique solution. Model-free methods like temporal-difference learning and Q-learning approximate the same fixed point from sampled experience.
- ### Mechanisms
	- Decomposes long-horizon return into immediate reward plus discounted future value.
	- Defines a fixed point that value iteration and policy iteration solve by repeated application.
	- Acts as a contraction under the discount factor, guaranteeing convergence.
	- Provides the bootstrapping target used by temporal-difference and [[Q Learning]] updates.
	- Generalises to continuous state and action spaces via the Hamilton–Jacobi–Bellman equation in [[Optimal Control]].
- ### Applications
	- Computing optimal policies in robotics, operations research, and game playing.
	- Underpinning value-based [[Reinforcement Learning]] agents and deep Q-networks.
	- Inventory, resource-allocation, and scheduling problems solved by dynamic programming.
	- Continuous-time optimal control of dynamical and economic systems.
- ### Relationships
	- implements:: [[Dynamic Programming]]
	- uses:: [[Value Function]]
	- uses:: [[Reward Function]]
	- partOf:: [[Markov Decision Process]]
	- enables:: [[Q Learning]]
	- enables:: [[Reinforcement Learning]]
	- supports:: [[Optimal Control]]
	- supports:: [[Planning]]
	- relatedTo:: [[Value Function]]
	- relatedTo:: [[Policy]]
	- relatedTo:: [[State Space]]
	- dependsOn:: [[Markov Decision Process]]
	- bridgesTo:: [[Q Learning]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
