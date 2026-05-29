public:: true

# linked data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b3a2f4849bbf6ad230b23aa47c0bf05d7ad11e09ccb75a8b58ca1ee05f9aed18",
  "@type": "Page",
  "vc:slug": "linked-data",
  "title": "linked data",
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
  "@id": "urn:ngm:class:linked-data",
  "@type": "Class",
  "label": "Linked Data",
  "definition": "Linked Data is a collection of design principles articulated by Tim Berners-Lee for publishing machine-readable structured data on the Web, requiring that entities be identified by HTTP URIs, that those URIs resolve to useful descriptions in RDF, and that descriptions include links to other URIs so that data from different sources can be traversed and aggregated into a global information graph. It constitutes the application layer of the Semantic Web stack and provides the architectural foundation for open knowledge graphs such as Wikidata and DBpedia. Linked Data sits above the RDF data model and is typically queried using SPARQL endpoints.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    },
    {
      "@id": "urn:ngm:class:semantic-web",
      "label": "Semantic Web"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:json-ld-1-1", "label": "JSON-LD 1.1"},
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:knowledge-graph-construction", "label": "Knowledge Graph Construction"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Linked Data is a collection of design principles articulated by Tim Berners-Lee for publishing machine-readable structured data on the Web, requiring that entities be identified by HTTP URIs, that those URIs resolve to useful descriptions in RDF, and that descriptions include links to other URIs so that data from different sources can be traversed and aggregated into a global information graph. It constitutes the application layer of the Semantic Web stack and provides the architectural foundation for open knowledge graphs such as Wikidata and DBpedia. Linked Data sits above the RDF data model and is typically queried using SPARQL endpoints.

- ### Semantic Classification
  - owl-class:: linked-data:Linked Data
  - owl-role:: Concept

- ### Relationships
  - requires [[RDF]]
  - uses [[JSON-LD 1.1]]
  - uses [[SPARQL]]
  - enables [[Knowledge Graph]]
  - enables [[Knowledge Graph Construction]]

- ### Content
  - Linked Data is operationalised through four principles: use URIs as names for things; use HTTP URIs so those names can be looked up; provide useful structured information in RDF or JSON-LD when a URI is dereferenced; and include links to other URIs to enable discovery of additional data. This forms a Web of Data analogous in structure to the Web of Documents, but where nodes are entities and edges are typed RDF predicates from shared vocabularies such as Schema.org, Dublin Core, or domain-specific ontologies.
  - The Linked Open Data (LOD) cloud is the practical instantiation of these principles at Web scale, comprising hundreds of datasets across domains including government, life sciences, culture, and geography, all interconnected through shared identifiers. Integration of LOD cloud data with proprietary enterprise knowledge graphs is a common pattern in knowledge management and question-answering systems.
  - Serialisation formats for Linked Data include Turtle, N-Triples, RDF/XML, and JSON-LD 1.1. SPARQL is the standard query and update language for Linked Data endpoints, enabling federated queries across multiple remote triple stores. The Linked Data Platform (LDP) W3C Recommendation defines HTTP interactions for reading and writing Linked Data containers, providing a RESTful API layer above raw RDF.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
