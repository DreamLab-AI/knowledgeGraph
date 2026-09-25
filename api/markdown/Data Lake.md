A centralized repository that stores structured, semi-structured, and unstructured data at any scale in its native format, deferring schema enforcement to query time (schema-on-read). Data lakes enable big-data analytics, machine learning pipelines, and exploratory analysis without upfront data modelling, serving as the foundational ingestion layer for modern data architectures.

### Semantic Classification

### Content

Data Lake — content pending enrichment.

### Current Landscape (2026)

- The "table format war" has effectively ended with the industry converging on the open lakehouse: Apache Iceberg is now the de facto interoperability standard (roughly 78% adoption among data professionals), every major cloud ships managed Iceberg services, and both Snowflake and Databricks read and write it natively.
- Databricks acquired Tabular — the company founded by Iceberg's original Netflix creators (Ryan Blue, Daniel Weeks, Jason Reid) — in June 2024 for a reported $1–2bn, bringing both leading formats under one roof; CEO Ali Ghodsi has since declared "Iceberg won the open format standard".
- Iceberg's v3 specification was ratified in mid-2025 and delivered through the 1.10 (December 2025) and 1.11 (to May 2026) release line, adding deletion vectors, a VARIANT type with shredding for semi-structured data, row lineage for change tracking, and geospatial types.
- Delta Lake reached 4.0 alongside Spark 4.0 in September 2025 and 4.1.0 in March 2026, centring on catalog-managed tables, coordinated commits for multi-engine writes, and restored UniForm Iceberg interoperability; Databricks now ships Iceberg v3 as a first-class format under Unity Catalog.
- The battleground has shifted from format to catalog and governance: Apache Polaris graduated to an ASF Top-Level Project on 18 February 2026, Databricks open-sourced Unity Catalog (LF AI & Data) as a multi-format catalog, and Snowflake Horizon reached GA for Iceberg reads in February 2026 (external writes in preview from March 2026).
- New entrants and interoperability moves proliferated: DuckDB and MotherDuck introduced DuckLake in 2025 (moving all table metadata into a SQL database), AWS shipped managed S3 Tables and Glue catalog federation (November 2025), and Google enabled BigQuery Iceberg read/write interoperability in April 2026.
- Open challenges as of 2026 centre on cross-vendor governance: fine-grained policies (masking, row-access) do not automatically carry across catalog boundaries, so enterprises running Snowflake, Databricks and AWS together must still duplicate policies — driving interest in emerging standards such as the Open Semantic Interchange for portable semantic definitions.

### References

- 1. AI Wire (2026). Databricks Acquires Tabular for $2B to Unify AI and Data Lakehouse. https://aiwire.ai/articles/databricks-acquires-tabular-iceberg-ai-lakehouse
- 2. AM Data Lakehouse (2026). Lakehouse Table Formats in 2026: Iceberg, Delta Lake, Hudi, Paimon, DuckLake. https://amdatalakehouse.substack.com/p/lakehouse-table-formats-in-2026-iceberg
- 3. BigData Boutique (2026). Apache Iceberg vs Delta Lake: Choosing the Right Table Format. https://bigdataboutique.com/blog/apache-iceberg-vs-delta-lake-choosing-the-right-table-format
- 4. Snowflake Engineering Blog (2026). Apache Polaris: The End of Data Vendor Lock-In. https://www.snowflake.com/en/blog/engineering/apache-polaris-iceberg-rest-catalog/
- 5. Data Lakehouse Hub (2026). Choosing the Right Iceberg Control Plane: Polaris vs. Unity Catalog. https://datalakehousehub.com/blog/2026-05-choosing-iceberg-control-plane

### Provenance

