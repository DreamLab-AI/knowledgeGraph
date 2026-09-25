Data transformation is the process of converting data from one structure, format or representation into another to make it suitable for storage, integration or analysis. It includes cleansing, type conversion, normalisation, aggregation, enrichment, schema mapping and serialisation, and is typically expressed as declarative or programmatic steps within a pipeline. Transformation reconciles heterogeneous sources, enforces quality and conformance rules, and shapes raw inputs into the canonical forms required by downstream systems.

- [[Data Transformation]] converts data from one structure or format into another so it can be stored, integrated and analysed. It is a core stage of [[Data Processing]].
- It covers [[Data Cleaning]], type conversion, normalisation, aggregation, enrichment and [[Data Serialization]].
- Within a [[Data Pipeline]] it reconciles heterogeneous sources against a target [[Schema]] while enforcing [[Data Validation]] rules.
- It is the operational heart of [[ETL]] and the precondition for trustworthy [[Data Analytics]].

### Overview

- Raw data rarely arrives in the shape downstream systems expect. Sources differ in encoding, units, granularity, naming and completeness. Data transformation is the disciplined reshaping that bridges that gap.
- Transformations may be value-level (parsing, casting, rounding, deduplication) or structure-level (pivoting, flattening, joining, schema mapping). Both are routinely composed into multi-stage flows.
- Modern practice favours declarative transformation expressed in SQL or domain-specific languages, with lineage and tests attached, so that logic is auditable and reproducible.
- The classic ETL ordering performs transformation before loading; the ELT pattern defers it to a warehouse, exploiting elastic compute. The conceptual transformation step is identical in both.

### Key aspects

- Cleansing: removing duplicates, correcting errors and handling missing values to raise data quality.
- Conversion: changing types, encodings, units and date formats to a canonical representation.
- Normalisation and denormalisation: restructuring relations for integrity or for query performance.
- Aggregation and enrichment: summarising records and augmenting them with derived or external attributes.
- Schema mapping: aligning source fields to a target model so disparate systems interoperate.
- Lineage and testing: tracking provenance and asserting expectations to guarantee correctness over time.

### Applications

- Preparing operational data for loading into a [[Data Warehouse]] or [[Data Lake]].
- Harmonising records from many systems during [[Data Integration]] projects.
- Producing model-ready inputs through [[Feature Engineering]] for machine learning.
- Standardising telemetry and logs before observability and analytics.
- Reconciling formats across APIs, message buses and batch exports.
- Enforcing governance and conformance rules as data crosses trust boundaries.

### Provenance

