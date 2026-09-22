public:: true

# TinyML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63014bad06fc1d20de062f00dc7c3f48c26b66595288524b1b2100ab58537ee3",
  "@type": "Page",
  "vc:slug": "tiny-ml",
  "title": "TinyML",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mlperf-tiny",
      "vc:label": "MLPerf Tiny"
    },
    {
      "@id": "urn:visionflow:linked:tensor-flow-lite-micro",
      "vc:label": "TensorFlow Lite Micro"
    },
    {
      "@id": "urn:visionflow:linked:tiny-ml-foundation",
      "vc:label": "TinyML Foundation"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0432"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "TinyML"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tiny-ml",
  "@type": "Class",
  "label": "TinyML",
  "definition": "Machine learning inference deployed on resource-constrained microcontrollers with kilobyte-scale RAM, milliwatt power budgets, and MHz-range processors, enabling always-on intelligent sensing in IoT devices, wearables, and embedded sensors without cloud connectivity. Requires aggressive model optimisation through INT8 quantisation, pruning, and knowledge distillation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:deep-learning",
      "label": "Deep Learning"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:neural-network-quantisation", "label": "Neural Network Quantisation"},
      {"@id": "urn:ngm:class:model-pruning-for-edge-deployment", "label": "Model Pruning for Edge Deployment"},
      {"@id": "urn:ngm:class:model-compression-for-edge", "label": "Model Compression for Edge"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:embedded-ai-frameworks", "label": "Embedded AI Frameworks"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:knowledge-distillation-for-edge", "label": "Knowledge Distillation for Edge"},
      {"@id": "urn:ngm:class:on-device-learning", "label": "On-Device Learning"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:edge-ai-system", "label": "Edge AI System"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-deployment", "label": "AI Deployment"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tiny-ml:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:63014bad06fc1d20de062f00dc7c3f48c26b66595288524b1b2100ab58537ee3"
  },
  "vc:resolutions": [
    {
      "raw": "[[MLPerf Tiny]]",
      "resolved": "urn:visionflow:linked:mlperf-tiny",
      "kind": "StubLink"
    },
    {
      "raw": "[[TensorFlow Lite Micro]]",
      "resolved": "urn:visionflow:linked:tensor-flow-lite-micro",
      "kind": "StubLink"
    },
    {
      "raw": "[[TinyML Foundation]]",
      "resolved": "urn:visionflow:linked:tiny-ml-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - TinyML is machine learning deployment on extremely resource-constrained microcontrollers with memory measured in kilobytes (typically 256KB RAM, 1MB flash storage), power consumption in milliwatts (under 1mW idle, a few mW active), and processing measured in MHz (typically 16-80MHz ARM Cortex-M cores), enabling intelligent inference at the extreme edge in battery-powered IoT devices, wearables, and embedded sensors. This paradigm enables always-on intelligent sensing at ultra-low power enabling applications infeasible with cloud connectivity including keyword spotting wake-word detection consuming under 1mW enabling multi-year battery life, gesture recognition processing accelerometer data locally for responsive interaction, anomaly detection in industrial sensors identifying equipment failures without connectivity, audio event classification recognizing sounds like glass breaking or baby crying for home automation, and predictive maintenance on rotating machinery analyzing vibration patterns to predict bearing failures. Implementation requires aggressive model optimization through INT8 quantization representing weights and activations in 8-bit integers (4x compression versus FP32), extreme pruning removing 70-95% of model weights while maintaining acceptable accuracy, knowledge distillation training compact student models mimicking larger teacher models, and architecture search discovering efficient neural architectures (MobileNet, EfficientNet variants) tailored for resource constraints. Key constraints include memory footprint where entire model must fit in RAM with typical limit 100KB for weights plus activation memory, computational budget constrained to deliver real-time inference within 10-50ms on CPUs without hardware accelerators, energy per inference typically 0.5mJ enabling 10,000+ inferences per mAh battery capacity, and fixed-point arithmetic as floating-point operations prohibitively expensive requiring software emulation or absent from hardware entirely. The TinyML ecosystem comprises frameworks including TensorFlow Lite for Microcontrollers (Google) supporting ARM Cortex-M deployment, Edge Impulse providing end-to-end workflow from data collection to deployment, uTensor enabling neural network inference on mbed-OS devices, and CMSIS-NN providing optimized neural network kernels for ARM Cortex-M processors, while benchmarks from MLPerf Tiny establish standardized metrics for comparing inference latency, accuracy, and energy consumption across TinyML implementations, with typical results showing 10ms keyword spotting inference consuming 0.5mJ on Cortex-M4 processors.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TinyML
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  TinyML (Machine Learning on Microcontrollers) (AI-0432) — content pending enrichment.

- ### Provenance
  - sources:: [[TensorFlow Lite Micro]], [[TinyML Foundation]], [[MLPerf Tiny]]
  - migration-date:: 2026-04-26T00:00:00Z
