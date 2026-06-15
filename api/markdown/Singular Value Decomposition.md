public:: true

# Singular Value Decomposition
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:singular-value-decomposition",
  "@type": "Page",
  "title": "Singular Value Decomposition",
  "vc:slug": "singular-value-decomposition",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:singular-value-decomposition",
  "@type": "Class",
  "label": "Singular Value Decomposition",
  "definition": "Singular value decomposition (SVD) is a matrix factorisation that expresses any real or complex matrix as the product of two orthogonal (or unitary) matrices and a diagonal matrix of non-negative singular values. It generalises eigenvalue decomposition to arbitrary, non-square matrices and reveals the rank, range, and dominant directions of variation in data. SVD is foundational across machine learning and numerical linear algebra, underpinning dimensionality reduction, low-rank approximation, recommender systems, and the principal component analysis used to compress and denoise high-dimensional data.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dimensionality-reduction",
      "label": "Dimensionality Reduction"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:principal-component-analysis",
        "label": "Principal Component Analysis"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:principal-component-analysis",
        "label": "Principal Component Analysis"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
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
  - Singular value decomposition (SVD) is a matrix factorisation that expresses any real or complex matrix as the product of two orthogonal (or unitary) matrices and a diagonal matrix of non-negative singular values. It generalises eigenvalue decomposition to arbitrary, non-square matrices and reveals the rank, range, and dominant directions of variation in data. SVD is foundational across machine learning and numerical linear algebra, underpinning dimensionality reduction, low-rank approximation, recommender systems, and the principal component analysis used to compress and denoise high-dimensional data.
  - [[Dimensionality Reduction]] [[Linear Algebra]] [[Feature Extraction]] [[Principal Component Analysis]]
- ### Overview
  - SVD decomposes a matrix into left singular vectors, singular values, and right singular vectors, where the singular values quantify how much each orthogonal direction contributes to the data. Truncating to the largest singular values yields the best low-rank approximation in the least-squares sense (the Eckart-Young theorem), which is the mathematical core of dimensionality reduction and lossy compression. Because it is numerically stable and broadly applicable, SVD is a workhorse of scientific computing and the basis of techniques from latent semantic analysis to model compression.
- ### Mechanisms
  - Factorisation into orthogonal U, diagonal sigma, and orthogonal V
  - Singular values ordering directions by variance captured
  - Optimal low-rank approximation by truncation (Eckart-Young)
  - Numerically stable computation via iterative algorithms
  - Generalisation of eigendecomposition to non-square matrices
- ### Applications
  - Principal component analysis and data compression
  - Recommender systems and collaborative filtering
  - Latent semantic analysis in text retrieval
  - Noise reduction and signal processing
  - Low-rank model compression and adaptation
- ### Relationships
  - uses:: [[Linear Algebra]]
  - implements:: [[Dimensionality Reduction]]
  - hasPart:: [[Feature Extraction]]
  - enables:: [[Principal Component Analysis]]
  - enables:: [[Feature Extraction]]
  - supports:: [[Principal Component Analysis]]
  - dependsOn:: [[Linear Algebra]]
  - relatedTo:: [[Dimensionality Reduction]]
  - relatedTo:: [[Deep Learning]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
