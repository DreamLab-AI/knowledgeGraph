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