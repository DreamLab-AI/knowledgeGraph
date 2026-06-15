public:: true

# SAML
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9b358e2f5211595dbdaa8c6a9ffb2ecc55c7d806a824bffbd67892fd3990f06",
  "@type": "Page",
  "vc:slug": "saml",
  "title": "SAML",
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
      "vc:value": "SAML"
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
  "@id": "urn:ngm:class:saml",
  "@type": "Class",
  "label": "SAML",
  "definition": "Security Assertion Markup Language (SAML) is an XML-based open standard developed by OASIS that defines formats and protocols for exchanging authentication and authorisation data between an identity provider (IdP) and a service provider (SP). SAML 2.0, published in 2005, is the dominant version in enterprise deployments and enables web-based single sign-on by allowing the IdP to issue digitally signed XML assertions that service providers trust without requiring the user to re-authenticate. It decouples the identity layer from application services, enabling cross-domain federated identity across organisational and cloud boundaries.",
  "domain": "security",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:federated-identity",
      "label": "Federated Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
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
    "hasPart": [
      {
        "@id": "urn:ngm:class:saml-assertion",
        "label": "SAML Assertion"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:xml-encryption",
        "label": "XML Encryption"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:identity-federation",
        "label": "Identity Federation"
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
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:kerberos",
        "label": "Kerberos"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Access Management"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust"
      }
    ],
    "bridgesTo": [
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
  "quality": 0.76,
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
  "@id": "urn:visionflow:annotation:link-resolutions:saml:78e43414e313",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9b358e2f5211595dbdaa8c6a9ffb2ecc55c7d806a824bffbd67892fd3990f06"
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
  - Security Assertion Markup Language (SAML) is an XML-based open standard published by [[OASIS]] that defines data formats and communication protocols enabling [[Federated Identity]] across organisational boundaries. An [[Identity Provider]] (IdP) authenticates users and issues digitally signed XML assertions; [[Service Provider]]s consume those assertions to grant access without requiring separate credentials. SAML 2.0 (2005) is the canonical version underpinning enterprise [[Single Sign-On]] across cloud and on-premises applications, making it foundational to [[Identity Management]] and [[Access Management]] in large organisations.

- ### Overview
  - SAML was conceived to solve cross-domain [[Authentication]] without requiring every service to maintain its own user database or sharing passwords across systems.
  - The standard separates the roles of identity assertion (IdP) from resource access (SP), enforcing the principle of least privilege at the identity layer.
  - A SAML transaction is a browser-mediated redirect dance: the SP redirects unauthenticated users to the IdP, the IdP authenticates them and returns a signed XML assertion via the browser, and the SP validates the signature against the IdP's public key.
  - The dominant SAML binding for web SSO is the [[HTTP POST Binding]], though [[HTTP Redirect Binding]] is common for shorter AuthnRequests.
  - SAML assertions carry three logical types of statement: authentication statements (the user was authenticated), attribute statements (claims about the user such as email or role), and authorisation decision statements (permit or deny a resource).
  - Because assertions are signed using [[XML Signature]] and optionally encrypted with [[XML Encryption]], SAML provides both integrity and confidentiality over an insecure HTTP transport.

- ### Key Components
  - **SAML Assertion**
    - The core XML document issued by the IdP containing one or more statements about the authenticated subject.
    - Includes a validity window (NotBefore / NotOnOrAfter) to limit replay attacks.
    - May carry [[Attribute Statement]]s used to pass roles, groups, or custom claims to the SP.
  - **SAML Protocol**
    - Defines request-response message pairs: AuthnRequest, Response, LogoutRequest, LogoutResponse, ArtifactResolve, ArtifactResponse.
    - AuthnRequest is sent by the SP to initiate authentication; Response carries the assertion.
    - [[Single Logout]] (SLO) is defined as a separate protocol allowing a coordinated logout across all federated SPs in a session.
  - **SAML Bindings**
    - Mappings of SAML protocol messages onto transport protocols (HTTP, SOAP, artifact).
    - [[HTTP POST Binding]]: base64-encodes the message in an HTML form auto-submitted by JavaScript; used for assertions (which can be large).
    - [[HTTP Redirect Binding]]: deflate-compresses and URL-encodes the message as a query parameter; used for shorter AuthnRequests.
    - [[SOAP Binding]]: used in ECP (Enhanced Client or Proxy) profile for non-browser clients.
  - **SAML Metadata**
    - XML documents describing the capabilities and public keys of IdPs and SPs, enabling automated trust establishment.
    - Published by entities and exchanged out-of-band or via metadata aggregates maintained by identity federations (e.g., InCommon, eduGAIN).
  - **SAML Profiles**
    - Web Browser SSO Profile: the most common usage, enabling browser-based [[Single Sign-On]].
    - ECP Profile: enables native applications and thick clients.
    - Holder-of-Key Profile: binds assertions to client certificates for stronger proof-of-possession.
    - Attribute Profile: defines how attributes are named and conveyed for interoperability.

- ### Mechanisms
  - **IdP-Initiated SSO**
    - The user logs into the IdP portal, selects a target application, and the IdP generates and POSTs an assertion to the SP.
    - No AuthnRequest is sent; the SP must accept unsolicited responses.
  - **SP-Initiated SSO**
    - The user attempts to access a protected SP resource, the SP sends an AuthnRequest to the IdP, and the IdP returns a Response assertion.
    - Preferred from a security standpoint because it ties assertions to a specific AuthnRequest via the InResponseTo attribute, preventing assertion injection.
  - **Trust Establishment**
    - Trust is established by exchanging X.509 certificates embedded in [[SAML Metadata]].
    - The SP must pre-configure or dynamically resolve the IdP's signing certificate to validate assertions.
    - [[Public Key Infrastructure]] underpins this exchange, though SAML does not mandate a full PKI chain — self-signed certificates are common.
  - **Session Management**
    - SAML does not define browser-side session management; that is left to the SP.
    - The IdP-generated SessionIndex can be referenced in SLO requests to terminate federated sessions.
  - **Attribute Mapping**
    - SP applications often need to map SAML attributes (e.g., urn:oid:0.9.2342.19200300.100.1.3 for mail) to local user properties — a frequent source of integration friction.
    - [[Attribute Release Policy]] at the IdP controls which attributes are disclosed to which SPs.

- ### Applications and Use Cases
  - **Enterprise Single Sign-On**
    - Organisations deploy SAML to federate on-premises [[Active Directory]] or [[LDAP]] directories with cloud SaaS applications (Salesforce, Workday, ServiceNow).
    - Reduces password fatigue and enables centralised MFA enforcement.
  - **Higher Education and Research Federations**
    - InCommon (USA), eduGAIN (Europe), and AAF (Australia) connect thousands of universities and research institutions via SAML metadata aggregates.
    - Researchers access shared computational and data resources using home-institution credentials.
  - **Government and Public Sector**
    - National identity schemes (e.g., GOV.UK Verify historically, eIDAS Gateway) use SAML to federate citizen identities across government services.
  - **Healthcare**
    - Federated access to electronic health record systems across hospital networks uses SAML to enforce strict attribute-based authorisation.
  - **Cloud Identity Brokering**
    - Identity brokers such as Okta, Azure AD, and Ping Identity act as SAML IdPs toward cloud SPs while themselves federating upstream to corporate directories.
  - **Cross-Organisation B2B**
    - Partner organisations exchange SAML metadata to enable employees to access each other's portals without creating guest accounts.

- ### Relationships
  - subClassOf:: [[Federated Identity]]
  - requires:: [[XML]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Identity Provider]]
  - enables:: [[Single Sign-On]]
  - enables:: [[Federated Identity]]
  - enables:: [[Cross-Domain Authentication]]
  - hasPart:: [[SAML Assertion]]
  - hasPart:: [[SAML Protocol]]
  - hasPart:: [[SAML Binding]]
  - hasPart:: [[SAML Metadata]]
  - uses:: [[XML Signature]]
  - uses:: [[XML Encryption]]
  - uses:: [[HTTP Redirect Binding]]
  - uses:: [[HTTP POST Binding]]
  - implements:: [[Authentication]]
  - implements:: [[Authorisation]]
  - implements:: [[Identity Federation]]
  - standardizedBy:: [[OASIS]]
  - contrastsWith:: [[OAuth 2.0]]
  - contrastsWith:: [[OpenID Connect]]
  - contrastsWith:: [[Kerberos]]
  - relatedTo:: [[Access Management]]
  - relatedTo:: [[Identity Management]]
  - relatedTo:: [[Zero Trust]]
  - bridges-to:: [[Cloud Identity]]
  - bridges-to:: [[Decentralised Identity]]

