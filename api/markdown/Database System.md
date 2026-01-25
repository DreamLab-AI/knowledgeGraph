- ### OntologyBlock
  id:: database-system-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7022
	- preferred-term:: Database System
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: A database system (DBMS - Database Management System) is software that enables users to define, create, maintain, and control access to structured collections of data. Modern database systems encompass relational databases using SQL for structured table-based data, and NoSQL databases supporting flexible schemas for document, key-value, graph, and wide-column data models.
	- maturity:: reviewed
	- belongsToDomain:: [[InfrastructureDomain]], [[Technology Domain]], [[ETSI_Domain_Data_Management]]
	- owl:class:: ngm:DatabaseSystem
	- owl:role:: Technology

## Relationships
- relatedTo:: [[Distributed Computing]], [[Cloud Infrastructure]], [[Computing Infrastructure]]
- enables:: [[Data Persistence]], [[Query Processing]], [[Transaction Management]]
- typeOf:: [[Relational Database]], [[NoSQL Database]], [[Graph Database]]
- supports:: [[ACID Transactions]], [[BASE Consistency]]
- usedBy:: [[Application Development]], [[Data Analytics]], [[Machine Learning]]

## Relational Databases (SQL/RDBMS)

### Characteristics
- **Structure**: Highly structured with predefined schema (tables, columns, data types)
- **Language**: SQL (Structured Query Language) for data manipulation
- **Scaling**: Primarily vertical (scale up with more CPU, RAM, SSD)
- **Transactions**: ACID properties ensure data integrity
- **History**: Industry standard since 1970 (Edgar Codd)

### Popular RDBMS
- Oracle Database
- MySQL
- Microsoft SQL Server
- PostgreSQL
- IBM Db2

## NoSQL Databases

### Characteristics
- **Structure**: Dynamic schemas for unstructured/semi-structured data
- **Scaling**: Primarily horizontal (scale out with more nodes)
- **Flexibility**: No fixed schema required
- **Trade-offs**: BASE consistency (Basically Available, Soft state, Eventually consistent)

### Types of NoSQL Databases

| Type | Data Model | Use Cases | Examples |
|------|------------|-----------|----------|
| Document Store | JSON-like documents | CMS, catalogs, user profiles | MongoDB, CouchDB |
| Key-Value Store | Attribute-value pairs | Caching, sessions, real-time data | Redis, Memcached, DynamoDB |
| Wide-Column Store | Column families | Analytics, time-series, data warehousing | Cassandra, HBase |
| Graph Database | Nodes and edges | Social networks, recommendations | Neo4j, Amazon Neptune |

## Architectural Comparison

| Aspect | Relational (SQL) | NoSQL |
|--------|------------------|-------|
| Schema | Predefined, rigid | Dynamic, flexible |
| Scaling | Vertical | Horizontal |
| Transactions | Multi-row ACID | Document-level, eventual consistency |
| Query Language | SQL | Varies by type |
| Data Model | Tabular | Document, key-value, graph, columnar |

## 2024 Database Landscape
- Top databases (DB-Engines Ranking): Oracle, MySQL, Microsoft SQL Server, PostgreSQL
- Growing demand for NoSQL (MongoDB, Redis) for high-traffic applications
- Hybrid approaches combining SQL and NoSQL strengths
- Cloud-native databases gaining adoption

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with technical content
- **References**: 6 pages reference this concept
