public:: true

# Federated Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:federated-identity",
  "@type": "Page",
  "vc:slug": "federated-identity",
  "title": "Federated Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:federated-identity",
  "@type": "Class",
  "label": "Federated Identity",
  "definition": "Federated Identity is an architectural paradigm in which a user authenticates once with a trusted Identity Provider and receives a signed assertion that is accepted by multiple independent relying-party services across organisational or administrative boundaries, eliminating per-service credential stores. The federation relationship is governed by bilateral or multilateral trust agreements and implemented through standard protocols such as SAML 2.0, OpenID Connect, and OAuth 2.0, which define how authentication tokens are issued, transported, and cryptographically verified. Federated identity is foundational to enterprise single sign-on, cross-institutional academic collaboration, and consumer social-login ecosystems, and is actively converging with decentralised-identity models that replace central providers with holder-controlled cryptographic credentials.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-management",
      "label": "Identity Management"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:identity-federation",
      "label": "Identity Federation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      },
      {
        "@id": "urn:ngm:class:provider",
        "label": "Service Provider"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificates"
      },
      {
        "@id": "urn:ngm:class:authentication-standards",
        "label": "Authentication Standards"
      }
    ],
    "uses": [
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
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:cross-domain-authentication",
        "label": "Cross-Domain Authentication"
      },
      {
        "@id": "urn:ngm:class:delegated-authorisation",
        "label": "Delegated Authorisation"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Session Management"
      },
      {
        "@id": "urn:ngm:class:user-provisioning",
        "label": "User Provisioning"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oasis-standards",
        "label": "OASIS Standards"
      },
      {
        "@id": "urn:ngm:class:open-id-foundation",
        "label": "OpenID Foundation"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:siloed-identity",
        "label": "Siloed Identity"
      },
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:privileged-access-management",
        "label": "Privilege Access Management"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Services"
      },
      {
        "@id": "urn:ngm:class:scim",
        "label": "SCIM"
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
  - Federated Identity is an architectural paradigm that allows a user to authenticate once with a trusted [[Identity Provider]] and have that authentication assertion accepted by multiple independent services — called relying parties or [[Service Provider]]s — across organisational or administrative boundaries, without requiring separate accounts or repeated credential entry. The mechanism is governed by a [[Trust Framework]] agreed bilaterally or multilaterally between organisations and implemented through standard protocols such as [[SAML]], [[OpenID Connect]], and [[OAuth 2.0]], which define how signed tokens are issued, transported, and cryptographically verified. Federated identity is foundational to enterprise [[Single Sign-On]], cross-institutional academic collaboration, and consumer social-login ecosystems, and is actively converging with [[Decentralized Identity]] models that replace central providers with holder-controlled [[Verifiable Credentials]].

- ### Overview
  - Federated Identity arose in the late 1990s to address the proliferation of isolated credential stores inside enterprises. Employees accessing dozens of applications each with separate usernames and passwords faced usability burdens and organisations faced security risks: more accounts meant more phishing targets and orphaned credentials after role changes.
  - The Liberty Alliance Project (formed 2001) established the first industry consortium to standardise identity federation. Its specifications evolved into SAML 2.0, ratified by [[OASIS Standards]] in 2005. Academic networks, particularly the Shibboleth consortium in higher education, deployed federated identity at continental scale for cross-institutional research collaboration.
  - The model separates the concerns of identity verification and service provision. The identity provider concentrates all credential handling, [[Multi-Factor Authentication]] enforcement, and session revocation, while service providers outsource authentication entirely, gaining both security and operational simplicity.
  - Consumer adoption accelerated through "Sign in with Google / Apple / GitHub" flows, making federation a mainstream user expectation. Cloud adoption drove enterprise deployment, with on-premise [[Directory Services]] (Active Directory) bridged to cloud workloads through federation brokers such as ADFS and Azure Entra ID.

- ### Key Mechanisms
  - **SAML 2.0** (Security Assertion Markup Language) — XML-based protocol in which the Identity Provider returns a signed XML assertion to the Service Provider via browser redirect. The canonical protocol for enterprise B2B federation.
    - Relies on [[Cryptographic Signature]] using X.509 certificates from [[Public Key Infrastructure]].
    - Supports SP-initiated and IdP-initiated flows; attributes such as email, role, and department are carried in the assertion.
  - **[[OpenID Connect]]** (OIDC) — identity layer built atop [[OAuth 2.0]]; the Identity Provider issues a [[JSON Web Token]] (ID Token) that encodes user identity claims and a short-lived access token for API calls.
    - More web- and mobile-native than SAML; widely used for consumer and SaaS federation.
    - Supports hybrid flows, PKCE for public clients, and dynamic client registration.
  - **[[OAuth 2.0]]** — delegated authorisation framework; while not itself an identity protocol, it underlies most modern federation by enabling fine-grained scoped access tokens that service providers consume to act on a user's behalf.
  - **[[Security Assertion]]s and Claims** — the fundamental unit of federation; a cryptographically signed statement by a trusted party attesting to attributes of the subject (email, groups, assurance level).
  - **Metadata and Discovery** — federation hubs publish XML or JSON metadata documents listing endpoints, keys, and capabilities, enabling automated trust establishment (e.g. OIDC Discovery, SAML federation metadata).
  - **[[Trust Framework]]s** — bilateral agreements (e.g. bilateral contracts) or multilateral frameworks (e.g. UK NHS federated identity, InCommon, eduGAIN) that define acceptable assurance levels, liability, and attribute release policies.

- ### Core Participants
  - **[[Identity Provider]] (IdP)** — the authoritative authenticating party; holds credentials, enforces [[Multi-Factor Authentication]], and issues signed tokens. Examples: Okta, Microsoft Entra ID, Ping Identity, Keycloak.
  - **[[Service Provider]] (SP) / Relying Party (RP)** — the application or service that trusts IdP assertions and grants access based on them without independently verifying the user's password.
  - **End User / Subject** — authenticated once at the IdP; experiences seamless access across federated services via [[Single Sign-On]].
  - **Federation Broker / Hub** — an intermediary that translates between protocol families (SAML↔OIDC) or aggregates multiple IdPs for a single SP; used in large-scale federations.
  - **Attribute Authority** — a secondary provider that enriches identity tokens with additional attributes (e.g. departmental role from an HR system) beyond what the IdP holds.

- ### Applications and Use Cases
  - **Enterprise Single Sign-On** — employees authenticate at a corporate IdP once per session and access all internal and SaaS applications (Salesforce, Workday, GitHub Enterprise) through SAML or OIDC, with centralised revocation on departure.
  - **Higher Education Federations** — InCommon (USA), eduroam (Wi-Fi), and eduGAIN (international) allow students and researchers to access library resources, HPC clusters, and collaborative platforms using home-institution credentials.
  - **Healthcare Identity** — NHS Scotland's federated identity enables clinical staff to access patient record systems across health boards using their employing-organisation credentials, governed by the NHS federated identity framework.
  - **Consumer Social Login** — "Sign in with Google/Apple/GitHub" provides a lightweight federation where large consumer IdPs vouch for users to third-party applications, reducing account creation friction.
  - **Government Cross-Agency Access** — national identity schemes (GOV.UK Verify successor, eIDAS in the EU) enable citizens to authenticate once with a certified identity provider and access multiple government digital services.
  - **AI Agent Authentication** — emerging use-case in which autonomous software agents authenticate to APIs and services using delegated federated credentials, requiring extension of federation protocols to non-human principals and machine-to-machine [[Delegated Authorisation]] chains.
  - **Cross-Border Cloud Access** — multinational organisations use federated identity to unify authentication across regional Azure Active Directory tenants, AWS IAM Identity Centre, and Google Cloud Identity, maintaining a single pane of access governance.
  - **[[Zero Trust Architecture]]** — federated identity is a key enabler; every access request is authenticated against the IdP regardless of network location, and continuous authentication signals from the IdP feed into adaptive policy engines.

- ### Relationships
  - partOf:: [[Identity Management]]
  - uses:: [[OAuth 2.0]]
  - uses:: [[OpenID Connect]]
  - uses:: [[SAML]]
  - uses:: [[JSON Web Token]]
  - uses:: [[Cryptographic Signature]]
  - hasPart:: [[Identity Provider]]
  - hasPart:: [[Service Provider]]
  - hasPart:: [[Trust Framework]]
  - hasPart:: [[Security Assertion]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Digital Certificates]]
  - requires:: [[Authentication Standards]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Cross-Domain Authentication]]
  - enables:: [[Delegated Authorisation]]
  - enables:: [[Zero Trust Architecture]]
  - supports:: [[Access Control]]
  - supports:: [[Multi-Factor Authentication]]
  - supports:: [[Session Management]]
  - supports:: [[User Provisioning]]
  - standardizedBy:: [[OASIS Standards]]
  - standardizedBy:: [[OpenID Foundation]]
  - standardizedBy:: [[IETF]]
  - contrastsWith:: [[Siloed Identity]]
  - contrastsWith:: [[Centralised Identity]]
  - bridgesTo:: [[Decentralized Identity]]
  - bridgesTo:: [[Verifiable Credentials]]
  - bridgesTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Privilege Access Management]]
  - relatedTo:: [[Directory Services]]
  - relatedTo:: [[SCIM]]

