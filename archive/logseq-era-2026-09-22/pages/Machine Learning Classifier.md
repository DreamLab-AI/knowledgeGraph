public:: true

# Machine Learning Classifier

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:machine-learning-classifier", "@type": "Page", "title": "Machine Learning Classifier", "vc:slug": "machine-learning-classifier", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:machine-learning-classifier",
  "@type": "Class",
  "label": "Machine Learning Classifier",
  "definition": "A machine learning classifier is a supervised learning model trained to assign an input to one of a discrete set of predefined categories, based on patterns learned from labelled training examples. Implementations range from logistic regression and decision trees to deep neural networks, selected according to data volume, interpretability needs and accuracy requirements. Classifiers are deployed in screening and enforcement pipelines that must flag entities matching a target category, such as sanctions screening.",
  "domain": "machine-learning",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supervised-learning",
      "label": "Supervised Learning"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [],
    "requires": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [],
    "supports": []
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
	- A machine learning classifier is a supervised learning model trained to assign an input to one of a discrete set of predefined categories, based on patterns learned from labelled training examples. Implementations range from logistic regression and decision trees to deep neural networks, selected according to data volume, interpretability needs and accuracy requirements. Classifiers are deployed in screening and enforcement pipelines that must flag entities matching a target category, such as sanctions screening.
- ### Relationships
	- requires:: [[Supervised Learning]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
