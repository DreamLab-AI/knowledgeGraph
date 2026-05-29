- ### Definition
  - Single Sign-On (SSO) is an authentication scheme that allows a user to authenticate once to a central identity provider and obtain delegated access tokens that grant entry to multiple related but independent service providers without re-entering credentials. Common protocol implementations include SAML 2.0, OAuth 2.0 with OpenID Connect, and Kerberos, each varying in how assertions are encoded and transported. SSO reduces credential exposure, simplifies user lifecycle management, and is a foundational component of enterprise identity and access management (IAM) platforms.

- ### Semantic Classification
  - owl-class:: single-sign-on:Single Sign-On
  - owl-role:: Concept

- ### Relationships
  - requires [[Authentication]]
  - requires [[Authentication Standards]]
  - enables [[Access Control]]
  - enables [[Digital Identity Management]]
  - relatedTo [[Federated Credential Exchange]]

- ### Content
  Single Sign-On is built on the delegation of authentication: rather than each service provider verifying credentials directly, authentication is centralised at an identity provider (IdP), which issues signed assertions or tokens that service providers accept as proof of authenticated identity. In SAML 2.0, these assertions are XML documents signed with the IdP's private key; in OpenID Connect (built on OAuth 2.0), they are JSON Web Tokens (JWTs). The service provider trusts the IdP's signature and grants access without ever seeing the user's password.

  SSO architectures reduce the attack surface for credential theft by limiting credential entry to a single, hardened IdP endpoint. They also simplify provisioning and deprovisioning: revoking access at the IdP immediately removes access across all connected service providers, which is critical for managing joiners, movers, and leavers in enterprise environments.

  In federated identity contexts—such as the academic research network eduGAIN or the healthcare sector's cross-organisational patient identity initiatives—SSO is extended through identity federation: multiple organisations' IdPs are linked through a mutual trust framework, allowing a user authenticated by their home institution to access resources at partner organisations without a separate account. This federated pattern shares conceptual ground with the Trust over IP Foundation's credential exchange model, though SSO typically remains within more centralised PKI-based trust anchors rather than decentralised DID-based ones.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z