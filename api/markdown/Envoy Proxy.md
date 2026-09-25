Envoy is a high-performance, open-source edge and service proxy designed for cloud-native applications, originally built at Lyft and graduated under the CNCF. It provides L3/L4 and L7 traffic management, dynamic configuration via the xDS APIs, observability, and resilience features such as retries, circuit breaking, and rate limiting. Envoy is the default data plane for many service meshes, where it runs as a sidecar alongside each workload.

### Overview

- Acts as a uniform, programmable network substrate so applications stay oblivious to networking concerns.
- Configured dynamically through the xDS protocol, allowing control planes to push routes and policy at runtime.
- Pervasive as a sidecar data plane, decoupling resilience and security from business logic.

### Key aspects

- L7-aware routing for HTTP, gRPC, and TCP with rich matching and transformation.
- Resilience primitives including retries, timeouts, circuit breaking, and outlier detection.
- Built-in observability via structured logs, metrics, and distributed tracing.
- Dynamic xDS configuration for clusters, listeners, routes, and endpoints.
- Mutual-TLS termination and origination for zero-trust service communication.

### Applications

- Sidecar data plane in service meshes such as Istio and Consul.
- Edge and ingress gateways fronting microservice fleets.
- API gateways enforcing authentication, rate limiting, and routing.
- Traffic shifting for canary and blue-green deployments.

### Provenance

