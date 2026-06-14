public:: true

# oauth 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9604a5831fd480ca6a7355e7980f7e4bd02ba313de31c849e767a2ea700537bb",
  "@type": "Page",
  "vc:slug": "oauth-2-0",
  "title": "oauth 2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:oauth-2-0",
  "@type": "Class",
  "label": "OAuth 2.0",
  "definition": "OAuth 2.0 is an open authorisation framework standardised as RFC 6749 (2012) that enables a resource owner to delegate scoped, time-limited access to their protected resources on a resource server to a third-party client application, without exposing credentials. The framework separates four distinct roles—resource owner, client, authorisation server, and resource server—and defines multiple grant types (authorisation code, client credentials, device code, refresh token) suited to different trust levels and client profiles. Access tokens with explicit scopes enforce the principle of least privilege, while extensions such as PKCE (RFC 7636), JWT access tokens (RFC 9068), token introspection (RFC 7662), and token revocation (RFC 7009) complete the lifecycle. OAuth 2.0 serves as the foundation upon which OpenID Connect 1.0 adds federated authentication, together underpinning modern Identity and Access Management platforms and Zero Trust Architecture policies.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:authentication", "label": "Authentication"},
      {"@id": "urn:ngm:class:https", "label": "HTTPS"},
      {"@id": "urn:ngm:class:json-web-token", "label": "JSON Web Token"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"},
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:delegated-authorisation", "label": "Delegated Authorisation"},
      {"@id": "urn:ngm:class:api-security", "label": "API Security"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:rfc-6749", "label": "RFC 6749"},
      {"@id": "urn:ngm:class:rfc-6750", "label": "RFC 6750"},
      {"@id": "urn:ngm:class:rfc-7636", "label": "RFC 7636"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:authorisation-code-flow", "label": "Authorisation Code Flow"},
      {"@id": "urn:ngm:class:client-credentials-flow", "label": "Client Credentials Flow"},
      {"@id": "urn:ngm:class:refresh-token", "label": "Refresh Token"},
      {"@id": "urn:ngm:class:access-token", "label": "Access Token"},
      {"@id": "urn:ngm:class:pkce", "label": "PKCE"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:bearer-token", "label": "Bearer Token"},
      {"@id": "urn:ngm:class:authorisation-server", "label": "Authorisation Server"},
      {"@id": "urn:ngm:class:scope", "label": "Scope"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:least-privilege", "label": "Least Privilege"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-and-access-management", "label": "Identity and Access Management"},
      {"@id": "urn:ngm:class:openid-connect", "label": "OpenID Connect"},
      {"@id": "urn:ngm:class:saml", "label": "SAML"},
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:oauth-1-0", "label": "OAuth 1.0"},
      {"@id": "urn:ngm:class:api-key-authentication", "label": "API Key Authentication"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ietf", "label": "IETF"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:open-authorisation-2", "label": "Open Authorisation 2"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - OAuth 2.0 is an open [[Delegated Authorisation]] framework standardised as RFC 6749 by the [[IETF]] that allows a resource owner to grant scoped, time-limited access to their protected resources on a [[Resource Server]] to a third-party client application, without sharing credentials. The framework is distinct from [[Authentication]] — it provides authorisation only — and serves as the substrate upon which [[OpenID Connect]] layers federated login. Together they form the backbone of modern [[Identity and Access Management]] and [[Zero Trust Architecture]] deployments, replacing earlier credential-sharing patterns and the cryptographically heavier [[SAML]] for many use cases.

- ### Overview
  - OAuth 2.0 was published in October 2012, superseding OAuth 1.0a, which required cumbersome request signing. The new framework delegated complexity to the transport layer ([[HTTPS]] is mandatory) and introduced a simpler token model understood by ordinary HTTP clients.
  - The framework does not specify token formats, instead leaving that to profiles. RFC 9068 standardises [[JSON Web Token]] (JWT) access tokens with a well-known claim set, enabling stateless validation by resource servers without a round-trip to the [[Authorisation Server]].
  - OAuth 2.0 is universally adopted: every major cloud platform (AWS, Azure, GCP), consumer identity provider (Google, Apple, Facebook), and enterprise identity system (Okta, Auth0, Keycloak, Azure AD / Entra ID, Ping Identity) exposes OAuth 2.0 endpoints.

- ### Core Roles
  - **Resource Owner** — the entity (typically a human user) that owns the protected resource and can grant access.
  - **Client** — the application requesting access on behalf of the resource owner. Clients are classified as *confidential* (can keep a secret) or *public* (cannot).
  - **Authorisation Server** — issues access tokens after authenticating the resource owner and obtaining consent. May also issue refresh tokens.
  - **Resource Server** — hosts the protected resources and validates bearer tokens presented by the client. May be co-located with the authorisation server.

- ### Grant Types (Flows)
  - **Authorisation Code Flow** — the primary [[Authorisation Code Flow]] for confidential clients (server-side web apps). The client receives a short-lived code which is exchanged for tokens on the back channel, preventing token leakage in the browser URL.
  - **Authorisation Code + [[PKCE]]** — mandatory extension (RFC 7636) for public clients (SPAs, mobile apps) that adds a code verifier/challenge pair to defeat code-interception attacks. Replaces the now-deprecated Implicit flow.
  - **[[Client Credentials Flow]]** — machine-to-machine flows where no human user is involved; the client authenticates directly with its own credentials. Used extensively for microservice-to-microservice [[API Security]].
  - **Device Authorisation Grant** (RFC 8628) — designed for input-constrained devices (smart TVs, CLI tools) that display a code for the user to approve on a secondary device.
  - **Refresh Token** — a long-lived credential exchanged for a new [[Access Token]] without re-prompting the user; subject to rotation and sender-constraint policies.
  - **Resource Owner Password Credentials (ROPC)** — deprecated; clients collected the user's password directly. Strongly discouraged in modern deployments.

- ### Key Extensions & RFCs
  - **RFC 6750** — Bearer Token Usage; defines how [[Bearer Token]]s are transmitted in the `Authorization` header.
  - **RFC 7009** — Token Revocation; allows clients and servers to proactively invalidate tokens.
  - **RFC 7662** — Token Introspection; resource servers call back to the authorisation server to validate opaque tokens and retrieve metadata.
  - **RFC 7636** — PKCE; Proof Key for Code Exchange hardens public clients against code-interception.
  - **RFC 9068** — JWT Profile for OAuth 2.0 Access Tokens; standardises the [[JSON Web Token]] claim structure so resource servers can validate tokens without introspection.
  - **RFC 9101** — JWT-Secured Authorisation Request (JAR); wraps the authorisation request in a signed JWT.
  - **RFC 9126** — Pushed Authorisation Requests (PAR); client POSTs the authorisation request directly to the server, receiving a request URI, preventing parameter tampering.
  - **RFC 9207** — OAuth 2.0 Authorisation Server Issuer Identification; prevents mix-up attacks across multiple authorisation servers.
  - **OAuth 2.1** (draft) — ongoing consolidation removing deprecated flows (ROPC, Implicit) and mandating PKCE, redirect-URI exact matching, and [[Bearer Token]] security.

- ### Security Model
  - OAuth 2.0 relies on [[HTTPS]] for confidentiality; tokens are bearer credentials and must be protected in transit and at rest.
  - Scopes implement [[Least Privilege]]; clients request only the permissions they need, and resource owners can consent to a subset.
  - Threat model (RFC 6819) and Security Best Current Practice (RFC 9700) document attacks including CSRF on the redirect URI, open redirectors, mix-up attacks, and token leakage.
  - Sender-constrained tokens (DPoP, RFC 9449) bind a token cryptographically to the client's key pair, mitigating bearer-token theft.
  - [[Zero Trust Architecture]] deployments issue short-lived access tokens with rich context claims (user, device, location) and enforce continuous authorisation rather than long-lived sessions.

- ### Relationship to OpenID Connect
  - [[OpenID Connect]] 1.0 (OIDC) is a thin identity layer built on top of OAuth 2.0's authorisation code flow. It adds:
    - **ID Token** — a [[JSON Web Token]] proving user identity, issued alongside the access token.
    - **UserInfo Endpoint** — returns standardised user profile claims.
    - **Discovery** (OIDC Discovery) — JSON document at `/.well-known/openid-configuration` advertising server capabilities.
    - **Dynamic Client Registration** — programmatic client onboarding.
  - OIDC enables [[Single Sign-On]] and [[Identity Federation]] across multiple relying parties sharing a common identity provider.

- ### Applications and Use Cases
  - **Consumer social login** — "Sign in with Google/Apple/GitHub" buttons use OIDC over OAuth 2.0, reducing password-reuse risk and friction.
  - **API authorisation** — REST and GraphQL APIs use Bearer tokens from OAuth 2.0 to authenticate machine clients and enforce per-scope rate limits.
  - **Microservice mesh** — [[Client Credentials Flow]] issues short-lived tokens for service-to-service calls within a service mesh or [[Zero Trust Architecture]] perimeter.
  - **Mobile applications** — Authorisation code + PKCE is the recommended pattern for native mobile apps; tokens are stored in the platform secure keychain.
  - **Single-page applications** — Modern SPAs use authorisation code + PKCE via a BFF (Backend For Frontend) proxy to keep tokens out of the browser.
  - **Enterprise SSO** — Enterprises federate Active Directory / LDAP identity into cloud SaaS via OAuth 2.0 / OIDC, replacing legacy [[SAML]] in greenfield deployments.
  - **IoT and smart devices** — Device Authorisation Grant (RFC 8628) enables headless devices to request authorisation from a companion device.
  - **[[Decentralised Identity]]** — Wallet and DID ecosystems (e.g., OpenID for Verifiable Presentations) build on OAuth 2.0 to present [[Verifiable Credentials]] to relying parties without a central identity hub.

- ### Relationships
  - requires:: [[Authentication]]
  - requires:: [[HTTPS]]
  - requires:: [[JSON Web Token]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Identity Federation]]
  - enables:: [[Delegated Authorisation]]
  - enables:: [[API Security]]
  - hasPart:: [[Authorisation Code Flow]]
  - hasPart:: [[Client Credentials Flow]]
  - hasPart:: [[Refresh Token]]
  - hasPart:: [[Access Token]]
  - hasPart:: [[PKCE]]
  - uses:: [[Bearer Token]]
  - uses:: [[Authorisation Server]]
  - uses:: [[Scope]]
  - supports:: [[Zero Trust Architecture]]
  - supports:: [[Least Privilege]]
  - relatedTo:: [[Identity and Access Management]]
  - relatedTo:: [[OpenID Connect]]
  - relatedTo:: [[SAML]]
  - relatedTo:: [[Federated Identity]]
  - contrastsWith:: [[OAuth 1.0]]
  - contrastsWith:: [[API Key Authentication]]
  - standardizedBy:: [[IETF]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Verifiable Credentials]]

- ### Standards & Context
  - **Standardisation body**: [[IETF]] OAuth Working Group (oauth@ietf.org).
  - **Core specification**: RFC 6749 (framework), RFC 6750 (bearer tokens) — both published October 2012.
  - **Security guidance**: RFC 6819 (threat model), RFC 9700 (Security Best Current Practice, 2025).
  - **Token formats**: RFC 9068 (JWT access tokens), RFC 7519 ([[JSON Web Token]]), RFC 7523 (JWT client authentication).
  - **Token lifecycle**: RFC 7009 (revocation), RFC 7662 (introspection).
  - **Public client hardening**: RFC 7636 (PKCE), RFC 8252 (OAuth for native apps), RFC 9449 (DPoP sender-constraining).
  - **Advanced request security**: RFC 9101 (JAR), RFC 9126 (PAR), RFC 9207 (issuer identification).
  - **Consolidation**: OAuth 2.1 draft merges the above best practices into a single normative document; expected to supersede RFC 6749.
  - **Regulatory relevance**: eIDAS 2.0 (EU) mandates OIDC/OAuth 2.0 for electronic identity wallets; FAPI 2.0 (Financial-grade API) profiles OAuth 2.0 for open banking under PSD2.

- ### Implementation Notes
  - Authorisation servers must enforce exact redirect-URI matching to prevent open-redirect attacks.
  - Tokens must be transmitted only over TLS; client libraries should validate `state` and `nonce` parameters to prevent CSRF.
  - Short token lifetimes (minutes to hours) with refresh-token rotation are preferred over long-lived access tokens.
  - Token binding (DPoP) should be adopted where the client runtime supports asymmetric keys, particularly for high-value API access.
  - Resource servers validating JWT access tokens must verify the `iss`, `aud`, `exp`, `nbf`, and signature; ignoring any one of these opens vulnerability windows.

- ### Provenance
  - sources:: RFC 6749, RFC 6750, RFC 7009, RFC 7636, RFC 7662, RFC 9068, RFC 9449, RFC 9700
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
