public:: true

# Detailed Balance

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:detailed-balance",
  "@type": "Page",
  "title": "Detailed Balance",
  "vc:slug": "detailed-balance",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:detailed-balance",
  "@type": "Class",
  "label": "Detailed Balance",
  "definition": "Detailed balance is a condition on a Markov chain stating that, in equilibrium, the probability flux between any two states is equal in both directions. When a transition kernel satisfies detailed balance with respect to a target distribution, that distribution is a stationary distribution of the chain. It is the central design principle behind most Markov chain Monte Carlo samplers, including Metropolis-Hastings.",
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
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      },
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:convergence",
        "label": "Convergence"
      },
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:posterior-distribution",
        "label": "Posterior Distribution"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
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
  - Detailed balance is a condition on a Markov chain stating that, in equilibrium, the probability flux between any two states is equal in both directions. When a transition kernel satisfies detailed balance with respect to a target distribution, that distribution is a stationary distribution of the chain. It is the central design principle behind most Markov chain Monte Carlo samplers, including Metropolis-Hastings.
  - [[Markov Chain]] [[Markov Chain Monte Carlo]] [[Probability Distribution]] [[Sampling]]
- ### Overview
  - Detailed balance is a sufficient (though not strictly necessary) condition guaranteeing that a target distribution is invariant under a Markov transition kernel.
  - It reduces the problem of designing a correct sampler to constructing transitions that satisfy a simple reversibility equation.
  - Algorithms that deliberately violate detailed balance can sometimes converge faster but require more careful correctness arguments.
- ### Mechanisms
  - The reversibility equation requires the equilibrium flux from state i to j to equal the flux from j to i.
  - Acceptance-rejection steps, as in Metropolis-Hastings, are constructed precisely to enforce this balance.
  - Satisfying detailed balance with respect to a target makes that target the stationary distribution.
  - Combined with ergodicity, it ensures samples converge to the target distribution.
- ### Applications
  - Constructing correct Markov chain Monte Carlo samplers for Bayesian inference.
  - Validating that a proposed transition kernel preserves a desired posterior.
  - Underpinning energy-based and statistical-physics simulations.
- ### Relationships
  - partOf:: [[Markov Chain Monte Carlo]]
  - implements:: [[Markov Chain]]
  - requires:: [[Markov Chain]]
  - requires:: [[Probability Distribution]]
  - enables:: [[Markov Chain Monte Carlo]]
  - enables:: [[Sampling]]
  - supports:: [[Bayesian Inference]]
  - uses:: [[Stochastic Process]]
  - relatedTo:: [[Convergence]]
  - relatedTo:: [[Probabilistic Model]]
  - relatedTo:: [[Posterior Distribution]]
  - contrastsWith:: [[Stochastic Process]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
