public:: true

# Spectral Clustering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ec29a32379bc199937672fa6e60730f3516e0ba55a72816c5eba213a3c56372c",
  "@type": "Page",
  "vc:slug": "spectral-clustering",
  "title": "Spectral Clustering",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:clustering",
      "vc:label": "Clustering"
    },
    {
      "@id": "urn:visionflow:linked:community-detection",
      "vc:label": "Community Detection"
    },
    {
      "@id": "urn:visionflow:linked:graph-theory",
      "vc:label": "Graph Theory"
    },
    {
      "@id": "urn:visionflow:linked:dimensionality-reduction",
      "vc:label": "Dimensionality Reduction"
    },
    {
      "@id": "urn:visionflow:linked:speaker-diarisation",
      "vc:label": "Speaker Diarisation"
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
  "@id": "urn:ngm:class:spectral-clustering",
  "@type": "Class",
  "label": "Spectral Clustering",
  "definition": "A clustering technique that partitions data using the eigenvectors of a graph Laplacian built from a pairwise similarity matrix. By embedding points into the subspace spanned by the Laplacian's smallest eigenvectors and running a simple algorithm such as k-means in that spectral space, it relaxes NP-hard graph-cut objectives (ratio cut, normalised cut) into tractable eigenproblems, allowing it to recover non-convex, connectivity-defined clusters that centroid-based methods cannot separate.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:clustering",
    "label": "Clustering"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:community-detection",
        "label": "Community Detection"
      },
      {
        "@id": "urn:ngm:class:speaker-diarisation",
        "label": "Speaker Diarisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      },
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
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
  - "A clustering technique that partitions data using the eigenvectors of a graph Laplacian built from a pairwise similarity matrix. By embedding points into the subspace spanned by the Laplacian's smallest eigenvectors and running a simple algorithm such as k-means in that spectral space, it relaxes NP-hard graph-cut objectives (ratio cut, normalised cut) into tractable eigenproblems, allowing it to recover non-convex, connectivity-defined clusters that centroid-based methods cannot separate."

- ### Semantic Classification
  - owl-class:: machine-learning:SpectralClustering
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Clustering]]
  - part-of:: [[Community Detection]]
  - uses:: [[Graph Theory]]
  - related-to:: [[Speaker Diarisation]]

- ### Content

  ## Definition

  **Spectral clustering** treats [[Clustering]] as a graph-partitioning problem. The data is first converted into a weighted similarity graph — fully connected with a Gaussian kernel, k-nearest-neighbour, or ε-neighbourhood — whose adjacency matrix `W` and degree matrix `D` define a graph Laplacian: unnormalised `L = D − W`, or one of its normalised variants (`L_sym = D^{-1/2} L D^{-1/2}`, `L_rw = D^{-1} L`). The eigenvectors associated with the smallest eigenvalues of this Laplacian encode the graph's connectivity structure: the multiplicity of eigenvalue zero equals the number of connected components, and small nonzero eigenvalues indicate near-disconnected regions.

  The algorithm embeds each point into ℝ^k using the first k eigenvectors (a spectral [[Dimensionality Reduction]] step), optionally row-normalises the embedding, and then clusters in that space with k-means. The standard formulations are Shi and Malik's normalised-cut method (2000), developed for image segmentation, and Ng, Jordan and Weiss's symmetric-Laplacian variant (2001). Their theoretical justification is that the spectral embedding is the continuous relaxation of NP-hard combinatorial cut objectives — RatioCut for the unnormalised Laplacian, NCut for the normalised ones — so spectral clustering finds partitions with weak between-cluster similarity and balanced cluster sizes.

  Because cluster membership is defined by connectivity rather than distance to a centroid, spectral clustering separates structures that defeat k-means — concentric rings, interleaved half-moons, elongated manifolds. The same machinery drives [[Community Detection]] in networks (where the graph is given rather than constructed) and modern [[Speaker Diarisation]] pipelines, which build an affinity matrix over speech-segment embeddings and spectrally cluster it to answer "who spoke when".

  ## Technical Details

  - **Pipeline**: similarity graph → Laplacian → k smallest eigenvectors → (row normalisation) → k-means on rows.
  - **Choosing k**: the eigengap heuristic selects k where the gap between consecutive eigenvalues is largest, a consequence of matrix perturbation theory (Davis–Kahan).
  - **Complexity**: dense eigendecomposition is O(n³); practical implementations use sparse k-NN graphs with Lanczos/ARPACK solvers, or approximations such as the Nyström method and landmark-based spectral clustering to reach large n.
  - **Sensitivities**: results depend strongly on the similarity kernel and its bandwidth σ, the graph-construction choice, and k-means initialisation in the embedded space; self-tuning variants adapt σ locally.
  - **Connections**: eigenvectors of `L_rw` relate to random-walk mixing and diffusion maps; Laplacian eigenmaps use the identical embedding for manifold learning; graph neural networks' spectral convolutions descend from the same Laplacian analysis.

  ## Current Landscape

  - **Speaker diarisation remains the flagship application**: production pipelines such as pyannote.audio 2.1 (Interspeech 2023) extract neural speaker embeddings (x-vectors/ECAPA-TDNN), build a cosine-similarity affinity matrix, and spectrally cluster it, with the number of speakers read from the eigengap.
  - **Auto-tuning the affinity matrix is the active research edge**: the persistent difficulty of choosing the kernel bandwidth and pruning threshold before forming the Laplacian drives 2024 work such as SC-pNA (self-tuning spectral clustering on a p-neighbourhood-retained affinity matrix), which derives its pruning parameters directly from the data and outperforms prior adaptive methods on DIHARD-III at lower compute cost.
  - **Normalised maximum-eigengap (NME-SC) back-ends** and Gaussian-blur affinity refinement are now standard components in state-of-the-art diarisation, having overtaken older Kaldi x-vector agglomerative-clustering systems.
  - **Scalability**: sparse k-NN graphs with Lanczos/ARPACK solvers and Nyström approximation remain the practical route to large n, keeping spectral clustering viable where dense O(n³) eigendecomposition is infeasible.

  **Sources**:
  - https://arxiv.org/html/2410.00023v1
  - https://www.isca-archive.org/interspeech_2023/bredin23_interspeech.pdf

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
