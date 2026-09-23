
MPI (Message Passing Interface) is a standardised, portable specification for message-passing parallel programming, defining a library of routines for point-to-point and collective communication among processes in a distributed-memory system. It is the dominant programming model for high-performance computing clusters, where independent processes exchange data explicitly rather than through shared memory. Implementations such as Open MPI and MPICH provide the runtime that maps the standard onto specific hardware and interconnects.

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
- ### Provenance

