- ### OntologyBlock
  id:: sparql-query-engine-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: MV-10049
	- source-domain:: mv
	- preferred-term:: Sparql Query Engine
	- status:: active
	- definition:: A processor implementing the SPARQL Protocol and RDF Query Language (W3C standard) for retrieving, manipulating, and joining data stored in Resource Description Framework graphs, enabling semantic web queries through pattern matching of subject-predicate-object triples with support for filtering, aggregation, and federated queries.
	- owl:class:: mv:SparqlQueryEngine
	- belongsToDomain:: [[metaverse]]
	- #### Relationships
	  id:: sparql-query-engine-relationships
	  collapsed:: true
		- is-subclass-of:: [[Query Processor]]
		- related-to:: [[RDF Database]]
		- related-to:: [[Semantic Web Standards]]
		- related-to:: [[Knowledge Graph]]
		- enables:: [[Semantic Data Retrieval]]
	- #### Key Implementations
	  collapsed:: true
		- Apache Jena ARQ engine
		- AllegroGraph triple store
		- Ontotext GraphDB
		- Oxford Semantic RDFox
		- Comunica modular engine
	- #### Query Capabilities
	  collapsed:: true
		- Triple pattern matching
		- Optional and negation queries
		- Aggregation and grouping functions
		- Federated queries across endpoints
		- SPARQL Update for data modification


