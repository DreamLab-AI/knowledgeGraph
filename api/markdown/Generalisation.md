public:: true

# Generalisation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:generalisation", "@type":"Page", "title":"Generalisation", "vc:slug":"generalisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:generalisation",
  "@type":"Class",
  "label":"Generalisation",
  "definition":"Generalisation is the capacity of a machine-learning model to perform accurately on previously unseen data drawn from the same distribution as its training set, rather than merely memorising training examples. It is the central objective of supervised learning and is quantified by the gap between training and held-out performance. Good generalisation reflects a model that has captured the underlying regularities of a task instead of spurious correlations.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},{"@id":"urn:ngm:class:ai-research-area","label":"AI Research Area"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:transfer-learning","label":"Transfer Learning"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:overfitting","label":"Overfitting"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:training-data","label":"Training Data"},
      {"@id":"urn:ngm:class:inductive-bias","label":"Inductive Bias"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:regularisation","label":"Regularisation"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:cross-validation","label":"Cross-Validation"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}
    ],
    "measuredBy":[
      {"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:machine-learning-model","label":"Machine Learning Model"},
      {"@id":"urn:ngm:class:model-performance","label":"Model Performance"}
    ],
    "improvedBy":[
      {"@id":"urn:ngm:class:regularisation","label":"Regularisation"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:transfer-learning","label":"Transfer Learning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - Generalisation is a [[Machine Learning]] model's ability to perform on unseen data drawn from the training distribution, rather than memorising examples.
  - It is the primary objective of learning and is the direct opposite of [[Overfitting]].
  - It depends on appropriate [[Inductive Bias]] and is promoted through [[Regularisation]].
- ### Overview
  - A model that generalises well achieves a small gap between training error and held-out (test) error.
  - The bias-variance trade-off frames generalisation: too little capacity underfits, too much overfits, and the sweet spot minimises expected error on new data.
  - Statistical learning theory bounds generalisation error in terms of hypothesis-class complexity and sample size; modern over-parameterised networks complicate this classical picture.
  - Distribution shift breaks the assumption that test data matches training data, motivating robustness and domain-adaptation research.
- ### Key aspects
  - Measurement: estimated using held-out validation sets and [[Cross-Validation]].
  - Control: regularisation, early stopping, data augmentation, and capacity tuning narrow the generalisation gap.
  - Inductive bias: architectural and prior assumptions steer the model toward solutions that transfer.
  - Sample efficiency: how much data is needed to reach a target generalisation level.
- ### Applications
  - Selecting and tuning models so they deploy reliably on real-world inputs.
  - Enabling [[Transfer Learning]], where representations learned on one task generalise to related tasks.
  - Benchmarking and comparing models through evaluation on unseen test distributions.
- ### Relationships
  - enables:: [[Transfer Learning]]
  - contrastsWith:: [[Overfitting]]
  - dependsOn:: [[Training Data]]
  - dependsOn:: [[Inductive Bias]]
  - requires:: [[Regularisation]]
  - uses:: [[Cross-Validation]]
  - supports:: [[Model Evaluation]]
  - measuredBy:: [[Model Evaluation]]
  - relatedTo:: [[Machine Learning Model]]
  - relatedTo:: [[Model Performance]]
  - improvedBy:: [[Regularisation]]
  - bridgesTo:: [[Transfer Learning]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
