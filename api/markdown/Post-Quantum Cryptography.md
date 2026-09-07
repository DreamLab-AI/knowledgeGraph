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
