public:: true

# Central Limit Theorem

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:central-limit-theorem",
  "@type": "Page",
  "title": "Central Limit Theorem",
  "vc:slug": "central-limit-theorem",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:central-limit-theorem",
  "@type": "Class",
  "label": "Central Limit Theorem",
  "definition": "The Central Limit Theorem states that, under broad conditions, the distribution of the sum or mean of a large number of independent, identically distributed random variables approaches a normal distribution regardless of the underlying distribution's shape. It explains the ubiquity of the Gaussian distribution and provides the theoretical basis for many inferential procedures, including confidence intervals and significance tests. It is foundational to statistics, machine learning, and Monte Carlo estimation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probability-theory",
      "label": "Probability Theory"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gaussian-distribution",
        "label": "Gaussian Distribution"
      },
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:statistical-testing",
        "label": "Statistical Testing"
      },
      {
        "@id": "urn:ngm:class:statistical-analysis",
        "label": "Statistical Analysis"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:monte-carlo-simulation",
        "label": "Monte Carlo Simulation"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-integration",
        "label": "Monte Carlo Integration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-analysis",
        "label": "Data Analysis"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - The [[Central Limit Theorem]] states that the mean or sum of many independent, identically distributed random variables tends toward a normal distribution as the sample grows.
  - It holds regardless of the underlying distribution's shape, given finite variance, and is a cornerstone of [[Probability Theory]].
  - It explains the prevalence of the [[Gaussian Distribution]] and grounds much of statistical [[Inference]].
- ### Overview
  - As sample size increases, the sampling distribution of the mean concentrates around the population mean and becomes approximately Gaussian.
  - The approximation improves with larger samples and is remarkably robust to the form of the source distribution.
  - This convergence justifies using normal-based confidence intervals and tests even when raw data are non-normal.
  - The theorem also underwrites the accuracy of averaging-based estimators in simulation and learning.
- ### Key aspects
  - **Independence**: contributing variables must be (approximately) independent.
  - **Finite variance**: the underlying distribution must have a finite second moment.
  - **Convergence to normality**: the standardised mean converges in distribution to the standard normal.
  - **Sample-size effect**: larger samples yield closer Gaussian approximation.
- ### Applications
  - Constructing confidence intervals and hypothesis tests in [[Statistical Analysis]].
  - Justifying Gaussian noise assumptions in machine learning models.
  - Estimating error of Monte Carlo estimators in [[Monte Carlo Integration]].
  - Aggregating measurements where errors average out.
- ### Relationships
  - dependsOn:: [[Probability Theory]]
  - dependsOn:: [[Sampling]]
  - uses:: [[Gaussian Distribution]]
  - uses:: [[Statistics]]
  - hasPart:: [[Inference]]
  - enables:: [[Statistical Testing]]
  - enables:: [[Statistical Analysis]]
  - enables:: [[Bayesian Inference]]
  - supports:: [[Monte Carlo Simulation]]
  - supports:: [[Monte Carlo Integration]]
  - relatedTo:: [[Data Analysis]]
  - relatedTo:: [[Probability Theory]]
  - relatedTo:: [[Uncertainty Quantification]]
  - relatedTo:: [[Machine Learning]]
- ### Provenance
  - updated:: 2026-06-15
