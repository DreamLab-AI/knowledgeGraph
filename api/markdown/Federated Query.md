
A federated query is a single query that is decomposed and executed across multiple autonomous, distributed data sources, with partial results combined into a unified answer without first consolidating the data into one store. In the semantic-web context, SPARQL federation evaluates sub-queries against several remote endpoints, joining their bindings transparently to the requester. It enables integrated access to heterogeneous, independently governed datasets while leaving each source in place. Effective federation depends on source description, query planning, and distributed join optimisation.

- ### Overview
  - Federated querying answers the question of how to query data that cannot, or should not, be centralised because of size, ownership, freshness, or governance constraints.
  - **Why it matters:** consolidating every dataset into one warehouse is often impractical or prohibited. Federation gives integrated access while leaving sources authoritative and in place.
  - **How it works:**
    - The query engine parses the request and identifies which sub-patterns belong to which source, using source descriptions or explicit SERVICE clauses.
    - Sub-queries are dispatched to remote endpoints over standard protocols.
    - Returned bindings are joined, possibly with distributed-join optimisation to reduce data movement.
    - The combined result is returned as if it came from a single store.

- ### Key aspects
  - **Source selection** — determining which endpoints can satisfy each part of the query.
  - **Query decomposition and planning** — splitting a query and ordering joins to minimise transfer and latency.
  - **Distributed joins** — combining bindings across sources efficiently, the dominant performance concern.
  - **Standards alignment** — built on [[RDF]] and [[SPARQL]] federated query semantics for interoperability.
  - **Autonomy and governance** — each source retains control, access policy, and update authority.

- ### Applications
  - Querying [[Wikidata]] alongside domain-specific endpoints to enrich a [[Knowledge Graph]].
  - Life-sciences and open-data integration across institutional [[Linked Data]] services.
  - Enterprise [[Data Virtualization]] presenting a unified view over siloed systems.
  - Cross-organisation analytics where data residency or privacy prevents consolidation.

- ### Provenance

