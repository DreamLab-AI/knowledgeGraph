public:: true

# Neo4j
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7ca59e3a182cebacde68b87d35687eee524c9bbbd65cfd0c6864791fa8611bee",
  "@type": "Page",
  "vc:slug": "neo-4-j",
  "title": "Neo4j",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graph-database",
      "vc:label": "Graph Database"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:database-system",
      "vc:label": "Database System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Neo4j"
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
  "@id": "urn:ngm:class:neo-4-j",
  "@type": "Class",
  "label": "Neo4j",
  "definition": "A graph database management system that stores data as nodes and relationships and queries it with the Cypher query language. It is one of the most widely used native graph databases.",
  "domain": "data-management",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graph-database",
      "label": "Graph Database"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
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
  "@id": "urn:visionflow:annotation:link-resolutions:neo-4-j:0d311f7c0c7a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7ca59e3a182cebacde68b87d35687eee524c9bbbd65cfd0c6864791fa8611bee"
  },
  "vc:resolutions": [
    {
      "raw": "[[Graph Database]]",
      "resolved": "urn:visionflow:linked:graph-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Database System]]",
      "resolved": "urn:visionflow:linked:database-system",
      "kind": "ResolvedLink"
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
  - A graph database management system that stores data as nodes and relationships and queries it with the Cypher query language. It is one of the most widely used native graph databases.

- ### Semantic Classification
  - owl-class:: data-management:Neo4j
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Graph Database]]
  - bridges-to:: [[Database System]]
  - requires:: [[Graph Database]]
  - enables:: [[Knowledge Graph]]

- ### Content
  - Neo4j is a native graph database that represents data as nodes connected by typed, directed relationships, with properties on both. This structure makes traversing connections efficient compared with join-heavy queries in relational systems.
  - It is queried using Cypher, a declarative graph query language, and is applied to use cases such as fraud detection, recommendation, network analysis, and knowledge graphs.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
