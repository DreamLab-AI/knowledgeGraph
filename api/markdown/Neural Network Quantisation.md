schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#NeuralNetworkQuantisation
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:neural-network-quantisation
public:: true

# Neural Network Quantisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4fa382a785dcf45c2f403651989e15915156009534d8eccffe26d6c0994252ed",
  "@type": "Page",
  "vc:slug": "neural-network-quantisation",
  "title": "Neural Network Quantisation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:onnx-runtime",
      "vc:label": "ONNX Runtime"
    },
    {
      "@id": "urn:visionflow:linked:tensor-flow-lite-quantization",
      "vc:label": "TensorFlow Lite Quantization"
    },
    {
      "@id": "urn:visionflow:linked:tensor-rt",
      "vc:label": "TensorRT"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-45fef5f9b416"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-29T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#NeuralNetworkQuantisation"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0435"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Neural Network Quantisation"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:neural-network-quantisation"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:neural-network-quantisation"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4fa382a785dcf45c2f403651989e15915156009534d8eccffe26d6c0994252ed@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:neural-network-quantisation",
  "@type": "OntologyClass",
  "label": "Neural Network Quantisation",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "artificial-intelligence"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:4fa382a785dcf45c2f403651989e15915156009534d8eccffe26d6c0994252ed"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4fa382a785dcf45c2f403651989e15915156009534d8eccffe26d6c0994252ed@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Neural Network Quantization is a model compression technique reducing numerical precision of weights and activations from floating-point (FP32, FP16) to lower-bit integer representations (INT8, INT4, binary) decreasing memory footprint, improving inference speed through efficient integer arithmetic, and enabling deployment on hardware with specialized integer processing units. This technique implements quantization through mapping continuous floating-point values to discrete integer levels using scale factor s and zero-point z with quantized value q = round(x/s) + z, supporting uniform quantization with evenly-spaced quantization levels and non-uniform quantization concentrating levels in high-density regions of value distributions. Quantization approaches include post-training quantization (PTQ) applying quantization to pre-trained models without retraining through calibration on representative dataset determining optimal scale/zero-point parameters (fast but may incur 1-3% accuracy loss), and quantization-aware training (QAT) simulating quantization during training through fake quantization operators enabling model to adapt learning quantization-friendly representations (slower b",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:neural-network-quantisation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4fa382a785dcf45c2f403651989e15915156009534d8eccffe26d6c0994252ed"
  },
  "vc:resolutions": [
    {
      "raw": "[[ONNX Runtime]]",
      "resolved": "urn:visionflow:linked:onnx-runtime",
      "kind": "StubLink"
    },
    {
      "raw": "[[TensorFlow Lite Quantization]]",
      "resolved": "urn:visionflow:linked:tensor-flow-lite-quantization",
      "kind": "StubLink"
    },
    {
      "raw": "[[TensorRT]]",
      "resolved": "urn:visionflow:linked:tensor-rt",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:4fa382a785dcf45c2f403651989e15915156009534d8eccffe26d6c0994252ed@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Neural Network Quantization is a model compression technique reducing numerical precision of weights and activations from floating-point (FP32, FP16) to lower-bit integer representations (INT8, INT4, binary) decreasing memory footprint, improving inference speed through efficient integer arithmetic, and enabling deployment on hardware with specialized integer processing units. This technique implements quantization through mapping continuous floating-point values to discrete integer levels using scale factor s and zero-point z with quantized value q = round(x/s) + z, supporting uniform quantization with evenly-spaced quantization levels and non-uniform quantization concentrating levels in high-density regions of value distributions. Quantization approaches include post-training quantization (PTQ) applying quantization to pre-trained models without retraining through calibration on representative dataset determining optimal scale/zero-point parameters (fast but may incur 1-3% accuracy loss), and quantization-aware training (QAT) simulating quantization during training through fake quantization operators enabling model to adapt learning quantization-friendly representations (slower but maintains accuracy within 0.5% of FP32 baseline). Quantization scope encompasses weight-only quantization maintaining FP32 activations reducing model size but limited speedup, weight and activation quantization enabling full integer inference pipeline achieving maximum speedup on INT8-capable hardware, and dynamic quantization determining activation scales at runtime balancing flexibility and performance. Hardware support spans ARM NEON/SVE providing 128/256-bit SIMD with INT8 dot products, Intel VNNI (Vector Neural Network Instructions) accelerating INT8 matrix multiplication on Xeon and Core processors, Qualcomm Hexagon DSP offering dedicated INT8 vector units, Apple Neural Engine with 16-bit and 8-bit arithmetic support, Google Edge TPU optimized for INT8 inference at 4 TOPS with systolic array architecture, and NVIDIA Tensor Cores supporting INT8 (Turing+) and INT4 (Ampere+) providing 2-4x throughput versus FP16. Implementation challenges include accuracy degradation particularly for small models or networks sensitive to quantization noise mitigated through mixed-precision quantization maintaining critical layers at higher precision, calibration complexity requiring representative data and careful scale determination avoiding clipping or underutilization of quantization range, and layer-wise sensitivity analysis identifying quantization-sensitive layers requiring special treatment, with frameworks like TensorRT, ONNX Runtime, TensorFlow Lite, and PyTorch supporting various quantization schemes and hardware-specific optimizations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:NeuralNetworkQuantisation
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Neural Network Quantisation (AI-0435) — content pending enrichment.

- ### Provenance
  - sources:: [[TensorRT]], [[ONNX Runtime]], [[TensorFlow Lite Quantization]]
  - migration-date:: 2026-04-26T00:00:00Z
