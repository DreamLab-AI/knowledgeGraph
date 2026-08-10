public:: true
alias:: BC-0023-zero-knowledge-proofs, BC-0202-zero-knowledge-proofs, BC-0315-zero-knowledge-proof, Zero Knowledge Proof, Zero Knowledge Proofs, Zero-Knowledge Proofs, ZeroKnowledgeProof

# Zero-Knowledge Proof
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6bae59c41daece667b60b6bd2ae3ec7bf389c8f3b7f34c56d2cac80bbb17a77e",
  "@type": "Page",
  "vc:slug": "zero-knowledge-proof",
  "title": "Zero-Knowledge Proof",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-primitive",
      "vc:label": "CryptographicPrimitive"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0033"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Zero-Knowledge Proof"
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
  "@id": "urn:ngm:class:zero-knowledge-proof",
  "@type": "Class",
  "label": "Zero-Knowledge Proof",
  "definition": "A cryptographic protocol allowing one party (prover) to convince another party (verifier) that a statement is true without revealing any information beyond the validity of the statement itself. Zero-knowledge proofs provide privacy-preserving verification in blockchain systems, enabling private transactions, identity attestation, and scalable computation via ZK-rollups.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:zk-snarks",
        "label": "ZK-SNARKs"
      },
      {
        "@id": "urn:ngm:class:zk-starks",
        "label": "ZK-STARKs"
      },
      {
        "@id": "urn:ngm:class:bulletproofs",
        "label": "Bulletproofs"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      },
      {
        "@id": "urn:ngm:class:privacy-enhancing-technologies",
        "label": "Privacy-Enhancing Technology"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:interactive-proof-system",
        "label": "Interactive Proof System"
      },
      {
        "@id": "urn:ngm:class:computational-hardness-assumption",
        "label": "Computational Hardness Assumption"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-commitment",
        "label": "Cryptographic Commitment"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-machine-learning",
        "label": "Zero-Knowledge Machine Learning"
      },
      {
        "@id": "urn:ngm:class:zk-rollup",
        "label": "ZK-Rollup"
      },
      {
        "@id": "urn:ngm:class:private-smart-contract",
        "label": "Private Smart Contract"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:trusted-setup",
        "label": "Trusted Setup"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:interactive-proof-system",
        "label": "Interactive Proof System"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:cryptographic-verification",
        "label": "Cryptographic Verification"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:zk-proof",
      "label": "ZK Proof"
    },
    {
      "@id": "urn:ngm:class:zero-knowledge-protocol",
      "label": "Zero-Knowledge Protocol"
    }
  ],
  "quality": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:zero-knowledge-proof:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6bae59c41daece667b60b6bd2ae3ec7bf389c8f3b7f34c56d2cac80bbb17a77e"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:bc-cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicPrimitive]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-primitive",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
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
  - Privacy-preserving verification within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:Zero-knowledgeProof
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

