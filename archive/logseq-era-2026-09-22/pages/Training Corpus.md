public:: true

# Training Corpus

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:training-corpus", "@type":"Page", "title":"Training Corpus", "vc:slug":"training-corpus", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:training-corpus",
  "@type":"Class",
  "label":"Training Corpus",
  "definition":"A training corpus is the body of text or other data used to fit the parameters of a machine learning model, whose scale, diversity and quality directly shape what the resulting model can learn. It is the input from which subword vocabularies are derived by algorithms such as byte pair encoding during tokenisation, prior to any model training taking place. Curation choices around a training corpus, including deduplication and filtering, materially affect downstream model behaviour.",
  "domain":"machine-learning",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:dataset","label":"Dataset"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:byte-pair-encoding","label":"Byte Pair Encoding"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Training Corpus]] A training corpus is the body of text or other data used to fit the parameters of a machine learning model, whose scale, diversity and quality directly shape what the resulting model can learn. It is the input from which subword vocabularies are derived by algorithms such as byte pair encoding during tokenisation, prior to any model training taking place. Curation choices around a training corpus, including deduplication and filtering, materially affect downstream model behaviour.
- ### Relationships
	- subClassOf:: [[Dataset]]
	- enables:: [[Byte Pair Encoding]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
