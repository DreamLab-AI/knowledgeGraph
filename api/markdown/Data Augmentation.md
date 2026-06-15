public:: true

# Data Augmentation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:data-augmentation",
  "@type": "Page",
  "vc:slug": "data-augmentation",
  "title": "Data Augmentation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-augmentation",
  "@type": "Class",
  "label": "Data Augmentation",
  "definition": "Data augmentation is a machine learning technique that expands a training dataset by applying label-preserving transformations or synthesising new examples from existing data. Typical methods include geometric and photometric image transforms, noise injection, and generative model sampling such as GAN-produced samples. It improves model generalisation and robustness, mitigating overfitting when labelled data is scarce.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline-technique",
      "label": "Machine Learning Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:coordinate-transformation",
        "label": "Geometric Transformation"
      },
      {
        "@id": "urn:ngm:class:noise-injection",
        "label": "Noise Injection"
      },
      {
        "@id": "urn:ngm:class:mixup",
        "label": "Mixup Augmentation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:training-dataset",
        "label": "Training Dataset"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-generalisation",
        "label": "Model Generalisation"
      },
      {
        "@id": "urn:ngm:class:overfitting-prevention",
        "label": "Overfitting Prevention"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:training-pipeline",
        "label": "Training Pipeline"
      },
      {
        "@id": "urn:ngm:class:data-preprocessing",
        "label": "Data Preprocessing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:synthetic-data-generator",
        "label": "Synthetic Data Generator"
      },
      {
        "@id": "urn:ngm:class:generative-adversarial-networks",
        "label": "Generative Adversarial Networks"
      },
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:semi-supervised-learning",
        "label": "Semi-Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-collection",
        "label": "Data Collection"
      },
      {
        "@id": "urn:ngm:class:active-learning",
        "label": "Active Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:training-data-augmentation",
      "label": "Training Data Augmentation"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Data augmentation enlarges a training set with label-preserving transformations or generated samples, often using a [[Synthetic Data Generator]] or [[Generative Adversarial Networks]] to improve model generalisation.
- ### Content
  - Classic augmentation applies transforms such as rotation, cropping, colour jitter and noise that preserve semantic labels, while generative approaches synthesise entirely new plausible examples. By exposing models to greater variation, augmentation reduces overfitting and improves performance on limited or imbalanced datasets.
