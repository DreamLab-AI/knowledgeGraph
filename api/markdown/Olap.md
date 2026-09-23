
Online Analytical Processing (OLAP) is a category of data processing optimised for fast, multidimensional analysis of large volumes of historical and aggregated data. It organises measures along dimensions such as time, geography, and product, allowing analysts to slice, dice, roll up, and drill down through data cubes interactively. OLAP underpins business intelligence and decision support by enabling complex aggregate queries that contrast with the row-oriented, transactional focus of operational systems.

- [[Olap]], Online Analytical Processing, is a category of data processing optimised for fast multidimensional analysis of large historical and aggregated data sets.
- It organises measures along dimensions so analysts can slice, roll up, and drill down through data cubes interactively.
- OLAP underpins [[Business Intelligence]] and [[Decision Support]] as a form of [[Data Analytics]].
- ### Overview
- OLAP arranges data as cubes whose cells hold measures, indexed by dimensions such as time, region, and product category. This multidimensional model matches how analysts reason about a business and lets them navigate aggregates fluidly rather than writing a new query for each question.
- Typical operations include roll-up to higher levels of aggregation, drill-down to finer detail, slicing to fix a dimension to a single value, and dicing to select a sub-cube across several dimensions. These interactive manoeuvres make exploratory analysis fast even over very large fact tables.
- OLAP contrasts with online transaction processing, which favours many small row-level writes for operational workloads; OLAP instead serves read-heavy, aggregate-heavy analytical queries. It is typically fed from a data warehouse populated by data pipelines, and it underpins dashboards, reports, and self-service analytics across an organisation.
- ### Key aspects
- Multidimensional model: measures organised along dimensions to form data cubes.
- Aggregation navigation: roll-up and drill-down between summary and detail.
- Slicing and dicing: selecting sub-cubes by fixing or filtering dimensions.
- Read-optimised performance: structures and indexes tuned for aggregate queries.
- Warehouse sourcing: cubes built from curated warehouse data.
- ### Applications
- Powering interactive [[Business Intelligence]] dashboards and reports.
- Supporting [[Decision Support]] through fast exploration of historical metrics.
- Feeding [[Self Service Analytics]] over curated [[Data Warehouse]] content.
- Enabling rich [[Data Visualisation]] of multidimensional results.
- ### Provenance

