public:: true

# Machine Learning Model (Artefact)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:49fa12d288fd53d773ed3df3c4a062543704cbcd8bec6d27a3a7a1b20e7f8f39",
  "@type": "Page",
  "vc:slug": "machine-learning-model",
  "title": "Machine Learning Model (Artefact)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:supervised-learning",
      "vc:label": "Supervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:feature-selection",
      "vc:label": "Feature Selection"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:machine-learning-model",
  "@type": "Class",
  "label": "Machine Learning Model (Artefact)",
  "definition": "The trained artefact produced by a machine learning pipeline: a parameterised function — such as a decision tree ensemble, support vector machine or neural network — whose weights have been fitted to data by an optimisation procedure, and which maps new inputs to predictions, classifications, rankings or generated content; the unit that is evaluated, selected, versioned, deployed, monitored and eventually retrained or retired in production systems.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:machine-learning",
    "label": "Machine Learning"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:feature-selection",
        "label": "Feature Selection"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The trained artefact produced by a machine learning pipeline: a parameterised function — such as a decision tree ensemble, support vector machine or neural network — whose weights have been fitted to data by an optimisation procedure, and which maps new inputs to predictions, classifications, rankings or generated content; the unit that is evaluated, selected, versioned, deployed, monitored and eventually retrained or retired in production systems."

- ### Semantic Classification
  - owl-class:: machine-learning:MachineLearningModel
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Machine Learning]]
  - uses:: [[Supervised Learning]]
  - depends-on:: [[Feature Selection]]
  - related-to:: [[Neural Network]]

- ### Content

  ## Definition

  A **machine learning model** is the concrete output of training: a function with learned parameters that generalises from observed data to unseen inputs. The term covers everything from a logistic regression with a handful of coefficients to a transformer with hundreds of billions of weights. What unites them is the workflow around the artefact — a hypothesis class is chosen, parameters are fitted by minimising a loss over training data, generalisation is estimated on held-out data, and the frozen result is packaged for inference. The model is distinct from the algorithm that produced it (gradient descent, boosting) and from the system that serves it, a distinction that matters for versioning, reproducibility and governance.

  The lifecycle of a model is the organising spine of applied machine learning. Upstream, data preparation, ground-truth labelling and [[Feature Selection]] determine what signal is available to fit; model selection and hyperparameter search compare candidate artefacts; threshold optimisation tunes the mapping from scores to decisions. Downstream, the model is serialised (ONNX, SavedModel, safetensors), deployed to servers or edge devices — often after quantisation or distillation to meet latency and memory budgets — and monitored for data drift, performance decay and fairness regressions. Model cards and registries document provenance, intended use and known limitations, requirements that regulation increasingly makes mandatory for high-risk applications.

  In this graph the class acts as the hub that evaluation, debugging, selection and deployment concepts attach to: pages on generalisation, cross-validation, principal component analysis and edge deployment all describe operations performed on or for a machine learning model.

  ## Technical Details

  Models are usefully classified along three axes. By learning paradigm: supervised (classification, regression), unsupervised (clustering, dimensionality reduction), self-supervised and reinforcement-learned. By hypothesis class: linear models, kernel machines, tree ensembles (random forests, gradient-boosted trees), probabilistic graphical models and neural networks, with deep architectures dominating perception and language tasks while gradient boosting remains highly competitive on tabular data. By parametric character: parametric models with a fixed weight count versus non-parametric methods such as k-nearest neighbours whose effective capacity grows with the data. Key evaluation quantities — bias-variance trade-off, calibration, out-of-distribution robustness — are properties of the trained artefact rather than of the algorithm, which is why rigorous practice always distinguishes the two.
