public:: true

# ONNX Runtime
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:onnx-runtime",
  "@type": "Page",
  "vc:slug": "onnx-runtime",
  "title": "ONNX Runtime",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:onnx-runtime",
  "@type": "Class",
  "label": "ONNX Runtime",
  "definition": "ONNX Runtime is an open-source, cross-platform inference and training acceleration engine developed by Microsoft that executes models represented in the Open Neural Network Exchange (ONNX) format. It applies a suite of graph optimisations—operator fusion, constant folding, and memory planning—and routes computation through hardware-specific execution providers (CUDA, TensorRT, DirectML, OpenVINO, CoreML) to maximise throughput and minimise latency across diverse deployment targets.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"}
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:onnx-standard", "label": "ONNX Standard"},
      {"@id": "urn:ngm:class:onnx-operator-set", "label": "ONNX Operator Set"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:onnx", "label": "ONNX"},
      {"@id": "urn:ngm:class:model-deployment", "label": "Model Deployment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-inference-engine", "label": "Real-Time Inference Engine"},
      {"@id": "urn:ngm:class:ai-model-inference-engine", "label": "AI Model Inference Engine"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[ONNX Runtime]] is an open-source inference engine that executes models in the [[ONNX]] intermediate representation format with hardware-adaptive optimisations, enabling consistent high-performance [[Model Deployment]] across CPUs, GPUs, and specialised accelerators without framework-specific dependencies.

- ### Relationships
  - ONNX Runtime is a concrete implementation of the [[Inference Engine]] class that implements the [[ONNX Standard]] and [[ONNX Operator Set]] specifications; it is closely tied to [[ONNX]] as a format and enables [[Real-Time Inference Engine]] and [[AI Model Inference Engine]] capabilities, facilitating portable [[Model Deployment]] across heterogeneous hardware.

- ### Content
  - ONNX Runtime was open-sourced by Microsoft in 2018 as the production inference backend initially serving Bing, Office 365, and Azure Cognitive Services. It was co-developed alongside the ONNX format specification, which had been jointly proposed by Microsoft, Facebook (now Meta), and AWS in 2017 to address the fragmentation of deep learning frameworks. By releasing ONNX Runtime under an MIT licence, Microsoft provided a vendor-neutral path for deploying PyTorch, TensorFlow, and scikit-learn models in production without tying organisations to a specific training framework.
  - Technically, ONNX Runtime ingests a model's ONNX graph and applies a multi-pass optimisation pipeline before execution. Graph-level optimisations include operator fusion (collapsing sequences such as Conv+BatchNorm+ReLU into a single kernel), constant folding (precomputing subgraphs with fixed inputs), and common subexpression elimination. The runtime selects execution providers (EPs) based on available hardware: the CUDA EP offloads to NVIDIA GPUs via cuDNN and cuBLAS; TensorRT EP applies layer-level precision calibration and kernel auto-tuning; CoreML EP targets Apple Silicon neural engines; and OpenVINO EP targets Intel hardware. Mixed-precision (FP16, INT8) quantisation is natively supported, typically halving memory footprint and doubling throughput with minimal accuracy degradation.
  - ONNX Runtime matters because it decouples the training-time framework choice from the deployment-time execution environment. Data scientists can experiment in PyTorch and export via `torch.onnx.export` without rewriting inference code in C++. Embedded and edge deployments benefit particularly, as ONNX Runtime's mobile build (`ort-mobile`) targets Android and iOS with sub-5 MB binary sizes. In enterprise settings, the consistent API across CPU and GPU backends simplifies fleet management and A/B testing of hardware configurations. Latency reductions of 2–8× compared to native PyTorch eager execution are routinely reported for production transformer inference workloads.
  - In 2024–2025, ONNX Runtime has extended support for large language model inference through its Generative AI extensions (onnxruntime-genai), adding KV-cache management, beam search, and greedy decoding logic for autoregressive generation. Integration with Hugging Face Optimum enables one-command export and quantisation of transformer models. Competition from TensorRT-LLM, vLLM, and llama.cpp has intensified, each optimised for specific LLM architectures, but ONNX Runtime retains a unique position as the broadest cross-platform solution, increasingly relevant for Windows Copilot+ PC NPU deployments via DirectML and QNN execution providers.
