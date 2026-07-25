public:: true

# CPU

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:cpu", "@type": "Page", "title": "CPU", "vc:slug": "cpu", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cpu",
  "@type": "Class",
  "label": "CPU",
  "definition": "A central processing unit (CPU) is the primary general-purpose processor of a computer, responsible for fetching, decoding, and executing the instructions of programs. It performs arithmetic, logic, control, and input/output operations dictated by software, coordinating the activity of the whole machine. As a versatile sequential and lightly parallel engine, the CPU contrasts with specialised accelerators such as GPUs that favour massive data parallelism.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:hardware",
      "label": "Hardware"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:hardware",
        "label": "Hardware"
      },
      {
        "@id": "urn:ngm:class:compute-resources",
        "label": "Compute Resources"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:cache",
        "label": "Cache"
      },
      {
        "@id": "urn:ngm:class:instruction-set-architecture",
        "label": "Instruction Set Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:memory",
        "label": "Memory"
      },
      {
        "@id": "urn:ngm:class:clock-speed",
        "label": "Clock Speed"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:instruction-set-architecture",
        "label": "Instruction Set Architecture"
      },
      {
        "@id": "urn:ngm:class:memory",
        "label": "Memory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      },
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cache",
        "label": "Cache"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:throughput",
        "label": "Throughput"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:computer-architecture",
        "label": "Computer Architecture"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A central processing unit (CPU) is the primary general-purpose processor of a computer, responsible for fetching, decoding, and executing the instructions of programs. It performs arithmetic, logic, control, and input/output operations dictated by software, coordinating the activity of the whole machine. As a versatile sequential and lightly parallel engine, the CPU contrasts with specialised accelerators such as GPUs that favour massive data parallelism.
  - Related concepts: [[Hardware]] [[Operating System]] [[GPU]] [[Compute Resources]] [[Parallel Computing]]
- ### Overview
  - A modern CPU executes instructions through a pipeline that fetches, decodes, executes, and retires operations, accelerated by caches, branch prediction, out-of-order execution, and superscalar dispatch. Its capability is governed by clock speed, instruction-set architecture, core count, and the memory hierarchy that feeds it. Multi-core CPUs provide modest parallelism well suited to diverse, branch-heavy workloads, whereas data-parallel and matrix-heavy tasks are increasingly offloaded to GPUs and other accelerators, with the CPU acting as the orchestrating host.
- ### Mechanisms
  - Instruction pipeline: overlapping fetch, decode, execute, and write-back stages to raise throughput.
  - Memory hierarchy: multi-level caches that hide the latency of main memory access.
  - Instruction-set architecture: the contract between hardware and software defining available operations.
  - Parallelism: multiple cores and superscalar, out-of-order execution exploiting instruction-level parallelism.
  - Speculation: branch prediction and prefetching that keep the pipeline busy.
- ### Applications
  - General-purpose application and operating-system execution.
  - Server and cloud compute hosting diverse, latency-sensitive workloads.
  - Orchestrating accelerators in heterogeneous compute systems.
  - Edge and embedded control where power efficiency and versatility matter.
- ### Relationships
  - partOf:: [[Hardware]]
  - partOf:: [[Compute Resources]]
  - hasPart:: [[Cache]]
  - hasPart:: [[Instruction Set Architecture]]
  - requires:: [[Memory]]
  - requires:: [[Clock Speed]]
  - dependsOn:: [[Instruction Set Architecture]]
  - dependsOn:: [[Memory]]
  - enables:: [[Operating System]]
  - enables:: [[Parallel Computing]]
  - supports:: [[Operating System]]
  - uses:: [[Cache]]
  - relatedTo:: [[Throughput]]
  - relatedTo:: [[Latency]]
  - relatedTo:: [[Computer Architecture]]
  - contrastsWith:: [[GPU]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
