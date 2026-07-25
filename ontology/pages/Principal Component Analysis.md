public:: true

# Principal Component Analysis

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:principal-component-analysis",
  "@type": "Page",
  "title": "Principal Component Analysis",
  "vc:slug": "principal-component-analysis",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:principal-component-analysis",
  "@type": "Class",
  "label": "Principal Component Analysis",
  "definition": "Principal Component Analysis (PCA) is an unsupervised linear technique that transforms correlated variables into a smaller set of uncorrelated components ordered by the variance they capture. The components are the eigenvectors of the data's covariance matrix, and projecting onto the leading components yields a lower-dimensional representation that preserves as much variance as possible. PCA is widely used for dimensionality reduction, noise reduction, visualisation, and feature decorrelation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dimensionality-reduction",
      "label": "Dimensionality Reduction"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      },
      {
        "@id": "urn:ngm:class:data-visualisation",
        "label": "Data Visualisation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
      },
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:data-processing",
        "label": "Data Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Principal Component Analysis (PCA) is an unsupervised linear technique that transforms correlated variables into a smaller set of uncorrelated components ordered by the variance they capture. The components are the eigenvectors of the data's covariance matrix, and projecting onto the leading components yields a lower-dimensional representation that preserves as much variance as possible. PCA is widely used for dimensionality reduction, noise reduction, visualisation, and feature decorrelation.
  - Related concepts: [[Dimensionality Reduction]] [[Linear Algebra]] [[Unsupervised Learning]] [[Data Visualisation]]
- ### Overview
  - PCA finds orthogonal directions of maximal variance in the data and re-expresses observations along those directions.
  - It is computed via the eigendecomposition of the covariance matrix or, more numerically stably, the singular value decomposition of the centred data matrix.
  - Retaining only the leading components compresses the data while discarding directions that contribute little variance, which often correspond to noise.
  - Because PCA is linear and variance-based, it requires feature standardisation when variables differ in scale.
- ### Mechanisms
  - Centre and optionally standardise features before computing the covariance structure.
  - Eigenvectors of the covariance matrix define the principal axes; eigenvalues quantify captured variance.
  - The proportion of explained variance guides how many components to retain.
  - Projection onto retained components yields decorrelated, lower-dimensional features.
  - Relies on [[Linear Algebra]] operations such as eigendecomposition and singular value decomposition.
- ### Applications
  - Compressing high-dimensional feature sets before training a [[Machine Learning Model]].
  - Two- or three-dimensional [[Data Visualisation]] of high-dimensional datasets.
  - Noise reduction by reconstructing data from a truncated set of components.
  - Decorrelating features as a [[Data Preprocessing]] step for downstream algorithms.
- ### Relationships
  - subClassOf:: [[Dimensionality Reduction]]
  - contrastsWith:: [[Feature Engineering]]
  - enables:: [[Dimensionality Reduction]]
  - enables:: [[Data Visualisation]]
  - hasPart:: [[Linear Algebra]]
  - relatedTo:: [[Unsupervised Learning]]
  - relatedTo:: [[Data Preprocessing]]
  - uses:: [[Linear Algebra]]
  - supports:: [[Machine Learning Model]]
  - supports:: [[Data Processing]]
  - requires:: [[Data Preprocessing]]
  - requires:: [[Data Quality]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
