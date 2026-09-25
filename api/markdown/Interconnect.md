An interconnect is the network fabric that links compute nodes, processors, accelerators and memory within or across systems, providing the high-bandwidth, low-latency communication paths required for parallel and distributed workloads. In high-performance computing and data centres, interconnects determine how efficiently many processors can exchange data and synchronise. Examples include on-chip buses, PCIe links between devices, and cluster fabrics such as InfiniBand or high-speed Ethernet.

- An interconnect is the communication fabric linking processors, accelerators and memory, providing the bandwidth and latency characteristics that [[High-Performance Computing]] and [[Parallel Processing]] depend on.
- It carries the traffic for [[Message Passing]] and [[Collective Communication]] across [[Distributed Computing]] systems.

### Overview

- Interconnects span scales from on-chip and on-board links through to inter-node cluster fabrics.
- Their performance, measured in bandwidth and latency, often dominates the scalability of tightly coupled parallel applications.
- The choice of [[Network Topology]] shapes how nodes are wired and how communication patterns map onto the physical fabric.

### Key aspects

- Bandwidth: sustained data rate between endpoints.
- Latency: time for a message to traverse the fabric, critical for synchronisation.
- Topology: arrangement of links such as fat-tree, dragonfly or torus.
- Scalability: ability to add nodes without disproportionate communication overhead.
- Congestion management and routing to avoid hotspots.

### Mechanisms

- Switched fabrics route packets between endpoints over multiple hops.
- Remote direct memory access reduces CPU involvement in data transfer.
- Collective operations are mapped onto topology-aware communication trees.
- [[Ethernet]] and specialised cluster fabrics offer different bandwidth and latency trade-offs.

### Applications

- Supercomputers and HPC clusters running scientific simulations.
- Multi-GPU training systems for large neural networks.
- Distributed databases and analytics needing fast node-to-node exchange.
- Cloud data centres aggregating many servers.

### Provenance

