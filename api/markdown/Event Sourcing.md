public:: true

# Event Sourcing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:event-sourcing",
  "@type": "Page",
  "vc:slug": "event-sourcing",
  "title": "Event Sourcing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:event-sourcing",
  "@type": "Class",
  "label": "Event Sourcing",
  "definition": "Event sourcing is an architectural pattern for data persistence in which the state of a system is stored not as a mutable current-state record but as an append-only, ordered log of discrete domain events — each representing a fact that occurred at a specific point in time. Current application state is derived by replaying the event log from the beginning (or from a periodic snapshot), making the full history of state transitions a first-class, queryable artefact. This contrasts with CRUD-oriented architectures where only the latest state is stored, discarding historical change information.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:software-architecture", "label": "Software Architecture"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:event-driven-architecture", "label": "Event Driven Architecture"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:audit-log", "label": "Audit Log"},
      {"@id": "urn:ngm:class:domain-driven-design", "label": "Domain Driven Design"},
      {"@id": "urn:ngm:class:write-ahead-log", "label": "Write Ahead Log"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:message-queue", "label": "Message Queue"},
      {"@id": "urn:ngm:class:apache-kafka", "label": "Apache Kafka"},
      {"@id": "urn:ngm:class:data-persistence", "label": "Data Persistence"},
      {"@id": "urn:ngm:class:eventstoredb", "label": "EventStoreDB"},
      {"@id": "urn:ngm:class:append-only-log", "label": "Append Only Log"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:state-management", "label": "State Management"},
      {"@id": "urn:ngm:class:agent-event-stream", "label": "Agent Event Stream"},
      {"@id": "urn:ngm:class:temporal-query", "label": "Temporal Query"},
      {"@id": "urn:ngm:class:retroactive-correction", "label": "Retroactive Correction"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"},
      {"@id": "urn:ngm:class:cqrs", "label": "CQRS"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:event-store", "label": "Event Store"},
      {"@id": "urn:ngm:class:idempotency", "label": "Idempotency"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:event-projection", "label": "Event Projection"},
      {"@id": "urn:ngm:class:snapshot", "label": "Snapshot"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:crud-architecture", "label": "CRUD Architecture"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:eventual-consistency", "label": "Eventual Consistency"},
      {"@id": "urn:ngm:class:optimistic-concurrency-control", "label": "Optimistic Concurrency Control"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:ai-agent-memory", "label": "AI Agent Memory"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:event-log-architecture", "label": "Event Log Architecture"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Event Sourcing]] is a [[Software Architecture]] pattern that replaces mutable state storage with an append-only log of immutable domain events from which current state is reconstructed by replay, producing a built-in [[Audit Log]] of all state transitions and enabling temporal queries, event-driven projections, and reliable [[State Management]] in [[Microservices Architecture]] deployments.

- ### Relationships
  - [[Event Sourcing]] is a specialisation of [[Software Architecture]] and is closely paired with [[Event Driven Architecture]], where events are the primary communication medium between system components. It is commonly implemented alongside CQRS (Command Query Responsibility Segregation), separating the write model (event log) from read models (projections). The [[Audit Log]] emerges naturally from an event-sourced system because the event log is inherently an immutable history of what happened. [[Apache Kafka]] and similar distributed [[Message Queue]] systems serve as the durable event store substrate in many production implementations. [[Microservices Architecture]] benefits from event sourcing as the coupling mechanism between service boundaries, enabling each service to maintain its own [[Data Persistence]] model while sharing events. [[Agent Event Stream]] in AI multi-agent systems applies event sourcing concepts to agent action histories.

- ### Content
  - Event sourcing as a named pattern was articulated by Martin Fowler in his 2005 patterns catalogue, though the underlying concept has antecedents in accounting double-entry bookkeeping (which records transactions rather than balances), database write-ahead logging (WAL), and git version control (which stores diffs and reconstructs file state by replay). The pattern gained significant adoption momentum through Domain-Driven Design (DDD) communities after Eric Evans' 2003 book, which emphasised modelling business processes as sequences of domain events rather than entity state. The combination of CQRS and event sourcing was popularised by Greg Young through talks and writings from approximately 2010 onwards, producing a coherent architectural style for complex, high-load systems.

  - An event-sourced system processes incoming commands by validating them against current state (derived from replaying the event log or a snapshot), producing one or more domain events that capture the business-meaningful facts that resulted, and appending those events to the event store. The event store is the single source of truth — a write model that is only ever appended to, never updated in place. Read models (projections) are derived views computed by subscribing to the event stream and maintaining materialised views optimised for specific query patterns. Because projections are derived, they can be rebuilt from scratch by replaying the event log, enabling schema evolution, bug fixes in query logic, and retroactive computation of new views over historical data.

  - The benefits of event sourcing include complete auditability (every state change is recorded with its cause), temporal queries (reconstruct system state at any point in history), retroactive correction (replay events through corrected business logic to rebuild projections), and natural integration with event-driven architecture (events can be published to external subscribers for integration). These properties make event sourcing particularly valuable in financial systems (where regulators require full transaction audit trails), collaboration software (where optimistic concurrency and conflict resolution benefit from shared event history), and multi-agent AI systems (where replaying the sequence of agent decisions enables debugging and explanation). The trade-offs include increased storage requirements, eventual consistency of read models, and complexity in reasoning about projections and snapshot management.

  - By 2024-2025, event sourcing has moved from an advanced architectural pattern to a mainstream consideration in complex system design, supported by mature frameworks including Axon Framework (Java), EventStoreDB (purpose-built event store), and Marten (PostgreSQL-based event store for .NET). Apache Kafka's log compaction and consumer group semantics provide a production-proven substrate for event-sourced systems at scale. The pattern has found new relevance in AI agent architectures, where the sequence of tool calls, observations, and reasoning steps constitutes an event stream that enables agent memory, reproducibility, and auditable decision trails. The challenge of long event histories — requiring efficient snapshot strategies and log compaction — remains a practical engineering concern in long-running production systems.

