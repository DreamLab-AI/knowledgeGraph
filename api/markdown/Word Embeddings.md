public:: true

# Word Embeddings
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:word-embeddings", "@type":"Page", "title":"Word Embeddings", "vc:slug":"word-embeddings", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:word-embeddings",
  "@type":"Class",
  "label":"Word Embeddings",
  "definition":"Word embeddings are dense, real-valued vector representations of words learned so that semantic and syntactic relationships are reflected as geometric relationships in a continuous vector space. Words with similar meanings map to nearby points, and linear offsets often capture analogical structure. They are learned from large text corpora by predicting words from their contexts, and replaced sparse one-hot encodings as the default input representation for natural language processing. Word embeddings underpin downstream tasks from classification to machine translation and serve as the conceptual precursor to contextual representations produced by transformer models.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"}],
  "relations":{
    "uses":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"},
      {"@id":"urn:ngm:class:tokenization","label":"Tokenization"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"},
      {"@id":"urn:ngm:class:representation-learning","label":"Representation Learning"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"},
      {"@id":"urn:ngm:class:language-model","label":"Language Model"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:natural-language-processing","label":"Natural Language Processing"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:tokenization","label":"Tokenization"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:embedding","label":"Embedding"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:embedding","label":"Embedding"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:bert","label":"BERT"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:transformer","label":"Transformer"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cosine-similarity","label":"Cosine Similarity"},
      {"@id":"urn:ngm:class:dimensionality-reduction","label":"Dimensionality Reduction"},
      {"@id":"urn:ngm:class:language-model","label":"Language Model"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Word embeddings are dense vector representations of words in which semantic similarity corresponds to geometric proximity. They are a form of [[Representation Learning]] central to [[Natural Language Processing]].
- They replaced sparse symbolic encodings and provided the input layer for the [[Neural Network]] models that followed.
- ### Overview
- Embeddings are learned by training a model to predict a word from its surrounding context, or vice versa, over a large corpus. The resulting vectors place semantically related words near one another and often encode analogical structure as consistent linear offsets.
- Because the space is continuous and differentiable, embeddings integrate naturally into gradient-trained networks and reduce the dimensionality of the input compared with one-hot encodings.
- They are the conceptual ancestor of contextual representations, where a word's vector depends on its sentence rather than being fixed.
- ### Key aspects
- Distributional hypothesis: meaning is inferred from co-occurrence patterns.
- Fixed (static) embeddings assign one vector per word type, independent of context.
- Vector arithmetic captures relational regularities between concepts.
- [[Cosine Similarity]] is the standard measure of closeness between embedding vectors.
- ### Applications
- Feature inputs for text classification, sentiment analysis, and named-entity recognition.
- Initialisation and lookup layers in [[Language Model]] architectures.
- Semantic search, clustering, and recommendation over text.
- Cross-lingual mapping and machine translation.
- ### Relationships
- subClassOf:: [[Representation Learning]]
- uses:: [[Neural Network]]
- uses:: [[Tokenization]]
- dependsOn:: [[Representation Learning]]
- enables:: [[Natural Language Processing]]
- enables:: [[Language Model]]
- requires:: [[Tokenization]]
- hasPart:: [[Embedding]]
- contrastsWith:: [[BERT]]
- bridgesTo:: [[Transformer]]
- relatedTo:: [[Cosine Similarity]]
- relatedTo:: [[Dimensionality Reduction]]
- ### Provenance
- updated:: 2026-06-15