- ### Comparison with Related Standards
  - **SAML vs [[OAuth 2.0]]**
    - OAuth 2.0 is an authorisation delegation framework, not an authentication protocol. SAML handles both authentication and attribute assertions in a single XML document.
    - OAuth 2.0 uses JSON tokens and REST, making it lighter and more suitable for mobile and API-centric architectures. SAML's XML verbosity is a disadvantage in these contexts.
  - **SAML vs [[OpenID Connect]]**
    - OIDC (built on OAuth 2.0) was designed explicitly as a simpler authentication layer using JSON Web Tokens ([[JWT]]). It has supplanted SAML for greenfield web and mobile applications.
    - SAML remains dominant in enterprise environments with established IdP infrastructure because the migration cost is high and SAML supports richer attribute profiles.
  - **SAML vs [[Kerberos]]**
    - Kerberos is a network-level ticket-granting system designed for intranet environments. SAML is designed for internet-facing, cross-domain federation over HTTP.
    - Many enterprises use both: Kerberos for intranet SSO (Integrated Windows Authentication) and SAML for federated cloud access.
  - **SAML vs [[WS-Federation]]**
    - WS-Federation is a competing XML-based federation standard from Microsoft/IBM. SAML 2.0 absorbed many concepts and is now the preferred open-standards alternative.

