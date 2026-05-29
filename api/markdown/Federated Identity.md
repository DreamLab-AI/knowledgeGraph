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
  "definition": "Federated Identity is an architectural paradigm that allows users to authenticate once with a trusted identity provider and have that authentication assertion accepted by multiple independent relying parties—services and applications—without requiring separate accounts or repeated credential entry. The federation relationship is governed by bilateral or multilateral trust agreements and implemented through standard protocols such as SAML 2.0, OpenID Connect, and OAuth 2.0, which define how authentication tokens are issued, signed, and verified across organisational boundaries. Federated identity is foundational to enterprise single sign-on, cross-institutional academic collaboration, and consumer social login ecosystems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-management", "label": "Identity Management"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:identity-federation", "label": "Identity Federation"},
      {"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"},
      {"@id": "urn:ngm:class:single-sign-on", "label": "Single Sign-On"},
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:oauth-2-0", "label": "OAuth 2.0"},
      {"@id": "urn:ngm:class:open-id-connect", "label": "OpenID Connect"},
      {"@id": "urn:ngm:class:authentication-standards", "label": "Authentication Standards"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:trust-framework", "label": "Trust Framework"},
      {"@id": "urn:ngm:class:access-control", "label": "Access Control"},
      {"@id": "urn:ngm:class:multi-factor-authentication", "label": "Multi-Factor Authentication"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Federated Identity enables a user to authenticate once with a trusted [[Identity Provider]] and access multiple independent services through standard protocols like [[OpenID Connect]] and [[OAuth 2.0]], eliminating per-service password management while preserving cross-organisational trust through [[Trust Framework]] agreements.

- ### Relationships
  - Federated Identity is the operational realisation of [[Identity Federation]] policy through concrete protocol implementations. It depends on [[Identity Provider]] infrastructure to issue signed assertions and on [[Authentication Standards]] for interoperability. [[Single Sign-On]] is the primary user experience outcome, while [[Access Control]] systems consume federated identity tokens to make authorisation decisions. [[Multi-Factor Authentication]] is layered onto federated flows to raise assurance levels. [[Decentralized Identity]] represents an architectural evolution where the central identity provider is replaced by cryptographic wallets and verifiable credentials, moving trust establishment from bilateral federation agreements to public key infrastructure and the holder's own control.

- ### Content
  - Federated identity emerged as a solution to the proliferation of isolated credential stores in enterprise environments of the late 1990s. Employees logging into dozens of enterprise applications each with separate usernames and passwords created both usability burdens and security risks—more accounts meant more targets for phishing and more orphaned credentials to maintain. The Liberty Alliance Project, formed in 2001, established the first industry consortium to standardise identity federation, leading to specifications that evolved into SAML 2.0. Academic networks, particularly Shibboleth in higher education, deployed federated identity at scale for cross-institutional research collaboration.

  - The technical mechanism of federation involves three parties: the end user, an identity provider (IdP) who vouches for the user's identity, and a service provider (SP) or relying party who trusts the IdP's assertions. When a user attempts to access an SP resource, the SP redirects them to their IdP with a signed authentication request. The IdP authenticates the user through whatever mechanisms it maintains—password, biometric, hardware token—and returns a signed assertion token to the SP. SAML 2.0 uses XML-based assertions, while OpenID Connect uses JSON Web Tokens (JWTs), making it more web-native. OAuth 2.0 handles delegated authorisation—allowing applications to act on a user's behalf—often combined with OpenID Connect for identity.

  - The significance of federated identity extends beyond user convenience to enterprise security architecture. Centralising authentication at trusted identity providers enables centralised MFA enforcement, session management, and single-point revocation—critical when an employee leaves an organisation. Cloud adoption has accelerated federated identity deployment as organisations connect on-premise Active Directory to cloud service providers using ADFS or Azure AD as federation brokers. Consumer-facing federations via "Sign in with Google/Apple/GitHub" have made federation a mainstream expectation, with studies showing that social login availability significantly increases conversion rates on consumer services.

  - From 2023 to 2025, federated identity is converging with decentralised identity and verifiable credentials. The W3C Decentralized Identifiers (DID) specification and OpenID4VCI/OpenID4VP protocols enable wallet-based identity flows where users hold their own credentials and present proofs without a central identity provider intermediary. This is particularly relevant for cross-border identity scenarios where no common institutional federation exists. AI agent identity—where autonomous software agents need to authenticate to services on behalf of users or autonomously—is an emerging frontier, with proposals for agent-specific credential formats and delegation chains that extend federated identity concepts to non-human principals.