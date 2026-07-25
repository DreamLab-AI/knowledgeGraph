public:: true

# Low-Rank Decomposition

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:low-rank-decomposition", "@type":"Page", "title":"Low-Rank Decomposition", "vc:slug":"low-rank-decomposition", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:low-rank-decomposition",
  "@type":"Class",
  "label":"Low-Rank Decomposition",
  "definition":"Low-rank decomposition is a linear algebra technique that approximates a matrix as the product of two or more smaller matrices of lower rank, reducing the number of parameters needed to represent it. In machine learning it underlies parameter-efficient fine-tuning methods such as LoRA, which learn a small low-rank update to a pretrained weight matrix instead of updating all parameters. It trades a controlled amount of representational capacity for large reductions in memory and compute cost.",
  "domain":"artificial-intelligence",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:linear-algebra","label":"Linear Algebra"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:parameter-efficient-fine-tuning","label":"Parameter-Efficient Fine-Tuning"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Low-Rank Decomposition]] Low-rank decomposition is a linear algebra technique that approximates a matrix as the product of two or more smaller matrices of lower rank, reducing the number of parameters needed to represent it. In machine learning it underlies parameter-efficient fine-tuning methods such as LoRA, which learn a small low-rank update to a pretrained weight matrix instead of updating all parameters. It trades a controlled amount of representational capacity for large reductions in memory and compute cost.
- ### Relationships
	- subClassOf:: [[Linear Algebra]]
	- enables:: [[Parameter-Efficient Fine-Tuning]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
