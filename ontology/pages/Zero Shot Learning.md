public:: true

# Zero Shot Learning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:zero-shot-learning", "@type":"Page", "title":"Zero Shot Learning", "vc:slug":"zero-shot-learning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zero-shot-learning",
  "@type": "Class",
  "label": "Zero Shot Learning",
  "definition": "Zero-shot learning is a machine-learning setting in which a model performs a task on classes or instances it has never seen during training, generalising from auxiliary information such as semantic attributes, natural-language descriptions or a shared embedding space. Modern instances exploit large pre-trained language and vision-language models that align inputs and labels in a common representation, enabling prediction by similarity rather than by fitting task-specific examples. It contrasts with few-shot and supervised learning by requiring no labelled examples of the target classes.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transfer-learning",
      "label": "Transfer Learning"
    },
    {
      "@id": "urn:ngm:class:meta-learning",
      "label": "Meta-Learning"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:image-classification",
        "label": "Image Classification"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Representation Learning"
      },
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding"
      },
      {
        "@id": "urn:ngm:class:clip",
        "label": "CLIP"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:meta-learning",
        "label": "Meta-Learning"
      },
      {
        "@id": "urn:ngm:class:knowledge-transfer",
        "label": "Knowledge Transfer"
      },
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Representation Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - [[Zero Shot Learning]] lets a model handle classes it never saw in training by reasoning over [[Representation Learning|semantic representations]], shared [[Embedding|embeddings]] and natural-language descriptions, as exemplified by [[CLIP]] and modern [[Large Language Model|large language models]].
  - It contrasts with [[Few-Shot Learning]] and [[Supervised Learning]], which require labelled target examples.
- ### Overview
  - Classical zero-shot learning maps inputs and class labels into a shared semantic space defined by human-authored attributes, so an unseen class can be recognised by its attribute signature.
  - Embedding-based methods learn a joint space where image or text inputs lie near the representation of their correct label, enabling nearest-label prediction for novel categories.
  - Vision-language models trained on large image-text corpora perform open-vocabulary classification by comparing an image embedding to embeddings of arbitrary textual class names.
  - Instruction-tuned language models perform zero-shot tasks by following a natural-language prompt without task-specific fine-tuning.
- ### Key aspects
  - Auxiliary semantic information bridges seen and unseen classes.
  - A shared embedding space supports similarity-based inference.
  - Generalised zero-shot evaluation tests both seen and unseen classes jointly.
  - Performance depends on the quality and coverage of the pre-trained representation.
- ### Applications
  - Open-vocabulary image and object classification.
  - Cross-lingual and cross-domain text classification and intent detection.
  - Rapid prototyping where labelled data for target classes is unavailable.
  - Retrieval and tagging over previously unseen concept sets.
- ### Relationships
  - enables:: [[Image Classification]]
  - enables:: [[Natural Language Processing]]
  - enables:: [[Classification]]
  - uses:: [[Representation Learning]]
  - uses:: [[Embedding]]
  - uses:: [[CLIP]]
  - uses:: [[Large Language Model]]
  - dependsOn:: [[Transfer Learning]]
  - supports:: [[Domain Adaptation]]
  - contrastsWith:: [[Few-Shot Learning]]
  - contrastsWith:: [[Supervised Learning]]
  - relatedTo:: [[Meta-Learning]]
  - relatedTo:: [[Knowledge Transfer]]
  - relatedTo:: [[Representation Learning]]
  - bridgesTo:: [[Machine Learning]]
- ### Provenance
  - updated:: 2026-06-15
