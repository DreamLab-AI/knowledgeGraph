public:: true

# LSM Tree

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:lsm-tree", "@type":"Page", "title":"LSM Tree", "vc:slug":"lsm-tree", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:lsm-tree",
  "@type":"Class",
  "label":"LSM Tree",
  "definition":"An LSM Tree, or Log-Structured Merge Tree, is a write-optimised data structure that buffers writes in memory and periodically flushes them as sorted, immutable files on disk, later merging those files through background compaction. It trades read amplification for high write throughput, making it the storage engine of choice for databases with write-heavy workloads. It is used internally by many key-value stores, time-series databases, and graph databases.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-structure","label":"Data Structure"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An LSM Tree, or Log-Structured Merge Tree, is a write-optimised data structure that buffers writes in memory and periodically flushes them as sorted, immutable files on disk, later merging those files through background compaction. It trades read amplification for high write throughput, making it the storage engine of choice for databases with write-heavy workloads. It is used internally by many key-value stores, time-series databases, and graph databases.
- ### Relationships
	- subClassOf:: [[Data Structure]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
