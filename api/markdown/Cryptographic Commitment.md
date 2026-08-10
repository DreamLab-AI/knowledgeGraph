public:: true

# Cryptographic Commitment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98c7049666d4f07a97c35a8fbd95e175a5452297fe9ec2b5ec5b15f4b8f5d101",
  "@type": "Page",
  "vc:slug": "cryptographic-commitment",
  "title": "Cryptographic Commitment",
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
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
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
      "vc:value": "BC-0050"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Cryptographic Commitment"
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
  "@id": "urn:ngm:class:cryptographic-commitment",
  "@type": "Class",
  "label": "Cryptographic Commitment",
  "definition": "A cryptographic scheme that allows a party to commit to a chosen value while keeping it hidden, with the ability to reveal it later, satisfying the binding property (cannot change the committed value) and the hiding property (the commitment reveals no information about the value). Used in zero-knowledge proofs, atomic swaps, and confidential transactions.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:cryptographic-primitive",
    "label": "Cryptographic Primitive"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:pedersen-commitment",
        "label": "Pedersen Commitment"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:zk-snarks",
        "label": "ZK-SNARKs"
      },
      {
        "@id": "urn:ngm:class:zk-starks",
        "label": "ZK-STARKs"
      },
      {
        "@id": "urn:ngm:class:immutability",
        "label": "Immutability"
      },
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      },
      {
        "@id": "urn:ngm:class:confidential-transactions",
        "label": "Confidential Transaction"
      },
      {
        "@id": "urn:ngm:class:atomic-swap",
        "label": "Atomic Swap"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multiparty Computation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:vector-commitment",
        "label": "Vector Commitment"
      },
      {
        "@id": "urn:ngm:class:polynomial-commitment",
        "label": "Polynomial Commitment"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:random-oracle-model",
        "label": "Random Oracle Model"
      },
      {
        "@id": "urn:ngm:class:discrete-logarithm-problem",
        "label": "Discrete Logarithm Problem"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge",
        "label": "Zero Knowledge"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:oblivious-transfer",
        "label": "Oblivious Transfer"
      },
      {
        "@id": "urn:ngm:class:coin-flipping-protocol",
        "label": "Coin Flipping Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent-system",
        "label": "AI Agent System"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:commitment-scheme",
      "label": "Commitment Scheme"
    },
    {
      "@id": "urn:ngm:class:cryptographic-commitment-scheme",
      "label": "Cryptographic Commitment Scheme"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cryptographic-commitment:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98c7049666d4f07a97c35a8fbd95e175a5452297fe9ec2b5ec5b15f4b8f5d101"
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
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
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
  - Binding and hiding scheme within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:CryptographicCommitment
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  ## Class Declaration
  Declaration(Class(:CryptographicCommitment))

  ## Subclass Relationships
  SubClassOf(:CryptographicCommitment :CryptographicPrimitive)
  SubClassOf(:CryptographicCommitment :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:CryptographicCommitment
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:CryptographicCommitment
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :CryptographicCommitment "BC-0050"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :CryptographicCommitment "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :CryptographicCommitment "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :CryptographicCommitment :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :CryptographicCommitment :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :CryptographicCommitment "Cryptographic Commitment"@en)
  AnnotationAssertion(rdfs:comment :CryptographicCommitment
    "Binding and hiding scheme"@en)
  AnnotationAssertion(dct:description :CryptographicCommitment
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :CryptographicCommitment "BC-0050")
  AnnotationAssertion(:priority :CryptographicCommitment "1"^^xsd:integer)
  AnnotationAssertion(:category :CryptographicCommitment "cryptographic-foundations"@en)
  )
      ```

  - ## About Cryptographic Commitment

  - Binding and hiding scheme within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from Cryptographic Commitment.md: Alby, Anthropic, NIP-05, OpenAI -->

- ### Current Landscape (2026)
  - Ethereum has effectively abandoned Verkle trees, which relied on KZG/IPA vector commitments over elliptic curves, in favour of a unified binary Merkle tree under EIP-7864 (drafted January 2025 by Buterin, Ballet, Feist and others); the decision cited long-term cryptographic and quantum risk in pairing-based commitments, marking a notable retreat from algebraic commitments toward hash-based ones at the base layer.
  - EIP-7864's merkelisation hash is still open, with BLAKE3 used as an experimental placeholder and Poseidon2 (over BN254 or 31-bit fields) under an active Ethereum Foundation cryptography review; Buterin's March 2026 two-part execution-layer plan frames prover-friendly commitments as roughly 80% of proving cost, with Poseidon2 promising up to a 100x proving speed-up pending further cryptanalysis.
  - Post-quantum polynomial commitments matured rapidly: Cini, Malavolta, Nguyen and Wee (CRYPTO 2024, eprint 2024/281) gave the first efficient transparent-setup lattice PCS with Module-SIS/LWE security, and Greyhound plus LaBRADOR pushed lattice proofs to around 93 KB at degree 2^30, with follow-ups Jindo (eprint 2026/044) and Hachi cutting proof sizes further over extension fields.
  - Hash-based commitments advanced too: SmallWood (Feneuil and Rivain, eprint 2025/1085) is a hash-based PCS and ZK argument that bridges the gap between STARK/Brakedown (large instances) and VOLE-in-the-Head (tiny instances), yielding sub-25 KB proofs for Kyber/Dilithium-scale statements; it was submitted to NIST's multi-party threshold cryptography call (S6 category) on 20 January 2026.
  - The theoretical footing of KZG was firmed up: Lipmaa, Parisella and Siim introduced the falsifiable ARSDH assumption (EUROCRYPT 2024) to prove KZG knowledge-soundness without idealised group or knowledge-of-exponent assumptions, and eprint 2025/514 extended standard-model extractability to multivariate KZG variants used in PLONK-style SNARKs.
  - FRI-based commitment tooling consolidated around Circle STARKs and the Stwo prover (Poseidon2 over Mersenne-31), alongside a simplified round-by-round FRI soundness proof (eprint 2025/1993) and Fold-and-Batch distributed FRI (2025), the first horizontally scalable transparent and plausibly post-quantum SNARK for general circuits.
  - The frontier challenge remains the performance gap: lattice and hash commitments still run several times larger and slower than KZG, harvest-now-decrypt-later concerns press for migration off Shor-vulnerable pairings, and Poseidon2's concrete security over small fields awaits dedicated quantum and algebraic cryptanalysis before production deployment.

- ### References
  - 1. Buterin, Ballet, Feist et al. / Ethereum Foundation (2025). EIP-7864: Ethereum state using a unified binary tree. https://eips.ethereum.org/EIPS/eip-7864
  - 2. Cini, Malavolta, Nguyen & Wee (2024). Polynomial Commitments from Lattices: Post-Quantum Security, Fast Verification and Transparent Setup (CRYPTO 2024). https://eprint.iacr.org/2024/281
  - 3. Feneuil & Rivain (2025). SmallWood: Hash-Based Polynomial Commitments and Zero-Knowledge Arguments for Relatively Small Instances. https://eprint.iacr.org/2025/1085
  - 4. Zhang et al. (2025). On Extractability of the KZG Family of Polynomial Commitment Schemes. https://eprint.iacr.org/2025/514
  - 5. Berlekamp et al. / arXiv (2025). Benchmarking Verkle Trees and Binary Merkle Trees with SNARKs for Ethereum Statelessness. https://arxiv.org/html/2504.14069v1
  - 6. Garreta, Mohnblatt & Wagner (2025). A Simplified Round-by-round Soundness Proof of FRI. https://eprint.iacr.org/2025/1993

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
