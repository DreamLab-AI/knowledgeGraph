- ### Definition
  - OAuth 2.0 is an open authorisation framework (RFC 6749) that allows resource owners to grant third-party clients scoped, time-limited access to their resources hosted on a resource server, without sharing credentials. The framework defines four grant types—authorisation code, implicit (deprecated), resource owner password credentials, and client credentials—each suited to different client trust levels and deployment contexts. OAuth 2.0 is the foundation on which OpenID Connect (OIDC) builds to add federated identity and authentication capabilities.

- ### Semantic Classification
  - owl-class:: oauth-2-0:OAuth 2.0
  - owl-role:: Concept

- ### Relationships
  - requires [[Authentication]]
  - enables [[Single Sign-On]]
  - enables [[Identity Federation]]
  - relatedTo [[Identity and Access Management]]
  - relatedTo [[Zero Trust Architecture]]

- ### Content
  - OAuth 2.0, defined in RFC 6749 and RFC 6750, separates the roles of resource owner, client application, authorisation server, and resource server. A client requests an access token from the authorisation server after the resource owner grants consent; the token is then presented to the resource server in the HTTP `Authorization` header. Tokens have explicit scopes that constrain which operations the bearer may perform, supporting the principle of least privilege.
  - The Proof Key for Code Exchange (PKCE, RFC 7636) extension hardens the authorisation code flow against interception attacks in public clients such as single-page applications and mobile apps. RFC 9068 defines JWT-based access tokens with a standardised claim structure, enabling resource servers to validate tokens without calling back to the authorisation server. OAuth 2.0 Token Introspection (RFC 7662) and Token Revocation (RFC 7009) round out the lifecycle management capabilities.
  - OpenID Connect 1.0 layers authentication atop OAuth 2.0 by introducing an ID token (a JSON Web Token) and a UserInfo endpoint, enabling Single Sign-On across multiple relying parties. Together, OAuth 2.0 and OIDC underpin modern Identity and Access Management platforms from vendors such as Okta, Auth0, and Azure Active Directory, as well as open-source implementations including Keycloak. Zero Trust Architecture models rely on OAuth 2.0 token-based authorisation to enforce fine-grained, context-aware access control to internal resources.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z