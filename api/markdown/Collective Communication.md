
Collective communication is the class of synchronised, multi-party data-exchange operations in which a group of processes jointly participate, such as broadcast, scatter, gather, all-gather, reduce, and all-reduce. It provides the communication primitives that coordinate state across the nodes of a parallel or distributed system, and it is the backbone of distributed machine-learning training, where gradients and parameters are aggregated and synchronised across many accelerators. Implementations are optimised over high-speed interconnects to minimise the communication overhead that otherwise bottlenecks scaling.

- ### Overview
	- Where point-to-point messaging connects two processes, collectives coordinate a whole group in one logical operation.
	- All-reduce is the workhorse of synchronous data-parallel training, summing and redistributing gradients each step.
	- Performance hinges on topology-aware algorithms (ring, tree, hierarchical) that overlap computation with communication.
	- Communication efficiency frequently determines how well training scales to thousands of accelerators.
- ### Mechanisms
	- Reduction operations combine contributions from all participants into a shared result.
	- Broadcast and scatter distribute data from one or partitioned sources to the group.
	- All-gather assembles each participant's shard into a complete view on every node.
	- RDMA and high-bandwidth links minimise per-operation latency.
- ### Applications
	- Synchronous gradient averaging in [[Data Parallelism]].
	- Tensor and pipeline exchange within [[Model Parallelism]].
	- Parameter synchronisation across a [[GPU Cluster]].
	- Large-scale HPC simulations coordinating distributed state.
- ### Provenance

