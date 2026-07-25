public:: true

# Access Token

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:access-token", "@type":"Page", "title":"Access Token", "vc:slug":"access-token", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:access-token",
  "@type": "Class",
  "label": "Access Token",
  "definition": "An access token is a credential that a client presents to a resource server to access protected resources within a granted scope and lifetime. Typically short-lived and often a bearer token, it carries or references the authorisation decision so the resource server need not re-check with the authorisation server on every request. Access tokens are the workhorse credential of OAuth 2.0 and API authorisation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:oauth-2-0",
      "label": "OAuth 2.0"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:bearer-token",
        "label": "Bearer Token"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:refresh-token",
        "label": "Refresh Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      },
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Session Management"
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
- An [[Access Token]] is a scoped, short-lived [[Token]] presented to a resource server to access an [[API]]; it implements [[Authorization]] in [[OAuth 2.0]], often as a [[Bearer Token]].
- ### Overview
- Access tokens authorise specific operations on protected resources within a scope.
- They are usually short-lived to limit exposure if intercepted.
- As bearer tokens, possession alone grants access, so transport security is essential.
- They may be opaque references or self-contained JWTs carrying claims.
- ### Mechanisms
- Scope: encodes the permissions the token grants.
- Lifetime: short expiry bounds the risk window.
- Validation: resource servers verify signature, expiry, audience, and scope.
- Format: opaque (introspected) or structured (self-validating JWT).
- Pairing: issued with a refresh token to renew access seamlessly.
- ### Applications
- Authorising calls to REST and GraphQL APIs.
- Granting third-party apps scoped access in OAuth flows.
- Service-to-service authorisation in microservices.
- Carrying identity and permission claims to resource servers.
- ### Relationships
- hasPart:: [[Token]]
- uses:: [[OAuth 2.0]]
- uses:: [[Bearer Token]]
- implements:: [[Authorization]]
- enables:: [[API]]
- requires:: [[Authentication]]
- dependsOn:: [[OAuth]]
- supports:: [[Single Sign-On]]
- contrastsWith:: [[Refresh Token]]
- bridgesTo:: [[Identity Provider]]
- standardizedBy:: [[Standards]]
- relatedTo:: [[Token]]
- relatedTo:: [[OAuth]]
- relatedTo:: [[Authorization]]
- relatedTo:: [[Session Management]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
