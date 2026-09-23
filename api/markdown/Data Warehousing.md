
Data warehousing is the practice of consolidating data from multiple operational and external sources into a central, integrated, subject-oriented repository optimised for query and analysis rather than transaction processing. A data warehouse stores historical, cleansed and conformed data structured for reporting and decision support, typically populated through extract-transform-load pipelines and queried using online analytical processing. It provides the persistent analytical substrate on which business intelligence, dashboards and downstream analytics are built.

- ### Overview
  - A data warehouse is a subject-oriented, integrated, time-variant and non-volatile collection of data built to support management decision-making.
  - Source data is ingested through ETL or ELT pipelines that cleanse, conform and load it into a query-optimised schema.
  - Warehouses commonly use dimensional models (star and snowflake schemas) to make analytical queries fast and intuitive for business users.
- ### Key aspects
  - Integration: heterogeneous operational sources are unified into a single conformed model with consistent definitions.
  - Historical retention: data is stored over time to support trend analysis and point-in-time reporting.
  - Read-optimised: storage and indexing favour large analytical scans rather than transactional inserts and updates.
  - Governance: master data management and data quality controls underpin trustworthy analytics.
- ### Applications
  - Enterprise reporting and executive dashboards.
  - Self-service business intelligence and ad-hoc analysis.
  - Feeding predictive analytics and machine-learning feature stores.
  - Regulatory and financial reporting requiring auditable history.
- ### Provenance

