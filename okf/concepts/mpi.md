---
okf_version: "0.2"
type: Class
title: Mpi
resource: urn:ngm:class:mpi
domain: infrastructure
description: MPI (Message Passing Interface) is a standardised, portable specification for message-passing parallel programming, defining a library of routines for point-to-point and collective communication among processes in a distributed-memory system. It is the dominant programming model for high-performance computing clusters, where independent processes exchange data explicitly rather than through shared
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:message-passing
requires:
  - urn:ngm:class:interconnect
  - urn:ngm:class:computing-infrastructure
enables:
  - urn:ngm:class:parallel-processing
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:collective-communication
implements:
  - urn:ngm:class:message-passing
uses:
  - urn:ngm:class:interconnect
  - urn:ngm:class:network-topology
supports:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:scalability
standardizedBy:
  - urn:ngm:class:standards-organization
partOf:
  - urn:ngm:class:high-performance-computing
relatedTo:
  - urn:ngm:class:parallel-computing
  - urn:ngm:class:cuda
---

# Mpi

MPI (Message Passing Interface) is a standardised, portable specification for message-passing parallel programming, defining a library of routines for point-to-point and collective communication among processes in a distributed-memory system. It is the dominant programming model for high-performance computing clusters, where independent processes exchange data explicitly rather than through shared memory. Implementations such as Open MPI and MPICH provide the runtime that maps the standard onto specific hardware and interconnects.
