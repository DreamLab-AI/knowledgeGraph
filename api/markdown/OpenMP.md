public:: true

# OpenMP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f2dfd9476676a6118225644b849591e959474938eb38ef8df7d6c46c0c6273a7",
  "@type": "Page",
  "vc:slug": "openmp",
  "title": "OpenMP",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:api", "vc:label": "API"},
    {"@id": "urn:visionflow:linked:parallel-processing", "vc:label": "Parallel Processing"},
    {"@id": "urn:visionflow:linked:message-passing-interface", "vc:label": "Message Passing Interface"},
    {"@id": "urn:visionflow:linked:shared-memory", "vc:label": "Shared Memory"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:openmp",
  "@type": "Class",
  "label": "OpenMP",
  "definition": "An open standard API for shared-memory parallel programming in C, C++, and Fortran, in which developers annotate sequential code with compiler directives (pragmas) such as parallel regions, work-sharing loops, and tasks, and the compiler and runtime distribute the work across threads. Governed by the OpenMP Architecture Review Board since 1997, the specification has grown from simple loop-level parallelism to encompass explicit tasking, SIMD vectorisation, and offloading to GPUs and other accelerators via target directives. Its incremental, directive-based model makes it the dominant intra-node parallelisation approach in scientific and high-performance computing, commonly paired with MPI for communication between nodes.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:api", "label": "API"},
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:compiler", "label": "Compiler"},
      {"@id": "urn:ngm:class:shared-memory", "label": "Shared Memory"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:multithreading", "label": "Multithreading"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:parallel-processing", "label": "Parallel Processing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:message-passing-interface", "label": "Message Passing Interface"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High-Performance Computing"},
      {"@id": "urn:ngm:class:scientific-computing", "label": "Scientific Computing"}
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
  - "An open standard API for shared-memory parallel programming in C, C++, and Fortran, in which developers annotate sequential code with compiler directives (pragmas) such as parallel regions, work-sharing loops, and tasks, and the compiler and runtime distribute the work across threads. Governed by the OpenMP Architecture Review Board since 1997, the specification has grown from simple loop-level parallelism to encompass explicit tasking, SIMD vectorisation, and offloading to GPUs and other accelerators via target directives. Its incremental, directive-based model makes it the dominant intra-node parallelisation approach in scientific and high-performance computing, commonly paired with MPI for communication between nodes."

- ### Semantic Classification
  - owl-class:: infrastructure:OpenMP
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[API]]
  - enables:: [[Parallel Processing]]
  - contrasts-with:: [[Message Passing Interface]]
  - requires:: [[Compiler]]

- ### Content

  ## Definition

  **OpenMP** (Open Multi-Processing) is the de facto standard for exploiting multicore, shared-memory hardware from C, C++, and Fortran. Its distinguishing idea is incrementality: rather than rewriting a program around threads, the developer marks hot loops and regions with directives — `#pragma omp parallel for` in C/C++, `!$omp` sentinels in Fortran — and a conforming [[Compiler]] generates the thread management, work distribution, and synchronisation. Code without OpenMP support simply ignores the pragmas and runs sequentially, so a single source tree serves both serial and parallel builds.

  The execution model is fork-join over [[Shared Memory]]: a master thread forks a team at a parallel region, the team divides iterations or tasks between cores, and threads rejoin at an implicit barrier. Data-sharing clauses (`shared`, `private`, `firstprivate`, `reduction`) control which variables are replicated per thread and which are visible to all — the central discipline for avoiding data races. Later revisions added explicit tasking with dependencies (3.0, 4.0), `simd` directives for vectorisation, and `target` offloading that maps regions and data onto GPUs, taking the standard well beyond its loop-parallel origins; OpenMP 5.x and 6.0 continue to refine accelerator and memory-management support.

  OpenMP occupies the intra-node half of the classic HPC pairing: it parallelises within a single machine's cores, while the [[Message Passing Interface]] handles distributed-memory communication between nodes. The hybrid "MPI + OpenMP" pattern remains standard on supercomputers, and OpenMP alone powers a large share of multithreaded [[Scientific Computing]] codes, numerical libraries, and engineering simulations.

  ## Technical Details

  - **Core constructs**: `parallel` (fork a team), `for`/`do` (work-share loops with `schedule(static|dynamic|guided)`), `sections`, `single`, `task`/`taskwait` with `depend` clauses, `critical`, `atomic`, `barrier`, and `reduction` for safe accumulation.
  - **Runtime control**: `OMP_NUM_THREADS`, `omp_get_thread_num()`, nested parallelism, and processor affinity via `OMP_PLACES`/`OMP_PROC_BIND` — affinity tuning is often decisive for NUMA machines.
  - **Implementations**: GCC (libgomp), LLVM/Clang (libomp), Intel oneAPI, NVIDIA HPC SDK, and Cray/AMD compilers; coverage of the newest offload features varies by vendor.
  - **Trade-offs**: minimal code intrusion and excellent loop-level scaling on a node, but no distributed-memory story (that is MPI's role), and false sharing or race conditions remain the programmer's responsibility.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
