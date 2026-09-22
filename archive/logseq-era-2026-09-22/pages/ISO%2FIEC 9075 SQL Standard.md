public:: true

# ISO/IEC 9075 SQL Standard
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:iso-iec-9075", "@type":"Page", "title":"ISO/IEC 9075 SQL Standard", "vc:slug":"iso-iec-9075", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:iso-iec-9075",
  "@type":"Class",
  "label":"ISO/IEC 9075 SQL Standard",
  "definition":"ISO/IEC 9075 is the international standard that defines SQL, the Structured Query Language used to define, query and manipulate data in relational database systems. Published jointly by ISO and IEC and revised across multiple editions, it specifies the language's data model, syntax, semantics and conformance levels through a series of parts covering the core framework, foundation, call-level interface and extensions such as JSON and property-graph queries. It provides the common reference that lets relational databases interoperate and that vendors extend with proprietary dialects.",
  "domain":"data",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:standards","label":"Standards"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:data-management","label":"Data Management"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:iso","label":"ISO"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:sql","label":"SQL"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:relational-database","label":"Relational Database"},
      {"@id":"urn:ngm:class:database-query","label":"Database Query"},
      {"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:database-system","label":"Database System"},
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:centralised-database","label":"Centralised Database"},
      {"@id":"urn:ngm:class:data-layer","label":"Data Layer"},
      {"@id":"urn:ngm:class:database-systems","label":"Database Systems"},
      {"@id":"urn:ngm:class:data-management","label":"Data Management"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- ISO/IEC 9075 is the international [[Standards]] document that defines [[SQL]], the language for relational data.
	- It specifies the syntax, semantics and conformance levels that let a [[Relational Database]] be queried portably.
	- Maintained jointly by [[ISO]] and IEC, it is the common reference underpinning [[Data Management]] across vendors.
- ### Overview
	- The standard is organised into numbered parts: the framework, the foundation, the call-level interface and various extensions.
	- Successive editions have added recursion, window functions, temporal data, JSON support and property-graph queries.
	- Conformance is layered, so products may claim core compliance while extending with proprietary features.
	- It provides the lingua franca that allows applications and a [[Database System]] to interoperate.
- ### Key aspects
	- Data definition statements create and alter schemas, tables, constraints and views.
	- Data manipulation statements query, insert, update and delete rows declaratively.
	- Transaction control specifies isolation, commit and rollback semantics for consistency.
	- The standard's parts separate the stable core from optional, evolving extensions.
- ### Applications
	- Defining portable queries that run across multiple [[Database Systems]].
	- Specifying the [[Database Query]] interface for analytics and transactional workloads.
	- Anchoring the [[Data Layer]] of applications that depend on a [[Centralised Database]].
	- Guiding vendor dialects so SQL skills and tools transfer across platforms.
- ### Relationships
	- subClassOf:: [[Standards]]
	- partOf:: [[Data Management]]
	- standardizedBy:: [[ISO]]
	- implements:: [[SQL]]
	- supports:: [[Relational Database]]
	- supports:: [[Database Query]]
	- supports:: [[Data Integrity]]
	- enables:: [[Database System]]
	- enables:: [[Interoperability]]
	- relatedTo:: [[Centralised Database]]
	- relatedTo:: [[Data Layer]]
	- relatedTo:: [[Database Systems]]
	- relatedTo:: [[Data Management]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
