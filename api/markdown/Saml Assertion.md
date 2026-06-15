public:: true

# Saml Assertion

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:saml-assertion",
  "@type": "Page",
  "title": "Saml Assertion",
  "vc:slug": "saml-assertion",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:saml-assertion",
  "@type": "Class",
  "label": "Saml Assertion",
  "definition": "A SAML assertion is an XML-based security token, issued by an identity provider, that conveys statements about an authenticated subject to a relying service provider. Assertions carry authentication, attribute and authorisation-decision statements, are bound to a subject and validity window, and are protected by XML digital signatures to ensure integrity and origin. They are the core data structure exchanged in SAML single sign-on and federated identity.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:saml",
      "label": "SAML"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:xml",
        "label": "XML"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:identity-federation",
        "label": "Identity Federation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
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
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Saml Assertion is a key concept in the security domain.
  - Related foundational concepts: [[SAML]] [[Single Sign-On]] [[XML]] [[Digital Signature]] [[Authentication]].
  - A SAML assertion is an XML-based security token, issued by an identity provider, that conveys statements about an authenticated subject to a relying service provider. Assertions carry authentication, attribute and authorisation-decision statements, are bound to a subject and validity window, and are protected by XML digital signatures to ensure integrity and origin. They are the core data structure exchanged in SAML single sign-on and federated identity.
- ### Overview
  - In SAML-based federation an identity provider authenticates a user and issues a signed assertion that a service provider consumes to grant access without re-authenticating. The assertion's signature and validity conditions establish trust between domains. SAML remains widespread in enterprise SSO, alongside token formats such as JWT in OAuth/OIDC ecosystems.
- ### Key aspects
  - Authentication, attribute and authorisation-decision statements.
  - Subject binding and validity (NotBefore/NotOnOrAfter) conditions.
  - XML digital signatures for integrity and origin authentication.
  - Issuance by an identity provider, consumption by a service provider.
  - Confirmation methods such as bearer and holder-of-key.
- ### Applications
  - Enterprise single sign-on across web applications.
  - Cross-domain federated identity.
  - Attribute-based access decisions at relying parties.
  - Integration with identity providers and SSO gateways.
- ### Relationships
  - subClassOf:: [[SAML]]
  - partOf:: [[SAML]]
  - partOf:: [[Single Sign-On]]
  - hasPart:: [[Digital Signature]]
  - hasPart:: [[XML]]
  - contrastsWith:: [[OAuth]]
  - uses:: [[XML]]
  - uses:: [[Digital Signature]]
  - implements:: [[Authentication]]
  - implements:: [[Authorization]]
  - supports:: [[Federated Identity]]
  - supports:: [[Identity Federation]]
  - relatedTo:: [[Security Token]]
  - relatedTo:: [[Identity Provider]]
  - enables:: [[Single Sign-On]]
  - requires:: [[Identity Provider]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
