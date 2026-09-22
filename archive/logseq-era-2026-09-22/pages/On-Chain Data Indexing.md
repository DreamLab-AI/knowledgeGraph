public:: true

# On-Chain Data Indexing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:on-chain-data-indexing",
  "@type": "Page",
  "vc:slug": "on-chain-data-indexing",
  "title": "On-Chain Data Indexing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-chain-data-indexing",
  "@type": "Class",
  "label": "On-Chain Data Indexing",
  "definition": "On-chain data indexing is the process of extracting, transforming, and organising raw blockchain events and state into queryable structures suited to application access patterns. Because base-layer data is optimised for consensus rather than retrieval, indexers ingest blocks and logs, decode them, and serve them through APIs such as GraphQL. It is the data backbone for analytics dashboards and decentralised applications.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:dao-analytics", "label": "DAO Analytics"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - On-chain data indexing extracts and organises blockchain events into queryable form. It is required by and a component of [[DAO Analytics]] systems.
- ### Content
  - Indexers (such as The Graph's subgraphs) subscribe to chain events, decode contract logs against ABIs, and materialise entities into databases that applications query efficiently. Key challenges include handling chain reorganisations, keeping indexes consistent with finalised state, and decentralising the indexing layer so applications are not dependent on a single trusted provider.
