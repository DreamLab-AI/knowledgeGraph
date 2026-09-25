A cryptographic protocol allowing one party (prover) to convince another party (verifier) that a statement is true without revealing any information beyond the validity of the statement itself. Zero-knowledge proofs provide privacy-preserving verification in blockchain systems, enabling private transactions, identity attestation, and scalable computation via ZK-rollups.

### Semantic Classification

### Content

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

## About Zero-Knowledge Proof

- Privacy-preserving verification within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

### Key Characteristics

- 1. **Definitional Property**: Core defining characteristic
- 2. **Functional Property**: Operational behavior
- 3. **Structural Property**: Compositional elements
- 4. **Security Property**: Security guarantees provided
- 5. **Performance Property**: Efficiency considerations

### Technical Components

- **Implementation**: How concept is realized technically
- **Verification**: Methods for validating correctness
- **Interaction**: Relationships with other components
- **Constraints**: Technical limitations and requirements

### Use Cases

- **1. Core Blockchain Operation**
- **Application**: Fundamental blockchain functionality
- **Example**: Practical implementation in major blockchains
- **Requirements**: Technical prerequisites
- **Benefits**: Value provided to blockchain systems

### Standards & References

- [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
- [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
- [[NIST NISTIR]] - Blockchain and distributed ledger technologies

### Current Landscape (2026)

- The zkVM paradigm has largely displaced hand-written circuits: developers now write ordinary Rust compiled to a RISC-V target, with production systems including Succinct's SP1 Hypercube, RISC Zero's R0VM 2.0, Matter Labs' Airbender (ZKsync), Axiom's OpenVM, Brevis' Pico Prism, ZisK and a16z's Jolt.
- Real-time Ethereum proving was achieved in 2025: Succinct first proved Ethereum blocks in real time in May 2025, and by November 2025 SP1 Hypercube proved 99.7% of L1 blocks in under 12 seconds on just 16 NVIDIA RTX 5090 GPUs; Brevis' Pico Prism and ZisK hit similar sub-12s results by late 2025.
- In July 2025 the Ethereum Foundation published its "realtime proving" north-star definition (sub-10s latency for 99% of blocks, under 100k USD CAPEX, under 10 kW, proofs under 300 KiB, at least 128-bit security, no trusted setup); by December 2025 average proving cost on the public ethproofs tracker had fallen roughly 45x, from 1.69 dollars in January to under 4 cents.
- Standardisation matured: ISO/IEC 27565:2026 "Guidelines on privacy preservation based on zero-knowledge proofs" was published in February 2026, and the L1-zkEVM roadmap advanced via EIP-8025 (optional execution proofs), moving Ethereum validation toward proof verification rather than transaction re-execution.
- Big-tech ZK identity shipped: Google open-sourced its Longfellow ZK library in July 2025 to power privacy-preserving "over 18" age assurance in Google Wallet (layered on ISO/IEC 18013-5 mdocs and the EUDI wallet), and Microsoft's Vega (May 2026) generates age proofs in around 92 milliseconds on commodity phones.
- ZK reached Bitcoin: Citrea launched in January 2026 as Bitcoin's first production ZK rollup (a RISC Zero-based zkEVM with STARK proofs compressed to Groth16), alongside BitVM2-based L2s and the RGB v0.12 client-side-validation release, though combined Bitcoin ZK-rollup TVL remains under 2 million dollars versus roughly 9.6 billion for Ethereum ZK rollups.
- Open frontiers as of 2026 centre on security assurance rather than raw speed: the Foundation's soundcalc tool and staged milestones target 128-bit provable security and sub-300 KiB proofs by end-2026, while formal-verification coverage of zkVMs remains partial (a bug was found in SP1 Hypercube in May 2026) and tooling still concentrates on Circom circuits, leaving newer DSLs and zkVMs weakly supported.

### References

- 1. Wavect (2026). Zero-Knowledge Proofs in 2026: Production-Ready? https://wavect.io/blog/zero-knowledge-proofs-production-2026/
- 2. Succinct Labs (2025). SP1 Hypercube Achieves Real Time Proving with 16 GPUs. https://blog.succinct.xyz/real-time-proving-16-gpus/
- 3. Ethereum Foundation / Sophia Gold (2025). Shipping an L1 zkEVM #1: Realtime Proving. https://blog.ethereum.org/2025/07/10/realtime-proving
- 4. ISO/IEC (2026). ISO/IEC 27565:2026 Guidelines on privacy preservation based on zero-knowledge proofs. https://www.sis.se/en/produkter/information-technology-office-machines/it-security/ss-isoiec-275652026/
- 5. Google (2025). Opening up Zero-Knowledge Proof technology to promote privacy in age assurance (Longfellow ZK). https://blog.google/innovation-and-ai/technology/safety-security/opening-up-zero-knowledge-proof-technology-to-promote-privacy-in-age-assurance/
- 6. Spark / spark.money (2026). Zero-Knowledge Proofs on Bitcoin: From Client-Side Validation to ZK Rollups. https://www.spark.money/research/zero-knowledge-proofs-bitcoin-applications

### Provenance

