public:: true

# Policy Gradient Methods
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:policy-gradient-methods",
  "@type": "Page",
  "title": "Policy Gradient Methods",
  "vc:slug": "policy-gradient-methods",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:policy-gradient-methods",
  "@type": "Class",
  "label": "Policy Gradient Methods",
  "definition": "Policy Gradient Methods are a class of reinforcement-learning algorithms that directly optimise a parameterised policy by ascending the gradient of expected cumulative reward. Rather than deriving a policy from a learned value function, they adjust action probabilities to make rewarding behaviour more likely, using estimators such as REINFORCE and actor-critic variants. They naturally handle continuous and stochastic action spaces and underpin modern algorithms like proximal policy optimisation.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reinforcement-learning",
      "label": "Reinforcement Learning"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:policy-optimisation",
        "label": "Policy Optimisation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      },
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:proximal-policy-optimisation",
        "label": "Proximal Policy Optimisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:reward-function",
        "label": "Reward Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-reinforcement-learning",
        "label": "Deep Reinforcement Learning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:policy-optimisation",
        "label": "Policy Optimisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:value-function",
        "label": "Value Function"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - Policy Gradient Methods are a class of reinforcement-learning algorithms that directly optimise a parameterised policy by ascending the gradient of expected cumulative reward. Rather than deriving a policy from a learned value function, they adjust action probabilities to make rewarding behaviour more likely, using estimators such as REINFORCE and actor-critic variants. They naturally handle continuous and stochastic action spaces and underpin modern algorithms like proximal policy optimisation.
  - Related concepts: [[Reinforcement Learning]] [[Policy Optimisation]] [[Markov Decision Process]] [[Value Function]] [[Proximal Policy Optimisation]]
- ### Overview
  - Policy Gradient Methods optimise behaviour by treating the policy itself as a differentiable function and following the gradient of expected return. The policy gradient theorem expresses this gradient as an expectation over trajectories, which REINFORCE estimates from sampled returns and actor-critic methods reduce in variance using a learned [[Value Function]] baseline. Because they parameterise stochastic policies directly, they excel in continuous-control [[Markov Decision Process]] settings where value-based methods struggle.
- ### Mechanisms
  - Direct gradient ascent on expected cumulative [[Reward Function]] return.
  - Policy gradient theorem expressing the objective as a trajectory expectation.
  - Baselines and [[Value Function]] critics for variance reduction.
  - Natural support for continuous and stochastic action spaces.
  - Trust-region and clipping constraints in modern variants.
- ### Applications
  - Continuous control in robotics and simulation.
  - [[Deep Reinforcement Learning]] for games and decision-making.
  - Fine-tuning of large models with reinforcement signals.
  - Resource scheduling and sequential decision problems.
- ### Relationships
  - partOf:: [[Reinforcement Learning]]
  - partOf:: [[Policy Optimisation]]
  - hasPart:: [[Value Function]]
  - hasPart:: [[Reward Function]]
  - uses:: [[Gradient Descent]]
  - uses:: [[Neural Network]]
  - enables:: [[Proximal Policy Optimisation]]
  - requires:: [[Markov Decision Process]]
  - requires:: [[Reward Function]]
  - supports:: [[Deep Reinforcement Learning]]
  - implements:: [[Policy Optimisation]]
  - dependsOn:: [[Value Function]]
  - relatedTo:: [[Deep Learning]]
  - relatedTo:: [[Machine Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
