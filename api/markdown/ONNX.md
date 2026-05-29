public:: true

# ONNX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:onnx",
  "@type": "Page",
  "vc:slug": "onnx",
  "title": "ONNX",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:onnx",
  "@type": "Class",
  "label": "ONNX",
  "definition": "ONNX (Open Neural Network Exchange) is an open, vendor-neutral file format and operator specification for representing machine learning models, enabling trained models to be exported from one deep learning framework (e.g. PyTorch, TensorFlow) and executed on any compatible runtime or hardware accelerator without retraining. The ONNX ecosystem comprises the ONNX format specification, operator set definitions, model zoo, and the ONNX Runtime inference engine.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"},
    {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:model-deployment", "label": "Model Deployment"},
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:onnx-runtime", "label": "ONNX Runtime"},
      {"@id": "urn:ngm:class:onnx-operator-set", "label": "ONNX Operator Set"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:model-optimization", "label": "Model Optimization"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:deep-learning-framework", "label": "Deep Learning Framework"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[ONNX]] is an [[Interoperability Standard]] and [[Open Standard]] format for serialising neural network computation graphs, allowing models trained in any major [[Deep Learning Framework]] to be served by an [[Inference Engine]] on heterogeneous hardware without framework-specific runtime dependencies.

- ### Relationships
  - ONNX enables portable [[Model Deployment]] via the [[ONNX Runtime]] and standardised [[ONNX Operator Set]], supports [[Model Optimization]] pipelines (quantisation, graph fusion) and [[Hardware Acceleration]] targeting CPUs, GPUs, and specialised accelerators, and sits alongside other [[Deep Learning Framework]] ecosystems.

- ### Content
  - ONNX was created jointly by Facebook (Meta) and Microsoft in September 2017 as a response to the fragmentation of the deep learning framework ecosystem, where models trained in Caffe2 or PyTorch could not easily be deployed on TensorFlow Serving or hardware-vendor-optimised runtimes. The Linux Foundation AI and Data project adopted ONNX governance in 2019. The ONNX operator set specification (opset) versioned scheme was introduced to allow backward-compatible evolution of supported operations, with opset 20+ as of 2024.
  - An ONNX model is a Protocol Buffer-serialised computation graph consisting of nodes (operators), tensors (edges), initialisers (weights), and metadata. Operator definitions cover mathematical operations (convolution, matrix multiply, activation functions), control flow (if/loop), and data manipulation. The ONNX Runtime (ORT), released by Microsoft in 2019, executes ONNX graphs with hardware-specific execution providers: CUDA, TensorRT, DirectML, CoreML, OpenVINO, ROCm, and others. Graph optimisation passes (constant folding, operator fusion, layout transformation) are applied before execution to maximise throughput.
  - ONNX solves the "train anywhere, deploy anywhere" problem critical for production ML systems. In enterprise settings, models are frequently trained in research frameworks (PyTorch) then exported to ONNX for deployment in latency-sensitive production environments with hardware-vendor-optimised runtimes. ONNX Runtime is embedded in Windows (AI Platform), Xbox, Azure ML, and Hugging Face's Optimum library. It enables model quantisation to INT8/INT4 for edge deployment and is a standard export target for model compression pipelines using pruning and knowledge distillation.
  - As of 2024–2025, ONNX opset 21 supports dynamic shapes, sparse tensors, and sequence types needed for large language model deployment. ONNX Runtime GenAI extends ORT to support generative model inference (KV-cache, beam search, token sampling) for LLMs such as Phi-3 and Llama. The ecosystem has also expanded to support quantised models (ONNX quantised format) that target neural processing units (NPUs) in client devices (Qualcomm Snapdragon, Intel Arc, Apple ANE), positioning ONNX as the interchange format for the emerging on-device AI inference market.

