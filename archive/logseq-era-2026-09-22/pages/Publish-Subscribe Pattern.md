public:: true

# Publish-Subscribe Pattern
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b24f213b2e78dd645e50a75696759438d8dfccb8b443cc9d71d4e060bd4aad43",
  "@type": "Page",
  "vc:slug": "publish-subscribe-pattern",
  "title": "Publish-Subscribe Pattern",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:message-queue",
      "vc:label": "Message Queue"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:software-architecture",
      "vc:label": "Software Architecture"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Publish-Subscribe Pattern"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:publish-subscribe-pattern",
  "@type": "Class",
  "label": "Publish-Subscribe Pattern",
  "definition": "A messaging design pattern in which message producers (publishers) emit typed events to named topics or channels without direct knowledge of consumers, and message consumers (subscribers) declare interest in specific topics to receive matching events asynchronously. A broker or event bus mediates delivery, fully decoupling senders from receivers in space, time, and control flow. This architectural separation enables independent scaling, fault isolation, and runtime addition or removal of participants without coordination. Pub/Sub underpins event-driven architectures, stream processing systems, and reactive microservices.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      },
      {
        "@id": "urn:ngm:class:network-transport",
        "label": "Network Transport"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:loose-coupling",
        "label": "Loose Coupling"
      },
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      },
      {
        "@id": "urn:ngm:class:stream-processing",
        "label": "Stream Processing"
      },
      {
        "@id": "urn:ngm:class:reactive-systems",
        "label": "Reactive Systems"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:observer-pattern",
        "label": "Observer Pattern"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:serialisation",
        "label": "Serialisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:microservices-architecture",
        "label": "Microservices Architecture"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:mqtt",
        "label": "MQTT"
      },
      {
        "@id": "urn:ngm:class:amqp",
        "label": "AMQP"
      },
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:point-to-point-messaging",
        "label": "Point-to-Point Messaging"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:software-architecture",
        "label": "Software Architecture"
      },
      {
        "@id": "urn:ngm:class:event-sourcing",
        "label": "Event Sourcing"
      },
      {
        "@id": "urn:ngm:class:cqrs",
        "label": "CQRS"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:pub-sub-pattern",
      "label": "Pub/Sub Pattern"
    },
    {
      "@id": "urn:ngm:class:publish-subscribe-messaging",
      "label": "Publish-Subscribe Messaging"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:publish-subscribe-pattern:57b6ba45247e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b24f213b2e78dd645e50a75696759438d8dfccb8b443cc9d71d4e060bd4aad43"
  },
  "vc:resolutions": [
    {
      "raw": "[[Message Queue]]",
      "resolved": "urn:visionflow:linked:message-queue",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Software Architecture]]",
      "resolved": "urn:visionflow:linked:software-architecture",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The Publish-Subscribe Pattern (pub/sub) is a [[Messaging Pattern]] in which message producers (publishers) emit typed events to named topics or channels without direct knowledge of who will consume them, and consumers (subscribers) register interest in specific topics to receive matching events asynchronously. A [[Message Broker]] or [[Event Channel]] mediates all delivery, fully decoupling senders from receivers in space, time, and control flow. This decoupling is structurally equivalent to a network-scale [[Observer Pattern]], generalised to distributed environments. The pattern underpins [[Event-Driven Architecture]], [[Stream Processing]], and reactive [[Microservices Architecture]].

- ### Overview
  - Pub/Sub addresses a fundamental tension in [[Distributed Systems]]: components need to communicate without creating brittle point-to-point dependencies that prevent independent evolution. By routing all messages through a broker that matches topics to subscribers, the pattern allows:
    - Publishers to emit events without knowing how many consumers exist or where they run.
    - Subscribers to appear, disappear, or be replaced without affecting publishers.
    - New consumers to be added at runtime without service restarts or redeployment of existing components.
  - The pattern is considered [[mature]] in the industry, with large-scale deployments in financial markets, telecommunications, social media, IoT sensor networks, and cloud-native microservices.
  - Its primary trade-off is added complexity around delivery guarantees: unlike [[Request-Reply Pattern]] or [[Point-to-Point Messaging]], pub/sub brokers must address at-least-once, at-most-once, or exactly-once delivery semantics, as well as message ordering across partitions.

