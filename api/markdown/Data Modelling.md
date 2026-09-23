
Data modelling is the process of defining the structure, relationships, constraints, and semantics of data to be stored, processed, or exchanged in an information system. It produces formal artefacts — conceptual, logical, and physical models — that guide database design, API contracts, and data integration. Effective data modelling ensures data consistency, reduces redundancy, and aligns technical storage structures with the business domain concepts they represent.

- ### Overview
  - Data modelling progresses through three abstraction layers: conceptual (entity-relationship diagrams capturing business concepts), logical (normalised relational or document structure independent of technology), and physical (database-specific table definitions, indices, partitioning).
  - Relational data modelling uses normalisation theory (1NF–5NF, BCNF) to eliminate redundancy and functional dependency anomalies.
  - Dimensional modelling (star and snowflake schemas) optimises data warehouse structures for [[Statistical Analysis]] and reporting query patterns.
  - Document-oriented and graph modelling address use cases where hierarchical or relationship-rich data fits poorly into tabular structures.

- ### Key Aspects
  - Entity-Relationship (ER) modelling captures entities, attributes, and cardinality constraints that inform relational schema design.
  - Ontological data models (OWL, RDF) express semantic relationships between concepts, enabling inference and knowledge graph queries.
  - JSON Schema, Avro, and Protobuf provide schema-on-write specifications for event-driven and API data exchange contracts.
  - [[Governance]] processes for data modelling include model review boards, metadata catalogues, and lineage tracking.

- ### Mechanisms
  - Normalisation algorithms decompose relations to eliminate update anomalies by ensuring each fact is stored once.
  - Entity resolution and deduplication apply [[Statistical Analysis]] and [[Euclidean Distance]] similarity measures to match records across datasets.
  - Schema evolution strategies (additive changes, backward compatibility, versioning) manage model changes in production systems without breaking consumers.
  - [[Python Programming Language]] data modelling libraries (SQLAlchemy ORM, Pydantic, dbt) translate logical models into executable code.

- ### Applications
  - Database design for enterprise applications — modelling customers, orders, products, and transactions in normalised relational schemas.
  - [[Machine Learning]] feature engineering — defining feature stores, training dataset schemas, and model input/output contracts.
  - [[Distributed Ledger]] state design — modelling account balances, smart contract storage layouts, and event log schemas.
  - Data integration — designing canonical data models that mediate between heterogeneous source system schemas.

- ### Provenance

