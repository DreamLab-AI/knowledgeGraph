public:: true

# Operator Fusion
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:operator-fusion", "@type":"Page", "title":"Operator Fusion", "vc:slug":"operator-fusion", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:operator-fusion",
  "@type": "Class",
  "label": "Operator Fusion",
  "definition": "Operator fusion is a compiler optimisation that combines several consecutive operations in a neural network computation graph into a single fused kernel. By merging operations such as a matrix multiply with its bias addition and activation function, fusion avoids writing intermediate tensors back to memory, reducing memory bandwidth pressure and kernel launch overhead. It is a core technique in machine learning compilers and inference runtimes for improving throughput and latency on accelerators. Fusion trades increased kernel complexity for fewer round trips to global memory.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-optimization",
      "label": "Model Optimization"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      },
      {
        "@id": "urn:ngm:class:onnx",
        "label": "ONNX"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:memory-bandwidth",
        "label": "Memory Bandwidth"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
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
- Operator fusion is a compiler optimisation that merges adjacent operations in a [[Neural Network]] computation graph into a single fused kernel. It is a form of [[Model Optimization]] that relies on the [[Compiler]] and targets [[GPU]] and other accelerators.
- ### Overview
- Deep learning models are graphs of tensor operations. Executing each operation as a separate kernel forces intermediate results to be written to and read back from global memory, which is bound by [[Memory Bandwidth]] rather than raw compute.
- Operator fusion collapses such sequences (for example matrix multiply, bias add, and activation) into one kernel that keeps intermediates in registers or shared memory.
- The result is fewer kernel launches, less memory traffic, and lower [[Latency]] for [[Inference]] and training.
- ### Mechanisms
- Pattern matching over the computation graph identifies fusible subgraphs (element-wise chains, reduction-followed-by-elementwise, epilogue fusion after GEMM).
- Code generation emits a single kernel that streams data through the fused stages without materialising intermediate tensors.
- Cost models decide when fusion helps versus when it harms occupancy or register pressure.
- ### Key aspects
- Vertical fusion chains element-wise operations; horizontal fusion combines independent operations sharing inputs.
- Epilogue fusion attaches bias, activation and scaling onto the tail of a matrix multiply.
- Fusion interacts with [[Hardware Acceleration]] features such as tensor cores and on-chip memory.
- ### Applications
- Inference runtimes and exporters (including [[ONNX]] based toolchains) apply fusion before deployment.
- Training frameworks fuse element-wise epilogues to raise throughput.
- Serving stacks use fused kernels to meet latency budgets in [[Model Serving]].
- ### Relationships
- partOf:: [[Compiler]]
- hasPart:: [[Hardware Acceleration]]
- requires:: [[Compiler]]
- enables:: [[Model Serving]]
- dependsOn:: [[Memory Bandwidth]]
- uses:: [[GPU]]
- uses:: [[ONNX]]
- supports:: [[Inference]]
- implements:: [[Hardware Acceleration]]
- relatedTo:: [[Latency]]
- relatedTo:: [[Neural Network]]
- ### Provenance
- updated:: 2026-06-15
