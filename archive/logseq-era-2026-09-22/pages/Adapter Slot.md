public:: true

# Adapter Slot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0636c55ad35778262f590bac16b8467643c8c3510731d91cfde2d8bcf4b2a4a4",
  "@type": "Page",
  "vc:slug": "adapter-slot",
  "title": "Adapter Slot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adapter-layer",
      "vc:label": "AdapterLayer"
    },
    {
      "@id": "urn:visionflow:linked:adapter-pattern",
      "vc:label": "Adapter Pattern"
    },
    {
      "@id": "urn:visionflow:linked:adr-005",
      "vc:label": "ADR-005"
    },
    {
      "@id": "urn:visionflow:linked:agent-bead",
      "vc:label": "Agent Bead"
    },
    {
      "@id": "urn:visionflow:linked:agent-bead",
      "vc:label": "Agent Bead"
    },
    {
      "@id": "urn:visionflow:linked:agent-memory",
      "vc:label": "Agent Memory"
    },
    {
      "@id": "urn:visionflow:linked:ai-application",
      "vc:label": "AgenticSystemsDomain"
    },
    {
      "@id": "urn:visionflow:linked:architecture-domain",
      "vc:label": "ArchitectureDomain"
    },
    {
      "@id": "urn:visionflow:linked:bead-adapter",
      "vc:label": "Bead Adapter"
    },
    {
      "@id": "urn:visionflow:linked:containerisation",
      "vc:label": "Containerisation"
    },
    {
      "@id": "urn:visionflow:linked:dependency-injection",
      "vc:label": "Dependency Injection"
    },
    {
      "@id": "urn:visionflow:linked:dependency-injection-principles",
      "vc:label": "Dependency Injection Principles"
    },
    {
      "@id": "urn:visionflow:linked:deployment-flexibility",
      "vc:label": "Deployment Flexibility"
    },
    {
      "@id": "urn:visionflow:linked:design-patterns-gang-of-four",
      "vc:label": "Design Patterns - Gang of Four"
    },
    {
      "@id": "urn:visionflow:linked:event-adapter",
      "vc:label": "Event Adapter"
    },
    {
      "@id": "urn:visionflow:linked:interface-specification",
      "vc:label": "Interface Specification"
    },
    {
      "@id": "urn:visionflow:linked:manifest-declaration",
      "vc:label": "Manifest Declaration"
    },
    {
      "@id": "urn:visionflow:linked:memory-adapter",
      "vc:label": "Memory Adapter"
    },
    {
      "@id": "urn:visionflow:linked:nostr-relay",
      "vc:label": "Nostr Relay"
    },
    {
      "@id": "urn:visionflow:linked:nostr-relay",
      "vc:label": "Nostr Relay"
    },
    {
      "@id": "urn:visionflow:linked:orchestration-interface",
      "vc:label": "Orchestration Interface"
    },
    {
      "@id": "urn:visionflow:linked:orchestrator-adapter",
      "vc:label": "Orchestrator Adapter"
    },
    {
      "@id": "urn:visionflow:linked:pluggable-memory",
      "vc:label": "Pluggable Memory"
    },
    {
      "@id": "urn:visionflow:linked:pluggable-storage",
      "vc:label": "Pluggable Storage"
    },
    {
      "@id": "urn:visionflow:linked:pluggable-telemetry",
      "vc:label": "Pluggable Telemetry"
    },
    {
      "@id": "urn:visionflow:linked:pluggable-work-distribution",
      "vc:label": "Pluggable Work Distribution"
    },
    {
      "@id": "urn:visionflow:linked:pod-adapter",
      "vc:label": "Pod Adapter"
    },
    {
      "@id": "urn:visionflow:linked:runtime-initialization",
      "vc:label": "Runtime Initialization"
    },
    {
      "@id": "urn:visionflow:linked:solid-pod-storage",
      "vc:label": "Solid Pod Storage"
    },
    {
      "@id": "urn:visionflow:linked:solid-pod-storage",
      "vc:label": "Solid Pod Storage"
    },
    {
      "@id": "urn:visionflow:linked:strategy-pattern",
      "vc:label": "Strategy Pattern"
    },
    {
      "@id": "urn:visionflow:owl:class:agent-event-stream",
      "vc:label": "Agent Event Stream"
    },
    {
      "@id": "urn:visionflow:owl:class:infrastructure-layer",
      "vc:label": "InfrastructureLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:microservices-architecture",
      "vc:label": "Microservices Architecture"
    },
    {
      "@id": "urn:visionflow:owl:class:vision-claw-agentic-container",
      "vc:label": "VisionClaw Agentic Container"
    },
    {
      "@id": "urn:visionflow:owl:class:vision-claw-agentic-container",
      "vc:label": "VisionClaw Agentic Container"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Adapter Slot"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:adapter-slot",
  "@type": "Class",
  "label": "Adapter Slot",
  "definition": "A pluggable interface architecture (ADR-005) providing five standardised slots through which a VisionClaw Agentic Container|VisionClaw agent interacts with its environment: Solid Pod Storage|Pod (persistent storage), Agent Memory|Memory (episodic and semantic),",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {},
  "quality": 0.89,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:adapter-slot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0636c55ad35778262f590bac16b8467643c8c3510731d91cfde2d8bcf4b2a4a4"
  },
  "vc:resolutions": [
    {
      "raw": "[[AdapterLayer]]",
      "resolved": "urn:visionflow:linked:adapter-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Adapter Pattern]]",
      "resolved": "urn:visionflow:linked:adapter-pattern",
      "kind": "StubLink"
    },
    {
      "raw": "[[ADR-005]]",
      "resolved": "urn:visionflow:linked:adr-005",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent Bead|Beads (work units)]]",
      "resolved": "urn:visionflow:linked:agent-bead",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent Bead|beads]]",
      "resolved": "urn:visionflow:linked:agent-bead",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent Memory|Memory (episodic and semantic)]]",
      "resolved": "urn:visionflow:linked:agent-memory",
      "kind": "StubLink"
    },
    {
      "raw": "[[AgenticSystemsDomain]]",
      "resolved": "urn:visionflow:linked:ai-application",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArchitectureDomain]]",
      "resolved": "urn:visionflow:linked:architecture-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Bead Adapter]]",
      "resolved": "urn:visionflow:linked:bead-adapter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Containerisation]]",
      "resolved": "urn:visionflow:linked:containerisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dependency Injection]]",
      "resolved": "urn:visionflow:linked:dependency-injection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dependency Injection Principles]]",
      "resolved": "urn:visionflow:linked:dependency-injection-principles",
      "kind": "StubLink"
    },
    {
      "raw": "[[Deployment Flexibility]]",
      "resolved": "urn:visionflow:linked:deployment-flexibility",
      "kind": "StubLink"
    },
    {
      "raw": "[[Design Patterns - Gang of Four]]",
      "resolved": "urn:visionflow:linked:design-patterns-gang-of-four",
      "kind": "StubLink"
    },
    {
      "raw": "[[Event Adapter]]",
      "resolved": "urn:visionflow:linked:event-adapter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interface Specification]]",
      "resolved": "urn:visionflow:linked:interface-specification",
      "kind": "StubLink"
    },
    {
      "raw": "[[Manifest Declaration]]",
      "resolved": "urn:visionflow:linked:manifest-declaration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Memory Adapter]]",
      "resolved": "urn:visionflow:linked:memory-adapter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nostr Relay|Nostr Relay]]",
      "resolved": "urn:visionflow:linked:nostr-relay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Nostr Relay|Nostr relays]]",
      "resolved": "urn:visionflow:linked:nostr-relay",
      "kind": "StubLink"
    },
    {
      "raw": "[[Orchestration Interface|Orchestrator (control)]]",
      "resolved": "urn:visionflow:linked:orchestration-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[Orchestrator Adapter]]",
      "resolved": "urn:visionflow:linked:orchestrator-adapter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pluggable Memory]]",
      "resolved": "urn:visionflow:linked:pluggable-memory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pluggable Storage]]",
      "resolved": "urn:visionflow:linked:pluggable-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pluggable Telemetry]]",
      "resolved": "urn:visionflow:linked:pluggable-telemetry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pluggable Work Distribution]]",
      "resolved": "urn:visionflow:linked:pluggable-work-distribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pod Adapter]]",
      "resolved": "urn:visionflow:linked:pod-adapter",
      "kind": "StubLink"
    },
    {
      "raw": "[[Runtime Initialization]]",
      "resolved": "urn:visionflow:linked:runtime-initialization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solid Pod Storage|Pod (persistent storage)]]",
      "resolved": "urn:visionflow:linked:solid-pod-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solid Pod Storage|Solid Pod]]",
      "resolved": "urn:visionflow:linked:solid-pod-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Strategy Pattern]]",
      "resolved": "urn:visionflow:linked:strategy-pattern",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent Event Stream|Events (telemetry)]]",
      "resolved": "urn:visionflow:owl:class:agent-event-stream",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InfrastructureLayer]]",
      "resolved": "urn:visionflow:owl:class:infrastructure-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microservices Architecture]]",
      "resolved": "urn:visionflow:owl:class:microservices-architecture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VisionClaw Agentic Container|VisionClaw agent]]",
      "resolved": "urn:visionflow:owl:class:vision-claw-agentic-container",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VisionClaw Agentic Container|VisionClaw runtime]]",
      "resolved": "urn:visionflow:owl:class:vision-claw-agentic-container",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A pluggable interface architecture (ADR-005) providing five standardised slots through which a [[VisionClaw Agentic Container|VisionClaw agent]] interacts with its environment: [[Solid Pod Storage|Pod (persistent storage)]], [[Agent Memory|Memory (episodic and semantic)]], [[Agent Event Stream|Events (telemetry)]], [[Agent Bead|Beads (work units)]], and [[Orchestration Interface|Orchestrator (control)]], each replaceable at runtime without modifying agent code.

