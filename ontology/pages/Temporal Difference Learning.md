public:: true

# Temporal Difference Learning
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:temporal-difference-learning", "@type":"Page", "title":"Temporal Difference Learning", "vc:slug":"temporal-difference-learning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:temporal-difference-learning",
  "@type": "Class",
  "label": "Temporal Difference Learning",
  "definition": "Temporal difference (TD) learning is a class of model-free reinforcement learning methods that estimate value functions by bootstrapping: each value estimate is updated towards a target composed of the immediate reward plus the discounted estimate of the successor state, rather than waiting for a full episode return. The TD error, the difference between the bootstrapped target and the current estimate, drives incremental updates and underpins algorithms such as TD(0), TD(lambda), SARSA, and Q-learning. By combining the sampling of Monte Carlo methods with the bootstrapping of dynamic programming, TD learning enables online, incremental learning from incomplete sequences.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reinforcement-learning",
      "label": "Reinforcement Learning"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      },
      {
        "@id": "urn:ngm:class:reward-signal",
        "label": "Reward Signal"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:q-learning",
        "label": "Q-Learning"
      },
      {
        "@id": "urn:ngm:class:sarsa",
        "label": "SARSA"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bellman-equation",
        "label": "Bellman Equation"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:policy-gradient",
        "label": "Policy Gradient"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:reward-signal",
        "label": "Reward Signal"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Method"
      },
      {
        "@id": "urn:ngm:class:bellman-equation",
        "label": "Bellman Equation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Method"
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
	- [[Temporal Difference Learning]] is a family of model-free [[Reinforcement Learning]] methods that learn [[Value Function|value functions]] by bootstrapping from successor-state estimates.
	- The TD error, the gap between the bootstrapped target and the current estimate, drives incremental updates.
	- It is the basis of [[Q-Learning]], [[SARSA]], and TD(lambda), grounded in the [[Bellman Equation]].
- ### Overview
	- TD learning sits between Monte Carlo methods and dynamic programming. Like Monte Carlo it learns directly from sampled experience without a model of the environment; like dynamic programming it updates estimates using other estimates (bootstrapping) rather than waiting for the final return.
	- The canonical TD(0) update adjusts the value of the current state towards the reward plus the discounted value of the next state. The magnitude of this adjustment is the TD error, a quantity that also has a striking correspondence to dopaminergic reward-prediction signals in neuroscience.
	- TD(lambda) generalises this by blending n-step returns through an exponentially weighted eligibility trace, interpolating smoothly between one-step TD and full Monte Carlo updates.
	- When combined with function approximation and deep networks, TD methods yield deep Q-networks and actor-critic algorithms that scale to high-dimensional state spaces.
- ### Mechanisms
	- Bootstrapping: updating an estimate using a later, partly estimated target.
	- TD error: the scalar difference that signals how surprising an outcome was.
	- Eligibility traces: short-term memory of recently visited states for credit assignment.
	- On-policy (SARSA) versus off-policy (Q-learning) control variants.
- ### Applications
	- Game playing and control agents (Atari, board games, robotics).
	- Critic estimation in actor-critic and [[Policy Gradient]] methods.
	- Recommendation and sequential decision systems.
	- Operations research and adaptive control problems framed as a [[Markov Decision Process]].
- ### Relationships
	- hasPart:: [[Value Function]]
	- hasPart:: [[Reward Signal]]
	- partOf:: [[Reinforcement Learning]]
	- implements:: [[Q-Learning]]
	- implements:: [[SARSA]]
	- uses:: [[Bellman Equation]]
	- uses:: [[Markov Decision Process]]
	- uses:: [[Value Function]]
	- enables:: [[Policy Gradient]]
	- enables:: [[Deep Learning]]
	- dependsOn:: [[Reward Signal]]
	- relatedTo:: [[Monte Carlo Method]]
	- relatedTo:: [[Bellman Equation]]
	- contrastsWith:: [[Monte Carlo Method]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
