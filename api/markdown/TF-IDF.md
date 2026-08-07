public:: true

# TF-IDF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b3f54a0c416c01ee2b1e9bf9876bb1cf6dfefce1e1c30bd35e0aa8439164cf5",
  "@type": "Page",
  "vc:slug": "tf-idf",
  "title": "TF-IDF",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:information-retrieval",
      "vc:label": "Information Retrieval"
    },
    {
      "@id": "urn:visionflow:linked:bm25",
      "vc:label": "BM25"
    },
    {
      "@id": "urn:visionflow:linked:keyword-search",
      "vc:label": "Keyword Search"
    },
    {
      "@id": "urn:visionflow:linked:cosine-similarity",
      "vc:label": "Cosine Similarity"
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
  "@id": "urn:ngm:class:tf-idf",
  "@type": "Class",
  "label": "TF-IDF",
  "definition": "Term frequency–inverse document frequency, a classical term-weighting scheme that scores a term's importance to a document as the product of how often it occurs in that document and the logarithm of how rare it is across the collection, producing sparse vector representations that underpin lexical search ranking, document similarity, and feature extraction for text mining.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:information-retrieval",
    "label": "Information Retrieval"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:keyword-search",
        "label": "Keyword Search"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:dense-retrieval",
        "label": "Dense Retrieval"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bm25",
        "label": "BM25"
      },
      {
        "@id": "urn:ngm:class:cosine-similarity",
        "label": "Cosine Similarity"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Term frequency–inverse document frequency, a classical term-weighting scheme that scores a term's importance to a document as the product of how often it occurs in that document and the logarithm of how rare it is across the collection, producing sparse vector representations that underpin lexical search ranking, document similarity, and feature extraction for text mining."

- ### Semantic Classification
  - owl-class:: data:TFIDF
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Information Retrieval]]
  - enables:: [[Keyword Search]]
  - related-to:: [[BM25]]
  - related-to:: [[Cosine Similarity]]

- ### Content

  ## Definition

  **TF-IDF** (term frequency–inverse document frequency) is the foundational term-weighting scheme of [[Information Retrieval]]. It formalises two intuitions: a term that appears often in a document is important *to that document* (term frequency, from Luhn's 1950s work), and a term that appears in few documents is a better discriminator than a common one (inverse document frequency, introduced by Karen Spärck Jones in 1972 as "term specificity"). The weight of term *t* in document *d* is typically `tf(t,d) × log(N / df(t))`, where *N* is the collection size and *df(t)* the number of documents containing *t*.

  Representing each document as a sparse vector of TF-IDF weights over the vocabulary — the vector space model of Salton and colleagues — turns retrieval and similarity into geometry: a query becomes a vector in the same space, and documents are ranked by [[Cosine Similarity]], which normalises away document length. The same representation serves as a feature extractor for clustering, classification, and keyword extraction, and remains the default baseline vectoriser in libraries such as scikit-learn (`TfidfVectorizer`) and Lucene-derived search engines.

  TF-IDF's probabilistic successor is [[BM25]], which adds saturating term frequency and tuned length normalisation and generally ranks better in practice; both are *lexical* (exact-match) methods and thus contrast with [[Dense Retrieval]], which matches by embedding semantics and can bridge vocabulary mismatch at the cost of index size, training data, and interpretability. Production systems frequently combine the two families in hybrid ranking.

  ## Technical Details

  Common weighting variants (the SMART notation catalogues dozens):

  - **Term frequency**: raw count, log-scaled `1 + log tf`, augmented (normalised by the document's maximum tf), or binary.
  - **IDF**: `log(N/df)`, smoothed `log(1 + N/df)`, or the BM25-style probabilistic `log((N − df + 0.5)/(df + 0.5))`, which can go negative for very common terms.
  - **Normalisation**: L2 (for cosine scoring), or pivoted length normalisation to correct the bias against long documents.

  Practical properties worth noting: the representation is trivially interpretable (each dimension is a word), embarrassingly cheap to compute and update, needs no training data, and works in any language given tokenisation — which is why TF-IDF persists in log analysis, deduplication, relevance debugging, and as the sparse leg of hybrid search stacks decades after its invention. Its limitations are equally well known: no notion of synonymy or word order, sensitivity to tokenisation choices, and vocabulary-mismatch failure on short queries — precisely the weaknesses that motivated latent semantic analysis, topic models, and ultimately neural retrieval.
