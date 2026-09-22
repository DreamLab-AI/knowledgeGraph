public:: true

# Central Processing Unit

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:central-processing-unit",
  "@type": "Page",
  "title": "Central Processing Unit",
  "vc:slug": "central-processing-unit",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:central-processing-unit",
  "@type": "Class",
  "label": "Central Processing Unit",
  "definition": "The central processing unit (CPU) is the primary computational component of a computer, executing the instructions of programs through arithmetic, logic, control, and input/output operations. It fetches instructions from memory, decodes them, and executes them in a repeating cycle, coordinated by a control unit and carried out by arithmetic-logic units across one or more cores. As a general-purpose processor it contrasts with specialised accelerators that optimise for narrower, highly parallel workloads.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-hardware",
      "label": "Computer Hardware"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:graphics-processing-unit",
        "label": "Graphics Processing Unit"
      },
      {
        "@id": "urn:ngm:class:gpu",
        "label": "GPU"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:computer-hardware",
        "label": "Computer Hardware"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-processing",
        "label": "Data Processing"
      },
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:data-processing",
        "label": "Data Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computer-hardware",
        "label": "Computer Hardware"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:computer-hardware",
        "label": "Computer Hardware"
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
  - The central processing unit (CPU) is the primary computational component of a computer, executing the instructions of programs through arithmetic, logic, control, and input/output operations. It fetches instructions from memory, decodes them, and executes them in a repeating cycle, coordinated by a control unit and carried out by arithmetic-logic units across one or more cores. As a general-purpose processor it contrasts with specialised accelerators that optimise for narrower, highly parallel workloads.
  - Related concepts: [[Computer Hardware]] [[Graphics Processing Unit]] [[Parallel Computing]] [[Data Processing]]
- ### Overview
  - The CPU executes the fetch-decode-execute cycle that drives general-purpose computation.
  - A control unit sequences operations while arithmetic-logic units perform the actual calculations.
  - Modern CPUs integrate multiple cores, cache hierarchies, and pipelines to raise throughput.
  - Compared with a GPU, a CPU favours low-latency execution of complex, branchy, sequential workloads.
- ### Key aspects
  - The fetch-decode-execute cycle is the fundamental unit of CPU operation.
  - Arithmetic-logic units perform integer and logical computation.
  - Cache hierarchies reduce the latency of memory access.
  - Multiple cores enable thread-level [[Parallel Computing]].
  - Contrasts with the [[Graphics Processing Unit]], which favours wide data parallelism.
- ### Applications
  - Running operating systems and general-purpose application logic.
  - Orchestrating workloads and dispatching tasks to accelerators.
  - Powering [[Edge Computing]] devices where general-purpose flexibility matters.
  - Executing latency-sensitive, control-heavy code paths across server and client systems.
- ### Relationships
  - subClassOf:: [[Computer Hardware]]
  - contrastsWith:: [[Graphics Processing Unit]]
  - contrastsWith:: [[GPU]]
  - hasPart:: [[Computer Hardware]]
  - relatedTo:: [[Parallel Computing]]
  - relatedTo:: [[Edge Computing]]
  - relatedTo:: [[Infrastructure]]
  - enables:: [[Data Processing]]
  - enables:: [[Parallel Computing]]
  - supports:: [[Infrastructure]]
  - supports:: [[Data Processing]]
  - requires:: [[Computer Hardware]]
  - partOf:: [[Computer Hardware]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
