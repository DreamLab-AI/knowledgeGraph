public:: true

# Change Data Capture
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:change-data-capture", "@type":"Page", "title":"Change Data Capture", "vc:slug":"change-data-capture", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:change-data-capture",
  "@type":"Class",
  "label":"Change Data Capture",
  "definition":"Change data capture is a set of techniques for identifying and propagating row-level changes — inserts, updates, and deletes — from a source database to downstream systems in near real time. The most robust approach reads the database transaction log, turning committed mutations into an ordered stream of change events without burdening the source with polling. It underpins data replication, event streaming, and incremental data integration, keeping analytical stores, caches, and microservices consistent with operational systems.",
  "domain":"data",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:data-integration","label":"Data Integration"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:data-integration","label":"Data Integration"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:event-streaming","label":"Event Streaming"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:database","label":"Database"},
      {"@id":"urn:ngm:class:event-streaming","label":"Event Streaming"},
      {"@id":"urn:ngm:class:apache-kafka","label":"Apache Kafka"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:data-replication","label":"Data Replication"},
      {"@id":"urn:ngm:class:stream-processing","label":"Stream Processing"},
      {"@id":"urn:ngm:class:event-sourcing","label":"Event Sourcing"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:data-pipeline","label":"Data Pipeline"},
      {"@id":"urn:ngm:class:microservices","label":"Microservices"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:database","label":"Database"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:data-warehouse","label":"Data Warehouse"},
      {"@id":"urn:ngm:class:data-lake","label":"Data Lake"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:stream-processing","label":"Stream Processing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Change Data Capture]] is a [[Data Integration]] technique that captures row-level changes from a source [[Database]] and propagates them downstream.
	- The log-based variant turns committed mutations into an ordered stream feeding [[Event Streaming]] and [[Stream Processing]].
	- It keeps analytical stores and [[Microservices]] consistent with operational systems in near real time.
- ### Overview
	- Traditional batch ETL re-reads whole tables on a schedule, which is slow, stale, and heavy on the source. CDC instead emits only what changed, as it changes.
	- Log-based CDC tails the database's write-ahead or binary log, reconstructing each insert, update, and delete with before and after images and preserving commit order.
	- Trigger-based and query-based variants exist but impose overhead or miss intermediate states; log-based capture is the preferred low-impact method.
	- Captured changes are typically published to a durable log such as Apache Kafka, where many consumers can replay and process them independently.
- ### Mechanisms
	- Read the transaction log to obtain an ordered, lossless change stream.
	- Serialise each change with metadata (operation type, source table, transaction, timestamp).
	- Publish to a streaming platform for fan-out to multiple sinks.
	- Apply exactly-once or idempotent delivery semantics to keep targets consistent.
- ### Applications
	- Real-time [[Data Replication]] from operational databases to a [[Data Warehouse]] or [[Data Lake]].
	- Cache and search-index invalidation driven by source changes.
	- [[Event Sourcing]] and inter-service communication in [[Microservices]] architectures.
	- Feeding streaming analytics and fraud-detection pipelines.
- ### Relationships
	- partOf:: [[Data Integration]]
	- hasPart:: [[Event Streaming]]
	- uses:: [[Database]]
	- uses:: [[Event Streaming]]
	- uses:: [[Apache Kafka]]
	- enables:: [[Data Replication]]
	- enables:: [[Stream Processing]]
	- enables:: [[Event Sourcing]]
	- supports:: [[Data Pipeline]]
	- supports:: [[Microservices]]
	- dependsOn:: [[Database]]
	- relatedTo:: [[Data Warehouse]]
	- relatedTo:: [[Data Lake]]
	- bridgesTo:: [[Stream Processing]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
