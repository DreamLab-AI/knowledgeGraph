public:: true

# Key Pair
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:key-pair",
  "@type": "Page",
  "title": "Key Pair",
  "vc:slug": "key-pair",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:key-pair",
  "@type": "Class",
  "label": "Key Pair",
  "definition": "A Key Pair is the matched set of a public key and a corresponding private key used in asymmetric cryptography, where the two keys are mathematically related such that data encrypted or signed with one can only be processed with the other. The private key is kept secret by its owner, while the public key may be distributed openly, enabling encryption, digital signatures, and authentication without sharing a secret in advance. Key pairs underpin public-key infrastructure, blockchain wallets, secure messaging, and identity systems. Their security rests on the computational hardness of deriving the private key from the public key.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asymmetric-cryptography",
      "label": "Asymmetric Cryptography"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:key-generation",
        "label": "Key Generation"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      },
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
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
  - A [[Key Pair]] comprises a [[Public Key]] and a [[Private Key]] in [[Asymmetric Cryptography]], produced by [[Key Generation]] and enabling [[Digital Signature]], [[Encryption]], and [[Authentication]] without a pre-shared secret.

- ### Overview
  - A key pair is the atomic unit of asymmetric cryptography: two mathematically linked keys that separate the capability to sign or decrypt from the capability to verify or encrypt.
  - The asymmetry means the public key can be published freely while the private key, which confers control, must never be disclosed. Breaking the scheme requires solving a hard mathematical problem such as integer factorisation or the elliptic-curve discrete logarithm.
  - Key pairs are the basis of digital identity in modern systems: a blockchain address is derived from a public key, and control of the corresponding private key constitutes ownership.

- ### Mechanisms
  - Generation: a secure random process produces a private key, from which the public key is deterministically derived.
  - Signing and verification: the private key signs a message; anyone with the public key can verify authenticity and integrity.
  - Encryption: a sender encrypts to a recipient's public key so that only the holder of the private key can decrypt.
  - Protection: private keys are safeguarded by hardware security modules, secure enclaves, or seed-phrase backups.

- ### Applications
  - Blockchain wallets where the key pair controls on-chain assets.
  - TLS and secure messaging establishing confidential, authenticated channels.
  - Public-key infrastructure binding identities to public keys via certificates.

- ### Relationships
  - hasPart:: [[Public Key]]
  - hasPart:: [[Private Key]]
  - requires:: [[Key Generation]]
  - requires:: [[Elliptic Curve Cryptography]]
  - enables:: [[Digital Signature]]
  - enables:: [[Encryption]]
  - enables:: [[Authentication]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Cryptographic Key]]
  - supports:: [[Identity]]
  - supports:: [[Digital Wallet]]
  - dependsOn:: [[Key Management]]
  - implements:: [[Asymmetric Cryptography]]
  - relatedTo:: [[Seed Phrase]]
  - relatedTo:: [[Hardware Security Module]]
  - partOf:: [[Public-Key Cryptography]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
