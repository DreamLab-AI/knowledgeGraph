public:: true

# Symmetric Cryptography

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:symmetric-cryptography",
  "@type": "Page",
  "title": "Symmetric Cryptography",
  "vc:slug": "symmetric-cryptography",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:symmetric-cryptography",
  "@type": "Class",
  "label": "Symmetric Cryptography",
  "definition": "Symmetric cryptography is a class of cryptographic techniques in which the same secret key is used for both encryption and decryption. It includes block ciphers and stream ciphers and underpins fast bulk data protection and authenticated encryption. Its security depends on keeping the shared key secret and on secure key distribution, which is often handled by asymmetric methods.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      },
      {
        "@id": "urn:ngm:class:authenticated-encryption",
        "label": "Authenticated Encryption"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:symmetric-key",
        "label": "Symmetric Key"
      },
      {
        "@id": "urn:ngm:class:aes-gcm",
        "label": "AES-GCM"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      },
      {
        "@id": "urn:ngm:class:cryptographic-algorithm",
        "label": "Cryptographic Algorithm"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-confidentiality",
        "label": "Data Confidentiality"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cryptographic-primitive",
        "label": "Cryptographic Primitive"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
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
  - Relates to [[Cryptography]]
  - Relates to [[Asymmetric Cryptography]]
  - Relates to [[Symmetric Key]]
  - Relates to [[Encryption]]
  - Relates to [[Key Management]]
- ### Overview
  - A single shared key both encrypts and decrypts, giving high throughput for bulk data.
  - Block ciphers operate on fixed-size blocks under modes such as GCM, while stream ciphers process data continuously.
  - Authenticated encryption combines confidentiality with integrity in one primitive.
  - Secure key establishment typically relies on asymmetric key exchange before symmetric data transfer.
- ### Key aspects
  - **Block ciphers** — Algorithms transform fixed-size blocks, with modes of operation extending them to arbitrary-length messages.
  - **Stream ciphers** — Keystream generators combine with plaintext for low-latency, byte-wise encryption.
  - **Authenticated encryption** — Modes such as AES-GCM provide confidentiality and integrity together, resisting tampering.
  - **Key management** — Generation, distribution, rotation and destruction of shared keys govern overall security.
- ### Applications
  - Bulk encryption of data at rest on disks and in databases.
  - Protecting payload confidentiality within TLS sessions after key exchange.
  - Securing messaging and file transfer with authenticated encryption.
  - Disk and volume encryption in operating systems and devices.
- ### Relationships
  - subClassOf:: [[Cryptography]]
  - contrastsWith:: [[Asymmetric Cryptography]]
  - contrastsWith:: [[Public Key Cryptography]]
  - implements:: [[Symmetric Encryption]]
  - implements:: [[Authenticated Encryption]]
  - hasPart:: [[Symmetric Key]]
  - hasPart:: [[AES-GCM]]
  - uses:: [[Cryptographic Key]]
  - uses:: [[Cryptographic Algorithm]]
  - dependsOn:: [[Key Management]]
  - dependsOn:: [[Key Exchange]]
  - supports:: [[Data Confidentiality]]
  - supports:: [[Encryption]]
  - relatedTo:: [[Cryptographic Primitive]]
  - relatedTo:: [[TLS]]
  - requires:: [[Random Number Generation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
