public:: true

# Markov Chain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7cac2662e4d8b98e15be1be604992fc663a547671773127930421aef685cd467",
  "@type": "Page",
  "vc:slug": "markov-chain",
  "title": "Markov Chain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:markov-chain-monte-carlo",
      "vc:label": "Markov Chain Monte Carlo"
    },
    {
      "@id": "urn:visionflow:linked:markov-decision-process",
      "vc:label": "Markov Decision Process"
    },
    {
      "@id": "urn:visionflow:linked:dynamical-systems-theory",
      "vc:label": "Dynamical Systems Theory"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-process",
      "vc:label": "Stochastic Process"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Markov Chain"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:markov-chain",
  "@type": "Class",
  "label": "Markov Chain",
  "definition": "A stochastic process in which the probability of each future state depends only on the current state and not on the sequence of preceding states (the Markov property), enabling tractable analysis of steady-state distributions, mixing times, and long-run behaviour.",
  "domain": "machine-learning",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stochastic-process",
      "label": "Stochastic Process"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:transition-matrix",
        "label": "Transition Matrix"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      },
      {
        "@id": "urn:ngm:class:markov-decision-process",
        "label": "Markov Decision Process"
      },
      {
        "@id": "urn:ngm:class:hidden-markov-model",
        "label": "Hidden Markov Model"
      },
      {
        "@id": "urn:ngm:class:stationary-distribution",
        "label": "Stationary Distribution"
      },
      {
        "@id": "urn:ngm:class:pagerank",
        "label": "PageRank"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:state-space",
        "label": "State Space"
      },
      {
        "@id": "urn:ngm:class:transition-probability",
        "label": "Transition Probability"
      },
      {
        "@id": "urn:ngm:class:absorbing-state",
        "label": "Absorbing State"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:random-walk",
        "label": "Random Walk"
      },
      {
        "@id": "urn:ngm:class:ergodicity",
        "label": "Ergodicity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:memoryless-property",
        "label": "Memoryless Property"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:non-markovian-process",
        "label": "Non-Markovian Process"
      },
      {
        "@id": "urn:ngm:class:deterministic-automaton",
        "label": "Deterministic Automaton"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dynamical-systems-theory",
        "label": "Dynamical Systems Theory"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:discrete-time-markov-chain",
      "label": "Discrete-Time Markov Chain"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:markov-chain:cdd2c67bed6a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7cac2662e4d8b98e15be1be604992fc663a547671773127930421aef685cd467"
  },
  "vc:resolutions": [
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Markov Chain Monte Carlo]]",
      "resolved": "urn:visionflow:linked:markov-chain-monte-carlo",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Markov Decision Process]]",
      "resolved": "urn:visionflow:linked:markov-decision-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dynamical Systems Theory]]",
      "resolved": "urn:visionflow:linked:dynamical-systems-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Stochastic Process]]",
      "resolved": "urn:visionflow:linked:stochastic-process",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A stochastic process in which the probability of each future state depends only on the current state and not on the sequence of preceding states.

- ### Semantic Classification
  - owl-class:: mathematics:MarkovChain
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Stochastic Process]]
  - bridges-to:: [[Dynamical Systems Theory]]
  - requires:: [[Probability Theory]]
  - enables:: [[Markov Chain Monte Carlo]], [[Markov Decision Process]]

- ### Content
  - A Markov chain models a system that transitions between a set of states according to fixed probabilities, satisfying the memoryless or Markov property. Long-run behaviour is captured by stationary distributions, which describe the proportion of time spent in each state.
  - Markov chains underpin sampling algorithms, the analysis of random walks, and sequential decision-making frameworks such as Markov decision processes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
