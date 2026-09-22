public:: true

# Message Passing Interface

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:message-passing-interface",
  "@type": "Page",
  "title": "Message Passing Interface",
  "vc:slug": "message-passing-interface",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:message-passing-interface",
  "@type": "Class",
  "label": "Message Passing Interface",
  "definition": "Message Passing Interface (MPI) is a standardised communication protocol and application programming interface for parallel and distributed computing. It defines primitives for point-to-point and collective communication between processes running across multiple compute nodes, enabling tightly coupled high-performance computing workloads. MPI is the de facto standard for scientific computing, numerical simulations, and distributed AI training at supercomputer scale.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    {
      "@id": "urn:ngm:class:parallel-computing",
      "label": "Parallel Computing"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:parallel-computing",
        "label": "Parallel Computing"
      },
      {
        "@id": "urn:ngm:class:network-fabric",
        "label": "Network Fabric"
      },
      {
        "@id": "urn:ngm:class:infiniband",
        "label": "InfiniBand"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:collective-communication",
        "label": "Collective Communication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:high-performance-computing",
        "label": "High Performance Computing"
      },
      {
        "@id": "urn:ngm:class:cluster-computing",
        "label": "Cluster Computing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:distributed-training",
        "label": "Distributed Training"
      },
      {
        "@id": "urn:ngm:class:numerical-simulation",
        "label": "Numerical Simulation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:mpi-forum",
        "label": "MPI Forum"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:openmp",
        "label": "OpenMP"
      },
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:remote-direct-memory-access",
        "label": "Remote Direct Memory Access"
      },
      {
        "@id": "urn:ngm:class:supercomputing",
        "label": "Supercomputing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:shared-memory-model",
        "label": "Shared Memory Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:data-parallelism",
        "label": "Data Parallelism"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Message Passing Interface]] (MPI) is the dominant standard for inter-process communication in [[High Performance Computing]] and large-scale [[Distributed Computing]].
  - It specifies how parallel processes, potentially on separate nodes, exchange data via point-to-point sends/receives and collective operations such as broadcast, scatter, gather, and reduce.
  - MPI implementations (Open MPI, MPICH, Intel MPI) underpin scientific simulations and increasingly large-scale [[Distributed Training]] of AI models.

- ### Overview
  - Developed by the MPI Forum and standardised from 1994 (MPI-1) through MPI-4, the specification is language-independent with canonical bindings for C, Fortran, and via wrappers Python. MPI processes are identified by rank within a communicator; the programmer explicitly orchestrates communication, giving fine-grained control over data movement and synchronisation. High-bandwidth, low-latency interconnects such as [[InfiniBand]] are essential for achieving peak MPI performance.

- ### Key aspects
  - **Point-to-point operations** — `MPI_Send`/`MPI_Recv` and non-blocking variants.
  - **Collective operations** — barrier, broadcast, scatter, gather, allreduce.
  - **Communicators** — groups of ranks scoped for message isolation.
  - **One-sided communication** — `MPI_Put`/`MPI_Get` for RDMA-style access.
  - **Process topologies** — Cartesian and graph communicator layouts.

- ### Mechanisms
  - A job launcher (mpirun/mpiexec) spawns ranked processes. Processes call MPI primitives; the MPI runtime maps operations to the underlying network fabric. Collective operations are implemented via tree- or ring-based algorithms optimised for the interconnect topology.

- ### Applications
  - Weather and climate modelling (ECMWF, NCAR).
  - Computational fluid dynamics and finite-element analysis.
  - Genomics pipelines on HPC clusters.
  - Distributed deep learning with NCCL-over-MPI or pure MPI allreduce.

- ### Relationships
  - uses:: [[Parallel Computing]]
  - uses:: [[Network Fabric]]
  - uses:: [[InfiniBand]]
  - implements:: [[Distributed Computing]]
  - implements:: [[Collective Communication]]
  - dependsOn:: [[High Performance Computing]]
  - dependsOn:: [[Cluster Computing]]
  - enables:: [[Distributed Training]]
  - enables:: [[Numerical Simulation]]
  - relatedTo:: [[OpenMP]]
  - relatedTo:: [[CUDA]]
  - relatedTo:: [[Remote Direct Memory Access]]
  - supports:: [[Machine Learning]]
  - contrastsWith:: [[Shared Memory Model]]

- ### Provenance
  - updated:: 2026-06-15
