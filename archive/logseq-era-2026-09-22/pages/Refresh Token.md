public:: true

# Refresh Token

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:refresh-token", "@type":"Page", "title":"Refresh Token", "vc:slug":"refresh-token", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:refresh-token",
  "@type": "Class",
  "label": "Refresh Token",
  "definition": "A refresh token is a long-lived credential issued alongside a short-lived access token, used to obtain new access tokens without prompting the user to re-authenticate. By keeping access tokens short-lived and exchanging the refresh token at the authorisation server, systems limit the damage of a leaked access token while preserving a smooth user session. Refresh tokens are sensitive and typically bound, rotated, and revocable.",
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
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Session Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:session-management",
        "label": "Session Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authorization",
        "label": "Authorization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
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
- A [[Refresh Token]] is a long-lived [[Token]] that obtains new short-lived access tokens, supporting [[Session Management]] in [[OAuth 2.0]] without repeated [[Authentication]].
- ### Overview
- Refresh tokens let clients renew access without re-authenticating the user each time.
- They are paired with short-lived access tokens to bound the impact of token leakage.
- Because they are long-lived, they are guarded carefully and often rotated on use.
- They are central to maintaining sessions in OAuth and OpenID Connect flows.
- ### Mechanisms
- Issuance: granted with the access token after the authorisation flow.
- Exchange: presented to the authorisation server to mint fresh access tokens.
- Rotation: a new refresh token replaces the old one to detect replay.
- Binding: optionally tied to a client or device to limit theft value.
- Revocation: invalidated server-side to end a session immediately.
- ### Applications
- Keeping mobile and web sessions alive without frequent logins.
- Limiting blast radius by keeping access tokens short-lived.
- Supporting offline access for background processes.
- Detecting token theft through rotation and reuse detection.
- ### Relationships
- hasPart:: [[Token]]
- relatedTo:: [[Token]]
- relatedTo:: [[OAuth]]
- relatedTo:: [[Authentication]]
- relatedTo:: [[Session Management]]
- enables:: [[Session Management]]
- requires:: [[Authentication]]
- uses:: [[OAuth 2.0]]
- implements:: [[Authorization]]
- supports:: [[Single Sign-On]]
- dependsOn:: [[OAuth]]
- contrastsWith:: [[Bearer Token]]
- bridgesTo:: [[Identity Provider]]
- standardizedBy:: [[Standards]]
- ### Provenance
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
- updated:: 2026-06-15
