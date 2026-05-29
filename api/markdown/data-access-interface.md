- ### Definition
  A Data Access Interface is a formalised contract—such as a REST API, GraphQL endpoint, or SPARQL query service—that mediates structured access to data stores, registries, or knowledge graphs. It enforces authentication, authorisation, and schema validation, decoupling consumers from underlying storage. In metaverse and spatial computing contexts, data access interfaces expose asset repositories, user identity records, and scene graphs to applications and AI agents.

- ### Semantic Classification
  - owl-class:: infrastructure:DataAccessInterface
  - owl-role:: concept

- ### Relationships
  - **enables**: Data Interoperability, Data Governance (structured interfaces make cross-system data exchange tractable)
  - **uses**: Digital Identity (authentication and authorisation rely on identity primitives)
  - **supports**: Data Registry, AI Agent System (provides the query layer for registries and agent data needs)
  - **partOf**: Digital Infrastructure (a component of the broader infrastructure stack)

- ### Content

  ## Overview

  A Data Access Interface provides a stable, schema-validated boundary between data consumers and storage backends. It centralises access control, version management, and observability, enabling heterogeneous clients to query and mutate data without knowledge of backend technology.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z