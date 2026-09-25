A stateless protocol is a communication protocol in which each request from a client to a server is treated independently, carrying all the information needed to be understood without relying on stored context from previous requests. The server retains no session state between requests, which simplifies server design and improves scalability and resilience because any server instance can handle any request. HTTP is the canonical example; where continuity is needed, state is reintroduced at a higher layer through tokens, cookies or explicit session management.

### Overview

- In a stateless design the server forgets each interaction the moment it responds, so requests are self-contained.
- This means any server instance can serve any request, which is ideal for horizontal scaling behind a load balancer.
- When applications need continuity, state is layered on top via tokens, cookies or external stores rather than in the protocol itself.
- The trade-off is larger requests, since context that a stateful protocol would remember must be resent.

### Mechanisms

- Self-contained requests: each message includes authentication, parameters and context needed to process it.
- No server-side session: the server keeps no per-client memory between requests.
- Externalised state: when needed, state lives in tokens, client cookies or shared caches and databases.
- Idempotency support: stateless requests can be safely retried, aiding reliability.

### Applications

- REST APIs and the web, which rest on stateless HTTP.
- Horizontally scaled services where any node can handle any request.
- Serverless and ephemeral compute that cannot retain long-lived session state.
- Caching and CDN architectures that exploit request independence.

### Provenance

