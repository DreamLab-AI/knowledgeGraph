public:: true

# sparql
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09180c25d9564bb60bc3f869e7718cfd605be538f1b1990d0204d25ae8074498",
  "@type": "Page",
  "vc:slug": "sparql",
  "title": "sparql",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:sparql",
  "@type": "Class",
  "label": "SPARQL",
  "definition": "SPARQL (SPARQL Protocol and RDF Query Language) is a W3C Recommendation defining a query language, update language, and HTTP-based protocol for retrieving and modifying data stored in RDF graph databases and Linked Data endpoints. SPARQL 1.1 (2013) introduced federated queries across multiple SPARQL endpoints via the SERVICE keyword, property paths for navigating arbitrary-length chains of RDF triples, aggregation functions, and the SPARQL Update (SPARUL) sublanguage for graph mutation. It is the standard access layer for the Semantic Web and knowledge graph ecosystems, analogous to SQL for relational databases.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Infra Data Management"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"},
      {"@id": "urn:ngm:class:graph-database", "label": "Graph Database"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"},
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard-standards", "label": "Semantic Web Standards"},
      {"@id": "urn:ngm:class:sparql-endpoint", "label": "SPARQL Endpoint"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


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
