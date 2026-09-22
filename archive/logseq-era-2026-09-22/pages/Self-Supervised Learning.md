public:: true
alias:: SelfSupervisedLearning

# Self-Supervised Learning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:self-supervised-learning",
  "@type": "Page",
  "vc:slug": "self-supervised-learning",
  "title": "Self-Supervised Learning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:self-supervised-learning",
  "@type": "Class",
  "label": "Self-Supervised Learning",
  "definition": "Self-Supervised Learning (SSL) is a machine learning paradigm in which a model learns rich representations of data by solving pretext tasks whose supervisory signal is derived automatically from the input data itself, requiring no human-provided labels. The model learns to predict masked or hidden portions of an input, to match different views of the same data, or to distinguish positive from negative data pairs, developing features that transfer effectively to downstream supervised tasks with limited labelled data. Self-supervised learning has become the dominant pre-training strategy for large language models, visual foundation models, and multimodal systems, enabling training at scales that would be infeasible with manually annotated datasets.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:machine-learning-discipline-technique",
    "label": "Machine Learning Technique"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:masked-language-modelling",
        "label": "Masked Language Modelling"
      },
      {
        "@id": "urn:ngm:class:contrastive-learning",
        "label": "Contrastive Learning"
      },
      {
        "@id": "urn:ngm:class:masked-image-modelling",
        "label": "Masked Image Modelling"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:representation-learning",
        "label": "Representation Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-scale-pretrained-foundation-model",
        "label": "Large-Scale Pretrained Foundation Model"
      },
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:transfer-learning",
        "label": "Transfer Learning"
      },
      {
        "@id": "urn:ngm:class:zero-shot-learning",
        "label": "Zero-Shot Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:data-augmentation",
        "label": "Data Augmentation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:pretrained-model",
        "label": "Pretrained Model"
      },
      {
        "@id": "urn:ngm:class:encoder-decoder-architecture",
        "label": "Encoder Decoder Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:unsupervised-learning",
        "label": "Unsupervised Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:semi-supervised-learning",
        "label": "Semi-Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-learning",
        "label": "Multimodal Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robotics-perception",
        "label": "Robotics Perception"
      },
      {
        "@id": "urn:ngm:class:spatial-ai",
        "label": "Spatial AI"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ssl",
      "label": "SSL"
    },
    {
      "@id": "urn:ngm:class:predictive-self-supervised-learning",
      "label": "Predictive Self-Supervised Learning"
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
  - Self-Supervised Learning is a [[Machine Learning Technique]] that generates supervisory signal directly from unlabelled data through pretext tasks, enabling [[Transformer Architecture]] models to learn transferable representations at scale without human annotation, forming the foundation of modern [[Large-Scale Pretrained Foundation Model]].

- ### Relationships
  - Self-Supervised Learning is closely related to [[Unsupervised Learning]] (from which it evolved) and [[Semi-Supervised Learning]] (with which it is often combined for fine-tuning). [[Contrastive Learning]] is a major sub-family of self-supervised methods, learning representations by attracting embeddings of similar views whilst repelling dissimilar ones. The paradigm is implemented predominantly using [[Transformer Architecture]] models that process masked or augmented inputs. [[Pretrained Model]] artefacts resulting from self-supervised pre-training underpin the [[Large-Scale Pretrained Foundation Model]] paradigm and are subsequently adapted via [[Parameter-Efficient Fine-Tuning]] to specific tasks. The entire modern [[Deep Learning]] ecosystem for language, vision, and multimodal understanding is built on self-supervised pre-training as the primary learning strategy.

- ### Content
  - The conceptual roots of self-supervised learning lie in the observation that raw, unlabelled data already contains rich structural information that a model can learn to predict. Early applications included word2vec (2013), which trained word embeddings by predicting context words from a target word or vice versa. However, the term "self-supervised learning" was popularised by Yann LeCun around 2018 as he advocated for it as the path toward human-level AI, arguing that humans and animals learn primarily through self-supervised interaction with the world rather than labelled instruction.

  - Language modelling is the most successful application of self-supervised learning. The BERT model (2018) introduced masked language modelling: tokens in an input sentence are randomly replaced with a [MASK] token, and the model is trained to predict the original tokens from their context. GPT-series models use causal (autoregressive) language modelling, predicting each next token given all preceding tokens. Both approaches produce representations that capture syntactic and semantic structure of language without any labelled training data, and both can be fine-tuned to achieve state-of-the-art performance on a wide range of downstream NLP tasks.

  - In computer vision, self-supervised learning techniques have closed the gap with supervised pre-training on ImageNet. Contrastive methods such as SimCLR and MoCo learn by generating two augmented views of each image and training an encoder to produce similar representations for the two views whilst dissimilar representations for different images. Masked image modelling approaches such as MAE (Masked Autoencoder) borrow the language modelling masking strategy, masking patches of an image and training a ViT encoder-decoder to reconstruct the masked pixels.

  - The success of self-supervised pre-training for text has been extended to multimodal settings. CLIP (Contrastive Language-Image Pre-Training) uses natural language descriptions paired with images as free training signal, training image and text encoders to align their representations through contrastive loss. This produces an image encoder with zero-shot classification capability and has become a widely used backbone for vision-language models.

  - Self-supervised learning raises interesting theoretical questions about what representations are learned and why they transfer. Recent work has connected self-supervised objectives to information-theoretic frameworks, showing that good pretext tasks are those that maximise mutual information between learned representations and task-relevant features whilst discarding irrelevant variation. This perspective informs the design of new pretext tasks for emerging modalities including audio, video, point clouds, and biological sequence data.
