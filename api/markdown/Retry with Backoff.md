public:: true

# Retry with Backoff
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9ac3f5c21ecfedf838cc13b8bb9b79f7857e79af2c4c09d104e02cf242fe25b",
  "@type": "Page",
  "vc:slug": "retry-with-backoff",
  "title": "Retry with Backoff",
  "vc:public": true,
  "vc:outboundWikilinks": [
    { "@id": "urn:visionflow:linked:fallback", "vc:label": "Fallback" },
    { "@id": "urn:visionflow:linked:rollback", "vc:label": "Rollback" },
    { "@id": "urn:visionflow:linked:guardrail", "vc:label": "Guardrail" },
    { "@id": "urn:visionflow:linked:agentic-workflow", "vc:label": "AgenticWorkflow" }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": { "@id": "did:nostr:ontology-mesh" },
  "prov:generatedAtTime": { "@value": "2026-08-09T00:00:00Z", "@type": "xsd:dateTime" }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:retry-with-backoff",
  "@type": "Class",
  "label": "Retry with Backoff",
  "definition": "A resilience strategy for handling transient failures in which a failed operation is attempted again after a deliberately growing delay, rather than immediately or at a fixed interval. Each successive retry waits longer — commonly the delay doubles — so that a system experiencing a temporary fault or overload is given increasing time to recover and is not hammered by a tight loop of identical requests. Randomised jitter is usually added to the delay so that many clients failing at once do not synchronise their retries into repeated coordinated bursts, and a cap on attempts or total elapsed time prevents the strategy from waiting forever on a failure that is not in fact transient.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": { "@id": "urn:ngm:class:fallback", "label": "Fallback" },
  "relations": {
    "enables": [
      { "@id": "urn:ngm:class:agentic-workflow", "label": "Agentic Workflow" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:rollback", "label": "Rollback" },
      { "@id": "urn:ngm:class:guardrail", "label": "Guardrail" }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-09T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "A resilience strategy for handling transient failures in which a failed operation is attempted again after a deliberately growing delay, rather than immediately or at a fixed interval. Each successive retry waits longer — commonly the delay doubles — so that a system experiencing a temporary fault or overload is given increasing time to recover and is not hammered by a tight loop of identical requests. Randomised jitter is usually added to the delay so that many clients failing at once do not synchronise their retries into repeated coordinated bursts, and a cap on attempts or total elapsed time prevents the strategy from waiting forever on a failure that is not in fact transient."

- ### In Plain Terms
  - If something fails, try again — but wait a little longer before each attempt (and add a bit of randomness), so you give a struggling service room to recover instead of piling on and making things worse.

- ### Semantic Classification
  - owl-class:: infrastructure:RetryWithBackoff
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Fallback]]
  - enables:: [[AgenticWorkflow]]
  - related-to:: [[Rollback]]
  - related-to:: [[Guardrail]]

- ### Content

  ## Definition

  **Retry with backoff** is a way of recovering from failures that are expected to be temporary. When an operation fails — a network call times out, a service returns a "too busy" response, a lock is momentarily unavailable — the operation is simply attempted again. What makes the strategy more than a naive loop is the backoff: the wait before each retry grows with every failed attempt. The most common schedule is exponential, where the delay roughly doubles each time (for example one second, then two, then four), giving a temporarily unhealthy dependency progressively more room to recover.

  The strategy addresses a specific hazard. Retrying immediately and repeatedly can convert a small hiccup into an outage, because a flood of instant retries adds load precisely when a system is least able to bear it. By spacing attempts out, backoff reduces that pressure. It is therefore a targeted response to *transient* faults; a permanent fault — a malformed request, a missing resource, an authorisation failure — will never succeed on retry, and blindly retrying it only wastes time and resources. Distinguishing the two is part of using the pattern well.

  ## Jitter and Limits

  Two refinements make backoff robust in practice. The first is jitter: adding a random component to each delay. Without it, many clients that failed at the same instant will retry at the same computed times, re-synchronising into repeated thundering herds; jitter smears those retries across time. The second is a bound — a maximum number of attempts, a ceiling on the delay, or a deadline on total elapsed time — after which the operation is declared failed for good. Reaching that bound is where retry hands off to other resilience mechanisms: a [[Fallback]] path, a compensating [[Rollback]], or a [[Guardrail]] that stops the system from proceeding on bad state.

  ## Role in Agentic Systems

  In agentic systems, tool calls and inter-agent requests are exactly the kind of operation that fails transiently — rate limits, momentary unavailability, and overloaded downstreams are routine. Retry with backoff lets a long-running [[AgenticWorkflow]] absorb these bumps without aborting the whole task, and as a specialisation of [[Fallback]] it is a foundational building block of dependable orchestration. Because retries can duplicate side effects, it pairs naturally with idempotent operations and, where a partially applied action must be undone before re-attempting, with [[Rollback]].
