Technical specifications defining how data is structured, encoded, and exchanged across metaverse platforms and 3D applications, including standards like glTF for efficient 3D asset transmission and Universal Scene Description (USD) for complex scene composition and collaboration.

### Semantic Classification

### Content

## Technical Details

- **Key 3D Format Standards**:
  - **glTF**: "JPEG of 3D" - fast, efficient, opinionated format by Khronos Group
  - **USD**: "Photoshop of 3D" - rich, extensible format for authoring and collaboration (Pixar)
  - **MaterialX**: Common language for shading and material definition
- **Standards Organizations**:
  - Metaverse Standards Forum: 3D Asset Interoperability Domain Group
  - Alliance for OpenUSD (AOUSD): Pixar, Adobe, Apple, Autodesk, NVIDIA
  - Khronos Group: glTF development and promotion
- **2024 Progress**:
  - USD and glTF communities building synergies to reduce fragmentation
  - NVIDIA added glTF plugin for direct USD scene referencing
  - Exploring NERFs and Gaussian Splats for new 3D representations
- **Scope Expansion**: Beyond geometry to behaviors, sound, physics, scene composition

## Applications

- 3D asset exchange between platforms
- Metaverse content creation workflows
- Game engine asset pipelines
- Virtual production environments
- Digital twin visualization

### Current Landscape (2026)

- The Apache Iceberg v3 table-format spec was ratified in mid-2025 and rolled out across the 1.8.0 (Feb 2025), 1.9.0 (Apr 2025) and 1.10.0 (Sep 2025) releases, adding binary deletion vectors, default column values, row-level lineage, nanosecond timestamps, and new VARIANT and geospatial types; the 1.10.1 patch shipped in December 2025 with full PyIceberg MERGE support.
- VARIANT became the ratified open standard for semi-structured data in the Apache Parquet community in October 2025 (Parquet format 2.12.0 / Parquet-Java 1.16.0), with Databricks contributing over 9,600 lines to parquet-java and a shredding technique that reads roughly 8x faster than plain Variant and 30x faster than JSON strings; it is now shared across Parquet, Iceberg v3 and Delta Lake.
- Apache Parquet-Java 1.16.0 (Sep 2025) enabled vectorised reads by default and dropped Hadoop 2, while the community began scoping a Parquet v3 format for 2026 (FSST string encoding, cleaner metadata, faster bloom filters) after finalising the long tail of v2 features.
- Apache Arrow shipped 20.0.0, 21.0.0 and 22.0.0 across 2025 and formally extended its columnar spec with a canonical TimestampWithOffset type to remove timezone ambiguity, plus Variant and geospatial extension types so semi-structured data can travel Parquet-to-Iceberg-to-application without re-encoding.
- Format convergence accelerated after Databricks acquired Tabular (the original Iceberg creators) in June 2024 for a reported 1 to 2 billion dollars: Delta Lake UniForm now publishes Delta tables with Iceberg-readable metadata, Databricks ships Iceberg v3 as first-class under Unity Catalog, and Delta Lake 4.0 (Sep 2025) plus 4.1.0 (Mar 2026) added a variant type, coordinated commits and catalog-managed tables.
- Iceberg has become the de facto multi-engine standard: AWS defaults to it across Athena, Glue, EMR and native S3 Tables, and Snowflake Horizon reached general availability for Iceberg reads in February 2026, while Apache Polaris (incubating) matured its REST catalog through 1.3.0-incubating with generic-table GA for cataloguing external formats like Hudi and Delta.
- Open frontiers as of 2026 include Iceberg Format V4 (native indexing, single-file/one-file commits, JDK 17 baseline), hardening the REST catalog spec (ETag optimistic concurrency, idempotency keys, HTTP 429 handling) for predictable multi-engine behaviour, and unease over whether Iceberg's vendor-neutral governance survives with its creators now inside Databricks.

### References

- 1. Iceberg Lakehouse (2025). 2025 Year in Review: Apache Iceberg, Polaris, Parquet, and Arrow. https://iceberglakehouse.com/posts/2025-12-2025-year-in-review-iceberg-arrow-polaris-parquet/
- 2. Databricks (2025). Introducing Variant: a New Open Standard for Semi-Structured Data in Apache Parquet and Delta Lake. https://www.databricks.com/blog/introducing-variant-new-open-standard-semi-structured-data-apache-parquettm-delta-lake
- 3. Databricks (2024). Databricks Agrees to Acquire Tabular, the Company Founded by the Original Creators of Apache Iceberg. https://www.databricks.com/company/newsroom/press-releases/databricks-agrees-acquire-tabular-company-founded-original-creators
- 4. Capital One Tech (2025). Lakehouse Format Convergence: Delta Lake and Iceberg. https://www.capitalone.com/tech/cloud/lakehouse-format-convergence-delta-lake-iceberg/
- 5. ecorpit (2026). Iceberg vs Delta Lake 2026: which table format? https://ecorpit.com/apache-iceberg-vs-delta-lake-open-table-format-decision-2026/
- 6. BigData Boutique (2026). Apache Iceberg vs Delta Lake: Choosing the Right Table Format. https://bigdataboutique.com/blog/apache-iceberg-vs-delta-lake-choosing-the-right-table-format

### Provenance

