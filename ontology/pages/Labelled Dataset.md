public:: true

# Labelled Dataset
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:labelled-dataset",
  "@type": "Page",
  "title": "Labelled Dataset",
  "vc:slug": "labelled-dataset",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:labelled-dataset",
  "@type": "Class",
  "label": "Labelled Dataset",
  "definition": "A labelled dataset is a collection of data examples each paired with one or more target annotations that specify the correct output for a learning task. The labels constitute the supervisory signal that allows a model to learn the mapping from inputs to outputs during training. Label quality, coverage and balance strongly determine the performance and fairness of the resulting model.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:training-data",
      "label": "Training Data"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:training-data",
        "label": "Training Data"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
      },
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
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
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      },
      {
        "@id": "urn:ngm:class:support-vector-machine",
        "label": "Support Vector Machine"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Labelled Dataset]] pairs each data example with target annotations, forming the supervisory signal for [[Supervised Learning]].
  - It is a curated form of [[Training Data]] produced through [[Data Annotation]] and [[Data Preprocessing]].
  - Its [[Data Quality]] directly bounds the achievable accuracy of [[Model Training]].
- ### Overview
  - Supervised models learn by example, so the existence and quality of labels is foundational.
  - Labelling may be manual, crowdsourced, weakly supervised or programmatically generated.
  - Annotation guidelines, inter-annotator agreement and adjudication govern label consistency.
  - Class imbalance, label noise and annotation bias propagate directly into model behaviour.
- ### Key aspects
  - Ground-truth labels define the correct output the model is trained to predict.
  - Splits into training, validation and test partitions prevent leakage and support evaluation.
  - Annotation schemas standardise the meaning and granularity of labels.
  - Quality control measures agreement and detects noisy or erroneous labels.
- ### Applications
  - Image classification and object detection from annotated images.
  - Text classification, named-entity recognition and sentiment labelling.
  - Speech transcription and acoustic model training.
  - Industrial inspection where defects are labelled for [[Classification]].
- ### Relationships
  - partOf:: [[Training Data]]
  - hasPart:: [[Data Annotation]]
  - requires:: [[Data Annotation]]
  - requires:: [[Data Preprocessing]]
  - dependsOn:: [[Data Quality]]
  - enables:: [[Supervised Learning]]
  - enables:: [[Model Training]]
  - supports:: [[Classification]]
  - supports:: [[Model Evaluation]]
  - uses:: [[Machine Learning]]
  - relatedTo:: [[Feature Engineering]]
  - relatedTo:: [[Support Vector Machine]]
- ### Provenance
  - updated:: 2026-06-15
