- ### Definition
  - A sparql endpoint component in the Metaverse domain that required by ProvenanceOntologyProvO.

- ### Semantic Classification
  - owl-class:: spatial-computing:SparqlEndpoint
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Data Access Interface]]

- ### Content
  A SPARQL Endpoint exposes an RDF triple store via the W3C SPARQL 1.1 Protocol over HTTP/HTTPS, providing a standardised query interface for Semantic Web applications. Clients submit graph pattern queries and receive results as JSON, XML, CSV, or RDF serialisations. Endpoints may support federated queries that span multiple remote stores, making them a cornerstone of distributed knowledge graph architectures.

  In knowledge graph and provenance systems, SPARQL Endpoints allow automated agents to interrogate ontology assertions, trace provenance chains via PROV-O, and integrate heterogeneous linked datasets without bespoke data pipelines. Deployment typically involves a triple store backend (Apache Jena Fuseki, Blazegraph, Oxigraph, or Virtuoso) exposed through a compliant HTTP service layer with appropriate access controls.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z