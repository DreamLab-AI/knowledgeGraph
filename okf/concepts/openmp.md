---
okf_version: "0.2"
type: Class
title: OpenMP
resource: urn:ngm:class:openmp
domain: infrastructure
description: An open standard API for shared-memory parallel programming in C, C++, and Fortran, in which developers annotate sequential code with compiler directives (pragmas) such as parallel regions, work-sharing loops, and tasks, and the compiler and runtime distribute the work across threads. Governed by the OpenMP Architecture Review Board since 1997, the specification has grown from simple loop-level pa
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:api
requires:
  - urn:ngm:class:compiler
  - urn:ngm:class:shared-memory
enables:
  - urn:ngm:class:parallel-processing
contrastsWith:
  - urn:ngm:class:message-passing-interface
uses:
  - urn:ngm:class:multithreading
relatedTo:
  - urn:ngm:class:high-performance-computing
  - urn:ngm:class:scientific-computing
---

# OpenMP

An open standard API for shared-memory parallel programming in C, C++, and Fortran, in which developers annotate sequential code with compiler directives (pragmas) such as parallel regions, work-sharing loops, and tasks, and the compiler and runtime distribute the work across threads. Governed by the OpenMP Architecture Review Board since 1997, the specification has grown from simple loop-level parallelism to encompass explicit tasking, SIMD vectorisation, and offloading to GPUs and other accelerators via target directives. Its incremental, directive-based model makes it the dominant intra-node parallelisation approach in scientific and high-performance computing, commonly paired with MPI for communication between nodes.
