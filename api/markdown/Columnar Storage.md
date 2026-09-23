
Columnar storage is a data organisation scheme that stores values from the same column of a table contiguously on disk, rather than storing complete rows together as in row-oriented storage. This layout allows analytical queries to scan only the columns they need, and enables aggressive compression because adjacent values within a column tend to be similar. Formats such as Apache Parquet and engines built for online analytical processing rely on columnar storage to accelerate large-scale aggregation and filtering workloads.

