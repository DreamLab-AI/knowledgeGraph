public:: true

# NVIDIA H100
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2a8c7b07bb878e29ad81cd59f3f075a4515258269916dfb901582975235ed6e",
  "@type": "Page",
  "vc:slug": "nvidia-h-100",
  "title": "NVIDIA H100",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gpu-cluster",
      "vc:label": "GPU Cluster"
    },
    {
      "@id": "urn:visionflow:linked:gpu-computing",
      "vc:label": "GPU Computing"
    },
    {
      "@id": "urn:visionflow:linked:nvidia",
      "vc:label": "NVIDIA"
    },
    {
      "@id": "urn:visionflow:linked:gpu",
      "vc:label": "GPU"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NVIDIA H100"
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
  "@id": "urn:ngm:class:nvidia-h-100",
  "@type": "Class",
  "label": "NVIDIA H100",
  "definition": "The NVIDIA H100 is a data-centre GPU based on the Hopper architecture, designed for AI training and inference and high-performance computing. It introduced a Transformer Engine and FP8 support for large model workloads.",
  "domain": "computing",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gpu",
      "label": "GPU"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:gpu-cluster",
        "label": "GPU Cluster"
      },
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nvidia-h-100:17e97e92d5b7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2a8c7b07bb878e29ad81cd59f3f075a4515258269916dfb901582975235ed6e"
  },
  "vc:resolutions": [
    {
      "raw": "[[GPU Cluster]]",
      "resolved": "urn:visionflow:linked:gpu-cluster",
      "kind": "StubLink"
    },
    {
      "raw": "[[GPU Computing]]",
      "resolved": "urn:visionflow:linked:gpu-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NVIDIA]]",
      "resolved": "urn:visionflow:linked:nvidia",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GPU]]",
      "resolved": "urn:visionflow:linked:gpu",
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
  - The NVIDIA H100 is a data-centre GPU based on the Hopper architecture, designed for AI training and inference and high-performance computing. It introduced a Transformer Engine and FP8 support for large model workloads.

- ### Semantic Classification
  - owl-class:: computing:NVIDIAH100
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[GPU]]
  - bridges-to:: [[NVIDIA]]
  - enables:: [[GPU Cluster]], [[GPU Computing]]

- ### Content
  - The NVIDIA H100 is a Hopper architecture accelerator aimed at AI and high-performance computing, featuring high-bandwidth memory, fourth-generation NVLink and a Transformer Engine that supports FP8 precision. It succeeded the A100 and became a standard component for training large language models.
  - H100 GPUs are deployed in large clusters connected by high-speed interconnects to train and serve models with billions of parameters. Strong demand for the part during the generative AI boom made it a notable constraint on AI compute capacity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
