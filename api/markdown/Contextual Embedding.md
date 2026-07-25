public:: true

# Contextual Embedding

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:contextual-embedding", "@type":"Page", "title":"Contextual Embedding", "vc:slug":"contextual-embedding", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:contextual-embedding",
  "@type": "Class",
  "label": "Contextual Embedding",
  "definition": "A contextual embedding is a vector representation of a token or span whose value depends on the surrounding context in which it appears, in contrast to static embeddings that assign a fixed vector to each word regardless of usage. Contextual embeddings are produced by encoder models such as BERT, typically via masked language modelling objectives, and allow the same word to be represented differently depending on its sense in a given sentence. They substantially improved performance on downstream natural language understanding tasks by resolving ambiguity that static embeddings could not capture.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:embedding",
      "label": "Embedding"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:encoder",
        "label": "Encoder"
      },
      {
        "@id": "urn:ngm:class:masked-language-modelling",
        "label": "Masked Language Modelling"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- A contextual embedding is a vector representation of a token or span whose value depends on the surrounding context in which it appears, in contrast to static embeddings that assign a fixed vector to each word regardless of usage. Contextual embeddings are produced by encoder models such as BERT, typically via masked language modelling objectives, and allow the same word to be represented differently depending on its sense in a given sentence. They substantially improved performance on downstream natural language understanding tasks by resolving ambiguity that static embeddings could not capture.
- ### Relationships
	- partOf:: [[Embedding]]
	- relatedTo:: [[Encoder]]
	- relatedTo:: [[Masked Language Modelling]]
