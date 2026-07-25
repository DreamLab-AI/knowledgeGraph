public:: true

# Bfloat16

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:bfloat16", "@type":"Page", "title":"Bfloat16", "vc:slug":"bfloat16", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bfloat16",
  "@type": "Class",
  "label": "Bfloat16",
  "definition": "Bfloat16 (brain floating point) is a 16-bit floating-point format that keeps the same 8-bit exponent as 32-bit IEEE float but truncates the mantissa to 7 bits. It preserves the dynamic range of single precision while halving memory and bandwidth, making it well suited to deep-learning training and inference. Because it trades precision for range, it avoids the overflow and underflow problems that affect narrower formats during gradient computation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-compression",
      "label": "Model Compression"
    },
    {
      "@id": "urn:ngm:class:mixed-precision-training",
      "label": "Mixed Precision Training"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:tensor-processing-unit",
        "label": "Tensor Processing Unit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inference-optimisation",
        "label": "Inference Optimisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:gpu-acceleration",
        "label": "GPU Acceleration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      },
      {
        "@id": "urn:ngm:class:pruning",
        "label": "Pruning"
      },
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
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
- Bfloat16 is a 16-bit floating-point representation that retains the 8-bit exponent of 32-bit float while shortening the mantissa to 7 bits. This preserves dynamic range, so it can represent the same magnitudes as single precision but with less significand resolution, making it a natural fit for [[Tensor Core]] and [[Tensor Processing Unit]] matrix engines.
- As a form of [[Model Compression]], bfloat16 halves storage and [[Memory Bandwidth]] requirements relative to float32, accelerating both training and inference while sidestepping the range limitations of float16.
- ### Overview
- Deep-learning workloads tolerate reduced numerical precision far better than reduced dynamic range, because gradients and activations span many orders of magnitude.
- By keeping the full float32 exponent, bfloat16 represents very small and very large values without overflow or underflow, while accepting coarser rounding within each magnitude band.
- Hardware accumulators typically widen partial sums back to float32 internally, so matrix multiplications stay numerically stable even though the operands are bfloat16.
- This makes bfloat16 the default mixed-precision format on many AI accelerators, requiring fewer loss-scaling tricks than float16.
- ### Key aspects
- Format: 1 sign bit, 8 exponent bits, 7 mantissa bits.
- Range: identical to IEEE float32, avoiding the saturation issues of float16.
- Precision: lower significand resolution, acceptable for most neural-network arithmetic.
- Hardware: natively supported by [[Tensor Core]], [[Tensor Processing Unit]] and modern CPUs.
- Efficiency: halves memory footprint and improves [[Throughput]] and [[Memory Bandwidth]] utilisation.
- ### Applications
- Mixed-precision training of large [[Transformer Architecture]] models.
- Low-overhead [[Inference Optimisation]] on accelerators.
- Reducing model memory footprint alongside [[Quantisation]] and [[Pruning]].
- Efficient deployment of distilled models produced by [[Knowledge Distillation]].
- ### Relationships
- subClassOf:: [[Model Compression]]
- uses:: [[Tensor Core]]
- dependsOn:: [[Tensor Processing Unit]]
- enables:: [[Inference Optimisation]]
- supports:: [[GPU Acceleration]]
- requires:: [[Tensor Core]]
- partOf:: [[Model Compression]]
- contrastsWith:: [[Quantisation]]
- bridgesTo:: [[Memory Bandwidth]]
- relatedTo:: [[Quantisation]]
- relatedTo:: [[Knowledge Distillation]]
- relatedTo:: [[Pruning]]
- relatedTo:: [[Throughput]]
- relatedTo:: [[Transformer Architecture]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
