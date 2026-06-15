public:: true

# Decentralised Authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:decentralised-authentication",
  "@type": "Page",
  "title": "Decentralised Authentication",
  "vc:slug": "decentralised-authentication",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralised-authentication",
  "@type": "Class",
  "label": "Decentralised Authentication",
  "definition": "Decentralised authentication verifies the identity of a party without relying on a single central identity provider, instead using cryptographic keys, decentralised identifiers and verifiable credentials controlled by the user. The holder proves control of an identifier and presents credentials that a verifier checks against a distributed trust registry rather than a federated login service. This shifts control of identity from platforms to individuals while preserving cryptographic assurance.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication-protocol",
      "label": "Authentication Protocol"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity-ssi",
        "label": "Self-Sovereign Identity (SSI)"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decentralised-identifiers",
        "label": "Decentralised Identifiers"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:did-method",
        "label": "DID Method"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication-protocol",
        "label": "Authentication Protocol"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:trust-anchor",
        "label": "Trust Anchor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      },
      {
        "@id": "urn:ngm:class:web-authn",
        "label": "WebAuthn"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-identity",
        "label": "Centralised Identity"
      },
      {
        "@id": "urn:ngm:class:user-authentication",
        "label": "User Authentication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-identity",
        "label": "Blockchain Identity"
      },
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:decentralised-identifiers",
        "label": "Decentralised Identifiers"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
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
  - Decentralised authentication verifies the identity of a party without relying on a single central identity provider, instead using cryptographic keys, decentralised identifiers and verifiable credentials controlled by the user. The holder proves control of an identifier and presents credentials that a verifier checks against a distributed trust registry rather than a federated login service. This shifts control of identity from platforms to individuals while preserving cryptographic assurance.
  - Related concepts: [[Authentication Protocol]] [[Decentralised Identifiers]] [[Verifiable Credentials]] [[Self-Sovereign Identity (SSI)]] [[Decentralised Identity]]
- ### Overview
  - In decentralised authentication a user holds a decentralised identifier whose corresponding public key is published in a verifiable, often distributed, registry. To authenticate, the user signs a challenge or presents a verifiable credential; the verifier resolves the identifier's document, checks the signature and validates the credential's issuer against trusted anchors. No password is shared with the relying party and no central provider mediates the session, reducing phishing and single-point-of-failure risk.
- ### Mechanisms
  - Holder control of identifiers and signing keys
  - Decentralised identifier resolution to a DID document
  - Verifiable-credential issuance and presentation
  - Challenge-response proof of key control
  - Trust registries and anchors in place of federated providers
- ### Applications
  - Passwordless, phishing-resistant login
  - Cross-platform portable digital identity
  - Selective-disclosure credential presentation
  - Self-sovereign identity wallets and access control
- ### Relationships
  - subClassOf:: [[Authentication Protocol]]
  - enables:: [[Self-Sovereign Identity (SSI)]]
  - enables:: [[Decentralised Identity]]
  - uses:: [[Decentralised Identifiers]]
  - uses:: [[Verifiable Credentials]]
  - uses:: [[DID Method]]
  - implements:: [[Authentication Protocol]]
  - requires:: [[DID Document]]
  - requires:: [[Trust Anchor]]
  - supports:: [[Multi-Factor Authentication]]
  - supports:: [[WebAuthn]]
  - contrastsWith:: [[Centralised Identity]]
  - contrastsWith:: [[User Authentication]]
  - relatedTo:: [[Blockchain Identity]]
  - relatedTo:: [[OAuth 2.0]]
  - dependsOn:: [[Decentralised Identifiers]]
  - partOf:: [[Decentralised Identity]]
  - bridgesTo:: [[Verifiable Credentials]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
