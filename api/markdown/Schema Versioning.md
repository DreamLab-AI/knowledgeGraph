
Schema versioning is the discipline of managing changes to a data schema over time so that producers and consumers can evolve independently without breaking interoperability. It defines policies and mechanisms — version identifiers, compatibility rules, deprecation windows and migration paths — that govern how additions, removals and modifications to fields and types are introduced. Robust schema versioning underpins reliable data interchange in distributed systems, event streams and long-lived APIs.

- Schema versioning manages the lifecycle of a [[Data Schema]] as it changes, preserving [[Interoperability]] between independently deployed producers and consumers.
- It is a specialisation of [[Data Versioning]] focused on the contract describing data shape rather than the data values themselves.
- Central to it is [[Backward Compatibility]]: the property that newer schema versions can be read by consumers built against older versions.
- ### Overview
- In distributed systems the same data crosses service, team and deployment boundaries, so a schema cannot be changed atomically everywhere at once. Schema versioning supplies the policy framework that lets each side upgrade on its own timeline.
- Common compatibility classes are backward, forward and full compatibility, each constraining which kinds of change (adding optional fields, removing fields, changing types) are permitted between adjacent versions.
- A [[Schema Registry]] typically enforces these rules at registration time, rejecting incompatible changes before they reach production.
- ### Mechanisms
- Version identifiers attached to schemas, messages or namespaces.
- Compatibility checking (backward, forward, full, transitive) at registration.
- Optional fields, default values and reserved identifiers to absorb change safely.
- Deprecation windows and migration tooling for breaking transitions.
- Coordinated rollout strategies pairing schema changes with consumer upgrades.
- ### Applications
- Event streaming and message queues where many consumers read the same topic.
- Long-lived data lakes and warehouses with historical records under old schemas.
- Public and internal APIs that must not break existing integrations.
- ### Provenance

