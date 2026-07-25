public:: true

# Rabbitmq

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:rabbitmq",
  "@type": "Page",
  "title": "Rabbitmq",
  "vc:slug": "rabbitmq",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:rabbitmq",
  "@type": "Class",
  "label": "Rabbitmq",
  "definition": "RabbitMQ is an open-source message broker that implements the Advanced Message Queuing Protocol (AMQP) and related messaging standards, routing messages between producers and consumers through exchanges, bindings, and queues. It supports flexible routing topologies, message acknowledgement, durability, and clustering for high availability. RabbitMQ is widely used to decouple services and enable reliable asynchronous communication in distributed systems.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:message-broker",
      "label": "Message Broker"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:amqp",
        "label": "AMQP"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      },
      {
        "@id": "urn:ngm:class:routing",
        "label": "Routing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asynchronous-messaging",
        "label": "Asynchronous Messaging"
      },
      {
        "@id": "urn:ngm:class:loose-coupling",
        "label": "Loose Coupling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:apache-kafka",
        "label": "Apache Kafka"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:reliability",
        "label": "Reliability"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Rabbitmq]] is an [[AMQP]]-based [[Message Broker]] that routes messages via exchanges and [[Message Queue]]s, enabling [[Asynchronous Messaging]] and [[Loose Coupling]].
- ### Overview
  - RabbitMQ is a broker-centric messaging system in which producers publish messages to exchanges, and exchanges route them to queues according to bindings and routing keys. Consumers then read from queues, optionally acknowledging delivery so the broker can guarantee at-least-once semantics.
  - Its flexible exchange types (direct, topic, fanout, headers) make it well suited to complex routing, work distribution, and request-reply patterns, distinguishing it from log-centric systems such as [[Apache Kafka]].
- ### Key aspects
  - Exchanges, bindings, routing keys, and queues as the core routing model.
  - Acknowledgements, redelivery, and dead-letter queues for reliability.
  - Durable queues and persistent messages for crash recovery.
  - Clustering, mirrored/quorum queues, and federation for [[Fault Tolerance]].
  - Plugins, management UI, and multi-protocol support (AMQP, MQTT, STOMP).
- ### Mechanisms
  - Publisher confirms and consumer acknowledgements for delivery guarantees.
  - Prefetch and flow control to balance consumer load.
  - Quorum queues using a consensus protocol for replicated durability.
  - Topic-based routing for selective message fan-out.
- ### Applications
  - Decoupling [[Microservices]] with reliable task queues.
  - Background job processing and work distribution.
  - Event distribution in [[Event Driven Architecture]].
  - Integration buses for heterogeneous enterprise systems.
- ### Relationships
  - implements:: [[AMQP]]
  - partOf:: [[Message Broker]]
  - uses:: [[Message Queue]]
  - uses:: [[Routing]]
  - enables:: [[Asynchronous Messaging]]
  - enables:: [[Loose Coupling]]
  - supports:: [[Event Driven Architecture]]
  - supports:: [[Microservices]]
  - relatedTo:: [[Apache Kafka]]
  - relatedTo:: [[Message Passing]]
  - contrastsWith:: [[Apache Kafka]]
  - requires:: [[Reliability]]
  - requires:: [[Fault Tolerance]]
- ### Provenance
  - source:: GapMaterialisation
  - updated:: 2026-06-15
