public:: true

# NVIDIA H200
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a82eb872eedd1818ad289a4754e82da0b8175e93c2bd34ec235d182cf55c44a4",
  "@type": "Page",
  "vc:slug": "nvidia-corporation-h200",
  "title": "NVIDIA H200",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-accelerator",
      "vc:label": "AI Accelerator"
    },
    {
      "@id": "urn:visionflow:linked:nvidia-corporation-h-100",
      "vc:label": "NVIDIA H100"
    },
    {
      "@id": "urn:visionflow:linked:high-bandwidth-memory",
      "vc:label": "High Bandwidth Memory"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nvidia-corporation-h200",
  "@type": "Class",
  "label": "NVIDIA H200",
  "definition": "The NVIDIA H200 is a data-centre GPU accelerator built on the Hopper architecture, positioned as the memory-upgraded successor to the H100 within the same generation. Its defining change is the adoption of HBM3e high-bandwidth memory, raising on-package capacity to 141 GB and memory bandwidth to roughly 4.8 TB/s — a substantial increase over the H100's 80 GB of HBM3. The extra capacity and bandwidth directly benefit large-language-model inference and training, where model weights and key-value caches are memory-bound, allowing larger models or longer context windows to be served per device and improving throughput on memory-limited workloads.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:ai-accelerator",
    "label": "AI Accelerator"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:high-bandwidth-memory",
        "label": "High Bandwidth Memory"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:data-centre",
        "label": "Data Centre"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:nvidia-corporation-h-100",
        "label": "NVIDIA H100"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nvidia-corporation",
        "label": "NVIDIA Corporation"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The NVIDIA H200 is a data-centre GPU accelerator built on the Hopper architecture, positioned as the memory-upgraded successor to the H100 within the same generation. Its defining change is the adoption of HBM3e high-bandwidth memory, raising on-package capacity to 141 GB and memory bandwidth to roughly 4.8 TB/s — a substantial increase over the H100's 80 GB of HBM3. The extra capacity and bandwidth directly benefit large-language-model inference and training, where model weights and key-value caches are memory-bound, allowing larger models or longer context windows to be served per device and improving throughput on memory-limited workloads."

- ### Semantic Classification
  - owl-class:: infrastructure:NvidiaH200
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[AI Accelerator]]
  - uses:: [[High Bandwidth Memory]]
  - contrasts-with:: [[NVIDIA H100]]
  - related-to:: [[NVIDIA Corporation]]

- ### Content

  ## Definition

  The **NVIDIA H200** is a Hopper-generation data-centre GPU that NVIDIA introduced as a memory-focused refresh of the H100. It retains the same compute silicon and instruction set as its predecessor but pairs it with faster, larger HBM3e memory. This makes it a distinct product SKU rather than a spelling variant of the H100: the two share an architecture but differ in the parameter that most constrains modern AI serving — memory.

  For large-language-model workloads, memory capacity and bandwidth frequently dominate performance. The H200's 141 GB of HBM3e lets a single accelerator hold larger models, bigger batches, or longer key-value caches without spilling across devices, while the higher bandwidth accelerates the weight and activation streaming that inference throughput depends on. Training pipelines that were memory-bound on the H100 see corresponding gains.

  ## Technical Details

  The H200 delivers approximately 141 GB of HBM3e memory at around 4.8 TB/s of bandwidth, compared with the H100's 80 GB of HBM3 at roughly 3.35 TB/s. Peak compute across the tensor and floating-point pipelines is broadly comparable to the H100 because the underlying processing cores are unchanged; the uplift is concentrated in memory-bound scenarios. The part is offered in SXM and NVL form factors for dense data-centre deployment, remains compatible with existing Hopper software stacks, and is commonly aggregated into eight-GPU server nodes and larger clusters. Organisations provisioning distributed training and inference — including decentralised compute networks — treat the H200 as a drop-in capacity upgrade path from the H100 within the same rack and interconnect designs.
