public:: true

# RocksDB
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:rocks-db",
  "@type": "Page",
  "vc:slug": "rocks-db",
  "title": "RocksDB",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rocks-db",
  "@type": "Class",
  "label": "RocksDB",
  "definition": "RocksDB is an embedded, high-performance key-value store built on a log-structured merge-tree and optimised for fast storage such as SSDs. It provides ordered keys, atomic batch writes, snapshots, and tunable compaction, and is embedded as a library rather than run as a server. It is widely used as the local state backend in databases and blockchain platforms.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-management", "label": "Data Management"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hyperledger-indy", "label": "Hyperledger Indy"}, {"@id": "urn:ngm:class:hyperledger-iroha", "label": "Hyperledger Iroha"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - RocksDB is an embedded LSM-tree key-value store optimised for fast storage, used as the state backend by [[Hyperledger Indy]] and [[Hyperledger Iroha]].
- ### Content
  - Its log-structured merge-tree design favours high write throughput, with background compaction maintaining read performance. As an embeddable library it gives applications durable, ordered local storage without operating a separate database server.
