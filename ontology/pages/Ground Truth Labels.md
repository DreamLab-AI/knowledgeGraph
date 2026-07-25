public:: true

# Ground Truth Labels

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ground-truth-labels",
  "@type": "Page",
  "title": "Ground Truth Labels",
  "vc:slug": "ground-truth-labels",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ground-truth-labels",
  "@type": "Class",
  "label": "Ground Truth Labels",
  "definition": "Ground truth labels are the authoritative, human-verified or empirically observed target values assigned to data instances, used to train and evaluate supervised machine-learning models. They represent the correct answer against which model predictions are compared, forming the basis for loss computation during training and accuracy measurement during evaluation. The quality, consistency, and coverage of ground truth labels directly bound the performance a learned model can achieve.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-annotation",
      "label": "Data Annotation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:accuracy",
        "label": "Accuracy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      },
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
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
  - Ground truth labels are the authoritative, human-verified or empirically observed target values assigned to data instances, used to train and evaluate supervised machine-learning models. They represent the correct answer against which model predictions are compared, forming the basis for loss computation during training and accuracy measurement during evaluation. The quality, consistency, and coverage of ground truth labels directly bound the performance a learned model can achieve.
  - Related concepts: [[Data Annotation]] [[Supervised Learning]] [[Training Data]] [[Data Quality]]
- ### Overview
  - Ground truth labels anchor supervised learning: the model adjusts its parameters to minimise the discrepancy between its predictions and these reference values.
  - Labels may derive from expert human annotation, crowd-sourced consensus, instrumented measurement, or downstream business outcomes treated as targets.
  - Label noise, ambiguity, and class imbalance propagate directly into model behaviour, so labelling protocols and inter-annotator agreement are treated as first-class quality concerns.
- ### Key aspects
  - Labels can be categorical for [[Classification]] or continuous for [[Regression]] tasks.
  - Annotation guidelines define how edge cases are resolved to keep labels consistent across annotators.
  - Inter-annotator agreement metrics quantify labelling reliability.
  - Held-out labelled examples form the basis of evaluation against [[Accuracy]] and related metrics.
  - Active learning prioritises which unlabelled instances most benefit from acquiring ground truth.
- ### Applications
  - Training image classifiers where each image carries a verified category label.
  - Building evaluation benchmarks that score competing models on a common labelled set.
  - Fine-tuning [[Deep Learning]] models on domain-specific labelled corpora.
  - Measuring [[Data Quality]] regressions by re-auditing label correctness over time.
- ### Relationships
  - subClassOf:: [[Data Annotation]]
  - requires:: [[Data Annotation]]
  - requires:: [[Data Quality]]
  - requires:: [[Training Data]]
  - enables:: [[Supervised Learning]]
  - enables:: [[Model Training]]
  - enables:: [[Classification]]
  - enables:: [[Accuracy]]
  - supports:: [[Machine Learning Model]]
  - supports:: [[Deep Learning]]
  - relatedTo:: [[Data Preprocessing]]
  - relatedTo:: [[Regression]]
  - partOf:: [[Training Data]]
  - uses:: [[Data Annotation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
