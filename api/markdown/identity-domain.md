- ### Definition
  - The Identity Domain classifies concepts concerning the representation, verification and management of the identities of people, organisations and devices. It covers credentials, authentication assurance and the lifecycle of identity records and their attributes. As a top-level subject axis it provides the foundation on which access control, accountability and personalisation depend.

- ### Semantic Classification
  - owl-class:: id:IdentityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Security Domain]], [[Privacy Domain]]
  - has-part:: [[Credential]], [[Authentication]], [[Identity Provider]], [[Attribute Assertion]], [[Self-Sovereign Identity]]
  - requires:: [[Cryptographic Domain]]
  - enables:: [[Access Control]], [[Accountability]]

- ### Content
  - Identity concerns the binding between an entity and a set of attributes that systems can recognise and rely upon. It distinguishes enrolment, which establishes an identity, from authentication, which proves a claim to that identity at a later time. Assurance levels quantify confidence in both the initial proofing and the ongoing verification.
  - The domain covers federated models, where a relying party trusts an external identity provider, and decentralised models, where holders control their own credentials. Attribute assertions allow selective disclosure, presenting only the claims a transaction requires. Lifecycle management addresses issuance, rotation, revocation and the eventual retirement of identities.
  - Identity bridges to security, which consumes its assurances for access decisions, and to privacy, which constrains how identity data may be collected and shared. It depends on the Cryptographic Domain for the signatures and proofs that make credentials verifiable.

- ### Provenance
  - sources:: [[NIST SP 800-63]]
  - migration-date:: 2026-05-29T00:00:00Z