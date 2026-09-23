
A provably secure digital signature scheme based on the discrete logarithm problem over elliptic curves, offering linearity properties that enable key and signature aggregation. Within blockchain systems Schnorr signatures underpin features such as Taproot, MuSig multi-signature protocols, and threshold signing, providing smaller signature sizes and stronger privacy compared to ECDSA.

- ### Semantic Classification

- ### Content

  ## Class Declaration
  Declaration(Class(:SchnorrSignature))

  ## Subclass Relationships
  SubClassOf(:SchnorrSignature :CryptographicPrimitive)
  SubClassOf(:SchnorrSignature :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:SchnorrSignature
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:SchnorrSignature
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :SchnorrSignature "BC-0041"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :SchnorrSignature "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :SchnorrSignature "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :SchnorrSignature :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :SchnorrSignature :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :SchnorrSignature "Schnorr Signature"@en)
  AnnotationAssertion(rdfs:comment :SchnorrSignature
    "Efficient signature scheme"@en)
  AnnotationAssertion(dct:description :SchnorrSignature
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :SchnorrSignature "BC-0041")
  AnnotationAssertion(:priority :SchnorrSignature "1"^^xsd:integer)
  AnnotationAssertion(:category :SchnorrSignature "cryptographic-foundations"@en)
  )

  - ## About Schnorr Signature

  - Efficient signature scheme within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
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



  <!-- Merged from Schnorr Signature.md: komlo2020frost -->

- ### Current Landscape (2026)
  - The FROST threshold Schnorr protocol (Flexible Round-Optimised Schnorr Threshold, by Chelsea Komlo and Ian Goldberg) was published as RFC 9591 on the IRTF/CFRG stream in June 2024, giving t-of-n signing a stable public specification, though it carries no formal IETF standards-track standing.
  - Bitcoin-specific FROST is being standardised as BIP 445 (FROST3 variant, authored by Sivaram Dhakshinamoorthy), assigned in January 2026 but still in draft status with its bitcoin/bips pull request unmerged; a companion ChillDKG BIP from Blockstream Research covers distributed key generation.
  - MuSig2 (BIP 327), the n-of-n aggregation scheme producing a single 64-byte Schnorr signature, has moved firmly into production: Ledger shipped hardware MuSig2 signing in Bitcoin app v2.4.0 (April 2025), BitGo deployed it on Taproot hot wallets reporting roughly 30% per-input fee savings, and Nunchuk launched a beta Taproot MuSig2 wallet.
  - FROST remains experimental on Bitcoin as of mid-2026 with no mainnet wallet deployment; the signing BIP sits around version 0.3.5, the Zcash Foundation ships a Taproot-compatible Rust crate, and Blockchain Commons released FROST ceremony tooling and educational CLIs in late 2025.
  - FROST was submitted to NIST's First Call for Multi-Party Threshold Schemes (NIST IR 8214C, 2026) under Category N1.1 as a threshold EdDSA scheme, signalling a path toward formal standardisation of threshold Schnorr/EdDSA signing beyond the cryptocurrency ecosystem.
  - Adaptive-security foundations are actively contested: work by Crites et al. (CRYPTO 2025) showed FROST's adaptive security rests on a non-standard assumption, prompting new constructions such as Mask-FROST (presented at NIST MPTS 2026), which achieves comparable efficiency while proving adaptive security under only AOMDL in the algebraic group model.
  - Frontier engineering work in 2026 targets full (cross-input) aggregation of BIP 340 signatures via a draft BIP, alongside public-key recovery for P2MR leaves, while a 2025 paper analysing Taproot commitments highlights the open long-term challenge of Schnorr/secp256k1's exposure to quantum attack.

- ### References
  - 1. IRTF CFRG / D. Connolly, C. Komlo, I. Goldberg, C. A. Wood (2024). RFC 9591: The Flexible Round-Optimized Schnorr Threshold (FROST) Protocol for Two-Round Schnorr Signatures. https://datatracker.ietf.org/doc/rfc9591/
  - 2. Spark (2026). Bitcoin Signature Schemes Compared: ECDSA, Schnorr, MuSig2, FROST. https://www.spark.money/tools/bitcoin-signature-schemes-comparison
  - 3. Spark (2026). Schnorr & MuSig2 Reference: Multi-Party Signing on Bitcoin. https://www.spark.money/tools/bitcoin-schnorr-musig2-reference
  - 4. NIST CSRC / FROST Team (2026). FROST: Flexible Round-Optimized Schnorr Threshold Signatures — submission to the NIST Threshold Call (NIST IR 8214C). https://csrc.nist.gov/csrc/media/Projects/threshold-cryptography/documents/TCall-1/FROST-PW01.pdf
  - 5. NIST CSRC (2026). Mask-FROST: Adaptively Secure 2-round Threshold Schnorr Signatures in the Algebraic Group Model (MPTS 2026). https://csrc.nist.gov/presentations/2026/mpts2026-1a5

- ### Provenance

