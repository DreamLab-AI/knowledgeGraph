
A structured request submitted to a database management system to retrieve, insert, update, or delete data according to defined criteria. Queries are expressed in formal query languages such as SQL for relational databases or SPARQL for RDF triple stores, and underpin knowledge graph retrieval, analytics pipelines, and real-time application data access.

- ### Semantic Classification

- ### Content

  ## Overview

  Database queries are the primary mechanism for extracting structured information from persistent stores. In knowledge graph contexts, SPARQL queries traverse RDF triple patterns to answer complex relational questions. In metaverse and XR platforms, low-latency query execution is critical for real-time asset retrieval, spatial indexing, and user state synchronisation.

- ### Current Landscape (2026)
  - The graph-query standards landscape settled: ISO/IEC 39075:2024 (GQL), the first new ISO query-language standard since SQL, was published on 11 April 2024, complementing SQL/PGQ (Part 16 of SQL:2023, published June 2023) whose GRAPH_TABLE operator embeds property-graph pattern matching in the FROM clause; GQL and SQL/PGQ share an identical graph-pattern-matching core, and work on GQL V2 (targeting mid-2027) is adding a vector data type (POS-011r1, accepted March 2025) and LIMIT APPROXIMATE (accepted June 2025).
  - Vector search moved from differentiator to commodity index: as Andy Pavlo put it in "Databases in 2025" (January 2026), if 2023 was the year every DBMS added a vector index, 2025 was the year every DBMS added support for Anthropic's Model Context Protocol (MCP), letting AI agents issue queries in natural language over engines like DuckDB.
  - Amazon S3 Vectors, native vector indexes in object storage scaling to roughly two billion vectors per index, reached general availability in December 2025, pushing vector querying down into the storage layer itself.
  - DuckDB consolidated as the dominant embedded analytical query engine, posting around 50.7% year-on-year growth in developer interest; v1.4.0 LTS (October 2025) added MERGE statements, AES-256 encryption and Iceberg writes, DuckLake reached 1.0 (an ACID lakehouse format keeping catalogue metadata in SQL with time-travel queries), and pg_duckdb 1.0 embedded its vectorised engine directly inside PostgreSQL.
  - Text-to-SQL evolved into hybrid "Text2VectorSQL", translating natural-language questions into queries that fuse structured SQL predicates with vector-search primitives, with dedicated models trained on synthetic data (arXiv 2506.23071, 2025).
  - Query optimisation for AI workloads became a research frontier: Exqutor (arXiv 2512.09695) tackles inaccurate cardinality estimation in vector-augmented analytical queries, reporting speed-ups up to four orders of magnitude on pgvector/VBASE and 37.2x on DuckDB.
  - Converged multi-model querying is now the norm at the cloud tier, with Google Spanner combining relational, graph and vector data (GA of ScaNN-based approximate-nearest-neighbour search, GraphRAG patterns) so a single query surface serves generative-AI retrieval.
  - Open challenges as of 2026 include cost-based optimisation across hybrid relational/vector/graph plans, governing and access-controlling AI-agent-generated queries via MCP before results reach a model, and the still-experimental state of persistent HNSW indexing and larger-than-memory operators in embedded engines.

- ### References
  - 1. GQL Standards Project (2024). The GQL Standard is Published (ISO/IEC 39075:2024). https://www.gqlstandards.org/
  - 2. Hare, K. / LDBC (2025). What is Next for the GQL Standard? (GQL V2, vector type, LIMIT APPROXIMATE). https://datasets.ldbcouncil.org/event/twentieth-tuc-meeting/keith-hare-what-is-next-for-the-gql-standard.pdf
  - 3. Oracle (2026). Vector Search for AI Memory: SQL, JSON Metadata, and Governance (citing Pavlo, Databases in 2025; S3 Vectors GA). https://blogs.oracle.com/developers/vector-search-for-ai-memory-sql-json-metadata-and-governance
  - 4. Späti, S. / MotherDuck (2025-2026). DuckDB News and Ecosystem Newsletters (v1.4 LTS, DuckLake 1.0, pg_duckdb 1.0, MCP). https://motherduck.com/duckdb-news/
  - 5. Zhang et al. (2025). Text2VectorSQL: Bridging Text-to-SQL and Vector Search. https://arxiv.org/html/2506.23071v1
  - 6. Exqutor authors (2026). Extended Query Optimisation for Vector-Augmented Analytical Queries. https://arxiv.org/html/2512.09695v4

- ### Provenance

