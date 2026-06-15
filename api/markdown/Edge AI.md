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
  "definition": "Edge AI is the deployment and execution of artificial intelligence inference workloads directly on edge devices—such as smartphones, IoT sensors, surveillance cameras, and embedded systems—close to the data source, rather than in centralised cloud data centres. It reduces latency, preserves data privacy, enables offline operation, and cuts bandwidth costs by processing data locally using optimised neural network models and dedicated hardware accelerators such as neural processing units (NPUs). Edge AI encompasses model compression techniques (quantisation, pruning, knowledge distillation), specialised deployment runtimes, and on-device training paradigms such as federated learning. It bridges the domains of machine learning, embedded systems, and distributed computing to enable intelligent applications at the network periphery.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:edge-computing",
      "label": "Edge Computing"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:onnx",
        "label": "ONNX"
      },
      {
        "@id": "urn:ngm:class:neural-network-quantisation",
        "label": "Model Quantisation"
      },
      {
        "@id": "urn:ngm:class:neural-architecture-search",
        "label": "Neural Architecture Search"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-inference-at-edge",
        "label": "Real-Time Inference at Edge"
      },
      {
        "@id": "urn:ngm:class:io-t-ai-integration",
        "label": "IoT AI Integration"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicles"
      },
      {
        "@id": "urn:ngm:class:smart-manufacturing",
        "label": "Smart Manufacturing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      },
      {
        "@id": "urn:ngm:class:neural-processing-unit",
        "label": "Neural Processing Unit"
      },
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fog-computing",
        "label": "Fog Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tiny-ml",
        "label": "TinyML"
      },
      {
        "@id": "urn:ngm:class:on-device-learning",
        "label": "On-Device Machine Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      },
      {
        "@id": "urn:ngm:class:small-language-models",
        "label": "Small Language Models"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-city",
        "label": "Smart City"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:mlperf",
        "label": "MLPerf"
      },
      {
        "@id": "urn:ngm:class:etsi-mec",
        "label": "ETSI MEC"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:on-device-ai",
      "label": "On-Device AI"
    },
    {
      "@id": "urn:ngm:class:tinyml",
      "label": "TinyML"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[Edge AI]] is the practice of deploying and executing [[Machine Learning]] inference workloads directly on resource-constrained devices at the network edge—including smartphones, [[IoT]] sensors, surveillance cameras, [[Autonomous Vehicles]], and industrial controllers—rather than routing raw data to centralised [[Cloud AI]] servers for processing. By moving computation close to the data source, Edge AI achieves low-latency responses, preserves data privacy, enables offline functionality, and reduces bandwidth consumption. It depends on [[Model Compression]] techniques such as [[Model Quantisation]], pruning, and [[Knowledge Distillation]] to fit [[Deep Learning]] models onto hardware with limited memory and power budgets, deployed via runtimes such as TFLite, [[ONNX]] Runtime, and vendor-specific [[Inference Engine]] frameworks running atop a [[Neural Processing Unit]] or similar accelerator.

- ### Overview
  - Edge AI addresses a fundamental trade-off in intelligent systems: the computational power of centralised data centres versus the latency, privacy, and connectivity constraints of real-world deployments. Early AI applications assumed abundant cloud resources; as AI moved from research into production, the inadequacy of perpetual cloud round-trips became clear for safety-critical and bandwidth-limited scenarios.
  - The term gained currency around 2017–2018 as deep learning matured and silicon vendors began integrating dedicated neural processing logic into mobile SoCs. Apple's A11 Bionic introduced a Neural Engine; Google's Edge TPU and Pixel Visual Core followed. These milestones made on-device image classification, face recognition, and [[Natural Language Processing]] practical without cloud dependency.
  - Edge AI sits at the convergence of [[Deep Learning]] (models and training pipelines), [[Embedded Systems]] engineering (memory, power, thermal constraints), and [[Edge Computing]] infrastructure (network topology, device orchestration). Its value proposition rests on four pillars: latency reduction, privacy preservation, bandwidth efficiency, and resilience to connectivity loss.
  - Maturity level: **established** — NPUs are standard in mid-range smartphones, microcontrollers support TinyML workloads, and major cloud vendors offer edge AI toolchains (AWS Greengrass, Azure IoT Edge, Google Edge TPU SDK).

- ### Key Components
  - **Model Compression**
    - [[Model Quantisation]]: reducing weight precision from FP32 to INT8 or INT4, shrinking model size and speeding inference on integer arithmetic units.
    - [[Knowledge Distillation]]: training a compact "student" model to mimic a larger "teacher" model, preserving accuracy at lower parameter count.
    - Structured and unstructured pruning: removing redundant weights or channels to reduce FLOP count.
    - [[Neural Architecture Search]]: automated search for network architectures optimised for target hardware efficiency metrics (latency, TOPS/Watt).
  - **Deployment Runtimes**
    - [[TFLite]] (TensorFlow Lite): Google's lightweight inference runtime for mobile and embedded targets.
    - [[ONNX]] Runtime: cross-framework interoperability layer enabling models trained in PyTorch or TensorFlow to run on diverse hardware backends.
    - Apple Core ML: iOS/macOS native runtime leveraging the Neural Engine and GPU.
    - Qualcomm SNPE, MediaTek NeuroPilot, Arm NN: vendor-specific SDKs targeting proprietary NPU instruction sets.
  - **Hardware Accelerators**
    - [[Neural Processing Unit]] (NPU): dedicated silicon block for matrix-multiply-accumulate operations, standard in mobile SoCs (Qualcomm Hexagon, Apple Neural Engine, Samsung NPU).
    - Digital Signal Processor (DSP): often repurposed for inference workloads on lower-power devices.
    - Microcontroller-class ML (see [[TinyML]]): inference on Cortex-M class devices with kilobytes of SRAM.
    - Field-Programmable Gate Arrays (FPGAs) for configurable low-latency inference in industrial settings.
  - **Training Paradigms**
    - Cloud-trained, edge-deployed: the dominant pattern — models trained offline, compressed, and shipped to devices.
    - [[Federated Learning]]: on-device model updates aggregated without raw data leaving the device, enabling personalisation while preserving privacy.
    - Transfer learning with on-device fine-tuning: adapting pre-trained models to local data distributions within device resource limits.
  - **[[Inference Engine]]**
    - Runtime software that takes a compiled model graph, maps operations to hardware accelerators, manages memory layout, and executes inference requests. Performance is characterised in tokens/sec, frames/sec, or latency in milliseconds.

- ### Applications and Use Cases
  - **Consumer devices**
    - [[Computer Vision]] tasks: face unlock, scene understanding, photo enhancement, object detection in camera apps.
    - Voice assistants with always-on keyword spotting (running on ultra-low-power always-on processors); local speech recognition reducing cloud dependency.
    - [[Small Language Models]] running on mobile NPUs for on-device summarisation, smart reply, and image editing (Apple Intelligence, Samsung Gauss, Qualcomm on-device LLM).
  - **Automotive and transport**
    - [[Autonomous Vehicles]]: perception stacks (object detection, lane segmentation, pedestrian prediction) must meet safety response times that prohibit cloud round-trips.
    - Advanced Driver Assistance Systems (ADAS): forward collision warning, automatic emergency braking, lane-keep assist — all requiring sub-100ms inference loops.
    - Fleet telematics: onboard processing of driver behaviour data before selective cloud upload.
  - **Industrial and manufacturing**
    - [[Smart Manufacturing]]: visual quality inspection cameras running defect detection locally on production lines, triggering rejection actuators in real time.
    - Predictive maintenance: vibration and temperature sensor fusion processed locally to detect bearing wear or anomalous machine behaviour.
    - Robotic process automation in warehouses: pick-and-place robots using local vision inference for object localisation.
  - **Healthcare**
    - Wearable ECG monitors performing arrhythmia detection locally, alerting users without requiring continuous connectivity.
    - Point-of-care diagnostic devices applying trained classifiers to medical images on device.
    - Patient privacy compliance: sensitive health data never leaves the device or local network.
  - **Smart infrastructure**
    - [[Smart City]] deployments: traffic flow cameras performing vehicle counting and classification locally, sending only aggregate statistics to city management systems.
    - Energy grid edge nodes running anomaly detection on power consumption signals for outage prediction.
    - Smart agriculture: drone-mounted or field-sensor systems identifying crop diseases or irrigation needs without cellular uplink.
  - **Augmented and spatial computing**
    - [[Spatial Computing]] headsets (AR/VR): hand tracking, gaze estimation, scene understanding — all latency-sensitive, must run on-device.
    - [[Digital Twin]] edge nodes: local processing of sensor streams for real-time twin synchronisation before cloud ingestion.

- ### Relationships
  - uses:: [[Inference Engine]]
  - uses:: [[Knowledge Distillation]]
  - uses:: [[Hardware Acceleration]]
  - uses:: [[ONNX]]
  - uses:: [[Model Quantisation]]
  - uses:: [[Neural Architecture Search]]
  - uses:: [[TFLite]]
  - enables:: [[Real-Time Inference at Edge]]
  - enables:: [[IoT AI Integration]]
  - enables:: [[Federated Learning]]
  - enables:: [[Autonomous Vehicles]]
  - enables:: [[Smart Manufacturing]]
  - requires:: [[Embedded Systems]]
  - requires:: [[Neural Processing Unit]]
  - requires:: [[Model Compression]]
  - dependsOn:: [[Edge Computing]]
  - dependsOn:: [[Internet of Things]]
  - dependsOn:: [[Deep Learning]]
  - contrastsWith:: [[Cloud AI]]
  - contrastsWith:: [[Fog Computing]]
  - relatedTo:: [[TinyML]]
  - relatedTo:: [[On-Device Machine Learning]]
  - relatedTo:: [[Computer Vision]]
  - relatedTo:: [[Natural Language Processing]]
  - relatedTo:: [[Small Language Models]]
  - bridges-to:: [[Smart City]]
  - bridges-to:: [[Digital Twin]]
  - bridges-to:: [[Spatial Computing]]
  - standardizedBy:: [[MLPerf]]
  - standardizedBy:: [[ETSI MEC]]

- ### Standards and Context
  - **MLPerf Inference**: industry benchmark suite from MLCommons measuring inference performance and energy efficiency across hardware; the primary yardstick for edge AI silicon comparison.
  - **ETSI MEC (Multi-Access Edge Computing)**: European Telecommunications Standards Institute framework standardising edge compute APIs and service lifecycles for telecommunications network edges; increasingly relevant as 5G edge deployments grow.
  - **ONNX (Open Neural Network Exchange)**: Linux Foundation project providing a common model format enabling portability across training frameworks and inference runtimes; critical for heterogeneous edge hardware ecosystems.
  - **TensorFlow Lite**: de facto standard lightweight runtime with broad microcontroller and mobile device support; benchmarked against ARM Cortex-M and A-series targets.
  - **Arm Ethos NPU series**: widely licensed IP defining reference NPU architecture for Cortex-A and Cortex-M class SoCs; shapes the instruction-set landscape for edge inference.
  - **ISO/SAE 21434**: automotive cybersecurity standard directly relevant to securing AI inference in vehicle edge systems.
  - **GDPR and data localisation regulation**: primary regulatory driver for on-device AI in European markets — keeping personal data on-device simplifies compliance.
  - **5G network slicing**: telecommunications infrastructure enabling low-latency network edges that complement Edge AI deployments; see [[Internet of Things]] and [[Smart City]] contexts.

- ### Provenance
  - sources:: MLCommons MLPerf documentation; ETSI MEC standards; ONNX specification (onnx.ai); TensorFlow Lite documentation (tensorflow.org); Arm developer documentation; Apple Machine Learning Research blog; Qualcomm AI Research publications; IEEE Spectrum edge AI coverage.
  - updated:: 2026-06-13
