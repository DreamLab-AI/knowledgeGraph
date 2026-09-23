
The request-response pattern is a synchronous message-exchange model in which a client sends a request to a server and blocks, or awaits, until a corresponding response is returned. It establishes a one-to-one, correlated interaction where each request expects exactly one reply, forming the basis of most client-server communication. The pattern contrasts with asynchronous, event-driven, and publish-subscribe styles where senders do not wait for an immediate reply.

- The **Request-Response Pattern** is the foundational interaction model of [[HTTP]] and most [[API]] communication, in which a caller issues a [[Remote Procedure Call]] and waits synchronously for a single correlated reply.
- It underpins [[REST API]] and [[Microservices]] communication, where each operation maps to a discrete round trip over a [[Network Protocol]].
- It stands in deliberate contrast to [[Event-Driven Architecture]] and [[Message Queue]] styles, which decouple senders from receivers in time.
- ### Overview
- In the request-response model, communication is initiated by the client, which constructs a request message describing the desired operation and any payload, then transmits it to a known server endpoint.
- The client typically blocks (synchronous) or registers a continuation (asynchronous request-response) until the server returns a response containing a status, headers, and an optional body.
- Each request carries enough context for the server to act statelessly, and each response is correlated back to its originating request, often by connection ordering or an explicit correlation identifier.
- The simplicity of the one-request-one-response contract makes it easy to reason about, debug, and cache, which is why it dominates web and service-to-service interfaces.
- ### Mechanisms
- Correlation: responses are matched to requests via connection state, sequence numbers, or correlation IDs.
- Blocking vs non-blocking: callers may wait inline or use futures, promises, and callbacks to handle the eventual response.
- Timeouts and retries: because the caller waits, timeouts bound how long it blocks, and idempotent operations enable safe retries.
- Status semantics: responses convey success, client error, or server error states that drive caller control flow.
- Connection reuse: persistent connections amortise setup cost across many request-response exchanges.
- ### Applications
- Web browsing and [[REST]] services, where every page load and API call is a request-response exchange.
- [[Remote Procedure Call]] frameworks that expose remote functions as local-looking calls.
- [[Microservices]] invoking one another synchronously through a [[Service Mesh]] or [[API Gateway]].
- Database query interfaces and command-response control protocols.
- ### Provenance

