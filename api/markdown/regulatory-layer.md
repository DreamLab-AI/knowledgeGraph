- ### Definition
  - The Regulatory Layer is the cross-cutting stratum that represents jurisdiction-specific legal requirements and the authorities that impose them. It sits above the Compliance Layer, supplying the obligations that compliance verifies, and informs governance and institutional structures. It contains regulations, licensing regimes, reporting duties, and the mapping of activities to applicable rules.

- ### Semantic Classification
  - owl-class:: reg:RegulatoryLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Financial Regulation]], [[Data Protection Law]]
  - requires:: [[Compliance Layer]]
  - enables:: [[Institutional Layer]], [[Governance Layer]]

- ### Content
  - The Regulatory Layer captures the external legal frameworks a system must operate within and the bodies empowered to enforce them. Typical members include statutes, licensing conditions, mandatory disclosures, and jurisdiction maps that determine which rules bind a given activity. It states obligations rather than implementing controls.
  - It requires the Compliance Layer as the mechanism that demonstrates adherence, and it enables the Institutional and Governance Layers, which must operate lawfully and set internal policy accordingly. Changes in regulation propagate downward as new compliance requirements.
  - The layer bridges to financial regulation and data protection law, domains that heavily constrain modern systems. Its content originates outside the system and is treated as authoritative input that the architecture cannot override.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z