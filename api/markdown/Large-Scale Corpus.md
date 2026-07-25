public:: true

# Large-Scale Corpus

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:large-scale-corpus", "@type":"Page", "title":"Large-Scale Corpus", "vc:slug":"large-scale-corpus", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:large-scale-corpus", "@type": "Class", "label": "Large-Scale Corpus", "definition": "A large-scale corpus is a training dataset comprising an extremely large volume of text or other sequential data, typically gathered from web crawls, digitised books, or code repositories, and used to pretrain large neural language models. Its scale is a primary determinant of model capability under empirically observed scaling laws, alongside model parameter count and compute budget. Curation and deduplication of a large-scale corpus materially affect downstream model quality and the presence of memorised content.", "domain": "machine-learning", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:training-data", "label": "Training Data"}], "relations": {"partOf": [{"@id": "urn:ngm:class:training-data", "label": "Training Data"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- A large-scale corpus is a training dataset comprising an extremely large volume of text or other sequential data, typically gathered from web crawls, digitised books, or code repositories, and used to pretrain large neural language models. Its scale is a primary determinant of model capability under empirically observed scaling laws, alongside model parameter count and compute budget. Curation and deduplication of a large-scale corpus materially affect downstream model quality and the presence of memorised content.
- ### Relationships
	- subClassOf:: [[Training Data]]
	- partOf:: [[Training Data]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
