- ### OntologyBlock
  id:: bc9006-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: BC-9006
	- domain:: bc
	- owl:class:: bc:CryptographicProtocol
	- public-access:: true

## Definition

Cryptographic Protocol encompasses the mathematical frameworks and algorithmic procedures securing blockchain systems through cryptographic primitives including hash functions, digital signatures, encryption schemes, and commitment protocols. Bitcoin employs SHA-256 for proof-of-work hashing and address generation, while Ethereum utilizes Keccak-256 (SHA-3) for state trie hashing and content addressing. Digital signature schemes include Elliptic Curve Digital Signature Algorithm (ECDSA) on secp256k1 curve providing 128-bit security with public key recovery, Edwards-curve Digital Signature Algorithm (EdDSA) offering deterministic signatures with faster verification, and Schnorr signatures enabling signature aggregation for multi-party transactions and improved privacy through key aggregation. Zero-knowledge proof systems provide privacy-preserving verification: zk-SNARKs (Zero-Knowledge Succinct Non-Interactive Arguments of Knowledge) enable constant-size proofs with trusted setup ceremonies, zk-STARKs eliminate trusted setups through transparent construction at the cost of larger proof sizes, and Bulletproofs provide efficient range proofs for confidential transactions without trusted setup. Advanced cryptographic protocols include threshold signatures distributing signing authority across multiple parties with (t,n) access structures, homomorphic encryption enabling computation on encrypted data, and multi-party computation (MPC) allowing collaborative computation without revealing private inputs. In 2026, post-quantum cryptography transitions blockchain systems to NIST-standardized lattice-based schemes, hash-based signatures (SPHINCS+), and code-based cryptosystems, while verifiable delay functions (VDFs) enhance consensus protocols with time-based proofs resistant to parallelization attacks.

## References

- Boneh, D. & Shoup, V. (2023). "A Graduate Course in Applied Cryptography." https://toc.cryptobook.us/
- Ben-Sasson, E. et al. (2014). "Succinct Non-Interactive Zero Knowledge for a von Neumann Architecture." USENIX Security 2014.
- Bünz, B. et al. (2018). "Bulletproofs: Short Proofs for Confidential Transactions." IEEE Symposium on Security and Privacy.
- NIST. (2024). "Post-Quantum Cryptography Standardization." https://csrc.nist.gov/projects/post-quantum-cryptography
- Gennaro, R. & Goldfeder, S. (2020). "Threshold Cryptosystems from Threshold Fully Homomorphic Encryption." CRYPTO 2020.
- Boneh, D., Bonneau, J., Bünz, B., & Fisch, B. (2018). "Verifiable Delay Functions." CRYPTO 2018.
