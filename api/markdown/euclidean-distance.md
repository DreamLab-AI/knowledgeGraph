- ### Definition
  - [[Euclidean Distance]] measures the straight-line distance between two points in n-dimensional space as the L2 norm of their coordinate difference vector.
  - It is the canonical metric for geometric proximity in [[Machine Learning]] tasks including clustering, nearest-neighbour classification, and embedding similarity.
  - As a sub-concept of [[Distance Metric]], Euclidean distance satisfies the metric axioms and is the default distance measure in many [[Statistical Analysis]] and [[Numerical Methods]] libraries.

- ### Overview
  - Named after the ancient Greek mathematician Euclid, the measure formalises our intuitive notion of distance in physical space and extends naturally to high-dimensional vector spaces.
  - In [[Machine Learning]], Euclidean distance underpins k-means clustering (cluster assignment based on distance to centroids), k-nearest neighbours classification, and UMAP/t-SNE dimensionality reduction.
  - High-dimensional data suffers from the "curse of dimensionality": as dimensions increase, Euclidean distances between random points concentrate around similar values, reducing the discriminative power of the metric — a property motivating cosine similarity for embedding spaces.
  - [[Tensor Computation]] frameworks provide highly optimised batch-distance computation via vectorised L2-norm operations on GPU.

- ### Key Aspects
  - The squared Euclidean distance avoids the square root computation and is sufficient for ranking applications where only relative order matters.
  - Standardisation or normalisation of feature scales is critical: Euclidean distance is sensitive to features with large numerical ranges dominating the metric.
  - The cosine distance (1 - cosine similarity) is preferred over Euclidean distance for high-dimensional text or image embeddings where magnitude is uninformative.
  - [[Ultra Wideband]] ranging uses Euclidean distance geometry for multilateration — measured range estimates are combined using least-squares to compute 3D position.

- ### Mechanisms
  - Computed as: d(p, q) = sqrt(sum_i (p_i - q_i)²), implemented as the L2-norm of the difference vector.
  - Efficient computation uses the identity: ||p - q||² = ||p||² + ||q||² - 2 * p·q, leveraging fast matrix multiplication for batch all-pairs distance computation.
  - Approximate nearest-neighbour methods (HNSW, FAISS IVF) provide sub-linear search complexity for large embedding databases using Euclidean distance as the similarity criterion.
  - [[Python Programming Language]] libraries (NumPy, SciPy, scikit-learn) provide vectorised implementations operating over [[Tensor]] arrays.

- ### Applications
  - Nearest-neighbour retrieval in [[Data Modelling]] — finding similar records, documents, or images via embedding similarity.
  - Clustering algorithms (k-means, DBSCAN) assigning data points to groups based on centroid distances.
  - Indoor positioning with [[Ultra Wideband]] where trilateration solves for position from pairwise ranging measurements.
  - Anomaly detection by measuring the Euclidean distance of new observations from cluster centroids or training data distributions.

- ### Relationships
  - subClassOf:: [[Distance Metric]]
  - uses:: [[Linear Algebra]]
  - uses:: [[Statistical Analysis]]
  - contrastsWith:: [[Fourier Transform]]
  - requires:: [[Tensor Computation]]
  - requires:: [[Numerical Methods]]
  - enables:: [[Machine Learning]]
  - enables:: [[Data Modelling]]
  - implements:: [[Numerical Methods]]
  - relatedTo:: [[Python Programming Language]]
  - relatedTo:: [[Ultra Wideband]]
  - supports:: [[Data Management]]
  - dependsOn:: [[Tensor]]

- ### Provenance
  - updated:: 2026-06-15