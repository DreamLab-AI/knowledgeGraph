- ### Definition
  - An open standard for delegated authorisation that allows a user to grant a third-party application limited access to resources without sharing their credentials.

- ### Semantic Classification
  - owl-class:: cryptographic:OAuth
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authorisation]]
  - bridges-to:: [[OAuth 2.0]], [[Identity Provider]]
  - requires:: [[Authorisation]], [[Access Control]]
  - enables:: [[Single Sign-On]]

- ### Content
  - OAuth is an authorisation framework that enables an application to obtain limited access to a user's resources held by another service, using access tokens rather than the user's password. The user authorises the access through a consent step.
  - By separating authentication from authorisation and issuing scoped, revocable tokens, OAuth reduces the exposure of credentials. The widely deployed OAuth 2.0 specification defines several grant types suited to different application architectures.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z