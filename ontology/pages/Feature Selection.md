public:: true

# Feature Selection

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:feature-selection",
  "@type": "Page",
  "title": "Feature Selection",
  "vc:slug": "feature-selection",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:feature-selection",
  "@type": "Class",
  "label": "Feature Selection",
  "definition": "Feature selection is the process of identifying and retaining the subset of input variables most relevant to a predictive task while discarding redundant or uninformative ones. By reducing dimensionality it can improve model generalisation, lower computational cost, and enhance interpretability without altering the underlying feature values. Methods range from filter approaches based on statistical relevance, through wrapper approaches that evaluate subsets via model performance, to embedded approaches integrated into model training.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:feature-engineering",
      "label": "Feature Engineering"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      },
      {
        "@id": "urn:ngm:class:overfitting",
        "label": "Overfitting"
      },
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:dimensionality-reduction",
        "label": "Dimensionality Reduction"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Feature selection is the process of identifying and retaining the subset of input variables most relevant to a predictive task while discarding redundant or uninformative ones. By reducing dimensionality it can improve model generalisation, lower computational cost, and enhance interpretability without altering the underlying feature values. Methods range from filter approaches based on statistical relevance, through wrapper approaches that evaluate subsets via model performance, to embedded approaches integrated into model training.
  - Related concepts: [[Feature Engineering]] [[Dimensionality Reduction]] [[Regularisation]] [[Machine Learning Model]]
- ### Overview
  - Feature selection chooses among existing variables, in contrast to feature extraction which constructs new combined variables.
  - Filter methods rank features by univariate statistics such as correlation or mutual information independently of any model.
  - Wrapper methods search the space of feature subsets, scoring each by the performance of a model trained on it.
  - Embedded methods perform selection as a side effect of training, as with L1 regularisation driving coefficients to zero.
- ### Key aspects
  - Reduces the curse of dimensionality and mitigates [[Overfitting]] by removing noise features.
  - Improves model interpretability by yielding a smaller, more meaningful variable set.
  - Filter, wrapper, and embedded families trade off computational cost against accuracy of the selection.
  - Closely linked to [[Regularisation]], which can perform implicit selection during fitting.
  - Distinct from [[Dimensionality Reduction]] techniques that transform rather than subset features.
- ### Applications
  - Selecting predictive genes from high-dimensional genomic expression data.
  - Pruning sensor channels in time-series models to reduce inference latency.
  - Reducing feature count before training to control [[Overfitting]] on small datasets.
  - Producing interpretable models for regulated domains requiring explainable inputs.
- ### Relationships
  - subClassOf:: [[Feature Engineering]]
  - enables:: [[Dimensionality Reduction]]
  - enables:: [[Overfitting]]
  - enables:: [[Accuracy]]
  - hasPart:: [[Data Preprocessing]]
  - relatedTo:: [[Feature Engineering]]
  - relatedTo:: [[Regularisation]]
  - relatedTo:: [[Supervised Learning]]
  - supports:: [[Machine Learning Model]]
  - supports:: [[Model Training]]
  - supports:: [[Classification]]
  - requires:: [[Data Quality]]
  - requires:: [[Training Data]]
  - contrastsWith:: [[Dimensionality Reduction]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
