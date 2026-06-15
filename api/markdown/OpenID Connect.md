public:: true

# openid connect
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:750c7cba50e1b31d841552458df675c8f55a1cce408dc1c5e412f1967b99cc54",
  "@type": "Page",
  "vc:slug": "open-id-connect",
  "title": "openid connect",
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
  "@id": "urn:ngm:class:open-id-connect",
  "@type": "Class",
  "label": "OpenID Connect",
  "definition": "OpenID Connect (OIDC) is a federated identity and authentication protocol standardised by the OpenID Foundation that adds an authentication layer on top of the OAuth 2.0 authorisation framework. Upon successful authentication, an OIDC-compliant identity provider issues a signed JSON Web Token (ID Token) containing identity claims — such as subject identifier, email, and session expiry — which the relying party verifies cryptographically using the provider's published JSON Web Key Set without querying the provider again. OIDC defines standard flows (authorisation code, implicit, hybrid, and device code), a discovery endpoint, and a UserInfo endpoint, enabling single sign-on across web and mobile applications and serving as the identity spine for enterprise federation, consumer social logins, open banking APIs, and decentralised identity wallets.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-federation",
      "label": "Identity Federation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:oidc",
      "label": "OIDC"
    }
  ],
  "relations": {
    "dependsOn": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:json-web-key-set",
        "label": "JSON Web Key Set"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:api-security",
        "label": "API Security"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      },
      {
        "@id": "urn:ngm:class:relying-party",
        "label": "Relying Party"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      },
      {
        "@id": "urn:ngm:class:internet-engineering-task-force",
        "label": "Internet Engineering Task Force"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:kerberos",
        "label": "Kerberos"
      },
      {
        "@id": "urn:ngm:class:ldap",
        "label": "LDAP"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:financial-grade-api",
        "label": "Financial Grade API"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:eu-digital-identity-wallet",
        "label": "EU Digital Identity Wallet"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - OpenID Connect (OIDC) is a federated identity and [[Authentication]] protocol standardised by the [[OpenID Foundation]] that sits atop the [[OAuth 2.0]] authorisation framework. It extends OAuth 2.0 by specifying how an [[Identity Provider]] communicates verified user identity to a [[Relying Party]] via a cryptographically signed [[JSON Web Token]] (the ID Token), enabling [[Single Sign-On]] across heterogeneous web, mobile, and API surfaces. OIDC is the dominant protocol for modern [[Identity Federation]], underpinning enterprise IAM, consumer social login, open banking, and emerging [[Decentralised Identity]] architectures.

- ### Overview
  - OpenID Connect was published as a final specification in February 2014 by the [[OpenID Foundation]], building directly on [[OAuth 2.0]] (RFC 6749/6750) and the [[JSON Object Signing and Encryption]] (JOSE) suite. Where OAuth 2.0 addresses *authorisation* — granting applications scoped access to resources — OIDC addresses *authentication* — asserting who the user is. The key output is the **ID Token**: a compact [[JSON Web Signature]]-signed JWT whose payload carries standardised claims (sub, iss, aud, exp, iat, nonce) plus optional profile, email, and address scopes.
  - OIDC achieves wide adoption because it is browser-friendly (redirect-based), JSON-native (avoiding the XML complexity of [[SAML]]), and reuses the OAuth 2.0 infrastructure that most developers already operate. Major [[Identity Provider]] platforms — Google, Microsoft Entra ID, Apple, Okta, Auth0, Keycloak — expose OIDC endpoints, making it the de-facto identity glue of the modern internet.
  - Beyond basic consumer login, OIDC anchors enterprise [[Zero Trust Architecture]] deployments, where continuous authentication assertions replace the old perimeter-trust model. Financial-grade extensions (FAPI 2.0) make OIDC suitable for high-value banking API calls under [[Open Banking]] mandates in the UK, EU, and Australia. Decentralised extensions (SIOP v2, OID4VC) bridge OIDC into [[Self-Sovereign Identity]] and [[Verifiable Credentials]] ecosystems.

- ### Key Components
  - **ID Token** — A [[JSON Web Signature]]-signed [[JSON Web Token]] containing identity claims. The relying party validates the signature using the IdP's [[JSON Web Key Set]], verifying authenticity without a round-trip to the server.
  - **Authorisation Code Flow** — The recommended flow for most clients. The user is redirected to the [[Identity Provider]], authenticates, and the browser returns an authorisation code. The server-side client exchanges this code for tokens at the token endpoint, keeping tokens off the browser.
  - **PKCE (Proof Key for Code Exchange)** — RFC 7636 extension mandatory for public clients (SPAs, native apps) that prevents authorisation code interception attacks by binding the code to a verifier known only to the client. Now recommended universally.
  - **Discovery Document** — The `.well-known/openid-configuration` JSON endpoint exposes all [[Identity Provider]] metadata: supported flows, scopes, claim types, endpoint URIs, signing algorithms, and JWKS URI. Enables dynamic client configuration.
  - **[[JSON Web Key Set]] (JWKS)** — Published endpoint containing the IdP's public keys used to verify ID Token signatures. Clients cache and rotate keys using the `kid` (key ID) claim.
  - **UserInfo Endpoint** — An OAuth 2.0-protected endpoint returning additional claims about the authenticated user on demand, decoupling detailed profile retrieval from the authentication event.
  - **Scopes and Claims** — Standard scopes (`openid`, `profile`, `email`, `address`, `phone`) map to claim sets. Custom scopes extend the model for application-specific identity attributes.
  - **Nonce** — A cryptographic random value embedded in the authorisation request and echoed in the ID Token, preventing replay attacks.
  - **State Parameter** — CSRF protection mechanism: a random value sent in the request and returned unmodified in the redirect, which the client validates before processing.
  - **Session Management** — OIDC Session Management and Front-Channel/Back-Channel Logout specifications define how [[Single Sign-On]] sessions are coordinated across multiple relying parties when the user logs out at the IdP.

- ### Authentication Flows
  - **Authorisation Code Flow** (recommended) — Two-legged: redirect → code → token exchange. Tokens never touch the browser's address bar. Used by server-rendered apps and confidential clients.
  - **Authorisation Code + PKCE** — Extension of code flow for public clients (mobile apps, SPAs). RFC 7636 code challenge/verifier replaces client secrets that cannot be kept confidential in native environments.
  - **Implicit Flow** (deprecated) — Tokens returned directly in the redirect fragment. Retained only for legacy compatibility; superseded by code+PKCE for all public clients.
  - **Hybrid Flow** — Returns some tokens from the authorisation endpoint and others from the token endpoint. Enables front-channel delivery of an ID Token for quick session establishment while keeping access tokens server-side.
  - **Device Authorisation Grant** (RFC 8628) — For input-constrained devices (smart TVs, IoT). The device obtains a user code; the user authenticates on a separate browser; the device polls for tokens.
  - **Client Credentials Flow** — Machine-to-machine; no user involved. Used with [[Service Mesh]] or microservice authentication where the client itself is the principal.

- ### Security Properties
  - **Cryptographic Binding** — ID Token signatures bind identity assertions to the issuer's private key; clients verify using public JWKS. [[Transport Layer Security]] is mandatory for all endpoints.
  - **Audience Restriction** — The `aud` claim restricts token acceptance to the intended relying party, preventing token relay attacks across services.
  - **Short-lived Tokens** — ID Tokens typically expire in minutes; refresh tokens (longer-lived) are used to obtain new access tokens without re-authentication, balancing security and usability.
  - **Pushed Authorisation Requests (PAR)** — RFC 9126; the client posts authorisation parameters directly to the IdP before the redirect, preventing manipulation of URL parameters. Mandated by FAPI 2.0.
  - **JWT-Secured Authorisation Requests (JAR)** — RFC 9101; the authorisation request itself is signed as a JWT, providing integrity and non-repudiation of request parameters. Required in open banking profiles.
  - **[[Multi-Factor Authentication]] Signal** — The `amr` (Authentication Methods References) and `acr` (Authentication Context Class Reference) claims communicate what factors were used, allowing relying parties to enforce step-up authentication policies.
  - **Certificate-Bound Access Tokens** (RFC 8705) — Mutual TLS client certificates are bound to tokens, preventing bearer token theft in [[Financial Grade API]] deployments.

- ### Applications and Use Cases
  - **Consumer Social Login** — "Sign in with Google / Apple / Microsoft" buttons are OIDC relying-party integrations. The social platform acts as IdP; the application receives user identity without handling passwords.
  - **Enterprise Single Sign-On** — Employees authenticate once at a corporate IdP (Microsoft Entra ID, Okta, Ping Identity) and gain access to hundreds of SaaS applications via OIDC federation, eliminating per-app password management.
  - **API Gateway Authentication** — [[API Security]] layers (Kong, AWS API Gateway, Apigee) validate OIDC access tokens to enforce per-user rate limiting and scoped access to microservice APIs.
  - **Open Banking** — FAPI 2.0 (a hardened OIDC profile) is mandated under the UK's [[Open Banking]] framework, the EU's PSD2/PSD3 open finance rules, and Australia's Consumer Data Right to protect high-value financial API calls.
  - **[[Zero Trust Architecture]]** — OIDC tokens serve as the cryptographic identity assertion in ZTA frameworks (BeyondCorp, NIST SP 800-207), replacing implicit network-perimeter trust with per-request authenticated identity.
  - **Decentralised Identity Wallets** — Self-Issued OpenID Provider v2 (SIOPv2) and OpenID for Verifiable Credential Issuance (OID4VCI / OID4VP) enable OIDC-compatible flows where the user's own device acts as IdP, supporting [[EU Digital Identity Wallet]] (EUDI), [[Verifiable Credentials]], and [[Self-Sovereign Identity]] use cases.
  - **IoT and Edge Authentication** — Device Authorisation Grant enables resource-constrained devices to obtain OIDC tokens without a local browser, supporting authenticated telemetry reporting and [[Edge Computing]] command channels.
  - **Healthcare Identity** — SMART on FHIR (HL7 standard) builds on OIDC to provide scoped, patient-consented access to electronic health records for clinical apps.
  - **Gaming and Consumer Platforms** — PlayStation Network, Nintendo, Steam, and Xbox use OIDC-compatible flows to federate identity across platforms and enable third-party developer integrations.

- ### Relationships
  - dependsOn:: [[OAuth 2.0]]
  - dependsOn:: [[JSON Web Token]]
  - dependsOn:: [[JSON Web Key Set]]
  - dependsOn:: [[Transport Layer Security]]
  - supports:: [[Authentication]]
  - supports:: [[Single Sign-On]]
  - supports:: [[Multi-Factor Authentication]]
  - supports:: [[Federated Identity]]
  - enables:: [[Zero Trust Architecture]]
  - enables:: [[Decentralised Identity]]
  - enables:: [[API Security]]
  - implements:: [[Identity Provider]]
  - implements:: [[Relying Party]]
  - standardizedBy:: [[OpenID Foundation]]
  - standardizedBy:: [[Internet Engineering Task Force]]
  - contrastsWith:: [[SAML]]
  - contrastsWith:: [[Kerberos]]
  - contrastsWith:: [[LDAP]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Public Key Infrastructure]]
  - relatedTo:: [[Financial Grade API]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Verifiable Credentials]]
  - bridges-to:: [[EU Digital Identity Wallet]]

