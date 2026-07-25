public:: true

# Polygon AggLayer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:polygon-agg-layer",
  "@type": "Page",
  "vc:slug": "polygon-agg-layer",
  "title": "Polygon AggLayer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:polygon-agg-layer",
  "@type": "Class",
  "label": "Polygon AggLayer",
  "definition": "The Polygon AggLayer (Aggregation Layer) is a cross-chain settlement protocol that unifies liquidity and state across independent Polygon and zk-based chains. It uses zero-knowledge proofs to aggregate proofs from connected chains and enable near-atomic cross-chain transactions while preserving each chain's sovereignty. It aims to make a network of L1s and L2s feel like a single unified chain.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:data-layer", "label": "Data Layer"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Polygon AggLayer is a zero-knowledge-based aggregation layer that unifies liquidity and state across connected chains. It is closely related to the [[Data Layer]] for cross-chain proof availability and is a key enabler of [[Blockchain Interoperability]].
- ### Content
  - AggLayer aggregates ZK proofs submitted by participating chains and settles them against Ethereum, allowing assets and messages to move between chains with shared security and minimal trust assumptions. By unifying bridged liquidity into a single pool, it reduces fragmentation common to siloed rollups and bridges, while letting each chain choose its own execution environment and governance.
