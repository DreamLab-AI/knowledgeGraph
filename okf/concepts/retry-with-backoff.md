---
okf_version: "0.2"
type: Class
title: Retry with Backoff
resource: urn:ngm:class:retry-with-backoff
domain: infrastructure
description: A resilience strategy for handling transient failures in which a failed operation is attempted again after a deliberately growing delay, rather than immediately or at a fixed interval. Each successive retry waits longer — commonly the delay doubles — so that a system experiencing a temporary fault or overload is given increasing time to recover and is not hammered by a tight loop of identical requ
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:fallback
enables:
  - urn:ngm:class:agentic-workflow
  - urn:ngm:class:agenticworkflow
relatedTo:
  - urn:ngm:class:rollback
  - urn:ngm:class:guardrail
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Retry with Backoff

A resilience strategy for handling transient failures in which a failed operation is attempted again after a deliberately growing delay, rather than immediately or at a fixed interval. Each successive retry waits longer — commonly the delay doubles — so that a system experiencing a temporary fault or overload is given increasing time to recover and is not hammered by a tight loop of identical requests. Randomised jitter is usually added to the delay so that many clients failing at once do not synchronise their retries into repeated coordinated bursts, and a cap on attempts or total elapsed time prevents the strategy from waiting forever on a failure that is not in fact transient.
