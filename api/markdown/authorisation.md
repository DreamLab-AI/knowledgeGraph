- ### Definition
  - Authorisation determines which actions an authenticated [[Identity Management]] principal may perform on a resource, enforcing the [[Access Control]] policies that separate permitted from forbidden operations.
- ### Relationships
  - Authorisation works in concert with [[Authentication]] to form the identity and access management lifecycle; it relies on [[Access Control System]] machinery to enforce decisions and produces [[Audit Trail]] records consumed by [[Compliance Monitoring]] processes. [[Privacy Controls]] in turn depend on authorisation to restrict data exposure, and the overall design must satisfy [[Compliance Framework]] requirements.
- ### Content
  - Authorisation is conceptually distinct from authentication: authentication answers "who are you?" whilst authorisation answers "what are you allowed to do?" The distinction matters architecturally because the two concerns are best separated, enabling each to evolve independently as policy or identity technology changes.

  - Contemporary authorisation models span a spectrum from coarse-grained role-based access control (RBAC), which assigns permissions to roles, through attribute-based access control (ABAC), which evaluates rich contextual attributes at request time, to policy-as-code approaches such as Open Policy Agent that express rules in a declarative language deployable across heterogeneous systems.

  - In distributed and cloud-native environments authorisation increasingly uses short-lived tokens—often JWTs or SPIFFE SVIDs—that carry claims evaluated by resource servers without consulting a central authority, reducing latency and eliminating single points of failure. Zero-trust architectures embed continuous authorisation checks throughout a session rather than granting standing access.

  - Compliance regimes such as ISO/IEC 27001 mandate documented authorisation policies, periodic access reviews, and timely revocation upon role change or departure, making the audit trail produced by authorisation systems a first-class compliance artefact.

  - Emergent challenges include fine-grained authorisation for AI agents acting on behalf of users, cross-organisational federation scenarios, and the need to express complex consent hierarchies in health and financial data ecosystems—driving ongoing standardisation through bodies such as the IETF OAuth working group and the W3C.