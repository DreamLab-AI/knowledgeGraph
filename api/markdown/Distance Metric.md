public:: true

# Distance Metric

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:distance-metric",
  "@type": "Page",
  "title": "Distance Metric",
  "vc:slug": "distance-metric",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distance-metric",
  "@type": "Class",
  "label": "Distance Metric",
  "definition": "A distance metric is a function that quantifies how dissimilar two data points are, satisfying non-negativity, identity, symmetry and the triangle inequality. In machine learning it defines the geometry of a feature space and thereby governs nearest-neighbour search, clustering and similarity-based retrieval. Choosing or learning an appropriate metric is often as important as the model itself for tasks driven by proximity.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:vector-embedding",
        "label": "Vector Embedding"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Nearest Neighbor Search"
      },
      {
        "@id": "urn:ngm:class:clustering",
        "label": "Clustering"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vector-embedding",
        "label": "Vector Embedding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:vector-embedding",
        "label": "Vector Embedding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
      },
      {
        "@id": "urn:ngm:class:clustering",
        "label": "Clustering"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
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
  - A distance metric is a function that quantifies how dissimilar two data points are, satisfying non-negativity, identity, symmetry and the triangle inequality.
  - In machine learning it defines the geometry of a feature space and thereby governs nearest-neighbour search, clustering and similarity-based retrieval.
  - Choosing or learning an appropriate metric is often as important as the model itself for tasks driven by proximity.
  - Related core concepts: [[Machine Learning]] [[Nearest Neighbor Search]] [[Vector Embedding]] [[Cosine Similarity]]
- ### Overview
  - A metric induces a topology on the feature space that determines which points count as close.
  - Common metrics include Euclidean, Manhattan, Mahalanobis and cosine-derived distances.
  - Metric learning adapts the distance to data so that semantically similar items become near.
- ### Key aspects
  - Formal axioms: identity of indiscernibles, symmetry and triangle inequality.
  - Curse of dimensionality eroding contrast between near and far in high dimensions.
  - Learned Mahalanobis and deep metric embeddings for task-specific geometry.
  - Indexing structures that exploit the triangle inequality for fast search.
- ### Applications
  - k-nearest-neighbour classification and retrieval.
  - Clustering and anomaly detection.
  - Vector databases and semantic similarity search.
- ### Relationships
  - requires:: [[Statistics]]
  - requires:: [[Vector Embedding]]
  - hasPart:: [[Cosine Similarity]]
  - enables:: [[Nearest Neighbor Search]]
  - enables:: [[Clustering]]
  - supports:: [[Vector Embedding]]
  - uses:: [[Vector Embedding]]
  - relatedTo:: [[Cosine Similarity]]
  - relatedTo:: [[Clustering]]
  - partOf:: [[Machine Learning]]
  - contrastsWith:: [[Cosine Similarity]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
