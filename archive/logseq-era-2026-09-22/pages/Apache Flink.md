public:: true

# Apache Flink
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:apache-flink",
  "@type": "Page",
  "title": "Apache Flink",
  "vc:slug": "apache-flink",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apache-flink",
  "@type": "Class",
  "label": "Apache Flink",
  "definition": "Apache Flink is an open-source distributed engine for stateful computations over unbounded and bounded data streams. It provides a unified runtime that treats batch processing as a special case of streaming, with event-time semantics, sophisticated windowing, and exactly-once state consistency backed by distributed snapshots. Flink is widely used for low-latency, high-throughput stream processing in real-time analytics, event-driven applications, and continuous data pipelines.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stream-processing",
      "label": "Stream Processing"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:stream-processing",
        "label": "Stream Processing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:data-pipeline",
        "label": "Data Pipeline"
      },
      {
        "@id": "urn:ngm:class:quorum",
        "label": "Distributed Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:apache-spark",
        "label": "Apache Spark"
      },
      {
        "@id": "urn:ngm:class:batch-processing",
        "label": "Batch Processing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-analytics",
        "label": "Real-Time Analytics"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-replication",
        "label": "Data Replication"
      },
      {
        "@id": "urn:ngm:class:eventual-consistency",
        "label": "Eventual Consistency"
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
  - Apache Flink is an open-source distributed engine for stateful computations over unbounded and bounded data streams. It provides a unified runtime that treats batch processing as a special case of streaming, with event-time semantics, sophisticated windowing, and exactly-once state consistency backed by distributed snapshots. Flink is widely used for low-latency, high-throughput stream processing in real-time analytics, event-driven applications, and continuous data pipelines.
  - [[Stream Processing]] [[Data Pipeline]] [[Distributed Computing]] [[Real-Time Analytics]]
- ### Overview
  - Flink originated from the Stratosphere research project and became a top-level Apache project, distinguishing itself with a true streaming dataflow runtime rather than micro-batching. Its checkpointing mechanism, based on the Chandy-Lamport distributed snapshot algorithm, captures consistent global state asynchronously, enabling exactly-once processing guarantees and fast recovery. Layered APIs span low-level process functions, the DataStream API, and SQL, allowing the same engine to serve diverse workloads.
- ### Key aspects
  - True streaming dataflow runtime with low latency
  - Event-time processing with watermarks for out-of-order data
  - Flexible windowing (tumbling, sliding, session)
  - Exactly-once state consistency via asynchronous checkpoints
  - Layered APIs from process functions to SQL
- ### Applications
  - Real-time fraud and anomaly detection
  - Continuous ETL and data pipelines
  - Event-driven microservices and alerting
  - Streaming analytics dashboards
  - Complex event processing
- ### Relationships
  - implements:: [[Stream Processing]]
  - uses:: [[Data Pipeline]]
  - uses:: [[Distributed Computing]]
  - contrastsWith:: [[Apache Spark]]
  - contrastsWith:: [[Batch Processing]]
  - enables:: [[Real-Time Analytics]]
  - dependsOn:: [[Distributed Computing]]
  - supports:: [[Apache Kafka]]
  - relatedTo:: [[Data Replication]]
  - relatedTo:: [[Eventual Consistency]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
