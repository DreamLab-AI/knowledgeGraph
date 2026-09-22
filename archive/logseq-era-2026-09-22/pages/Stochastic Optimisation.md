public:: true

# Stochastic Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:da28744bb278b159f29991375d8ac0684744db64ab22782bc76ea88b1f4ecafd",
  "@type": "Page",
  "vc:slug": "stochastic-optimisation",
  "title": "Stochastic Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mathematical-optimisation",
      "vc:label": "Mathematical Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:stochastic-gradient-descent",
      "vc:label": "Stochastic Gradient Descent"
    },
    {
      "@id": "urn:visionflow:linked:convex-optimisation",
      "vc:label": "Convex Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:random-search",
      "vc:label": "Random Search"
    },
    {
      "@id": "urn:visionflow:linked:monte-carlo-methods",
      "vc:label": "Monte Carlo Methods"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stochastic-optimisation",
  "@type": "Class",
  "label": "Stochastic Optimisation",
  "definition": "The branch of mathematical optimisation concerned with minimising or maximising objectives that involve randomness — either because the objective and constraints are expectations over uncertain data, or because the algorithm itself deliberately injects randomness, as in stochastic gradient methods, simulated annealing, and evolutionary search. It provides the convergence theory and algorithmic machinery, from Robbins-Monro stochastic approximation to Adam, that makes training large-scale machine learning models on sampled mini-batches tractable.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:mathematical-optimisation",
    "label": "Mathematical Optimisation"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Methods"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      },
      {
        "@id": "urn:ngm:class:random-search",
        "label": "Random Search"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The branch of mathematical optimisation concerned with minimising or maximising objectives that involve randomness — either because the objective and constraints are expectations over uncertain data, or because the algorithm itself deliberately injects randomness, as in stochastic gradient methods, simulated annealing, and evolutionary search. It provides the convergence theory and algorithmic machinery, from Robbins-Monro stochastic approximation to Adam, that makes training large-scale machine learning models on sampled mini-batches tractable."

- ### Semantic Classification
  - owl-class:: machine-learning:StochasticOptimisation
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Mathematical Optimisation]]
  - has-part:: [[Stochastic Gradient Descent]]
  - uses:: [[Monte Carlo Methods]]
  - related-to:: [[Convex Optimisation]]

- ### Content

  ## Definition

  **Stochastic optimisation** covers optimisation problems and algorithms in which randomness is intrinsic. The randomness may live in the *problem*: the objective is an expectation E[f(x, ξ)] over a random variable ξ — uncertain demand in logistics, noisy sensor readings, or the data distribution in machine learning — that can only be accessed through samples. Or it may live in the *algorithm*: deliberately randomised methods such as [[Random Search]], simulated annealing and evolution strategies use noise to escape local minima and to optimise objectives whose gradients are unavailable.

  The field's foundational result is Robbins and Monro's stochastic approximation theorem (1951): iterating x ← x − η·g(x, ξ) with unbiased noisy gradient estimates g converges to a stationary point provided the step sizes decay appropriately (Ση = ∞, Ση² < ∞). [[Stochastic Gradient Descent]] is precisely this scheme with mini-batch gradient estimates, and its modern descendants — momentum methods, AdaGrad, RMSProp, Adam — inherit the same analysis. For convex expectations the theory connects directly to [[Convex Optimisation]], giving O(1/√T) rates for general convex and O(1/T) for strongly convex objectives; for the non-convex losses of deep learning, guarantees weaken to convergence towards stationary points, yet the methods work remarkably well in practice.

  Gradient estimation is a discipline in itself. Monte Carlo estimators trade bias for variance: the score-function (REINFORCE) estimator is general but high-variance; the reparameterisation trick rewrites sampling as a deterministic transform of parameter-free noise, yielding the low-variance pathwise gradients that made variational autoencoders trainable; control variates, common random numbers and antithetic sampling reduce variance further. Beyond gradients, sample average approximation and scenario methods convert stochastic programmes into deterministic ones, which is the standard approach in operational research applications such as portfolio selection and supply-chain planning under uncertainty.

  ## Technical Details

  - **Problem classes**: expectation minimisation (machine learning risk), two-stage and multi-stage stochastic programming with recourse, chance-constrained optimisation, and simulation optimisation where f is only available through a stochastic simulator.
  - **Algorithm families**: stochastic approximation (SGD, Adam, SVRG and other variance-reduced methods), zeroth-order and bandit methods estimating gradients from function values, randomised metaheuristics (simulated annealing, CMA-ES, genetic algorithms), and Bayesian optimisation for expensive black-box objectives.
  - **Variance reduction**: mini-batching, importance sampling, control variates, reparameterised gradients, and momentum as an implicit averaging mechanism; variance, not bias, usually dictates convergence speed.
  - **Key trade-off**: noise slows asymptotic convergence but aids exploration — the same perturbations that prevent tight convergence help iterates escape saddle points and poor local minima in non-convex landscapes.
  - **Practical dominance**: essentially all deep learning training is stochastic optimisation; step-size schedules, batch-size scaling rules and adaptive optimisers are the field's theory made operational in every ML framework.

  ## Current Landscape

  - **Matrix-structured optimisers are challenging Adam's dominance (2024–2025)**: Muon (Jordan et al., 2024) — a second-order method that orthogonalises the momentum matrix via a Newton–Schulz iteration — has moved from a nanoGPT curiosity to a serious AdamW replacement, with a February 2025 study ("Muon is Scalable for LLM Training") reporting ~2× compute efficiency at compute-optimal scale once weight decay and per-parameter update-scale adjustments are added.
  - **Second-order preconditioning back in favour**: Shampoo won the 2025 AlgoPerf optimiser benchmark, outperforming Adam by roughly 28%, and its generalisation SOAP shows strong language-modelling results; Muon without momentum is known to be equivalent to preconditioner-free Shampoo.
  - **Scaling rules make the gains real**: a NeurIPS 2025 study found that with correct width/depth learning-rate and weight-decay scaling (weight decay ∝ 1/width), Muon, SOAP, and Shampoo deliver a consistent ~1.4× speedup over AdamW on Llama-architecture models from 190M to 1.4B parameters — a speedup that vanishes under incorrect scaling.
  - **AdamW remains the default baseline**: despite these advances, AdamW is still the incumbent optimiser for most large-model training, and the new methods are positioned as drop-in successors rather than wholesale replacements as of 2025–2026.
  - **Enduring core theory**: Robbins–Monro stochastic approximation, variance-reduction (SVRG, control variates, reparameterised gradients), and O(1/√T)/O(1/T) convex rates continue to underpin the analysis of every one of these optimisers.

  **Sources**:
  - https://arxiv.org/abs/2502.16982
  - https://arxiv.org/html/2505.02222v1
  - https://neurips.cc/virtual/2025/poster/119109
