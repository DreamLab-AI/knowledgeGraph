public:: true

# Gibbs Sampling

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gibbs-sampling",
  "@type": "Page",
  "title": "Gibbs Sampling",
  "vc:slug": "gibbs-sampling",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gibbs-sampling",
  "@type": "Class",
  "label": "Gibbs Sampling",
  "definition": "Gibbs sampling is a Markov chain Monte Carlo algorithm that draws samples from a multivariate distribution by iteratively sampling each variable from its full conditional distribution given the current values of all others. It is a special case of Metropolis-Hastings in which every proposal is accepted, and it requires the conditionals to be tractable. Gibbs sampling is widely used for posterior inference in hierarchical and graphical models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:markov-chain-monte-carlo",
      "label": "Markov Chain Monte Carlo"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:graphical-model",
        "label": "Graphical Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:posterior-distribution",
        "label": "Posterior Distribution"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:convergence",
        "label": "Convergence"
      },
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
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
  - Gibbs sampling is a Markov chain Monte Carlo algorithm that draws samples from a multivariate distribution by iteratively sampling each variable from its full conditional distribution given the current values of all others. It is a special case of Metropolis-Hastings in which every proposal is accepted, and it requires the conditionals to be tractable. Gibbs sampling is widely used for posterior inference in hierarchical and graphical models.
  - [[Markov Chain Monte Carlo]] [[Markov Chain]] [[Graphical Model]] [[Bayesian Inference]]
- ### Overview
  - Gibbs sampling decomposes a hard joint sampling problem into a sequence of easier conditional samples.
  - It is especially natural for graphical and hierarchical models where conditional distributions have closed forms.
  - Strong correlations between variables can slow mixing, motivating blocked or collapsed Gibbs variants.
- ### Mechanisms
  - Each iteration updates one variable (or block) by drawing from its full conditional distribution.
  - Because every conditional draw is exact, the implicit Metropolis-Hastings acceptance probability is one.
  - The sequence of states forms a Markov chain whose stationary distribution is the target joint distribution.
  - Burn-in is discarded and thinning may reduce autocorrelation between retained samples.
- ### Applications
  - Posterior inference in Bayesian hierarchical and mixture models.
  - Topic modelling, such as collapsed Gibbs sampling for latent Dirichlet allocation.
  - Inference in Markov random fields and other undirected graphical models.
- ### Relationships
  - partOf:: [[Markov Chain Monte Carlo]]
  - implements:: [[Markov Chain Monte Carlo]]
  - uses:: [[Markov Chain]]
  - uses:: [[Probability Distribution]]
  - requires:: [[Probabilistic Model]]
  - requires:: [[Graphical Model]]
  - enables:: [[Bayesian Inference]]
  - enables:: [[Sampling]]
  - supports:: [[Posterior Distribution]]
  - supports:: [[Inference]]
  - contrastsWith:: [[Variational Inference]]
  - relatedTo:: [[Convergence]]
  - relatedTo:: [[Stochastic Process]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
