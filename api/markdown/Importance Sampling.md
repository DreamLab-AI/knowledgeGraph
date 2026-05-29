public:: true

# Importance Sampling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:importance-sampling",
  "@type": "Page",
  "vc:slug": "importance-sampling",
  "title": "Importance Sampling",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:importance-sampling",
  "@type": "Class",
  "label": "Importance Sampling",
  "definition": "Importance sampling is a variance-reduction technique in Monte Carlo estimation that draws samples from a proposal distribution that concentrates probability mass in regions contributing most to the quantity being estimated, then corrects for the distributional mismatch using importance weights. It is foundational to Bayesian inference, reinforcement learning, path-tracing renderers, and off-policy evaluation. Importance sampling allows tractable estimation of expectations under distributions that are difficult or impossible to sample from directly. Poor choice of proposal distribution can however lead to high-variance or even infinite-variance estimators, necessitating careful design.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:monte-carlo-methods", "label": "Monte Carlo Methods"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sampling", "label": "Sampling"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:variational-inference", "label": "Variational Inference"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:monte-carlo-tree-search", "label": "Monte Carlo Tree Search"},
      {"@id": "urn:ngm:class:optimization-algorithm", "label": "Optimization Algorithm"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Importance Sampling]] is a [[Monte Carlo Methods]] variance-reduction technique that draws from a surrogate proposal distribution and reweights samples to estimate expectations under a target [[Probabilistic Model]], enabling [[Bayesian Inference]] and off-policy [[Reinforcement Learning]] evaluation with reduced sample complexity.
- ### Relationships
  - [[Importance Sampling]] extends [[Monte Carlo Methods]] and relies on [[Sampling]] procedures to draw from a proposal. It integrates with [[Variational Inference]] as a building block for importance-weighted autoencoders and enables [[Bayesian Inference]] by allowing evaluation of posteriors that are intractable to sample directly. In [[Reinforcement Learning]] it underpins off-policy policy gradient estimators and experience replay weighting. Related concepts include [[Monte Carlo Tree Search]], [[Optimization Algorithm]] design, [[State Estimation]] for robotics filters, and [[Gradient Descent]] variance reduction through control variates.
- ### Content
  - Importance sampling addresses a fundamental challenge in probabilistic computation: how to estimate the expectation of a function under a distribution p(x) when sampling directly from p is expensive or infeasible. The technique samples instead from a proposal q(x) and multiplies each sample's contribution by the importance weight w(x) = p(x)/q(x), yielding an unbiased estimator of the target expectation so long as q assigns non-zero probability wherever p is non-zero.

  - In rendering, importance sampling directs light-path samples towards high-radiance regions—bright light sources, specular lobes—dramatically reducing per-pixel noise compared with uniform hemisphere sampling. Multiple importance sampling (MIS) combines several proposal strategies using balance heuristics to minimise variance further. These techniques are integral to production path tracers used in film and game engine global illumination.

  - In machine learning, importance sampling appears in off-policy reinforcement learning (estimating the value of a policy from data collected under a different behaviour policy), in variational inference (the importance-weighted autoencoder tightens the evidence lower bound by averaging multiple importance-weighted samples), and in curriculum learning (prioritised experience replay re-weights stored transitions by temporal-difference error magnitude).

  - Practical challenges include weight degeneracy—when the proposal poorly matches the target, a handful of samples receive enormous weights whilst the rest contribute negligibly, collapsing effective sample size. Capping or normalising weights (self-normalised importance sampling) reduces variance at the cost of bias. Choosing good proposals remains an active research area, with learned proposal networks offering adaptive solutions.
