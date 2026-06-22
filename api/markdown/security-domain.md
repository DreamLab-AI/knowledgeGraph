- ### Definition
  - The Security Domain classifies concepts concerning the protection of systems, data and communications against unauthorised access, modification and disruption. It covers the principles of confidentiality, integrity and availability and the controls that enforce them. As a top-level subject axis it applies across all architectural layers, framing how trust is established and threats are countered.

- ### Semantic Classification
  - owl-class:: sec:SecurityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Privacy Domain]], [[Regulatory Domain]]
  - has-part:: [[Access Control]], [[Threat Model]], [[Authentication]], [[Encryption]], [[Vulnerability Management]]
  - requires:: [[Cryptographic Domain]], [[Identity Domain]]
  - enables:: [[Trusted Computing]], [[Data Protection]]

- ### Content
  - Security concerns the systematic protection of assets against adversaries who seek to violate confidentiality, integrity or availability. It begins with threat modelling, which identifies what is being protected, from whom and through which attack surfaces. Controls are then selected and layered so that the failure of any single measure does not compromise the whole.
  - The domain spans authentication and authorisation, which establish and constrain identity, and cryptographic protection of data at rest and in transit. It addresses operational practices including patching, monitoring, incident response and the management of vulnerabilities across their lifecycle. Risk is assessed in terms of likelihood and impact, guiding proportionate investment in defences.
  - Security bridges to privacy, with which it shares mechanisms but differs in objective, and to regulatory regimes that mandate specific controls. It depends on the Cryptographic and Identity Domains for the primitives on which assurance is built.

- ### Provenance
  - sources:: [[ISO/IEC 27001]], [[NIST SP 800-53]]
  - migration-date:: 2026-05-29T00:00:00Z