public:: true

# AMQP
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:amqp",
  "@type": "Page",
  "title": "AMQP",
  "vc:slug": "amqp",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:amqp",
  "@type": "Class",
  "label": "AMQP",
  "definition": "AMQP (Advanced Message Queuing Protocol) is an open, binary application-layer protocol for message-oriented middleware that defines wire-level framing, message routing and reliable delivery between brokers and clients regardless of vendor or platform. It models messaging through exchanges, queues and bindings that decouple producers from consumers and support routing patterns including direct, topic, fanout and headers exchanges. AMQP 1.0 is standardised by OASIS and ISO/IEC 19464, while the earlier AMQP 0-9-1 specification remains widely deployed in broker implementations.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:message-queue",
        "label": "Message Queue"
      },
      {
        "@id": "urn:ngm:class:message-broker",
        "label": "Message Broker"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      },
      {
        "@id": "urn:ngm:class:asynchronous-communication",
        "label": "Asynchronous Communication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:event-driven-architecture",
        "label": "Event Driven Architecture"
      },
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oasis",
        "label": "OASIS"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Middleware"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:mqtt",
        "label": "MQTT"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:event-sourcing",
        "label": "Event Sourcing"
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
  - [[AMQP]] is an open wire-level [[Network Protocol]] for [[Message Broker]] interoperability, enabling reliable [[Asynchronous Communication]] between heterogeneous systems through the [[Publish-Subscribe Pattern]].
- ### Overview
  - AMQP emerged from the financial-services industry to escape vendor lock-in inherent in proprietary messaging products. By specifying the exact bytes exchanged on the wire, AMQP guarantees that a broker and client from different vendors can interoperate, a property that distinguishes it from API-level messaging libraries.
  - The protocol exists in two major lineages. AMQP 0-9-1 popularised the exchange/queue/binding broker model used by widely deployed brokers, while AMQP 1.0, standardised by OASIS and published as ISO/IEC 19464, redefined the protocol as a peer-to-peer link layer with formal type system, sessions and flow control.
- ### Key aspects
  - Broker model: producers publish to exchanges that route messages to bound queues from which consumers draw, decoupling sender and receiver lifecycles.
  - Routing semantics: direct, topic, fanout and headers exchanges support point-to-point, hierarchical and broadcast distribution.
  - Reliability: acknowledgements, transactions and persistent delivery provide at-least-once and exactly-once guarantees.
  - Flow control: credit-based link flow control in AMQP 1.0 prevents fast producers from overwhelming slow consumers.
- ### Mechanisms
  - Frames carry method, header and body content over a multiplexed connection of channels or sessions.
  - A self-describing type system encodes message bodies portably across languages and platforms.
  - Settlement and disposition states track delivery progress for guaranteed handoff.
- ### Applications
  - Enterprise integration buses, financial trade messaging, telemetry ingestion and microservice event distribution.
  - Cloud messaging services expose AMQP endpoints to bridge on-premises and cloud workloads.
- ### Relationships
  - uses:: [[Message Queue]]
  - uses:: [[Message Broker]]
  - implements:: [[Publish-Subscribe Pattern]]
  - implements:: [[Asynchronous Communication]]
  - enables:: [[Event Driven Architecture]]
  - enables:: [[Interoperability]]
  - standardizedBy:: [[OASIS]]
  - partOf:: [[Middleware]]
  - contrastsWith:: [[MQTT]]
  - supports:: [[Network Protocol]]
  - dependsOn:: [[API Gateway]]
  - relatedTo:: [[Cloud Computing]]
  - bridgesTo:: [[Event Sourcing]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - maturity:: mature