- ### Key Components
  - **Publisher**
    - Any component or service that emits an event or message to a named [[Topic]] without addressing a specific recipient.
    - Publishers are stateless with respect to subscribers — they have no knowledge of subscriber count, identity, or location.
  - **Subscriber**
    - A component that declares interest in one or more topics via a subscription registration.
    - Subscriptions may be topic-based (exact match), content-based (filtered on message attributes), or wildcard (prefix/glob matching).
    - See also: [[Content-Based Routing]] for attribute-filtered delivery.
  - **[[Message Broker]]**
    - The central intermediary that receives published messages, stores them (durably or transiently), and routes them to matched subscribers.
    - Examples: [[Apache Kafka]], [[RabbitMQ]], [[Apache ActiveMQ]], [[NATS]], Google Cloud Pub/Sub, AWS SNS/SQS.
  - **[[Topic]]** / Channel
    - A named, logical address to which publishers send and subscribers listen.
    - Topics may be organised hierarchically (e.g. `sensor/temperature/room1`) as in [[MQTT]], enabling wildcard subscriptions (`sensor/#`).
  - **[[Event Channel]]**
    - The abstraction layer through which messages flow from broker to subscriber; may be a queue, a log partition, or a streaming buffer.
  - **[[Serialisation]]**
    - Messages must be encoded for transport; common formats include JSON, [[Protocol Buffers]], Avro, and MessagePack.
  - **Delivery Guarantees**
    - At-most-once: fire-and-forget, acceptable message loss.
    - At-least-once: messages are retried until acknowledged; idempotent consumers required.
    - Exactly-once: guaranteed with distributed transaction support; implemented by [[Apache Kafka]] transactions and similar.
  - **[[Message Queue]]**
    - Often co-located with pub/sub infrastructure; queues provide buffering and load-levelling beneath topic subscriptions.

- ### Mechanisms
  - **Topic Matching**
    - Brokers maintain subscription registries. On arrival of a published message, the broker evaluates all registered subscriptions and dispatches copies to each matching subscriber.
    - Topic-based matching (string equality or wildcard) is O(n) over subscriptions; content-based routing incurs higher overhead per message.
  - **Fan-Out**
    - A single published message may be delivered to many subscribers simultaneously. This fan-out is the core mechanism enabling [[Event-Driven Architecture]] at scale.
  - **Persistence and Replay**
    - Durable brokers (e.g. [[Apache Kafka]]) persist message logs, enabling late-joining subscribers to replay historical events — a capability that bridges pub/sub with [[Event Sourcing]].
  - **Back-Pressure**
    - Fast publishers can overwhelm slow subscribers. Broker-side solutions include bounded queues, consumer group lag monitoring, and producer throttling.
  - **Consumer Groups**
    - Multiple subscribers can form a consumer group where each message is delivered to exactly one member, enabling parallel processing whilst preserving pub/sub semantics for other groups.
  - **Dead-Letter Queues**
    - Undeliverable or repeatedly-failed messages are routed to a dead-letter queue for manual inspection — a critical operational component in production systems.

- ### Applications & Use Cases
  - **[[Microservices Architecture]]**
    - Services publish domain events (e.g. `OrderPlaced`, `PaymentProcessed`) to shared topics. Downstream services subscribe independently, enabling [[Loose Coupling]] and independent deployment.
  - **[[IoT Architecture]]**
    - Sensors publish telemetry to topic hierarchies; analytics pipelines, alerting services, and dashboards subscribe selectively. [[MQTT]] is the dominant protocol in this domain.
  - **Financial Markets**
    - Market data feeds, trade execution events, and risk signals are distributed via high-throughput pub/sub systems (e.g. TIBCO Rendezvous, Solace PubSub+) with strict latency requirements.
  - **[[Stream Processing]]**
    - Frameworks such as Apache Flink and Apache Spark Streaming subscribe to [[Apache Kafka]] topics for continuous, stateful computation over event streams.
  - **[[Digital Twin]]**
    - Physical assets stream state updates to digital replicas via pub/sub, enabling real-time synchronisation between the physical and virtual worlds — a cross-domain bridge to [[spatial-computing]].
  - **[[Federated Learning]]**
    - Gradient updates and model version notifications can be distributed across participants via pub/sub channels, decoupling the aggregation server from edge nodes.
  - **[[CQRS]]**
    - In Command Query Responsibility Segregation, commands produce domain events published to a topic; read-side projections subscribe and maintain materialised views.
  - **[[Event Sourcing]]**
    - The event log acts as a durable pub/sub topic; replaying the log reconstructs state, unifying persistence and messaging.
  - **Notifications and Alerting**
    - Web push notifications, email triggers, and operational alerts are delivered via pub/sub to decouple event detection from notification delivery channels.
  - **[[Reactive Systems]]**
    - Reactive manifesto-compliant systems are built on message-passing via pub/sub, achieving responsiveness, elasticity, and resilience through asynchronous event flows.

