public:: true

# Covariance Matrix

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:covariance-matrix", "@type": "Page", "title": "Covariance Matrix", "vc:slug": "covariance-matrix", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:covariance-matrix",
  "@type": "Class",
  "label": "Covariance Matrix",
  "definition": "A covariance matrix is a square symmetric matrix whose entries are the pairwise covariances between the components of a random vector, with variances on its diagonal. It summarises the second-order statistics and linear dependence structure of multivariate data. Positive semi-definite by construction, it is central to multivariate statistics, dimensionality reduction and probabilistic estimation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:linear-algebra",
      "label": "Linear Algebra"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:gaussian-distribution",
        "label": "Gaussian Distribution"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:principal-component-analysis",
        "label": "Principal Component Analysis"
      },
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      },
      {
        "@id": "urn:ngm:class:anomaly-detection",
        "label": "Anomaly Detection"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gaussian-distribution",
        "label": "Gaussian Distribution"
      },
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
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
  - A symmetric matrix of pairwise covariances summarising the spread of a multivariate [[Probability Distribution]].
  - Built with [[Linear Algebra]] and central to [[Bayesian Inference]].
  - Diagonal holds variances; off-diagonal entries encode linear dependence.
- ### Overview
  - Positive semi-definite, enabling eigen-decomposition that reveals principal directions of variance.
  - Defines the shape of a [[Gaussian Distribution]] together with its mean vector.
  - Estimated from samples and regularised when data are scarce relative to dimension.
- ### Key aspects
  - Eigenvectors give principal axes used by [[Principal Component Analysis]].
  - Conditioning and invertibility affect numerical stability of estimators.
  - Shrinkage and structured estimators improve robustness in high dimensions.
  - Updated recursively inside state estimators such as the [[Kalman Filter]].
- ### Applications
  - Dimensionality reduction and whitening of feature spaces.
  - Uncertainty propagation in state estimation and tracking.
  - Anomaly detection via Mahalanobis distance.
- ### Relationships
  - subClassOf:: [[Linear Algebra]]
  - partOf:: [[Probability Distribution]]
  - requires:: [[Linear Algebra]]
  - dependsOn:: [[Gaussian Distribution]]
  - enables:: [[Principal Component Analysis]]
  - enables:: [[Dimensionality Reduction]]
  - uses:: [[Feature Extraction]]
  - supports:: [[Kalman Filter]]
  - supports:: [[Anomaly Detection]]
  - supports:: [[Bayesian Inference]]
  - relatedTo:: [[Gaussian Distribution]]
  - relatedTo:: [[Probability Distribution]]
  - relatedTo:: [[Feature Extraction]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
