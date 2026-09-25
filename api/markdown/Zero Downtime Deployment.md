Zero Downtime Deployment is a release strategy that updates a running service without interrupting user-facing availability. It relies on patterns such as rolling updates, blue-green switchovers, or canary releases combined with health checks and load-balancer draining so that traffic only reaches instances ready to serve it. Achieving it requires backward-compatible changes, graceful connection shutdown, and idempotent operations across the transition.

### Overview

- **Zero Downtime Deployment** sits within the [[Continuous Deployment]] area of the infrastructure domain.
- It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.

### Key aspects

- Establishes a precise, shared meaning for zero downtime deployment usable across coordinating components.
- Integrates with neighbouring concepts through the relations enumerated below.
- Maturity assessed as established based on established practice and literature.

### Mechanisms

- Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
- Produces the capabilities captured in its `enables` and `supports` relations.

### Applications

- Applied wherever infrastructure systems need the function described above.
- Connects to broader workflows via the bridging relations listed below.

### Provenance

