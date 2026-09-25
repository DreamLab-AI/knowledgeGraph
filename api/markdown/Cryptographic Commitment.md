A cryptographic scheme that allows a party to commit to a chosen value while keeping it hidden, with the ability to reveal it later, satisfying the binding property (cannot change the committed value) and the hiding property (the commitment reveals no information about the value). Used in zero-knowledge proofs, atomic swaps, and confidential transactions.

### Semantic Classification

### Content

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

## About Cryptographic Commitment

- Binding and hiding scheme within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

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

<!-- Merged from Cryptographic Commitment.md: Alby, Anthropic, NIP-05, OpenAI -->

### Current Landscape (2026)

- Ethereum has effectively abandoned Verkle trees, which relied on KZG/IPA vector commitments over elliptic curves, in favour of a unified binary Merkle tree under EIP-7864 (drafted January 2025 by Buterin, Ballet, Feist and others); the decision cited long-term cryptographic and quantum risk in pairing-based commitments, marking a notable retreat from algebraic commitments toward hash-based ones at the base layer.
- EIP-7864's merkelisation hash is still open, with BLAKE3 used as an experimental placeholder and Poseidon2 (over BN254 or 31-bit fields) under an active Ethereum Foundation cryptography review; Buterin's March 2026 two-part execution-layer plan frames prover-friendly commitments as roughly 80% of proving cost, with Poseidon2 promising up to a 100x proving speed-up pending further cryptanalysis.
- Post-quantum polynomial commitments matured rapidly: Cini, Malavolta, Nguyen and Wee (CRYPTO 2024, eprint 2024/281) gave the first efficient transparent-setup lattice PCS with Module-SIS/LWE security, and Greyhound plus LaBRADOR pushed lattice proofs to around 93 KB at degree 2^30, with follow-ups Jindo (eprint 2026/044) and Hachi cutting proof sizes further over extension fields.
- Hash-based commitments advanced too: SmallWood (Feneuil and Rivain, eprint 2025/1085) is a hash-based PCS and ZK argument that bridges the gap between STARK/Brakedown (large instances) and VOLE-in-the-Head (tiny instances), yielding sub-25 KB proofs for Kyber/Dilithium-scale statements; it was submitted to NIST's multi-party threshold cryptography call (S6 category) on 20 January 2026.
- The theoretical footing of KZG was firmed up: Lipmaa, Parisella and Siim introduced the falsifiable ARSDH assumption (EUROCRYPT 2024) to prove KZG knowledge-soundness without idealised group or knowledge-of-exponent assumptions, and eprint 2025/514 extended standard-model extractability to multivariate KZG variants used in PLONK-style SNARKs.
- FRI-based commitment tooling consolidated around Circle STARKs and the Stwo prover (Poseidon2 over Mersenne-31), alongside a simplified round-by-round FRI soundness proof (eprint 2025/1993) and Fold-and-Batch distributed FRI (2025), the first horizontally scalable transparent and plausibly post-quantum SNARK for general circuits.
- The frontier challenge remains the performance gap: lattice and hash commitments still run several times larger and slower than KZG, harvest-now-decrypt-later concerns press for migration off Shor-vulnerable pairings, and Poseidon2's concrete security over small fields awaits dedicated quantum and algebraic cryptanalysis before production deployment.

### References

- 1. Buterin, Ballet, Feist et al. / Ethereum Foundation (2025). EIP-7864: Ethereum state using a unified binary tree. https://eips.ethereum.org/EIPS/eip-7864
- 2. Cini, Malavolta, Nguyen & Wee (2024). Polynomial Commitments from Lattices: Post-Quantum Security, Fast Verification and Transparent Setup (CRYPTO 2024). https://eprint.iacr.org/2024/281
- 3. Feneuil & Rivain (2025). SmallWood: Hash-Based Polynomial Commitments and Zero-Knowledge Arguments for Relatively Small Instances. https://eprint.iacr.org/2025/1085
- 4. Zhang et al. (2025). On Extractability of the KZG Family of Polynomial Commitment Schemes. https://eprint.iacr.org/2025/514
- 5. Berlekamp et al. / arXiv (2025). Benchmarking Verkle Trees and Binary Merkle Trees with SNARKs for Ethereum Statelessness. https://arxiv.org/html/2504.14069v1
- 6. Garreta, Mohnblatt & Wagner (2025). A Simplified Round-by-round Soundness Proof of FRI. https://eprint.iacr.org/2025/1993

### Provenance

