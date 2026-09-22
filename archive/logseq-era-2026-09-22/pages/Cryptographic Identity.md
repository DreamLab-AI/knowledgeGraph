public:: true

# Cryptographic Identity

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:cryptographic-identity",
  "@type": "Page",
  "title": "Cryptographic Identity",
  "vc:slug": "cryptographic-identity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-identity",
  "@type": "Class",
  "label": "Cryptographic Identity",
  "definition": "Cryptographic identity is an identity model in which an actor is represented and authenticated through possession of a private key rather than through a centrally issued credential. Control of the corresponding public key — or an identifier derived from it — proves the actor's identity by producing verifiable digital signatures. This model underpins blockchain accounts, decentralized identifiers and self-sovereign identity, removing the need for a trusted registry to vouch for who someone is.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-identity",
      "label": "Decentralized Identity"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
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
  - [[Decentralized Identity]]
  - [[Public Key Cryptography]]
  - [[Digital Signature]]
  - [[Decentralized Identifier]]
  - Cryptographic Identity is defined within the [[Decentralized Identity]] area of the blockchain domain.
- ### Overview
  - Cryptographic identity inverts the conventional trust relationship: instead of a directory asserting an identity, the holder demonstrates control of a secret. A challenge-response over a digital signature proves key possession without revealing the key, and an address derived from the public key by hashing serves as a stable, pseudonymous handle. The model gives individuals direct custody of their identity but shifts the burden of security to key management — loss or compromise of the private key is equivalent to loss or theft of the identity itself.
- ### Mechanisms
  - Key-pair binding where the private key is the secret and the public key (or its hash) is the public identifier.
  - Signature-based proof of possession that authenticates without disclosing the key.
  - Address derivation through hashing to produce compact, pseudonymous identifiers.
  - Self-custody, placing responsibility for backup and recovery on the holder.
  - Composability with decentralized identifiers and verifiable credentials for richer claims.
- ### Applications
  - Blockchain account ownership and transaction authorisation.
  - Decentralized identity and self-sovereign identity wallets.
  - Passwordless authentication using key-pair challenge-response.
  - Pseudonymous reputation and signing in peer-to-peer networks.
- ### Relationships
  - subClassOf:: [[Decentralized Identity]]
  - partOf:: [[Decentralized Identity]]
  - partOf:: [[Digital Identity]]
  - requires:: [[Public Key Cryptography]]
  - requires:: [[Digital Signature]]
  - dependsOn:: [[Key Management]]
  - dependsOn:: [[Public Key Cryptography]]
  - enables:: [[Decentralized Identifier]]
  - enables:: [[Authentication]]
  - uses:: [[Hash Function]]
  - uses:: [[Digital Signature]]
  - implements:: [[Authentication]]
  - supports:: [[Identity Verification]]
  - supports:: [[Wallet]]
  - relatedTo:: [[Decentralized Identifier]]
  - relatedTo:: [[Trust]]
  - contrastsWith:: [[Identity Verification]]
  - bridgesTo:: [[Digital Identity]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
