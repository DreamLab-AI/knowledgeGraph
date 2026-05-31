public:: true

# TensorFlow Lite
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ed1bea2a5583c733a702553bc2eb4cdcb7c690df6188d01dfdbde48c14f18ade",
  "@type": "Page",
  "vc:slug": "tensor-flow-lite",
  "title": "TensorFlow Lite",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-framework",
      "vc:label": "Machine Learning Framework"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "TensorFlow Lite"
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
  "@id": "urn:ngm:class:tensor-flow-lite",
  "@type": "Class",
  "label": "TensorFlow Lite",
  "definition": "TensorFlow Lite is a framework from Google for running machine learning models on mobile, embedded, and edge devices with reduced memory and computational requirements.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-framework",
      "label": "Machine Learning Framework"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:tensor-flow-lite:16da8c4c19af",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ed1bea2a5583c733a702553bc2eb4cdcb7c690df6188d01dfdbde48c14f18ade"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Framework]]",
      "resolved": "urn:visionflow:linked:machine-learning-framework",
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
  - TensorFlow Lite is a framework from Google for running machine learning models on mobile, embedded, and edge devices with reduced memory and computational requirements.

- ### Semantic Classification
  - owl-class:: machine-learning:TensorFlowLite
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Machine Learning Framework]]
  - bridges-to:: [[Machine Learning Framework]]
  - requires:: [[Machine Learning]]

- ### Content
  - TensorFlow Lite converts trained TensorFlow models into a compact format and provides an interpreter optimised for resource-constrained hardware. It supports techniques such as quantisation to reduce model size and speed up inference.
  - It targets on-device inference on Android, iOS, microcontrollers, and other edge hardware, and it can use hardware accelerators where available. The project has since been continued under the name LiteRT.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
