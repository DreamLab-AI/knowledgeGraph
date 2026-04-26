iri:: http://narrativegoldmine.com/blockchain#Cryptography
uri:: urn:visionclaw:concept:blockchain:cryptography-bc-0026
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:cryptography-bc-0026
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Cryptography
content-hash:: sha256-12-55f98cffda45
legacy-term-id:: BC-0026
status:: complete
maturity:: mature
quality-score:: 0.50
authority-score:: 1.0
version:: 2.0.0
created:: 2025-10-28T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - Cryptography is the mathematical science of securing information through techniques that transform data into unintelligible forms for unauthorized parties whilst enabling authorized parties to reverse the transformation, providing confidentiality, integrity, authentication, and non-repudiation in blockchain systems.

- ### Semantic Classification
  - owl-class:: blockchain:Cryptography
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Mathematical Science]], [[Security Technology]], [[Information Protection]]

  - bridges-to:: [[AI Agent System]] (ai)
- ### Content

  ## Class Declaration
  Declaration(Class(:Cryptography))

  ## Subclass Relationships
  SubClassOf(:Cryptography :MathematicalScience)
  SubClassOf(:Cryptography :SecurityTechnology)
  SubClassOf(:Cryptography :InformationProtection)

  ## Essential Properties
  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :provides :Confidentiality))

  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :provides :Integrity))

  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :provides :Authentication))

  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :provides :NonRepudiation))

  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :uses :MathematicalPrimitive))

  ## Cryptographic Primitives
  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :implements :HashFunction))

  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :implements :DigitalSignature))

  SubClassOf(:Cryptography
    (ObjectSomeValuesFrom :implements :EncryptionScheme))

  ## Data Properties
  DataPropertyAssertion(:securityStrength :Cryptography xsd:positiveInteger)
  DataPropertyAssertion(:quantumResistant :Cryptography xsd:boolean)
  DataPropertyAssertion(:computationalComplexity :Cryptography xsd:string)

  ## Object Properties
  ObjectPropertyAssertion(:secures :Cryptography :Data)
  ObjectPropertyAssertion(:enablesFeature :Cryptography :SecurityProperty)
  ObjectPropertyAssertion(:basedOn :Cryptography :MathematicalProblem)

  ## Annotations
  AnnotationAssertion(rdfs:label :Cryptography "Cryptography"@en)
  AnnotationAssertion(rdfs:comment :Cryptography
    "Mathematical science securing blockchain data and operations"@en)
  AnnotationAssertion(:termID :Cryptography "BC-0026")

  ## Disjoint Classes
  DisjointClasses(:Cryptography :Steganography)
  )
      ```

  - ## About Cryptography

  - Cryptography is the mathematical science of securing information through techniques that transform data into unintelligible forms for unauthorized parties whilst enabling authorized parties to reverse the transformation, providing confidentiality, integrity, authentication, and non-repudiation in blockchain systems.
  - ### Key Characteristics
    - 1. **Confidentiality**: Protecting data from unauthorized access
    - 2. **Integrity**: Detecting unauthorized modifications
    - 3. **Authentication**: Verifying identity and origin
    - 4. **Non-Repudiation**: Preventing denial of actions
    - 5. **Forward Secrecy**: Past sessions remain secure
  - ### Technical Components
    - **Computational Security**: Based on hard mathematical problems
    - **Provable Security**: Formal reduction to known hard problems
    - **Key Management**: Generation, storage, distribution, revocation
    - **Algorithm Agility**: Ability to replace compromised algorithms
  - ### Use Cases
    - **1. Transaction Authentication**
    - **Application**: Proving transaction authorization
    - **Mechanism**: Digital signatures (ECDSA on secp256k1)
    - **Example**: Bitcoin transaction signing
    - **Security**: 128-bit security level
  - ### 2024-2025: Post-Quantum Cryptography Transition

    The period from 2024 through 2025 marked a watershed moment in cryptographic infrastructure: the finalisation and deployment of **post-quantum cryptography (PQC)** standards designed to resist attacks from quantum computers, fundamentally reshaping security assumptions underpinning blockchain systems and digital communications.

    #### NIST PQC Standards Finalised (August 2024)
    On 13th August 2024, NIST published the first three finalised post-quantum cryptography standards:
    - **FIPS 203** (ML-KEM, formerly CRYSTALS-Kyber): Key encapsulation mechanism
    - **FIPS 204** (formerly CRYSTALS-Dilithium): Digital signature algorithm
    - **FIPS 205** (SPHINCS+): Hash-based digital signature algorithm

    These standards represented the culmination of NIST's multi-year PQC standardisation project, providing quantum-resistant algorithms ready for immediate deployment. The transition timeline became urgent as quantum computing capabilities advanced—whilst large-scale quantum computers capable of breaking RSA and ECC remained years away, "harvest now, decrypt later" attacks incentivised early adoption of quantum-resistant cryptography.

    #### Fifth Algorithm Selected (March 2025)
    On 11th March 2025, NIST selected **HQC (Hamming Quasi-Cyclic)** as the fifth algorithm for post-quantum encryption. HQC was chosen specifically as a backup standard based on different mathematical foundations than ML-KEM, providing cryptographic diversity against potential mathematical breakthroughs. Following a 90-day comment period, NIST planned to finalise the standard for release in 2027.

    #### Transition Guidance and Fourth Round
    NIST published draft guidance in November 2024 describing expected approaches to transitioning from quantum-vulnerable cryptographic algorithms to post-quantum alternatives. By October 2024, NIST down-selected to **15 second-round signature candidates** for further analysis from 40 initially accepted submissions, demonstrating continued refinement of PQC capabilities.

    #### Blockchain Implications
    Post-quantum cryptography posed existential questions for blockchain systems relying on ECDSA signatures (Bitcoin, Ethereum) and public-key cryptography. Whilst quantum computers capable of deriving private keys from public keys remained theoretical, the "Q-Day" threat—when quantum computers could break current cryptography—required proactive migration strategies. Bitcoin's cryptographic community, including Pieter Wuille, Gregory Maxwell, Andrew Poelstra, and Jonas Nick, began exploring quantum-resistant signature schemes whilst preserving backwards compatibility.

    Bitcoin's core cryptographic protocols (ECDSA on secp256k1, SHA-256, RIPEMD-160) had withstood scrutiny since 2009 despite enormous financial incentives for breaking them, demonstrating security through time-testing. However, the quantum threat represented a qualitatively different challenge requiring algorithmic replacement rather than parameter tuning.

    The cryptographic transition required coordinated ecosystem-wide upgrades: wallets, exchanges, nodes, and protocols all needed quantum-resistant signature verification. The complexity of this migration—potentially the largest coordinated cryptographic upgrade in history—underscored the importance of NIST's standards and ongoing academic research published at IEEE S&P, ACM CCS, Financial Cryptography, and Real World Crypto conferences.
  - ### Standards & References
    - [[ISO/IEC 18033]] - Blockchain and distributed ledger technologies
    - [[NIST FIPS]] - Blockchain and distributed ledger technologies
    - [[NIST SP]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 18033]], [[NIST FIPS]], [[NIST SP]]
  - migration-date:: 2026-04-26T00:00:00Z
