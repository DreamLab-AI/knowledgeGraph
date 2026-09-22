public:: true

# Block Timestamp

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:block-timestamp", "@type":"Page", "title":"Block Timestamp", "vc:slug":"block-timestamp", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:block-timestamp",
  "@type":"Class",
  "label":"Block Timestamp",
  "definition":"A block timestamp is the time value that a block producer embeds in a blockchain block header, recording when the block was created according to that producer's clock. Because it is set by the block producer rather than a trusted external clock, it is only approximately accurate and is bounded by consensus rules to prevent large manipulation; difficulty adjustment algorithms and timelocks both depend on it. It provides the ordering and timing primitive on which many on-chain time-dependent mechanisms are built.",
  "domain":"blockchain",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:block","label":"Block"}],
  "relations":{
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Block Timestamp]] A block timestamp is the time value that a block producer embeds in a blockchain block header, recording when the block was created according to that producer's clock. Because it is set by the block producer rather than a trusted external clock, it is only approximately accurate and is bounded by consensus rules to prevent large manipulation; difficulty adjustment algorithms and timelocks both depend on it. It provides the ordering and timing primitive on which many on-chain time-dependent mechanisms are built.
- ### Relationships
	- subClassOf:: [[Block]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
