Word embeddings are dense, real-valued vector representations of words learned so that semantic and syntactic relationships are reflected as geometric relationships in a continuous vector space. Words with similar meanings map to nearby points, and linear offsets often capture analogical structure. They are learned from large text corpora by predicting words from their contexts, and replaced sparse one-hot encodings as the default input representation for natural language processing. Word embeddings underpin downstream tasks from classification to machine translation and serve as the conceptual precursor to contextual representations produced by transformer models.

- Word embeddings are dense vector representations of words in which semantic similarity corresponds to geometric proximity. They are a form of [[Representation Learning]] central to [[Natural Language Processing]].
- They replaced sparse symbolic encodings and provided the input layer for the [[Neural Network]] models that followed.

### Overview

- Embeddings are learned by training a model to predict a word from its surrounding context, or vice versa, over a large corpus. The resulting vectors place semantically related words near one another and often encode analogical structure as consistent linear offsets.
- Because the space is continuous and differentiable, embeddings integrate naturally into gradient-trained networks and reduce the dimensionality of the input compared with one-hot encodings.
- They are the conceptual ancestor of contextual representations, where a word's vector depends on its sentence rather than being fixed.

### Key aspects

- Distributional hypothesis: meaning is inferred from co-occurrence patterns.
- Fixed (static) embeddings assign one vector per word type, independent of context.
- Vector arithmetic captures relational regularities between concepts.
- [[Cosine Similarity]] is the standard measure of closeness between embedding vectors.

### Applications

- Feature inputs for text classification, sentiment analysis, and named-entity recognition.
- Initialisation and lookup layers in [[Language Model]] architectures.
- Semantic search, clustering, and recommendation over text.
- Cross-lingual mapping and machine translation.

### Provenance

