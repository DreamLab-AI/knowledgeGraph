
A cryptographic mechanism that uses asymmetric key pairs to produce a verifiable seal on digital data, ensuring authenticity, integrity, and non-repudiation of messages, transactions, and documents across distributed and decentralised systems.

- ### Semantic Classification

- ### Content

  - ## Technical Details
  - **Core Components**:
		- Private key: Creates signature (kept secret)
		- Public key: Verifies signature (shared openly)
		- Hash function: Produces message digest
		- Signature algorithm: Generates cryptographic proof
  - **Signature Algorithms**:
		- ECDSA: Bitcoin, Ethereum standard
		- EdDSA: Fast, constant-time signatures
		- BLS: 50% smaller, aggregatable
		- Schnorr: Native multi-signature support
  - **Blockchain Role**:
		- Transaction authorization
		- Wallet ownership proof
		- Smart contract execution
		- Consensus participation
  - **2024 Developments**: Post-quantum algorithms (ML-DSA, Mayo), AI-enhanced fraud detection, blockchain-anchored document signing
  - ## Applications
  - Cryptocurrency transaction signing
  - Document authentication
  - Code signing and software verification
  - Email security (S/MIME, PGP)
  - Metaverse identity verification

- ### Current Landscape (2026)
  - On 13 August 2024 NIST finalised its first post-quantum signature standards: FIPS 204 (ML-DSA, derived from CRYSTALS-Dilithium) as the recommended general-purpose scheme and FIPS 205 (SLH-DSA, from SPHINCS+) as a stateless hash-based backup; draft FIPS 206 (FN-DSA, from FALCON) for compact lattice signatures remained under development into 2026.
  - Migration, not algorithm choice, is now the frontier: NIST IR 8547 sets deprecation of RSA and elliptic-curve signatures after 2030 and disallowance by 2035, while NSA's CNSA 2.0 mandates ML-DSA-87 for national security systems, pushing enterprises toward hybrid and composite deployments.
  - Real-world PQC deployment in 2026 is concentrated in TLS key agreement rather than signatures: Chrome's X25519MLKEM768 hybrid group reached over 30% of TLS 1.3 handshakes per Cloudflare Radar, and OpenSSL 3.5 (April 2025) added native ML-KEM and ML-DSA, but no publicly trusted CA has yet issued an ML-DSA root chaining into the Mozilla, Apple, Microsoft or Chrome trust stores.
  - Standards bodies are converging on hybrid transition models: RFC 9794 (December 2024) framed hybrid KEMs, the IETF LAMPS working group is specifying composite ML-DSA certificates (draft-ietf-lamps-pq-composite-sigs), and draft-ietf-tls-mldsa was still in working-group last call as of May 2026.
  - At the CA/Browser Forum, ballot SMC-013 (finalised July 2025) made S/MIME the first use case to permit ML-DSA and ML-KEM in production certificates, while a parallel code-signing ballot stalled after Microsoft declined to support it pending its own PQC transition announcement.
  - In Europe, eIDAS 2.0 (Regulation (EU) 2024/1183, in force 20 May 2024) reshaped qualified electronic signatures: every member state must offer a certified EU Digital Identity (EUDI) Wallet by December 2026, and from December 2027 wallets must let citizens create qualified electronic signatures free of charge for non-professional use.
  - The 2025 eIDAS implementing acts locked in binding reference standards for remote QSCD management (IR 2025/847), qualified certificates (IR 2025/1943) and validation, folding server-side remote signing inside FIPS 140-3 / EN 419 221-5 HSMs into the QES regime; from May 2026 remote identity proofing must meet certified requirements (ETSI TS 119 461), and the trust-list ecosystem migrated from TLv5 to TLv6 in April 2026.
  - Open challenges as of 2026 include ML-DSA signatures roughly 50 times larger than P-256 ECDSA (inflating certificate chains and handshake sizes), the unresolved hybrid-versus-pure debate across conflicting compliance regimes, and the absence of publicly trusted PQC roots leaving most authentication still ECDSA/RSA-signed.

- ### References
  - 1. NIST / CSRC (2024). Post-Quantum Cryptography FIPS Approved (FIPS 203, 204, 205). https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved
  - 2. NIST (2024). FIPS 204: Module-Lattice-Based Digital Signature Standard (ML-DSA). https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.204.pdf
  - 3. Evertrust (2026). Hybrid Post-Quantum Certificates: Why Your First PQC Deployment Is Hybrid. https://evertrust.io/blog/hybrid-post-quantum-certificates/
  - 4. Cloudflare (2025). The State of the Post-Quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
  - 5. Corey Bonnell (2025). Post-quantum readiness at the CA/Browser Forum: a mixed bag (Ballot SMC-013). https://www.linkedin.com/pulse/post-quantum-readiness-cabrowser-forum-mixed-bag-corey-bonnell-vqnxe
  - 6. Hopae (2026). How to be eIDAS 2.0 ready in 2026 (EUDI Wallet, QES, implementing acts). https://www.hopae.com/blog/how-to-be-eidas-2.0-ready-in-2026

- ### Provenance

