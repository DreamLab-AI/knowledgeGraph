public:: true

# Cryptographic Key
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b894413392657ae5acc21d62b8c291bb544fbdfd1f6590857efe3bf95ae1f340",
  "@type": "Page",
  "vc:slug": "cryptographic-key",
  "title": "Cryptographic Key",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:public-key-infrastructure",
      "vc:label": "Public Key Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:https-csrc-nist-gov-glossary-term-cryptographic-key",
      "vc:label": "https://csrc.nist.gov/glossary/term/cryptographic_key"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Key"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptographic-key",
  "@type": "Class",
  "label": "Cryptographic Key",
  "definition": "A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key",
        "label": "Public Key"
      },
      {
        "@id": "urn:ngm:class:symmetric-key",
        "label": "Symmetric Key"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      },
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptographic-algorithm",
        "label": "Cryptographic Algorithm"
      },
      {
        "@id": "urn:ngm:class:entropy-source",
        "label": "Entropy Source"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:asymmetric-cryptography",
        "label": "Asymmetric Cryptography"
      },
      {
        "@id": "urn:ngm:class:symmetric-cryptography",
        "label": "Symmetric Cryptography"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:password",
        "label": "Password"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:cipher-key",
      "label": "Cipher Key"
    },
    {
      "@id": "urn:ngm:class:secret-key",
      "label": "Secret Key"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-key:b00a39e87803",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b894413392657ae5acc21d62b8c291bb544fbdfd1f6590857efe3bf95ae1f340"
  },
  "vc:resolutions": [
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Public Key Infrastructure]]",
      "resolved": "urn:visionflow:linked:public-key-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:linked:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://csrc.nist.gov/glossary/term/cryptographic_key]]",
      "resolved": "urn:visionflow:linked:https-csrc-nist-gov-glossary-term-cryptographic-key",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A piece of secret or public information that parameterises a cryptographic algorithm, determining how data is encrypted, decrypted or signed. Keys are the inputs that make cryptographic operations specific and reversible only to authorised parties.

- ### Semantic Classification
  - owl-class:: cryptographic:CryptographicKey
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Private Key]], [[Key Management]]
  - requires:: [[Encryption]]
  - enables:: [[Digital Signature]], [[Public Key Infrastructure]]

- ### Content
  - A cryptographic key controls the behaviour of an algorithm so that the same operation produces different results for different keys. Symmetric schemes use one shared key for both encryption and decryption, while asymmetric schemes use a paired public and private key.
  - The security of a cryptographic system depends on the secrecy of private or symmetric keys and on sufficient key length to resist exhaustive search. Generation, storage, distribution and revocation of keys are handled by key management processes and supporting infrastructure.

- ### Current Landscape (2026)
  - The dominant shift is the transition of key material to post-quantum schemes: on 13 August 2024 NIST finalised FIPS 203 (ML-KEM, ex-CRYSTALS-Kyber) for key encapsulation, alongside FIPS 204 (ML-DSA) and FIPS 205 (SLH-DSA) for signatures, driven by the "harvest now, decrypt later" threat to long-lived key-protected data.
  - Hybrid key agreement X25519MLKEM768 (TLS code point 0x11EC, RFC 9794) is now the de-facto production default: enabled by default in Chrome 124+, Firefox 132, Edge, and Safari 18, and shipped natively in OpenSSL 3.5 (April 2025); Cloudflare Radar telemetry in early 2026 shows 30-50% of TLS 1.3 handshakes negotiating it.
  - Key players and adoption span cloud and platform vendors: Cloudflare (default at the edge since 2024, plus origin-facing ML-DSA via Authenticated Origin Pulls in 2026), AWS (hybrid PQC on ALB, API Gateway and CloudFront), Apple (iMessage PQ3, 2024), Signal, and Microsoft, which shipped ML-DSA support to Active Directory Certificate Services via KB5087539 in May 2026.
  - Regulatory momentum hardened materially in 2026: US Executive Order 14412 and OMB memorandum M-26-15 (June 2026) set a five-phase plan requiring PQC key establishment for high-value/high-impact systems by 31 December 2030 and signatures by 31 December 2031, with agency migration plans due around 22 October 2026.
  - NSA's CNSA 2.0 mandates ML-KEM-1024 and ML-DSA-87 for national security systems, requiring new acquisitions to support CNSA 2.0 from 1 January 2027 and native support in all new key-management and PKI systems by end of 2026, with RSA/ECC key generation deprecated by 2030 and retired by 2033.
  - NIST IR 8547 (initial public draft, November 2024) proposes deprecating 112-bit RSA/ECC keys after 2030 and disallowing quantum-vulnerable public-key algorithms by 2035; SP 800-133r3 on cryptographic key generation was in public draft through June 2026.
  - Open challenges as of 2026: the authentication layer lags badly (measurement studies show roughly 0% adoption of hybrid PQC certificates while about half of domains already do hybrid key exchange), FIPS 206 (FN-DSA/Falcon) remains undrafted, HQC was selected in March 2025 as a code-based backup KEM targeting a 2027 standard, and new lattice-attack results (May 2025-March 2026) cutting the qubit estimate to break RSA-2048 below roughly 100,000 pushed some vendors to pull key-migration deadlines toward 2029-2030.

- ### References
  - 1. NIST (2024). NIST Releases First 3 Finalized Post-Quantum Encryption Standards (FIPS 203/204/205). https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards
  - 2. NIST (2024). NIST IR 8547 (Initial Public Draft): Transition to Post-Quantum Cryptography Standards. https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf
  - 3. Cloudflare (2025). The state of the post-quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 4. Affix (2026). TLS 1.3 Hybrid Post-Quantum Deployment: A Production Guide for 2026. https://www.affix-io.com/whitepapers/tls-hybrid-pqc-deployment/
  - 5. PostQuantum.com (2026). US Federal PQC Mandate After June 2026 (EO 14412, OMB M-26-15). https://postquantum.com/post-quantum/us-federal-pqc-mandate-2026/
  - 6. Quantum Security Defence (2026). CNSA 2.0 vs CNSA 1.0 Quantum Key Management: 2026-2027 Deadlines. https://quantumsecuritydefence.com/insights/cnsa-2-vs-1-quantum-key-management/

- ### Provenance
  - sources:: [[https://csrc.nist.gov/glossary/term/cryptographic_key]]
  - migration-date:: 2026-05-29T00:00:00Z
