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