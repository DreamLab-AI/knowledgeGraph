public:: true

# homomorphic encryption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f1d62d30e9ddf973bc12d2f329597564f7e7f92d52c631fa965e4f1cec9a3297",
  "@type": "Page",
  "vc:slug": "homomorphic-encryption",
  "title": "homomorphic encryption",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:homomorphic-encryption",
  "@type": "Class",
  "label": "Homomorphic Encryption",
  "definition": "Homomorphic Encryption (HE) is a cryptographic paradigm that permits arbitrary arithmetic and logical operations to be performed directly on ciphertext, yielding an encrypted result that, upon decryption, matches the outcome of the same operations applied to the original plaintext. Fully Homomorphic Encryption (FHE), first constructed by Craig Gentry in 2009 using ideal-lattice hard problems, supports an unbounded depth of operations and enables third parties — such as cloud compute providers — to process sensitive data without ever gaining access to it in plaintext form. Practical FHE schemes include BGV and BFV for exact integer arithmetic, CKKS for approximate real-number arithmetic (widely used in machine-learning inference), and TFHE for fast gate-by-gate bootstrapping over Boolean circuits.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:bgv-scheme", "label": "BGV Scheme"},
      {"@id": "urn:ngm:class:ckks-scheme", "label": "CKKS Scheme"},
      {"@id": "urn:ngm:class:tfhe-scheme", "label": "TFHE Scheme"},
      {"@id": "urn:ngm:class:bootstrapping", "label": "Bootstrapping"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:privacy-preserving-technology", "label": "Privacy Preserving Technology"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:lattice-based-cryptography", "label": "Lattice-Based Cryptography"},
      {"@id": "urn:ngm:class:learning-with-errors", "label": "Learning With Errors"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:secure-multi-party-computation", "label": "Secure Multi-Party Computation"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:private-information-retrieval", "label": "Private Information Retrieval"},
      {"@id": "urn:ngm:class:encrypted-machine-learning", "label": "Encrypted Machine Learning"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:post-quantum-cryptography", "label": "Post-Quantum Cryptography"},
      {"@id": "urn:ngm:class:noise-management", "label": "Noise Management"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ring-learning-with-errors", "label": "Ring Learning With Errors"},
      {"@id": "urn:ngm:class:number-theoretic-transform", "label": "Number Theoretic Transform"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:healthcare-data-privacy", "label": "Healthcare Data Privacy"},
      {"@id": "urn:ngm:class:genomic-data-analysis", "label": "Genomic Data Analysis"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:homomorphicencryption-org", "label": "HomomorphicEncryption.org"},
      {"@id": "urn:ngm:class:iso-iec-jtc1-sc27", "label": "ISO/IEC JTC1 SC27"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:differential-privacy", "label": "Differential Privacy"},
      {"@id": "urn:ngm:class:secure-enclaves", "label": "Secure Enclaves"},
      {"@id": "urn:ngm:class:garbled-circuits", "label": "Garbled Circuits"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:confidential-computing", "label": "Confidential Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:oblivious-ram", "label": "Oblivious RAM"},
      {"@id": "urn:ngm:class:functional-encryption", "label": "Functional Encryption"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:fhe", "label": "FHE"},
    {"@id": "urn:ngm:class:fully-homomorphic-encryption", "label": "Fully Homomorphic Encryption"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Homomorphic Encryption (HE) is a form of [[Cryptography]] that allows computations to be carried out on [[Ciphertext]] and yields encrypted results that, when decrypted, match what would have been obtained had the same operations been applied to the unencrypted [[Plaintext]]. The concept encompasses a spectrum from Partially Homomorphic Encryption (PHE), which supports only one class of operation (e.g. only additions or only multiplications), through Levelled Homomorphic Encryption (LHE), which supports a bounded circuit depth, to Fully Homomorphic Encryption (FHE), which supports arbitrary computation. FHE is grounded in hard problems from [[Lattice-Based Cryptography]] — specifically the [[Learning With Errors]] and [[Ring Learning With Errors]] problems — providing conjectured security against both classical and quantum adversaries, making HE a cornerstone of [[Post-Quantum Cryptography]] research.

- ### Overview
  - Homomorphic Encryption solves the longstanding open problem of computing on data without decrypting it first. Before Gentry's 2009 breakthrough, the only practical answer to "can I delegate computation without revealing my inputs?" was to trust the compute provider or use less-expressive primitives such as [[Garbled Circuits]] or [[Oblivious RAM]].
  - The core mechanism exploits algebraic homomorphisms: encrypting a message m under an HE scheme produces a ciphertext c such that Enc(m₁) ⊕ Enc(m₂) = Enc(m₁ + m₂) and Enc(m₁) ⊗ Enc(m₂) = Enc(m₁ × m₂). Each operation introduces noise into the ciphertext; once noise exceeds a threshold decryption fails. **Bootstrapping** — re-encrypting the ciphertext under the scheme itself to reduce noise — is the mechanism that lifts levelled schemes to fully homomorphic ones, at substantial computational cost.
  - Why it matters:
    - Enables [[Cloud Computing]] providers to process medical records, financial models, or genomic sequences without ever seeing the underlying data.
    - Underpins [[Privacy Preserving Technology]] stacks used in regulated industries subject to [[GDPR]], [[HIPAA]], and financial data-protection regimes.
    - Provides a cryptographic foundation for [[Federated Learning]] secure aggregation, preventing a server from reconstructing individual model updates.
    - Aligns with the trajectory of [[Confidential Computing]] and zero-trust architectures where the compute substrate is untrusted.

- ### Key Mechanisms
  - **Partially Homomorphic Encryption (PHE)**
    - Supports one algebraic operation only (addition or multiplication) without bound.
    - Classic example: RSA (multiplicative), Paillier (additive).
    - Efficient; used in e-voting, privacy-preserving aggregation.
  - **Levelled (Somewhat) Homomorphic Encryption (LHE / SHE)**
    - Supports both addition and multiplication up to a fixed circuit depth.
    - Schemes: BGV (Brakerski–Gentry–Vaikuntanathan), BFV (Fan–Vercauteren).
    - Suited to analytics pipelines with known computation graphs.
  - **Fully Homomorphic Encryption (FHE)**
    - Supports arbitrary depth circuits via [[Bootstrapping]].
    - Schemes: GSW (Gentry–Sahai–Waters), FHEW, TFHE.
    - TFHE achieves sub-millisecond bootstrapping for individual Boolean gates.
  - **CKKS Scheme (Cheon–Kim–Kim–Song)**
    - Approximate arithmetic over real/complex numbers; controlled rounding error.
    - Native fit for [[Machine Learning]] inference — floating-point weights tolerate small approximation errors.
    - Widely used in privacy-preserving neural network evaluation.
  - **Noise Management**
    - Every HE ciphertext carries a noise budget that shrinks with each multiplication.
    - Modulus switching and key switching are algorithmic techniques to manage noise without full bootstrapping.
    - Hardware acceleration (GPUs, FPGAs, ASICs) is an active research and commercial area.
  - **Number Theoretic Transform (NTT)**
    - The [[Number Theoretic Transform]] enables O(n log n) polynomial multiplication, the inner loop of most HE schemes.
    - Critical to the performance of [[Ring Learning With Errors]]-based schemes.

- ### Applications and Use Cases
  - **Healthcare and Genomics**
    - Encrypted genome-wide association studies (GWAS): hospitals query shared encrypted genomic databases without revealing patient DNA.
    - [[Genomic Data Analysis]] under HE has been demonstrated at scale by IBM, Microsoft, and academic groups.
    - Encrypted medical imaging inference: run diagnostic ML models on encrypted scans at a radiology cloud provider.
  - **Finance**
    - Encrypted credit-scoring: a bank evaluates a loan model on a client's encrypted financial records.
    - Privacy-preserving fraud detection across institutions without sharing raw transaction data.
    - [[Secure Multi-Party Computation]] combined with HE for regulatory reporting (Basel III, MiFID II) without data pooling.
  - **Machine Learning and AI**
    - [[Encrypted Machine Learning]]: inference on encrypted inputs — service provider learns nothing about user queries.
    - Model-parameter protection: encrypt model weights before deploying to untrusted edge hardware.
    - [[Federated Learning]] + HE secure aggregation: gradient updates encrypted before transmission to the aggregation server.
  - **Cloud Outsourcing**
    - General-purpose [[Cloud Computing]] scenarios where the tenant distrusts the hypervisor or system administrator.
    - Complementary to [[Secure Enclaves]] (Intel SGX, AMD SEV) when hardware-root-of-trust is unavailable or untrusted.
  - **Private Information Retrieval**
    - [[Private Information Retrieval]]: retrieve a record from a database without revealing which record was queried.
    - Ad-targeting and search without exposing user intent.
  - **Blockchain and Smart Contracts**
    - Encrypted smart contract state — transactions computed on ciphertext, privacy preserved on-chain.
    - Bridges [[Blockchain]] privacy to programmable contracts; complements [[Zero-Knowledge Proof]]-based systems.

- ### Relationships
  - partOf:: [[Privacy Preserving Technology]]
  - requires:: [[Lattice-Based Cryptography]]
  - requires:: [[Learning With Errors]]
  - uses:: [[Ring Learning With Errors]]
  - uses:: [[Number Theoretic Transform]]
  - enables:: [[Secure Multi-Party Computation]]
  - enables:: [[Federated Learning]]
  - enables:: [[Private Information Retrieval]]
  - enables:: [[Encrypted Machine Learning]]
  - supports:: [[Cloud Computing]]
  - supports:: [[Healthcare Data Privacy]]
  - supports:: [[Genomic Data Analysis]]
  - dependsOn:: [[Post-Quantum Cryptography]]
  - dependsOn:: [[Noise Management]]
  - contrastsWith:: [[Differential Privacy]]
  - contrastsWith:: [[Secure Enclaves]]
  - contrastsWith:: [[Garbled Circuits]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - relatedTo:: [[Oblivious RAM]]
  - relatedTo:: [[Functional Encryption]]
  - bridges-to:: [[Federated Learning]]
  - bridges-to:: [[Confidential Computing]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - standardizedBy:: [[HomomorphicEncryption.org]]
  - standardizedBy:: [[ISO/IEC JTC1 SC27]]

- ### Implementations and Libraries
  - **Microsoft SEAL** — open-source C++ library supporting BFV and CKKS; the reference implementation for many research papers.
  - **OpenFHE** — successor to PALISADE; broad scheme coverage (BGV, BFV, CKKS, TFHE, FHEW); Apache-2 licensed.
  - **TFHE-rs** — Rust implementation of the TFHE scheme by Zama; targets fast programmable bootstrapping for Boolean and integer circuits.
  - **HElib** — IBM Research library; one of the earliest production-grade FHE implementations; supports BGV and CKKS.
  - **Concrete** — Zama's compiler toolchain that maps high-level Python programs to FHE circuits using TFHE-rs as the backend.
  - **Google JAX + FHE** — research integrations allowing differentiable programming pipelines to target encrypted execution.

- ### Standards and Governance Context
  - **HomomorphicEncryption.org consortium** — industry and academic consortium that published a draft API standard for HE libraries and a security parameter white paper establishing recommended parameters for BGV, BFV, and CKKS at 128-bit, 192-bit, and 256-bit security levels.
  - **ISO/IEC JTC 1/SC 27** — Working Group 2 is developing formal standards for HE schemes under the broader cryptographic techniques portfolio.
  - **NIST Post-Quantum Cryptography** — the underlying [[Learning With Errors]] hard problem is the basis of NIST PQC standardised algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium), lending credibility to HE security assumptions.
  - **GDPR / HIPAA alignment** — HE is increasingly cited in data-protection impact assessments as a technical measure enabling processing of special-category data (health, biometric) under privacy-by-design obligations.
  - **DARPA DPRIVE programme** — US government programme aimed at accelerating FHE hardware to close the performance gap versus plaintext compute by several orders of magnitude.

- ### Performance and Practical Considerations
  - Current FHE overhead relative to plaintext computation ranges from ~10× (amortised batched CKKS) to ~10,000× (unbatched gate-level TFHE), depending on scheme and circuit depth.
  - **SIMD batching** (packing multiple plaintexts into a single ciphertext slot vector) recovers much of the throughput loss for data-parallel workloads such as neural network layer evaluation.
  - Hardware acceleration is the primary performance frontier: custom ASICs (e.g. Intel HERACLES, F1 accelerator from MIT) target 4–5 order-of-magnitude speedups for the NTT and modular arithmetic kernels.
  - Choosing the right scheme for a use-case requires balancing noise budget (multiplication depth), ciphertext size, plaintext precision, and bootstrapping frequency.

- ### Provenance
  - sources:: HomomorphicEncryption.org security white paper; OpenFHE documentation; Craig Gentry PhD thesis (Stanford 2009); DARPA DPRIVE programme documentation; ISO/IEC JTC1/SC27 WG2 working documents
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
