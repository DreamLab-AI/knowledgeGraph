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
---

# Retry with Backoff

A resilience strategy for handling transient failures in which a failed operation is attempted again after a deliberately growing delay, rather than immediately or at a fixed interval. Each successive retry waits longer — commonly the delay doubles — so that a system experiencing a temporary fault or overload is given increasing time to recover and is not hammered by a tight loop of identical requests. Randomised jitter is usually added to the delay so that many clients failing at once do not synchronise their retries into repeated coordinated bursts, and a cap on attempts or total elapsed time prevents the strategy from waiting forever on a failure that is not in fact transient.
