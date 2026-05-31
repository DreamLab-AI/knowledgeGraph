- ### Definition
  - The Compliance Layer is the cross-cutting stratum that checks system behaviour against external obligations such as law, regulation, and contractual terms. It sits above the Policy Layer, consuming its enforcement records, and reports to the Regulatory and Governance Layers. It contains controls, evidence collection, audit trails, and conformance assessments rather than the operations being assessed.

- ### Semantic Classification
  - owl-class:: compliance:ComplianceLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Audit]], [[Risk Management]]
  - requires:: [[Policy Layer]], [[Governance Layer]]
  - enables:: [[Regulatory Layer]], [[Institutional Layer]]

- ### Content
  - The Compliance Layer verifies that what a system actually does matches the obligations it is subject to. Typical members include control catalogues, evidence stores, automated conformance checks, attestations, and audit logs. It is concerned with demonstrable proof of adherence, not with implementing the underlying behaviour.
  - It requires the Policy Layer for the enforced rules it tests and the Governance Layer for the authoritative statement of intent. It enables the Regulatory Layer, which maps obligations to jurisdictions, and the Institutional Layer, which relies on demonstrated compliance to operate.
  - The layer bridges to audit and risk management, disciplines that define how evidence is gathered and how residual exposure is quantified. Its outputs are reports and attestations that external parties can trust.

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]]
  - migration-date:: 2026-05-29T00:00:00Z