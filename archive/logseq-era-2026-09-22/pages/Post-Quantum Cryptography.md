public:: true
alias:: Post-Quantum-Cryptography

# Post-Quantum Cryptography
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8104dd00535d5641d69425c570d930953a4a2cbc2f31bc2b817929d6031dba0b",
  "@type": "Page",
  "vc:slug": "post-quantum-cryptography",
  "title": "Post-Quantum Cryptography",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:algorithm-implementation",
      "vc:label": "Algorithm Implementation"
    },
    {
      "@id": "urn:visionflow:linked:code-based-cryptography",
      "vc:label": "Code-Based Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:computational-complexity-theory",
      "vc:label": "Computational Complexity Theory"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-infrastructure",
      "vc:label": "Cryptographic Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:hash-based-signatures",
      "vc:label": "Hash-Based Signatures"
    },
    {
      "@id": "urn:visionflow:linked:isogeny-based-cryptography",
      "vc:label": "Isogeny-Based Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:lattice-based-cryptography",
      "vc:label": "Lattice-Based Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:long-term-data-protection",
      "vc:label": "Long-Term Data Protection"
    },
    {
      "@id": "urn:visionflow:linked:multivariate-cryptography",
      "vc:label": "Multivariate Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:nist-pq-standard-2024",
      "vc:label": "NIST PQ Standard (2024)"
    },
    {
      "@id": "urn:visionflow:linked:quantum-resistant-encryption",
      "vc:label": "Quantum-Resistant Encryption"
    },
    {
      "@id": "urn:visionflow:linked:secure-key-exchange",
      "vc:label": "Secure Key Exchange"
    },
    {
      "@id": "urn:visionflow:linked:security-protocol",
      "vc:label": "Security Protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-key-management",
      "vc:label": "Cryptographic Key Management"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signatures",
      "vc:label": "Digital Signatures"
    },
    {
      "@id": "urn:visionflow:owl:class:mathematical-hard-problems",
      "vc:label": "Mathematical Hard Problems"
    },
    {
      "@id": "urn:visionflow:owl:class:network-layer",
      "vc:label": "Network Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:physical-layer",
      "vc:label": "Physical Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:random-number-generation",
      "vc:label": "Random Number Generation"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20210"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Post-Quantum Cryptography"
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
  "@id": "urn:ngm:class:post-quantum-cryptography",
  "@type": "Class",
  "label": "Post-Quantum Cryptography",
  "definition": "Cryptographic algorithms and protocols designed to be resistant to attacks from both classical and quantum computers, protecting secure communications in the post-quantum era.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:lattice-cryptography",
        "label": "Lattice-Based Cryptography"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm Implementation"
      },
      {
        "@id": "urn:ngm:class:cryptographic-key-management",
        "label": "Cryptographic Key Management"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Secure Key Exchange"
      },
      {
        "@id": "urn:ngm:class:digital-signatures",
        "label": "Digital Signatures"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptographic-infrastructure",
        "label": "Cryptographic Infrastructure"
      },
      {
        "@id": "urn:ngm:class:security-protocol",
        "label": "Security Protocol"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:post-quantum-cryptography:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8104dd00535d5641d69425c570d930953a4a2cbc2f31bc2b817929d6031dba0b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Algorithm Implementation]]",
      "resolved": "urn:visionflow:linked:algorithm-implementation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Code-Based Cryptography]]",
      "resolved": "urn:visionflow:linked:code-based-cryptography",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computational Complexity Theory]]",
      "resolved": "urn:visionflow:linked:computational-complexity-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Infrastructure]]",
      "resolved": "urn:visionflow:linked:cryptographic-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hash-Based Signatures]]",
      "resolved": "urn:visionflow:linked:hash-based-signatures",
      "kind": "StubLink"
    },
    {
      "raw": "[[Isogeny-Based Cryptography]]",
      "resolved": "urn:visionflow:linked:isogeny-based-cryptography",
      "kind": "StubLink"
    },
    {
      "raw": "[[Lattice-Based Cryptography]]",
      "resolved": "urn:visionflow:linked:lattice-based-cryptography",
      "kind": "StubLink"
    },
    {
      "raw": "[[Long-Term Data Protection]]",
      "resolved": "urn:visionflow:linked:long-term-data-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multivariate Cryptography]]",
      "resolved": "urn:visionflow:linked:multivariate-cryptography",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST PQ Standard (2024)]]",
      "resolved": "urn:visionflow:linked:nist-pq-standard-2024",
      "kind": "StubLink"
    },
    {
      "raw": "[[Quantum-Resistant Encryption]]",
      "resolved": "urn:visionflow:linked:quantum-resistant-encryption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Secure Key Exchange]]",
      "resolved": "urn:visionflow:linked:secure-key-exchange",
      "kind": "StubLink"
    },
    {
      "raw": "[[Security Protocol]]",
      "resolved": "urn:visionflow:linked:security-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Key Management]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signatures]]",
      "resolved": "urn:visionflow:owl:class:digital-signatures",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mathematical Hard Problems]]",
      "resolved": "urn:visionflow:owl:class:mathematical-hard-problems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Layer]]",
      "resolved": "urn:visionflow:owl:class:network-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physical Layer]]",
      "resolved": "urn:visionflow:owl:class:physical-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Random Number Generation]]",
      "resolved": "urn:visionflow:owl:class:random-number-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
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
  - Cryptographic algorithms and protocols designed to be resistant to attacks from both classical and quantum computers, protecting secure communications in the post-quantum era.

- ### Semantic Classification
  - owl-class:: infrastructure:PostQuantumCryptography
  - owl-role:: Process
  - owl-inferred:: infrastructure:VirtualProcess
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[Physical Layer]], [[Network Layer]], [[Compute Layer]], [[Data Layer]]

- ### Relationships
  - has-part:: [[Lattice-Based Cryptography]], [[Code-Based Cryptography]], [[Multivariate Cryptography]], [[Hash-Based Signatures]], [[Isogeny-Based Cryptography]]
  - is-part-of:: [[Cryptographic Infrastructure]], [[Security Protocol]]
  - requires:: [[Random Number Generation]], [[Cryptographic Key Management]], [[Algorithm Implementation]]
  - enables:: [[Quantum-Resistant Encryption]], [[Secure Key Exchange]], [[Digital Signatures]], [[Long-Term Data Protection]]
  - depends-on:: [[Mathematical Hard Problems]], [[Computational Complexity Theory]]

- ### Content
  Post-Quantum Cryptography — content pending enrichment.

- ### Provenance
  - sources:: [[NIST PQ Standard (2024)]]
  - migration-date:: 2026-04-26T00:00:00Z
