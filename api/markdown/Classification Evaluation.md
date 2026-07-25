public:: true

# Classification Evaluation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:classification-evaluation", "@type":"Page", "title":"Classification Evaluation", "vc:slug":"classification-evaluation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v2.jsonld", "@id": "urn:ngm:class:classification-evaluation", "@type": "Class", "label": "Classification Evaluation", "definition": "Classification evaluation is the set of methods used to quantify how well a classifier's predicted labels match ground-truth labels, typically summarised through metrics derived from a confusion matrix such as precision, recall, and F1 score. It distinguishes between overall accuracy, which can be misleading under class imbalance, and per-class metrics that expose asymmetric error costs. Classification evaluation guides model selection, threshold tuning, and reporting of deployed classifier performance.", "domain": "machine-learning", "maturity": "mature", "subClassOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}], "relations": {"partOf": [{"@id": "urn:ngm:class:evaluation-metric", "label": "Evaluation Metric"}]}, "sameAs": [], "quality": 0.55, "provenance": {"attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-07-25T00:00:00Z", "inferenceRule": "GapMaterialisation"}}
```

- ### Definition
	- Classification evaluation is the set of methods used to quantify how well a classifier's predicted labels match ground-truth labels, typically summarised through metrics derived from a confusion matrix such as precision, recall, and F1 score. It distinguishes between overall accuracy, which can be misleading under class imbalance, and per-class metrics that expose asymmetric error costs. Classification evaluation guides model selection, threshold tuning, and reporting of deployed classifier performance.
- ### Relationships
	- subClassOf:: [[Evaluation Metric]]
	- partOf:: [[Evaluation Metric]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
