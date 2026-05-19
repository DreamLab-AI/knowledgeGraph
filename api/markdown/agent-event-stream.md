- ### Definition
  - A real-time telemetry stream (surface S6) that emits [[ActivityStream|ActivityStreams]]-based JSON-LD events for agent lifecycle events (birth, startup, activity, completion, error, termination) via WebSocket, Nostr relay, or message queue, enabling external monitoring systems, dashboards, and orchestrators to track agent fleet health and work progress in real-time without polling.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentEventStream
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[ObservabilityDomain]], [[TelemetryDomain]]
  - implemented-in-layer:: [[TelemetryLayer]], [[DataLayer]]

- ### Relationships
  - has-part:: [[Event Emission]], [[Event Subscription]], [[Event Filtering]], [[Real-Time Streaming]], [[Event Indexing]]
  - requires:: [[WebSocket Support]], [[JSON-LD 1.1]], [[ActivityStreams Vocabulary]], [[Event Schemas]]
  - enables:: [[Real-Time Monitoring]], [[Fleet Observability]], [[Work Tracking]], [[Anomaly Detection]], [[Automated Alerting]]
  - implements:: [[ActivityStreams 2.0]], [[JSON-LD 1.1]], [[W3C Event Streams]]
  - bridges-to:: [[Monitoring System]] (domain: ngm), [[Orchestration System]] (domain: ngm), [[Data Analytics Platform]] (domain: ngm)

