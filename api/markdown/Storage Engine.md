
A storage engine is the component of a database system responsible for how data is physically laid out, written, indexed and retrieved on durable media. It implements the on-disk data structures, transaction and concurrency control, write-ahead logging and recovery that guarantee durability and consistency. Different engines, such as B-tree and log-structured merge-tree designs, optimise for different read, write and space trade-offs.

- ### Overview
  - The storage engine sits beneath the query processor and dictates the system's durability and performance characteristics. B-tree engines keep data sorted for efficient range scans and point lookups, favouring read-heavy workloads; log-structured merge-tree engines buffer writes in memory and flush sorted runs, favouring write-heavy ingest. Write-ahead logging records mutations before they are applied so the system can recover a consistent state after a crash.
- ### Mechanisms
  - On-disk data structures: B-trees and LSM-trees
  - Write-ahead logging and crash recovery
  - Transaction isolation and concurrency control
  - Indexing and buffer-pool management
  - Read, write and space-amplification trade-offs
- ### Applications
  - Relational database backends such as PostgreSQL
  - Embedded key-value stores in applications
  - High-ingest time-series and log databases
  - Graph and document database persistence layers
- ### Provenance

