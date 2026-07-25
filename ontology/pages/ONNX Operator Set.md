public:: true

# ONNX Operator Set
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6ac7e20b9cb428e2ff900d48cacf8ba39c0c642fae05660d8ae11be2f6220e54",
  "@type": "Page",
  "vc:slug": "onnx-operator-set",
  "title": "ONNX Operator Set",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:onnx",
      "vc:label": "ONNX"
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
      "vc:value": "ONNX Operator Set"
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
  "@id": "urn:ngm:class:onnx-operator-set",
  "@type": "Class",
  "label": "ONNX Operator Set",
  "definition": "An ONNX operator set is a versioned collection of the computational operators defined by the Open Neural Network Exchange format, fixing the operators and their semantics that a model may use.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:onnx",
      "label": "ONNX"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:onnx",
        "label": "ONNX"
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
  "@id": "urn:visionflow:annotation:link-resolutions:onnx-operator-set:e7b1f42ecae8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6ac7e20b9cb428e2ff900d48cacf8ba39c0c642fae05660d8ae11be2f6220e54"
  },
  "vc:resolutions": [
    {
      "raw": "[[ONNX]]",
      "resolved": "urn:visionflow:linked:onnx",
      "kind": "ResolvedLink"
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
  - An ONNX operator set is a versioned collection of the computational operators defined by the Open Neural Network Exchange format, fixing the operators and their semantics that a model may use.

- ### Semantic Classification
  - owl-class:: machine-learning:ONNXOperatorSet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[ONNX]]
  - bridges-to:: [[Machine Learning Discipline]]
  - requires:: [[ONNX]]

- ### Content
  - ONNX defines models as computation graphs whose nodes are operators such as convolution, matrix multiplication, and activation functions. The operator set, identified by an opset version, specifies exactly which operators exist and how each behaves.
  - A model declares the opset version it targets, and runtimes implement the corresponding operators. Versioning the operator set allows the format to add or change operators over time while keeping older models reproducible.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