- ### Standards and Governance
  - **SAML 2.0** — [[OASIS Standards]] specification (2005); the dominant protocol for enterprise B2B federation; defines XML assertion format, binding types (HTTP Redirect, HTTP POST, Artifact), and metadata schema.
  - **[[OpenID Connect]] 1.0** — [[OpenID Foundation]] specification built on [[OAuth 2.0]] RFC 6749/6750; defines the ID Token (a [[JSON Web Token]]), UserInfo endpoint, and discovery document (OpenID Provider Metadata).
  - **[[OAuth 2.0]]** — [[IETF]] RFC 6749; the underlying authorisation framework; extended by PKCE (RFC 7636), Token Introspection (RFC 7662), and Pushed Authorisation Requests (RFC 9126).
  - **SCIM 2.0** (System for Cross-domain Identity Management) — [[IETF]] RFC 7643/7644; standard REST API for automated provisioning and deprovisioning of user accounts at relying parties following federated identity establishment.
  - **W3C Decentralized Identifiers (DID)** — W3C Recommendation enabling self-controlled identifiers with no central registry, underpinning [[Self-Sovereign Identity]] as an evolution of federated models.
  - **OpenID4VCI / OpenID4VP** — emerging [[OpenID Foundation]] protocols that extend OIDC to support [[Verifiable Credentials]] issuance and presentation, bridging classical federation with [[Decentralized Identity]] wallets.
  - **eIDAS 2.0** (EU) — EU regulation mandating interoperable electronic identity for cross-border government services, requiring Member States to recognise notified identity schemes; the EU Digital Identity Wallet implements federation at citizen level.
  - **NIST SP 800-63** — US government guidance on Digital Identity; defines Identity Assurance Levels (IAL), Authenticator Assurance Levels (AAL), and Federation Assurance Levels (FAL) that categorise the strength of federated assertions.
  - **InCommon / eduGAIN** — multilateral federation frameworks for research and education that define attribute release policies, assurance profiles (Baseline Expectations, Research and Scholarship Entity Category), and operate central federation metadata aggregators.

