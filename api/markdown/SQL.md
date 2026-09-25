SQL (Structured Query Language) is a declarative, domain-specific language for defining, manipulating, and querying data held in relational database management systems. A user expresses the desired result set through clauses such as SELECT, FROM, WHERE, JOIN, and GROUP BY, while the database query optimiser determines the physical execution plan. Standardised by ANSI and ISO since 1986, SQL spans data definition (DDL), data manipulation (DML), and transaction control, and remains the predominant interface for structured data despite the rise of NoSQL alternatives.

### Overview

- SQL separates the specification of what data is wanted from how it is retrieved. A query names the desired columns, source tables, filtering predicates, joins, grouping, and ordering, and the relational engine's query optimiser produces an efficient physical execution plan using statistics and available indexes.
- The language is partitioned into sublanguages: DDL for creating and altering schema objects, DML for inserting, updating, deleting, and selecting rows, DCL for permissions, and TCL for transaction boundaries. Standardisation began with SQL-86 and has continued through major revisions adding window functions, common table expressions, JSON support, and temporal tables.

### Key aspects

- Declarative semantics grounded in relational algebra and set theory.
- Strong transactional guarantees via ACID properties.
- Portability across vendors with dialect-specific extensions (T-SQL, PL/SQL, PL/pgSQL).
- Optimiser-driven execution that abstracts physical storage and access paths.

### Applications

- Operational systems performing high-volume transaction processing.
- Analytical workloads and business intelligence over data warehouses.
- Reporting, ad hoc querying, and ETL pipelines feeding data platforms.

### Provenance

