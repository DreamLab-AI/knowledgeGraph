public:: true

# In-Process Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5332397fbdc32628cc37f8f01f1810a12d29dbbdff93eec4b768f7cc6a6241bf",
  "@type": "Page",
  "vc:slug": "in-process-communication",
  "title": "In-Process Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-architecture",
      "vc:label": "Software Architecture"
    },
    {
      "@id": "urn:visionflow:linked:monolithic-architecture",
      "vc:label": "Monolithic Architecture"
    },
    {
      "@id": "urn:visionflow:linked:inter-process-communication",
      "vc:label": "Inter Process Communication"
    },
    {
      "@id": "urn:visionflow:linked:shared-memory",
      "vc:label": "Shared Memory"
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
  "@id": "urn:ngm:class:in-process-communication",
  "@type": "Class",
  "label": "In-Process Communication",
  "definition": "In-process communication is the exchange of data and control between software components running inside a single operating-system process: direct function and method calls, shared objects on the heap, and in-memory events. Because callers and callees share one address space, invocation costs nanoseconds, arguments pass by reference without serialisation, and failures are shared — the defining communication style of monolithic architectures, and the deliberate opposite of inter-process communication, which crosses process boundaries via sockets, pipes, or messaging at the price of serialisation, latency, and partial-failure semantics.",
  "domain": "distributed-systems",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:software-architecture",
    "label": "Software Architecture"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:monolithic-architecture",
        "label": "Monolithic Architecture"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shared-memory",
        "label": "Shared Memory"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:inter-process-communication",
        "label": "Inter-Process Communication"
      },
      {
        "@id": "urn:ngm:class:remote-procedure-call",
        "label": "Remote Procedure Call"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      },
      {
        "@id": "urn:ngm:class:concurrency",
        "label": "Concurrency"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "In-process communication is the exchange of data and control between software components running inside a single operating-system process: direct function and method calls, shared objects on the heap, and in-memory events. Because callers and callees share one address space, invocation costs nanoseconds, arguments pass by reference without serialisation, and failures are shared — the defining communication style of monolithic architectures, and the deliberate opposite of inter-process communication, which crosses process boundaries via sockets, pipes, or messaging at the price of serialisation, latency, and partial-failure semantics."

- ### Semantic Classification
  - owl-class:: distributed-systems:InProcessCommunication
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Software Architecture]]
  - part-of:: [[Monolithic Architecture]]
  - uses:: [[Shared Memory]]
  - contrasts-with:: [[Inter Process Communication]], [[Remote Procedure Call]]

- ### Content

  ## Definition

  **In-process communication** is how components interact when they are compiled or loaded into the same operating-system process. The mechanisms are those of the language runtime itself: function and method invocation through the call stack, objects passed by reference on a shared heap, callbacks and in-memory event buses, and synchronisation primitives over shared state. There is no marshalling, no network hop, and no independent failure domain — a call either returns, throws, or takes the whole process down with it.

  These properties give in-process communication its characteristic profile. Invocations cost nanoseconds rather than the microseconds-to-milliseconds of [[Inter Process Communication]] or remote calls, so interfaces can be fine-grained without performance penalty. Type systems and compilers check contracts across component boundaries at build time, and transactions can span modules trivially because all state changes occur in one memory image under one scheduler. The costs are the mirror image: components cannot be deployed, scaled, or restarted independently; a memory leak or crash in one module is a failure of all; and technology choice is fixed process-wide, since everything must share a runtime.

  This is precisely why in-process communication is the defining trait of [[Monolithic Architecture]]: a monolith is an application whose internal boundaries are module interfaces crossed in-process, whereas microservices convert those boundaries into network calls with serialisation, timeouts, and partial failure. The engineering trade is not about code organisation — a well-modularised monolith ("modular monolith") keeps strict internal boundaries — but about which failure and deployment semantics each boundary should have.

  ## Technical Details

  Typical in-process mechanisms and their characteristics:

  - **Direct invocation**: static or virtual dispatch through the call stack; sub-microsecond, synchronous, with compile-time type checking. The default within any module boundary.
  - **Shared-heap data structures**: pass-by-reference collections, caches, and object graphs; zero-copy but requiring discipline (immutability or locking) once threads are involved.
  - **In-memory events and mediators**: observer patterns, in-process event buses (e.g. Spring application events, .NET MediatR); decouple caller from callee while retaining shared fate and ordering within the process.
  - **Threads and channels**: concurrency inside the process using shared memory, locks, atomics, or CSP-style channels (Go, Rust mpsc), blending communication with scheduling.
  - **Plugin and dynamic loading**: shared libraries or JVM/CLR assemblies loaded into the host process — in-process communication across independently compiled artefacts, with versioning as the principal hazard.

  The architectural decision rule follows from the cost model: keep chatty, consistency-critical interactions in-process, and reserve process or network boundaries for components that genuinely need independent scaling, deployment cadence, or fault isolation.

  ## Current Landscape

  The industry pendulum has swung markedly back towards in-process architectures. The CNCF's 2025 annual survey found that 42% of organisations that adopted microservices are consolidating services back into larger deployable units, with the "modular monolith" — strict module boundaries crossed in-process rather than over the network — emerging as the pragmatic middle ground. The canonical reference case remains Amazon Prime Video's Video Quality Analysis team, which in March 2023 consolidated a Step Functions/Lambda-based distributed pipeline into a single-process service, cutting infrastructure costs by roughly 90% by replacing S3-mediated data transfer with in-memory buffers. Cost analyses published through 2025 put the "microservices tax" at roughly 3.75–6x the infrastructure cost of an equivalent monolith, and service-mesh adoption fell from 18% (Q3 2023) to 8% (Q3 2025) in CNCF tracking — evidence that teams are re-pricing the trade between in-process calls and network boundaries. Current guidance converges on team-size thresholds: below roughly ten developers a monolith wins outright, the 10–50 range favours modular monoliths, and only genuinely independent teams and scaling domains justify converting in-process boundaries into network ones.

  **Sources**:
  - https://byteiota.com/microservices-vs-monolith-42-return-to-modular-monoliths/
  - https://www.softwareseni.com/the-great-microservices-consolidation-what-the-cncf-2025-survey-reveals-about-industry-trends/
  - https://refactix.com/software-architecture-design/microservices-to-modular-monolith-migration-guide
  - https://debugg.ai/resources/modular-monolith-vs-microservices-2025-consolidation-and-tooling-playbook
