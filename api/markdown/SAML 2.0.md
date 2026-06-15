public:: true

# SAML 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f08cfe7e78db5b5b4ee1926fe4b5084166a5aace2d5771c816d7f2b1a6c1cb2",
  "@type": "Page",
  "vc:slug": "saml-2-0",
  "title": "SAML 2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:single-sign-on",
      "vc:label": "Single Sign-On"
    },
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SAML 2.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:saml-2-0",
  "@type": "Class",
  "label": "SAML 2.0",
  "definition": "Security Assertion Markup Language 2.0 (SAML 2.0) is an OASIS open standard ratified in 2005 that defines an XML-based framework for exchanging authentication and authorisation data between an Identity Provider and a Service Provider. It enables web-based federated single sign-on by allowing an IdP to issue digitally signed XML assertions attesting a user's identity and attributes, which the SP accepts without requiring the user to re-authenticate. SAML 2.0 consolidates and supersedes SAML 1.0 and 1.1, Liberty Alliance ID-FF 1.2, and Shibboleth 1.3, incorporating bindings for HTTP Redirect, POST, Artifact, and SOAP transports. The standard is governed by OASIS and remains the dominant federation protocol in enterprise, higher-education, and government identity ecosystems.",
  "domain": "security",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:federated-identity",
      "label": "Federated Identity"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:cross-domain-authentication",
        "label": "Cross-Domain Authentication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:xml-encryption",
        "label": "XML Encryption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:soap",
        "label": "SOAP"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oasis",
        "label": "OASIS"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      },
      {
        "@id": "urn:ngm:class:provider",
        "label": "Service Provider"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:attribute-based-access-control",
        "label": "Attribute-Based Access Control"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Services"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:security-assertion-markup-language",
      "label": "Security Assertion Markup Language"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:saml-2-0:12a16ce35004",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8f08cfe7e78db5b5b4ee1926fe4b5084166a5aace2d5771c816d7f2b1a6c1cb2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Single Sign-On]]",
      "resolved": "urn:visionflow:linked:single-sign-on",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - SAML 2.0 (Security Assertion Markup Language version 2.0) is an [[OASIS]] open standard for XML-based [[Federated Identity]] and [[Single Sign-On]], enabling an [[Identity Provider]] to issue cryptographically signed assertions about a user's identity and attributes to a [[Service Provider]] without the user needing to re-authenticate at each service. It is the dominant enterprise web-federation protocol and underpins [[Access Control]] across government, higher-education, and corporate environments worldwide.

- ### Overview
  - SAML 2.0 was ratified by [[OASIS]] in March 2005. It merged and superseded SAML 1.0/1.1, the Liberty Alliance Identity Federation Framework 1.2, and [[Shibboleth]] 1.3 — aligning previously divergent enterprise federation efforts into a single interoperable standard.
  - The core problem it solves is [[Cross-Domain Authentication]]: when a user authenticates once at a trusted [[Identity Provider]], that IdP issues a digitally signed XML assertion which downstream [[Service Provider]] systems can verify without a separate login, implementing true [[Single Sign-On]] across organisational and domain boundaries.
  - SAML 2.0 relies on [[XML Digital Signature]] (XMLDSig) and [[XML Encryption]] (XMLEnc) for integrity and confidentiality, and on [[TLS]] (HTTPS) for transport-layer security. The [[Public Key Infrastructure]] supporting X.509 certificates is therefore a hard dependency.
  - The standard is widely regarded as mature, having been in production deployment for over two decades in enterprises, universities, government agencies, and cloud SaaS platforms. It is mandated or strongly recommended in numerous national [[e-Government]] frameworks.

- ### Key Components
  - #### Assertions
    - The fundamental data unit in SAML 2.0. A signed [[XML]] document issued by an [[Identity Provider]] attesting facts about a subject (the authenticated user).
    - Three assertion types:
      - **Authentication assertions** — confirm that the user authenticated at a given time using a specific method (e.g., password, MFA, smart card).
      - **Attribute assertions** — carry user attributes such as email, role, group memberships, and entitlements, enabling [[Attribute-Based Access Control]].
      - **Authorisation decision assertions** — state whether a subject is permitted to access a specific resource; less commonly used in practice.
    - Assertions carry a `NotBefore` and `NotOnOrAfter` validity window, limiting replay-attack exposure.
  - #### Protocols
    - SAML 2.0 defines a set of request/response protocol pairs:
      - **Authentication Request Protocol** — SP sends an `<AuthnRequest>` to the IdP; IdP returns an `<Response>` containing assertions.
      - **Single Logout Protocol (SLO)** — coordinates logout across all SPs sharing the same session, via `<LogoutRequest>` and `<LogoutResponse>` messages.
      - **Artifact Resolution Protocol** — exchanges short opaque references ("artifacts") for full assertions via a back-channel SOAP call, avoiding large URL payloads.
      - **Name Identifier Management Protocol** — allows parties to change or terminate the pseudonym identifying the subject.
      - **Assertion Query / Request Protocol** — allows direct assertion retrieval by reference.
  - #### Bindings
    - Bindings specify how SAML protocol messages are transported over existing communication protocols:
      - **HTTP Redirect binding** — messages encoded as URL query parameters using DEFLATE compression and Base64; used for `<AuthnRequest>` due to browser redirect limits.
      - **HTTP POST binding** — messages embedded in an HTML form that is auto-submitted via JavaScript; used for `<Response>` carrying assertions.
      - **HTTP Artifact binding** — short artifact token in URL; full message retrieved via back-channel.
      - **SOAP binding** — full SAML message sent in a [[SOAP]] envelope, used for back-channel communications such as Artifact Resolution and SLO.
      - **PAOS binding** — reverse [[SOAP]] flow enabling ECP (Enhanced Client or Proxy) profile for non-browser clients.
  - #### Profiles
    - Profiles combine assertions, protocols, and bindings into complete, deployable use-case specifications:
      - **Web Browser SSO Profile** — the most widely deployed profile; defines the SP-initiated and IdP-initiated flows for browser-based SSO.
      - **Enhanced Client or Proxy (ECP) Profile** — enables SSO for thick clients (e.g., desktop apps, mobile) that can participate in SAML flows without a browser redirect.
      - **Single Logout Profile** — standardised coordinated logout.
      - **Artifact Resolution Profile** — back-channel assertion retrieval.
      - **Identity Provider Discovery Profile** — helps users identify their home [[Identity Provider]] when hitting an SP for the first time (used with WAYF/DS services).
      - **Attribute Profile** — normative conventions for representing user attributes including [[LDAP]] directory attributes.
  - #### Metadata
    - [[SAML Metadata]] (saml-metadata-2.0-os) is an ancillary OASIS specification that defines an [[XML]] format for IdPs and SPs to publish their technical capabilities: entity IDs, endpoint URLs, supported bindings, certificate public keys, and supported name ID formats.
    - Metadata exchange is the primary mechanism for establishing trust between IdP and SP — each party imports the other's metadata to validate signatures and to know which endpoints to use. Metadata registries operated by [[Identity Federations]] (e.g., eduGAIN, InCommon, UK Access Management Federation) distribute metadata at scale.

- ### Security Model
  - The SAML 2.0 security model centres on **message-level security** rather than purely transport-level security:
    - **Signature verification** — every assertion MUST be signed with the IdP's private key (RSA or EC). The SP verifies using the IdP's public key obtained from trusted metadata.
    - **Encryption** — assertions or individual elements (e.g., `<NameID>`, `<Attribute>`) may be encrypted with the SP's public key, preventing intermediaries from reading assertion content.
    - **Replay prevention** — assertions carry unique `ID` attributes and validity windows; SPs SHOULD maintain an ID cache to reject repeated use.
    - **Channel binding** — `<SubjectConfirmationData>` may bind the assertion to a specific recipient URL (`Recipient`) and a request identifier (`InResponseTo`), preventing theft and redirection of assertions.
    - **Audience restriction** — the `<AudienceRestriction>` element limits assertion use to specific SPs, preventing token forwarding attacks.
  - Known attack classes addressed by SAML 2.0 implementations include XML Signature Wrapping (XSW), assertion theft via open redirectors, and XML External Entity (XXE) injection. Hardened libraries (e.g., python3-saml, OneLogin) include XSW-specific countermeasures.

- ### SP-Initiated vs IdP-Initiated Flows
  - **SP-initiated SSO** — the user visits the SP, the SP detects no session, constructs an `<AuthnRequest>`, and redirects the browser to the IdP. After authentication the IdP posts the assertion back to the SP's Assertion Consumer Service (ACS) URL. This is the recommended flow as it includes an `InResponseTo` correlation binding.
  - **IdP-initiated SSO** — the user starts at the IdP portal (e.g., an enterprise application launcher), selects a target application, and the IdP proactively posts an unsolicited assertion to the SP's ACS URL. There is no `InResponseTo`, which weakens correlation security; SPs must mitigate with short assertion lifetimes and strict audience checks.

- ### Applications and Use Cases
  - **Enterprise SSO** — employees authenticate once to a corporate [[Identity Provider]] (e.g., Microsoft AD FS, [[Active Directory]] via Azure AD) and access hundreds of SaaS applications (Salesforce, Workday, ServiceNow, Google Workspace) without re-entering credentials.
  - **Higher-Education Federation** — university identity federations (eduGAIN, InCommon, UK Access Management Federation, Australian Access Federation) use SAML 2.0 to provide researchers with cross-institution access to library resources, HPC clusters, and collaborative platforms.
  - **Government e-Services** — national electronic identity schemes in the EU (eIDAS), UK, Australia, and many other countries use SAML 2.0 profiles to allow citizens to authenticate with their national digital identity at government portals.
  - **Healthcare** — hospital systems and health information exchanges use SAML 2.0 to federate clinician identities across care settings, reducing password fatigue and improving audit trails.
  - **Cloud service brokerage** — cloud marketplaces and multi-tenant SaaS platforms accept SAML 2.0 assertions from customer IdPs to enforce [[Access Control]] policies without managing user directories themselves.
  - **B2B federation** — partner organisations federate their identity systems so that employees can access each other's portals, extranets, and APIs using their home organisation's credentials.

- ### Relationships
  - subClassOf:: [[Federated Identity]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Federated Identity]]
  - enables:: [[Cross-Domain Authentication]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[XML Digital Signature]]
  - requires:: [[XML Encryption]]
  - uses:: [[XML]]
  - uses:: [[HTTP]]
  - uses:: [[SOAP]]
  - uses:: [[TLS]]
  - standardizedBy:: [[OASIS]]
  - contrastsWith:: [[OAuth 2.0]]
  - contrastsWith:: [[OpenID Connect]]
  - contrastsWith:: [[WS-Federation]]
  - relatedTo:: [[Identity Provider]]
  - relatedTo:: [[Service Provider]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Attribute-Based Access Control]]
  - relatedTo:: [[Directory Services]]
  - bridges-to:: [[Zero Trust Architecture]]
  - bridges-to:: [[Decentralised Identity]]

