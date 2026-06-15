public:: true

# OAuth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c0a812752460d31d26bf4a338913faa7416f5b993ae6fd525ea1dbd4223456e",
  "@type": "Page",
  "vc:slug": "oauth",
  "title": "OAuth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authorisation",
      "vc:label": "Authorisation"
    },
    {
      "@id": "urn:visionflow:linked:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:linked:single-sign-on",
      "vc:label": "Single Sign-On"
    },
    {
      "@id": "urn:visionflow:linked:oauth-2-0",
      "vc:label": "OAuth 2.0"
    },
    {
      "@id": "urn:visionflow:linked:identity-provider",
      "vc:label": "Identity Provider"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OAuth"
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
  "@id": "urn:ngm:class:oauth",
  "@type": "Class",
  "label": "OAuth",
  "definition": "An open standard for delegated authorisation that allows a user to grant a third-party application limited access to a protected resource on behalf of a resource owner, using scoped, revocable access tokens rather than sharing credentials.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:authorisation",
    "label": "Authorisation"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:access-token",
        "label": "Access Token"
      },
      {
        "@id": "urn:ngm:class:refresh-token",
        "label": "Refresh Token"
      },
      {
        "@id": "urn:ngm:class:scope",
        "label": "Scope"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTPS"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:api-security",
        "label": "API Security"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:delegated-authorisation",
        "label": "Delegated Authorisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:pkce",
        "label": "PKCE"
      },
      {
        "@id": "urn:ngm:class:bearer-token",
        "label": "Bearer Token"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:rfc-6749",
        "label": "RFC 6749"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:open-id-connect",
        "label": "OpenID Connect"
      },
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:open-authorisation",
      "label": "Open Authorisation"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:oauth:6e306c515177",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c0a812752460d31d26bf4a338913faa7416f5b993ae6fd525ea1dbd4223456e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authorisation]]",
      "resolved": "urn:visionflow:linked:authorisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:linked:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Single Sign-On]]",
      "resolved": "urn:visionflow:linked:single-sign-on",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OAuth 2.0]]",
      "resolved": "urn:visionflow:linked:oauth-2-0",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:linked:identity-provider",
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
  - An open standard for delegated authorisation that allows a user to grant a third-party application limited access to resources without sharing their credentials.

- ### Semantic Classification
  - owl-class:: cryptographic:OAuth
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authorisation]]
  - bridges-to:: [[OAuth 2.0]], [[Identity Provider]]
  - requires:: [[Authorisation]], [[Access Control]]
  - enables:: [[Single Sign-On]]

- ### Content
  - OAuth is an authorisation framework that enables an application to obtain limited access to a user's resources held by another service, using access tokens rather than the user's password. The user authorises the access through a consent step.
  - By separating authentication from authorisation and issuing scoped, revocable tokens, OAuth reduces the exposure of credentials. The widely deployed OAuth 2.0 specification defines several grant types suited to different application architectures.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
