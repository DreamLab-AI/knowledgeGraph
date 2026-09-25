An inverted index is a data structure that maps each term to the list of documents (and often positions) in which it appears, enabling fast full-text retrieval over large corpora. It inverts the natural document-to-terms relationship so that a query term immediately yields its posting list, which can then be intersected or scored. It is the foundational index behind search engines and lexical information retrieval.

### Content

- Posting lists are compressed and stored with term frequencies and positions to support ranking functions such as BM25 and phrase queries. Modern search stacks often combine inverted indexes for lexical matching with vector indexes for semantic retrieval in hybrid pipelines.

