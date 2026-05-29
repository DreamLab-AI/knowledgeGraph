public:: true

# Edge AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:edge-ai",
  "@type": "Page",
  "vc:slug": "edge-ai",
  "title": "Edge AI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:edge-ai",
  "@type": "Class",
  "label": "Edge AI",
  "definition": "Edge AI is the deployment and execution of artificial intelligence inference workloads directly on edge devices—such as smartphones, IoT sensors, cameras, and embedded systems—close to the data source, rather than in centralised cloud data centres. It reduces latency, preserves data privacy, enables offline operation, and cuts bandwidth and cloud compute costs by processing data locally using optimised neural network models and dedicated hardware accelerators.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"},
      {"@id": "urn:ngm:class:knowledge-distillation", "label": "Knowledge Distillation"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"},
      {"@id": "urn:ngm:class:onnx", "label": "ONNX"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-inference-at-edge", "label": "Real-Time Inference at Edge"},
      {"@id": "urn:ngm:class:io-t-ai-integration", "label": "IoT AI Integration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Edge AI]] is the practice of running machine learning inference workloads on resource-constrained devices at the network edge—including smartphones, surveillance cameras, autonomous vehicles, [[IoT]] sensors, and industrial controllers—rather than sending raw data to cloud servers for processing. This approach achieves low [[Latency]] (sub-10ms response times unachievable via round-trip cloud calls), preserves privacy by keeping sensitive data on-device, and maintains functionality in offline or bandwidth-limited conditions. Edge AI relies on compressed models produced by [[Knowledge Distillation]], quantisation, and pruning, deployed via runtimes such as TensorFlow Lite, [[ONNX]] Runtime, and vendor-specific [[Inference Engine]] frameworks.

- ### Relationships
  - Edge AI uses [[Inference Engine]] runtimes optimised for low-power hardware, [[Knowledge Distillation]] and model compression to fit large models onto constrained devices, [[Hardware Acceleration]] via dedicated neural processing units (NPUs) and DSPs, and [[ONNX]] as a cross-framework model interchange format. It enables [[Real-Time Inference at Edge]] for time-critical applications and powers [[IoT AI Integration]] by adding intelligence to connected sensors. It is tightly coupled to [[Embedded Systems]] design and to [[Edge Computing]] infrastructure at the platform level.

- ### Content
  - The term Edge AI gained currency around 2017-2018 as deep learning models matured and silicon vendors began integrating neural processing units into mobile SoCs. Apple's A11 Bionic (2017) introduced a dedicated Neural Engine; Google's Pixel 2 Visual Core (2017) and Edge TPU (2018) followed. These developments made on-device image classification, face recognition, and natural language processing practical without cloud round-trips. The convergence of smaller transformers (MobileNet, EfficientNet, DistilBERT) and specialised hardware created a viable edge AI stack.

  - The technical challenge of edge AI centres on the memory, compute, and power constraints of edge hardware. Model compression techniques—quantisation (INT8, INT4), pruning, and [[Knowledge Distillation]]—reduce model size by 4-10x with minimal accuracy loss. Neural Architecture Search (NAS) produces architectures inherently optimised for target hardware platforms. Deployment pipelines using [[ONNX]] or vendor SDKs (Apple Core ML, Qualcomm SNPE, MediaTek NeuroPilot) translate trained models into hardware-accelerated execution graphs. On-device training and federated learning extend edge AI beyond inference to personalised model adaptation without centralising user data.

  - The industrial and IoT edge AI ecosystem encompasses predictive maintenance on factory equipment, quality control via computer vision on production lines, smart agriculture sensors performing crop disease detection, and edge-deployed anomaly detection in power grids. Retail applications include shelf-monitoring cameras running out-of-stock detection locally; automotive applications run perception stacks for ADAS and autonomous driving at the vehicle's onboard compute modules, where cloud latency is unacceptable for safety decisions.

  - In 2024-2025, the proliferation of generative AI has created a new edge AI imperative: running small language models (SLMs) on device. Apple Intelligence, Qualcomm's on-device LLM initiatives, and Samsung Gauss demonstrate 1-7B parameter models running on mobile NPUs for tasks such as text summarisation, smart reply, and image editing. The edge AI hardware market is growing rapidly, with dedicated NPU capability now standard in mid-range smartphones and embedded in microcontrollers (Arduino, STM32 with NUCLEO-ML). Power efficiency (TOPS/Watt) has become the primary competitive differentiator for edge AI silicon.

