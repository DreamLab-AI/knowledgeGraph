- ### Definition
  - SPARQL (SPARQL Protocol and RDF Query Language) is a W3C Recommendation defining a query language, update language, and HTTP-based protocol for retrieving and modifying data stored in RDF graph databases and Linked Data endpoints. SPARQL 1.1 (2013) introduced federated queries across multiple SPARQL endpoints via the SERVICE keyword, property paths for navigating arbitrary-length chains of RDF triples, aggregation functions, and the SPARQL Update (SPARUL) sublanguage for graph mutation. It is the standard access layer for the Semantic Web and knowledge graph ecosystems, analogous to SQL for relational databases.

- ### Semantic Classification
  - owl-class:: sparql:SPARQL
  - owl-role:: Concept

- ### Relationships
  - requires [[RDF]]
  - requires [[Graph Database]]
  - enables [[Knowledge Graph Construction]]
  - enables [[Linked Data]]
  - relatedTo [[Knowledge Graph]]
  - relatedTo [[Semantic Web Standards]]
  - relatedTo [[SPARQL Endpoint]]

- ### Content
  - SPARQL queries operate over a dataset consisting of one default graph and zero or more named graphs. The four query forms are SELECT (returning variable bindings as a tabular result), CONSTRUCT (returning an RDF graph built from a template), ASK (returning a boolean), and DESCRIBE (returning an RDF description of matched resources). Graph patterns are expressed using triple patterns, OPTIONAL clauses (left-outer-join semantics), UNION, FILTER expressions, and BIND assignments.
  - Property paths in SPARQL 1.1 enable concise navigation of arbitrary-length relationship chains using regular expression-like syntax: `/` for sequence, `|` for alternative, `*` for zero-or-more, `+` for one-or-more, and `^` for inverse. This is particularly powerful for traversing taxonomic hierarchies in OWL ontologies or transitive closure queries over graph data. The SPARQL 1.1 Federated Query specification allows a single query to transparently join results from multiple remote SPARQL endpoints.
  - Production triple stores implementing SPARQL endpoints include Apache Jena Fuseki, Stardog, GraphDB, Virtuoso, and Amazon Neptune. RDF4J provides a Java framework for building SPARQL-enabled applications. SPARQL is used in biomedical knowledge graphs (e.g., UniProt, ChEMBL), government open data portals, Wikidata's public Query Service, and domain-specific ontology-driven applications. SHACL (Shapes Constraint Language) and SHEX complement SPARQL by providing schema validation for RDF datasets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z