- ### Comparison with Peer Protocols
  - **OIDC vs [[SAML]] 2.0** — SAML uses XML assertions and browser-redirect POST bindings; OIDC uses compact JWTs and JSON. OIDC is lighter, mobile-friendly, and better suited to REST/API ecosystems. SAML remains prevalent in legacy enterprise federation.
  - **OIDC vs [[Kerberos]]** — Kerberos is an on-premises ticket-granting system suited to intranet environments and Windows Active Directory. OIDC is internet-scale, works across organisational boundaries, and requires no shared symmetric secret.
  - **OIDC vs [[LDAP]]** — LDAP is a directory query protocol, not an authentication delegation protocol. OIDC federates authentication decisions to a central IdP; LDAP stores and queries identity data. They are often used together (IdP authenticates against LDAP directory).
  - **OIDC vs [[FIDO2 / WebAuthn]]** — WebAuthn provides cryptographic, phishing-resistant authentication at the credential level (passkeys, hardware tokens). OIDC is a federation protocol that sits above credential mechanisms; an IdP can use WebAuthn internally while presenting OIDC tokens externally.

- ### Standards and Governance
  - **Core Specification** — OpenID Connect Core 1.0 (published 2014-02-26 by the OpenID Foundation); defines ID Token format, flows, claims, and UserInfo endpoint.
  - **Discovery** — OpenID Connect Discovery 1.0; `.well-known/openid-configuration` document structure.
  - **Dynamic Registration** — OpenID Connect Dynamic Client Registration 1.0; clients register with IdPs programmatically.
  - **Session Management** — OpenID Connect Session Management 1.0; Front-Channel Logout 1.0; Back-Channel Logout 1.0.
  - **FAPI 2.0** — Financial-grade API Security Profile 2.0 (OpenID Foundation); hardened OIDC for open banking, incorporating PAR (RFC 9126), JAR (RFC 9101), and DPoP (RFC 9449).
  - **SIOPv2 & OID4VC** — Self-Issued OpenID Provider v2 and OpenID for Verifiable Credentials; W3C/OpenID Foundation collaboration enabling decentralised identity wallet interoperability.
  - **SMART on FHIR** — HL7 specification that profiles OIDC for healthcare, defining patient and clinical scopes for EHR API access.
  - **Regulatory Alignment** — Referenced by EU eIDAS 2.0 / EUDI Wallet technical architecture; UK Open Banking Implementation Entity (OBIE) mandates FAPI 1.0/2.0 profiles; Australia's CDR Rules reference FAPI.
  - **IETF RFCs** — OAuth 2.0 (RFC 6749), Bearer Tokens (RFC 6750), PKCE (RFC 7636), JWT (RFC 7519), JWS (RFC 7515), JWKS (RFC 7517), PAR (RFC 9126), JAR (RFC 9101), MTLS Token Binding (RFC 8705), Device Grant (RFC 8628), DPoP (RFC 9449).

