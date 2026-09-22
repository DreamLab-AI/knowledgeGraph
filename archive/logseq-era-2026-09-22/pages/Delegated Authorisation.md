public:: true

# Delegated Authorisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:delegated-authorisation", "@type":"Page", "title":"Delegated Authorisation", "vc:slug":"delegated-authorisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:delegated-authorisation",
  "@type": "Class",
  "label": "Delegated Authorisation",
  "definition": "Delegated authorisation is the pattern in which a resource owner grants a third-party application limited access to their resources without sharing their credentials. An authorisation server issues scoped, often time-limited tokens that the application presents to the resource server, so access can be granted, constrained, and revoked independently of the owner's password. OAuth 2.0 is the dominant framework that implements this pattern across web and API ecosystems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:oauth-2-0",
      "label": "OAuth 2.0"
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
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      },
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
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
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
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
- [[Delegated Authorisation]] lets a resource owner grant a third party scoped access via tokens instead of credentials; [[OAuth 2.0]] implements it to support [[Single Sign-On]] and [[API]] access.
- ### Overview
- Delegated authorisation separates the act of granting access from sharing a password.
- An authorisation server mediates consent and issues scoped, revocable tokens.
- Applications act on the owner's behalf only within the granted scope and lifetime.
- OAuth 2.0 is the de facto framework realising this pattern for web and API access.
- ### Mechanisms
- Consent: the resource owner approves a specific scope of access.
- Token issuance: the authorisation server grants access and refresh tokens.
- Scope: fine-grained limits on what the delegated access can do.
- Revocation: access can be withdrawn without changing the owner's credentials.
- Separation of roles: distinct authorisation server, resource server, and client.
- ### Applications
- Allowing apps to access user data on platforms without passwords.
- Enabling single sign-on and federated identity flows.
- Granting service-to-service and machine-to-machine access.
- Powering OAuth-based API authorisation across ecosystems.
- ### Relationships
- enables:: [[Single Sign-On]]
- enables:: [[Federated Identity]]
- implements:: [[Authorization]]
- uses:: [[Token]]
- dependsOn:: [[Authorization]]
- dependsOn:: [[Identity Provider]]
- requires:: [[Authentication]]
- supports:: [[API]]
- contrastsWith:: [[Authentication]]
- bridgesTo:: [[Identity Provider]]
- standardizedBy:: [[Standards]]
- relatedTo:: [[OAuth]]
- relatedTo:: [[OAuth 2.0]]
- relatedTo:: [[Token]]
- relatedTo:: [[Authorization]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