- ### Semantic Classification
  - owl-class:: infrastructure:AdapterSlot
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[ArchitectureDomain]]
  - implemented-in-layer:: [[InfrastructureLayer]], [[AdapterLayer]]

- ### Relationships
  - has-part:: [[Pod Adapter]], [[Memory Adapter]], [[Event Adapter]], [[Bead Adapter]], [[Orchestrator Adapter]]
  - requires:: [[Manifest Declaration]], [[Interface Specification]], [[Runtime Initialization]]
  - enables:: [[Pluggable Storage]], [[Pluggable Memory]], [[Pluggable Telemetry]], [[Pluggable Work Distribution]], [[Deployment Flexibility]]
  - implements:: [[Strategy Pattern]], [[Adapter Pattern]], [[Dependency Injection]]
  - bridges-to:: [[Containerisation]] (domain: ngm), [[Microservices Architecture]] (domain: ngm)

- ### Content

  The Adapter Slot architecture is the isolation boundary between agent logic and the underlying infrastructure. It allows agents to be deployed in diverse environments (local development, cloud, edge, distributed mesh) without code changes, by swapping adapter implementations at runtime.

  #### Five Slots

  **1. Pod Adapter**
  - **Purpose**: Persistent storage of agent state, credentials, and artefacts.
  - **Interface**: Standard CRUD operations (Create, Read, Update, Delete) and query methods.
  - **Built-In Implementations**:
    - **[[Solid Pod Storage|Solid Pod]]**: Stores data in a remote Solid-compliant pod (e.g., a Solid server or SPARQL backend).
    - **Local Filesystem**: Stores data in a local directory (for single-agent deployments).
    - **S3-Compatible**: Stores data in cloud object storage (AWS S3, MinIO, etc.).
    - **RDF Triple Store**: Stores data as RDF triples in a SPARQL endpoint.
  - **Manifest Specification**:
    ```yaml
    adapters:
      pod: solid-pod
      pod_config:
        url: https://solid.example.com/alice/
        token: <access_token>
    ```

  **2. Memory Adapter**
  - **Purpose**: Agent episodic memory (recent tasks, observations) and semantic memory (learned patterns, world models).
  - **Interface**: Store(key, value), Retrieve(key), Search(query), Forget(key).
  - **Built-In Implementations**:
    - **In-Process**: Memory stored in agent process RAM (fast, volatile).
    - **Redis**: External in-memory store (persistent, shareable across agent instances).
    - **RuVector**: Semantic memory with HNSW-indexed embeddings (vector search enabled).
    - **SQLite**: Local database with schema constraints.
  - **Manifest Specification**:
    ```yaml
    adapters:
      memory: ruvector
      memory_config:
        host: ruvector-postgres:5432
        database: agent-memory
        embedding_model: all-MiniLM-L6-v2
    ```

  **3. Event Adapter**
  - **Purpose**: Emit telemetry events (agent birth, activity, completion, errors, termination).
  - **Interface**: Emit(eventType, payload), Subscribe(eventType, callback).
  - **Built-In Implementations**:
    - **Nostr Relay**: Publishes events to [[Nostr Relay|Nostr relays]].
    - **WebSocket Server**: Streams events over WebSocket to a local or remote listener.
    - **Message Queue** (RabbitMQ, Kafka): Publishes to a message broker.
    - **Stdout**: Logs events to standard output (for container-based observability).
  - **Manifest Specification**:
    ```yaml
    adapters:
      events: nostr-relay
      events_config:
        relays:
          - wss://relay.damus.io
          - wss://relay.local:8008
    ```

  **4. Bead Adapter**
  - **Purpose**: Receive work units ([[Agent Bead|beads]]) and track completion.
  - **Interface**: FetchBead(filter), AcknowledgeBead(beadId), CompleteBead(beadId, result).
  - **Built-In Implementations**:
    - **[[Nostr Relay|Nostr Relay]]**: Beads are published as Nostr events tagged with the agent's DID.
    - **HTTP Polling**: Agent polls a work queue endpoint (e.g., a REST API) for pending beads.
    - **Message Queue**: Agent consumes beads from a RabbitMQ or Kafka queue.
    - **[[Solid Pod Storage|Solid Pod]]**: Beads are stored as RDF resources in the agent's pod.
  - **Manifest Specification**:
    ```yaml
    adapters:
      beads: nostr-relay
      beads_config:
        relays:
          - wss://relay.damus.io
    ```

  **5. Orchestrator Adapter**
  - **Purpose**: Control signals (pause, resume, terminate, policy changes) and resource constraints (CPU, memory, timeout).
  - **Interface**: SetPolicy(policy), GetPolicy(), SetResourceLimit(resource, limit), IsShuttingDown().
  - **Built-In Implementations**:
    - **Management API**: Remote control via HTTP endpoints.
    - **Local Control**: Command-line interface or environment variable control.
    - **Kubernetes**: Integration with Kubernetes resource limits and probes.
    - **[[Nostr Relay|Nostr Relay]]**: Control signals published as tagged Nostr events.
  - **Manifest Specification**:
    ```yaml
    adapters:
      orchestrator: management-api
      orchestrator_config:
        control_endpoint: https://agentbox.local/control
        api_key: <key>
    ```

  #### Adapter Initialization

  The agent's manifest declares which adapters to use. On startup, the [[VisionClaw Agentic Container|VisionClaw runtime]]:

  1. **Reads the manifest**.
  2. **Instantiates each adapter** from a registry of available implementations.
  3. **Injects adapters into the agent** via dependency injection.
  4. **Agent logic uses adapters** through abstract interfaces, never knowing which concrete implementation is loaded.

  This design means that the agent code is completely decoupled from the infrastructure choices.

  #### Example: Multi-Adapter Deployment

  A single agent can use different adapters in different environments:

  **Development**:
  ```yaml
  adapters:
    pod: local-filesystem
    memory: in-process
    events: stdout
    beads: local-polling
    orchestrator: cli
  ```

  **Production**:
  ```yaml
  adapters:
    pod: solid-pod
    memory: ruvector
    events: nostr-relay
    beads: nostr-relay
    orchestrator: management-api
  ```

  The agent code is identical in both cases.

  #### Failure Isolation

  If a Pod Adapter is slow (e.g., the remote Solid server is unreachable), the agent doesn't block. Instead:

  - Agent logic continues executing (using in-memory copies of recent data).
  - Pod writes are queued locally.
  - When the pod becomes reachable, queued writes are flushed.

  Similarly, if the Event Adapter is unavailable, the agent buffers events locally until the adapter recovers. This isolation ensures that infrastructure failures don't cascade to agent logic.

  #### Custom Adapters

  Operators can implement custom adapters. For example:

  - **Custom Pod Adapter**: Stores agent state in a proprietary ledger system.
  - **Custom Memory Adapter**: Uses a specialised vector database optimised for agent patterns.
  - **Custom Event Adapter**: Publishes to an operator's custom telemetry service.

  The only requirement is that the custom adapter implements the abstract interface. Once implemented, it can be registered and used by any agent.

- ### Provenance
  - sources:: [[ADR-005]], [[Design Patterns - Gang of Four]], [[Dependency Injection Principles]]
  - migration-date:: 2026-04-26T00:00:00Z
