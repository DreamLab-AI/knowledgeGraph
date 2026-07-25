public:: true

# Graph Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:graph-optimisation",
  "@type": "Page",
  "title": "Graph Optimisation",
  "vc:slug": "graph-optimisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-optimisation",
  "@type": "Class",
  "label": "Graph Optimisation",
  "definition": "Graph optimisation is the set of compiler transformations applied to a model's computation graph to reduce latency, memory footprint and energy use without altering the model's semantics. Typical passes include operator fusion, constant folding, dead-node elimination, layout reordering and kernel selection. It is performed by inference runtimes and ahead-of-time compilers as a precursor to deployment on a target accelerator.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-optimisation-and-performance",
      "label": "Model Optimisation and Performance"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:computation-graph",
        "label": "Computation Graph"
      },
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      },
      {
        "@id": "urn:ngm:class:convex-optimisation",
        "label": "Convex Optimisation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:model-optimisation-and-performance",
        "label": "Model Optimisation and Performance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-inference",
        "label": "Model Inference"
      },
      {
        "@id": "urn:ngm:class:inference-serving",
        "label": "Inference Serving"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computation-graph",
        "label": "Computation Graph"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:gpu-acceleration",
        "label": "GPU Acceleration"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:onnx",
        "label": "ONNX"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:onnx-runtime",
        "label": "ONNX Runtime"
      },
      {
        "@id": "urn:ngm:class:tensor-rt",
        "label": "TensorRT"
      },
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-quantization",
        "label": "Model Quantization"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
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
  - Graph optimisation is the set of compiler transformations applied to a model's computation graph to reduce latency, memory footprint and energy use without altering the model's semantics. Typical passes include operator fusion, constant folding, dead-node elimination, layout reordering and kernel selection. It is performed by inference runtimes and ahead-of-time compilers as a precursor to deployment on a target accelerator.
  - Related concepts: [[Computation Graph]] [[Compiler]] [[ONNX Runtime]] [[TensorRT]] [[Model Optimisation and Performance]]
- ### Overview
  - Graph optimisation treats the model as a directed dataflow graph and rewrites it into an equivalent but cheaper-to-execute form. Operator fusion collapses adjacent elementwise and matrix operations into a single kernel, cutting memory round-trips; constant folding pre-computes subgraphs whose inputs are fixed at build time; layout transforms align tensors to the memory order preferred by the target hardware. These passes are hardware-aware: the optimal graph for a GPU differs from that for a CPU or an NPU.
- ### Key aspects
  - Operator fusion to reduce kernel-launch and memory-bandwidth overhead
  - Constant folding and common-subexpression elimination
  - Dead-code and identity-operation removal
  - Memory-layout and data-format transformation for the target accelerator
  - Kernel auto-tuning and selection per operator
- ### Applications
  - Lowering transformer inference latency in serving stacks
  - Compiling models for edge NPUs and mobile GPUs
  - Build-time optimisation in ONNX Runtime and TensorRT pipelines
  - Reducing cold-start cost for serverless model endpoints
- ### Relationships
  - subClassOf:: [[Model Optimisation and Performance]]
  - implements:: [[Computation Graph]]
  - implements:: [[Compiler]]
  - uses:: [[Optimisation]]
  - uses:: [[Convex Optimisation]]
  - partOf:: [[Model Optimisation and Performance]]
  - enables:: [[Model Inference]]
  - enables:: [[Inference Serving]]
  - requires:: [[Computation Graph]]
  - supports:: [[Model Deployment]]
  - supports:: [[GPU Acceleration]]
  - standardizedBy:: [[ONNX]]
  - relatedTo:: [[ONNX Runtime]]
  - relatedTo:: [[TensorRT]]
  - relatedTo:: [[Model Compression]]
  - contrastsWith:: [[Model Quantization]]
  - dependsOn:: [[Compiler]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
