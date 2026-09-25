The saga pattern is a distributed-systems design for managing long-lived business transactions that span multiple services without a global lock or two-phase commit. A saga is a sequence of local transactions, each of which has an associated compensating transaction that semantically undoes its effect if a later step fails. Coordination is achieved either through orchestration, where a central coordinator drives the steps, or choreography, where services react to events, trading strong atomicity for eventual consistency and availability.

### Overview

- Holding a database lock across many services for the lifetime of a business process is impractical and harms availability.
- A saga splits the process into steps, each a local atomic transaction committed in its own service.
- If a downstream step fails, the saga runs compensating transactions for the already-committed steps, semantically rolling back the process.
- The result is reliability and progress under partial failure, at the cost of giving up strict global atomicity.

### Mechanisms

- Orchestration: a central coordinator issues commands to each service and decides when to compensate.
- Choreography: services emit and react to events, with no central coordinator, keeping coupling loose.
- Compensating transactions: business-level inverse operations that undo prior steps rather than rolling back storage.
- Idempotency and retry: steps must tolerate repeated delivery so the saga is resilient to message duplication.

### Applications

- E-commerce order processing across payment, inventory and shipping services.
- Travel booking that reserves flights, hotels and cars as separate compensable steps.
- Financial workflows requiring auditable, recoverable multi-service operations.
- Any microservices system needing consistency without distributed two-phase commit.

### Provenance

