
A Policy Information Point (PIP) is the component in a policy-based access control architecture that retrieves and supplies attribute values needed by a Policy Decision Point to evaluate access requests against policies. The PIP acts as an attribute authority, querying identity stores, databases, and external services to resolve subject attributes, resource properties, and environmental conditions at decision time. It decouples the decision logic from the data sources that inform it.

- ### Overview
  - In XACML and ABAC frameworks, a Policy Decision Point (PDP) evaluates a request by consulting policies and querying PIPs for the attribute values those policies reference.
  - PIPs may retrieve attributes from LDAP directories (user roles, group membership), HR databases (employment status), certificate authorities ([[Digital Identity]] assertions), and risk engines (device health scores).
  - Caching is essential: PIPs introduce latency, so in-memory attribute caches with TTL policies balance freshness against decision speed.
  - [[Biometric Data]] authentication outcomes and liveness scores are examples of time-sensitive PIP-supplied attributes consumed by access policies.

- ### Key Aspects
  - The PIP's attribute resolution is triggered per access request, allowing policies to reflect real-time conditions such as session anomaly scores or current network location.
  - Attribute aggregation PIPs combine claims from multiple sources (federated identity providers, internal RBAC systems) into a unified attribute set.
  - [[Personal Data]] handling by PIPs must comply with data minimisation principles — only attributes necessary for the specific decision are retrieved.
  - Failure modes (attribute source unavailable) must be handled gracefully, typically defaulting to deny or degraded-mode access.

- ### Mechanisms
  - Attribute query protocols include SAML attribute queries, LDAP search, REST API calls, and OAuth token introspection.
  - Connection pooling and circuit-breaker patterns protect PIP from upstream source failures propagating to the access control path.
  - [[Session Key]] bindings allow attribute assertions to be scoped to a specific session, preventing attribute replay across sessions.
  - Cryptographic signing of attribute responses (using [[Encryption]] primitives) ensures integrity of PIP-supplied data.

- ### Applications
  - Healthcare zero-trust systems where the PIP resolves a clinician's current on-call status before granting emergency record access.
  - Financial services trading platforms querying PIP for real-time regulatory clearance flags.
  - Cloud multi-tenant [[Access Control]] where PIP supplies current resource quotas and subscription tier attributes.
  - IoT device management where PIP resolves firmware version and compliance posture to gate network access.

- ### Provenance

