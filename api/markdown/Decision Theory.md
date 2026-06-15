public:: true

# Decision Theory

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decision-theory",
  "@type": "Page",
  "title": "Decision Theory",
  "vc:slug": "decision-theory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decision-theory",
  "@type": "Class",
  "label": "Decision Theory",
  "definition": "Decision theory is the formal study of how a rational agent should choose among actions whose outcomes are uncertain, combining probabilities over states of the world with utilities over outcomes to select actions that maximise expected utility. Its normative branch prescribes optimal choice under axioms of rationality, while its descriptive branch studies how agents actually decide. It provides the foundational framework for rational action in artificial intelligence, economics, and operations research.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
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
        "@id": "urn:ngm:class:ai-safety-research",
        "label": "AI Safety Research"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operations-research",
        "label": "Operations Research"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
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
	- [[Decision Theory]] is the formal study of rational choice under uncertainty, weighing probabilities against utilities to maximise expected outcome.
	- It draws on [[Probability Theory]] and [[Bayesian Inference]] and underpins rational action in [[Artificial Intelligence]].
- ### Overview
	- A decision problem comprises possible actions, uncertain states of the world, a probability distribution over those states, and a utility function over outcomes.
	- The expected-utility principle selects the action whose probability-weighted utility is greatest.
	- The normative view prescribes how an ideal agent should choose; the descriptive view models how humans and agents actually choose, often diverging from the ideal.
- ### Key aspects
	- Expected utility maximisation as the criterion of rationality (von Neumann–Morgenstern axioms).
	- Bayesian updating of beliefs as evidence arrives.
	- Value of information: quantifying the worth of reducing uncertainty before acting.
	- Sequential decisions formalised as [[Markov Decision Process]] problems.
- ### Applications
	- Action selection and planning in autonomous agents.
	- Foundations of [[Reinforcement Learning]] reward optimisation.
	- Risk and policy analysis in [[Operations Research]] and economics.
	- Aligning agent objectives in [[AI Safety Research]].
- ### Relationships
	- requires:: [[Probability Theory]]
	- uses:: [[Bayesian Inference]]
	- bridgesTo:: [[Game Theory]]
	- bridgesTo:: [[Operations Research]]
	- enables:: [[Decision Making]]
	- enables:: [[Markov Decision Process]]
	- supports:: [[Reinforcement Learning]]
	- supports:: [[AI Safety Research]]
	- supports:: [[Risk Management]]
	- contrastsWith:: [[Game Theory]]
	- relatedTo:: [[Operations Research]]
	- relatedTo:: [[Bayesian Inference]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
