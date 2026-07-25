public:: true

# Reward Signal

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:reward-signal",
  "@type": "Page",
  "title": "Reward Signal",
  "vc:slug": "reward-signal",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reward-signal",
  "@type": "Class",
  "label": "Reward Signal",
  "definition": "A reward signal is the scalar feedback an agent receives from its environment in reinforcement learning, indicating the immediate desirability of the state-action pair just experienced. It is the primary mechanism by which goals are communicated to a learning agent, which seeks to maximise the cumulative reward it accumulates over time rather than any single immediate value. The design of the reward signal strongly shapes learned behaviour, and poorly specified rewards can lead to unintended or degenerate strategies.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reinforcement-learning",
      "label": "Reinforcement Learning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      },
      {
        "@id": "urn:ngm:class:temporal-difference-learning",
        "label": "Temporal Difference Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:agent",
        "label": "Agent"
      },
      {
        "@id": "urn:ngm:class:temporal-difference-learning",
        "label": "Temporal Difference Learning"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
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
  - A [[Reward Signal]] is part of [[Reinforcement Learning]].
  - It is produced by a [[Reward Function]].
  - It drives an [[Agent]] toward goals.
  - It is summarised by the [[Value Function]].
- ### Overview
  - The reward signal encodes what an agent should achieve, not how to achieve it.
  - Agents optimise the expected sum of future rewards, the return.
  - Discounting weighs near-term rewards more heavily than distant ones.
  - Reward shaping adds intermediate signals to accelerate learning.
- ### Mechanisms
  - Rewards are scalar feedback delivered at each environment step.
  - Sparse rewards make credit assignment harder than dense ones.
  - Reward hacking occurs when agents exploit misspecified objectives.
  - Value functions estimate expected cumulative reward.
  - Temporal-difference methods bootstrap value from reward signals.
- ### Applications
  - Game-playing agents learning from win or loss outcomes.
  - Robotic control rewarded for task completion.
  - Recommendation and dialogue systems tuned via feedback.
  - Operations and control optimised against performance metrics.
- ### Relationships
  - partOf:: [[Reinforcement Learning]]
  - partOf:: [[Markov Decision Process]]
  - hasPart:: [[Reward Function]]
  - uses:: [[Reward Function]]
  - requires:: [[Agent]]
  - enables:: [[Value Function]]
  - supports:: [[Value Function]]
  - supports:: [[Temporal Difference Learning]]
  - dependsOn:: [[Markov Decision Process]]
  - relatedTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Agent]]
  - relatedTo:: [[Temporal Difference Learning]]
  - relatedTo:: [[Decision Making]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
