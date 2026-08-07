public:: true

# Error Recovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1d78b336473c05ec8aa254f8fae9cbeef761f71a674608bd847efe290a3fc507",
  "@type": "Page",
  "vc:slug": "error-recovery",
  "title": "Error Recovery",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:fault-tolerance",
      "vc:label": "Fault Tolerance"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-task-execution",
      "vc:label": "Autonomous Task Execution"
    },
    {
      "@id": "urn:visionflow:linked:agent-orchestrator",
      "vc:label": "Agent Orchestrator"
    },
    {
      "@id": "urn:visionflow:linked:interaction-design",
      "vc:label": "Interaction Design"
    },
    {
      "@id": "urn:visionflow:linked:resilience",
      "vc:label": "Resilience"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:error-recovery",
  "@type": "Class",
  "label": "Error Recovery",
  "definition": "Error recovery is the set of mechanisms by which a system detects that an operation has failed or produced an invalid state and restores correct operation, through techniques such as retries with exponential backoff, checkpointing and rollback, compensating actions, graceful degradation, and escalation to human oversight. In autonomous agent systems it distinguishes robust task execution from brittle scripted automation, and in interaction design it covers helping users notice, diagnose, and undo their own mistakes.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:fault-tolerance",
    "label": "Fault Tolerance"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:autonomous-task-execution",
        "label": "Autonomous Task Execution"
      },
      {
        "@id": "urn:ngm:class:agent-orchestrator",
        "label": "Agent Orchestrator"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:resilience",
        "label": "Resilience"
      },
      {
        "@id": "urn:ngm:class:interaction-design",
        "label": "Interaction Design"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Error recovery is the set of mechanisms by which a system detects that an operation has failed or produced an invalid state and restores correct operation, through techniques such as retries with exponential backoff, checkpointing and rollback, compensating actions, graceful degradation, and escalation to human oversight. In autonomous agent systems it distinguishes robust task execution from brittle scripted automation, and in interaction design it covers helping users notice, diagnose, and undo their own mistakes."

- ### Semantic Classification
  - owl-class:: distributed-systems:ErrorRecovery
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Fault Tolerance]]
  - part-of:: [[Autonomous Task Execution]]
  - part-of:: [[Agent Orchestrator]]
  - related-to:: [[Interaction Design]]

- ### Content

  ## Definition

  **Error recovery** is what a system does *after* something goes wrong. Where fault prevention tries to keep errors from occurring and fault detection notices them, recovery restores the system to a state from which correct service can continue. The classical dependability literature distinguishes *backward recovery* — return to a previously saved correct state via checkpointing and rollback, as in database transactions — from *forward recovery* — drive the system to a new correct state via compensation, reconstruction, or degraded operation. Which is feasible depends on whether actions are reversible: a database write can be rolled back; a sent email or a physical robot motion needs a compensating action instead.

  In distributed systems, recovery machinery is pervasive and largely standardised: retries with exponential backoff and jitter for transient faults, idempotency keys so retries are safe, circuit breakers to stop cascading failure, dead-letter queues for messages that repeatedly fail, sagas that pair each step of a long-running workflow with a compensating transaction, and supervision trees (popularised by Erlang/OTP) that restart failed components in a known-good state.

  For [[Autonomous Task Execution]] by AI agents, error recovery is the decisive capability gap. An [[Agent Orchestrator]] must detect that a step failed — including *soft* failures where a tool returned plausible but wrong output — then decide whether to retry, re-plan around the obstacle, roll back partial effects, switch strategy, or escalate to a human. Because LLM-based agents operate in open environments with imperfect self-knowledge, recovery relies on verification loops (checking outcomes against expectations), bounded retry budgets, and checkpointed intermediate state, and failure-recovery competence is now a primary axis on agent benchmarks. In [[Interaction Design]], the same concept appears at human scale: Nielsen's usability heuristics require that systems help users recognise, diagnose, and recover from errors — clear error messages, undo, and forgiving defaults.

  ## Technical Details

  - **Backward recovery**: checkpoint/restart, write-ahead logging, ACID transaction rollback; recovery point placement trades overhead against lost work.
  - **Forward recovery**: compensating transactions (sagas), exception handlers, degraded modes, self-healing reconciliation loops as in Kubernetes controllers.
  - **Retry discipline**: exponential backoff with jitter, idempotency guarantees, retry budgets, and circuit breakers to avoid retry storms that amplify outages.
  - **Agent-specific patterns**: reflection/self-critique on failure, plan repair versus full re-planning, tool-output validation, sandboxed dry runs, and human-in-the-loop escalation thresholds.
