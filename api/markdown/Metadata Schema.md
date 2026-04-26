iri:: http://narrativegoldmine.com/infrastructure#MetadataSchema
uri:: urn:visionclaw:concept:infrastructure:metadata-schema
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:metadata-schema
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Metadata Schema
content-hash:: sha256-12-673a9893641e
legacy-term-id:: NGM-8001
status:: active
maturity:: reviewed
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A structured specification defining metadata elements, their semantics, syntax, and relationships for describing and managing information resources. Metadata schemas establish standardized vocabularies and constraints that enable interoperability, discovery, and governance across data ecosystems through predefined sets of descriptive attributes tailored for specific domains or resource types.

- ### Semantic Classification
  - owl-class:: infrastructure:MetadataSchema
  - owl-role:: InformationStandard
  - belongs-to-domain:: [[Data Governance]]

- ### Relationships
  - is-subclass-of:: [[Data Standard]]
  - enables:: [[Data Interoperability]], [[FAIR Data Principles]], [[Data Discovery]]
  - implements:: [[Dublin Core]], [[Schema.org]], [[JSON-LD]]

- ### Content

  ## Definition

  A **Metadata Schema** is a formal specification that defines the structure, semantics, and constraints for metadata elements used to describe information resources. It establishes standardised vocabularies enabling consistent documentation of data assets across systems and organisations.

  ## Core Components

  ### Schema Elements
  - **Element Name**: Unique identifier for the metadata attribute
  - **Semantics**: Formal meaning and interpretation rules
  - **Syntax**: Data type, format, and encoding constraints
  - **Cardinality**: Required, optional, or repeatable designations
  - **Controlled Vocabularies**: Permitted value sets or taxonomies

  ### Schema Types
  1. **Descriptive Schemas**: Resource discovery and identification (Dublin Core)
  2. **Structural Schemas**: Data organisation and relationships (XML Schema)
  3. **Administrative Schemas**: Management and provenance tracking
  4. **Technical Schemas**: Format, encoding, and processing specifications

  ## Standards and Frameworks

  ### Core Standards
  - **Dublin Core Metadata Initiative**: 15 core elements for resource description
  - **Schema.org**: Web content structured data vocabulary
  - **Data Documentation Initiative (DDI)**: Survey and observational data
  - **ISO 19115**: Geographic information metadata

  ### Semantic Web Standards
  - **RDF Schema (RDFS)**: Vocabulary definition framework
  - **Web Ontology Language (OWL)**: Complex ontology specification
  - **SHACL**: Validation constraints and data quality rules
  - **JSON-LD**: Semantic contexts for linked data

  ## Applications

  ### Data Governance
  - Asset inventory and cataloguing
  - Lineage and provenance tracking
  - Quality assessment and compliance
  - Access control and classification

  ### Knowledge Management
  - Semantic search and discovery
  - Cross-system interoperability
  - Knowledge graph construction
  - Automated metadata generation

  #### References
  - [OpenMetadata Standards](https://openmetadatastandards.org/)
  - [Metadata Standard - Wikipedia](https://en.wikipedia.org/wiki/Metadata_standard)
  - [How to FAIR - Metadata](https://www.howtofair.dk/how-to-fair/metadata/)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
