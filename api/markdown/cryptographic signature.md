A cryptographic signature is a mathematical scheme that allows a private-key holder to produce an unforgeable, publicly-verifiable proof that a specific message or data item was authorised by them, delivering both authenticity and non-repudiation. The signing algorithm combines a cryptographic hash of the message with the signer's private key to produce a compact signature value; any party holding the corresponding public key can verify the signature without accessing the private key. Dominant schemes include ECDSA (Bitcoin, Ethereum), Ed25519 (Solana, Cosmos, OpenSSH), RSA-PSS (TLS, S/MIME), and Schnorr (BIP-340). Cryptographic signatures are a foundational primitive underpinning transaction authorisation, code signing, verifiable credentials, and authenticated key exchange across virtually all secure digital infrastructure.

### Overview

- Cryptographic signatures solve the fundamental problem of establishing authenticated provenance over an open network, where relying parties cannot inspect the signer's hardware or environment. Unlike symmetric [[Message Authentication Code]] schemes, which require a shared secret between signer and verifier, signature schemes are asymmetric: the private key is secret to the signer, while the public key can be freely distributed.
- Key properties guaranteed by a correctly-implemented signature:
  - **Authenticity** — the message was produced or approved by the holder of the private key.
  - **Integrity** — any modification to the message after signing invalidates the signature.
  - **Non-repudiation** — the signer cannot credibly deny having signed the message.
- These three properties together form the contractual bedrock of digital commerce, governance, and infrastructure security.
- The security of a signature scheme rests on a computational hardness assumption: for ECDSA and Ed25519, the [[Elliptic Curve Cryptography]] discrete-logarithm problem; for RSA-PSS, the integer factorisation problem. Advances in [[Post-Quantum Cryptography]] (CRYSTALS-Dilithium, FALCON, SPHINCS+) are being standardised by [[NIST]] to replace current schemes against future quantum adversaries.

### Key Mechanisms

#### Signing Process

- Input message $m$ is hashed to a fixed-length digest $h = H(m)$ using a collision-resistant [[Hash Function]] (e.g., SHA-256, SHA-3, BLAKE2b).
- The digest $h$ is transformed using the signer's [[Private Key]] and algorithm-specific randomness (or a deterministic nonce derivation as in Ed25519) to produce the signature $\sigma$.
- The resulting $\sigma$ is appended to or transmitted alongside $m$.

#### Verification Process

- The verifier independently computes $h = H(m)$ from the received message.
- Using the signer's [[Public Key]] and the same algorithm, the verifier checks that $\sigma$ is consistent with $h$ and the public key.
- A valid result confirms authenticity and integrity; an invalid result signals tampering or a wrong key.

#### Deterministic vs. Randomised Signing

- ECDSA requires a fresh, unpredictable nonce per signature; nonce reuse catastrophically leaks the [[Private Key]] (the PlayStation 3 hack).
- [[Ed25519]] uses a deterministic nonce derived from the message and a secret scalar, eliminating this class of vulnerability.
- [[RSA-PSS]] uses a random salt for probabilistic padding, replacing the older PKCS#1 v1.5 deterministic scheme.

### Signature Schemes

- **[[ECDSA]]** (Elliptic Curve Digital Signature Algorithm) — dominant in Bitcoin, Ethereum, and TLS certificates; defined in ANSI X9.62 and FIPS 186-4. Compact signatures (~64 bytes at 256-bit security).
- **[[Ed25519]]** — Edwards-curve variant; constant-time, deterministic, highly resistant to side-channel attacks. Used in OpenSSH, Signal Protocol, Solana, Cosmos, Polkadot, and the W3C [[Verifiable Credential]] suite (JsonWebSignature2020, Ed25519Signature2020).
- **[[Schnorr Signature]]** — linearly homomorphic, enabling key and signature aggregation; adopted in Bitcoin BIP-340 (Taproot). Simplifies [[Multi-Signature]] protocols.
- **[[RSA-PSS]]** — Probabilistic Signature Scheme variant of RSA; used in X.509 certificates, S/MIME, and legacy PKI systems. Requires larger key sizes (2048–4096 bits) for equivalent security.
- **SPHINCS+** / **CRYSTALS-Dilithium** — [[Post-Quantum Cryptography]] candidates standardised by NIST (FIPS 204/205); lattice-based and hash-based respectively, resistant to quantum attacks.
- **[[Blind Signature]]** — allows signing of a message whose content is concealed from the signer (Chaum blind signatures); used in privacy-preserving digital cash and anonymous credential systems.
- **[[Threshold Signature]]** — distributed signing protocol where $t$ of $n$ parties must collaborate to produce a valid signature, with no single party holding the full private key; underpins MPC wallets and institutional custody.

