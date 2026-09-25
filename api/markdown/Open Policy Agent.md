Open Policy Agent (OPA) is an open-source, general-purpose policy engine that decouples authorisation and policy decisions from application code by evaluating declarative policies against structured input. Policies are written in its purpose-built language, Rego, and OPA returns decisions that calling services enforce. As a graduated Cloud Native Computing Foundation project, it is widely used to implement policy-as-code across Kubernetes admission control, microservice authorisation, and API gateways. OPA acts as a policy decision point, leaving enforcement to integrated policy enforcement points.

### Overview

- OPA gives organisations a single, consistent way to express and evaluate authorisation and admission policy across heterogeneous systems, rather than scattering rules through each codebase.
- **Why it matters:** as cloud-native stacks fragment into many services, centralising policy logic in a uniform engine improves auditability, testability, and consistency of [[Access Control]].
- **How it works:**
  - Policies are authored in OPA's declarative language, Rego, and loaded into the engine.
  - A service sends a query with structured input (request attributes, user, resource, context).
  - OPA evaluates the relevant rules and returns a decision, optionally with supporting data.
  - The calling service enforces the decision; policy bundles can be distributed and versioned centrally.

### Key aspects

- **Declarative policy** — rules are expressed as data-driven logic rather than imperative code.
- **Decision/enforcement split** — OPA decides; the host enforces, cleanly separating concerns.
- **Context-rich evaluation** — supports [[Attribute-Based Access Control]] as well as [[Role-Based Access Control]].
- **Bundle distribution** — policies and reference data are packaged and pushed to running agents.
- **Decision logging** — every decision can be recorded for audit and debugging.

### Applications

- [[Kubernetes]] admission control enforcing security and configuration guardrails.
- Fine-grained authorisation in [[Microservices]] and at the [[API Gateway]].
- Infrastructure-as-code and CI/CD policy checks before deployment.
- Enterprise [[Authorization]] services centralising entitlement decisions.

### Provenance

