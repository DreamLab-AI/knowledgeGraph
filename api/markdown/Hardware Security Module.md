public:: true

# hardware security module
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dc8cc42a4a025ed3c31e7f2598cff08cb06a451d0ab548fe9a3bf0893764749a",
  "@type": "Page",
  "vc:slug": "hardware-security-module",
  "title": "hardware security module",
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
  "@id": "urn:ngm:class:hardware-security-module",
  "@type": "Class",
  "label": "Hardware Security Module",
  "definition": "A Hardware Security Module (HSM) is a dedicated, tamper-evident and tamper-resistant hardware appliance that generates, stores, and manages cryptographic keys in a physically protected environment, performing sensitive cryptographic operations—such as digital signing, bulk encryption, key derivation, and random-number generation—entirely within its secure boundary so that plaintext key material is never exposed to the host system. HSMs are validated against formal security standards including FIPS 140-2/140-3 (Levels 1–4) and Common Criteria EAL4+, and are mandated by payment card schemes (PCI-DSS, PCI-P2PE), certificate authority trust frameworks, and government PKI and national-security infrastructures. They are available as PCIe cards, rack-mounted network appliances, USB tokens, and cloud-hosted dedicated services, all exposing a standardised PKCS#11 (Cryptoki) API. Unlike software keystores or Trusted Execution Environments, HSMs respond to physical tamper events by irreversibly zeroing all stored key material, making them the highest-assurance key-custody mechanism in mainstream deployment.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-hardware",
      "label": "Cryptographic Hardware"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-key-management", "label": "Cryptographic Key Management"},
      {"@id": "urn:ngm:class:encryption", "label": "Encryption"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"},
      {"@id": "urn:ngm:class:random-number-generation", "label": "Random Number Generation"},
      {"@id": "urn:ngm:class:pkcs11", "label": "PKCS#11"},
      {"@id": "urn:ngm:class:symmetric-key-cryptography", "label": "Symmetric Key Cryptography"},
      {"@id": "urn:ngm:class:asymmetric-key-cryptography", "label": "Asymmetric Key Cryptography"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:public-key-infrastructure", "label": "Public Key Infrastructure"},
      {"@id": "urn:ngm:class:key-management", "label": "Key Management"},
      {"@id": "urn:ngm:class:code-signing", "label": "Code Signing"},
      {"@id": "urn:ngm:class:certificate-authority", "label": "Certificate Authority"},
      {"@id": "urn:ngm:class:payment-security", "label": "Payment Security"},
      {"@id": "urn:ngm:class:secure-boot", "label": "Secure Boot"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:tamper-resistance", "label": "Tamper Resistance"},
      {"@id": "urn:ngm:class:hardware-root-of-trust", "label": "Hardware Root of Trust"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:fips-140", "label": "FIPS 140"},
      {"@id": "urn:ngm:class:common-criteria", "label": "Common Criteria"},
      {"@id": "urn:ngm:class:pci-dss", "label": "PCI-DSS"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:trusted-execution-environment", "label": "Trusted Execution Environment"},
      {"@id": "urn:ngm:class:secure-enclave", "label": "Secure Enclave"},
      {"@id": "urn:ngm:class:software-keystore", "label": "Software Keystore"},
      {"@id": "urn:ngm:class:trusted-platform-module", "label": "Trusted Platform Module"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptography", "label": "Cryptography"},
      {"@id": "urn:ngm:class:zero-trust-architecture", "label": "Zero Trust Architecture"},
      {"@id": "urn:ngm:class:secure-element", "label": "Secure Element"},
      {"@id": "urn:ngm:class:cloud-key-management-service", "label": "Cloud Key Management Service"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:blockchain-key-custody", "label": "Blockchain Key Custody"},
      {"@id": "urn:ngm:class:confidential-computing", "label": "Confidential Computing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:hsm", "label": "HSM"},
    {"@id": "urn:ngm:class:cryptographic-security-module", "label": "Cryptographic Security Module"}
  ],
  "quality": 0.76,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - A Hardware Security Module (HSM) is a dedicated, tamper-evident hardware appliance that generates, stores, and manages [[Cryptographic Key Management|cryptographic keys]] in a physically protected environment, executing [[Encryption]], [[Digital Signature]], and [[Key Management]] operations entirely within its secure boundary so that plaintext key material is never exposed to the host system. HSMs are certified against [[FIPS 140]] (Levels 1–4) and [[Common Criteria]] EAL4+, are mandated by [[PCI-DSS]] for payment-card environments, and provide the [[Hardware Root of Trust]] required by [[Public Key Infrastructure]] deployments, [[Certificate Authority]] operations, and national-security cryptographic frameworks.

- ### Overview
  - HSMs address the fundamental key-custody problem: if encryption keys reside in general-purpose OS memory, a single software compromise exposes all protected material. HSMs solve this by holding keys exclusively within a tamper-responding perimeter that irreversibly zeroes storage on intrusion detection.
  - The threat model distinguishes HSMs from purely software solutions such as a [[Software Keystore]] or OS keyring. Even a fully patched, hardened server running in a [[Trusted Execution Environment]] cannot guarantee physical key confidentiality the way a FIPS 140-3 Level 3 or 4 HSM can.
  - HSMs are now available in four deployment form-factors:
    - **PCIe cards** — embedded directly in a server, offering low latency (e.g. Thales Luna PCIe, Utimaco SecurityServer).
    - **Network-attached appliances** — rack-mounted boxes shared across multiple hosts, enabling centralised key management at the cost of slightly higher latency.
    - **USB/portable tokens** — used for offline root CA key ceremonies or administrator credentials.
    - **Cloud HSM services** — AWS CloudHSM, Azure Dedicated HSM, Google Cloud HSM; they replicate HSM behaviour in virtualised environments but with shared-infrastructure trust trade-offs.
  - The dominant programming interface is [[PKCS#11]] (Cryptoki), an OASIS-standardised C API that abstracts over hardware vendor differences, allowing the same application code to target different HSM vendors.

- ### Key Components and Mechanisms
  - **Secure key storage** — volatile or battery-backed non-volatile RAM inside the security perimeter; keys are never exported in plaintext.
  - **[[Random Number Generation]]** — a certified hardware true random number generator (TRNG) seeds all key generation, ensuring entropy quality that software PRNGs cannot guarantee.
  - **Cryptographic accelerators** — dedicated co-processors for AES, RSA/ECC, SHA, and increasingly post-quantum algorithms (CRYSTALS-Kyber, CRYSTALS-Dilithium under NIST FIPS 203/204 trajectories).
  - **[[Tamper Resistance]] and tamper evidence** — active mesh sensors, voltage monitors, and temperature sensors trigger zeroisation; tamper-evident seals and epoxy potting provide physical evidence of intrusion attempts.
  - **[[Hardware Root of Trust]]** — the HSM's identity is rooted in factory-provisioned keys and certificates, enabling remote attestation of device integrity.
  - **Role-based access control (RBAC)** — HSM operators, security officers, and auditors are separated by enforced M-of-N (quorum) authentication, preventing single-person key compromise.
  - **Audit logging** — all cryptographic operations are logged to tamper-evident on-device logs or exported to an external SIEM for [[Zero Trust Architecture]] compliance.
  - **[[PKCS#11]] API** — the OASIS Cryptoki standard is the universal application interface; vendors also expose JCE/JCA (Java), Microsoft CNG/CAPI (Windows), and OpenSSL engine interfaces.

- ### Applications and Use Cases
  - **[[Certificate Authority]] (CA) key protection** — root CA and intermediate CA private keys for [[Public Key Infrastructure]] are stored in HSMs so certificate signing operations never expose private key material; this is a hard requirement in WebTrust and eIDAS trust frameworks.
  - **[[Payment Security]] and banking** — PCI-DSS, PCI-P2PE, and EMV schemes require HSMs for PIN block encryption, card personalisation, ATM master key exchange, and Point-to-Point Encryption. Every major payment processor runs an HSM estate.
  - **[[Code Signing]]** — software publishers (OS vendors, device manufacturers) use HSMs to hold code-signing keys, ensuring binaries can only be signed by authorised personnel with quorum approval.
  - **[[Secure Boot]] chain** — OEM firmware signing keys stored in HSMs anchor the platform boot chain; compromise of these keys would allow persistent firmware-level malware to be distributed to millions of devices.
  - **[[Blockchain Key Custody]]** — institutional cryptocurrency custodians use HSMs to protect private keys for digital asset wallets, satisfying regulatory requirements for segregated key custody (e.g. UK FCA, SEC guidelines on crypto asset safekeeping).
  - **[[Confidential Computing]]** — HSMs are used alongside [[Trusted Execution Environment]] enclaves to manage sealing keys and attest to enclave identity, bridging hardware-isolated compute with physical key protection.
  - **Time-stamping authorities** — RFC 3161 timestamp tokens are signed inside HSMs to ensure non-repudiation and chain-of-custody for legal evidence.
  - **TLS/TLS offload** — high-volume web servers and load balancers offload RSA/ECC private key operations to network HSMs, improving performance whilst protecting session keys.
  - **Government and defence** — national security organisations use NSA-evaluated or NCSC-certified HSMs for top-secret key management and cryptographic key fill (e.g. KMI in the US, NSv-compatible devices in the UK).
  - **[[Cloud Key Management Service]]** — cloud KMS offerings such as AWS KMS use HSM clusters internally; customers who need direct custody (not shared multi-tenant HSMs) use dedicated HSM services instead.

- ### Relationships
  - uses:: [[Cryptographic Key Management]]
  - uses:: [[Encryption]]
  - uses:: [[Digital Signature]]
  - uses:: [[Random Number Generation]]
  - uses:: [[PKCS#11]]
  - uses:: [[Symmetric Key Cryptography]]
  - uses:: [[Asymmetric Key Cryptography]]
  - enables:: [[Public Key Infrastructure]]
  - enables:: [[Key Management]]
  - enables:: [[Code Signing]]
  - enables:: [[Certificate Authority]]
  - enables:: [[Payment Security]]
  - enables:: [[Secure Boot]]
  - requires:: [[Tamper Resistance]]
  - requires:: [[Hardware Root of Trust]]
  - standardizedBy:: [[FIPS 140]]
  - standardizedBy:: [[Common Criteria]]
  - standardizedBy:: [[PCI-DSS]]
  - contrastsWith:: [[Trusted Execution Environment]]
  - contrastsWith:: [[Secure Enclave]]
  - contrastsWith:: [[Software Keystore]]
  - contrastsWith:: [[Trusted Platform Module]]
  - relatedTo:: [[Cryptography]]
  - relatedTo:: [[Zero Trust Architecture]]
  - relatedTo:: [[Secure Element]]
  - relatedTo:: [[Cloud Key Management Service]]
  - bridges-to:: [[Blockchain Key Custody]]
  - bridges-to:: [[Confidential Computing]]

- ### Contrasts and Comparisons
  - **HSM vs [[Trusted Platform Module]] (TPM)** — TPMs are commodity chips soldered to motherboards, designed primarily for platform attestation and sealing secrets to platform state. They are not designed for high-throughput cryptographic operations or arbitrary key management. HSMs are dedicated, high-assurance, high-throughput devices intended for shared enterprise use.
  - **HSM vs [[Secure Enclave]]** — secure enclaves (ARM TrustZone, Apple Secure Enclave) are CPU-integrated security islands primarily protecting device credentials and biometric data. They do not provide physical tamper-active zeroisation at the same level as a certified HSM.
  - **HSM vs [[Trusted Execution Environment]]** — TEEs (Intel TDX, AMD SEV-SNP) create isolated memory regions in general-purpose CPUs; they protect against software-level attackers but not a sophisticated physical adversary with lab equipment. HSMs are explicitly designed to resist bench-level physical attack.
  - **HSM vs [[Software Keystore]]** — a software keystore (e.g. Java PKCS#12, OS keychain) holds encrypted key blobs in general-purpose storage. The decryption key must be accessible in memory at runtime, making it vulnerable to memory-scraping attacks, OS-level compromise, and cold-boot attacks.
  - **HSM vs [[Cloud Key Management Service]]** — cloud KMS services (AWS KMS, Azure Key Vault) offer convenient managed key operations but the underlying key material is held in the cloud provider's HSM estate, with the provider having at least theoretical administrative access. Dedicated HSMs (AWS CloudHSM, Azure Dedicated HSM) shift this boundary so only the customer's credentials can access the key partition.

- ### Standards and Context
  - **[[FIPS 140]]** — NIST FIPS 140-2 (widely deployed) and FIPS 140-3 (current standard, aligned with ISO/IEC 19790) define four security levels for cryptographic module validation. Level 3 requires tamper-evidence and identity-based authentication; Level 4 adds environmental attack resistance. Almost all commercial HSMs are validated at Level 2 or 3.
  - **[[Common Criteria]]** — ISO/IEC 15408 framework; HSMs are often evaluated at EAL4+ or EAL5, with specific Protection Profiles for key management devices.
  - **[[PCI-DSS]]** — the Payment Card Industry Data Security Standard mandates use of HSMs for PIN processing, key exchange, and card data encryption across acquiring and issuing bank infrastructures.
  - **PKCS#11 (Cryptoki)** — OASIS standard CKM-*; the dominant API for HSM integration. Version 3.0 adds post-quantum algorithm support stubs.
  - **RFC 5958 / PKCS#8** — defines formats for encrypted private-key info used in import/export operations.
  - **eIDAS / EU910/2014** — European regulation mandating Qualified Signature Creation Devices (QSCDs), typically implemented using HSMs, for legally binding electronic signatures.
  - **NIST SP 800-57** — key management recommendations that inform HSM configuration, key lifetimes, and zeroisation procedures.
  - **Post-quantum migration** — NIST FIPS 203 (ML-KEM/Kyber) and FIPS 204 (ML-DSA/Dilithium) are being integrated into HSM firmware; vendors (Thales, Entrust, Utimaco) are shipping firmware updates to support hybrid classical/post-quantum key generation.

- ### Provenance
  - sources:: NIST FIPS 140-3, OASIS PKCS#11 v3.0, PCI Security Standards Council, ETSI EN 419 221, ISO/IEC 19790
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
