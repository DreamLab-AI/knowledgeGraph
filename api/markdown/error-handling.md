- ### Definition
  - [[Error Handling]] is the discipline of anticipating, detecting, and recovering from anomalous conditions in software and [[Distributed Systems]].
  - It includes exception mechanisms, structured error types, [[Retry Logic]], [[Circuit Breaker]] patterns, and graceful degradation strategies.
  - Effective error handling is foundational to [[Fault Tolerance]], [[Reliability]], and maintainable codebases.

- ### Overview
  - Errors fall into several categories: recoverable (transient network timeouts), unrecoverable (data corruption), and programming errors (null pointer dereferences).
  - Modern systems distinguish between errors (expected anomalies) and panics (unexpected programmer mistakes), each handled differently.
  - In distributed systems, error handling must account for partial failures — conditions where some nodes succeed while others fail.

- ### Key Aspects
  - **Exception handling**: Language-level try/catch or Result/Either type mechanisms.
  - **Error propagation**: Passing errors up the call stack vs handling locally.
  - **Retries**: Exponential backoff and jitter for transient failure recovery.
  - **Circuit breakers**: Preventing cascading failures by short-circuiting failing dependencies.
  - **Observability**: All errors must be logged, metered, and traced.

- ### Mechanisms
  - [[Exception Handling]] in object-oriented languages uses try/catch/finally blocks; functional languages prefer typed Result/Either monads.
  - [[Circuit Breaker]] patterns track failure rates and open the circuit to prevent overloading failing services.
  - [[Retry Logic]] with exponential backoff and jitter is standard for network calls.

- ### Applications
  - API gateway error normalisation across microservices.
  - Database transaction rollback on constraint violations.
  - Smart contract revert patterns on invalid state transitions.
  - AI inference pipeline fallback to cached or degraded responses.

- ### Relationships
  - hasPart:: [[Exception Handling]]
  - hasPart:: [[Retry Logic]]
  - hasPart:: [[Circuit Breaker]]
  - requires:: [[Logging]]
  - requires:: [[Observability]]
  - supports:: [[Fault Tolerance]]
  - supports:: [[Reliability]]
  - supports:: [[Security]]
  - enables:: [[Graceful Degradation]]
  - enables:: [[Resilience]]
  - relatedTo:: [[Debugging]]
  - relatedTo:: [[Testing]]
  - relatedTo:: [[Software Engineering]]
  - dependsOn:: [[Programming Language]]
  - bridgesTo:: [[Distributed Systems]]

- ### Provenance
  - updated:: 2026-06-15