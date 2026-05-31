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
  "definition": "A software development kit from NVIDIA for optimising and running deep learning inference on NVIDIA GPUs, performing graph optimisations, precision calibration and kernel selection.",
  "domain": "deep-learning",
  "maturity": "established",
  "qualityScore": 0.7,
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
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-inference",
        "label": "Edge Inference"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
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
  - A software development kit from NVIDIA for optimising and running deep learning inference on NVIDIA GPUs, performing graph optimisations, precision calibration and kernel selection.

- ### Semantic Classification
  - owl-class:: deep-learning:TensorRT
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Inference Engine]]
  - bridges-to:: [[Model Deployment]]
  - requires:: [[Hardware Acceleration]]
  - enables:: [[Edge Inference]]

- ### Content
  - TensorRT takes a trained network and produces an optimised inference engine tuned for a target NVIDIA GPU. Optimisations include layer and tensor fusion, selection of efficient kernels, and reduced-precision execution such as FP16 and INT8 with calibration to limit accuracy loss.
  - It is used to reduce latency and increase throughput for production inference, including server deployments and embedded platforms. Models from common frameworks are imported through formats such as ONNX before being compiled into a TensorRT engine.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
