public:: true

# Rejection Sampling
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:rejection-sampling",
  "@type": "Page",
  "title": "Rejection Sampling",
  "vc:slug": "rejection-sampling",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rejection-sampling",
  "@type": "Class",
  "label": "Rejection Sampling",
  "definition": "Rejection sampling is a Monte Carlo technique for drawing samples from a target probability distribution by sampling from a simpler proposal distribution and accepting or rejecting each draw according to a ratio test. It requires a proposal that bounds the target up to a constant and yields exact samples from the target when accepted. In machine learning it also names a practical method of generating candidate model outputs, scoring them and keeping only those that pass a quality or reward threshold.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sampling",
      "label": "Sampling"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:importance-sampling",
        "label": "Importance Sampling"
      },
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Normalizing Flow"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
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
  - [[Rejection Sampling]] is an [[Artificial Intelligence]] [[Sampling]] method that draws from a [[Probability Distribution]] via a proposal-and-accept test, contrasted with [[Importance Sampling]] and used in [[Bayesian Inference]].
- ### Overview
  - Classic rejection sampling generates a candidate from a tractable proposal distribution and accepts it with probability proportional to the target density divided by a scaled proposal density.
  - In modern generative AI, the same idea drives "best-of-n" generation: produce many candidate outputs, score them with a reward or verifier, and keep only the accepted ones.
- ### Mechanisms
  - Envelope condition: the proposal scaled by a constant must dominate the target everywhere.
  - Accept/reject step: a uniform draw decides whether each candidate is kept.
  - Efficiency: acceptance rate falls as proposal and target diverge, motivating tight envelopes.
- ### Applications
  - Exact simulation from distributions lacking direct sampling methods.
  - Rejection-sampling fine-tuning, filtering model generations by reward.
  - Bayesian inference and probabilistic programming primitives.
- ### Relationships
  - hasPart:: [[Probability Distribution]]
  - hasPart:: [[Sampling]]
  - contrastsWith:: [[Importance Sampling]]
  - contrastsWith:: [[Markov Chain Monte Carlo]]
  - implements:: [[Sampling]]
  - requires:: [[Probability Distribution]]
  - requires:: [[Probabilistic Model]]
  - uses:: [[Generative Model]]
  - enables:: [[Bayesian Inference]]
  - enables:: [[Inference]]
  - relatedTo:: [[Normalizing Flow]]
  - relatedTo:: [[Inference]]
  - supports:: [[Bayesian Inference]]
  - dependsOn:: [[Probability Distribution]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
