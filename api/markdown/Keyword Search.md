
Keyword search is an information retrieval approach that matches documents to a query based on the presence and statistics of literal terms, typically using inverted indexes and term-weighting schemes. It ranks results by lexical relevance signals such as term frequency and inverse document frequency rather than semantic meaning. Fast, interpretable, and exact for known vocabulary, it is frequently combined with semantic methods in hybrid retrieval to balance precision and recall.

- ### Overview
  - Keyword search treats relevance as a function of which query terms appear in a document and how distinctive those terms are.
  - An inverted index maps terms to the documents containing them, enabling fast lookup over large corpora.
  - Ranking functions weight matches by frequency and rarity, favouring documents that contain distinctive query terms prominently.
  - It excels at exact, vocabulary-driven retrieval but struggles with synonyms and paraphrase, motivating hybrid approaches.
- ### Mechanisms
  - Tokenisation and normalisation: splitting text into terms and folding case, stems, and stopwords.
  - Inverted index lookup: resolving query terms to candidate documents efficiently.
  - Term weighting: scoring with TF-IDF and BM25 to reflect term importance.
  - Boolean and phrase operators: combining terms with logic and proximity constraints.
  - Result ranking: ordering candidates by accumulated relevance scores.
- ### Applications
  - Powering enterprise and web search over large text collections.
  - Filtering and retrieving documents by precise, known terminology.
  - Serving as the lexical component of hybrid retrieval for retrieval-augmented systems.
  - Providing fast, interpretable baselines against which semantic search is measured.
- ### Provenance

