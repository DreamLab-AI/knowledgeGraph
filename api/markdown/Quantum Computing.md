- ### OntologyBlock
  id:: quantum-computing-ontology
  collapsed:: true
	- ontology:: true
	- source-domain:: ngm
	- term-id:: NGM-8006
	- preferred-term:: Quantum Computing
	- status:: active
	- public-access:: true
	- maturity:: reviewed
	- owl:class:: mv:QuantumComputing
	- belongsToDomain:: [[Emerging Technology]]
	- definition:: A paradigm of computation that harnesses quantum mechanical phenomena such as superposition, entanglement, and interference to process information in ways fundamentally different from classical computers, enabling exponential speedups for specific problem classes including cryptographic attacks (via Shor's algorithm) and optimization problems, thereby driving the development of post-quantum cryptography.

## Definition

Quantum computing leverages quantum bits (qubits) that can exist in superposition of states (both 0 and 1 simultaneously) and can be entangled with other qubits, enabling parallel processing of exponentially many states. While current quantum computers lack the power to break real-world cryptographic keys, they represent a significant future threat to public-key cryptography systems.

## Cryptographic Impact

### Vulnerable Algorithms
Most widely used public-key algorithms rely on problems solvable by quantum computers:
- **RSA**: Integer factorization problem
- **ECC (Elliptic Curve Cryptography)**: Discrete logarithm problem
- **Diffie-Hellman**: Discrete logarithm problem

Shor's algorithm can efficiently solve these on sufficiently powerful quantum computers.

### Quantum-Resistant Status
- **Symmetric Encryption (AES)**: Grover's algorithm provides quadratic speedup; AES-256 remains secure
- **Hash Functions**: Generally considered quantum-resistant
- **Post-Quantum Algorithms**: Lattice-based, hash-based, code-based cryptography

## Post-Quantum Cryptography (PQC)

Development of algorithms secure against quantum attacks:

### NIST Standardized Algorithms (2024-2025)
- **ML-KEM (CRYSTALS-Kyber)**: Key encapsulation mechanism
- **ML-DSA (CRYSTALS-Dilithium)**: Digital signature algorithm
- **SLH-DSA (SPHINCS+)**: Hash-based digital signatures
- **HQC**: Code-based encryption (standardization announced 2025)

### Migration Timeline
- EU roadmap: 2030-2035 deadlines depending on application
- CISA and NIST guidance for phased migration
- Over half of Cloudflare traffic now post-quantum protected

## Store Now, Decrypt Later Threat

Adversaries collecting encrypted data today with intent to decrypt once quantum computers mature. This makes PQC migration urgent even before cryptographically relevant quantum computers exist.

## Current State (2025)

- Quantum computers "rather anemic" - not yet capable of breaking real-world cryptographic keys
- Dramatic progress anticipated over next 5 years toward fault-tolerant quantum computing
- Crypto-agility increasingly important for future-proofing systems

## Blockchain Implications

- Wallet private keys (ECDSA) vulnerable to future quantum attacks
- Need for quantum-resistant signature schemes
- Migration complexity for existing blockchain networks
- Research into quantum-resistant consensus mechanisms

- ![Ged263PWYAAhhN7.jpeg](../assets/Ged263PWYAAhhN7_1733904975429_0.jpeg)

## Relationships
	- #### Relationships
	  id:: quantum-computing-relationships
	  collapsed:: true
		- is-subclass-of:: [[Emerging Technology]]
		- threatens:: [[Asymmetric Encryption]]
		- threatens:: [[Digital Signature]]
		- drives-development-of:: [[Post-Quantum Cryptography]]
		- related-to:: [[Artificial Intelligence]]
		- impacts:: [[Blockchain]]
		- impacts:: [[Cryptography]]

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with PQC and cryptographic impact

#quantum-computing #post-quantum-cryptography #cryptography #emerging-technology #blockchain-security