public:: true

# Message Broker
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:message-broker",
  "@type": "Page",
  "vc:slug": "message-broker",
  "title": "Message Broker",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:message-broker",
  "@type": "Class",
  "label": "Message Broker",
  "definition": "A message broker is an intermediary software component that translates messages between disparate messaging protocols and routes them between producers and consumers, decoupling the two sides of a communication so that neither needs direct knowledge of the other. It typically provides guaranteed delivery, message queuing, routing rules, protocol translation, and persistence semantics.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:middleware",
    "label": "Middleware"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      },
      {
        "@id": "urn:ngm:class:amqp",
        "label": "AMQP"
      },
      {
        "@id": "urn:ngm:class:mqtt",
        "label": "MQTT"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:event-streaming",
        "label": "Event Streaming"
      },
      {
        "@id": "urn:ngm:class:asynchronous-messaging",
        "label": "Asynchronous Messaging"
      },
      {
        "@id": "urn:ngm:class:loose-coupling",
        "label": "Loose Coupling"
      },
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:persistent-storage",
        "label": "Persistent Storage"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Dead-Letter Queue"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:enterprise-service-bus",
        "label": "Enterprise Service Bus"
      },
      {
        "@id": "urn:ngm:class:remote-procedure-call",
        "label": "Remote Procedure Call"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      },
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      },
      {
        "@id": "urn:ngm:class:rabbitmq",
        "label": "RabbitMQ"
      },
      {
        "@id": "urn:ngm:class:apache-pulsar",
        "label": "Apache Pulsar"
      },
      {
        "@id": "urn:ngm:class:event-sourcing",
        "label": "Event Sourcing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
      },
      {
        "@id": "urn:ngm:class:iot-platform",
        "label": "IoT Platform"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:amqp",
        "label": "AMQP"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:message-oriented-middleware",
      "label": "Message-Oriented Middleware"
    }
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Message Broker]] is a [[Middleware]] component that receives messages from producers, applies routing and transformation logic, and delivers them to consumers, enabling loose coupling between services that communicate via [[Message Queue]] or [[Publish-Subscribe Pattern]] semantics.

- ### Relationships
  - Message Broker is a specialisation of [[Middleware]] and relies on [[Message Queue]] and [[Publish-Subscribe Pattern]] mechanisms internally. It enables [[Event Streaming]] workloads and is architecturally associated with [[Event-Driven Architecture]]. [[Apache Kafka]] is a widely deployed implementation that extends classic broker semantics with a distributed, durable log model.

- ### Content
  - Message brokers emerged in the 1980s and 1990s as enterprise applications needed to integrate heterogeneous systems without tight coupling. Early commercial products such as IBM MQ (formerly MQSeries, 1993) established the concept of persistent queues with guaranteed-at-least-once delivery. The AMQP open standard (2006) and later MQTT formalised interoperable protocols that allowed multi-vendor broker ecosystems. Open-source brokers like ActiveMQ, RabbitMQ, and later Apache Kafka democratised the technology.
  - A message broker accepts messages from one or more producer applications, stores them in queues or topics, and forwards them to subscriber or consumer applications according to configured routing rules. Core capabilities include: durable persistence (messages survive broker restart), routing (content-based, topic-based, or header-based), protocol translation (AMQP ↔ STOMP ↔ MQTT), flow control and back-pressure, and dead-letter queuing for undeliverable messages. Brokers may support point-to-point (queue), publish-subscribe (topic), or hybrid topologies.
  - Message brokers are foundational to microservices architectures, enabling services to communicate asynchronously without synchronous HTTP calls. Use cases span financial transaction processing (order routing), IoT sensor ingestion, e-commerce event pipelines, and real-time analytics. They improve system resilience: producers can continue publishing even when consumers are offline, and spike loads are absorbed by the queue rather than overwhelming downstream services. Enterprise Service Buses (ESBs) extended broker capabilities with orchestration and business-process integration.
  - In 2024-2025, the distinction between traditional message brokers (RabbitMQ, ActiveMQ Artemis) and distributed log platforms (Apache Kafka, Apache Pulsar, Redpanda) has sharpened. Kafka's append-only log model enables event sourcing and long-term replay, which classical brokers do not support efficiently. Cloud-managed offerings (AWS SQS/SNS, Google Pub/Sub, Azure Service Bus) now dominate for new workloads, while AI-driven systems increasingly use message brokers as the backbone for agent-to-agent communication in multi-agent frameworks.

