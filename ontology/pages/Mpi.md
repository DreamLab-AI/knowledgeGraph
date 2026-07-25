public:: true

# Mpi

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:mpi", "@type":"Page", "title":"Mpi", "vc:slug":"mpi", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:mpi",
  "@type":"Class",
  "label":"Mpi",
  "definition":"MPI (Message Passing Interface) is a standardised, portable specification for message-passing parallel programming, defining a library of routines for point-to-point and collective communication among processes in a distributed-memory system. It is the dominant programming model for high-performance computing clusters, where independent processes exchange data explicitly rather than through shared memory. Implementations such as Open MPI and MPICH provide the runtime that maps the standard onto specific hardware and interconnects.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:message-passing","label":"Message Passing"}],
  "relations":{
    "standardizedBy":[
      {"@id":"urn:ngm:class:standards-organization","label":"Standards Organization"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:parallel-processing","label":"Parallel Processing"},
      {"@id":"urn:ngm:class:high-performance-computing","label":"High-Performance Computing"},
      {"@id":"urn:ngm:class:collective-communication","label":"Collective Communication"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:interconnect","label":"Interconnect"},
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:interconnect","label":"Interconnect"},
      {"@id":"urn:ngm:class:computing-infrastructure","label":"Computing Infrastructure"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"},
      {"@id":"urn:ngm:class:scalability","label":"Scalability"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:parallel-computing","label":"Parallel Computing"},
      {"@id":"urn:ngm:class:cuda","label":"CUDA"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:high-performance-computing","label":"High-Performance Computing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- MPI, the Message Passing Interface, is the standard library specification for [[Message Passing]] across distributed-memory parallel systems, enabling [[Parallel Processing]] on [[High-Performance Computing]] clusters.
- It defines portable routines for point-to-point and [[Collective Communication]] between cooperating processes.
- ### Overview
- MPI processes each hold private memory and coordinate by explicitly sending and receiving messages over the [[Interconnect]].
- The standard underpins most large-scale scientific and engineering simulations and remains the lingua franca of cluster computing.
- Multiple compliant implementations exist, allowing applications written to the standard to run across diverse hardware.
- ### Key aspects
- Point-to-point communication via send and receive primitives.
- Collective operations such as broadcast, scatter, gather and all-reduce.
- Communicators that group processes and define communication contexts.
- Derived datatypes describing non-contiguous memory layouts.
- One-sided and non-blocking communication for overlap and performance.
- ### Mechanisms
- Processes are ranked within a communicator and addressed by rank.
- Collective routines are mapped onto topology-aware communication patterns.
- The runtime binds the standard to specific [[Interconnect]] and [[Network Topology]] capabilities.
- Hybrid models combine MPI across nodes with shared-memory threading within nodes.
- ### Applications
- Climate, fluid-dynamics and molecular simulations on supercomputers.
- Distributed linear algebra and large-scale numerical solvers.
- Parallel training and data processing across clusters.
- Engineering analysis requiring tightly coupled computation.
- ### Relationships
- subClassOf:: [[Message Passing]]
- standardizedBy:: [[Standards Organization]]
- enables:: [[Parallel Processing]]
- enables:: [[High-Performance Computing]]
- enables:: [[Collective Communication]]
- uses:: [[Interconnect]]
- uses:: [[Network Topology]]
- requires:: [[Interconnect]]
- requires:: [[Computing Infrastructure]]
- implements:: [[Message Passing]]
- supports:: [[Distributed Computing]]
- supports:: [[Scalability]]
- relatedTo:: [[Parallel Computing]]
- relatedTo:: [[CUDA]]
- partOf:: [[High-Performance Computing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
