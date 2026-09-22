public:: true

# Foundation Models

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:foundation-models", "@type":"Page", "title":"Foundation Models", "vc:slug":"foundation-models", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:foundation-models",
  "@type":"Class",
  "label":"Foundation Models",
  "definition":"Foundation models are large neural networks pretrained on broad, diverse data at scale, producing general-purpose representations that can be adapted to many downstream tasks through fine-tuning or prompting. They underpin most modern large language models, vision models and multimodal systems, and their training typically relies on vast web-scale corpora such as Common Crawl. Their broad capability comes at the cost of high training compute and emergent, sometimes unpredictable, behaviour.",
  "domain":"artificial-intelligence",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:pretrained-model","label":"Pretrained Model"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:common-crawl","label":"Common Crawl"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Foundation Models]] Foundation models are large neural networks pretrained on broad, diverse data at scale, producing general-purpose representations that can be adapted to many downstream tasks through fine-tuning or prompting. They underpin most modern large language models, vision models and multimodal systems, and their training typically relies on vast web-scale corpora such as Common Crawl. Their broad capability comes at the cost of high training compute and emergent, sometimes unpredictable, behaviour.
- ### Relationships
	- subClassOf:: [[Pretrained Model]]
	- requires:: [[Common Crawl]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
