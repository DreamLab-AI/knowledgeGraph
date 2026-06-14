public:: true

# GPU
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:45c136d8f686da8a20bdaaf04901279178e2518f01466eba25a5a51bf8c51b5a",
  "@type": "Page",
  "vc:slug": "gpu",
  "title": "GPU",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:shader",
      "vc:label": "Shader"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:rasterization",
      "vc:label": "Rasterization"
    },
    {
      "@id": "urn:visionflow:linked:ray-tracing",
      "vc:label": "Ray Tracing"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing-unit",
      "vc:label": "Graphics Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing",
      "vc:label": "Graphics Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GPU"
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
  "@id": "urn:ngm:class:gpu",
  "@type": "Class",
  "label": "GPU",
  "definition": "A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphics-processing",
      "label": "Graphics Processing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:gpu:e3c5ba51dba8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:45c136d8f686da8a20bdaaf04901279178e2518f01466eba25a5a51bf8c51b5a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Shader]]",
      "resolved": "urn:visionflow:linked:shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rasterization]]",
      "resolved": "urn:visionflow:linked:rasterization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ray Tracing]]",
      "resolved": "urn:visionflow:linked:ray-tracing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics Processing Unit]]",
      "resolved": "urn:visionflow:linked:graphics-processing-unit",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Processing]]",
      "resolved": "urn:visionflow:linked:graphics-processing",
      "kind": "StubLink"
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
  - A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads.

- ### Semantic Classification
  - owl-class:: general:GPU
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics Processing]]
  - bridges-to:: [[Graphics Processing Unit]]
  - requires:: [[Shader]]
  - enables:: [[Real-Time Rendering]], [[Rasterization]], [[Ray Tracing]]

- ### Content
  - A GPU contains many simple cores organised for single-instruction multiple-data execution, which suits the per-pixel and per-vertex arithmetic of rendering as well as matrix-heavy compute tasks. Programmable shader stages and compute pipelines expose this parallelism to applications through graphics and compute APIs.
  - Beyond graphics, GPUs accelerate scientific computing, simulation and machine learning because many of those workloads map well onto wide parallel hardware. The term GPU is used interchangeably with Graphics Processing Unit.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
