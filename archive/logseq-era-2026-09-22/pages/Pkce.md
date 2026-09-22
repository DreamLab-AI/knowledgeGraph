public:: true

# Pkce

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pkce", "@type":"Page", "title":"Pkce", "vc:slug":"pkce", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pkce",
  "@type": "Class",
  "label": "Pkce",
  "definition": "PKCE, Proof Key for Code Exchange, is an extension to the OAuth 2.0 authorisation code flow that protects public clients, such as mobile and single-page applications, against interception of the authorisation code. The client generates a secret code verifier and sends its hashed code challenge when requesting authorisation, then proves possession of the verifier when redeeming the code, so a stolen code cannot be exchanged for tokens. It is now recommended for all OAuth clients, not only public ones.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:oauth-2-0",
      "label": "OAuth 2.0"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
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
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
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
        "@id": "urn:ngm:class:bearer-token",
        "label": "Bearer Token"
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
        "@id": "urn:ngm:class:access-token",
        "label": "Access Token"
      },
      {
        "@id": "urn:ngm:class:refresh-token",
        "label": "Refresh Token"
      },
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
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
- [[Pkce]] hardens the [[OAuth 2.0]] authorisation code flow for public clients by binding the code to a secret verifier, using a hashed challenge built on [[Encryption]] to protect [[Authorization]].
- ### Overview
- PKCE prevents authorisation-code interception attacks against public OAuth clients.
- The client creates a random code verifier and derives a code challenge from it.
- The challenge is sent at authorisation; the verifier is sent at token exchange.
- Now recommended for all OAuth clients, it adds dynamic proof-of-possession without a client secret.
- ### Mechanisms
- Code verifier: a high-entropy random secret held by the client.
- Code challenge: typically the SHA-256 hash of the verifier, sent at authorisation.
- Binding: the authorisation server ties the issued code to the challenge.
- Redemption: the client reveals the verifier; the server checks it against the challenge.
- Defence: a stolen code is useless without the matching verifier.
- ### Applications
- Securing OAuth in mobile and native applications.
- Protecting single-page web applications without a client secret.
- Hardening all OAuth flows per current best practice.
- Enabling safe authorisation on devices with limited secret storage.
- ### Relationships
- uses:: [[OAuth 2.0]]
- uses:: [[Authorization]]
- hasPart:: [[Token]]
- implements:: [[Authorization]]
- enables:: [[Authentication]]
- requires:: [[Encryption]]
- dependsOn:: [[OAuth]]
- supports:: [[Single Sign-On]]
- contrastsWith:: [[Bearer Token]]
- bridgesTo:: [[Identity Provider]]
- standardizedBy:: [[Standards]]
- relatedTo:: [[Access Token]]
- relatedTo:: [[Refresh Token]]
- relatedTo:: [[OAuth]]
- relatedTo:: [[Authorization]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