- ### Security Considerations
  - **Token Theft and Replay** — signed tokens intercepted in transit can be replayed; mitigated by short token lifetimes, audience binding (the `aud` claim in JWTs), and TLS everywhere.
  - **IdP Compromise Risk** — the Identity Provider is a high-value target; a compromised IdP can issue fraudulent assertions to all federated services. This concentration risk motivates [[Zero Trust Architecture]] defences layered atop federation and is a design motivation for [[Self-Sovereign Identity]].
  - **Open Redirect Attacks** — SAML and OIDC flows involve browser redirects; improper validation of redirect URIs enables phishing. [[Authentication Standards]] require strict redirect URI registration.
  - **Attribute Release and Privacy** — federated tokens may carry personal attributes; [[Trust Framework]] agreements and data minimisation policies govern which attributes are released to which relying parties, aligning with GDPR and similar regulation.
  - **Session Management** — single sign-on implies single sign-out must also be federated; SAML defines SLO (Single Logout) bindings; OIDC Back-Channel Logout (RFC 9672) propagates logout events to all registered relying parties.
  - **Phishing-Resistant MFA** — coupling federation with passkeys or FIDO2 hardware tokens at the IdP layer removes the password from the attack surface entirely, raising the federation's assurance level to AAL3 (NIST 800-63B).

