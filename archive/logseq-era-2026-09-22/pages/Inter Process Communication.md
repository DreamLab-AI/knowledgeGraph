public:: true

# Inter Process Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:inter-process-communication",
  "@type": "Page",
  "title": "Inter Process Communication",
  "vc:slug": "inter-process-communication",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:inter-process-communication",
  "@type": "Class",
  "label": "Inter Process Communication",
  "definition": "Inter-process communication (IPC) is the set of mechanisms an operating system provides for separate processes to exchange data and coordinate their actions despite running in isolated address spaces. Common mechanisms include pipes, message queues, shared memory, sockets and remote procedure calls, each trading off speed, structure and scope. IPC is foundational to modular system design, microservices and any architecture composed of cooperating processes.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:operating-system",
      "label": "Operating System"
    }
  ],
  "relations": {
    "supports": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      },
      {
        "@id": "urn:ngm:class:shared-memory",
        "label": "Shared Memory"
      },
      {
        "@id": "urn:ngm:class:process",
        "label": "Process"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      },
      {
        "@id": "urn:ngm:class:scheduler",
        "label": "Scheduler"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shared-memory",
        "label": "Shared Memory"
      },
      {
        "@id": "urn:ngm:class:remote-procedure-call",
        "label": "Remote Procedure Call"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      },
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Middleware"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Operating System"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:multithreading",
        "label": "Multithreading"
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
  - [[Inter Process Communication]] is an [[Infrastructure]] capability of the [[Operating System]] letting separate [[Process]]es exchange data via [[Message Passing]], [[Shared Memory]] and [[Remote Procedure Call]].
- ### Overview
  - Because processes are isolated for safety, the OS must supply explicit channels for them to cooperate; these channels are collectively called IPC.
  - The choice of mechanism shapes performance and coupling: shared memory is fast but unstructured, while message queues and RPC add structure across machines.
- ### Mechanisms
  - Pipes and message queues: ordered byte or message streams between processes.
  - Shared memory: a common region mapped into multiple processes for low-latency exchange.
  - Sockets and RPC: networked communication enabling distributed and microservice systems.
- ### Applications
  - Microservice and modular architectures composed of cooperating processes.
  - Operating-system services, daemons and client-server desktop software.
  - Distributed systems and middleware bridging processes across hosts.
- ### Relationships
  - supports:: [[Microservices]]
  - supports:: [[Distributed Systems]]
  - relatedTo:: [[Message Passing]]
  - relatedTo:: [[Shared Memory]]
  - relatedTo:: [[Process]]
  - dependsOn:: [[Operating System]]
  - dependsOn:: [[Scheduler]]
  - implements:: [[Message Passing]]
  - partOf:: [[Operating System]]
  - uses:: [[Shared Memory]]
  - uses:: [[Remote Procedure Call]]
  - enables:: [[Microservices]]
  - enables:: [[Middleware]]
  - requires:: [[Operating System]]
  - contrastsWith:: [[Multithreading]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
