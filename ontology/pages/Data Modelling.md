public:: true

# Data Modelling

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:data-modelling",
  "@type": "Page",
  "title": "Data Modelling",
  "vc:slug": "data-modelling",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:data-modelling",
  "@type": "Class",
  "label": "Data Modelling",
  "definition": "Data modelling is the process of defining the structure, relationships, constraints, and semantics of data to be stored, processed, or exchanged in an information system. It produces formal artefacts — conceptual, logical, and physical models — that guide database design, API contracts, and data integration. Effective data modelling ensures data consistency, reduces redundancy, and aligns technical storage structures with the business domain concepts they represent.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:data-schema", "label": "Data Schema"},
      {"@id": "urn:ngm:class:statistical-analysis", "label": "Statistical Analysis"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-management", "label": "Data Management"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:tensor-computation", "label": "Tensor Computation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-schema", "label": "Data Schema"},
      {"@id": "urn:ngm:class:linear-algebra", "label": "Linear Algebra"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:data-schema", "label": "Data Schema"},
      {"@id": "urn:ngm:class:statistical-analysis", "label": "Statistical Analysis"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:python-programming-language", "label": "Python Programming Language"},
      {"@id": "urn:ngm:class:fourier-transform", "label": "Fourier Transform"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:personal-data", "label": "Personal Data"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:standards", "label": "Standards"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:euclidean-distance", "label": "Euclidean Distance"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Data Modelling]] defines the structure, relationships, and semantics of data used in information systems, producing conceptual, logical, and physical model artefacts.
  - It bridges domain knowledge and technical implementation, mapping business entities and their relationships to [[Data Schema]] definitions governing storage and exchange.
  - Rigorous data modelling reduces redundancy, enforces integrity constraints, and enables consistent [[Data Management]] across organisational systems.

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

- ### Relationships
  - subClassOf:: [[Data Management]]
  - dependsOn:: [[Data Schema]]
  - dependsOn:: [[Statistical Analysis]]
  - relatedTo:: [[Data Management]]
  - relatedTo:: [[Governance]]
  - requires:: [[Data Schema]]
  - requires:: [[Linear Algebra]]
  - enables:: [[Machine Learning]]
  - enables:: [[Distributed Ledger]]
  - hasPart:: [[Data Schema]]
  - uses:: [[Python Programming Language]]
  - uses:: [[Fourier Transform]]
  - supports:: [[Personal Data]]
  - supports:: [[Privacy]]
  - implements:: [[Standards]]
  - bridgesTo:: [[Artificial Intelligence]]

- ### Provenance
  - updated:: 2026-06-15
