public:: true

# Phishing Resistant Authentication
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:phishing-resistant-authentication",
  "@type": "Page",
  "title": "Phishing Resistant Authentication",
  "vc:slug": "phishing-resistant-authentication",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:phishing-resistant-authentication",
  "@type": "Class",
  "label": "Phishing Resistant Authentication",
  "definition": "Phishing-resistant authentication is a class of authentication methods designed so that credentials cannot be captured and replayed by an attacker who tricks a user into interacting with a fraudulent site or relay. It achieves this primarily through public-key cryptography combined with origin binding, so that a credential is cryptographically tied to the legitimate service's domain and will not authenticate to an impostor. FIDO2/WebAuthn passkeys and hardware security keys are the canonical implementations, replacing shared secrets such as passwords and one-time codes that remain vulnerable to interception.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication",
      "label": "Authentication"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:passwordless-authentication",
        "label": "Passwordless Authentication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:fido2",
        "label": "FIDO2"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-generation",
        "label": "Key Generation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:fido-alliance",
        "label": "FIDO Alliance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:passwordless-authentication",
        "label": "Passwordless Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
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
  - Phishing-resistant authentication is a class of authentication methods designed so that credentials cannot be captured and replayed by an attacker who tricks a user into interacting with a fraudulent site or relay. It achieves this primarily through public-key cryptography combined with origin binding, so that a credential is cryptographically tied to the legitimate service's domain and will not authenticate to an impostor. FIDO2/WebAuthn passkeys and hardware security keys are the canonical implementations, replacing shared secrets such as passwords and one-time codes that remain vulnerable to interception.
  - [[Authentication]] [[Public Key Cryptography]] [[Multi-Factor Authentication]] [[FIDO2]] [[Digital Signature]]
- ### Overview
  - Phishing-resistant authentication addresses the dominant failure mode of credential-based systems: even strong passwords and one-time codes can be harvested by convincing fake sites or real-time relay proxies. By binding a cryptographic key pair to a specific web origin, schemes like WebAuthn ensure that the authenticator refuses to produce a valid assertion for any domain other than the one for which the credential was registered. The private key never leaves the authenticator, so there is no shared secret to steal in transit or at rest on the server.
- ### Mechanisms
  - Public-key credentials with the private key held in the authenticator
  - Origin binding that scopes credentials to a specific domain
  - Challenge-response signing to prevent replay
  - Hardware-backed or platform-backed key storage
  - User presence and verification gestures (biometric, PIN, touch)
- ### Applications
  - Passkey sign-in for consumer and enterprise accounts
  - Hardware security keys for high-assurance access
  - Passwordless workforce authentication
  - Protection against real-time phishing and adversary-in-the-middle attacks
- ### Relationships
  - enables:: [[Passwordless Authentication]]
  - implements:: [[Public Key Cryptography]]
  - implements:: [[Multi-Factor Authentication]]
  - uses:: [[FIDO2]]
  - uses:: [[Digital Signature]]
  - uses:: [[Authentication]]
  - requires:: [[Key Generation]]
  - dependsOn:: [[Elliptic Curve Cryptography]]
  - standardizedBy:: [[FIDO Alliance]]
  - contrastsWith:: [[Passwordless Authentication]]
  - supports:: [[Authentication]]
  - relatedTo:: [[Nonce]]
- ### Provenance
  - This class was materialised to resolve inbound references from existing classes in the knowledge graph.
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