- ### Content

  ## Class Declaration
  Declaration(Class(:Zero-KnowledgeProof))

  ## Subclass Relationships
  SubClassOf(:Zero-KnowledgeProof :CryptographicPrimitive)
  SubClassOf(:Zero-KnowledgeProof :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:Zero-KnowledgeProof
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:Zero-KnowledgeProof
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :Zero-KnowledgeProof "BC-0033"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :Zero-KnowledgeProof "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :Zero-KnowledgeProof "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :Zero-KnowledgeProof :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :Zero-KnowledgeProof :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :Zero-KnowledgeProof "Zero-Knowledge Proof"@en)
  AnnotationAssertion(rdfs:comment :Zero-KnowledgeProof
    "Privacy-preserving verification"@en)
  AnnotationAssertion(dct:description :Zero-KnowledgeProof
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :Zero-KnowledgeProof "BC-0033")
  AnnotationAssertion(:priority :Zero-KnowledgeProof "1"^^xsd:integer)
  AnnotationAssertion(:category :Zero-KnowledgeProof "cryptographic-foundations"@en)
  )
      ```

  - ## About Zero-Knowledge Proof

  - Privacy-preserving verification within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Current Landscape (2026)
  - The zkVM paradigm has largely displaced hand-written circuits: developers now write ordinary Rust compiled to a RISC-V target, with production systems including Succinct's SP1 Hypercube, RISC Zero's R0VM 2.0, Matter Labs' Airbender (ZKsync), Axiom's OpenVM, Brevis' Pico Prism, ZisK and a16z's Jolt.
  - Real-time Ethereum proving was achieved in 2025: Succinct first proved Ethereum blocks in real time in May 2025, and by November 2025 SP1 Hypercube proved 99.7% of L1 blocks in under 12 seconds on just 16 NVIDIA RTX 5090 GPUs; Brevis' Pico Prism and ZisK hit similar sub-12s results by late 2025.
  - In July 2025 the Ethereum Foundation published its "realtime proving" north-star definition (sub-10s latency for 99% of blocks, under 100k USD CAPEX, under 10 kW, proofs under 300 KiB, at least 128-bit security, no trusted setup); by December 2025 average proving cost on the public ethproofs tracker had fallen roughly 45x, from 1.69 dollars in January to under 4 cents.
  - Standardisation matured: ISO/IEC 27565:2026 "Guidelines on privacy preservation based on zero-knowledge proofs" was published in February 2026, and the L1-zkEVM roadmap advanced via EIP-8025 (optional execution proofs), moving Ethereum validation toward proof verification rather than transaction re-execution.
  - Big-tech ZK identity shipped: Google open-sourced its Longfellow ZK library in July 2025 to power privacy-preserving "over 18" age assurance in Google Wallet (layered on ISO/IEC 18013-5 mdocs and the EUDI wallet), and Microsoft's Vega (May 2026) generates age proofs in around 92 milliseconds on commodity phones.
  - ZK reached Bitcoin: Citrea launched in January 2026 as Bitcoin's first production ZK rollup (a RISC Zero-based zkEVM with STARK proofs compressed to Groth16), alongside BitVM2-based L2s and the RGB v0.12 client-side-validation release, though combined Bitcoin ZK-rollup TVL remains under 2 million dollars versus roughly 9.6 billion for Ethereum ZK rollups.
  - Open frontiers as of 2026 centre on security assurance rather than raw speed: the Foundation's soundcalc tool and staged milestones target 128-bit provable security and sub-300 KiB proofs by end-2026, while formal-verification coverage of zkVMs remains partial (a bug was found in SP1 Hypercube in May 2026) and tooling still concentrates on Circom circuits, leaving newer DSLs and zkVMs weakly supported.

- ### References
  - 1. Wavect (2026). Zero-Knowledge Proofs in 2026: Production-Ready? https://wavect.io/blog/zero-knowledge-proofs-production-2026/
  - 2. Succinct Labs (2025). SP1 Hypercube Achieves Real Time Proving with 16 GPUs. https://blog.succinct.xyz/real-time-proving-16-gpus/
  - 3. Ethereum Foundation / Sophia Gold (2025). Shipping an L1 zkEVM #1: Realtime Proving. https://blog.ethereum.org/2025/07/10/realtime-proving
  - 4. ISO/IEC (2026). ISO/IEC 27565:2026 Guidelines on privacy preservation based on zero-knowledge proofs. https://www.sis.se/en/produkter/information-technology-office-machines/it-security/ss-isoiec-275652026/
  - 5. Google (2025). Opening up Zero-Knowledge Proof technology to promote privacy in age assurance (Longfellow ZK). https://blog.google/innovation-and-ai/technology/safety-security/opening-up-zero-knowledge-proof-technology-to-promote-privacy-in-age-assurance/
  - 6. Spark / spark.money (2026). Zero-Knowledge Proofs on Bitcoin: From Client-Side Validation to ZK Rollups. https://www.spark.money/research/zero-knowledge-proofs-bitcoin-applications

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
