
A time-series database (TSDB) is a database system optimised for storing, querying, and analysing data points indexed by time. It is designed for workloads dominated by high-volume, append-only writes of timestamped measurements and by queries that aggregate over time ranges. TSDBs employ time-aware partitioning, columnar layouts, and specialised compression to handle the scale and access patterns of metrics, events, and sensor readings efficiently.

- ### Overview
  - Time-series databases exist because general-purpose databases struggle with the relentless append-heavy write rate and time-bounded query patterns of telemetry. By making time a first-class dimension, a TSDB can partition by time, compress adjacent values aggressively, and discard or downsample old data automatically.

- ### Key aspects
  - Time-based partitioning, or chunking, stores contiguous time windows together for fast range scans and cheap eviction.
  - Columnar storage and delta-of-delta or other specialised compression exploit the regularity of timestamped values.
  - Retention and downsampling policies automatically expire raw data and roll it up into coarser summaries.
  - Tag and label indexing supports filtering high-cardinality series by metadata dimensions.

- ### Applications
  - Infrastructure and application monitoring and alerting.
  - Internet-of-things and industrial sensor data collection.
  - Financial tick data and real-time analytics dashboards.

- ### Provenance