- ### Current Landscape (2026)
  - The OpenID Foundation moved OpenID Federation to Final in February 2026 (v1.0 Final, plus backward-compatible v1.1 that splits out the OpenID Connect binding), positioning multilateral federation metadata as the "next generation of X.509" trust anchoring for large ecosystems.
  - Federation is shifting from bilateral SAML/OIDC single sign-on towards wallet-based, credential-centric models: OpenID for Verifiable Presentations (OpenID4VP) 1.0, OpenID for Verifiable Credential Issuance (OpenID4VCI) 1.0 and the High Assurance Interoperability Profile (HAIP) 1.0 reached the stage where the OIDF opened self-certification (from 26 February 2026, with HAIP conformance suites completed and open on 7 August 2026).
  - eIDAS 2.0 (Regulation (EU) 2024/1183, in force 20 May 2024) obliges every EU Member State to offer at least one European Digital Identity (EUDI) Wallet by the end of 2026, with relying-party acceptance including banks under Strong Customer Authentication mandated by December 2027; the Architecture and Reference Framework (ARF) v1.4 fixes ISO/IEC 18013-5 mdoc and SD-JWT VC formats over OpenID4VP/OpenID4VCI.
  - FAPI 2.0 reached Final (February 2025) and secured an ITU determination (June 2026), hardening federated authorisation for financial-grade and open-banking deployments; PAR, JAR and DPoP are increasingly expected for high-value transactions.
  - Passkeys (FIDO2/WebAuthn) are now routinely paired with OIDC so that phishing-resistant authentication sits behind the standard federated token flow; an emerging pattern uses a government-issued verifiable credential as the identity anchor to enrol and recover passkeys, reserving credential presentation for high-assurance events.
  - The FIDO Alliance launched a Digital Credentials Working Group (4 December 2025) to add wallet certification, cross-device credential presentation and relying-party enablement, working alongside the OpenID Foundation, ISO, W3C and EMVCo; a new OIDF ecosystem accreditation programme signed initial MOUs with FIDO, Kantara, FIME and others.
  - A key open challenge is protocol convergence: an ISO/OIDF joint working group (running since December 2025) is doing due diligence on unifying ISO/IEC 18013-5 and OpenID4VP into a single presentation protocol, while privacy regulators (EDPS TechDispatch 3/2025) flag unlinkability, over-identification and relying-party over-collection as unresolved risks in cross-border federated wallets.

- ### References
  - 1. OpenID Foundation (2026). OpenID launches conformance tests for widely adopted digital identity standards. https://openid.net/oidf-completes-conformance-programme-for-widely-adopted-digital-identity-standards/
  - 2. OpenID Foundation (2026). OpenID Federation 1.0 (Final). https://openid.net/specs/openid-federation-1_0.html
  - 3. FIDO Alliance (2025). FIDO Alliance Launches New Digital Credentials Initiative to Accelerate and Secure an Interoperable Digital Identity Ecosystem. https://fidoalliance.org/fido-alliance-launches-new-digital-credentials-initiative-to-accelerate-and-secure-an-interoperable-digital-identity-ecosystem/
  - 4. European Data Protection Supervisor (2025). TechDispatch #3/2025 - Digital Identity Wallets. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en
  - 5. Evertrust (2026). EUDI Wallet 2026: Five Things Private PKI Teams Should Know (eIDAS 2.0, ARF 1.4). https://evertrust.io/blog/eudi-wallet-private-pki/

- ### Provenance
  - sources:: OASIS SAML 2.0 Specification (2005); IETF RFC 6749/6750 (OAuth 2.0); OpenID Connect Core 1.0 Specification; NIST SP 800-63-3; W3C DID Core Recommendation; InCommon Federation Documentation; eduGAIN Technical Architecture; eIDAS 2.0 Regulation (EU) 2024/1183
  - updated:: 2026-06-13
