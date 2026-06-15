public:: true

# Event Streaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:event-streaming",
  "@type": "Page",
  "vc:slug": "event-streaming",
  "title": "Event Streaming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:event-streaming",
  "@type": "Class",
  "label": "Event Streaming",
  "definition": "Event streaming is a data-processing paradigm in which records of events are captured, stored as an ordered, append-only log, and continuously delivered to consumers in real time. Platforms such as Apache Kafka and Pulsar implement it to decouple producers from consumers and enable scalable, replayable data pipelines. It underpins real-time analytics, event-driven microservices, and the ingestion side of modern data architectures.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:event-log", "label": "Event Log"},
      {"@id": "urn:ngm:class:stream-partition", "label": "Stream Partition"},
      {"@id": "urn:ngm:class:consumer-group", "label": "Consumer Group"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:message-broker", "label": "Message Broker"},
      {"@id": "urn:ngm:class:distributed-storage", "label": "Distributed Storage"},
      {"@id": "urn:ngm:class:serialization-format", "label": "Serialization Format"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-analytics", "label": "Real-Time Analytics"},
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event-Driven Architecture"},
      {"@id": "urn:ngm:class:change-data-capture", "label": "Change Data Capture"},
      {"@id": "urn:ngm:class:stream-processing", "label": "Stream Processing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:publish-subscribe-pattern", "label": "Publish-Subscribe Pattern"},
      {"@id": "urn:ngm:class:data-pipeline", "label": "Data Pipeline"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:append-only-log", "label": "Append-Only Log"},
      {"@id": "urn:ngm:class:at-least-once-delivery", "label": "At-Least-Once Delivery"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:apache-kafka", "label": "Apache Kafka"},
      {"@id": "urn:ngm:class:apache-pulsar", "label": "Apache Pulsar"},
      {"@id": "urn:ngm:class:schema-registry", "label": "Schema Registry"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:data-mesh", "label": "Data Mesh"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:batch-processing", "label": "Batch Processing"},
      {"@id": "urn:ngm:class:request-response-pattern", "label": "Request-Response Pattern"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:message-broker", "label": "Message Broker"},
      {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"},
      {"@id": "urn:ngm:class:event-sourcing", "label": "Event Sourcing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:stream-data-processing", "label": "Stream Data Processing"},
    {"@id": "urn:ngm:class:event-stream-processing", "label": "Event Stream Processing"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Event streaming continuously delivers ordered event records from producers to consumers in real time, enabled by a [[Message Broker]] and feeding pipelines that depend on [[Metadata Management]].
- ### Content
  - Events are persisted as an append-only log, decoupling producers from consumers and allowing replay. This model powers real-time analytics and event-driven microservices, with brokers like Kafka providing durable, partitioned delivery at scale.