- ### Content

  The Agent Event Stream is how external systems discover what agents are doing in real-time. Instead of querying an agent's state (which requires polling and creates overhead), external systems subscribe to the event stream and receive notifications as agents birth, activate, complete tasks, error, and terminate.

  #### Event Lifecycle

  Every agent emits events at key lifecycle points:

  **1. Birth Event**
  - **Trigger**: Agent instantiated (from manifest).
  - **Payload**: Agent DID, manifest URI, initial capabilities, timestamp.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Create",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-111111",
    "actor": "did:nostr:0abc...ef",
    "object": "did:nostr:0abc...ef",
    "objectType": "AgentInstance",
    "timestamp": "2026-04-26T12:00:00Z",
    "manifest": "urn:visionclaw:thing:agent-manifest-v1"
  }
  ```

  **2. Startup Event**
  - **Trigger**: Agent initialisation complete, ready to accept work.
  - **Payload**: Adapters loaded, memory initialised, relay connections established.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Announce",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-222222",
    "actor": "did:nostr:0abc...ef",
    "object": "AgentReadiness",
    "content": "Adapters loaded: solid-pod, ruvector, nostr-relay",
    "timestamp": "2026-04-26T12:00:10Z"
  }
  ```

  **3. Activity Event**
  - **Trigger**: Agent receives and begins processing a bead.
  - **Payload**: Bead URI, task description, assigned timestamp.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Announce",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-333333",
    "actor": "did:nostr:0abc...ef",
    "object": "urn:visionclaw:bead:0abc...ef:task-99",
    "objectType": "Bead",
    "content": "Task started",
    "timestamp": "2026-04-26T12:01:00Z"
  }
  ```

  **4. Completion Event**
  - **Trigger**: Agent completes a bead successfully.
  - **Payload**: Bead URI, result summary, duration, credential issued.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Arrive",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-444444",
    "actor": "did:nostr:0abc...ef",
    "object": "urn:visionclaw:bead:0abc...ef:task-99",
    "objectType": "Bead",
    "result": {
      "status": "success",
      "duration_ms": 45000,
      "credential": "urn:visionclaw:credential:0abc...ef:sha256-12-deadbeef"
    },
    "timestamp": "2026-04-26T12:02:15Z"
  }
  ```

  **5. Error Event**
  - **Trigger**: Agent encounters an error during task execution.
  - **Payload**: Error type, message, stack trace (optionally redacted), bead URI.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Announce",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-555555",
    "actor": "did:nostr:0abc...ef",
    "object": "urn:visionclaw:bead:0abc...ef:task-100",
    "eventType": "error",
    "error": {
      "type": "TimeoutException",
      "message": "Task exceeded 30-second timeout",
      "retryable": true
    },
    "timestamp": "2026-04-26T12:03:00Z"
  }
  ```

  **6. Termination Event**
  - **Trigger**: Agent is shutting down.
  - **Payload**: Reason, final statistics (tasks completed, errors, uptime).

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Leave",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-666666",
    "actor": "did:nostr:0abc...ef",
    "reason": "Graceful shutdown requested",
    "statistics": {
      "uptime_seconds": 3600,
      "tasks_completed": 42,
      "tasks_errored": 2
    },
    "timestamp": "2026-04-26T13:00:00Z"
  }
  ```

  #### Event Transport

  Events are emitted via the configured [[Agent Event Stream|Event Adapter]]:

  **WebSocket**
  - Real-time, low-latency streaming.
  - External systems subscribe to `wss://agentbox.local/events` and receive events as they occur.
  - Suitable for dashboards and real-time monitoring.

  **Nostr Relay**
  - Events published as Nostr events tagged with the agent's DID.
  - Subscribers on the relay receive events.
  - Suitable for [[Sovereign Mesh|mesh-based coordination]].

  **Message Queue** (RabbitMQ, Kafka)
  - Events published to a broker; consumers process asynchronously.
  - Suitable for analytics pipelines and batch processing.

  **Stdout**
  - Events logged to standard output.
  - Suitable for container-based systems (Kubernetes) where logs are aggregated by the platform.

  #### Event Filtering and Routing

  Consumers can filter events:

  - **By agent**: Only receive events from agent X.
  - **By event type**: Only receive completion events, not activity events.
  - **By outcome**: Only receive error events.
  - **By time range**: Only receive events from the last hour.

  Example WebSocket subscription:

  ```javascript
  const ws = new WebSocket('wss://agentbox.local/events');
  ws.onmessage = (msg) => {
    const event = JSON.parse(msg.data);
    if (event.eventType === 'completion' && event.result.status === 'success') {
      console.log(`Task completed: ${event.object}`);
    }
  };
  ```

  #### Event Indexing and Analytics

  A time-series database (InfluxDB, Prometheus) can ingest events and compute metrics:

  - **Agent Availability**: Percentage of time each agent is online.
  - **Task Throughput**: Tasks completed per minute, per agent.
  - **Error Rate**: Percentage of tasks errored, by agent and error type.
  - **Latency Percentiles**: P50, P95, P99 task completion times.

  #### Real-Time Dashboards

  A monitoring dashboard subscribes to the event stream and displays:

  - **Fleet Overview**: Count of online agents, tasks in progress, tasks completed in the last hour.
  - **Per-Agent Details**: Each agent's status, current task, error history.
  - **Heatmaps**: Task latency distribution, error rate trends.

  #### Alerting and Escalation

  Rules can be defined to trigger alerts:

  - "If an agent errors 3 times in a row, page the on-call engineer."
  - "If task latency exceeds 5 minutes, escalate to management."
  - "If any agent goes offline for >30 minutes, send a Slack notification."

  These rules operate on the event stream in real-time.

  #### Event Content-Addressing

  Each event has a [[URI Canonicaliser|urn:visionclaw: URI]] computed from its content hash. This enables:

  - **Deduplication**: If an event is published twice, it has the same URI; consumers can deduplicate.
  - **Reference**: Other events or credentials can reference a specific event by URI.
  - **Tamper Detection**: If an event is modified, its hash changes, so its URI changes.

- ### Provenance
  - sources:: [[ActivityStreams 2.0 Spec]], [[JSON-LD 1.1]], [[WebSocket Protocol]], [[W3C Event Streams]], [[PRD-006]]
  - migration-date:: 2026-04-26T00:00:00Z