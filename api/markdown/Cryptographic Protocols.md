public:: true

# Cryptographic Protocols
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:25833591468e53f237f9628ca7a67bd29b56fe8e43ef23ebb30274cefbaf44cd",
  "@type": "Page",
  "vc:slug": "cryptographic-protocols",
  "title": "Cryptographic Protocols",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:kerberos",
      "vc:label": "Kerberos"
    },
    {
      "@id": "urn:visionflow:linked:network-security",
      "vc:label": "Network Security"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-cryptographic-protocol",
      "vc:label": "https://en.wikipedia.org/wiki/Cryptographic_protocol"
    },
    {
      "@id": "urn:visionflow:linked:https-csrc-nist-gov",
      "vc:label": "https://csrc.nist.gov/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Protocols"
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
  "@id": "urn:ngm:class:cryptographic-protocols",
  "@type": "Class",
  "label": "Cryptographic Protocols",
  "definition": "Cryptographic protocols are sequences of operations using cryptographic primitives to achieve security goals such as confidentiality, integrity and authentication.",
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
    "requires": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:digital-signatures",
        "label": "Digital Signatures"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-functions",
        "label": "Cryptographic Hash Functions"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:kerberos",
        "label": "Kerberos"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:tls-transport-layer-security",
        "label": "TLS (Transport Layer Security)"
      },
      {
        "@id": "urn:ngm:class:ssh-secure-shell",
        "label": "SSH (Secure Shell)"
      },
      {
        "@id": "urn:ngm:class:ipsec",
        "label": "IPsec"
      },
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proofs",
        "label": "Zero-Knowledge Proofs"
      },
      {
        "@id": "urn:ngm:class:message-authentication-codes",
        "label": "Message Authentication Codes"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:symmetric-key-cryptography",
        "label": "Symmetric Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:asymmetric-key-cryptography",
        "label": "Asymmetric Key Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
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
        "@id": "urn:ngm:class:obfuscation",
        "label": "Obfuscation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:security-protocols",
      "label": "Security Protocols"
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
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-protocols:9102b388b1d1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:25833591468e53f237f9628ca7a67bd29b56fe8e43ef23ebb30274cefbaf44cd"
  },
  "vc:resolutions": [
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Kerberos]]",
      "resolved": "urn:visionflow:linked:kerberos",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Security]]",
      "resolved": "urn:visionflow:linked:network-security",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Cryptographic_protocol]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-cryptographic-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://csrc.nist.gov/]]",
      "resolved": "urn:visionflow:linked:https-csrc-nist-gov",
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
  - Cryptographic protocols are sequences of operations using cryptographic primitives to achieve security goals such as confidentiality, integrity and authentication.

- ### Semantic Classification
  - owl-class:: distributed-systems:CryptographicProtocols
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - bridges-to:: [[Network Security]]
  - requires:: [[Encryption]]
  - enables:: [[Kerberos]]

- ### Content
  - Cryptographic protocols combine primitives such as encryption, digital signatures and key exchange into structured exchanges between parties. They define message order, validation steps and the security properties expected to hold.
  - Examples include key establishment, authentication and secure channel protocols. Formal analysis is used to verify that intended properties survive adversarial conditions such as message interception or replay.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Cryptographic_protocol]], [[https://csrc.nist.gov/]]
  - migration-date:: 2026-05-29T00:00:00Z