- ### Relationships
  - partOf:: [[Event-Driven Architecture]]
  - implements:: [[Observer Pattern]]
  - hasPart:: [[Message Broker]]
  - hasPart:: [[Event Channel]]
  - hasPart:: [[Topic]]
  - requires:: [[Message Broker]]
  - requires:: [[Network Transport]]
  - dependsOn:: [[Distributed Systems]]
  - dependsOn:: [[Message Queue]]
  - enables:: [[Loose Coupling]]
  - enables:: [[Stream Processing]]
  - enables:: [[Reactive Systems]]
  - supports:: [[Microservices Architecture]]
  - supports:: [[IoT Architecture]]
  - uses:: [[Serialisation]]
  - uses:: [[Content-Based Routing]]
  - standardizedBy:: [[MQTT]]
  - standardizedBy:: [[AMQP]]
  - standardizedBy:: [[Apache Kafka]]
  - contrastsWith:: [[Request-Reply Pattern]]
  - contrastsWith:: [[Point-to-Point Messaging]]
  - contrastsWith:: [[Polling Pattern]]
  - relatedTo:: [[Event Sourcing]]
  - relatedTo:: [[CQRS]]
  - relatedTo:: [[Software Architecture]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Digital Twin]]

- ### Standards & Context
  - **[[MQTT]] (ISO/IEC 20922)**
    - Message Queuing Telemetry Transport — a lightweight pub/sub protocol designed for constrained devices and low-bandwidth networks. Topic hierarchy uses `/` separator with `+` (single-level) and `#` (multi-level) wildcards.
  - **[[AMQP]] (ISO/IEC 19464)**
    - Advanced Message Queuing Protocol — a wire-level protocol for message-oriented middleware with rich routing semantics including exchanges, bindings, and queues. Implemented by RabbitMQ.
  - **[[Apache Kafka]]**
    - A distributed, durable, replicated log system that provides pub/sub semantics with consumer group fan-out, exactly-once delivery, and event replay. De facto standard for high-throughput stream processing.
  - **NATS**
    - A lightweight, cloud-native messaging system with at-most-once (core NATS) and exactly-once (JetStream) pub/sub semantics, designed for cloud-native and edge deployments.
  - **Google Cloud Pub/Sub, AWS SNS, Azure Service Bus**
    - Managed cloud pub/sub services offering serverless scaling, global topic distribution, and integration with cloud-native data pipelines.
  - **CloudEvents (CNCF)**
    - A specification for describing event data in a common format, enabling interoperability across pub/sub systems and cloud providers.
  - **[[Reactive Systems]] (Reactive Manifesto, 2014)**
    - Articulates design principles — responsive, resilient, elastic, message-driven — that pub/sub directly enables at architectural scale.
  - **OASIS AMQP TC, Eclipse Foundation (MQTT)**
    - Standards bodies responsible for maintaining the AMQP and MQTT specifications respectively.

- ### Provenance
  - sources:: MQTT specification (ISO/IEC 20922); AMQP specification (ISO/IEC 19464); Apache Kafka documentation; Enterprise Integration Patterns (Hohpe & Woolf, 2003); Reactive Manifesto (2014); CNCF CloudEvents specification
  - updated:: 2026-06-13