### Applications and Use Cases

#### Blockchain and Web3

- Every transaction on Bitcoin, Ethereum, Solana, and other networks carries a cryptographic signature generated by the sender's [[Private Key]], authorising transfer of value or execution of a [[Smart Contract]].
- [[Multi-Signature]] wallets require signatures from multiple key holders, enforcing organisational governance controls.
- [[Threshold Signature]] schemes are deployed by institutional custodians (Fireblocks, Anchorage) to eliminate single-key risk.
- Validator nodes in proof-of-stake networks sign attestations and block proposals; fork-choice safety depends on the unforgeable nature of these signatures.

#### Identity and Credentials

- [[Decentralised Identity]] systems (DIDs) bind a controller to a [[Public Key]]; authenticated operations require proof of the corresponding private key via signature.
- [[Verifiable Credential]] presentations (W3C VC Data Model) require a cryptographic signature over the credential payload, enabling offline verification without contacting the issuer.
- [[Self-Sovereign Identity]] wallets sign credential presentations before sharing with verifiers.
- OpenID Connect and OAuth 2.0 ID tokens (JWTs) are signed with RS256, ES256, or EdDSA to prevent tampering by intermediaries.

#### Secure Communications and PKI

- [[Transport Layer Security]] handshakes include signature-based authentication of server certificates; mutual TLS also authenticates clients.
- [[Secure Email]] protocols (S/MIME, OpenPGP) sign and optionally encrypt message bodies; [[Public Key Infrastructure]] chains anchor trust to certificate authorities.
- SSH host and user authentication uses Ed25519 or ECDSA signatures.

#### Software and Supply Chain

- [[Code Signing]] ensures that software binaries distributed over the internet originate from a known publisher and have not been tampered with (Authenticode, Apple notarisation, GPG-signed package repositories).
- [[Supply Chain Attestation]] frameworks (SLSA, in-toto) record signed provenance metadata at each build step, enabling consumers to verify the full build graph.
- Container image signing (Sigstore/cosign, Notary v2) extends this to OCI registries.

#### AI and Emerging Domains

- [[AI Model Provenance]] use cases employ signatures to bind model weights and training data manifests to a known publisher, combating model poisoning and misattribution.
- Signed inference results and data attestations are proposed mechanisms for auditable AI governance pipelines.

### Standards and Context

