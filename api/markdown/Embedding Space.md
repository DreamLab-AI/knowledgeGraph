
An embedding space is a continuous vector space into which discrete or high-dimensional objects — such as words, images, or graph nodes — are mapped so that geometric relationships encode semantic similarity. Learned by models during representation learning, the space arranges related items close together and supports operations like nearest-neighbour search and analogy via vector arithmetic. It is the substrate underlying semantic search, retrieval, and many downstream machine-learning tasks.

- An embedding space is a continuous vector space in which objects are positioned so that geometric proximity reflects semantic similarity. It is produced by [[Representation Learning]] and realised through [[Embedding]] vectors compared with [[Cosine Similarity]].
- The space turns symbolic items into points whose relationships can be measured and manipulated numerically.
- ### Overview
- Models map inputs to fixed-length vectors; the collection of all such vectors and their geometry constitutes the embedding space.
- Distances and angles in the space approximate relatedness, so similar items cluster and dissimilar items separate.
- A well-structured space supports vector arithmetic, where directions can encode interpretable relations.
- ### Key aspects
- Continuity: nearby points represent semantically similar objects.
- Dimensionality: the space typically has tens to thousands of dimensions, balancing expressiveness and cost via [[Dimensionality Reduction]].
- Metric: similarity is measured by [[Cosine Similarity]] or Euclidean distance.
- Transferability: spaces learned on large corpora transfer to new tasks through [[Transfer Learning]].
- ### Mechanisms
- Encoder models project inputs into the space during training on [[Training Data]].
- Contrastive and reconstruction objectives shape the geometry so related items attract.
- Indexing structures in a [[Vector Database]] enable fast nearest-neighbour retrieval.
- Projection methods reduce dimensions for visualisation and storage.
- ### Applications
- [[Semantic Search]] and retrieval over text, images, and audio.
- [[Clustering]] and recommendation by grouping nearby vectors.
- Knowledge graph reasoning via [[Knowledge Graph Embedding]].
- Cross-modal alignment linking [[Word Embedding]] spaces to image features.
- ### Provenance

