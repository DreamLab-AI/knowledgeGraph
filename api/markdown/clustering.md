- ### Definition
  - Clustering is an [[Unsupervised Learning]] task that groups objects so that members of a group are more similar to each other than to members of other groups, judged by a [[Distance Metric]]. It discovers structure without labelled examples, contrasting with [[Classification]].
  - The result is a partition (or a soft assignment) that reveals natural groupings, outliers, and hierarchy in the data.

- ### Overview
  - Clustering is a cornerstone of exploratory data analysis, used wherever the goal is to find hidden groupings rather than predict known labels.
  - **Why it matters:** much real-world data is unlabelled; clustering extracts actionable structure from it cheaply, informing segmentation, summarisation, and downstream modelling.
  - **How it works:**
    - Objects are represented as feature vectors, often via [[Feature Engineering]] or an [[Embedding]] into an [[Embedding Space]].
    - A similarity or [[Distance Metric]] is chosen to quantify proximity.
    - An algorithm groups objects to optimise an objective (e.g. minimising within-cluster variance).
    - Cluster quality is assessed with internal indices (silhouette, Davies-Bouldin) or external validation against known structure.

- ### Mechanisms
  - **Centroid-based** — partitions data around representative centres; iteratively refines assignments and centres.
  - **Density-based** — forms clusters from dense regions and labels sparse points as noise, handling arbitrary shapes.
  - **Hierarchical** — builds a nested tree of clusters via agglomerative merging or divisive splitting; see [[Hierarchical Clustering]].
  - **Probabilistic / model-based** — assumes data arise from a mixture of distributions, e.g. a [[Gaussian Mixture Model]], giving soft memberships.
  - **Graph-based** — partitions a similarity graph, closely related to [[Community Detection]] in networks.

- ### Applications
  - Customer and market segmentation for targeting and personalisation.
  - [[Anomaly Detection]] by flagging points that fit no dense cluster.
  - Document and image organisation, topic discovery, and deduplication.
  - Preprocessing and compression as a precursor to [[Predictive Analytics]].
  - Bioinformatics grouping of genes, cells, or sequences by expression similarity.

- ### Relationships
  - subClassOf:: [[Unsupervised Learning]]
  - partOf:: [[Unsupervised Learning]]
  - hasPart:: [[Distance Metric]]
  - hasPart:: [[Hierarchical Clustering]]
  - requires:: [[Distance Metric]]
  - requires:: [[Feature Engineering]]
  - uses:: [[Embedding]]
  - uses:: [[Embedding Space]]
  - uses:: [[Gaussian Mixture Model]]
  - enables:: [[Anomaly Detection]]
  - enables:: [[Community Detection]]
  - supports:: [[Dimensionality Reduction]]
  - supports:: [[Predictive Analytics]]
  - contrastsWith:: [[Classification]]
  - contrastsWith:: [[Regression]]
  - relatedTo:: [[Graph Analytics]]

- ### Provenance
  - updated:: 2026-06-15