
A fault-tolerance strategy in which a system, upon detecting that its primary path has failed, timed out, or returned an unacceptable result, automatically switches to a predefined alternative path that provides reduced but still useful behaviour. In agent orchestration the alternative is typically a cheaper or more reliable model, a cached response, a simpler tool, or a deterministic default, invoked so that the overall workflow degrades gracefully rather than failing outright.

- ### In Plain Terms
  - A fallback is a plan B: when the first thing an agent tries breaks, it quietly switches to a backup that still gets a usable answer out the door instead of crashing.

- ### Semantic Classification

- ### Content

  ## Definition

  A **fallback** is a defensive control that defines what a system does when its preferred behaviour is unavailable. It sits at the heart of fault-tolerant design: rather than propagating an error to the caller, the system catches the failure condition and routes execution to an alternative that is known to be safe, cheaper, or more robust. The alternative usually offers a lower quality of service, which is an accepted trade for keeping the workflow alive.

  In an agent-orchestration setting, fallbacks appear at every layer of the stack. A model-tier fallback re-routes a request from a large frontier model to a smaller local model when the primary is rate-limited or times out. A tool fallback substitutes a heuristic or cached result when an external API is down. A prompt fallback swaps a rich, expensive prompt for a terse one when the context budget is exhausted. Each of these keeps the orchestrator making forward progress in the presence of partial failure.

  ## Design Considerations

  Effective fallbacks share several properties. The trigger condition must be observable and bounded — a timeout, an exception, an HTTP 5xx, a schema-validation failure, or a confidence score below a threshold. The alternative must be genuinely independent of the failed path, otherwise the same fault takes down both. And the switch should be explicit and logged, so operators can see how often the degraded path is exercised, which is an early warning that the primary is unhealthy.

  Fallbacks are frequently paired with a [[CircuitBreaker]], which stops hammering a failing dependency, and with retry logic, which distinguishes transient blips from hard failures. Overlapping fallbacks can be chained into a cascade — frontier model, then mid-tier, then a deterministic template — so that the system exhausts progressively cheaper options before finally surfacing an error. Chains must terminate to avoid infinite loops, and each hop should shorten the deadline so total latency stays bounded.

  ## Common Pitfalls

  A silent fallback that is never surfaced in metrics hides a degrading system until it fails completely. A fallback that shares a database, credential, or network segment with the primary provides only the illusion of [[Redundancy]]. And a fallback whose quality is much worse than users expect can be more damaging than an honest error, so the degraded contract should be documented and, where it matters, communicated to the caller.

