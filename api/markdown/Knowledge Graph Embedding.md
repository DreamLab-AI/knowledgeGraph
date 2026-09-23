
Knowledge graph embedding is the technique of representing the entities and relations of a knowledge graph as continuous low-dimensional vectors that preserve the graph's structural and semantic regularities. Scoring functions over these vectors model the plausibility of triples, enabling tasks such as link prediction, entity resolution and similarity-based retrieval through algebraic operations rather than symbolic traversal. It bridges symbolic knowledge representation with vector-based machine learning.

- ### Overview
  - Each entity and relation is assigned a vector, and a scoring function measures the plausibility of a candidate triple (head, relation, tail).
  - Translational models treat relations as translations in vector space, while bilinear and neural models capture richer interactions.
  - Graph neural networks aggregate neighbourhood structure to produce context-aware entity embeddings.
  - The learned space supports algebraic inference and approximate nearest-neighbour retrieval over knowledge.
- ### Mechanisms
  - A scoring function ranks true triples above corrupted ones during training.
  - Negative sampling supplies contrastive examples for optimisation.
  - Regularisation and normalisation constrain the geometry of the space.
  - Inductive variants generalise to entities unseen during training.
- ### Applications
  - Link prediction and knowledge-base completion.
  - Entity resolution and deduplication.
  - Semantic search and recommendation over linked data.
  - Feature provision for downstream reasoning and relation extraction.
- ### Provenance

