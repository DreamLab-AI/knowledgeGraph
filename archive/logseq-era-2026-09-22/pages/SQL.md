public:: true

# SQL
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:sql", "@type":"Page", "title":"SQL", "vc:slug":"sql", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sql",
  "@type": "Class",
  "label": "SQL",
  "definition": "SQL (Structured Query Language) is a declarative, domain-specific language for defining, manipulating, and querying data held in relational database management systems. A user expresses the desired result set through clauses such as SELECT, FROM, WHERE, JOIN, and GROUP BY, while the database query optimiser determines the physical execution plan. Standardised by ANSI and ISO since 1986, SQL spans data definition (DDL), data manipulation (DML), and transaction control, and remains the predominant interface for structured data despite the rise of NoSQL alternatives.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    { "@id": "urn:ngm:class:database-system", "label": "Database System" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:data-definition-language", "label": "Data Definition Language" },
      { "@id": "urn:ngm:class:data-manipulation-language", "label": "Data Manipulation Language" },
      { "@id": "urn:ngm:class:query-optimiser", "label": "Query Optimiser" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:relational-database", "label": "Relational Database" }
    ],
    "implements": [
      { "@id": "urn:ngm:class:relational-algebra", "label": "Relational Algebra" },
      { "@id": "urn:ngm:class:declarative-query", "label": "Declarative Query" }
    ],
    "standardizedBy": [
      { "@id": "urn:ngm:class:iso-iec-9075", "label": "ISO/IEC 9075" },
      { "@id": "urn:ngm:class:ansi", "label": "ANSI" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:data-analytics", "label": "Data Analytics" },
      { "@id": "urn:ngm:class:transaction-processing", "label": "Transaction Processing" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:indexing", "label": "Indexing" },
      { "@id": "urn:ngm:class:acid-transactions", "label": "ACID Transactions" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:business-intelligence", "label": "Business Intelligence" },
      { "@id": "urn:ngm:class:data-warehouse", "label": "Data Warehouse" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:schema", "label": "Database Schema" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:nosql", "label": "NoSQL" },
      { "@id": "urn:ngm:class:graph-query-language", "label": "Graph Query Language" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:object-relational-mapping", "label": "Object-Relational Mapping" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:data-management", "label": "Data Management" },
      { "@id": "urn:ngm:class:stored-procedure", "label": "Stored Procedure" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:structured-query-language", "label": "Structured Query Language" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - [[SQL]] is a declarative query language for [[Relational Database]] systems, standardised by [[ANSI]] and ISO, that implements [[Relational Algebra]] through clauses such as SELECT and JOIN. It is the dominant interface for [[Data Management]] of structured data and contrasts with [[NoSQL]].

- ### Overview
  - SQL separates the specification of what data is wanted from how it is retrieved. A query names the desired columns, source tables, filtering predicates, joins, grouping, and ordering, and the relational engine's query optimiser produces an efficient physical execution plan using statistics and available indexes.
  - The language is partitioned into sublanguages: DDL for creating and altering schema objects, DML for inserting, updating, deleting, and selecting rows, DCL for permissions, and TCL for transaction boundaries. Standardisation began with SQL-86 and has continued through major revisions adding window functions, common table expressions, JSON support, and temporal tables.

- ### Key aspects
  - Declarative semantics grounded in relational algebra and set theory.
  - Strong transactional guarantees via ACID properties.
  - Portability across vendors with dialect-specific extensions (T-SQL, PL/SQL, PL/pgSQL).
  - Optimiser-driven execution that abstracts physical storage and access paths.

- ### Applications
  - Operational systems performing high-volume transaction processing.
  - Analytical workloads and business intelligence over data warehouses.
  - Reporting, ad hoc querying, and ETL pipelines feeding data platforms.

- ### Relationships
  - subClassOf:: [[Database System]]
  - hasPart:: [[Data Definition Language]]
  - hasPart:: [[Query Optimiser]]
  - partOf:: [[Relational Database]]
  - implements:: [[Relational Algebra]]
  - standardizedBy:: [[ISO/IEC 9075]]
  - standardizedBy:: [[ANSI]]
  - enables:: [[Data Analytics]]
  - uses:: [[ACID Transactions]]
  - supports:: [[Business Intelligence]]
  - contrastsWith:: [[NoSQL]]
  - relatedTo:: [[Data Management]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
