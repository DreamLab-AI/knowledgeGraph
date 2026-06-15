public:: true

# Utility Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:utility-theory",
  "@type": "Page",
  "title": "Utility Theory",
  "vc:slug": "utility-theory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:utility-theory",
  "@type": "Class",
  "label": "Utility Theory",
  "definition": "Utility Theory is the formal framework for representing an agent's preferences over outcomes as a numerical utility function, such that the agent's rational behaviour can be modelled as the maximisation of expected utility. It provides the axiomatic foundation — completeness, transitivity, continuity, and independence — under which preferences admit a utility representation. In artificial intelligence it grounds rational-agent design, decision-making under uncertainty, and the objective functions of planning and reinforcement-learning systems. It is closely tied to decision theory, game theory, and economic models of choice.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decision-theory",
      "label": "Decision Theory"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:decision-theory",
        "label": "Decision Theory"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:rational-agent",
        "label": "Rational Agent"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:behavioural-economics",
        "label": "Behavioural Economics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:welfare-economics",
        "label": "Welfare Economics"
      },
      {
        "@id": "urn:ngm:class:social-choice-theory",
        "label": "Social Choice Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:microeconomics",
        "label": "Microeconomics"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decision-theory",
        "label": "Decision Theory"
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
  - [[Utility Theory]] represents an agent's preferences as a utility function whose maximisation defines rational choice, grounding [[Decision Theory]], the design of a [[Rational Agent]], and decision-making under uncertainty using [[Probability Theory]] and [[Markov Decision Process]] models.

- ### Overview
  - Utility theory answers a foundational question: when can preferences over outcomes be represented by a single number such that preferring more utility is equivalent to preferring the outcome? The von Neumann-Morgenstern axioms give the answer for choice under risk.
  - Expected utility maximisation provides the normative standard for rational decision-making under uncertainty, combining a utility function over outcomes with a probability distribution over states.
  - In AI, utility functions define the objectives of rational agents, the reward structure of reinforcement learning, and the payoffs in game-theoretic and multi-agent settings.

- ### Key aspects
  - Axioms: completeness, transitivity, continuity, and independence guarantee a utility representation of preferences.
  - Expected utility: the weighted average of outcome utilities under a probability distribution, maximised by rational agents.
  - Risk attitudes: concavity and convexity of the utility function encode risk aversion and risk seeking.
  - Descriptive limits: behavioural economics documents systematic deviations from expected-utility predictions, motivating prospect theory.

- ### Applications
  - Defining objective and reward functions for AI planning and reinforcement-learning agents.
  - Modelling payoffs in game-theoretic analysis of multi-agent systems.
  - Decision support and economic modelling of choice under risk.

- ### Relationships
  - hasPart:: [[Decision Theory]]
  - hasPart:: [[Probability Theory]]
  - requires:: [[Rational Agent]]
  - requires:: [[Probability Theory]]
  - uses:: [[Bayesian Inference]]
  - uses:: [[Markov Decision Process]]
  - enables:: [[Decision Making]]
  - enables:: [[Reinforcement Learning]]
  - supports:: [[Game Theory]]
  - supports:: [[Multi-Agent System]]
  - contrastsWith:: [[Behavioural Economics]]
  - bridgesTo:: [[Welfare Economics]]
  - bridgesTo:: [[Social Choice Theory]]
  - relatedTo:: [[Microeconomics]]
  - partOf:: [[Decision Theory]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
