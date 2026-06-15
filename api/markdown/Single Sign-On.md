public:: true

# single sign-on
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1951179249e70072ed6cc2a9b9e800a158ea54a70dc94efb5bd20955ae4fb95a",
  "@type": "Page",
  "vc:slug": "single-sign-on",
  "title": "single sign-on",
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
  "@id": "urn:ngm:class:single-sign-on",
  "@type": "Class",
  "label": "Single Sign-On",
  "definition": "Single Sign-On (SSO) is an authentication architecture in which a user authenticates once to a central Identity Provider (IdP) and receives a cryptographically signed assertion or token that grants access to multiple independent service providers without re-entering credentials. Dominant protocol implementations include SAML 2.0 (XML-based assertions), OpenID Connect layered over OAuth 2.0 (JSON Web Token–based), and Kerberos (ticket-granting ticket mechanism in Windows/Active Directory environments). SSO reduces credential exposure and attack surface by centralising authentication at a hardened IdP, simplifies user lifecycle management across enterprise systems, and is the cornerstone of modern Identity and Access Management platforms encompassing provisioning, deprovisioning, and audit.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication",
      "label": "Authentication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:digital-identity-management",
        "label": "Digital Identity Management"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Security"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:kerberos",
        "label": "Kerberos"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Session Management"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:role-based-access-control",
        "label": "Role-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:audit-logging",
        "label": "Audit Logging"
      },
      {
        "@id": "urn:ngm:class:user-provisioning",
        "label": "User Provisioning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:federated-credential-exchange",
        "label": "Federated Credential Exchange"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Services"
      },
      {
        "@id": "urn:ngm:class:authentication-standards",
        "label": "Authentication Standards"
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
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:web-sso",
      "label": "Web SSO"
    }
  ],
  "qualityScore": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Single Sign-On (SSO) is an [[Authentication]] architecture in which a user presents credentials once to a centralised [[Identity Provider]] (IdP) and receives a cryptographically signed assertion or token that grants seamless access to multiple independent [[Service Provider]] systems without re-entering credentials. By centralising authentication, SSO reduces credential exposure, unifies [[User Provisioning]] and deprovisioning, and forms the cornerstone of enterprise [[Identity and Access Management]] platforms. Dominant implementations include [[SAML]] 2.0, [[OpenID Connect]] over [[OAuth 2.0]], and [[Kerberos]], each differing in assertion format, binding mechanism, and trust model.

- ### Overview
  - SSO is ubiquitous in modern enterprise and cloud environments because managing separate credentials per application creates both a poor user experience and an expanded attack surface. When users must remember many passwords they tend to reuse them or choose weak ones; credential stuffing attacks exploit this at scale. SSO transfers the authentication burden to a single, hardened IdP — typically with [[Multi-Factor Authentication]] enforced — and issues signed tokens that downstream service providers accept.
  - The architecture is fundamentally a delegation pattern: the IdP vouches for the user's identity so that the [[Service Provider]] never sees the raw credential. Trust is established either through a pre-shared metadata exchange (SAML federation metadata XML) or a discovery endpoint (OpenID Connect `/.well-known/openid-configuration`), both anchored in [[Public Key Infrastructure]].
  - SSO underpins [[Zero Trust Security]] models: continuous re-validation of session tokens, short token lifetimes, and step-up authentication for sensitive resources are all easier to enforce when a single IdP controls all token issuance.
  - Maturity: SSO is a **mature** technology with over two decades of enterprise deployment, standardised protocols, and a rich vendor ecosystem (Okta, Microsoft Entra ID, Ping Identity, Google Workspace, Shibboleth, Keycloak).

