public:: true

# Indexing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:indexing",
  "@type": "Page",
  "title": "Indexing",
  "vc:slug": "indexing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:indexing",
  "@type": "Class",
  "label": "Indexing",
  "definition": "Indexing is the technique of building auxiliary data structures that allow a system to locate records satisfying a query without scanning the entire dataset. By maintaining ordered or hashed mappings from key values to record locations, indexes turn linear searches into logarithmic or constant-time lookups, dramatically improving query performance at the cost of additional storage and update overhead. It is fundamental to databases, search engines and information retrieval.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-structure",
      "label": "Data Structure"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:data-structure",
        "label": "Data Structure"
      },
      {
        "@id": "urn:ngm:class:inverted-index",
        "label": "Inverted Index"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      },
      {
        "@id": "urn:ngm:class:database",
        "label": "Database"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:search-index",
        "label": "Search Index"
      },
      {
        "@id": "urn:ngm:class:inverted-index",
        "label": "Inverted Index"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:relational-database",
        "label": "Relational Database"
      },
      {
        "@id": "urn:ngm:class:sql",
        "label": "SQL"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:data-structure",
        "label": "Data Structure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      },
      {
        "@id": "urn:ngm:class:database-management-system",
        "label": "Database Management System"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- Indexing builds auxiliary [[Data Structure]] mappings from key values to record locations so a [[Database]] can answer queries without scanning all [[Data]].
- It is essential to query performance and [[Information Retrieval]].
- ### Overview
- An index trades extra storage and write overhead for far faster reads, replacing full scans with ordered tree traversals or hash lookups.
- Common forms include balanced trees for range queries, hash indexes for equality, and inverted indexes for full-text search.
- Choosing which columns and structures to index is a central tuning decision balancing read speed against write cost.
- ### Key aspects
- Key-to-location mappings enabling sub-linear lookup.
- Ordered structures supporting range and prefix queries.
- Inverted indexes for text and document retrieval.
- Maintenance overhead on inserts, updates and deletes.
- Selectivity and cardinality driving index effectiveness.
- ### Mechanisms
- The system maintains the index alongside the base data; queries consult the index to identify candidate records before fetching them.
- ### Applications
- Accelerating [[SQL]] queries in [[Relational Database]] systems.
- Full-text search via [[Inverted Index]] structures.
- Search engines and [[Information Retrieval]] pipelines.
- Sharded and partitioned stores using [[Sharding]] for scale.
- ### Relationships
- uses:: [[Data Structure]]
- uses:: [[Inverted Index]]
- requires:: [[Data]]
- requires:: [[Database]]
- hasPart:: [[Search Index]]
- hasPart:: [[Inverted Index]]
- enables:: [[Information Retrieval]]
- supports:: [[Relational Database]]
- supports:: [[SQL]]
- implements:: [[Data Structure]]
- relatedTo:: [[Sharding]]
- relatedTo:: [[Database Management System]]
- ### Provenance
- updated:: 2026-06-15
