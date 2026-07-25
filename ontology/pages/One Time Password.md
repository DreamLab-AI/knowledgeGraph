public:: true

# One Time Password
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:one-time-password",
  "@type": "Page",
  "title": "One Time Password",
  "vc:slug": "one-time-password",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:one-time-password",
  "@type": "Class",
  "label": "One Time Password",
  "definition": "A one-time password (OTP) is a credential that is valid for only a single login session or transaction, mitigating the risk of credential replay associated with static passwords. OTPs are typically generated from a shared secret combined with a moving factor — either a counter (HOTP) or the current time (TOTP) — using an HMAC construction, and delivered through authenticator apps, hardware tokens, or out-of-band channels such as SMS. While OTPs strengthen authentication as a second factor, they remain susceptible to real-time phishing, in contrast to origin-bound phishing-resistant methods.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-factor-authentication",
      "label": "Multi-Factor Authentication"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:hmac",
        "label": "HMAC"
      },
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hmac",
        "label": "HMAC"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:passwordless-authentication",
        "label": "Passwordless Authentication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-generation",
        "label": "Key Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:modular-arithmetic",
        "label": "Modular Arithmetic"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - A one-time password (OTP) is a credential that is valid for only a single login session or transaction, mitigating the risk of credential replay associated with static passwords. OTPs are typically generated from a shared secret combined with a moving factor — either a counter (HOTP) or the current time (TOTP) — using an HMAC construction, and delivered through authenticator apps, hardware tokens, or out-of-band channels such as SMS. While OTPs strengthen authentication as a second factor, they remain susceptible to real-time phishing, in contrast to origin-bound phishing-resistant methods.
  - [[Multi-Factor Authentication]] [[HMAC]] [[Hash Function]] [[Nonce]] [[Authentication]]
- ### Overview
  - One-time passwords introduce a moving factor so that an intercepted code cannot be reused. HOTP advances a counter on each generation, while TOTP derives the code from the current time divided into fixed intervals, both feeding an HMAC of the moving factor under a shared secret and truncating the output to a short numeric code. Synchronisation tolerance handles clock drift and counter desynchronisation, but because the code is a transferable secret, an attacker who relays it in real time can still defeat the scheme.
- ### Mechanisms
  - Shared secret seed provisioned to the authenticator
  - Moving factor: counter (HOTP) or time interval (TOTP)
  - HMAC computation over the moving factor with truncation
  - Time-window or counter tolerance for clock and sync drift
  - Delivery via authenticator apps, hardware tokens, or SMS
- ### Applications
  - Second factor in multi-factor authentication
  - Authenticator-app sign-in codes
  - Hardware OTP tokens for enterprise access
  - Transaction confirmation in banking
- ### Relationships
  - hasPart:: [[HMAC]]
  - hasPart:: [[Nonce]]
  - uses:: [[HMAC]]
  - uses:: [[Hash Function]]
  - implements:: [[Multi-Factor Authentication]]
  - contrastsWith:: [[Passwordless Authentication]]
  - requires:: [[Key Generation]]
  - enables:: [[Authentication]]
  - dependsOn:: [[Modular Arithmetic]]
  - relatedTo:: [[Authentication]]
  - relatedTo:: [[Digital Signature]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
