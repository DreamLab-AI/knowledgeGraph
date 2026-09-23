
A document store is a category of NoSQL database that persists, retrieves, and manages data as self-describing documents, typically encoded as JSON, BSON, or XML. Each document is a flexible, schema-optional aggregate that groups related data together, allowing nested structures and varying fields across records. Document stores favour horizontal scalability and developer-friendly data modelling over the rigid tabular schema of relational databases.

- ### Overview
  - Documents are aggregates: related data is co-located rather than normalised across tables.
  - Schema-optional design lets fields vary between documents in the same collection.
  - Indexes, secondary queries, and aggregation pipelines enable rich retrieval.
- ### Key aspects
  - Aggregate-oriented data model with nested structures.
  - Flexible or schemaless storage with optional schema validation.
  - Horizontal scaling via sharding and replication.
  - Query engines supporting filtering, projection, and aggregation over documents.
- ### Applications
  - Content management and catalogue systems.
  - User profiles, sessions, and event logging.
  - Rapidly evolving application schemas.
  - Microservice data stores and event-sourced systems.
- ### Provenance

