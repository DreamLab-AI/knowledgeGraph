
In-memory computing is an architectural approach that holds working data sets in a system's main memory (RAM) rather than on disk, eliminating storage-layer I/O from the critical path of data access and processing. By keeping data resident in fast volatile memory, it delivers order-of-magnitude reductions in latency and supports high-throughput analytics, transaction processing, and real-time decisioning. It typically pairs with techniques such as columnar layouts, distributed caching, and durability mechanisms (logging, replication, persistence) to combine speed with resilience.

- ### Overview
	- By holding working sets in RAM, in-memory systems collapse access latency from milliseconds to microseconds.
	- The approach spans in-memory databases, distributed caches, and in-memory data grids.
	- Durability is layered on through write-ahead logging, snapshots, and replication so that volatile memory does not mean data loss.
	- It is a foundational technique for latency-sensitive transactional and analytical workloads.
- ### Key aspects
	- Data locality in RAM eliminates the disk seek and transfer bottleneck.
	- Columnar and compressed layouts maximise effective memory throughput.
	- Distribution and partitioning scale capacity beyond a single node's memory.
	- Persistence and replication reconcile speed with fault tolerance.
- ### Applications
	- Real-time analytics and operational intelligence dashboards.
	- High-frequency transaction processing and session stores.
	- Caching tiers fronting slower [[Data Storage]] back ends.
	- Stream processing pipelines requiring sub-second responses.
- ### Provenance

