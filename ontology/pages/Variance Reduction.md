public:: true

# Variance Reduction
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:variance-reduction",
  "@type": "Page",
  "title": "Variance Reduction",
  "vc:slug": "variance-reduction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:variance-reduction",
  "@type": "Class",
  "label": "Variance Reduction",
  "definition": "Variance Reduction is a family of techniques that lower the statistical variance of Monte Carlo and stochastic estimators so that fewer samples are needed to reach a target accuracy. Methods such as importance sampling, control variates, antithetic variates, and stratification reshape how samples are drawn or combined without introducing bias. In machine learning, variance reduction stabilises gradient estimates in stochastic optimisation and accelerates convergence of simulation-based methods.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:monte-carlo-integration",
      "label": "Monte Carlo Integration"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:monte-carlo-integration",
        "label": "Monte Carlo Integration"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:importance-sampling",
        "label": "Importance Sampling"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:numerical-methods",
        "label": "Numerical Methods"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:importance-sampling",
        "label": "Importance Sampling"
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
  - Variance Reduction is a family of techniques that lower the statistical variance of Monte Carlo and stochastic estimators so that fewer samples are needed to reach a target accuracy. Methods such as importance sampling, control variates, antithetic variates, and stratification reshape how samples are drawn or combined without introducing bias. In machine learning, variance reduction stabilises gradient estimates in stochastic optimisation and accelerates convergence of simulation-based methods.
  - Related concepts: [[Monte Carlo Integration]] [[Importance Sampling]] [[Sampling]] [[Simulation]] [[Stochastic Gradient Descent]]
- ### Overview
  - Variance Reduction makes stochastic estimation efficient by attacking variance rather than bias. Because the error of a Monte Carlo estimator shrinks with the square root of sample count, halving variance is equivalent to doubling samples for free. Techniques range from reweighting draws via [[Importance Sampling]] to subtracting correlated [[Numerical Methods]] approximations as control variates, and they are increasingly applied to stabilise gradient estimators in [[Stochastic Gradient Descent]].
- ### Mechanisms
  - Importance sampling reweighting draws toward high-impact regions.
  - Control variates subtracting correlated known-mean quantities.
  - Antithetic variates inducing negative correlation between samples.
  - Stratification partitioning the domain to reduce within-stratum spread.
  - Application to gradient-estimator stabilisation in learning.
- ### Applications
  - Efficient [[Monte Carlo Integration]] of high-dimensional integrals.
  - Financial risk and pricing [[Simulation]].
  - Reinforcement-learning gradient-variance control.
  - Bayesian inference and rare-event estimation.
- ### Relationships
  - partOf:: [[Monte Carlo Integration]]
  - uses:: [[Importance Sampling]]
  - uses:: [[Sampling]]
  - implements:: [[Numerical Methods]]
  - enables:: [[Simulation]]
  - requires:: [[Sampling]]
  - supports:: [[Stochastic Gradient Descent]]
  - supports:: [[Machine Learning]]
  - bridgesTo:: [[Optimisation]]
  - relatedTo:: [[Numerical Methods]]
  - relatedTo:: [[Gradient Descent]]
  - relatedTo:: [[Importance Sampling]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
