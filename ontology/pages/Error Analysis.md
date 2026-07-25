public:: true

# Error Analysis

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:error-analysis", "@type": "Page", "title": "Error Analysis", "vc:slug": "error-analysis", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:error-analysis",
  "@type": "Class",
  "label": "Error Analysis",
  "definition": "Error analysis is the systematic examination of a model's mistakes to identify patterns, root causes and subgroups where performance is weakest. It typically involves inspecting misclassified examples, confusion matrices and numerical error metrics to distinguish data issues from modelling issues. The findings guide targeted fixes such as additional training data, feature changes or architectural adjustments.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      }
    ],
    "requires": [],
    "enables": [
      {
        "@id": "urn:ngm:class:model-debugging",
        "label": "Model Debugging"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
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
	- Error analysis is the systematic examination of a model's mistakes to identify patterns, root causes and subgroups where performance is weakest. It typically involves inspecting misclassified examples, confusion matrices and numerical error metrics to distinguish data issues from modelling issues. The findings guide targeted fixes such as additional training data, feature changes or architectural adjustments.
- ### Relationships
	- uses:: [[Confusion Matrix]]
	- enables:: [[Model Debugging]]
	- partOf:: [[Model Evaluation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
