public:: true

# Pruning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pruning", "@type":"Page", "title":"Pruning", "vc:slug":"pruning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pruning",
  "@type": "Class",
  "label": "Pruning",
  "definition": "Pruning is a model compression technique that removes redundant or low-importance parameters from a neural network to reduce its size and computational cost while preserving accuracy. It ranges from unstructured pruning of individual weights to structured pruning of whole neurons, channels or attention heads. Pruned models are typically fine-tuned to recover any lost accuracy and can be deployed with lower memory and latency.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-compression",
      "label": "Model Compression"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:model-weights",
        "label": "Model Weights"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      },
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
      },
      {
        "@id": "urn:ngm:class:on-device-ai",
        "label": "On-Device AI"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:tiny-ml",
        "label": "TinyML"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-quantization",
        "label": "Model Quantization"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu-memory",
        "label": "GPU Memory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
        "label": "Parameter-Efficient Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:model-optimisation-and-performance",
        "label": "Model Optimisation and Performance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
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
- Pruning is a [[Model Compression]] technique that removes redundant or low-importance parameters from a [[Neural Network]] to reduce its size and computational cost while preserving accuracy.
- It spans unstructured pruning of individual [[Model Weights]] and structured pruning of whole neurons, channels or attention heads.
- Pruned models are usually fine-tuned to recover any lost accuracy.
- The result is lower memory and latency, aiding deployment to constrained targets such as [[Edge AI]].
- ### Overview
- Trained neural networks are typically over-parameterised, containing many weights that contribute little to predictions. Pruning exploits this redundancy to shrink the model.
- Unstructured pruning zeroes out individual weights according to importance criteria such as magnitude, yielding sparse matrices that need specialised kernels to accelerate.
- Structured pruning removes entire structural units such as channels, filters, neurons or attention heads, producing a dense smaller model that runs faster on standard hardware without custom sparse support.
- Pruning is commonly iterative: prune a fraction, fine-tune to recover accuracy, and repeat, often guided by schedules that gradually increase sparsity.
- ### Key aspects
- Importance scoring of weights or structures.
- Unstructured versus structured granularity.
- Sparsity level and the accuracy-efficiency trade-off.
- Fine-tuning or retraining to restore performance.
- Hardware support required to realise speed-ups from sparsity.
- ### Mechanisms
- Magnitude-based and gradient-based importance criteria.
- One-shot versus iterative prune-and-fine-tune schedules.
- The lottery-ticket hypothesis and sparse subnetwork discovery.
- Combination with quantisation and distillation for compound compression.
- ### Applications
- Compressing large language models for cheaper inference.
- Deploying vision and speech models on edge and mobile devices.
- Reducing energy and memory footprint in production serving.
- Enabling TinyML on microcontrollers and embedded hardware.
- ### Relationships
- hasPart:: [[Model Weights]]
- partOf:: [[Model Compression]]
- supports:: [[Inference]]
- supports:: [[Edge AI]]
- supports:: [[On-Device AI]]
- requires:: [[Neural Network]]
- enables:: [[Model Deployment]]
- enables:: [[TinyML]]
- contrastsWith:: [[Model Quantization]]
- contrastsWith:: [[Knowledge Distillation]]
- uses:: [[GPU Memory]]
- relatedTo:: [[Quantisation]]
- relatedTo:: [[Parameter-Efficient Fine-Tuning]]
- relatedTo:: [[Model Optimisation and Performance]]
- bridgesTo:: [[Large Language Model]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
