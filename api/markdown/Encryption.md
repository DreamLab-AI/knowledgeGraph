public:: true

# encryption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bf86075ceab2af34c4bf04695936f6522b383cee6b0d377a410b470499ab5485",
  "@type": "Page",
  "vc:slug": "encryption",
  "title": "encryption",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:encryption",
  "@type": "Class",
  "label": "Encryption",
  "definition": "Encryption is the cryptographic process of transforming plaintext data into ciphertext using a defined algorithm and key, such that only parties possessing the correct decryption key can recover the original information, thereby ensuring confidentiality. Symmetric encryption schemes (such as AES-GCM) use a shared secret key for both encryption and decryption, while asymmetric schemes (such as RSA-OAEP) use mathematically linked key pairs. Encryption operates at multiple layers of modern infrastructure—at rest in storage systems, in transit via TLS, and at the application layer in end-to-end encrypted messaging protocols.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"},
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-protection", "label": "Data Protection"},
      {"@id": "urn:ngm:class:confidential-computing", "label": "Confidential Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zero-knowledge", "label": "Zero Knowledge"},
      {"@id": "urn:ngm:class:privacy", "label": "Privacy"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Encryption is the cryptographic process of transforming plaintext data into ciphertext using a defined algorithm and key, such that only parties possessing the correct decryption key can recover the original information, thereby ensuring confidentiality. Symmetric encryption schemes (such as AES-GCM) use a shared secret key for both encryption and decryption, while asymmetric schemes (such as RSA-OAEP) use mathematically linked key pairs. Encryption operates at multiple layers of modern infrastructure—at rest in storage systems, in transit via TLS, and at the application layer in end-to-end encrypted messaging protocols.

- ### Semantic Classification
  - owl-class:: encryption:Encryption
  - owl-role:: Concept

- ### Relationships
  - requires [[Key Management]]
  - requires [[Cryptography]]
  - enables [[Data Protection]]
  - enables [[Confidential Computing]]
  - relatedTo [[Zero Knowledge]]
  - relatedTo [[Privacy]]

- ### Content
  - Encryption is the primary technical mechanism for implementing confidentiality in information systems. The Advanced Encryption Standard (AES), standardised by NIST in FIPS 197, is the dominant symmetric cipher for bulk data encryption; the GCM mode of operation additionally provides authenticated encryption with associated data (AEAD), combining confidentiality and integrity guarantees in a single operation.
  - Transport Layer Security (TLS 1.3) uses a hybrid approach: asymmetric key exchange (ECDH or X25519) establishes a shared session key between communicating parties, after which symmetric AES-GCM encryption protects the data stream. This hybrid model exploits the efficiency of symmetric ciphers for bulk data while using asymmetric cryptography only for the computationally cheap key exchange phase.
  - End-to-end encryption (E2EE) extends confidentiality so that service operators cannot access message content—only the communicating endpoints hold decryption keys. Protocols such as the Signal Protocol implement E2EE with forward secrecy and break-in recovery properties through ratcheting key derivation. Confidential computing extends encryption into the execution domain through hardware-enforced trusted execution environments (TEEs), such as Intel TDX and AMD SEV, enabling data to remain encrypted even during processing. Post-quantum cryptography—standardised in NIST FIPS 203 and 204 with algorithms CRYSTALS-Kyber and CRYSTALS-Dilithium—addresses the threat that quantum computers pose to current asymmetric schemes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
