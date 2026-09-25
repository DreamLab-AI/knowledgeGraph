A distributed file system presents a unified file or namespace interface over storage that is physically spread across many networked machines. It transparently handles data placement, replication, fault tolerance, and concurrent access so that clients interact with remote, partitioned storage much as they would with a local file system. Such systems scale capacity and throughput beyond a single node while tolerating individual machine failures.

### Overview

- A distributed file system spreads files, or blocks of files, across a cluster, often replicating or erasure-coding data so that the loss of disks or nodes does not lose data. Metadata may be managed by dedicated servers or decentralised, and clients are given a consistent view subject to the system's chosen consistency model.
- Designs trade off consistency, availability, and partition tolerance. Big-data systems favour high-throughput sequential access and relaxed metadata semantics, while POSIX-oriented systems aim for stronger compatibility with conventional applications.

### Mechanisms

- Data partitioning and placement across nodes, with replication or erasure coding for durability.
- Metadata management — centralised name nodes or decentralised content addressing — and concurrency control.
- Failure detection, re-replication, and rebalancing to maintain durability and availability.

### Applications

- Backing storage for big-data processing (HDFS-style) and analytics clusters.
- Scale-out enterprise and cloud storage for files, blocks, and objects (e.g. Ceph).
- Content-addressed, peer-to-peer distribution of immutable data (e.g. IPFS).

### Provenance

