public:: true

# Task-Specific Dataset

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:task-specific-dataset", "@type":"Page", "title":"Task-Specific Dataset", "vc:slug":"task-specific-dataset", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:task-specific-dataset",
  "@type":"Class",
  "label":"Task-Specific Dataset",
  "definition":"A task-specific dataset is a curated collection of labelled or structured examples assembled to train or evaluate a machine learning model on a single, narrowly defined task, as distinct from the broad, general-purpose corpora used for pretraining. It typically supports fine-tuning techniques such as LoRA and DoRA, where a smaller, high-quality dataset adapts a pretrained model to a specific domain or behaviour. The quality and relevance of a task-specific dataset directly bound the ceiling of performance achievable through fine-tuning.",
  "domain":"machine-learning",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:dataset","label":"Dataset"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:fine-tuning","label":"Fine Tuning"}
    ],
    "requires":[],
    "partOf":[
      {"@id":"urn:ngm:class:dataset","label":"Dataset"}
    ]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A task-specific dataset is a curated collection of labelled or structured examples assembled to train or evaluate a machine learning model on a single, narrowly defined task, as distinct from the broad, general-purpose corpora used for pretraining. It typically supports fine-tuning techniques such as LoRA and DoRA, where a smaller, high-quality dataset adapts a pretrained model to a specific domain or behaviour. The quality and relevance of a task-specific dataset directly bound the ceiling of performance achievable through fine-tuning.
- ### Relationships
	- subClassOf:: [[Dataset]]
	- enables:: [[Fine Tuning]]
	- partOf:: [[Dataset]]
