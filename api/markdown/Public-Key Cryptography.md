An asymmetric cryptographic system using mathematically related key pairs — a public key for encryption or signature verification and a private key for decryption or signing — enabling secure communication, digital signatures, and authentication without requiring shared secrets. In blockchain systems it underpins wallet addresses, transaction signing, and identity verification.

### Semantic Classification

### Content

## Class Declaration
Declaration(Class(:Public-KeyCryptography))

## Subclass Relationships
SubClassOf(:Public-KeyCryptography :CryptographicPrimitive)
SubClassOf(:Public-KeyCryptography :BlockchainEntity)

## Essential Properties
SubClassOf(:Public-KeyCryptography
  (ObjectSomeValuesFrom :partOf :Blockchain))

SubClassOf(:Public-KeyCryptography
  (ObjectSomeValuesFrom :hasProperty :Property))

## Data Properties
DataPropertyAssertion(:hasIdentifier :Public-KeyCryptography "BC-0031"^^xsd:string)
DataPropertyAssertion(:hasAuthorityScore :Public-KeyCryptography "1.0"^^xsd:decimal)
DataPropertyAssertion(:isFoundational :Public-KeyCryptography "true"^^xsd:boolean)

## Object Properties
ObjectPropertyAssertion(:enablesFeature :Public-KeyCryptography :BlockchainFeature)
ObjectPropertyAssertion(:relatesTo :Public-KeyCryptography :RelatedConcept)

## Annotations
AnnotationAssertion(rdfs:label :Public-KeyCryptography "Public-Key Cryptography"@en)
AnnotationAssertion(rdfs:comment :Public-KeyCryptography
  "Asymmetric encryption system"@en)
AnnotationAssertion(dct:description :Public-KeyCryptography
  "Foundational blockchain concept with formal ontological definition"@en)
AnnotationAssertion(:termID :Public-KeyCryptography "BC-0031")
AnnotationAssertion(:priority :Public-KeyCryptography "1"^^xsd:integer)
AnnotationAssertion(:category :Public-KeyCryptography "cryptographic-foundations"@en)
)

## About Public-Key Cryptography

- Asymmetric encryption system within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

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

- The field's centre of gravity has shifted to the post-quantum transition: on 13 August 2024 NIST finalised its first three standards replacing RSA and elliptic-curve schemes — FIPS 203 (ML-KEM, ex-CRYSTALS-Kyber) for key establishment, FIPS 204 (ML-DSA, ex-Dilithium) and FIPS 205 (SLH-DSA, ex-SPHINCS+) for signatures.
- Algorithm diversity was reinforced when NIST selected the code-based HQC as a backup key-encapsulation mechanism on 11 March 2025 (draft FIPS expected 2026, final 2027), while the Falcon-based FN-DSA signature standard (draft FIPS 206) remained unpublished as of mid-2026.
- Hybrid key agreement has reached mainstream production: the X25519MLKEM768 group is enabled by default across Chrome/Edge (since Chrome 131, November 2024), Firefox and recent Apple OSes, and Cloudflare reported on 7 April 2026 that over half of the human traffic it processes now uses post-quantum key agreement.
- Messaging and infrastructure providers moved early — Apple shipped iMessage PQ3 (ML-KEM-768 with ongoing re-keying) from iOS 17.4 in March 2024, Signal deployed PQXDH from late 2023, and OpenSSL 3.5 (April 2025) added native ML-KEM/ML-DSA/SLH-DSA support, bringing PQC to servers built on NGINX, Apache and HAProxy.
- Regulation hardened sharply in 2026: US Executive Order 14412 and OMB memo M-26-15 (both June 2026) set hard deadlines of 31 December 2030 for federal key-establishment migration and 2031 for signatures, with agency plans due around 22 October 2026; the NSA's CNSA 2.0 requires ML-KEM-1024 and ML-DSA-87 in new National Security System acquisitions from 1 January 2027, and the UK NCSC set a 2028/2031/2035 phased timeline.
- NIST IR 8547 sets the retirement calendar for classical public-key cryptography — RSA-2048 and 112-bit elliptic curves deprecated after 2030 and disallowed by 2035 — and CMVP moves FIPS 140-2 modules to Historical on 21 September 2026, forcing federal procurement onto FIPS 140-3.
- The frontier challenge is urgency versus scale: three papers between May 2025 and March 2026 cut the estimated qubit count to break RSA-2048 from roughly 20 million toward under 100,000, pushing Google and Cloudflare to pull full-migration targets forward to 2029, while "harvest-now-decrypt-later" interception, larger PQC keys and signatures (an ML-KEM-768 key is 1,184 bytes versus 32 for X25519), and slow signature/PKI migration remain open problems.

### References

- 1. NIST (2024). NIST Releases First 3 Finalized Post-Quantum Encryption Standards. https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards
- 2. NIST CSRC (2024–2025). Post-Quantum Cryptography project (FIPS 203/204/205, HQC selection, IR 8547 transition timeline). https://csrc.nist.gov/projects/post-quantum-cryptography
- 3. Cloudflare (2025). The state of the post-quantum Internet in 2025. https://blog.cloudflare.com/pq-2025/
- 4. Shattered.io (2026). Post-Quantum Cryptography: 50% of Web Now Safe [2026]. https://shattered.io/post-quantum-cryptography-2026/
- 5. postquantum.com (2026). US Federal PQC Mandate After June 2026: Complete Guide (EO 14412, OMB M-26-15, CNSA 2.0). https://postquantum.com/post-quantum/us-federal-pqc-mandate-2026/
- 6. Cloud Security Alliance (2026). Harvest Now, Decrypt Later: Quantum Risk to AI Infrastructure. https://labs.cloudsecurityalliance.org/research/ai-infrastructure-post-quantum-harvest-now-decrypt-later-v1/

### Provenance

