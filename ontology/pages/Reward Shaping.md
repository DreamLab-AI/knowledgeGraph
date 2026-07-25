public:: true

# Reward Shaping

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:reward-shaping",
  "@type": "Page",
  "title": "Reward Shaping",
  "vc:slug": "reward-shaping",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reward-shaping",
  "@type": "Class",
  "label": "Reward Shaping",
  "definition": "Reward shaping is a reinforcement-learning technique that augments an environment's native reward signal with additional intermediate rewards to guide and accelerate learning. Potential-based reward shaping provides theoretical guarantees that the optimal policy is preserved, avoiding the introduction of unintended behaviours. It is commonly used to address sparse-reward problems where useful feedback is rare.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reinforcement-learning",
      "label": "Reinforcement Learning"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:reward-engineering",
        "label": "Reward Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agent-training",
        "label": "Agent Training"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:reward-hacking",
        "label": "Reward Hacking"
      },
      {
        "@id": "urn:ngm:class:sparse-reward",
        "label": "Sparse Reward"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:potential-based-reward-shaping",
        "label": "Potential-Based Reward Shaping"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:inverse-reinforcement-learning",
        "label": "Inverse Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:exploration-exploitation",
        "label": "Exploration-Exploitation"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Reward Shaping]] adds intermediate signals to a [[Reward Function]] to accelerate [[Reinforcement Learning]], using [[Potential-Based Reward Shaping]] to preserve the optimal policy of the underlying [[Markov Decision Process]].
- ### Overview
  - Reward shaping injects extra reward terms that make the gradient of progress denser and easier to follow.
  - Naive shaping risks changing the optimal policy and inducing reward hacking, where the agent exploits the proxy signal.
  - Potential-based reward shaping defines the extra reward as the difference of a potential function over consecutive states, which provably leaves the optimal policy unchanged.
  - Shaping is especially valuable in sparse-reward tasks where the agent rarely sees informative feedback.
- ### Mechanisms
  - Potential function over states whose differences form the shaping reward.
  - Difference-of-potentials formula F(s,s') = gamma*phi(s') - phi(s).
  - Curriculum and distance-based heuristics for designing potentials.
  - Guarding against reward hacking by validating that proxy and true objectives align.
  - Integration with value-function estimates as a learned potential.
- ### Applications
  - Speeding up training in sparse-reward robotics and control tasks.
  - Guiding exploration in navigation and game-playing agents.
  - Encoding domain knowledge as soft guidance without overriding the goal.
  - Stabilising learning in long-horizon decision problems.
- ### Relationships
  - uses:: [[Reward Function]]
  - uses:: [[Markov Decision Process]]
  - supports:: [[Reinforcement Learning]]
  - supports:: [[Value Function]]
  - partOf:: [[Reward Engineering]]
  - enables:: [[Agent Training]]
  - requires:: [[Reward Function]]
  - contrastsWith:: [[Reward Hacking]]
  - contrastsWith:: [[Sparse Reward]]
  - implements:: [[Potential-Based Reward Shaping]]
  - relatedTo:: [[Inverse Reinforcement Learning]]
  - relatedTo:: [[Exploration-Exploitation]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
