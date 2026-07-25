public:: true

# Behavioural Economics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:behavioural-economics",
  "@type": "Page",
  "vc:slug": "behavioural-economics",
  "title": "Behavioural Economics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:behavioural-economics",
  "@type": "Class",
  "label": "Behavioural Economics",
  "definition": "Behavioural economics is an interdisciplinary field that integrates insights from cognitive psychology and social science into economic modelling, documenting systematic ways in which human decision-making deviates from the predictions of classical rational-choice theory. It explains phenomena such as loss aversion, anchoring, present bias, and herd behaviour that standard utility maximisation models cannot account for.",
  "domain": "finance",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:economics",
    "label": "Economics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:prospect-theory",
        "label": "Prospect Theory"
      },
      {
        "@id": "urn:ngm:class:nudge-theory",
        "label": "Nudge Theory"
      },
      {
        "@id": "urn:ngm:class:bounded-rationality",
        "label": "Bounded Rationality"
      },
      {
        "@id": "urn:ngm:class:loss-aversion",
        "label": "Loss Aversion"
      },
      {
        "@id": "urn:ngm:class:present-bias",
        "label": "Present Bias"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decision-science",
        "label": "Decision Science"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cognitive-psychology",
        "label": "Cognitive Psychology"
      },
      {
        "@id": "urn:ngm:class:experimental-economics",
        "label": "Experimental Economics"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:heuristic-methods",
        "label": "Heuristic Methods"
      },
      {
        "@id": "urn:ngm:class:behavioral-modeling",
        "label": "Behavioral Modeling"
      },
      {
        "@id": "urn:ngm:class:randomised-controlled-trial",
        "label": "Randomised Controlled Trial"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mechanism-design",
        "label": "Mechanism Design"
      },
      {
        "@id": "urn:ngm:class:incentive-alignment",
        "label": "Incentive Alignment"
      },
      {
        "@id": "urn:ngm:class:choice-architecture",
        "label": "Choice Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:rational-choice-theory",
        "label": "Rational Choice Theory"
      },
      {
        "@id": "urn:ngm:class:expected-utility-theory",
        "label": "Expected Utility Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:reward-modelling",
        "label": "Reward Modelling"
      },
      {
        "@id": "urn:ngm:class:algorithmic-recommendation",
        "label": "Algorithmic Recommendation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:incentive-compatibility",
        "label": "Incentive Compatibility"
      },
      {
        "@id": "urn:ngm:class:behavioral-analytics",
        "label": "Behavioral Analytics"
      },
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:contract-theory",
        "label": "Contract Theory"
      },
      {
        "@id": "urn:ngm:class:development-economics",
        "label": "Development Economics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:behavioral-economics",
      "label": "Behavioral Economics"
    },
    {
      "@id": "urn:ngm:class:psychological-economics",
      "label": "Psychological Economics"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Behavioural economics combines the rigour of formal economic modelling with empirical evidence from psychology to explain how real people make choices under uncertainty, scarcity, and social pressure. Key constructs include prospect theory's asymmetric treatment of gains and losses, hyperbolic discounting of future rewards, the anchoring effect of irrelevant reference points, and social norms that override self-interest. The field informs policy through [[Mechanism Design]] and choice architecture, and is increasingly applied in digital product design and algorithmic systems. Its methods draw heavily on [[Heuristic Methods]] and [[Behavioral Modeling]].

- ### Relationships
  - Behavioural economics [[uses]] [[Heuristic Methods]] to characterise cognitive shortcuts that produce predictable biases, and [[uses]] [[Behavioral Modeling]] to formalise these patterns mathematically. It [[enables]] [[Mechanism Design]] by identifying how incentive structures must account for bounded rationality, and [[enables]] [[Incentive Alignment]] in organisational and platform contexts. It is [[relatedTo]] [[Incentive Compatibility]] in game-theoretic settings and to [[Behavioral Analytics]] as the applied data-driven counterpart.

- ### Content
  - The intellectual roots of behavioural economics lie in the work of Herbert Simon, who introduced the concept of bounded rationality in the 1950s, and in Kahneman and Tversky's prospect theory, published in 1979. Their empirical demonstrations that people weight losses approximately twice as heavily as equivalent gains posed a direct challenge to expected utility theory. Richard Thaler extended this programme into market anomalies and later co-developed nudge theory with Cass Sunstein, earning the Nobel Memorial Prize in Economic Sciences in 2017.

  - Technically, behavioural economics constructs models that parameterise deviations from rationality. Prospect theory replaces the utility function with a value function defined over gains and losses relative to a reference point, combined with a probability weighting function that overweights small probabilities and underweights large ones. Quasi-hyperbolic discounting (beta-delta preferences) captures present bias by applying an additional discount factor to all non-immediate periods. These models are tractable enough to be embedded in mechanism design and contract theory.

  - The field's ecosystem spans academic departments of economics, business schools, and government "nudge units" such as the UK Behavioural Insights Team (founded 2010) and the US Social and Behavioural Sciences Team. Major technology platforms deploy behavioural insights to shape user engagement, pricing, and default settings. Development economics applies the field to savings behaviour and health adoption in low-income populations.

  - By 2024–2025 behavioural economics increasingly intersects with AI systems: recommendation algorithms exploit known biases such as variable reward schedules and social proof, raising ethical questions about manipulation. Researchers are developing frameworks to audit algorithmic nudges and align them with user welfare. The field is also being applied to explain and correct AI alignment failures, linking bounded human rationality to challenges in specifying reward functions for machine learning agents.

