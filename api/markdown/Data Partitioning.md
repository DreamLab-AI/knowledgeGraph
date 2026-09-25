Data partitioning is the practice of dividing a dataset into smaller, independently manageable subsets distributed across storage nodes or processing units to improve scalability, performance, and availability. Partitioning strategies include horizontal splitting by key range or hash, vertical splitting by column, and functional splitting by domain, each balancing query locality against load distribution. Effective partitioning underpins distributed databases and large-scale data systems by enabling parallel processing while minimising cross-partition coordination.

### Overview

- Horizontal partitioning splits rows by key range or hash; vertical partitioning splits columns; functional partitioning splits by domain.
- Each scheme balances query locality against even [[Load Balancing]].
- Partitioning is frequently combined with [[Replication]] for fault tolerance.

### Key aspects

- Choice of partition key to avoid hotspots and skew.
- Rebalancing and resharding as data volume grows.
- Minimising cross-partition queries and distributed transactions.
- Coordinating with [[Replication]] for redundancy and read scaling.

### Applications

- Scaling distributed databases and key-value stores.
- Parallel processing in large-scale analytics pipelines.
- Sharded ledgers within a [[Distributed Ledger]] system.
- Spreading request load through [[Load Balancing]].

### Provenance

