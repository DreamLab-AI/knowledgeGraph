- ### Definition
  - A database designed to store and query data expressed as Resource Description Framework triples, typically supporting the SPARQL query language. Also called a triplestore, it manages subject-predicate-object statements rather than rows and tables.

- ### Semantic Classification
  - owl-class:: general:RDFStore
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[RDF]]
  - bridges-to:: [[Linked Data]], [[Semantic Interoperability]]
  - requires:: [[RDF]], [[SPARQL]]
  - enables:: [[Knowledge Graph]], [[Data Integration]]

- ### Content
  - An RDF store, or triplestore, persists data as RDF triples and provides indexing and query processing tailored to graph-shaped statements. It is queried with SPARQL, which expresses graph patterns to be matched against the stored triples.
  - Many RDF stores also support inference over RDF Schema or OWL, returning derived as well as asserted triples. They are used to build knowledge graphs and to integrate data from heterogeneous sources under a shared vocabulary.

- ### Provenance
  - sources:: [[https://www.w3.org/TR/sparql11-query/]]
  - migration-date:: 2026-05-29T00:00:00Z