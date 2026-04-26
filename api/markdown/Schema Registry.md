iri:: http://narrativegoldmine.com/spatial-computing#SchemaRegistry
uri:: urn:visionclaw:concept:spatial-computing:schema-registry
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:spatial-computing:schema-registry
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: spatial-computing
preferred-term:: Schema Registry
content-hash:: sha256-12-2fd3f49877b3
legacy-term-id:: MV-10028
status:: active
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
author-did::
signature::
contributors::
public:: true

- ### Definition
  - A centralized service that stores, validates, and manages data schemas for event streaming and API contracts, ensuring compatibility and evolution of data formats across distributed metaverse systems and microservices.

- ### Semantic Classification
  - owl-class:: spatial-computing:SchemaRegistry
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Data Management]]
  - enables:: [[Schema Evolution]]

- ### Content

  - #### Key Features
		- Schema versioning and compatibility checks
		- Avro, JSON Schema, Protobuf support
		- Backward/forward compatibility rules
		- Producer-consumer contract enforcement
		- Schema evolution without breaking changes
  - #### Implementations
		- Confluent Schema Registry for Kafka
		- AWS Glue Schema Registry
		- Apicurio Registry open source
		- Azure Schema Registry
		- Google Cloud Pub/Sub schemas

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
