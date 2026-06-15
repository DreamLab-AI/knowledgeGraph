public:: true

# Bradley Terry Model

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bradley-terry-model",
  "@type": "Page",
  "title": "Bradley Terry Model",
  "vc:slug": "bradley-terry-model",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bradley-terry-model",
  "@type": "Class",
  "label": "Bradley Terry Model",
  "definition": "The Bradley-Terry model is a probabilistic model for paired comparisons that estimates a latent strength or quality score for each item and predicts the probability that one item beats another via the logistic of their score difference. Fitted by maximum-likelihood from observed comparison outcomes, it produces a global ranking from local pairwise data. In machine learning it underpins preference modelling and reward learning from human comparisons.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
      },
      {
        "@id": "urn:ngm:class:pairwise-comparison",
        "label": "Pairwise Comparison"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:preference-learning",
        "label": "Preference Learning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:pairwise-comparison",
        "label": "Pairwise Comparison"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:reward-model",
        "label": "Reward Model"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:direct-preference-optimisation",
        "label": "Direct Preference Optimisation"
      },
      {
        "@id": "urn:ngm:class:reward-model",
        "label": "Reward Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:statistical-model",
        "label": "Statistical Model"
      },
      {
        "@id": "urn:ngm:class:preference-learning",
        "label": "Preference Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:rlhf",
        "label": "RLHF"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:maximum-likelihood-estimation",
        "label": "Maximum Likelihood Estimation"
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
  - Bradley Terry Model is a key concept in the machine learning domain.
  - Related foundational concepts: [[Machine Learning]] [[Preference Learning]] [[Pairwise Comparison]] [[Reward Model]] [[Maximum Likelihood Estimation]].
  - The Bradley-Terry model is a probabilistic model for paired comparisons that estimates a latent strength or quality score for each item and predicts the probability that one item beats another via the logistic of their score difference. Fitted by maximum-likelihood from observed comparison outcomes, it produces a global ranking from local pairwise data. In machine learning it underpins preference modelling and reward learning from human comparisons.
- ### Overview
  - Introduced for ranking from paired data, the Bradley-Terry model assigns each item a real-valued score and models the win probability as a logistic function of score differences. Its modern relevance lies in aligning language models: reward models trained on human pairwise preferences are commonly Bradley-Terry, and methods such as DPO derive directly from this formulation.
- ### Mechanisms
  - Latent per-item strength parameters.
  - Logistic win-probability from score differences.
  - Maximum-likelihood estimation from comparison data.
  - Global ranking inferred from local pairwise judgements.
  - Extensions for ties, covariates and ratings.
- ### Applications
  - Reward modelling from human pairwise preferences.
  - Direct preference optimisation for model alignment.
  - Sports and competitor ranking.
  - Aggregating crowd preference judgements.
- ### Relationships
  - subClassOf:: [[Machine Learning]]
  - uses:: [[Maximum Likelihood Estimation]]
  - uses:: [[Pairwise Comparison]]
  - implements:: [[Preference Learning]]
  - hasPart:: [[Pairwise Comparison]]
  - supports:: [[Reward Model]]
  - supports:: [[Reinforcement Learning from Human Feedback]]
  - enables:: [[Direct Preference Optimisation]]
  - enables:: [[Reward Model]]
  - relatedTo:: [[Probabilistic Model]]
  - relatedTo:: [[Statistical Model]]
  - relatedTo:: [[Preference Learning]]
  - bridgesTo:: [[RLHF]]
  - dependsOn:: [[Maximum Likelihood Estimation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
