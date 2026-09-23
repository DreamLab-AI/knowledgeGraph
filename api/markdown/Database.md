
A database is an organised collection of structured data managed by a database management system that supports persistent storage, efficient retrieval, concurrent access and integrity guarantees. Databases expose query interfaces, enforce schemas or schemaless models, and provide transactional or eventual-consistency semantics depending on their design. They form the durable state layer beneath most data-intensive applications and services.

- ### Overview
	- A database stores facts about a domain in a way that can be queried, updated and protected over long timescales. The accompanying database management system handles storage allocation, indexing, concurrency control, recovery and security so that applications can treat data as a reliable shared resource.
	- Relational databases organise data into tables with declared schemas and rich query semantics, while non-relational systems trade some guarantees for horizontal [[Scalability]] and flexible models. Both families underpin transactional systems, analytics and operational services.
	- Modern deployments treat databases as managed [[Cloud Computing]] services, replicated for [[High Availability]] and backed by [[Disaster Recovery]] procedures.
- ### Key aspects
	- Data modelling and [[Schema]] design that capture entities, attributes and relationships.
	- Query processing and optimisation, frequently expressed through [[SQL]] or analogous languages.
	- Transactions and concurrency control that preserve [[Data Integrity]] under simultaneous access.
	- Indexing and [[Caching]] strategies that bound query latency.
	- Durability and [[Persistence]] guarantees backed by write-ahead logging and replication.
	- Access controls that gate reads and writes through [[Access Control]].
- ### Applications
	- Transactional backends for commerce, finance and operational systems.
	- Analytical stores feeding [[Data Pipeline]] and [[Data Engineering]] workflows.
	- State stores for [[Microservices]] and event-driven architectures.
	- Catalogues and registries that require strong [[Data Quality]] and auditability.
- ### Provenance

