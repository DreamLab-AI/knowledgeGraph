public:: true

# Database Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d215c8cfe9e7281e74f10091e642b7d9ca34508282e8a036b25757bac439cec",
  "@type": "Page",
  "vc:slug": "database-systems",
  "title": "Database Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graph-databases",
      "vc:label": "Graph Databases"
    },
    {
      "@id": "urn:visionflow:linked:microservices",
      "vc:label": "Microservices"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-database",
      "vc:label": "https://en.wikipedia.org/wiki/Database"
    },
    {
      "@id": "urn:visionflow:linked:https-www-postgresql-org-docs",
      "vc:label": "https://www.postgresql.org/docs/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Database Systems"
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
  "@id": "urn:ngm:class:database-systems",
  "@type": "Class",
  "label": "Database Systems",
  "definition": "Database systems are software platforms that store, organise and retrieve structured data while enforcing consistency, concurrency and durability.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-systems",
      "label": "Distributed Systems"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:graph-databases",
        "label": "Graph Databases"
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
  "@id": "urn:visionflow:annotation:link-resolutions:database-systems:065ba54f9b0a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1d215c8cfe9e7281e74f10091e642b7d9ca34508282e8a036b25757bac439cec"
  },
  "vc:resolutions": [
    {
      "raw": "[[Graph Databases]]",
      "resolved": "urn:visionflow:linked:graph-databases",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microservices]]",
      "resolved": "urn:visionflow:linked:microservices",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Database]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.postgresql.org/docs/]]",
      "resolved": "urn:visionflow:linked:https-www-postgresql-org-docs",
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
  - Database systems are software platforms that store, organise and retrieve structured data while enforcing consistency, concurrency and durability.

- ### Semantic Classification
  - owl-class:: distributed-systems:DatabaseSystems
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Distributed Systems]]
  - bridges-to:: [[Microservices]]
  - enables:: [[Graph Databases]]

- ### Content
  - Database systems manage persistent data and provide query interfaces, transaction control and access management. They enforce integrity constraints and coordinate concurrent access to shared data.
  - Models include relational, document, key-value and graph databases, each suited to particular access patterns. Many systems offer transactional guarantees summarised by atomicity, consistency, isolation and durability.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Database]], [[https://www.postgresql.org/docs/]]
  - migration-date:: 2026-05-29T00:00:00Z
