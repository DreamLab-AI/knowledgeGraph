A Word Embedding is a dense, continuous vector representation of a word learned such that semantically or syntactically similar words occupy nearby positions in the vector space. Trained from large text corpora using distributional statistics, embeddings capture relationships through geometric structure, enabling analogical reasoning and similarity computation. They transformed natural language processing by replacing sparse one-hot encodings with low-dimensional features that generalise across vocabulary and feed downstream neural models.

### Overview

- Word Embeddings emerged from the distributional hypothesis: words appearing in similar contexts carry similar meaning. Models learn a vector per word so that geometric operations approximate semantic relations, the canonical example being king minus man plus woman approximating queen. Embeddings became the input layer of nearly all neural [[Natural Language Processing]] systems before contextual representations from [[Language Model]]s generalised them to context-dependent vectors.

### Mechanisms

- Distributional training that maps co-occurrence statistics to geometry.
- Dense low-dimensional vectors replacing sparse one-hot encodings.
- Similarity measured by [[Cosine Similarity]] in the embedding space.
- Analogical structure capturing syntactic and semantic regularities.
- Transition from static to contextual embeddings via deep models.

### Applications

- Feature input for text classification and [[Sentiment Analysis]].
- Semantic search and [[Information Retrieval]] ranking.
- [[Machine Translation]] and cross-lingual alignment.
- [[Named Entity Recognition]] and sequence labelling.

### Provenance

