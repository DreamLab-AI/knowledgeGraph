public:: true

# Keyword Search

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:keyword-search", "@type":"Page", "title":"Keyword Search", "vc:slug":"keyword-search", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:keyword-search",
  "@type":"Class",
  "label":"Keyword Search",
  "definition":"Keyword search is an information retrieval approach that matches documents to a query based on the presence and statistics of literal terms, typically using inverted indexes and term-weighting schemes. It ranks results by lexical relevance signals such as term frequency and inverse document frequency rather than semantic meaning. Fast, interpretable, and exact for known vocabulary, it is frequently combined with semantic methods in hybrid retrieval to balance precision and recall.",
  "domain":"machine-learning",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:information-retrieval","label":"Information Retrieval"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:inverted-index","label":"Inverted Index"},
      {"@id":"urn:ngm:class:bm25","label":"BM25"},
      {"@id":"urn:ngm:class:tf-idf","label":"TF-IDF"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:full-text-search","label":"Full-Text Search"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:search-engine","label":"Search Engine"},
      {"@id":"urn:ngm:class:document-retrieval","label":"Document Retrieval"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:relevance-ranking","label":"Relevance Ranking"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:query-processing","label":"Query Processing"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:semantic-search","label":"Semantic Search"},
      {"@id":"urn:ngm:class:vector-search","label":"Vector Search"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:hybrid-search","label":"Hybrid Search"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:full-text-search","label":"Full-Text Search"},
      {"@id":"urn:ngm:class:search-engine","label":"Search Engine"},
      {"@id":"urn:ngm:class:relevance-ranking","label":"Relevance Ranking"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Keyword search matches documents to a query by the presence and statistics of literal terms.
  - It is a foundational technique within [[Information Retrieval]] and the basis of classic [[Full-Text Search]].
  - It relies on an [[Inverted Index]] and term-weighting schemes such as [[BM25]] and [[TF-IDF]].
  - It is increasingly paired with [[Semantic Search]] inside [[Hybrid Search]] systems.
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
- ### Relationships
  - uses:: [[Inverted Index]]
  - uses:: [[BM25]]
  - uses:: [[TF-IDF]]
  - implements:: [[Full-Text Search]]
  - supports:: [[Search Engine]]
  - supports:: [[Document Retrieval]]
  - enables:: [[Relevance Ranking]]
  - requires:: [[Query Processing]]
  - contrastsWith:: [[Semantic Search]]
  - contrastsWith:: [[Vector Search]]
  - bridgesTo:: [[Hybrid Search]]
  - relatedTo:: [[Full-Text Search]]
  - relatedTo:: [[Search Engine]]
  - relatedTo:: [[Relevance Ranking]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
