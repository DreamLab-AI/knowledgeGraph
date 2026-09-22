public:: true

# Identity Provider (IdP)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:50ad647d1d1e2add97b9f831fa70a63c2a44598a7b06c951f178f4c73b176d87",
  "@type": "Page",
  "vc:slug": "identity-provider-id-p",
  "title": "Identity Provider (IdP)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication-protocol",
      "vc:label": "Authentication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:authentication-server",
      "vc:label": "Authentication Server"
    },
    {
      "@id": "urn:visionflow:linked:credential-schema",
      "vc:label": "Credential Schema"
    },
    {
      "@id": "urn:visionflow:linked:credential-store",
      "vc:label": "Credential Store"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-key-store",
      "vc:label": "Cryptographic Key Store"
    },
    {
      "@id": "urn:visionflow:linked:directory-service",
      "vc:label": "Directory Service"
    },
    {
      "@id": "urn:visionflow:linked:federation-infrastructure",
      "vc:label": "Federation Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:ietf-oauth",
      "vc:label": "IETF OAuth"
    },
    {
      "@id": "urn:visionflow:linked:multi-factor-authentication",
      "vc:label": "Multi-Factor Authentication"
    },
    {
      "@id": "urn:visionflow:linked:oasis-saml",
      "vc:label": "OASIS SAML"
    },
    {
      "@id": "urn:visionflow:linked:open-id-foundation",
      "vc:label": "OpenID Foundation"
    },
    {
      "@id": "urn:visionflow:linked:pki-infrastructure",
      "vc:label": "PKI Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:session-manager",
      "vc:label": "Session Manager"
    },
    {
      "@id": "urn:visionflow:linked:single-sign-on-sso",
      "vc:label": "Single Sign-On (SSO)"
    },
    {
      "@id": "urn:visionflow:linked:token-issuer",
      "vc:label": "Token Issuer"
    },
    {
      "@id": "urn:visionflow:linked:user-database",
      "vc:label": "User Database"
    },
    {
      "@id": "urn:visionflow:linked:user-directory",
      "vc:label": "User Directory"
    },
    {
      "@id": "urn:visionflow:linked:user-provisioning",
      "vc:label": "User Provisioning"
    },
    {
      "@id": "urn:visionflow:owl:class:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-federation",
      "vc:label": "Identity Federation"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-management-system",
      "vc:label": "Identity Management System"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:policy-engine",
      "vc:label": "Policy Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20283"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Provider (IdP)"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identity-provider-id-p",
  "@type": "Class",
  "label": "Identity Provider (IdP)",
  "definition": "An authentication service system that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:credential-store",
        "label": "Credential Store"
      },
      {
        "@id": "urn:ngm:class:session-manager",
        "label": "Session Manager"
      },
      {
        "@id": "urn:ngm:class:user-directory",
        "label": "User Directory"
      },
      {
        "@id": "urn:ngm:class:policy-engine",
        "label": "Policy Engine"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication-protocol",
        "label": "Authentication Protocol"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On (SSO)"
      },
      {
        "@id": "urn:ngm:class:user-provisioning",
        "label": "User Provisioning"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:identity-federation",
        "label": "Identity Federation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:identity-management-system",
        "label": "Identity Management System"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity-provider-id-p:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:50ad647d1d1e2add97b9f831fa70a63c2a44598a7b06c951f178f4c73b176d87"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication Protocol]]",
      "resolved": "urn:visionflow:linked:authentication-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication Server]]",
      "resolved": "urn:visionflow:linked:authentication-server",
      "kind": "StubLink"
    },
    {
      "raw": "[[Credential Schema]]",
      "resolved": "urn:visionflow:linked:credential-schema",
      "kind": "StubLink"
    },
    {
      "raw": "[[Credential Store]]",
      "resolved": "urn:visionflow:linked:credential-store",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Key Store]]",
      "resolved": "urn:visionflow:linked:cryptographic-key-store",
      "kind": "StubLink"
    },
    {
      "raw": "[[Directory Service]]",
      "resolved": "urn:visionflow:linked:directory-service",
      "kind": "StubLink"
    },
    {
      "raw": "[[Federation Infrastructure]]",
      "resolved": "urn:visionflow:linked:federation-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[IETF OAuth]]",
      "resolved": "urn:visionflow:linked:ietf-oauth",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-Factor Authentication]]",
      "resolved": "urn:visionflow:linked:multi-factor-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[OASIS SAML]]",
      "resolved": "urn:visionflow:linked:oasis-saml",
      "kind": "StubLink"
    },
    {
      "raw": "[[OpenID Foundation]]",
      "resolved": "urn:visionflow:linked:open-id-foundation",
      "kind": "StubLink"
    },
    {
      "raw": "[[PKI Infrastructure]]",
      "resolved": "urn:visionflow:linked:pki-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Session Manager]]",
      "resolved": "urn:visionflow:linked:session-manager",
      "kind": "StubLink"
    },
    {
      "raw": "[[Single Sign-On (SSO)]]",
      "resolved": "urn:visionflow:linked:single-sign-on-sso",
      "kind": "StubLink"
    },
    {
      "raw": "[[Token Issuer]]",
      "resolved": "urn:visionflow:linked:token-issuer",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Database]]",
      "resolved": "urn:visionflow:linked:user-database",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Directory]]",
      "resolved": "urn:visionflow:linked:user-directory",
      "kind": "StubLink"
    },
    {
      "raw": "[[User Provisioning]]",
      "resolved": "urn:visionflow:linked:user-provisioning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:owl:class:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Federation]]",
      "resolved": "urn:visionflow:owl:class:identity-federation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management System]]",
      "resolved": "urn:visionflow:owl:class:identity-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Policy Engine]]",
      "resolved": "urn:visionflow:owl:class:policy-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - An authentication service system that creates, maintains, and manages identity information for principals while providing authentication services to relying party applications within a federation or distributed network.

- ### Semantic Classification
  - owl-class:: infrastructure:IdentityProvider
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Authentication Server]], [[Credential Store]], [[Token Issuer]], [[User Directory]], [[Session Manager]], [[Policy Engine]]
  - is-part-of:: [[Identity Management System]], [[Federation Infrastructure]]
  - requires:: [[Cryptographic Key Store]], [[User Database]], [[Authentication Protocol]]
  - enables:: [[Single Sign-On (SSO)]], [[Identity Federation]], [[Multi-Factor Authentication]], [[Access Control]], [[User Provisioning]]
  - depends-on:: [[PKI Infrastructure]], [[Directory Service]], [[Credential Schema]]

- ### Content
  Identity Provider (IdP) — content pending enrichment.

- ### Provenance
  - sources:: [[OASIS SAML]], [[OpenID Foundation]], [[IETF OAuth]]
  - migration-date:: 2026-04-26T00:00:00Z
