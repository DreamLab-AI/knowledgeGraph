public:: true

# Edge Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0a0372a8200a50664dd4c742f01fd6fb85d6aa8ca4c7a78f783927c4c89c2fb3",
  "@type": "Page",
  "vc:slug": "edge-inference",
  "title": "Edge Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:inference-engine",
      "vc:label": "Inference Engine"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-distillation",
      "vc:label": "Knowledge Distillation"
    },
    {
      "@id": "urn:visionflow:linked:edge-ai",
      "vc:label": "Edge AI"
    },
    {
      "@id": "urn:visionflow:linked:edge-computing",
      "vc:label": "Edge Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Edge Inference"
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
  "@id": "urn:ngm:class:edge-inference",
  "@type": "Class",
  "label": "Edge Inference",
  "definition": "The execution of machine learning model inference on local edge devices rather than in centralised cloud infrastructure, close to where data is generated.",
  "domain": "machine-learning",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:edge-ai",
      "label": "Edge AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:knowledge-distillation",
        "label": "Knowledge Distillation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:edge-inference:d2d9d8baf591",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0a0372a8200a50664dd4c742f01fd6fb85d6aa8ca4c7a78f783927c4c89c2fb3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Inference Engine]]",
      "resolved": "urn:visionflow:linked:inference-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Distillation]]",
      "resolved": "urn:visionflow:linked:knowledge-distillation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge AI]]",
      "resolved": "urn:visionflow:linked:edge-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Computing]]",
      "resolved": "urn:visionflow:linked:edge-computing",
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
  - The execution of machine learning model inference on local edge devices rather than in centralised cloud infrastructure, close to where data is generated.

- ### Semantic Classification
  - owl-class:: machine-learning:EdgeInference
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Edge AI]]
  - bridges-to:: [[Edge Computing]]
  - requires:: [[Inference Engine]], [[Knowledge Distillation]]
  - enables:: [[Edge AI]]

- ### Content
  - Edge inference runs models on devices such as phones, sensors, cameras and embedded controllers. Doing so reduces latency, lowers bandwidth use and can improve privacy because raw data need not leave the device.
  - The constraints of edge hardware, limited memory, compute and power, drive the use of model compression techniques including quantisation, pruning and distillation, together with specialised runtimes. These methods trade some accuracy for the ability to meet tight latency and energy budgets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
