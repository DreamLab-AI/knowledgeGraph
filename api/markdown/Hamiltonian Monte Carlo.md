public:: true

# Hamiltonian Monte Carlo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:hamiltonian-monte-carlo",
  "@type": "Page",
  "vc:slug": "hamiltonian-monte-carlo",
  "title": "Hamiltonian Monte Carlo",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hamiltonian-monte-carlo",
  "@type": "Class",
  "label": "Hamiltonian Monte Carlo",
  "definition": "Hamiltonian Monte Carlo (HMC) is a Markov chain Monte Carlo sampling algorithm that uses Hamiltonian dynamics to generate distant, low-autocorrelation proposals in high-dimensional parameter spaces. By treating the negative log-posterior as a potential energy and augmenting with auxiliary momentum variables, HMC can traverse the posterior landscape far more efficiently than random-walk Metropolis methods.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bayesian-inference",
      "label": "Bayesian Inference"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      },
      {
        "@id": "urn:ngm:class:probabilistic-programming",
        "label": "Probabilistic Programming"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:metropolis-hastings",
        "label": "Metropolis-Hastings"
      },
      {
        "@id": "urn:ngm:class:no-u-turn-sampler",
        "label": "No-U-Turn Sampler"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:automatic-differentiation",
        "label": "Automatic Differentiation"
      },
      {
        "@id": "urn:ngm:class:gradient-computation",
        "label": "Gradient Computation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gaussian-distribution",
        "label": "Gaussian Distribution"
      },
      {
        "@id": "urn:ngm:class:hamiltonian-dynamics",
        "label": "Hamiltonian Dynamics"
      },
      {
        "@id": "urn:ngm:class:phase-space",
        "label": "Phase Space"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bayesian-optimisation",
        "label": "Bayesian Optimisation"
      },
      {
        "@id": "urn:ngm:class:posterior-inference",
        "label": "Posterior Inference"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:detailed-balance",
        "label": "Detailed Balance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      },
      {
        "@id": "urn:ngm:class:gibbs-sampling",
        "label": "Gibbs Sampling"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:molecular-dynamics",
        "label": "Molecular Dynamics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gaussian-process",
        "label": "Gaussian Process"
      },
      {
        "@id": "urn:ngm:class:bayesian-deep-learning",
        "label": "Bayesian Deep Learning"
      },
      {
        "@id": "urn:ngm:class:inference-algorithm",
        "label": "Inference Algorithm"
      },
      {
        "@id": "urn:ngm:class:normalising-flow",
        "label": "Normalising Flow"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:hybrid-monte-carlo",
      "label": "Hybrid Monte Carlo"
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
  - [[Hamiltonian Monte Carlo]] (HMC) is a gradient-based Markov chain Monte Carlo method that simulates Hamiltonian dynamics over an augmented position-momentum phase space, using the gradient of the log-posterior to guide proposals, achieving dramatically lower autocorrelation per sample than naive random-walk samplers.

- ### Relationships
  - HMC is a core engine for [[Bayesian Inference]] and is naturally paired with [[Gaussian Process]] models and [[Bayesian Deep Learning]]; it produces the posterior samples required by [[Bayesian Optimisation]], relies on [[Gaussian Distribution]] momentum draws at each leapfrog step, and belongs to the broader family of [[Inference Algorithm]] techniques.

- ### Content
  - Hamiltonian Monte Carlo was introduced to the statistics community by Radford Neal in his 1994 technical report and popularised through his chapter in the 2011 "Handbook of Markov Chain Monte Carlo". The method originates in Hybrid Monte Carlo, a technique proposed by Duane et al. in 1987 for lattice quantum chromodynamics simulations in physics. The key insight was that auxiliary momentum variables drawn from a Gaussian distribution, combined with leapfrog integration of Hamilton's equations of motion, generate proposals that move far along the posterior surface while maintaining detailed balance and thus ergodicity.
  - The algorithm augments the parameter vector θ with a momentum vector p drawn fresh at each iteration from a Gaussian. It then simulates L leapfrog steps of size ε, alternating gradient updates on p and position updates on θ. After L steps, the proposed (θ*, p*) pair is accepted or rejected with a Metropolis correction that accounts for numerical integration error. The No-U-Turn Sampler (NUTS), developed by Hoffman and Gelman in 2011, eliminates the need to hand-tune L by dynamically terminating the trajectory when it begins to double back on itself, making HMC practical for non-expert users.
  - HMC matters because it scales gracefully to hundreds or thousands of parameters — a regime where random-walk Metropolis requires exponentially more samples. This efficiency has made it the backbone of probabilistic programming systems such as Stan, PyMC, and NumPyro. In scientific modelling, HMC enables posterior inference for complex hierarchical models in epidemiology, astrophysics, econometrics, and molecular dynamics, where correctly quantified uncertainty is as important as a point estimate.
  - In 2024–2025, HMC development has focused on GPU-accelerated leapfrog integrators (enabling batched parallel chains on modern hardware), Riemannian HMC variants that adapt the mass matrix to local geometry for highly curved posteriors, and integration with automatic differentiation frameworks such as JAX and PyTorch. Normalising flows are being explored as learnable mass-matrix preconditioners. Differentiable probabilistic programming, exemplified by systems like Pyro and Gen, increasingly positions HMC as the gold-standard reference sampler against which variational approximations are validated.

