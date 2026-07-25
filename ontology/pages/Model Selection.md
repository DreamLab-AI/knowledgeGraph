public:: true

# Model Selection
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-selection", "@type":"Page", "title":"Model Selection", "vc:slug":"model-selection", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:model-selection",
  "@type":"Class",
  "label":"Model Selection",
  "definition":"Model selection is the process of choosing the most appropriate machine learning model, algorithm family, or configuration for a given task from a set of candidates. It balances predictive performance against constraints such as interpretability, inference cost, and generalisation, typically using validation data and metrics rather than the training error. Techniques include cross-validation, information criteria, and held-out benchmarking, with the goal of selecting the model expected to perform best on unseen data.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:cross-validation","label":"Cross-Validation"},
      {"@id":"urn:ngm:class:benchmarking","label":"Benchmarking"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:model-performance","label":"Model Performance"},
      {"@id":"urn:ngm:class:generalisation","label":"Generalisation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:hyperparameter-tuning","label":"Hyperparameter Tuning"},
      {"@id":"urn:ngm:class:accuracy","label":"Accuracy"},
      {"@id":"urn:ngm:class:auc","label":"AUC"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:model-deployment","label":"Model Deployment"},
      {"@id":"urn:ngm:class:model-comparison","label":"Model Comparison"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:machine-learning-model","label":"Machine Learning Model"},
      {"@id":"urn:ngm:class:feature-engineering","label":"Feature Engineering"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:overfitting","label":"Overfitting"},
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Model selection chooses the best [[Machine Learning Model]] or configuration for a task from candidate options.
	- It is a stage of [[Model Evaluation]] that relies on [[Cross-Validation]] and [[Benchmarking]].
	- The objective is the model expected to generalise best, not the one that minimises training error.
- ### Overview
	- Many algorithms and configurations can fit the same data; selection picks the one that performs best on unseen examples.
	- Validation strategies estimate out-of-sample performance to avoid optimistic bias from the training set.
	- The choice trades off accuracy against interpretability, latency, and operational cost.
	- Selection is often interleaved with hyperparameter tuning, producing a joint search over models and settings.
- ### Key aspects
	- Cross-validation provides robust performance estimates under limited data.
	- Information criteria penalise complexity to discourage overfitting.
	- Held-out and nested validation prevent leakage when tuning and selecting jointly.
	- Multi-objective selection weighs accuracy against deployment constraints.
- ### Applications
	- Choosing between algorithm families for a tabular prediction task.
	- Selecting a pretrained backbone for transfer learning.
	- Picking the smallest model meeting an accuracy threshold for edge deployment.
	- Automated machine learning pipelines that search over models and configurations.
- ### Relationships
	- subClassOf:: [[Model Evaluation]]
	- partOf:: [[Model Evaluation]]
	- partOf:: [[Machine Learning]]
	- requires:: [[Cross-Validation]]
	- requires:: [[Benchmarking]]
	- dependsOn:: [[Model Performance]]
	- dependsOn:: [[Generalisation]]
	- uses:: [[Hyperparameter Tuning]]
	- uses:: [[Accuracy]]
	- uses:: [[AUC]]
	- enables:: [[Model Deployment]]
	- enables:: [[Model Comparison]]
	- supports:: [[Machine Learning Model]]
	- supports:: [[Feature Engineering]]
	- relatedTo:: [[Overfitting]]
	- relatedTo:: [[Deep Learning]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
