public:: true

# Public Key Cryptography

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:public-key-cryptography",
  "@type": "Page",
  "title": "Public Key Cryptography",
  "vc:slug": "public-key-cryptography",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:public-key-cryptography",
  "@type": "Class",
  "label": "Public Key Cryptography",
  "definition": "Public key cryptography is a class of cryptographic systems that use mathematically related key pairs, a public key that may be shared openly and a private key kept secret, so that data encrypted with one key can only be processed with the other. It removes the need to share a secret key in advance, enabling secure communication between parties who have never met. It underpins digital signatures, key exchange and the trust infrastructure of the modern internet.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:asymmetric-encryption",
        "label": "Asymmetric Encryption"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Encryption"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:verification",
        "label": "Verification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:certificate-authority",
        "label": "Certificate Authority"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:asymmetric-cryptography",
      "label": "Asymmetric Cryptography"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Public key cryptography is a class of cryptographic systems that use mathematically related key pairs, a public key that may be shared openly and a private key kept secret, so that data encrypted with one key can only be processed with the other. It removes the need to share a secret key in advance, enabling secure communication between parties who have never met. It underpins digital signatures, key exchange and the trust infrastructure of the modern internet.
  - Related concepts: [[Cryptography]] [[Digital Signature]] [[Key Exchange]] [[Asymmetric Encryption]] [[Symmetric Encryption]]
- ### Overview
  - Public Key Cryptography is situated within the [[Cryptography]] area of the security domain.
  - It connects a number of established concepts in the knowledge graph, anchoring edges that previously referenced it without a defining page.
- ### Key aspects
  - Cryptography (partOf)
  - Asymmetric Encryption (implements)
  - Hash Function (uses)
- ### Mechanisms
  - Operates through its relationships with [[Cryptography]] and [[Digital Signature]].
  - Provides capabilities consumed by dependent and enabled classes listed under Relationships.
- ### Applications
  - Supports [[Digital Signature]]
  - Supports [[Key Exchange]]
  - Supports [[Authentication]]
  - Supports [[Transport Layer Security]]
  - Supports [[Certificate Authority]]
  - Supports [[Trust]]
- ### Relationships
  - subClassOf:: [[Cryptography]]
  - partOf:: [[Cryptography]]
  - uses:: [[Hash Function]]
  - enables:: [[Digital Signature]]
  - enables:: [[Key Exchange]]
  - enables:: [[Authentication]]
  - implements:: [[Asymmetric Encryption]]
  - supports:: [[Transport Layer Security]]
  - supports:: [[Certificate Authority]]
  - supports:: [[Trust]]
  - requires:: [[Random Number Generation]]
  - contrastsWith:: [[Symmetric Encryption]]
  - bridgesTo:: [[Verification]]
  - relatedTo:: [[Encryption]]
  - relatedTo:: [[Certificate Authority]]
  - sameAs:: [[Asymmetric Cryptography]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
