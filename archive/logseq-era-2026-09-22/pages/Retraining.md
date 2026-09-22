public:: true

# Retraining

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:retraining",
  "@type": "Page",
  "title": "Retraining",
  "vc:slug": "retraining",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:retraining",
  "@type": "Class",
  "label": "Retraining",
  "definition": "Retraining is the process of updating a deployed machine learning model's parameters using new or additional data, typically triggered when monitoring detects data drift or concept drift that degrades predictive performance. It may involve fine-tuning the existing model on recent data or training a fresh model from scratch on an updated dataset. Retraining cadence and triggers are core concerns of MLOps pipelines that keep production models aligned with the current data distribution.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-training",
      "label": "Model Training"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Retraining is the process of updating a deployed machine learning model's parameters using new or additional data, typically triggered when monitoring detects data drift or concept drift that degrades predictive performance. It may involve fine-tuning the existing model on recent data or training a fresh model from scratch on an updated dataset. Retraining cadence and triggers are core concerns of MLOps pipelines that keep production models aligned with the current data distribution.
	- It is a [[Model Training]] concept.
- ### Relationships
	- subClassOf:: [[Model Training]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