- ### Implementation Landscape
  - **Cloud IdP Platforms** — Microsoft Entra ID, Google Identity Platform, Amazon Cognito, Apple Sign In all expose OIDC-compliant endpoints as primary interface.
  - **Open-Source IdP Servers** — [[Keycloak]] (Red Hat), Dex, Hydra (Ory), Authentik, Zitadel, and Authelia implement OIDC server-side for self-hosted deployments.
  - **Commercial IAM** — Okta, Auth0 (Okta), Ping Identity, ForgeRock, and SailPoint provide enterprise OIDC federation with policy engines, audit trails, and MFA orchestration.
  - **SDK Ecosystem** — AppAuth (mobile, RFC 8252), oidc-client-ts (browser SPA), python-jose, jose4j (Java), and Microsoft.Identity.Web (.NET) are widely-used client libraries.
  - **Service Mesh Integration** — Istio and Envoy support OIDC token validation as policy enforcement points, enabling per-request [[Service Mesh]] authentication at Layer 7.

- ### Provenance
  - sources:: OpenID Connect Core 1.0 specification (openid.net); OIDC Foundation working group documents; IETF RFC series (6749, 6750, 7519, 7515, 7517, 7636, 8705, 9101, 9126); FAPI 2.0 Security Profile; NIST SP 800-63C; eIDAS 2.0 ARF.
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
