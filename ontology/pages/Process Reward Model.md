public:: true

# Process Reward Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:process-reward-model",
  "@type": "Page",
  "title": "Process Reward Model",
  "vc:slug": "process-reward-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:process-reward-model",
  "@type": "Class",
  "label": "Process Reward Model",
  "definition": "A process reward model is a reward model that scores the individual intermediate steps of a model's reasoning trajectory rather than only its final answer. By supervising each step of a chain of thought, it provides dense, step-level feedback that guides search and reinforcement learning toward sound reasoning processes. Process reward models contrast with outcome reward models, which assign a single reward based solely on the final result.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reward-model",
      "label": "Reward Model"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:reward-model",
        "label": "Reward Model"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:reward-modelling",
        "label": "Reward Modelling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain Of Thought"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:preference-learning",
        "label": "Preference Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:chain-of-thought",
        "label": "Chain Of Thought"
      },
      {
        "@id": "urn:ngm:class:reward-modelling",
        "label": "Reward Modelling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning From Human Feedback"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:reward-model",
        "label": "Reward Model"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:preference-learning",
        "label": "Preference Learning"
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
  - A process reward model scores intermediate reasoning steps, a specialised [[Reward Model]].
  - It supervises each step of a [[Chain Of Thought]] to improve [[Reasoning]].
  - It is trained with [[Reward Modelling]] and supports reinforcement learning of a [[Large Language Model]].
- ### Overview
  - Provides dense, step-level rewards instead of a single outcome reward.
  - Guides tree search and reinforcement learning toward valid reasoning chains.
  - Improves robustness against shortcut answers that are correct for wrong reasons.
- ### Mechanisms
  - Step-level annotation of reasoning trajectories.
  - Dense reward signal across each chain-of-thought step.
  - Contrast with outcome reward models scoring only the final answer.
  - Use in best-of-N search, reranking, and policy optimisation.
- ### Applications
  - Mathematical and multi-step reasoning models.
  - Verifier-guided decoding and search.
  - Reinforcement learning from human or AI feedback on reasoning.
  - Reducing reward hacking in long-horizon tasks.
- ### Relationships
  - partOf:: [[Reward Model]]
  - partOf:: [[Reinforcement Learning]]
  - hasPart:: [[Reward Modelling]]
  - relatedTo:: [[Chain Of Thought]]
  - relatedTo:: [[Reasoning]]
  - relatedTo:: [[Preference Learning]]
  - enables:: [[Reasoning]]
  - uses:: [[Chain Of Thought]]
  - uses:: [[Reward Modelling]]
  - supports:: [[Reinforcement Learning From Human Feedback]]
  - requires:: [[Large Language Model]]
  - dependsOn:: [[Reward Model]]
  - implements:: [[Preference Learning]]
- ### Provenance
  - updated:: 2026-06-15
