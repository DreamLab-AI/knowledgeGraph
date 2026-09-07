```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:683258688ec7217428ed702e9473819db3213d87f2e9e3f099f9d6aaf2f147c7",
  "@type": "Page",
  "vc:slug": "zero-knowledge-proof-zkp",
  "title": "Zero-Knowledge Proof (ZKP)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:algebraic-circuits",
      "vc:label": "Algebraic Circuits"
    },
    {
      "@id": "urn:visionflow:linked:bulletproofs",
      "vc:label": "Bulletproofs"
    },
    {
      "@id": "urn:visionflow:linked:computational-complexity-theory",
      "vc:label": "Computational Complexity Theory"
    },
    {
      "@id": "urn:visionflow:linked:confidential-transactions",
      "vc:label": "Confidential Transactions"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-verification-system",
      "vc:label": "Cryptographic Verification System"
    },
    {
      "@id": "urn:visionflow:linked:interactive-zkp",
      "vc:label": "Interactive ZKP"
    },
    {
      "@id": "urn:visionflow:linked:non-interactive-zkp",
      "vc:label": "Non-Interactive ZKP"
    },
    {
      "@id": "urn:visionflow:linked:number-theory",
      "vc:label": "Number Theory"
    },
    {
      "@id": "urn:visionflow:linked:oma3-reed-smith",
      "vc:label": "OMA3 + Reed Smith"
    },
    {
      "@id": "urn:visionflow:linked:plonk",
      "vc:label": "PLONK"
    },
    {
      "@id": "urn:visionflow:linked:polynomial-commitment-scheme",
      "vc:label": "Polynomial Commitment Scheme"
    },
    {
      "@id": "urn:visionflow:linked:privacy-preserving-identity",
      "vc:label": "Privacy-Preserving Identity"
    },
    {
      "@id": "urn:visionflow:linked:privacy-preserving-protocol",
      "vc:label": "Privacy-Preserving Protocol"
    },
    {
      "@id": "urn:visionflow:linked:private-authentication",
      "vc:label": "Private Authentication"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-computation",
      "vc:label": "Verifiable Computation"
    },
    {
      "@id": "urn:visionflow:owl:class:elliptic-curve-cryptography",
      "vc:label": "Elliptic Curve Cryptography"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "Middleware Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:zk-snarks",
      "vc:label": "zk-SNARKs"
    },
    {
      "@id": "urn:visionflow:owl:class:zk-starks",
      "vc:label": "zk-STARKs"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20211"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Zero-Knowledge Proof (ZKP)"
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
  "@id": "urn:ngm:class:zero-knowledge-proof-zkp",
  "@type": "Class",
  "label": "Zero-Knowledge Proof (ZKP)",
  "definition": "A cryptographic protocol that enables one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    },
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bulletproofs",
        "label": "Bulletproofs"
      },
      {
        "@id": "urn:ngm:class:plonk",
        "label": "PLONK"
      },
      {
        "@id": "urn:ngm:class:zk-snarks",
        "label": "ZK-SNARKs"
      },
      {
        "@id": "urn:ngm:class:zk-starks",
        "label": "ZK-STARKs"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:commitment-scheme",
        "label": "Polynomial Commitment Scheme"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:confidential-transactions",
        "label": "Confidential Transactions"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-identity",
        "label": "Privacy-Preserving Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-computation",
        "label": "Verifiable Computation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification System"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-protocol",
        "label": "Privacy-Preserving Protocol"
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
  - A cryptographic protocol that enables one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any information beyond the validity of the statement itself.

- ### Semantic Classification
  - owl-class:: infrastructure:ZeroKnowledgeProof
  - owl-role:: Process
  - owl-inferred:: infrastructure:VirtualProcess
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[Middleware Layer]]

- ### Relationships
  - has-part:: [[zk-SNARKs]], [[zk-STARKs]], [[Bulletproofs]], [[PLONK]], [[Interactive ZKP]], [[Non-Interactive ZKP]]
  - is-part-of:: [[Privacy-Preserving Protocol]], [[Cryptographic Verification System]]
  - requires:: [[Cryptographic Hash Function]], [[Polynomial Commitment Scheme]], [[Elliptic Curve Cryptography]]
  - enables:: [[Private Authentication]], [[Confidential Transactions]], [[Verifiable Computation]], [[Privacy-Preserving Identity]]
  - depends-on:: [[Computational Complexity Theory]], [[Number Theory]], [[Algebraic Circuits]]

- ### Content
  Zero-Knowledge Proof (ZKP) — content pending enrichment.

- ### Provenance
  - sources:: [[OMA3 + Reed Smith]]
  - migration-date:: 2026-04-26T00:00:00Z
