public:: true

# Data Labelling

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:data-labelling", "@type":"Page", "title":"Data Labelling", "vc:slug":"data-labelling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:data-labelling",
  "@type":"Class",
  "label":"Data Labelling",
  "definition":"Data labelling is the process of annotating raw data, such as images, text, audio or sensor readings, with the target outputs or categories a supervised model is expected to predict. It produces the ground-truth signal that links inputs to desired outputs and largely determines the achievable accuracy of trained models. Labelling combines human annotators, guidelines, tooling and quality control, increasingly augmented by model-assisted and active-learning workflows.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-annotation","label":"Data Annotation"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:human-in-the-loop","label":"Human In The Loop"},
      {"@id":"urn:ngm:class:training-data","label":"Training Data"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:ground-truth","label":"Ground Truth"},
      {"@id":"urn:ngm:class:dataset-curation","label":"Dataset Curation"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:data-quality","label":"Data Quality"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"},
      {"@id":"urn:ngm:class:model-training","label":"Model Training"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:active-learning","label":"Active Learning"},
      {"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:human-in-the-loop","label":"Human In The Loop"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:training-data","label":"Training Data"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:active-learning","label":"Active Learning"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:dataset-curation","label":"Dataset Curation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:data-quality","label":"Data Quality"},
      {"@id":"urn:ngm:class:ground-truth","label":"Ground Truth"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Data Labelling]] is the process of annotating raw data with the target outputs a supervised model must predict, producing the [[Ground Truth]] used for training.
	- It is a form of [[Data Annotation]] that requires [[Human In The Loop]] judgment and structured guidelines.
	- High-quality labelling enables [[Supervised Learning]] and underpins [[Model Training]].
- ### Overview
	- Supervised machine learning learns a mapping from inputs to outputs by example, and labelling provides those examples by attaching correct answers to raw data.
	- Labelling spans classification tags, bounding boxes and segmentation masks for images, named-entity and sentiment spans for text, transcription for audio, and event markers for sensor streams.
	- Annotation quality is governed by clear guidelines, annotator training, inter-annotator agreement metrics and adjudication of disagreements.
	- Modern pipelines combine human labelling with model pre-labelling and active learning, where the model selects the most informative samples for human review.
- ### Mechanisms
	- Guideline definition specifying the label schema and edge-case rules.
	- Annotation tooling for efficient, consistent capture of labels.
	- Quality control via gold-standard checks and consensus.
	- Model-assisted pre-labelling to reduce human effort.
	- Active learning to prioritise high-value samples.
- ### Applications
	- Building training sets for computer vision and natural language models.
	- Creating evaluation benchmarks and held-out test data.
	- Reinforcement learning from human feedback preference data.
	- Domain-specific datasets for medical, legal and industrial models.
- ### Relationships
	- requires:: [[Human In The Loop]]
	- requires:: [[Training Data]]
	- hasPart:: [[Ground Truth]]
	- hasPart:: [[Dataset Curation]]
	- dependsOn:: [[Data Quality]]
	- enables:: [[Supervised Learning]]
	- enables:: [[Model Training]]
	- supports:: [[Active Learning]]
	- supports:: [[Supervised Learning]]
	- uses:: [[Human In The Loop]]
	- partOf:: [[Training Data]]
	- contrastsWith:: [[Active Learning]]
	- bridgesTo:: [[Dataset Curation]]
	- relatedTo:: [[Data Quality]]
	- relatedTo:: [[Ground Truth]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
