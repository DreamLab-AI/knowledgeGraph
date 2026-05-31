- ### Definition
  - The Data Management Domain classifies concepts concerning the storage, organisation, retrieval and lifecycle of data within systems. It covers data models, storage architectures, integration and the operations that maintain availability and integrity. As a top-level subject axis it provides the technical foundation on which analytics, governance and applications operate.

- ### Semantic Classification
  - owl-class:: dm:DataManagementDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Data Governance Domain]], [[Semantic Web Domain]]
  - has-part:: [[Data Model]], [[Storage Architecture]], [[Data Integration]], [[Indexing]], [[Backup and Recovery]]
  - requires:: [[Distributed Systems Domain]]
  - enables:: [[Analytics]], [[Reliable Persistence]]

- ### Content
  - Data management concerns the practical means of storing and organising data so that it can be retrieved efficiently and kept consistent. It selects data models and storage architectures suited to the access patterns and consistency needs of an application. Indexing, partitioning and caching shape the trade-off between read and write performance.
  - The domain addresses integration, reconciling data from multiple sources into coherent forms for use, and the operations that preserve durability such as backup, replication and recovery. It manages the data lifecycle from ingestion through transformation, archival and deletion. Consistency and availability guarantees are inherited from the underlying distributed systems.
  - Data management bridges to data governance, which sets the policies it must enforce, and to the semantic web, which adds machine-interpretable structure. It depends on the Distributed Systems Domain for the consistency and durability of data at scale.

- ### Provenance
  - sources:: [[DAMA-DMBOK]]
  - migration-date:: 2026-05-29T00:00:00Z