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
    "relatedTo": [{"@id": "urn:ngm:class:message-broker", "label": "Message Broker"}, {"@id": "urn:ngm:class:metadata-management", "label": "Metadata Management"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Event streaming continuously delivers ordered event records from producers to consumers in real time, enabled by a [[Message Broker]] and feeding pipelines that depend on [[Metadata Management]].
- ### Content
  - Events are persisted as an append-only log, decoupling producers from consumers and allowing replay. This model powers real-time analytics and event-driven microservices, with brokers like Kafka providing durable, partitioned delivery at scale.
