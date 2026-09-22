public:: true

# Api Key Authentication

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:api-key-authentication", "@type":"Page", "title":"Api Key Authentication", "vc:slug":"api-key-authentication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:api-key-authentication",
  "@type": "Class",
  "label": "Api Key Authentication",
  "definition": "API key authentication is a simple scheme in which a client includes a static, secret key with each request to identify and authenticate itself to an API. The server checks the key against issued keys to grant or deny access and to attribute usage and rate limits. Although easy to adopt, it offers coarse-grained control and weaker security than token-based or signature-based schemes because the long-lived key alone confers access.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication",
      "label": "Authentication"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bearer-token",
        "label": "Bearer Token"
      },
      {
        "@id": "urn:ngm:class:mutual-tls",
        "label": "Mutual TLS"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
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
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
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
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "API"
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
- [[Api Key Authentication]] identifies a client by a static secret key on each request; it implements [[Authentication]] for an [[API]] but contrasts with stronger schemes like [[Bearer Token]] and [[Mutual TLS]].
- ### Overview
- API keys are static secrets issued to clients and sent with each API call.
- The server validates the key to authenticate the caller and meter usage.
- They are simple to integrate but provide coarse, long-lived access.
- Best practice scopes, rotates, and rate-limits keys and never embeds them in clients.
- ### Mechanisms
- Issuance: the provider generates a unique key per client or project.
- Transmission: the key is sent in a header, query, or body field over TLS.
- Validation: the server matches the key and applies quotas and scopes.
- Rotation: keys are periodically replaced to limit exposure.
- Limitations: no per-request proof of possession; theft equals access.
- ### Applications
- Authenticating server-to-server API calls.
- Metering and rate-limiting third-party API usage.
- Gating access to public data and SDK endpoints.
- Bootstrapping integrations before adopting stronger token flows.
- ### Relationships
- contrastsWith:: [[Bearer Token]]
- contrastsWith:: [[Mutual TLS]]
- implements:: [[Authentication]]
- uses:: [[Token]]
- enables:: [[API]]
- requires:: [[Encryption]]
- dependsOn:: [[Authentication]]
- supports:: [[Authorization]]
- bridgesTo:: [[Identity Provider]]
- standardizedBy:: [[Standards]]
- relatedTo:: [[OAuth]]
- relatedTo:: [[Token]]
- relatedTo:: [[API]]
- relatedTo:: [[Authorization]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
