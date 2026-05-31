- ### Definition
  - The Policy Layer is the cross-cutting stratum that encodes machine-readable rules, constraints, and authorisations governing system behaviour. It sits above operational concerns and below the human-facing Governance Layer, translating governance intent into enforceable statements that other layers consult before acting. It contains policy definitions, decision points, and enforcement hooks rather than the data or compute those policies regulate.

- ### Semantic Classification
  - owl-class:: policy:PolicyLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Access Control]], [[Attribute-Based Access Control]]
  - requires:: [[Identity Layer]], [[Control Layer]]
  - enables:: [[Governance Layer]], [[Compliance Layer]]

- ### Content
  - The Policy Layer expresses what a system is permitted or required to do as declarative rules separated from the code that executes them. Typical members include policy decision points, policy enforcement points, rule engines, and policy administration interfaces. By isolating rules from logic, the layer allows behaviour to change without redeploying lower layers.
  - It depends on the Identity Layer to know which principals a rule applies to, and on the Control Layer to bind decisions to runtime checkpoints. It in turn feeds the Governance Layer, which sets the human intent the policies encode, and the Compliance Layer, which audits whether enforced policies satisfy external obligations.
  - In practice the Policy Layer connects to access control models such as role-based and attribute-based schemes. It evaluates requests against current state and returns permit, deny, or obligation outcomes that adjacent layers honour.

- ### Provenance
  - sources:: [[NIST (National Institute of Standards and Technology)]]
  - migration-date:: 2026-05-29T00:00:00Z