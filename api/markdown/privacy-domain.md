- ### Definition
  - The Privacy Domain classifies concepts concerning the appropriate handling of personal information and the rights of individuals over data about them. It covers data minimisation, consent, purpose limitation and the techniques that protect identity. As a top-level subject axis it constrains how systems collect, process and disclose personal data.

- ### Semantic Classification
  - owl-class:: priv:PrivacyDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Security Domain]], [[Data Governance Domain]]
  - has-part:: [[Data Minimisation]], [[Consent Management]], [[Anonymisation]], [[Purpose Limitation]], [[Differential Privacy]]
  - requires:: [[Cryptographic Domain]], [[Identity Domain]]
  - enables:: [[Confidential Processing]], [[Regulatory Compliance]]

- ### Content
  - Privacy concerns the control individuals retain over information that relates to them and the obligations placed on those who process it. It is structured around principles including lawfulness, purpose limitation, minimisation and storage limitation. These principles translate into design choices that collect only what is necessary and retain it only as long as justified.
  - The domain provides techniques that reduce the identifiability of data, from pseudonymisation and anonymisation to formal guarantees such as differential privacy. Consent management records and enforces the permissions under which data may be used. Privacy by design embeds these protections into systems rather than adding them retrospectively.
  - Privacy bridges to security, which supplies enforcement mechanisms, and to data governance, which embeds privacy rules into organisational policy. It depends on the Cryptographic and Identity Domains for the techniques that limit exposure and attribute data correctly.

- ### Provenance
  - sources:: [[ISO/IEC 29100]], [[GDPR]]
  - migration-date:: 2026-05-29T00:00:00Z