public:: true

# Q Learning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:q-learning", "@type":"Page", "title":"Q Learning", "vc:slug":"q-learning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:q-learning",
  "@type": "Class",
  "label": "Q Learning",
  "definition": "Q-learning is a model-free, off-policy reinforcement learning algorithm that learns the value of taking a given action in a given state by iteratively updating an action-value (Q) function towards a bootstrapped Bellman target. Because it learns the optimal action-value function regardless of the policy being followed, it converges to optimal behaviour without requiring a model of the environment's dynamics. It is a foundational algorithm extended by deep Q-networks for high-dimensional problems.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reinforcement-learning",
      "label": "Reinforcement Learning"
    },
    {
      "@id": "urn:ngm:class:reinforcement-learning-algorithm",
      "label": "Reinforcement Learning Algorithm"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      },
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      },
      {
        "@id": "urn:ngm:class:dynamic-programming",
        "label": "Dynamic Programming"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bellman-equation",
        "label": "Bellman Equation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-reinforcement-learning",
        "label": "Deep Reinforcement Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:policy",
        "label": "Policy"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:deep-reinforcement-learning",
        "label": "Deep Reinforcement Learning"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- **Q Learning** is a model-free, off-policy [[Reinforcement Learning]] algorithm that learns an action-value function estimating the long-run return of each action in each state. Its update rule implements the [[Bellman Equation]] as a bootstrapped target over a [[Markov Decision Process]].
	- Because it learns the optimal [[Value Function]] independently of the behaviour policy, Q-learning converges to optimal control without a model of environment dynamics, and it scales to perception-heavy tasks through [[Deep Reinforcement Learning]].
- ### Overview
	- Introduced by Watkins in 1989, Q-learning maintains an estimate Q(s, a) of the expected discounted return for taking action a in state s and acting optimally thereafter. After each transition it nudges the estimate towards the observed reward plus the discounted maximum Q-value of the next state.
	- The "off-policy" property means the agent can explore using one policy (for example epsilon-greedy) while learning the value of the greedy optimal policy. Under suitable conditions on the learning rate and exploration, tabular Q-learning is proven to converge to the optimal action-value function.
	- For large or continuous state spaces, the table is replaced by a function approximator. Deep Q-networks combine Q-learning with neural networks, experience replay, and target networks to achieve stability, enabling agents to learn directly from raw sensory input.
- ### Mechanisms
	- Maintains an action-value estimate Q(s, a) updated by temporal-difference error.
	- Uses a bootstrapped [[Bellman Equation]] target with a discount factor.
	- Learns off-policy, decoupling exploration from the policy being evaluated.
	- Balances exploration and exploitation, commonly via epsilon-greedy action selection.
	- Scales through function approximation in [[Deep Reinforcement Learning]] with replay and target networks.
- ### Applications
	- Game-playing agents and control of simulated and physical robots.
	- Resource scheduling, routing, and energy-management decision problems.
	- Recommendation and bidding systems framed as sequential decisions.
	- Foundation for deep Q-network variants in high-dimensional perception tasks.
- ### Relationships
	- relatedTo:: [[Reinforcement Learning]]
	- relatedTo:: [[Value Function]]
	- relatedTo:: [[Agent]]
	- relatedTo:: [[Dynamic Programming]]
	- implements:: [[Bellman Equation]]
	- hasPart:: [[Value Function]]
	- uses:: [[Reward Function]]
	- uses:: [[Neural Network]]
	- partOf:: [[Reinforcement Learning]]
	- dependsOn:: [[Markov Decision Process]]
	- enables:: [[Deep Reinforcement Learning]]
	- supports:: [[Policy]]
	- bridgesTo:: [[Deep Reinforcement Learning]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
