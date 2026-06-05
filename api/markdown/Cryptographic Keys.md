public:: true

# Cryptographic Keys
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af3eafe16f32cfabaf5a871aef9b7d3c6415310cdd9b9e4a18596fd3c054c5d0",
  "@type": "Page",
  "vc:slug": "cryptographic-keys",
  "title": "Cryptographic Keys",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:asymmetric-encryption",
      "vc:label": "Asymmetric Encryption"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-key-management",
      "vc:label": "Cryptographic Key Management"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:key-derivation-function",
      "vc:label": "Key Derivation Function"
    },
    {
      "@id": "urn:visionflow:owl:class:random-number-generation",
      "vc:label": "Random Number Generation"
    },
    {
      "@id": "urn:visionflow:owl:class:symmetric-encryption",
      "vc:label": "Symmetric Encryption"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-7006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Keys"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-keys",
  "@type": "Class",
  "label": "Cryptographic Keys",
  "definition": "Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-keys:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:af3eafe16f32cfabaf5a871aef9b7d3c6415310cdd9b9e4a18596fd3c054c5d0"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asymmetric Encryption]]",
      "resolved": "urn:visionflow:owl:class:asymmetric-encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Key Management]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:owl:class:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:owl:class:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Derivation Function]]",
      "resolved": "urn:visionflow:owl:class:key-derivation-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Random Number Generation]]",
      "resolved": "urn:visionflow:owl:class:random-number-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Symmetric Encryption]]",
      "resolved": "urn:visionflow:owl:class:symmetric-encryption",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Strings of data used in cryptographic algorithms to encrypt, decrypt, sign, or verify data, serving as the secret parameters that transform plaintext to ciphertext and vice versa. Keys can be symmetric (single shared key) or asymmetric (public-private key pairs), with security depending on key length, randomness, and proper management.

- ### Semantic Classification
  - owl-class:: blockchain:CryptographicKeys
  - owl-role:: Concept
  - belongs-to-domain:: [[Cryptography]]

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - enables:: [[Digital Signature]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  ## Definition

  A cryptographic key is a string of data used to encrypt data (to keep the data secret), decrypt data (to perform the reverse operation), sign data (to ensure authenticity), or verify a signature. The security of any cryptographic system fundamentally depends on the secrecy, randomness, and proper management of its keys.

  ## Key Types

  ### By Encryption Method

  #### Symmetric Keys
  - Single key used for both encryption and decryption
  - Must be shared securely between all parties
  - Faster and more efficient for bulk data encryption
  - Common algorithms: AES, ChaCha20, 3DES
  - Typical sizes: 128, 192, or 256 bits

  #### Asymmetric Keys (Public-Key Pairs)
  - Mathematically related pair: public key and private key
  - Public key encrypts data or verifies signatures
  - Private key decrypts data or creates signatures
  - No need to share private key, reducing exposure risk
  - Common algorithms: RSA, ECC, Ed25519
  - Typical sizes: 2048-4096 bits (RSA), 256-384 bits (ECC)

  ### By Function

  - **Encryption Keys**: Transform plaintext to ciphertext
  - **Decryption Keys**: Reverse the encryption process
  - **Signing Keys**: Create digital signatures (typically private keys)
  - **Verification Keys**: Verify digital signatures (typically public keys)
  - **Master Keys**: Root keys from which other keys are derived
  - **Session Keys**: Temporary keys for single communication session
  - **Key Encryption Keys (KEK)**: Keys used to encrypt other keys

  ## Security Properties

  | Property | Symmetric Keys | Asymmetric Keys |
  |----------|---------------|-----------------|
  | Key Size for Equivalent Security | 128-bit | 2048-bit (RSA) |
  | Speed | Very fast | Slower |
  | Key Distribution | Challenging | Easier (public key shareable) |
  | Use Case | Bulk encryption | Key exchange, signatures |

  ## Blockchain Applications

  - **Private Keys**: Control access to blockchain addresses and funds
  - **Public Keys**: Derive addresses and verify transaction signatures
  - **HD Wallet Keys**: Hierarchically derived from master seed
  - **Multi-sig Keys**: Multiple keys required for transaction authorization

  ## Key Generation Requirements

  - High-entropy random number source (CSPRNG)
  - Sufficient key length for target security level
  - Algorithm-specific generation procedures
  - Protection against side-channel leakage during generation

  ## Hybrid Encryption

  Modern systems often combine both key types:
  1. Asymmetric encryption exchanges a symmetric session key
  2. Symmetric encryption handles bulk data (faster)
  3. Example: TLS/SSL in HTTPS communications

  ## Relationships
  - managed-by:: [[Cryptographic Key Management]]
  - generated-by:: [[Random Number Generation]]
  - derived-by:: [[Key Derivation Function]]
  - used-in:: [[Symmetric Encryption]]
  - used-in:: [[Asymmetric Encryption]]
  - enables:: [[Digital Signature]]
  - is-subclass-of:: [[Cryptography]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
