- ### Definition
  - An identity service in which a single organisation issues, stores and authenticates user credentials on behalf of relying parties. It contrasts with decentralised identity models where control rests with the user.

- ### Semantic Classification
  - owl-class:: identity:CentralizedIdentityProvider
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Identity Provider]]
  - bridges-to:: [[Decentralized Identifier]]
  - requires:: [[Identity Management]]
  - enables:: [[Identity Verification System]]

- ### Content
  - A centralised identity provider holds the authoritative record of user accounts and authenticates them at sign-in, typically using passwords, multi-factor methods or biometric checks. Relying applications delegate authentication to the provider through protocols such as OpenID Connect and SAML, receiving assertions about the user rather than handling credentials directly.
  - This model simplifies management for service operators but concentrates risk, since a breach of the provider exposes many downstream services. Concerns over single points of failure and data control motivate alternative approaches based on decentralised identifiers and verifiable credentials.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z