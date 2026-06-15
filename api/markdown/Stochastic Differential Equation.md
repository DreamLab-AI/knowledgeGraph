public:: true

# Stochastic Differential Equation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stochastic-differential-equation",
  "@type": "Page",
  "vc:slug": "stochastic-differential-equation",
  "title": "Stochastic Differential Equation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stochastic-differential-equation",
  "@type": "Class",
  "label": "Stochastic Differential Equation",
  "definition": "A stochastic differential equation (SDE) is a differential equation in which one or more terms incorporate a stochastic process, typically Brownian motion or white noise, making the solution itself a stochastic process. SDEs generalise ordinary differential equations by including a diffusion term driven by a Wiener process, and their solutions are interpreted via Ito or Stratonovich calculus. SDEs are foundational in financial mathematics, physics, biology, and machine learning — particularly in score-based generative modelling and diffusion models.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:differential-equations",
    "label": "Differential Equations"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:ito-calculus",
        "label": "Ito Calculus"
      },
      {
        "@id": "urn:ngm:class:wiener-process",
        "label": "Wiener Process"
      },
      {
        "@id": "urn:ngm:class:measure-theory",
        "label": "Measure Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:markov-chain-monte-carlo",
        "label": "Markov Chain Monte Carlo"
      },
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:diffusion-models",
        "label": "Diffusion Models"
      },
      {
        "@id": "urn:ngm:class:score-based-generative-model",
        "label": "Score-Based Generative Models"
      },
      {
        "@id": "urn:ngm:class:langevin-dynamics",
        "label": "Langevin Dynamics"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:drift-coefficient",
        "label": "Drift Coefficient"
      },
      {
        "@id": "urn:ngm:class:diffusion-coefficient",
        "label": "Diffusion Coefficient"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:stochastic-processes",
        "label": "Stochastic Processes"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:brownian-motion",
        "label": "Brownian Motion"
      },
      {
        "@id": "urn:ngm:class:fokker-planck-equation",
        "label": "Fokker-Planck Equation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:euler-maruyama-method",
        "label": "Euler-Maruyama Method"
      },
      {
        "@id": "urn:ngm:class:milstein-method",
        "label": "Milstein Method"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      },
      {
        "@id": "urn:ngm:class:stratonovich-calculus",
        "label": "Stratonovich Calculus"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ordinary-differential-equation",
        "label": "Ordinary Differential Equation"
      },
      {
        "@id": "urn:ngm:class:differential-equations",
        "label": "Partial Differential Equation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dynamical-systems",
        "label": "Dynamical Systems"
      },
      {
        "@id": "urn:ngm:class:markov-processes",
        "label": "Markov Processes"
      },
      {
        "@id": "urn:ngm:class:optimal-control",
        "label": "Optimal Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:black-scholes-model",
        "label": "Black-Scholes Model"
      },
      {
        "@id": "urn:ngm:class:neural-ordinary-differential-equation",
        "label": "Neural Ordinary Differential Equation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:sde",
      "label": "SDE"
    },
    {
      "@id": "urn:ngm:class:stochastic-ode",
      "label": "Stochastic ODE"
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
  - A [[Stochastic Differential Equation]] (SDE) extends classical [[Differential Equations|differential equations]] by incorporating stochastic perturbations — typically Brownian motion — so that the solution is a random process evolving over time under combined deterministic drift and random diffusion.

- ### Relationships
  - SDEs require [[Probability Theory]] and [[Ito Calculus]] as formal foundations. They underpin numerical methods including [[Markov Chain Monte Carlo]] and motivate continuous-time analogues of [[Stochastic Gradient Descent]]. SDEs are closely related to [[Dynamical Systems]] theory and depend on [[Numerical Methods]] for practical simulation via Euler-Maruyama and Milstein discretisation schemes.

- ### Content
  - The theory of SDEs emerged from the work of Kiyoshi Ito in the 1940s, who formalised stochastic integration to handle equations driven by Brownian motion. The canonical form dX = f(X,t)dt + g(X,t)dW captures the interplay between a deterministic drift f and a diffusion coefficient g multiplied by the increment dW of a Wiener process. Stratonovich's alternative calculus emerged contemporaneously and is preferred in physical modelling contexts due to its chain-rule compatibility with classical calculus.

  - Solution theory distinguishes strong solutions (pathwise, for a given Brownian motion realisation) from weak solutions (distributional, where only the law of the process is determined). The Fokker-Planck equation provides a deterministic PDE governing the evolution of probability densities corresponding to an SDE, bridging the stochastic and deterministic perspectives. Existence and uniqueness theorems require Lipschitz and linear-growth conditions on the coefficients f and g.

  - SDEs are foundational tools in financial mathematics (the Black-Scholes model is an SDE), physics (Langevin dynamics), biology (population genetics via Wright-Fisher SDEs), and control theory. In machine learning, the score-based and diffusion model paradigm explicitly frames generative modelling as the time-reversal of a forward noising SDE, enabling high-fidelity image, audio, and video generation by learning to reverse a diffusion process.

  - The period 2023-2025 has seen SDEs become central to AI research through score-based generative models (DDPM, consistency models, flow matching). Researchers are actively developing more efficient ODE/SDE solvers for faster sampling, and theoretical work connects SDEs to normalising flows and optimal transport. Neuronal SDE architectures also model uncertainty in deep learning systems, with applications in safe and interpretable AI.