- **FIPS 186-5** (NIST, 2023) — the current US federal standard for Digital Signature Algorithms; mandates ECDSA and approves EdDSA (Ed25519), deprecating RSA below 2048 bits and DSA.
- **RFC 8032** (IETF, 2017) — specifies EdDSA and Ed25519/Ed448; widely adopted in internet protocols.
- **RFC 8017** (PKCS #1 v2.2) — specifies RSA-PSS and RSASSA-PKCS1-v1_5 for TLS, S/MIME.
- **ANSI X9.62 / SEC 1** — foundational industry specifications for ECDSA.
- **BIP-340** (Bitcoin Improvement Proposal) — defines Schnorr signatures for Bitcoin Taproot, enabling signature aggregation.
- **W3C Verifiable Credentials Data Model 2.0** — mandates cryptographic proof mechanisms for credential presentations.
- **NIST SP 800-208** (post-quantum readiness guidance) and **FIPS 204/205** — standardise CRYSTALS-Dilithium and SPHINCS+ as migration targets.
- **IETF COSE** (RFC 8152) and **JOSE** (RFC 7515 JWS) — standard serialisation formats for signed data in CBOR and JSON environments respectively.
- Key management standards: **NIST SP 800-57** (key management recommendations), **ISO/IEC 11770** (key management series).

### Security Considerations

- **Private key compromise** is the primary attack vector; hardware security modules ([[HSM]]) and air-gapped key ceremonies mitigate this.
- **Nonce reuse** in ECDSA is catastrophic; deterministic schemes (Ed25519) eliminate this risk by design.
- **Algorithm agility** — systems should be designed to upgrade signature schemes; hardcoded algorithm choices complicate migration to [[Post-Quantum Cryptography]].
- **Side-channel attacks** — timing and power-analysis attacks can leak private key material from non-constant-time implementations; Ed25519 reference implementations are constant-time.
- **Quantum threat** — Shor's algorithm would break ECDSA, Ed25519, and RSA-PSS on a sufficiently powerful quantum computer; NIST post-quantum migration is underway.

### Current Landscape (2026)

- On 13 August 2024 NIST finalised its first post-quantum signature standards, FIPS 204 (ML-DSA, from CRYSTALS-Dilithium) and FIPS 205 (SLH-DSA, from SPHINCS+); the FALCON-derived FN-DSA (draft FIPS 206) remains unfinalised as of 2026, with publication expected late 2026 or early 2027.
- NIST IR 8547 (initial public draft, November 2024) sets the migration clock for classical signatures: RSA, ECDSA and EdDSA are deprecated after 2030 and disallowed after 2035, while NSA's CNSA 2.0 mandates ML-DSA-87 for national security systems with new products required to use CNSA 2.0 algorithms from 1 January 2027.
- The key-agreement half of the transition is largely solved: the X25519MLKEM768 hybrid is now the default in Chrome (since v124, April 2024), Firefox, Safari 26 and Edge, and Cloudflare telemetry reported at RWPQC 2026 that roughly 65% of non-bot traffic already negotiates ML-KEM, though origin servers lag near 10%.
- Post-quantum authentication has barely started: a June 2026 measurement study found 0% adoption of PQC or hybrid X.509 certificates in the wild, with TLS certificates still signed by RSA (~57%) and ECDSA (~43%), and no ML-DSA root chains into the Mozilla, Apple, Microsoft or Chrome trust stores.
- Because ML-DSA signatures and keys are roughly 40 times larger than ECDSA (a naive TLS swap adds ~14KB per handshake), Google Chrome and Cloudflare are pursuing Merkle Tree Certificates (MTCs) via the new IETF PLANTS working group rather than heavy X.509 chains, with a Chrome/Cloudflare feasibility experiment underway and CA onboarding phases planned for 2027.
- Let's Encrypt committed on 3 June 2026 to MTCs as its post-quantum Web PKI path (staging targeted late 2026, production 2027), and the IETF draft-ietf-tls-mldsa reached working-group last call around May 2026.
- Key frontier problems as of 2026 are operational, not cryptographic: no FIPS 140-3 validated module yet offers PQC in approved mode (with FIPS 140-2 validations moving to the Historical list on 21 September 2026), HSM firmware often lacks ML-DSA support, DNSSEC signatures no longer fit in UDP without fragmentation, and most organisations lack a cryptographic inventory of where signing actually happens.

### References

- 1. NIST / CSRC (2024). Announcing Approval of Three FIPS for Post-Quantum Cryptography (FIPS 203/204/205). https://csrc.nist.gov/news/2024/postquantum-cryptography-fips-approved
- 2. NIST (2024). Transition to Post-Quantum Cryptography Standards (NIST IR 8547, initial public draft). https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8547.ipd.pdf
- 3. Google Security Blog (2026). Cultivating a robust and efficient quantum-safe HTTPS (Merkle Tree Certificates / PLANTS). https://blog.google/security/cultivating-a-robust-and-efficient-quantum-safe-https/
- 4. Encryption Consulting (2026). PQC Migration Frameworks: What Changed Between March and June 2026 (Let's Encrypt MTCs, FIPS 140-3 gap). https://www.encryptionconsulting.com/pqc-migration-frameworks-updates-june-2026/
- 5. Evertrust (2026). Hybrid Post-Quantum Certificates: Why Your First PQC Deployment Is Not What You Think (draft-ietf-tls-mldsa, X25519MLKEM768 adoption). https://evertrust.io/blog/hybrid-post-quantum-certificates/
- 6. arXiv (2026). Measurement Study of Post-Quantum Readiness of the Internet: 2026. https://arxiv.org/html/2606.16473v1

### Provenance

