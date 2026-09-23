---
okf_version: "0.2"
type: Class
title: Fallback
resource: urn:ngm:class:fallback
domain: infrastructure
description: A fault-tolerance strategy in which a system, upon detecting that its primary path has failed, timed out, or returned an unacceptable result, automatically switches to a predefined alternative path that provides reduced but still useful behaviour. In agent orchestration the alternative is typically a cheaper or more reliable model, a cached response, a simpler tool, or a deterministic default, inv
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:graceful-degradation
  - urn:ngm:class:resilience
  - urn:ngm:class:gracefuldegradation
relatedTo:
  - urn:ngm:class:circuit-breaker
  - urn:ngm:class:redundancy
  - urn:ngm:class:circuitbreaker
---

# Fallback

A fault-tolerance strategy in which a system, upon detecting that its primary path has failed, timed out, or returned an unacceptable result, automatically switches to a predefined alternative path that provides reduced but still useful behaviour. In agent orchestration the alternative is typically a cheaper or more reliable model, a cached response, a simpler tool, or a deterministic default, invoked so that the overall workflow degrades gracefully rather than failing outright.
