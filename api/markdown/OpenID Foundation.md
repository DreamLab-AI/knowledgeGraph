public:: true

# openid foundation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9da73c01b094f65c28d6307d30d127d99818e4b8c5a71a9316fc2c6e187ec179",
  "@type": "Page",
  "vc:slug": "open-id-foundation",
  "title": "openid foundation",
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
  "@id": "urn:ngm:class:open-id-foundation",
  "@type": "Class",
  "label": "OpenID Foundation",
  "definition": "The OpenID Foundation (OIDF) is an international, member-driven, non-profit standards organisation that stewards the OpenID family of identity specifications, including OpenID Connect, FAPI (Financial-grade API), MODRNA, and Digital Credentials. It coordinates working groups composed of identity providers, relying parties, and government bodies to develop, test interoperability of, and maintain open specifications for federated authentication and authorisation. The Foundation operates certification programmes to verify implementation conformance to published profiles, reducing interoperability barriers across global digital identity ecosystems. Founded in 2007, the OIDF operates under a royalty-free intellectual property policy, ensuring open access to its specifications without patent encumbrance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:openid-connect-working-group", "label": "OpenID Connect Working Group"},
      {"@id": "urn:ngm:class:fapi-working-group", "label": "FAPI Working Group"},
      {"@id": "urn:ngm:class:digital-credentials-working-group", "label": "Digital Credentials Working Group"},
      {"@id": "urn:ngm:class:modrna-working-group", "label": "MODRNA Working Group"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:open-id-connect", "label": "OpenID Connect"},
      {"@id": "urn:ngm:class:financial-grade-api", "label": "Financial-grade API"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:digital-identity-standards", "label": "Digital Identity Standards"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"},
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"},
      {"@id": "urn:ngm:class:open-banking", "label": "Open Banking"},
      {"@id": "urn:ngm:class:conformance-certification", "label": "Conformance Certification"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:oauth-2", "label": "OAuth 2.0"},
      {"@id": "urn:ngm:class:json-web-token", "label": "JSON Web Token"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self-Sovereign Identity"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:saml", "label": "SAML"},
      {"@id": "urn:ngm:class:w3c-did", "label": "W3C DID"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:digital-wallet", "label": "Digital Wallet"},
      {"@id": "urn:ngm:class:eidas", "label": "eIDAS"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:oidf", "label": "OIDF"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The [[OpenID Foundation]] (OIDF) is an international, member-driven, non-profit standards organisation that stewards the OpenID family of identity specifications. Founded in 2007, it oversees [[OpenID Connect]], [[Financial-grade API]] (FAPI), MODRNA, and the emerging [[Digital Credentials]] profile, coordinating working groups of industry participants—[[Identity Provider]]s, relying parties, and government bodies—to develop and maintain open specifications for [[Federated Identity]] and authorisation. The Foundation operates conformance certification programmes to reduce interoperability barriers across global [[Digital Identity]] ecosystems.

- ### Overview
  - The OpenID Foundation emerged from the broader [[OpenID]] community to provide formal governance, intellectual property management, and interoperability testing for open identity protocols.
  - Its core mandate is to prevent fragmentation of the digital identity landscape by ensuring that competing implementations of [[OpenID Connect]] and related specifications remain interoperable.
  - The OIDF operates under a royalty-free intellectual property policy, meaning all published specifications can be implemented without patent licensing fees, supporting wide commercial adoption.
  - Membership spans major technology companies (Google, Microsoft, Apple, Meta, Okta), financial institutions, government agencies, and academic organisations, giving the Foundation broad industry mandate.
  - The Foundation does not build identity infrastructure itself; it defines specifications, coordinates consensus among stakeholders, and certifies that implementations meet profile requirements.
  - Working groups are the primary mechanism of technical work: each group has a defined charter, public mailing lists, and produces specification drafts that progress through review to ratified standards.

- ### Key Components
  - #### Working Groups
    - **Connect Working Group** — maintains [[OpenID Connect]] Core, Discovery, Dynamic Registration, and Session Management specifications; the most active and longest-running group.
    - **FAPI Working Group** — develops the [[Financial-grade API]] security profiles (FAPI 1.0, FAPI 2.0) targeting high-assurance use cases such as [[Open Banking]], health data exchange, and regulated payment initiation.
    - **Digital Credentials Working Group** — extends OIDC to support [[Verifiable Credentials]], mobile driver's licences (ISO/IEC 18013-5), and wallet-based identity flows, bridging to [[Self-Sovereign Identity]] paradigms.
    - **MODRNA Working Group** — Mobile Connect and operator network identity, enabling mobile network operators to act as [[Identity Provider]]s using SIM-based authentication signals.
    - **eKYC & Identity Assurance Working Group** — defines claims and verification methods for electronic Know-Your-Customer processes and identity proofing levels.
    - **SSF/CAEP Working Group** — Shared Signals Framework and Continuous Access Evaluation Protocol, enabling real-time security event propagation between [[Identity Provider]]s and relying parties.
  - #### Certification Programme
    - The Foundation operates a self-certification programme backed by open-source conformance test suites (the OpenID Certification tool suite hosted at openid.net/certification).
    - Certified implementations are listed on a public registry, providing trust signals to regulators, enterprises, and integrators.
    - [[FAPI]] certification is mandated or strongly recommended by open banking regulatory frameworks in the UK (FCA/Open Banking Ltd), EU (PSD2/[[eIDAS]]), Brazil, Australia, and several other jurisdictions.
    - Certification covers profiles including Basic OP, Implicit OP, Hybrid OP, Form Post Response Mode, FAPI RW, CIBA (Client-Initiated Backchannel Authentication), and JARM.
  - #### Intellectual Property Framework
    - The OIDF Contribution Agreement requires all contributors to licence contributions under royalty-free terms, consistent with [[W3C]] and [[IETF]] patent policy norms.
    - This policy prevents participants from asserting patents against conformant implementations, a critical requirement for widespread deployment in regulated industries.

- ### Applications and Use Cases
  - #### Consumer Identity (Social Login)
    - OpenID Connect underpins social login at billions of scale: "Sign in with Google", "Sign in with Apple", and similar flows are OIDC-based, enabling [[Single Sign-On]] across unaffiliated web properties.
    - The Foundation's specifications provide the interoperability layer that allows a user's [[Identity Provider]] account to authenticate against any conformant relying party application.
  - #### Enterprise Single Sign-On
    - Enterprise [[Identity Provider]]s including Microsoft Entra ID (formerly Azure AD), Okta, Ping Identity, and ForgeRock implement OIDC and rely on OIDF-certified profiles for cross-organisational federation.
    - OIDC has largely displaced [[SAML]] in new enterprise deployments due to its JSON/REST-native design, making it better suited to modern API-driven architectures.
  - #### Open Banking and Financial Services
    - [[Financial-grade API]] profiles are required by PSD2-implementing banks and open banking schemes. FAPI 2.0 (based on [[OAuth 2.0]] with pushed authorisation requests and PAR) provides the security baseline for regulated payment and account data APIs.
    - The Foundation's FAPI certification programme is an entry requirement for many open banking ecosystems, making OIDF a de facto gatekeeper for fintech API access.
  - #### Digital Government and eID
    - The Digital Credentials Working Group is actively shaping how government-issued credentials (national IDs, driving licences, health cards) are presented via OIDC flows, interoperating with [[eIDAS 2.0]] wallets in the EU and similar schemes globally.
    - The Foundation collaborates with [[W3C]] Verifiable Credentials and ISO mobile document standards (mDL) to bridge bearer-token identity with cryptographically-signed credential presentation.
  - #### Healthcare and Regulated Data Sharing
    - SMART on FHIR (healthcare API standard) uses OIDC for patient and clinician authentication, with OIDF specifications providing the authorisation framework for health data access.
    - FAPI-based profiles are being adopted for health data sharing under US ONC regulations and EU health data space initiatives.

- ### Relationships
  - hasPart:: [[OpenID Connect Working Group]]
  - hasPart:: [[FAPI Working Group]]
  - hasPart:: [[Digital Credentials Working Group]]
  - hasPart:: [[MODRNA Working Group]]
  - supports:: [[OpenID Connect]]
  - supports:: [[Financial-grade API]]
  - supports:: [[Verifiable Credentials]]
  - supports:: [[Digital Identity Standards]]
  - enables:: [[Federated Identity]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Open Banking]]
  - enables:: [[Conformance Certification]]
  - implements:: [[OAuth 2.0]]
  - implements:: [[JSON Web Token]]
  - relatedTo:: [[Identity Federation]]
  - relatedTo:: [[Authentication Standards]]
  - relatedTo:: [[Self-Sovereign Identity]]
  - relatedTo:: [[Decentralised Identity]]
  - contrastsWith:: [[SAML]]
  - contrastsWith:: [[W3C DID]]
  - bridges-to:: [[Digital Wallet]]
  - bridges-to:: [[eIDAS]]

- ### Standards and Context
  - The OIDF works closely with but is distinct from [[IETF]], which standardises the underlying [[OAuth 2.0]] and JWT/JWS/JWE (JOSE) building blocks that OIDC is built upon. The OIDF adds the identity layer atop OAuth 2.0.
  - Key specifications maintained by the OIDF include:
    - **OpenID Connect Core 1.0** — the foundational authentication layer over [[OAuth 2.0]].
    - **OpenID Connect Discovery 1.0** — well-known metadata endpoint enabling automatic configuration.
    - **OpenID Connect Dynamic Client Registration** — programmatic client onboarding.
    - **FAPI 1.0 Advanced / FAPI 2.0** — high-assurance security profiles for financial and regulated APIs.
    - **CIBA (Client-Initiated Backchannel Authentication)** — decoupled authentication flow for IoT, call-centre, and consent-by-device scenarios.
    - **JARM (JWT Secured Authorization Response Mode)** — tamper-evident authorisation responses.
    - **OpenID for Verifiable Credential Issuance (OID4VCI)** and **OpenID for Verifiable Presentations (OID4VP)** — wallet credential exchange flows.
  - The OIDF coordinates with [[W3C]] (on [[Verifiable Credentials]] and [[Decentralised Identifiers]]), [[ISO]] (on mDL/ISO 18013-5), [[ETSI]] and [[European Commission]] (on [[eIDAS 2.0]] architectural reference framework), and national standards bodies.
  - Regulatory alignment: the UK's [[Open Banking]] Implementation Entity (OBIE), Brazil's Open Finance specification, and Australia's Consumer Data Right (CDR) all mandate FAPI profiles certified through OIDF processes.
  - The Foundation's governance model includes a Board of Directors elected by member organisations, with tiered membership (Corporate, Non-Profit, Individual) ensuring inclusive participation from both large enterprises and civil society.

- ### Historical Context
  - OpenID 1.0 and 2.0 (2005–2007) were decentralised identity protocols predating the Foundation, allowing user-controlled URIs as identity handles — an early experiment in [[Self-Sovereign Identity]].
  - The shift to OAuth 2.0 + OpenID Connect (2014) marked a pragmatic pivot toward provider-mediated identity that could scale to consumer internet deployments.
  - The OIDF has progressively broadened its scope from pure authentication into high-assurance financial APIs (FAPI), mobile network identity (MODRNA), and now verifiable digital credentials, tracking the evolution of the broader [[Digital Identity]] landscape.

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
