
Indexing is the technique of building auxiliary data structures that allow a system to locate records satisfying a query without scanning the entire dataset. By maintaining ordered or hashed mappings from key values to record locations, indexes turn linear searches into logarithmic or constant-time lookups, dramatically improving query performance at the cost of additional storage and update overhead. It is fundamental to databases, search engines and information retrieval.

- Indexing builds auxiliary [[Data Structure]] mappings from key values to record locations so a [[Database]] can answer queries without scanning all [[Data]].
- It is essential to query performance and [[Information Retrieval]].
- ### Overview
- An index trades extra storage and write overhead for far faster reads, replacing full scans with ordered tree traversals or hash lookups.
- Common forms include balanced trees for range queries, hash indexes for equality, and inverted indexes for full-text search.
- Choosing which columns and structures to index is a central tuning decision balancing read speed against write cost.
- ### Key aspects
- Key-to-location mappings enabling sub-linear lookup.
- Ordered structures supporting range and prefix queries.
- Inverted indexes for text and document retrieval.
- Maintenance overhead on inserts, updates and deletes.
- Selectivity and cardinality driving index effectiveness.
- ### Mechanisms
- The system maintains the index alongside the base data; queries consult the index to identify candidate records before fetching them.
- ### Applications
- Accelerating [[SQL]] queries in [[Relational Database]] systems.
- Full-text search via [[Inverted Index]] structures.
- Search engines and [[Information Retrieval]] pipelines.
- Sharded and partitioned stores using [[Sharding]] for scale.
- ### Provenance

