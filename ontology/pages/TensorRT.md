public:: true

# TensorRT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6e05c2a391373a9df3f28ddcf8959e24a9c370fbdeda8e9b096908b7f92e80e9",
  "@type": "Page",
  "vc:slug": "tensor-rt",
  "title": "TensorRT",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hardware-acceleration",
      "vc:label": "Hardware Acceleration"
    },
    {
      "@id": "urn:visionflow:linked:edge-inference",
      "vc:label": "Edge Inference"
    },
    {
      "@id": "urn:visionflow:linked:model-deployment",
      "vc:label": "Model Deployment"
    },
    {
      "@id": "urn:visionflow:linked:inference-engine",
      "vc:label": "Inference Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TensorRT"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tensor-rt",
  "@type": "Class",
  "label": "TensorRT",
  "definition": "TensorRT is NVIDIA's high-performance deep learning inference optimisation SDK that takes trained neural network models and compiles them into highly efficient inference engines tuned for specific NVIDIA GPU architectures. It performs a suite of graph-level and kernel-level optimisations including layer fusion, tensor fusion, kernel auto-tuning, precision calibration (FP32, FP16, INT8, FP8), and dynamic shape support to maximise throughput and minimise latency. Models from training frameworks are ingested primarily via the ONNX interchange format, then compiled offline into serialised engine files that are loaded at runtime. TensorRT underpins production AI inference across data-centre GPU clusters, autonomous vehicle compute stacks, and NVIDIA Jetson edge platforms.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:inference-engine",
      "label": "Inference Engine"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:nvidia-gpu",
        "label": "NVIDIA GPU"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      },
      {
        "@id": "urn:ngm:class:real-time-inference",
        "label": "Real-Time Inference"
      },
      {
        "@id": "urn:ngm:class:low-latency",
        "label": "Low-Latency Serving"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:onnx",
        "label": "ONNX"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      },
      {
        "@id": "urn:ngm:class:mixed-precision-training",
        "label": "Mixed Precision Training"
      },
      {
        "@id": "urn:ngm:class:kernel-fusion",
        "label": "Kernel Fusion"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:graph-optimisation",
        "label": "Graph Optimisation"
      },
      {
        "@id": "urn:ngm:class:post-training-quantisation",
        "label": "Post-Training Quantisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:triton-inference-server",
        "label": "Triton Inference Server"
      },
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:deep-learning-framework",
        "label": "Deep Learning Framework"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA Toolkit"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:onnx-runtime",
        "label": "ONNX Runtime"
      },
      {
        "@id": "urn:ngm:class:openvino",
        "label": "OpenVINO"
      },
      {
        "@id": "urn:ngm:class:tensor-flow-lite",
        "label": "TensorFlow Lite"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:python-pytorch-deep-learning-stack",
        "label": "PyTorch"
      },
      {
        "@id": "urn:ngm:class:tensor-flow",
        "label": "TensorFlow"
      },
      {
        "@id": "urn:ngm:class:nvidia-corporation-jetson",
        "label": "Jetson"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:nvidia-tensorrt",
      "label": "NVIDIA TensorRT"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tensor-rt:f9f7153fcb46",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6e05c2a391373a9df3f28ddcf8959e24a9c370fbdeda8e9b096908b7f92e80e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hardware Acceleration]]",
      "resolved": "urn:visionflow:linked:hardware-acceleration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Inference]]",
      "resolved": "urn:visionflow:linked:edge-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Deployment]]",
      "resolved": "urn:visionflow:linked:model-deployment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference Engine]]",
      "resolved": "urn:visionflow:linked:inference-engine",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - TensorRT is NVIDIA's production-grade [[Inference Engine]] SDK that compiles trained [[Deep Learning]] models into optimised, GPU-specific execution engines, dramatically reducing latency and increasing throughput for [[Model Deployment]] relative to native framework inference. It operates as a post-training [[Graph Optimisation]] and [[Quantisation]] pipeline, transforming floating-point computation graphs into fused, precision-calibrated kernels tuned to target [[NVIDIA GPU]] silicon. Importing models through [[ONNX]] as the primary interchange, TensorRT is positioned at the critical boundary between model research and production systems, enabling [[Real-Time Inference]] in data centres, autonomous vehicles, and [[Edge Inference]] on NVIDIA Jetson platforms.

- ### Overview
  - TensorRT was introduced by NVIDIA in 2016 and has since become the de-facto standard for deploying neural networks at high throughput on NVIDIA hardware.
  - The core value proposition is inference acceleration: a model that runs at one speed inside [[PyTorch]] or [[TensorFlow]] will typically run substantially faster after compilation with TensorRT, with latency reductions driven by hardware-tuned kernel selection and graph restructuring.
  - TensorRT targets both cloud GPU deployments (A100, H100, L40S) and edge compute (Jetson AGX Orin, Jetson Nano) via [[CUDA]] and cuDNN primitives, and is also integrated into NVIDIA DRIVE for [[Autonomous Driving]] pipelines.
  - The SDK exposes C++ and Python APIs for building and serialising engine files offline, which are then loaded into applications at runtime for zero-overhead inference.

- ### Key Components
  - **Network Definition API**: Defines layers explicitly in C++ or Python, or ingest networks from [[ONNX]] model files produced by exporters in [[PyTorch]] (`torch.onnx.export`) or [[TensorFlow]].
  - **Builder**: Core compilation component; profiles the target GPU, enumerates candidate kernels, applies [[Graph Optimisation]] passes, and outputs a serialised engine (`.engine` or `.trt` file).
  - **Engine / Runtime**: The deserialisable execution context loaded at inference time; manages CUDA memory, execution contexts, and binding buffers for input/output tensors.
  - **Calibrator**: Used for [[Post-Training Quantisation]] to INT8 or FP8; runs a representative calibration dataset through the network and determines per-layer dynamic range clipping thresholds to minimise accuracy loss.
  - **Plugins**: Extensibility mechanism allowing custom CUDA kernels to be registered and used as TensorRT layers for operations not natively supported.
  - **Dynamic Shapes**: Allows specification of min/opt/max input shape profiles so a single engine can handle variable-length inputs (batch size, sequence length) without recompilation.
  - **Profiler**: Built-in layer-level profiling to identify inference bottlenecks and track per-layer latency contributions.

- ### Mechanisms
  - **Layer and Tensor Fusion**: Adjacent operations (e.g., convolution + batch normalisation + ReLU) are merged into a single GPU kernel, eliminating intermediate memory round-trips and reducing kernel launch overhead.
  - **Kernel Auto-Tuning**: TensorRT benchmarks multiple CUDA kernel implementations for each operation on the target GPU and selects the fastest candidate, which differs by GPU architecture (Volta, Ampere, Hopper, Ada Lovelace).
  - **[[Quantisation]] and Mixed Precision**: Supports FP32, FP16, BF16, INT8, and FP8 (on Hopper+). FP16 typically delivers 2× throughput on Tensor Core–equipped GPUs with negligible accuracy loss. INT8 requires calibration and can yield further speedups. [[Mixed Precision Training]] outputs can be preserved.
  - **[[Graph Optimisation]]**: Eliminates dead nodes, constant-folds sub-graphs, rewrites patterns for hardware efficiency (e.g., fused multi-head attention), and eliminates redundant transpose operations.
  - **Memory Optimisation**: Reuses activation memory buffers across layers where possible (in-place operations) to reduce peak GPU memory footprint.
  - **Sparsity**: Structured 2:4 sparsity (NVIDIA Ampere+) is supported, enabling the Sparse Tensor Core path for compatible weight matrices and delivering up to 2× speedup for sparse networks.

- ### Applications / Use Cases
  - **Data-Centre Inference Serving**: TensorRT engines are deployed behind [[Triton Inference Server]] to serve [[Large Language Model]] inference, computer vision, and multi-modal models at scale, maximising GPU utilisation.
  - **[[Autonomous Driving]]**: NVIDIA DRIVE platform integrates TensorRT for perception, object detection, lane segmentation, and sensor fusion networks processed in real time on DRIVE Orin SoCs.
  - **[[Edge Inference]] on Jetson**: Jetson TX2, Xavier, Orin modules use TensorRT (packaged via JetPack SDK) for robotics, industrial inspection, retail analytics, and smart-camera applications requiring on-device inference without cloud round-trips.
  - **Medical Imaging**: [[Deep Learning]]-based reconstruction, segmentation, and anomaly detection in CT/MRI pipelines use TensorRT to meet clinical throughput requirements.
  - **Natural Language Processing**: BERT, GPT-style encoder models and retrieval networks are compiled with TensorRT for low-latency semantic search and inference in production NLP pipelines.
  - **Recommender Systems**: Embedding lookup and ranking inference for large-scale recommendation engines at sub-millisecond latency requirements in advertising platforms.
  - **Speech Recognition**: Acoustic model inference for ASR (automatic speech recognition) systems where TensorRT reduces per-utterance latency.

- ### Relationships
  - subClassOf:: [[Inference Engine]]
  - requires:: [[Hardware Acceleration]]
  - requires:: [[NVIDIA GPU]]
  - requires:: [[CUDA]]
  - uses:: [[ONNX]]
  - uses:: [[Quantisation]]
  - uses:: [[Kernel Fusion]]
  - uses:: [[Mixed Precision Training]]
  - implements:: [[Graph Optimisation]]
  - implements:: [[Post-Training Quantisation]]
  - enables:: [[Edge Inference]]
  - enables:: [[Real-Time Inference]]
  - enables:: [[Low-Latency Serving]]
  - supports:: [[Model Deployment]]
  - supports:: [[Triton Inference Server]]
  - supports:: [[Autonomous Driving]]
  - dependsOn:: [[Deep Learning Framework]]
  - dependsOn:: [[CUDA Toolkit]]
  - contrastsWith:: [[ONNX Runtime]]
  - contrastsWith:: [[OpenVINO]]
  - contrastsWith:: [[TensorFlow Lite]]
  - relatedTo:: [[PyTorch]]
  - relatedTo:: [[TensorFlow]]
  - relatedTo:: [[Jetson]]
  - bridges-to:: [[Robotics Inference]]
  - bridges-to:: [[Autonomous Vehicle]]

- ### Standards & Context
  - **ONNX Compatibility**: TensorRT's primary import path is the [[ONNX]] standard (Open Neural Network Exchange), governed by the Linux Foundation AI & Data (LF AI & Data) project. ONNX opset versions must match TensorRT parser support; major version increments sometimes require parser updates.
  - **cuDNN Integration**: TensorRT builds on NVIDIA's cuDNN (CUDA Deep Neural Network) library for primitive operations; the cuDNN version bundled with TensorRT must be compatible with the installed CUDA driver.
  - **CUDA Compute Capability**: Each TensorRT release specifies the minimum CUDA Compute Capability required. INT8 Tensor Core acceleration requires CC 7.0+ (Volta); FP8 requires CC 9.0+ (Hopper).
  - **MLPerf Benchmarks**: TensorRT results appear in [[MLPerf]] inference benchmarks, where NVIDIA submissions consistently demonstrate leading throughput/latency on data-centre and edge categories, providing an external validation reference for TensorRT-optimised performance.
  - **NVIDIA NGC Containers**: NVIDIA distributes TensorRT via NGC (NVIDIA GPU Cloud) container registry, providing pre-configured Docker images with matching CUDA, cuDNN, and TensorRT versions for reproducible deployment.
  - **Triton Inference Server**: [[Triton Inference Server]] (open-source) natively supports TensorRT as one of its backend execution providers, standardising multi-model serving on NVIDIA hardware.

- ### Provenance
  - sources:: NVIDIA TensorRT Developer Guide; NVIDIA NGC documentation; MLPerf Inference benchmark submissions; ONNX specification (onnx.ai)
  - updated:: 2026-06-13
