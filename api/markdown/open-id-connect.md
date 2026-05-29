- ### Definition
  - OpenID Connect (OIDC) is a federated identity protocol standardised by the OpenID Foundation that adds an authentication layer on top of the OAuth 2.0 authorisation framework. Upon successful authentication, an OIDC-compliant identity provider issues a signed JSON Web Token (ID Token) containing identity claims—such as subject identifier, email, and session expiry—which the relying party verifies cryptographically without querying the provider again. OIDC defines standard flows (authorisation code, implicit, hybrid) and a UserInfo endpoint, enabling single sign-on across web and mobile applications and serving as the identity spine for enterprise federation, consumer logins, and decentralised identity wallets.

- ### Semantic Classification
  - owl-class:: open-id-connect:OpenID Connect
  - owl-role:: Concept

- ### Relationships
  - dependsOn [[OAuth 2.0]]
  - supports [[Authentication]]
  - supports [[Identity Federation]]
  - standardizedBy [[OpenID Foundation]]
  - relatedTo [[Digital Identity]]

- ### Content
  - OpenID Connect extends OAuth 2.0 by defining a standardised mechanism for communicating authenticated user identity, not merely authorisation grants. The authorisation code flow—recommended for server-side and public clients alike—involves a redirect to the identity provider, user authentication (password, MFA, passkey, etc.), issuance of an authorisation code, and exchange of that code for an ID Token and an access token at the token endpoint. The ID Token is a JSON Web Signature (JWS)-signed JWT whose claims are verified by the client using the identity provider's published JSON Web Key Set (JWKS).
  - OIDC defines a standard discovery mechanism: a `.well-known/openid-configuration` endpoint exposes the identity provider's metadata including supported flows, scopes, claim types, and endpoint URIs, enabling clients to configure themselves dynamically. The UserInfo endpoint allows clients to retrieve additional claims beyond those in the ID Token on demand using the access token.
  - Financial-grade API (FAPI) profiles—maintained by the OpenID Foundation—extend OIDC with tightened security requirements including Pushed Authorisation Requests (PAR), JWT-secured authorisation requests (JAR), certificate-bound access tokens, and stricter redirect URI validation. FAPI 2.0 is mandated by open banking frameworks in the UK, Australia, and the EU to protect high-value banking API interactions. OIDC also forms the authentication layer for Self-Issued OpenID Providers (SIOP) used in decentralised identity wallets compliant with the EU EUDI Wallet architecture.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z