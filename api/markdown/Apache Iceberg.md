
Apache Iceberg is an open table format for large analytic datasets stored in data lakes, adding database-like guarantees on top of object storage. It provides ACID transactions, schema and partition evolution, snapshot isolation, and time-travel queries by maintaining immutable metadata layers that track data files. Iceberg decouples the table format from the compute engine, letting Spark, Trino, Flink, and others operate consistently on the same tables.

- ### Content
  - Iceberg organizes data as immutable snapshots described by hierarchical metadata and manifest files, so writers add new files and atomically swap a metadata pointer rather than mutating in place. This enables concurrent readers and writers, hidden partitioning, and safe schema changes, and its open spec lets multiple query engines share one source of truth in the lakehouse.

