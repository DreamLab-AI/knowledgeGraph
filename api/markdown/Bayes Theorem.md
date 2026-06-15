public:: true

# Bayes Theorem

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bayes-theorem",
  "@type": "Page",
  "title": "Bayes Theorem",
  "vc:slug": "bayes-theorem",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bayes-theorem",
  "@type": "Class",
  "label": "Bayes Theorem",
  "definition": "Bayes' theorem is a fundamental result in probability theory that describes how to update the probability of a hypothesis in light of new evidence. It expresses the posterior probability as proportional to the product of the prior probability and the likelihood of the evidence, normalised by the total probability of the evidence. The theorem is the mathematical foundation of Bayesian inference and probabilistic reasoning in artificial intelligence.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probability-theory",
      "label": "Probability Theory"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:statistical-inference",
        "label": "Statistical Inference"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:statistical-inference",
        "label": "Statistical Inference"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "bridgesTo": [
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
  - Bayes' theorem updates a hypothesis given evidence within [[Probability Theory]].
  - It is the core mechanism of [[Bayesian Inference]] and [[Statistical Inference]].
  - It underpins probabilistic [[Reasoning]] using a [[Probabilistic Model]].
- ### Overview
  - Posterior is proportional to prior times likelihood, normalised by evidence.
  - Provides a principled rule for belief revision under uncertainty.
  - Generalises from single hypotheses to full Bayesian networks and models.
- ### Key aspects
  - Prior, likelihood, evidence, and posterior components.
  - Sequential updating as new data arrives.
  - Conjugate priors for tractable closed-form updates.
  - Foundation of naive Bayes classifiers and Bayesian networks.
- ### Applications
  - Spam filtering and probabilistic classification.
  - Medical diagnosis and risk assessment.
  - Sensor fusion and robotic localisation.
  - Bayesian machine learning and uncertainty quantification.
- ### Relationships
  - partOf:: [[Probability Theory]]
  - implements:: [[Bayesian Inference]]
  - enables:: [[Bayesian Inference]]
  - enables:: [[Statistical Inference]]
  - dependsOn:: [[Probability Theory]]
  - dependsOn:: [[Probabilistic Model]]
  - supports:: [[Inference]]
  - supports:: [[Reasoning]]
  - uses:: [[Probabilistic Model]]
  - relatedTo:: [[Statistical Inference]]
  - relatedTo:: [[Inference]]
  - relatedTo:: [[Artificial Intelligence]]
  - bridgesTo:: [[Machine Learning]]
- ### Provenance
  - updated:: 2026-06-15