- ### Key Components
  - **Identity Provider (IdP)** — The central authority that authenticates users and issues assertions. Examples: [[Active Directory]] via AD FS, [[LDAP]]-backed Keycloak, cloud-native Okta or Microsoft Entra ID. The IdP holds the [[Digital Certificate]] used to sign assertions.
  - **Service Provider (SP)** — Any application or resource that trusts the IdP and accepts its assertions. The SP never handles raw passwords; it only validates the signed token/assertion against the IdP's public key.
  - **Assertion / Token** — The signed artefact conveying identity claims:
    - [[SAML]] 2.0: XML `<samlp:Response>` containing `<saml:Assertion>` elements signed with the IdP's private key; transported via HTTP POST or HTTP Redirect bindings.
    - [[OpenID Connect]]: compact [[JSON Web Token]] (JWT) `id_token`, signed (JWS) or encrypted (JWE), conveying `sub`, `iss`, `aud`, `exp`, `iat`, and optional profile claims.
    - [[Kerberos]]: Ticket-Granting Ticket (TGT) issued by a Key Distribution Centre (KDC); service tickets are derived from TGTs without further password entry.
  - **[[Session Management]]** — SSO establishes a session both at the IdP (global session) and at each SP (local session). Single Log-Out (SLO) protocols propagate session termination back to all SPs.
  - **[[Trust Framework]]** — Federations such as eduGAIN (academic research), InCommon (US higher education), and UK Access Federation operate multilateral trust frameworks, publishing metadata for thousands of IdPs and SPs.
  - **[[Directory Services]]** — IdPs typically delegate credential storage to a directory: [[LDAP]], [[Active Directory]], or a cloud directory. The IdP authenticates against the directory but issues its own signed assertions downstream.
  - **[[Multi-Factor Authentication]]** — Modern SSO deployments layer MFA onto the IdP authentication step, so MFA is enforced once globally rather than per-application.

- ### Protocols in Depth
  - **SAML 2.0** (Security Assertion Markup Language) — OASIS standard from 2005; dominant in enterprise web SSO. SP-initiated flow: user hits SP, is redirected to IdP with `AuthnRequest`, authenticates, IdP POSTs signed `Response` to SP's Assertion Consumer Service (ACS). IdP-initiated flow: IdP pushes assertion to SP without prior `AuthnRequest`. Strengths: broad enterprise support, rich attribute statements. Weaknesses: XML verbosity, complex binding matrix, no native mobile/API support.
  - **[[OpenID Connect]] (OIDC)** — Identity layer over [[OAuth 2.0]] (RFC 8252, RFC 7519 etc.); uses REST/JSON rather than XML. Returns `id_token` (JWT) plus optional `access_token` for API authorisation. Supports authorisation code flow (recommended), implicit flow (deprecated), hybrid flow, and PKCE for public clients. Native-app and SPA-friendly. Providers: Google Identity, Microsoft Identity Platform, Auth0, Okta.
  - **[[Kerberos]]** — Symmetric-key ticket-based protocol (RFC 4120); predominant in Windows [[Active Directory]] environments. KDC issues TGTs; clients present TGTs to get service tickets for individual resources. Enables transparent Windows Integrated Authentication in intranet contexts. Extended by SPNEGO for browser SSO.
  - **[[OAuth 2.0]]** — Authorisation framework (RFC 6749) often conflated with SSO; strictly it delegates authorisation not authentication. Used alongside OIDC for SSO; also underpins modern API security and machine-to-machine flows.
  - **WS-Federation / WS-Trust** — Older WS-* stack protocols used in Microsoft environments; largely superseded by OIDC/SAML but still present in legacy integrations.

- ### Applications and Use Cases
  - **Enterprise Workforce IAM** — Employees authenticate once to their corporate IdP (e.g. Microsoft Entra ID) and access hundreds of SaaS applications (Salesforce, ServiceNow, Workday, GitHub Enterprise) without additional logins. Provisioning via SCIM ensures attribute synchronisation.
  - **Academic Federations** — Universities federate via Shibboleth/SAML. A researcher at University of Edinburgh authenticates once and accesses journal databases (Elsevier, Springer), research compute clusters, and collaborative platforms across the eduGAIN global federation.
  - **Healthcare Cross-Organisational Access** — Clinical staff authenticate at their trust's IdP and access regional care records or national systems (NHS England's NHS Login, US Epic MyChart cross-org) under national identity frameworks.
  - **B2C Consumer Identity** — Social login (Sign in with Google, Apple, Facebook) is a consumer-facing SSO pattern using OIDC; reduces registration friction and offloads credential management to major IdPs.
  - **Cloud Workload Identity** — Cloud-native SSO patterns (AWS IAM Identity Centre, GCP Workload Identity Federation) extend SSO to machine identities, allowing CI/CD pipelines and microservices to obtain short-lived tokens without static credentials.
  - **Government e-Services** — National identity schemes (GOV.UK One Login, France Connect, Germany ID Wallet) use OIDC/SAML to provide citizens with a single credential for multiple government digital services.
  - **Zero Trust Network Access (ZTNA)** — SSO token validation is integrated into network access proxies; every resource request is gated by a fresh token check from the IdP, removing implicit trust in network location.