- ### Security Considerations
  - **Assertion Replay**
    - Mitigated by short validity windows and SP-side assertion ID caching to reject previously seen assertions.
  - **XML Signature Wrapping Attacks**
    - A class of attack where an attacker modifies the XML document structure so that the signature validates over an innocuous element while the SP processes a malicious one. Requires careful canonicalisation and schema validation in SP implementations.
  - **Man-in-the-Middle**
    - Addressed by requiring HTTPS for all SAML bindings; the SP should enforce TLS for its Assertion Consumer Service endpoint.
  - **Open Redirect**
    - SP-initiated SSO must validate the RelayState parameter to prevent redirect to malicious URLs after assertion consumption.
  - **Certificate Rollover**
    - IdP certificate rotation must be coordinated with all SPs via metadata updates; gaps cause authentication outages.
  - Integration with [[Multi-Factor Authentication]] at the IdP is a common pattern to harden SAML-federated sessions.

- ### Standards and Context
  - SAML 1.0 was published by OASIS in 2002; SAML 1.1 followed in 2003.
  - SAML 2.0 was published by OASIS in March 2005 and consolidated concepts from the Liberty Alliance ID-FF 1.2 specification.
  - Key OASIS specifications: SAMLCore (assertions and protocols), SAMLBind (bindings), SAMLProf (profiles), SAMLMeta (metadata), SAMLSec (security and privacy considerations).
  - [[NIST SP 800-63C]] (Digital Identity Guidelines: Federation and Assertions) provides US government guidance for SAML-based federation.
  - [[eIDAS Regulation]] in the EU defines SAML-based technical specifications for cross-border electronic identity assurance.
  - The [[Shibboleth]] open-source project is the canonical reference implementation of SAML 2.0 used extensively in academic federations.

- ### Provenance
  - sources:: OASIS SAML 2.0 specification suite (SAMLCore, SAMLBind, SAMLProf); NIST SP 800-63C; InCommon federation documentation; Shibboleth project documentation.
  - updated:: 2026-06-13
  - domain-remap:: original domain "artificial-intelligence" corrected to "security"; SAML is an identity and security federation standard with no AI relevance.
