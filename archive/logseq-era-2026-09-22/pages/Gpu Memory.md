public:: true

# Gpu Memory

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gpu-memory",
  "@type": "Page",
  "title": "Gpu Memory",
  "vc:slug": "gpu-memory",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-memory",
  "@type": "Class",
  "label": "Gpu Memory",
  "definition": "GPU memory is the high-bandwidth memory resident on or tightly coupled to a graphics processing unit that stores model weights, activations, gradients, and intermediate buffers during computation. Its capacity and bandwidth are frequently the binding constraint on the size of models that can be trained or served, motivating techniques such as quantisation, gradient checkpointing, and model parallelism. Efficient use of GPU memory directly determines achievable throughput and batch size.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gpu",
      "label": "GPU"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:high-bandwidth-memory",
        "label": "High Bandwidth Memory"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:memory-management",
        "label": "Memory Management"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      },
      {
        "@id": "urn:ngm:class:neural-network-training",
        "label": "Neural Network Training"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-parallelism",
        "label": "Model Parallelism"
      },
      {
        "@id": "urn:ngm:class:batch-size",
        "label": "Batch Size"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:memory-management",
        "label": "Memory Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:gradient-checkpointing",
        "label": "Gradient Checkpointing"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:tensor",
        "label": "Tensor"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:vram",
      "label": "VRAM"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - GPU memory is the high-bandwidth memory resident on or tightly coupled to a graphics processing unit that stores model weights, activations, gradients, and intermediate buffers during computation. Its capacity and bandwidth are frequently the binding constraint on the size of models that can be trained or served, motivating techniques such as quantisation, gradient checkpointing, and model parallelism. Efficient use of GPU memory directly determines achievable throughput and batch size.
  - [[GPU]] [[High Bandwidth Memory]] [[Model Training]] [[Memory Management]]
- ### Overview
  - GPU memory holds the tensors a neural network needs during forward and backward passes, including weights, activations, and optimiser state.
  - Capacity limits cap model and batch size, while bandwidth limits how fast data can feed the compute cores.
  - Memory pressure is a primary driver of efficiency techniques across both training and inference.
- ### Key aspects
  - Capacity (in gigabytes) bounds the largest model and batch that fit on a device.
  - Bandwidth determines how quickly tensors move between memory and compute units.
  - Memory fragmentation and allocation strategy affect usable capacity in practice.
  - Activation, weight, and optimiser-state footprints each contribute to total consumption.
- ### Applications
  - Training large language models where weights and activations dominate memory use.
  - Serving inference with techniques like quantisation to fit larger models on commodity GPUs.
  - Scaling across devices with model and tensor parallelism when a single GPU is insufficient.
- ### Relationships
  - partOf:: [[GPU]]
  - dependsOn:: [[High Bandwidth Memory]]
  - dependsOn:: [[Memory Bandwidth]]
  - requires:: [[Memory Management]]
  - requires:: [[GPU]]
  - enables:: [[Model Training]]
  - enables:: [[Neural Network Training]]
  - supports:: [[Model Parallelism]]
  - supports:: [[Batch Size]]
  - uses:: [[Memory Management]]
  - relatedTo:: [[Gradient Checkpointing]]
  - relatedTo:: [[Quantisation]]
  - relatedTo:: [[CUDA]]
  - relatedTo:: [[Tensor]]
  - contrastsWith:: [[Memory Bandwidth]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
