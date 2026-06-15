- ### Definition
  - [[Apache Parquet]] is defined in relation to [[Columnar Storage]], [[Data Lake]], [[Apache Spark]], [[Data Warehouse]], building on [[Blockchain]].
  - Apache Parquet is an open-source columnar storage file format designed for efficient analytical processing of large datasets. By storing values of the same column contiguously, it enables aggressive compression and encoding, predicate pushdown, and reading only the columns a query needs, dramatically reducing I/O for analytical workloads. It carries a self-describing schema and rich metadata, and is widely used as the on-disk format for data lakes and big-data engines.

- ### Overview
  - Parquet organises data into row groups, each split into column chunks made of pages. Because a column's values share a type and often a distribution, Parquet applies encodings such as dictionary, run-length, and bit-packing, then general compression (Snappy, Zstandard, Gzip), achieving far smaller files than row-oriented formats.
  - Per-column statistics (min, max, null counts) stored in metadata let query engines skip row groups that cannot match a predicate. Combined with projection of only required columns, this makes Parquet highly efficient for scan-heavy analytical queries.

- ### Key aspects
  - Columnar layout with row groups, column chunks, and pages for parallel, partial reads.
  - Encoding and compression chosen per column, plus embedded statistics for predicate pushdown.
  - Self-describing nested schema supporting complex and evolving structures.

- ### Applications
  - Primary storage format for data lakes and lakehouse tables (Delta Lake, Iceberg, Hudi build on it).
  - Interchange between Spark, Trino, Hive, DuckDB, pandas, and Arrow-based tools.
  - Cost-efficient long-term storage of analytical and event data in object stores.

- ### Relationships
  - subClassOf:: [[Blockchain]]
  - uses:: [[Columnar Storage]]
  - uses:: [[Data Serialisation]]
  - relatedTo:: [[Apache Spark]]
  - relatedTo:: [[Data Lake]]
  - relatedTo:: [[Data Warehouse]]
  - relatedTo:: [[Big Data]]
  - partOf:: [[Data Lake]]
  - enables:: [[OLAP]]
  - enables:: [[Big Data]]
  - supports:: [[Apache Spark]]
  - supports:: [[Schema Evolution]]
  - requires:: [[File Format]]
  - implements:: [[Columnar Storage]]
  - dependsOn:: [[Data Serialisation]]
  - bridgesTo:: [[Data Warehouse]]
  - contrastsWith:: [[File Format]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation