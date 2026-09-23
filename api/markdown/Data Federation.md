
Data federation is a data integration technique that presents multiple distributed and heterogeneous data sources as a single virtual database queryable in place, without physically moving or copying the data. A federation engine decomposes queries, pushes work to source systems and combines results on the fly. It enables real-time unified access and is a core mechanism behind data virtualization and integration interfaces.

- ### Content
  - A federation layer parses a query, splits it into source-specific subqueries pushed down for execution, and joins the returned results. The trade-off is query-time latency and source-system load versus the agility of avoiding bulk ETL and duplicate storage.

