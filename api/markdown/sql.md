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