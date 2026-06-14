public:: true

# On-Device Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:on-device-inference",
  "@type": "Page",
  "vc:slug": "on-device-inference",
  "title": "On-Device Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-device-inference",
  "@type": "Class",
  "label": "On-Device Inference",
  "definition": "On-device inference is the execution of machine learning model forward passes entirely on the end-user's hardware — such as a smartphone, wearable, embedded controller, or edge server — without transmitting input data to a remote cloud backend. It requires models to be compressed, quantised, or distilled to fit within tight memory, compute, and power budgets while maintaining acceptable accuracy.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:edge-inference", "label": "Edge Inference"},
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:model-compression-for-edge", "label": "Model Compression for Edge"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"},
      {"@id": "urn:ngm:class:post-training-quantisation", "label": "Post-Training Quantisation"},
      {"@id": "urn:ngm:class:weight-pruning", "label": "Weight Pruning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:offline-ai", "label": "Offline AI"},
      {"@id": "urn:ngm:class:real-time-inference", "label": "Real-Time Inference"},
      {"@id": "urn:ngm:class:privacy-preserving-ai", "label": "Privacy-Preserving AI"},
      {"@id": "urn:ngm:class:low-latency-ml", "label": "Low-Latency ML"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:onnx-runtime", "label": "ONNX Runtime"},
      {"@id": "urn:ngm:class:tensorflow-lite", "label": "TensorFlow Lite"},
      {"@id": "urn:ngm:class:coreml", "label": "CoreML"},
      {"@id": "urn:ngm:class:executorch", "label": "ExecuTorch"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:npu", "label": "NPU"},
      {"@id": "urn:ngm:class:mobile-gpu", "label": "Mobile GPU"},
      {"@id": "urn:ngm:class:knowledge-distillation-for-edge", "label": "Knowledge Distillation for Edge"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:onnx", "label": "ONNX"},
      {"@id": "urn:ngm:class:mlir", "label": "MLIR"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:cloud-inference", "label": "Cloud Inference"},
      {"@id": "urn:ngm:class:server-side-inference", "label": "Server-Side Inference"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:autonomous-vehicles", "label": "Autonomous Vehicles"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tinyml", "label": "TinyML"},
      {"@id": "urn:ngm:class:mlperf-mobile", "label": "MLPerf Mobile"},
      {"@id": "urn:ngm:class:speculative-decoding", "label": "Speculative Decoding"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:local-inference", "label": "Local Inference"},
    {"@id": "urn:ngm:class:edge-ai-inference", "label": "Edge AI Inference"}
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
  - [[On-Device Inference]] executes [[Edge Inference]] entirely on local hardware, using [[Model Compression for Edge]] and dedicated [[Hardware Acceleration]] such as [[NPU]]s to run neural networks without round-trips to cloud servers, preserving user privacy and enabling low-latency, offline-capable AI.

- ### Relationships
  - On-Device Inference depends on [[Model Compression for Edge]] techniques — quantisation, pruning, [[Knowledge Distillation for Edge]] — to shrink models into device memory. [[NPU]]s and mobile GPUs provide the hardware substrate. [[ONNX Runtime]] and platform-native runtimes (CoreML, TensorFlow Lite) serve as the deployment layer. [[Privacy-Preserving AI]] benefits directly because raw sensor data never leaves the device.

- ### Content
  - On-device inference has roots in the embedded systems and signal-processing tradition of running fixed DSP algorithms on microcontrollers. The neural-network era began with keyword spotting on ARM Cortex-M chips around 2014 and accelerated when Apple introduced the Neural Engine in the A11 Bionic chip (2017), followed by Google's Pixel Visual Core and Qualcomm Hexagon DSP. These dedicated NPU blocks, offering 1–40 TOPS (tera-operations per second), made it feasible to run small convolutional and recurrent networks at camera frame-rate on battery-powered devices.
  - The execution pipeline for on-device inference typically involves: offline model training in the cloud using standard frameworks (PyTorch, JAX); export to a portable format (ONNX, TorchScript); compression via post-training quantisation (INT8, INT4, or mixed precision), weight pruning, or knowledge distillation; conversion to a platform runtime (TFLite FlatBuffer, CoreML mlpackage, ONNX Runtime ORT); and deployment to device where the runtime schedules operator kernels across CPU, GPU, and NPU compute units using hardware-specific delegate APIs. Batch size is almost always one at inference time, which changes optimal operator implementations relative to server-side batched inference.
  - The significance of on-device inference spans privacy, latency, connectivity, and cost. Privacy-sensitive applications — face unlock, health biomarker monitoring, voice assistants, predictive text — can process raw biometric data locally, never exposing it to a remote service. Latency drops from 100–500 ms (cloud round-trip) to 5–50 ms on-device, enabling real-time AR overlays, game AI, and safety-critical automotive perception. Offline capability makes applications functional in aeroplane mode, rural areas, and industrial environments with intermittent connectivity. Cloud inference costs at scale (GPU-hours, egress bandwidth) are also eliminated, which matters for consumer apps with billions of invocations daily.
  - From 2023 to 2025 the frontier shifted dramatically: Apple's A17 Pro and M-series chips can run 7B-parameter LLMs locally; Qualcomm's Snapdragon X Elite targets 75 TOPS for Windows on ARM; Google's Gemini Nano runs on-device for Pixel 8 and Samsung Galaxy S24 series. The MLCommons MLPerf Mobile benchmark suite now includes LLM inference tasks. Standardisation efforts around ONNX, MLIR, and ExecuTorch (Meta's on-device runtime) are converging the fragmented runtime ecosystem, while techniques such as speculative decoding and model streaming allow larger models to operate within constrained DRAM budgets.
