---
okf_version: "0.2"
type: Class
title: Message Passing Interface
resource: urn:ngm:class:message-passing-interface
domain: infrastructure
description: Message Passing Interface (MPI) is a standardised communication protocol and application programming interface for parallel and distributed computing. It defines primitives for point-to-point and collective communication between processes running across multiple compute nodes, enabling tightly coupled high-performance computing workloads. MPI is the de facto standard for scientific computing, nume
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:parallel-computing
enables:
  - urn:ngm:class:distributed-training
  - urn:ngm:class:numerical-simulation
dependsOn:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:cluster-computing
implements:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:collective-communication
contrastsWith:
  - urn:ngm:class:shared-memory-model
uses:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:network-fabric
  - urn:ngm:class:infiniband
supports:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:data-parallelism
standardizedBy:
  - urn:ngm:class:mpi-forum
relatedTo:
  - urn:ngm:class:openmp
  - urn:ngm:class:cuda
  - urn:ngm:class:remote-direct-memory-access
  - urn:ngm:class:supercomputing
---

# Message Passing Interface

Message Passing Interface (MPI) is a standardised communication protocol and application programming interface for parallel and distributed computing. It defines primitives for point-to-point and collective communication between processes running across multiple compute nodes, enabling tightly coupled high-performance computing workloads. MPI is the de facto standard for scientific computing, numerical simulations, and distributed AI training at supercomputer scale.