- ### Relationships
  - requires:: [[Identity Provider]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Digital Certificate]]
  - requires:: [[Trust Framework]]
  - enables:: [[Access Control]]
  - enables:: [[Digital Identity Management]]
  - enables:: [[Federated Identity]]
  - enables:: [[Zero Trust Security]]
  - implements:: [[OAuth 2.0]]
  - implements:: [[OpenID Connect]]
  - implements:: [[SAML]]
  - implements:: [[Kerberos]]
  - uses:: [[JSON Web Token]]
  - uses:: [[Session Management]]
  - uses:: [[Multi-Factor Authentication]]
  - supports:: [[Role-Based Access Control]]
  - supports:: [[Audit Logging]]
  - supports:: [[User Provisioning]]
  - contrastsWith:: [[Decentralised Identity]]
  - contrastsWith:: [[Password Manager]]
  - relatedTo:: [[Federated Credential Exchange]]
  - relatedTo:: [[Identity and Access Management]]
  - relatedTo:: [[Directory Services]]
  - relatedTo:: [[Authentication Standards]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Verifiable Credentials]]

- ### Standards and Governance
  - **OASIS SAML 2.0** — Security Assertion Markup Language Version 2.0, March 2005. Maintained by OASIS Security Services TC.
  - **IETF OAuth 2.0** — RFC 6749 (authorisation framework), RFC 6750 (bearer tokens), RFC 7519 (JWT), RFC 7636 (PKCE), RFC 8252 (native apps). OAuth working group continues to publish security best-current-practice (BCP 212/213).
  - **OpenID Foundation** — Publishes the OpenID Connect Core 1.0 spec and conformance test suite. FAPI (Financial-grade API) profile adds tighter constraints for high-value transactions.
  - **NIST SP 800-63** — US digital identity guidelines; defines Identity Assurance Levels (IAL), Authentication Assurance Levels (AAL), and Federation Assurance Levels (FAL) — the canonical framework for assessing SSO deployments against risk.
  - **ETSI / ISO/IEC 29115** — Entity authentication assurance framework; international analogue of NIST 800-63, referenced in EU eIDAS regulation for cross-border digital identity.
  - **eIDAS Regulation (EU) 910/2014** — Mandates mutual recognition of national eID schemes across EU member states; SSO federation is the technical mechanism underlying cross-border service access.
  - **W3C Verifiable Credentials** — Emerging complement/alternative to SAML/OIDC for decentralised identity claims; bridged to SSO via OIDC4VC (OpenID for Verifiable Credentials) specifications.

- ### Security Considerations
  - **Token theft** — Stolen JWT or SAML assertion grants full access; mitigated by short expiry (`exp`), binding tokens to client (DPoP — RFC 9449, mTLS), and short-lived session cookies marked `HttpOnly; Secure; SameSite=Strict`.
  - **IdP compromise** — Single point of failure and single point of attack. Hardening: HSM-backed signing keys, MFA-protected admin consoles, anomaly detection on assertion issuance.
  - **Assertion replay** — SAML `AssertionID` tracking and JWT `jti` (JWT ID) claims prevent replaying captured tokens; requires SP-side nonce validation.
  - **Open redirect** — IdP redirect endpoints must whitelist registered SP ACS/redirect URIs strictly; unvalidated redirects enable phishing via trusted IdP domain.
  - **Session fixation and SLO gaps** — Partial logout (user logs out of IdP but SP local session persists) is a common deployment error. Proper SLO implementation requires back-channel or front-channel logout bindings.
  - **XML signature wrapping** — SAML-specific attack where unsigned elements are injected around signed `<Assertion>` elements to hijack identity. Mitigated by strict schema validation and canonicalisation.

- ### Provenance
  - sources:: OASIS SAML 2.0 Specification; IETF RFC 6749, RFC 7519, RFC 8252; OpenID Connect Core 1.0; NIST SP 800-63 Rev 3; eIDAS Regulation EU 910/2014
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
