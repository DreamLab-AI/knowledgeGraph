public:: true

# Labelled Data

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:labelled-data", "@type": "Page", "title": "Labelled Data", "vc:slug": "labelled-data", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:labelled-data",
  "@type": "Class",
  "label": "Labelled Data",
  "definition": "Labelled data is data annotated with target values, categories or structured tags that supervised machine learning models learn to predict. Labels may be produced by human annotators, expert review or semi-automated pipelines, and their quality directly bounds achievable model accuracy. Labelled data underpins tasks such as model evaluation, semantic parsing and sequence labelling, where a defined label schema drives both training and assessment.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:training-data",
      "label": "Training Data"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [
      {
        "@id": "urn:ngm:class:dataset",
        "label": "Dataset"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:semantic-parsing",
        "label": "Semantic Parsing"
      },
      {
        "@id": "urn:ngm:class:sequence-labelling",
        "label": "Sequence Labelling"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
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
	- Labelled data is data annotated with target values, categories or structured tags that supervised machine learning models learn to predict. Labels may be produced by human annotators, expert review or semi-automated pipelines, and their quality directly bounds achievable model accuracy. Labelled data underpins tasks such as model evaluation, semantic parsing and sequence labelling, where a defined label schema drives both training and assessment.
- ### Relationships
	- requires:: [[Dataset]]
	- enables:: [[Model Evaluation]]
	- enables:: [[Semantic Parsing]]
	- enables:: [[Sequence Labelling]]
	- partOf:: [[Training Data]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
