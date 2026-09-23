
A vector embedding is a dense, fixed-length numerical representation of a discrete object — a word, sentence, image, or user — in a continuous high-dimensional space, learned such that semantically similar objects map to nearby points. Embeddings convert unstructured data into a form amenable to mathematical operations like distance and dot product, enabling similarity search, clustering, recommendation, and retrieval. They are produced by neural encoders and are the representational substrate beneath modern search, retrieval-augmented generation, and multimodal AI.

- ### In Plain Terms
  - A way of turning a word, sentence, image, or document into a list of numbers that captures its meaning, so that things which mean similar things end up close together. This is what lets a system find results by what you actually meant rather than just matching exact keywords.

- ### Content
  - The core idea of a vector embedding is to translate the messy, discrete world of words, images, and entities into geometry. Once an object is a point in a vector space, the abstract notion of similarity becomes a concrete distance, and relationships become directions. The famous early demonstration — that the vector arithmetic "king minus man plus woman" lands near "queen" — showed that embeddings capture semantic structure, not just surface tokens.

  - Embeddings are learned, not hand-designed. A neural encoder is trained on a pretext task — predicting neighbouring words, matching captions to images, distinguishing related from unrelated pairs — and the internal representation it develops becomes the embedding. The quality of an embedding is judged by how well distances in the space correspond to the semantic relationships that matter for the downstream task, which is why modern embedding models are trained on enormous, diverse corpora with contrastive objectives.

  - The practical power of embeddings is that they make similarity computable at scale. Approximate-nearest-neighbour indexes search millions or billions of vectors in milliseconds, so a query embedding can retrieve the most semantically relevant items from a vast collection regardless of exact keyword overlap. This is the engine behind semantic search, recommendation, deduplication, and clustering, and it generalises across modalities when text and images are embedded into a shared space.

  - Vector embeddings have become central to the architecture of large-language-model applications through retrieval-augmented generation: documents are embedded and stored in a vector database, a user query is embedded, the nearest documents are retrieved, and the model conditions its answer on them. This pattern grounds generative models in external, updatable knowledge without retraining, and has made vector embeddings and the databases that serve them foundational infrastructure for production AI systems.