- ### Comparison with Related Protocols
  - **SAML 2.0 vs [[OpenID Connect]]** — OIDC is a lightweight identity layer on top of [[OAuth 2.0]] using JSON/JWT rather than XML. OIDC is better suited to mobile and JavaScript-heavy applications where XML parsing overhead is prohibitive. SAML 2.0 is preferred in enterprise and government contexts where rich attribute assertions and established federation metadata ecosystems are required.
  - **SAML 2.0 vs [[OAuth 2.0]]** — OAuth 2.0 is an authorisation delegation framework, not an authentication protocol per se. The two are complementary: SAML handles identity federation while OAuth handles delegated API access. Many enterprise deployments use both, often bridged by an IdP that issues SAML assertions for browser SSO and OAuth tokens for API access.
  - **SAML 2.0 vs [[WS-Federation]]** — WS-Federation is Microsoft's alternative federation standard (part of the WS-* family) also used in enterprise environments, particularly with Active Directory Federation Services (AD FS). SAML 2.0 has broader multi-vendor interoperability; WS-Federation is used in Windows-centric stacks.
  - **SAML 2.0 vs [[Shibboleth]]** — Shibboleth predates SAML 2.0; version 2.0 of the Shibboleth software fully implements SAML 2.0 and is the de-facto IdP/SP implementation in higher-education federations.
  - **SAML 2.0 and [[Decentralised Identity]]** — emerging W3C standards (Verifiable Credentials, DIDs) are positioned as longer-term successors for some SAML use cases, particularly where user-controlled identity wallets replace centralised IdPs.

