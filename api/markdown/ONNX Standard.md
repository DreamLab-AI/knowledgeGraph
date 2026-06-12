public:: true

# ONNX Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7c0af9bcd6ce2c8e1f6f9a0171dad1a5bd9f189151a85e03435e393940d22ae3",
  "@type": "Page",
  "vc:slug": "onnx-standard",
  "title": "ONNX Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:onnx",
      "vc:label": "ONNX"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:neural-rendering",
      "vc:label": "Neural Rendering"
    },
    {
      "@id": "urn:visionflow:linked:open-standards",
      "vc:label": "Open Standards"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ONNX Standard"
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
  "@id": "urn:ngm:class:onnx-standard",
  "@type": "Class",
  "label": "ONNX Standard",
  "definition": "The ONNX standard defines an open format for representing machine learning models as a computation graph of typed operators, enabling models to move between training and inference frameworks.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:onnx",
        "label": "ONNX"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:onnx-standard:30d8628d516e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7c0af9bcd6ce2c8e1f6f9a0171dad1a5bd9f189151a85e03435e393940d22ae3"
  },
  "vc:resolutions": [
    {
      "raw": "[[ONNX]]",
      "resolved": "urn:visionflow:linked:onnx",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Rendering]]",
      "resolved": "urn:visionflow:linked:neural-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Standards]]",
      "resolved": "urn:visionflow:linked:open-standards",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
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
  - The ONNX standard defines an open format for representing machine learning models as a computation graph of typed operators, enabling models to move between training and inference frameworks.

- ### Semantic Classification
  - owl-class:: metaverse:ONNXStandard
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning Discipline]]
  - bridges-to:: [[Neural Rendering]], [[Open Standards]]
  - requires:: [[ONNX]]
  - enables:: [[Deep Learning]]

- ### Content
  - ONNX captures a model as a directed graph of operators with defined semantics and tensor types, plus an opset version that fixes operator behaviour. Exporters and runtimes target this format so a model trained in one framework can be executed in another.
  - Model interoperability matters for deploying neural networks inside engines and XR runtimes, where the training framework and the inference target differ. ONNX provides a stable intermediate representation for that handoff.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
