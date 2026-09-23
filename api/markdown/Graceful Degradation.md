
Graceful degradation is a design property whereby a system continues to provide reduced but acceptable functionality when some of its components fail or operate under stress, rather than failing completely. It prioritises essential services, sheds non-critical load, and offers fallback behaviours so that partial failure does not cascade into total outage. It is a cornerstone of resilient, fault-tolerant infrastructure.

- ### Overview
  - Graceful degradation ensures that when a system loses capacity, resources, or dependencies, it continues to deliver its most important functions at a reduced level instead of failing outright. The design assumes that failure is inevitable and plans for it explicitly.
  - In [[Distributed Systems]] this means isolating failures, providing fallbacks, and degrading non-essential features first so that the user-facing service remains usable.
- ### Key aspects
  - Prioritisation of critical versus non-critical functionality.
  - Fallback paths, default responses, and cached or stale data.
  - Load shedding and admission control under overload.
  - Failure isolation to prevent cascading outages.
  - Continuous [[Monitoring]] and [[Observability]] to detect degradation.
- ### Mechanisms
  - [[Circuit Breaker]] patterns that trip on downstream failure.
  - Bulkheads isolating resource pools per dependency.
  - Timeouts, retries with backoff, and rate limiting.
  - Feature flags and adaptive [[Bandwidth Adaptation]] to scale quality down.
- ### Applications
  - Streaming services lowering quality rather than buffering to a stop.
  - E-commerce sites disabling recommendations to protect checkout.
  - Microservice meshes shedding non-essential calls under load.
  - Embedded and safety-critical systems entering safe limp-home modes.
- ### Provenance

