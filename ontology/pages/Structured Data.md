public:: true

# Structured Data

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:structured-data", "@type":"Page", "title":"Structured Data", "vc:slug":"structured-data", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:structured-data",
  "@type":"Class",
  "label":"Structured Data",
  "definition":"Structured data is information organised according to a predefined schema or model so that its meaning and relationships are explicit and machine-readable. By conforming to fixed fields, types, and constraints, it can be reliably queried, validated, exchanged, and reasoned over, in contrast to unstructured text or media. On the web it commonly takes the form of annotations such as Schema.org markup that let machines interpret page content.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-model","label":"Data Model"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:data-model","label":"Data Model"}],
    "hasPart":[{"@id":"urn:ngm:class:metadata","label":"Metadata"},{"@id":"urn:ngm:class:schema-org","label":"Schema.org"}],
    "uses":[{"@id":"urn:ngm:class:data-format","label":"Data Format"},{"@id":"urn:ngm:class:metadata","label":"Metadata"},{"@id":"urn:ngm:class:schema-org","label":"Schema.org"}],
    "enables":[{"@id":"urn:ngm:class:interoperability","label":"Interoperability"},{"@id":"urn:ngm:class:data-validation","label":"Data Validation"},{"@id":"urn:ngm:class:search-engine","label":"Search Engine"}],
    "supports":[{"@id":"urn:ngm:class:knowledge-graph","label":"Knowledge Graph"},{"@id":"urn:ngm:class:linked-data","label":"Linked Data"}],
    "requires":[{"@id":"urn:ngm:class:data-format","label":"Data Format"}],
    "implements":[{"@id":"urn:ngm:class:data-model","label":"Data Model"}],
    "relatedTo":[{"@id":"urn:ngm:class:rdf","label":"RDF"},{"@id":"urn:ngm:class:semantic-web","label":"Semantic Web"},{"@id":"urn:ngm:class:ontology","label":"Ontology"}],
    "contrastsWith":[{"@id":"urn:ngm:class:rdf-xml","label":"Rdf Xml"}],
    "bridgesTo":[{"@id":"urn:ngm:class:graph-database","label":"Graph Database"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Structured Data is information shaped by an explicit [[Data Model]] and [[Metadata]] so it is machine-readable, queryable, and validatable, often annotated with [[Schema.org]] on the web.
- Its fixed fields and types enable [[Interoperability]] and reliable exchange.
- ### Overview
- Structured data is the foundation of databases, exchange formats, and the machine-readable web. Where unstructured content leaves meaning implicit, structured data makes it explicit by binding values to named fields with defined types and relationships.
- This explicit organisation lets software validate inputs against a schema, query across records efficiently, merge data from multiple sources, and reason over relationships. Tabular databases, JSON and XML documents conforming to a schema, and RDF triples are all forms of structured data at different levels of expressivity.
- On the public web, structured-data annotations such as Schema.org markup embedded in pages let search engines and assistants interpret entities, events, products, and reviews, powering rich results and knowledge panels.
- ### Key aspects
- A schema defines the permitted fields, types, and constraints that data must satisfy.
- Explicit relationships connect records, enabling joins, graphs, and inference.
- Validation checks conformance to the schema before data is trusted or stored.
- Serialisation formats render structured data for storage and transmission.
- Annotation embeds machine-readable structure within otherwise human-facing content.
- ### Applications
- Relational and graph databases that store and query typed records.
- Web markup that drives search-engine rich results and knowledge graphs.
- APIs exchanging schema-conformant JSON or XML between systems.
- Linked data and semantic-web applications built on RDF and ontologies.
- ### Relationships
- partOf:: [[Data Model]]
- hasPart:: [[Metadata]]
- hasPart:: [[Schema.org]]
- uses:: [[Data Format]]
- uses:: [[Metadata]]
- uses:: [[Schema.org]]
- enables:: [[Interoperability]]
- enables:: [[Data Validation]]
- enables:: [[Search Engine]]
- supports:: [[Knowledge Graph]]
- supports:: [[Linked Data]]
- requires:: [[Data Format]]
- implements:: [[Data Model]]
- relatedTo:: [[RDF]]
- relatedTo:: [[Semantic Web]]
- relatedTo:: [[Ontology]]
- contrastsWith:: [[Rdf Xml]]
- bridgesTo:: [[Graph Database]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
