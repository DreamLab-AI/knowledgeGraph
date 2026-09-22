public:: true

# Database Management System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:database-management-system",
  "@type": "Page",
  "vc:slug": "database-management-system",
  "title": "Database Management System",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:database-management-system",
  "@type": "Class",
  "label": "Database Management System",
  "definition": "A database management system (DBMS) is software that defines, stores, retrieves, secures and manages structured data while enforcing integrity, concurrency and durability. It mediates all access to the underlying database through a query interface and transaction manager, supporting models such as relational, document, key-value and graph. It is the foundational platform for persistent data services including ontology repositories and taxonomy registries.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-ontology-repository", "label": "Digital Ontology Repository"},
      {"@id": "urn:ngm:class:digital-taxonomy-registry", "label": "Digital Taxonomy Registry"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A database management system stores and governs structured data with transactional guarantees, the persistence platform required by a [[Digital Ontology Repository]] and a [[Digital Taxonomy Registry]].
- ### Content
  - A DBMS provides schema definition, a query language, ACID transactions, indexing and access control. Specialised engines optimise for different data shapes and workloads, from relational OLTP to graph traversal and full-text search.
