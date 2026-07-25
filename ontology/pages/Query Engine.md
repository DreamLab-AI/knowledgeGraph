public:: true

# Query Engine
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:query-engine", "@type":"Page", "title":"Query Engine", "vc:slug":"query-engine", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:query-engine",
  "@type":"Class",
  "label":"Query Engine",
  "definition":"A query engine is the software component that parses, plans, optimises, and executes declarative queries against one or more data stores, returning result sets to callers. It transforms a high-level query into an efficient physical execution plan using statistics, indexes, and cost models, and may operate over a single database, a data warehouse, or federated sources, forming the computational core of database and analytics systems.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:database-system","label":"Database System"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:indexing","label":"Indexing"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:indexing","label":"Indexing"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:sql","label":"SQL"},
      {"@id":"urn:ngm:class:columnar-storage","label":"Columnar Storage"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:full-text-search","label":"Full-Text Search"},
      {"@id":"urn:ngm:class:olap","label":"OLAP"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:database-system","label":"Database System"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:data-management","label":"Data Management"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:olap","label":"OLAP"},
      {"@id":"urn:ngm:class:columnar-storage","label":"Columnar Storage"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:sql","label":"SQL"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A [[Query Engine]] parses, plans, optimises, and executes declarative queries against data stores. It uses [[SQL]] and [[Columnar Storage]], relies on [[Indexing]], and is the computational core of a [[Database System]].
- ### Overview
- The query engine turns what users want into how the system gets it. A declarative query specifies the desired result, and the engine chooses an efficient physical plan, weighing scan strategies, join orders, and access methods.
- Cost-based optimisation uses statistics and available indexes to estimate plan cost and select the cheapest viable plan, which is decisive for performance at scale.
- ### Mechanisms
- Parsing and binding turn query text into a validated logical representation.
- The optimiser rewrites the logical plan and selects a physical plan using cost models and statistics.
- The execution layer runs operators such as scans, joins, aggregations, and sorts, often in parallel.
- [[Indexing]] and [[Columnar Storage]] accelerate access for selective and analytical workloads respectively.
- ### Applications
- Transactional [[Database System]] query processing for applications.
- Analytical querying over a [[Data Warehouse]] for [[OLAP]] reporting.
- Federated and search workloads exposing [[Full-Text Search]].
- ### Relationships
- subClassOf:: [[Database System]]
- hasPart:: [[Indexing]]
- requires:: [[Indexing]]
- uses:: [[SQL]]
- uses:: [[Columnar Storage]]
- enables:: [[Full-Text Search]]
- enables:: [[OLAP]]
- partOf:: [[Database System]]
- supports:: [[Data Warehouse]]
- dependsOn:: [[Data Management]]
- relatedTo:: [[OLAP]]
- relatedTo:: [[Columnar Storage]]
- implements:: [[SQL]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
