public:: true

# Holder Binding
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:holder-binding",
  "@type": "Page",
  "title": "Holder Binding",
  "vc:slug": "holder-binding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:holder-binding",
  "@type": "Class",
  "label": "Holder Binding",
  "definition": "Holder binding is the cryptographic mechanism that ties a verifiable credential to the legitimate holder's controlled key material, ensuring that only the entity to whom a credential was issued can present it. It prevents credential theft and replay by requiring the presenter to prove possession of a private key bound to the credential at presentation time. Common realisations include key binding in SD-JWT and proof-of-possession challenges during presentation exchange.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-identifier",
      "label": "Decentralized Identifier"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:credential-verification",
        "label": "Credential Verification"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:tls-handshake",
        "label": "TLS Handshake"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:credential-issuance",
        "label": "Credential Issuance"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:did",
        "label": "DID"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
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
  - [[Holder Binding]] is a [[Security]] mechanism that cryptographically associates a [[Verifiable Credential]] with the holder's [[Decentralized Identifier]] and controlled keys, defended through [[Zero-Knowledge Proof]] and [[Authentication]] challenges.
- ### Overview
  - In decentralised identity systems, a credential is issued to a subject but must later be presented by that subject without impersonation. Holder binding closes the gap between issuance and presentation by demanding cryptographic proof that the presenter controls a key the credential was bound to.
  - It is central to standards such as SD-JWT key binding and OpenID for Verifiable Presentations, where a holder signs a presentation challenge nonce to demonstrate possession.
- ### Mechanisms
  - Key binding: embedding a public key (cnf claim) in the credential, with the holder proving possession of the matching private key.
  - Proof of possession: a fresh signed challenge (nonce + audience) produced at presentation to prevent replay.
  - Biometric or device binding: anchoring the holder key in secure hardware or a wallet enclave.
- ### Applications
  - Wallet-based credential presentation for digital identity, age verification and qualification proofs.
  - Anti-fraud controls preventing stolen or shared credentials from being usable by non-holders.
  - Regulated KYC and access flows requiring assurance that the presenter is the rightful subject.
- ### Relationships
  - enables:: [[Credential Verification]]
  - enables:: [[Selective Disclosure]]
  - hasPart:: [[Zero-Knowledge Proof]]
  - hasPart:: [[TLS Handshake]]
  - requires:: [[Decentralized Identifier]]
  - requires:: [[Authentication]]
  - dependsOn:: [[Public Key Infrastructure]]
  - uses:: [[Digital Certificate]]
  - supports:: [[Credential Issuance]]
  - supports:: [[Wallet]]
  - relatedTo:: [[DID]]
  - relatedTo:: [[Trust Framework]]
  - relatedTo:: [[Compliance]]
  - implements:: [[Authentication]]
- ### Provenance
  - updated:: 2026-06-15
  - generated-by:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
