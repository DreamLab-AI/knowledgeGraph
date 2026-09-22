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
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
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

  ## Current Landscape

  - **Reliability has become a first-class benchmark axis**: Sierra's τ-bench (June 2024) introduced the pass^k metric — success across *k* repeated runs — after finding GPT-4-class agents completed fewer than 50% of tasks and only ~25% consistently over eight repeats; its successor τ²-Bench extends this to airline, retail, and telecom domains.
  - **Recovery is now benchmarked directly**: Recovery-Bench (2025, OpenReview) evaluates agents dropped into environments seeded with artefacts of prior failed attempts, and AgentErrorBench (2025) provides the first systematically annotated dataset of failure trajectories from ALFWorld, GAIA, and WebShop.
  - **Failure taxonomies distinguish terminal from recoverable errors**: Atla's April 2025 analysis of τ-bench retail tasks found wrong-action, wrong-information, and tool-parameter errors dominate, with terminal (irrecoverable) failures outnumbering recoverable ones absent guided intervention.
  - **Trained recovery works**: the PALADIN framework (September 2025) lifted tool-failure recovery rates from ~33% to ~90% on ToolBench-derived evaluations and retained 95.2% recovery on unseen APIs; Cleanlab reported in December 2025 that real-time trustworthiness scoring with fallback regeneration cuts τ²-Bench agent failure rates by up to 50%.
  - A 2026 "science of AI agent reliability" research programme (arXiv, February 2026) decomposes agent reliability into consistency, robustness, predictability, and safety — recovery competence spanning all four.

  **Sources**:
  - https://sierra.ai/blog/tau-bench-shaping-development-evaluation-agents
  - https://arxiv.org/html/2509.25238v1
  - https://cleanlab.ai/blog/tau-bench/
  - https://www.marktechpost.com/2025/04/30/diagnosing-and-self-correcting-llm-agent-failures-a-technical-deep-dive-into-%CF%84-bench-findings-with-atlas-evaltoolbox/
