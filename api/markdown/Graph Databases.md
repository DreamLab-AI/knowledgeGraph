public:: true

# Graph Databases
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1b2687c59b1359ab70c161ed1558e0c333cf701bc2179a56c5dbb5daa6b2378b",
  "@type": "Page",
  "vc:slug": "graph-databases",
  "title": "Graph Databases",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:knowledge-graphs",
      "vc:label": "Knowledge Graphs"
    },
    {
      "@id": "urn:visionflow:linked:network-analysis",
      "vc:label": "Network Analysis"
    },
    {
      "@id": "urn:visionflow:linked:database-systems",
      "vc:label": "Database Systems"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-graph-database",
      "vc:label": "https://en.wikipedia.org/wiki/Graph_database"
    },
    {
      "@id": "urn:visionflow:linked:https-neo-4-j-com-developer-graph-database",
      "vc:label": "https://neo4j.com/developer/graph-database/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graph Databases"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:graph-databases",
  "@type": "Class",
  "label": "Graph Databases",
  "definition": "Graph databases are database systems that store data as nodes and edges, modelling entities and their relationships directly for traversal-based queries.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:database-systems",
      "label": "Database Systems"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graphs",
        "label": "Knowledge Graphs"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:graph-databases:78bb4df8a762",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1b2687c59b1359ab70c161ed1558e0c333cf701bc2179a56c5dbb5daa6b2378b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Knowledge Graphs]]",
      "resolved": "urn:visionflow:linked:knowledge-graphs",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Analysis]]",
      "resolved": "urn:visionflow:linked:network-analysis",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Database Systems]]",
      "resolved": "urn:visionflow:linked:database-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Graph_database]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-graph-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://neo4j.com/developer/graph-database/]]",
      "resolved": "urn:visionflow:linked:https-neo-4-j-com-developer-graph-database",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Graph databases are database systems that store data as nodes and edges, modelling entities and their relationships directly for traversal-based queries.

- ### Semantic Classification
  - owl-class:: distributed-systems:GraphDatabases
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Database Systems]]
  - bridges-to:: [[Network Analysis]]
  - enables:: [[Knowledge Graphs]]

- ### Content
  - Graph databases represent information as vertices connected by edges, with properties attached to both. This model supports queries that traverse relationships, such as finding paths or neighbourhoods, more directly than relational joins.
  - They are applied to social networks, recommendation systems, fraud detection and knowledge graphs. Query languages such as Cypher and Gremlin express traversals over the stored graph structure.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Graph_database]], [[https://neo4j.com/developer/graph-database/]]
  - migration-date:: 2026-05-29T00:00:00Z