- ### Standards and Context
  - **OASIS SAML 2.0 Core** (saml-core-2.0-os, March 2005) — defines assertion structure, protocol messages, and authentication context classes.
  - **OASIS SAML 2.0 Bindings** (saml-bindings-2.0-os) — HTTP Redirect, HTTP POST, HTTP Artifact, SOAP, and PAOS bindings.
  - **OASIS SAML 2.0 Profiles** (saml-profiles-2.0-os) — Web Browser SSO, ECP, SLO, Attribute, and Discovery profiles.
  - **OASIS SAML 2.0 Metadata** (saml-metadata-2.0-os) — entity metadata format and exchange conventions.
  - **OASIS SAML 2.0 Authentication Context** (saml-authn-context-2.0-os) — classes for expressing how authentication was performed (password, PKI, kerberos, MFA, etc.).
  - **ISO/IEC 29115** (Entity Authentication Assurance) aligns with SAML authentication context class URIs.
  - **NIST SP 800-63** (Digital Identity Guidelines) references SAML 2.0 as an approved federation protocol for US federal systems, with specific guidance on assertion strength levels (IAL/AAL/FAL).
  - **eIDAS Regulation (EU 910/2014)** mandates SAML 2.0-based profiles for cross-border citizen authentication between EU member states via the eIDAS network.
  - **UK Government** — GOV.UK Verify (now retired) used SAML 2.0; subsequent UK Digital Identity frameworks continue to recognise SAML 2.0 for government federation scenarios.
  - Governing body: [[OASIS]] (Organization for the Advancement of Structured Information Standards).

- ### Implementation Landscape
  - **Identity Providers**: Microsoft Azure Active Directory / Entra ID, Okta, PingFederate, Shibboleth IdP, Keycloak, ForgeRock, OneLogin, Auth0, ADFS.
  - **Service Provider libraries**: python3-saml (OneLogin), java-saml, ruby-saml, passport-saml (Node.js), SimpleSAMLphp, spring-security-saml, .NET/Kentor.AuthServices.
  - **Federation operators**: InCommon (USA), UK Access Management Federation, eduGAIN (global academic), AAF (Australia), SWITCH (Switzerland), DFN-AAI (Germany).

- ### Provenance
  - sources:: OASIS SAML 2.0 specification suite (2005); NIST SP 800-63 series; eIDAS Regulation EU 910/2014; established knowledge to training cutoff August 2025.
  - updated:: 2026-06-13
