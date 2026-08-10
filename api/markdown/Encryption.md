public:: true

# encryption
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bf86075ceab2af34c4bf04695936f6522b383cee6b0d377a410b470499ab5485",
  "@type": "Page",
  "vc:slug": "encryption",
  "title": "encryption",
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
  "@id": "urn:ngm:class:encryption",
  "@type": "Class",
  "label": "Encryption",
  "definition": "Encryption is the cryptographic process of transforming plaintext data into ciphertext using a defined algorithm and secret key, rendering the data unintelligible to any party that does not possess the corresponding decryption key, thereby ensuring confidentiality. Symmetric schemes such as AES-GCM use a single shared secret for both encryption and decryption, providing authenticated encryption with associated data (AEAD) in a single pass; asymmetric schemes such as RSA-OAEP and ECDH use mathematically linked key pairs where the public key encrypts and the private key decrypts. Hybrid constructions combine both paradigms — using asymmetric key exchange to establish a shared session key and then symmetric ciphers for bulk data — as exemplified by TLS 1.3. Encryption is foundational to data-at-rest protection, data-in-transit security, end-to-end encrypted messaging, confidential computing, and post-quantum cryptography.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:ciphering",
      "label": "Ciphering"
    },
    {
      "@id": "urn:ngm:class:data-encryption",
      "label": "Data Encryption"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Random Number Generation"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      },
      {
        "@id": "urn:ngm:class:confidential-computing",
        "label": "Confidential Computing"
      },
      {
        "@id": "urn:ngm:class:end-to-end-encryption",
        "label": "End-to-End Encryption"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:secure-communication",
        "label": "Secure Communication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:aes",
        "label": "AES"
      },
      {
        "@id": "urn:ngm:class:rsa",
        "label": "RSA"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:key-exchange",
        "label": "Key Exchange"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multiparty Computation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
      },
      {
        "@id": "urn:ngm:class:iso-iec-18033",
        "label": "ISO-IEC 18033"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:steganography",
        "label": "Steganography"
      },
      {
        "@id": "urn:ngm:class:obfuscation",
        "label": "Obfuscation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge",
        "label": "Zero Knowledge"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
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
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Encryption is the cryptographic process of transforming plaintext data into ciphertext using a defined algorithm and secret key, ensuring that only authorised parties holding the correct decryption key can recover the original information. It is the primary mechanism for achieving [[Confidentiality]] within the classic [[CIA Triad]] of information security. Symmetric schemes such as [[AES]] employ a single shared secret, while asymmetric schemes such as [[RSA]] and [[Elliptic Curve Cryptography]] use mathematically linked key pairs. Modern deployments combine both paradigms in hybrid constructions — exemplified by [[Transport Layer Security]] — and the field is actively evolving to resist attacks from [[Quantum Computing]] through [[Post-Quantum Cryptography]] standards.

- ### Overview
  - Encryption predates the digital age: classical ciphers such as the Caesar cipher and Vigenère cipher demonstrated the principle of transforming readable text into unintelligible form. Modern encryption is grounded in computational hardness assumptions — for symmetric ciphers this is the infeasibility of exhaustive key search; for asymmetric ciphers this is the intractability of mathematical problems such as integer factorisation ([[RSA]]) and the elliptic curve discrete logarithm problem ([[Elliptic Curve Cryptography]]).
  - Encryption operates at multiple layers of the computing stack:
    - **Data at rest**: files, database records, and storage volumes are encrypted to protect against physical theft or insider access.
    - **Data in transit**: network protocols such as [[Transport Layer Security]] and [[IPsec]] encrypt data as it traverses networks, protecting against eavesdropping and man-in-the-middle attacks.
    - **Data in use**: [[Confidential Computing]] extends encryption into the execution domain using hardware [[Trusted Execution Environment|Trusted Execution Environments]] (TEEs), keeping data encrypted even during processing.
    - **End-to-end encryption (E2EE)**: platforms such as [[Signal Protocol]] and [[WhatsApp]] implement E2EE so that service operators cannot access message content — only communicating endpoints hold keys.
  - The security of an encryption scheme depends on three factors: the strength of the underlying algorithm, the length and quality of the key, and the secrecy of the key material. [[Key Management]] is therefore as critical to security as algorithm selection.

- ### Key Mechanisms
  - **Symmetric Encryption**
    - Uses a single shared secret key for both encryption and decryption.
    - The dominant algorithm is [[AES]] (NIST FIPS 197), operating in modes such as GCM (Galois/Counter Mode), which provides Authenticated Encryption with Associated Data ([[AEAD]]), combining confidentiality and integrity in a single operation.
    - ChaCha20-Poly1305 is a widely deployed alternative, particularly in software implementations on devices lacking AES hardware acceleration.
    - Key lengths: AES-128 (128-bit key), AES-256 (256-bit key); 256-bit is preferred for long-term security against quantum attacks.
  - **Asymmetric Encryption**
    - Uses a public key for encryption and a mathematically linked private key for decryption.
    - [[RSA]]-OAEP is the canonical asymmetric encryption scheme; [[Elliptic Curve Cryptography]] underpins ECDH (key exchange) and ECIES (encryption).
    - Asymmetric operations are computationally expensive and are generally used only to encrypt small payloads (e.g., a symmetric session key) rather than bulk data.
  - **Hybrid Encryption**
    - Combines asymmetric [[Key Exchange]] (e.g., ECDH, X25519) to establish a shared session key, then symmetric encryption ([[AES]]-GCM) for bulk data.
    - [[Transport Layer Security]] (TLS 1.3) is the canonical hybrid construction securing HTTPS, SMTP, and most networked application protocols.
    - [[Noise Protocol Framework]] and [[Signal Protocol]] apply hybrid constructions in end-to-end encrypted messaging.
  - **Authenticated Encryption**
    - [[AEAD]] modes (AES-GCM, ChaCha20-Poly1305) provide simultaneous confidentiality and integrity, preventing ciphertext manipulation attacks.
    - Without authentication, ciphertext malleability can allow attackers to modify messages without detection — a critical flaw exploited in padding oracle attacks.
  - **Post-Quantum Cryptography**
    - [[Quantum Computing]] threatens asymmetric schemes based on factorisation and discrete logarithms; [[Post-Quantum Cryptography]] algorithms rely on problems believed hard for quantum computers, such as module lattice problems.
    - NIST FIPS 203 standardises CRYSTALS-Kyber (ML-KEM) for key encapsulation; FIPS 204 standardises CRYSTALS-Dilithium (ML-DSA) for digital signatures.
    - Symmetric encryption ([[AES]]-256) is considered quantum-resistant with doubled security margin due to Grover's algorithm, requiring only a key-length increase rather than algorithm replacement.
  - **Homomorphic Encryption**
    - [[Homomorphic Encryption]] allows computation on ciphertext without decryption, producing encrypted results that when decrypted match the result of operations on the plaintext.
    - Fully homomorphic encryption (FHE) supports arbitrary computation; partially homomorphic schemes (e.g., Paillier, ElGamal) support a restricted operation set.
    - Active research area with applications in [[Federated Learning]], privacy-preserving analytics, and [[Secure Multiparty Computation]].

- ### Applications and Use Cases
  - **Web and network security**: [[Transport Layer Security]] encrypts virtually all modern web traffic; HTTPS, SMTPS, IMAPS, and FTPS are TLS-wrapped variants of plaintext protocols.
  - **Messaging and communications**: [[Signal Protocol]] implements the Double Ratchet Algorithm for forward secrecy and break-in recovery; adopted by Signal, WhatsApp, and others. Matrix/Element implements [[End-to-End Encryption]] via Megolm for group messaging.
  - **Storage encryption**: Full-disk encryption (BitLocker, LUKS, FileVault) protects laptops and servers against physical theft. Database-level encryption (Transparent Data Encryption in SQL Server, Oracle) and object-level encryption in cloud storage (AWS S3 SSE, Azure Storage Service Encryption) protect data at rest.
  - **Blockchain and cryptocurrency**: [[Blockchain]] systems rely on asymmetric cryptography for wallet addresses and transaction signatures; [[Elliptic Curve Cryptography]] (secp256k1 for Bitcoin, alt curves for Ethereum) underpins ownership proofs. Encrypted mempools and commit-reveal schemes protect transaction privacy.
  - **Confidential computing**: [[Trusted Execution Environment|Trusted Execution Environments]] such as Intel TDX and AMD SEV-SNP extend encryption to data-in-use, enabling [[Confidential Computing]] for cloud workloads and AI model inference without exposing data to cloud providers.
  - **Privacy-enhancing technologies**: [[Zero Knowledge]] proofs can prove knowledge of a plaintext without revealing it; combined with encryption, they enable verifiable computation on private data.
  - **Federated learning and AI**: [[Federated Learning]] deployments use encryption and [[Secure Multiparty Computation]] to aggregate model updates without exposing individual client gradients, addressing privacy concerns in distributed AI training.
  - **Regulatory compliance**: GDPR, HIPAA, PCI-DSS, and other regulations mandate encryption of personal and financial data, driving widespread enterprise adoption of encryption at rest and in transit.
  - **VPN and remote access**: [[IPsec]] and WireGuard encrypt network tunnels for virtual private networks, enabling secure remote access and site-to-site connectivity.

- ### Relationships
  - requires:: [[Key Management]]
  - requires:: [[Cryptography]]
  - requires:: [[Random Number Generation]]
  - requires:: [[Public Key Infrastructure]]
  - enables:: [[Data Protection]]
  - enables:: [[Confidential Computing]]
  - enables:: [[End-to-End Encryption]]
  - enables:: [[Privacy]]
  - enables:: [[Secure Communication]]
  - implements:: [[AES]]
  - implements:: [[RSA]]
  - implements:: [[Elliptic Curve Cryptography]]
  - implements:: [[Post-Quantum Cryptography]]
  - uses:: [[Digital Signature]]
  - uses:: [[Hash Function]]
  - uses:: [[Key Exchange]]
  - supports:: [[Transport Layer Security]]
  - supports:: [[Secure Multiparty Computation]]
  - standardizedBy:: [[NIST]]
  - standardizedBy:: [[ISO/IEC 18033]]
  - contrastsWith:: [[Steganography]]
  - contrastsWith:: [[Obfuscation]]
  - relatedTo:: [[Zero Knowledge]]
  - relatedTo:: [[Access Control]]
  - relatedTo:: [[Homomorphic Encryption]]
  - bridges-to:: [[Blockchain]]
  - bridges-to:: [[Federated Learning]]

- ### Standards and Governance
  - **NIST FIPS 197** — Advanced Encryption Standard (AES); mandatory for US federal use and universally adopted.
  - **NIST FIPS 203** — ML-KEM (CRYSTALS-Kyber) key encapsulation mechanism; post-quantum standard.
  - **NIST FIPS 204** — ML-DSA (CRYSTALS-Dilithium) digital signature; post-quantum standard.
  - **RFC 8446** — TLS 1.3 specification, defining the current hybrid encryption standard for internet protocols.
  - **ISO/IEC 18033** — International standard series covering encryption algorithms: Part 2 (asymmetric ciphers), Part 3 (stream ciphers), Part 4 (block ciphers).
  - **ISO/IEC 27001 / 27002** — Information security management standards requiring encryption controls for sensitive data.
  - **ETSI** — European Telecommunications Standards Institute issues standards for algorithm agility and lawful interception interfaces.
  - **IETF** — Internet Engineering Task Force maintains RFCs governing protocol-level encryption: TLS, DTLS, S/MIME, OpenPGP, Noise Protocol.
  - **GDPR (EU) / CCPA (California)** — Privacy regulations that recognise encryption as a technical safeguard reducing notification obligations after data breaches.
  - **PCI-DSS** — Payment Card Industry Data Security Standard requiring encryption of cardholder data at rest and in transit.

- ### Threat Landscape and Limitations
  - **Key compromise**: encryption provides no protection if the secret key is stolen; [[Key Management]] hygiene — secure generation, storage, rotation, and destruction — is paramount.
  - **Side-channel attacks**: timing, power consumption, electromagnetic emanations, and cache access patterns can leak key material from correct implementations; constant-time algorithms and hardware security modules ([[HSM]]) mitigate these.
  - **Algorithm deprecation**: MD5 and SHA-1 are broken; RC4 and DES are deprecated; 3DES was retired in NIST SP 800-131A Rev. 2. Cryptographic agility — the ability to swap algorithms without redesigning systems — is a design requirement.
  - **Harvest now, decrypt later**: adversaries capturing today's encrypted traffic may decrypt it once quantum computers mature; [[Post-Quantum Cryptography]] migration addresses this threat.
  - **Implementation bugs**: memory-safety vulnerabilities in cryptographic libraries (e.g., Heartbleed in OpenSSL) can expose keys or plaintext; formally verified implementations (e.g., HACL*) reduce this risk.
  - **Legal and regulatory tension**: lawful access demands and "exceptional access" proposals (backdoors) remain controversial; cryptographic consensus holds that algorithmic backdoors are incompatible with strong security.

- ### Current Landscape (2026)
  - The defining shift is the move to post-quantum encryption: on 13 August 2024 NIST finalised its first three PQC standards — FIPS 203 (ML-KEM, the primary general-encryption key-encapsulation mechanism, formerly CRYSTALS-Kyber), FIPS 204 (ML-DSA signatures) and FIPS 205 (SLH-DSA hash-based signatures) — urging administrators to begin migrating immediately.
  - NIST broadened the portfolio by selecting the code-based HQC (Hamming Quasi-Cyclic) as a backup KEM to ML-KEM on 11 March 2025 (draft standard expected early 2026, final 2027), while FIPS 206 (FN-DSA, based on Falcon) remained in draft as of mid-2026; NIST also published SP 800-227 (Recommendations for KEMs) in September 2025.
  - Real-world deployment accelerated sharply around the hybrid X25519MLKEM768 key exchange: Cloudflare reported on 7 April 2026 that more than half of the human web traffic it processes now uses post-quantum key agreement, up from roughly 2% in early 2024, and Chrome, Edge and Firefox now enable the hybrid handshake by default.
  - Encrypted messaging led the consumer rollout — Apple shipped its PQ3 protocol for iMessage from iOS 17.4 in 2024 (adding ML-KEM to the ongoing ratchet for "Level 3" security), Signal deployed its PQXDH hybrid, and platforms such as Zoom added PQC support; OpenSSL 3.5 now ships a quantum-resistant hybrid KEM.
  - Regulatory and vendor timelines hardened: NSA's CNSA 2.0 mandates PQC in new national-security acquisitions from 1 January 2027, NIST IR 8547 targets deprecating RSA-2048/ECC P-256 by 2030 and removing quantum-vulnerable algorithms by 2035, and Google announced a 2029 target for completing PQC migration across Chrome, Android and Google Cloud.
  - The frontier is shifting from confidentiality to authentication: Google and others are now prioritising signature migration (ML-DSA/SLH-DSA) to counter "trust now, forge later", with Let's Encrypt committing to Merkle Tree Certificates for post-quantum Web PKI (staging late 2026, production 2027).
  - Open challenges as of 2026 include a near-total gap in post-quantum certificates (one measurement study found ~49% of domains support hybrid PQ key exchange but 0% use hybrid PQ certificates), no FIPS 140-3 validated module yet offering PQC in approved mode, and the "harvest now, decrypt later" exposure of long-lived data still under classical RSA/ECC.

- ### References
  - 1. NIST (2024). NIST Releases First 3 Finalized Post-Quantum Encryption Standards (FIPS 203/204/205). https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards
  - 2. NIST CSRC (2025). Post-Quantum Cryptography Standardization Process (HQC selection, FIPS 206 status). https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization
  - 3. Shattered.io (2026). Post-Quantum Cryptography: 50% of Web Now Safe [2026]. https://shattered.io/post-quantum-cryptography-2026/
  - 4. Wiz (2026). State of Post-Quantum Cryptography (Google 2029 target; authentication pivot). https://www.wiz.io/blog/state-of-post-quantum-cryptography
  - 5. Encryption Consulting (2026). PQC Migration Frameworks: What Changed Between March and June 2026. https://www.encryptionconsulting.com/pqc-migration-frameworks-updates-june-2026/
  - 6. arXiv (2026). Measurement Study of Post-Quantum Readiness of the Internet: 2026. https://arxiv.org/html/2606.16473v1

- ### Provenance
  - sources:: NIST FIPS 197; NIST FIPS 203/204; RFC 8446 (TLS 1.3); ISO/IEC 18033; Rogaway & Shrimpton (2006) "A Provable-Security Treatment of the Key-Wrap Problem"; Ferguson, Schneier & Kohno "Cryptography Engineering"
  - updated:: 2026-06-13
