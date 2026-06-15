public:: true

# Post Training Quantisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:post-training-quantisation",
  "@type": "Page",
  "title": "Post Training Quantisation",
  "vc:slug": "post-training-quantisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:post-training-quantisation",
  "@type": "Class",
  "label": "Post Training Quantisation",
  "definition": "Post-training quantisation (PTQ) converts a trained full-precision neural network to a lower-precision representation, typically 8-bit integers, without re-running the original training loop. A small calibration dataset is used to estimate the dynamic range of activations so that scale and zero-point parameters can be chosen. PTQ trades a small, usually recoverable, drop in accuracy for substantial reductions in model size and inference cost.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:quantisation",
      "label": "Quantisation"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:neural-network-quantisation",
        "label": "Neural Network Quantisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:on-device-inference",
        "label": "On-Device Inference"
      },
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:inference-compute",
        "label": "Inference Compute"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      },
      {
        "@id": "urn:ngm:class:model-pruning-for-edge-deployment",
        "label": "Model Pruning for Edge Deployment"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-compression-for-edge",
        "label": "Model Compression for Edge"
      },
      {
        "@id": "urn:ngm:class:model-quantization",
        "label": "Model Quantization"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:deep-neural-network",
        "label": "Deep Neural Network"
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
  - Post-training quantisation (PTQ) converts a trained full-precision neural network to a lower-precision representation, typically 8-bit integers, without re-running the original training loop. A small calibration dataset is used to estimate the dynamic range of activations so that scale and zero-point parameters can be chosen. PTQ trades a small, usually recoverable, drop in accuracy for substantial reductions in model size and inference cost.
  - Related concepts: [[Quantisation]] [[Neural Network Quantisation]] [[Calibration]] [[Model Compression]] [[On-Device Inference]]
- ### Overview
  - PTQ operates on a frozen, already-trained model. A representative calibration set is passed through the network to record the statistical range of each tensor; from these ranges the quantiser derives per-tensor or per-channel scale and zero-point values that map floating-point values onto an integer grid. Because no gradient updates are performed, PTQ is fast and requires no labelled data beyond calibration, distinguishing it from quantisation-aware training.
- ### Mechanisms
  - Calibration-set range estimation for activations
  - Per-tensor versus per-channel scaling
  - Symmetric and asymmetric integer mapping
  - INT8 and lower bit-width weight encoding
  - Accuracy-recovery techniques such as bias correction
- ### Applications
  - Shrinking large language models for commodity GPUs
  - Deploying vision models on mobile and embedded NPUs
  - Reducing inference cost in high-throughput serving
  - Preparing models for INT8 acceleration on edge silicon
- ### Relationships
  - subClassOf:: [[Quantisation]]
  - implements:: [[Quantisation]]
  - implements:: [[Neural Network Quantisation]]
  - requires:: [[Calibration]]
  - requires:: [[Neural Network]]
  - hasPart:: [[Calibration]]
  - partOf:: [[Model Compression]]
  - enables:: [[On-Device Inference]]
  - enables:: [[Edge Inference]]
  - uses:: [[Calibration]]
  - supports:: [[Model Deployment]]
  - supports:: [[Inference Compute]]
  - contrastsWith:: [[Knowledge Distillation]]
  - contrastsWith:: [[Model Pruning for Edge Deployment]]
  - relatedTo:: [[Model Compression for Edge]]
  - relatedTo:: [[Model Quantization]]
  - dependsOn:: [[Deep Neural Network]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
