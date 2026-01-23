- ### OntologyBlock
  id:: public-key-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0037

    - filename-history:: ["BC-0037-public-key.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0037
    - preferred-term:: Public Key
    - source-domain:: bc
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-11-15

  - **Definition**
    - definition:: Publicly-shared cryptographic key within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:PublicKey
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: public-key-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[CryptographicPrimitive]]

  - #### OWL Axioms
    id:: public-key-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
      Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
      Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
      Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
      Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
      Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
      Prefix(dct:=<http://purl.org/dc/terms/>)

      Ontology(<http://metaverse-ontology.org/blockchain/BC-0037>
        Import(<http://metaverse-ontology.org/blockchain/core>)

        ## Class Declaration
        Declaration(Class(:PublicKey))

        ## Subclass Relationships
        SubClassOf(:PublicKey :CryptographicPrimitive)
        SubClassOf(:PublicKey :BlockchainEntity)

        ## Essential Properties
        SubClassOf(:PublicKey
          (ObjectSomeValuesFrom :partOf :Blockchain))

        SubClassOf(:PublicKey
          (ObjectSomeValuesFrom :hasProperty :Property))

        ## Data Properties
        DataPropertyAssertion(:hasIdentifier :PublicKey "BC-0037"^^xsd:string)
        DataPropertyAssertion(:hasAuthorityScore :PublicKey "1.0"^^xsd:decimal)
        DataPropertyAssertion(:isFoundational :PublicKey "true"^^xsd:boolean)

        ## Object Properties
        ObjectPropertyAssertion(:enablesFeature :PublicKey :BlockchainFeature)
        ObjectPropertyAssertion(:relatesTo :PublicKey :RelatedConcept)

        ## Annotations
        AnnotationAssertion(rdfs:label :PublicKey "Public Key"@en)
        AnnotationAssertion(rdfs:comment :PublicKey
          "Publicly-shared cryptographic key"@en)
        AnnotationAssertion(dct:description :PublicKey
          "Foundational blockchain concept with formal ontological definition"@en)
        AnnotationAssertion(:termID :PublicKey "BC-0037")
        AnnotationAssertion(:priority :PublicKey "1"^^xsd:integer)
        AnnotationAssertion(:category :PublicKey "cryptographic-foundations"@en)
      )
      ```

- ## About Public Key
  id:: public-key-about

  - A **public key** is the publicly-shareable component of an [[asymmetric cryptography]] [[key pair]], mathematically derived from a [[private key]] through one-way cryptographic functions. In [[blockchain]] systems, particularly [[Bitcoin]], public keys enable [[digital signature]] verification, [[transaction]] validation, and secure [[address]] generation without revealing the underlying private key.
  -
  - Public keys are fundamental to [[cryptocurrency]] security, allowing anyone to verify that a transaction was authorized by the holder of the corresponding private key, while maintaining the confidentiality of that private key. The mathematical relationship between public and private keys ensures that deriving the private key from the public key is computationally infeasible.

- ## Public Key Cryptography Fundamentals
  id:: public-key-fundamentals

  - ### Asymmetric Encryption
    - **Public key cryptography** (also called [[asymmetric cryptography]]) uses mathematically-related key pairs consisting of a public key for encryption and a private key for decryption
    - Contrasts with [[symmetric cryptography]] where the same key is used for both encryption and decryption
    - Invented independently by [[Whitfield Diffie]] and [[Martin Hellman]] (1976) and the [[GCHQ]] cryptographers (James Ellis, Clifford Cocks, Malcolm Williamson) in the early 1970s
    - Enables secure communication without prior key exchange, solving the [[key distribution problem]]
    - Foundation for [[PKI]] (Public Key Infrastructure), [[TLS]], [[SSL]], and [[blockchain]] systems

  - ### Mathematical Foundations
    - Public key systems rely on [[trapdoor function|trapdoor functions]]—mathematical operations that are easy to compute in one direction but computationally infeasible to reverse
    - **[[RSA]]** relies on the difficulty of [[integer factorization]]—factoring large [[semiprime]] numbers
    - **[[Elliptic Curve Cryptography]]** (ECC) relies on the [[elliptic curve discrete logarithm problem]] (ECDLP)
    - **[[Diffie-Hellman]]** relies on the discrete logarithm problem in finite fields
    - The [[computational complexity]] of these problems provides security—breaking requires exponential time with current algorithms
    - [[Quantum computing]] threatens some of these foundations through [[Shor's algorithm]], driving [[post-quantum cryptography]] research

  - ### Key Pair Generation
    - A [[cryptographic key pair]] consists of a private key and its mathematically-derived public key
    - **Generation process:**
      - 1. Select a [[random number]] as the private key (using [[CSPRNG]]—cryptographically secure pseudorandom number generator)
      - 2. Apply a one-way function (e.g., [[elliptic curve point multiplication]]) to derive the public key
      - 3. The relationship is deterministic: same private key always produces same public key
      - 4. Reverse computation (public key → private key) is computationally infeasible
    - **[[Bitcoin]] key generation:**
      - Private key: 256-bit random number (typically represented as 64 hexadecimal characters)
      - Public key: Result of multiplying the private key by the [[secp256k1]] generator point G
      - Formula: `Public Key = Private Key × G` (where × is [[elliptic curve point multiplication]])
    - **Security considerations:**
      - [[Entropy]] quality is critical—weak randomness leads to predictable keys
      - [[Deterministic wallets]] ([[BIP-32]]) derive multiple keys from a single [[seed phrase]]
      - [[Hardware wallets]] generate keys in secure environments isolated from network exposure

- ## Elliptic Curve Cryptography
  id:: public-key-ecc

  - ### Elliptic Curve Fundamentals
    - **[[Elliptic Curve Cryptography]]** (ECC) provides equivalent security to [[RSA]] with significantly smaller key sizes
    - An [[elliptic curve]] is defined by the equation: `y² = x³ + ax + b` over a finite field
    - Points on the curve form an [[abelian group]] under point addition
    - **Advantages over RSA:**
      - 256-bit ECC key ≈ 3072-bit RSA key in security strength
      - Smaller keys mean faster computation, less storage, reduced [[bandwidth]]
      - Critical for [[blockchain]] efficiency and [[mobile]] implementations
    - [[Point addition]] and [[point doubling]] operations enable [[scalar multiplication]]
    - The [[discrete logarithm problem]] on elliptic curves (finding k given k×G) is the security foundation

  - ### secp256k1 Curve (Bitcoin)
    - **[[secp256k1]]** is the elliptic curve used by [[Bitcoin]], [[Ethereum]] (pre-Merge), and many [[cryptocurrency|cryptocurrencies]]
    - Defined by [[SEC 2]] (Standards for Efficient Cryptography 2)
    - **Curve parameters:**
      - Equation: `y² = x³ + 7` (a=0, b=7)
      - Prime field: `p = 2²⁵⁶ - 2³² - 2⁹ - 2⁸ - 2⁷ - 2⁶ - 2⁴ - 1`
      - Generator point G with known coordinates
      - Order n (number of points): `n = FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141`
    - **Characteristics:**
      - [[Koblitz curve]]—coefficients chosen for computational efficiency
      - No known [[backdoor]] or weakness (unlike some NIST curves with controversial parameters)
      - Optimized for fast [[signature]] generation and verification
      - [[Deterministic signature]] schemes ([[RFC 6979]]) prevent [[nonce]] reuse vulnerabilities
    - **Bitcoin implementation:**
      - Used for [[ECDSA]] signatures in legacy transactions
      - Used for [[Schnorr signatures]] in [[Taproot]] transactions ([[BIP-340]])
      - Public keys are secp256k1 curve points represented as (x, y) coordinates

  - ### Other Curves
    - **[[Ed25519]]** ([[Curve25519]])
      - Used by [[Monero]], [[Stellar]], [[Cardano]], [[Solana]]
      - [[EdDSA]] signature scheme—faster and simpler than ECDSA
      - [[Twisted Edwards curve]]: `-x² + y² = 1 - (121665/121666)x²y²`
      - Designed by [[Daniel J. Bernstein]] for security and performance
      - Built-in protection against [[side-channel attacks]]
    - **[[secp256r1]]** (P-256, prime256v1)
      - [[NIST]] standardized curve
      - Used by [[Ethereum 2.0]] for [[BLS signatures]]
      - Some controversy over potentially weak parameters
    - **[[BLS12-381]]**
      - [[Pairing-friendly curve]] used for [[BLS signatures]]
      - Enables [[signature aggregation]]—multiple signatures combined into one
      - Used by [[Ethereum 2.0]], [[Zcash]], [[Filecoin]]
      - Critical for [[validator]] signature efficiency in [[proof-of-stake]]

- ## Bitcoin Public Key Formats
  id:: bitcoin-public-key-formats

  - ### Uncompressed Public Keys
    - **Format:** `04 + x-coordinate (32 bytes) + y-coordinate (32 bytes) = 65 bytes total`
    - Prefix `04` indicates uncompressed format
    - Contains both x and y coordinates of the [[secp256k1]] curve point
    - **Example:** `04a1b2c3d4...` (130 hexadecimal characters)
    - **Historical use:** Original [[Bitcoin]] format used by [[Satoshi Nakamoto]]
    - **Disadvantages:**
      - Larger transaction size (higher [[fees]])
      - More [[blockchain]] storage required
      - Slower [[signature]] verification

  - ### Compressed Public Keys
    - **Format:** `02 or 03 + x-coordinate (32 bytes) = 33 bytes total`
    - Prefix `02` if y is even, `03` if y is odd
    - Only stores x-coordinate; y can be derived from the curve equation `y² = x³ + 7`
    - **Derivation process:**
      - Given x, solve `y² = x³ + 7` to get two possible y values (positive and negative)
      - Prefix indicates which y value to use
    - **Advantages:**
      - 50% smaller than uncompressed (33 vs 65 bytes)
      - Lower [[transaction fees]]
      - Reduced [[blockchain bloat]]
    - **Adoption:**
      - [[BIP-32]] standardized compressed keys for [[HD wallets]]
      - Modern [[Bitcoin wallets]] use compressed keys by default
      - Both formats can be used for the same private key, generating different [[addresses]]

  - ### Public Key Encoding
    - **Hexadecimal:** Most common representation for technical contexts
      - Example: `02a1b2c3d4e5f6...` (66 hex characters for compressed)
    - **[[DER encoding]]:** Used in [[ECDSA signatures]] within transactions
    - **[[PEM encoding]]:** Base64-encoded DER with headers, used in [[SSL/TLS]] certificates
    - **[[Base58Check]]:** Used for [[Bitcoin addresses]] derived from public keys
    - **[[Bech32]]:** Used for [[SegWit]] addresses ([[BIP-173]], [[BIP-350]])

- ## Digital Signatures with Public Keys
  id:: public-key-signatures

  - ### ECDSA (Elliptic Curve Digital Signature Algorithm)
    - **[[ECDSA]]** is the signature algorithm used in [[Bitcoin]] legacy and [[SegWit]] transactions
    - **Signing process:**
      - 1. Hash the message (transaction data) using [[SHA-256]]
      - 2. Generate a random [[nonce]] k (critical: must be unique for each signature)
      - 3. Calculate curve point R = k × G
      - 4. Signature = (r, s) where r = R.x, s = k⁻¹(hash + r × private_key)
    - **Verification process:**
      - 1. Hash the message
      - 2. Calculate u₁ = hash × s⁻¹ and u₂ = r × s⁻¹
      - 3. Calculate R' = u₁ × G + u₂ × PublicKey
      - 4. Signature valid if R'.x = r
    - **Security considerations:**
      - [[Nonce reuse]] vulnerability: using the same k for two signatures reveals the private key
      - [[RFC 6979]] defines deterministic nonce generation to prevent this
      - [[Sony PlayStation 3]] hack (2010) exploited ECDSA nonce reuse
      - Signatures are [[malleable]]—third parties can modify signature without invalidating it

  - ### Schnorr Signatures (Taproot)
    - **[[Schnorr signatures]]** activated in [[Bitcoin]] via [[Taproot]] upgrade (November 2021)
    - Defined in [[BIP-340]], [[BIP-341]], [[BIP-342]]
    - **Advantages over ECDSA:**
      - **[[Linearity]]:** Signatures can be aggregated and combined mathematically
      - **[[Batch verification]]:** Multiple signatures verified together more efficiently
      - **Smaller signatures:** 64 bytes vs 71-72 bytes for ECDSA
      - **Non-malleability:** Signatures cannot be altered without invalidating
      - **Provable security:** Based on stronger mathematical assumptions
    - **[[MuSig2]]** protocol enables [[multi-signature]] schemes
      - Multiple parties create a single aggregate public key and signature
      - Indistinguishable from single-signature transactions on [[blockchain]]
      - Improves privacy and reduces transaction size
    - **[[Taproot]] integration:**
      - Public keys use x-only format (32 bytes instead of 33)
      - Enables [[MAST]] (Merkelized Abstract Syntax Trees)
      - [[Pay-to-Taproot]] (P2TR) addresses begin with "bc1p"

  - ### BLS Signatures
    - **[[BLS signatures]]** (Boneh-Lynn-Shacham) used in [[Ethereum 2.0]] and [[proof-of-stake]] systems
    - **Key features:**
      - **[[Signature aggregation]]:** Combine multiple signatures into one
      - **[[Threshold signatures]]:** n-of-m signing schemes
      - **[[Pairing-based cryptography]]:** Uses [[bilinear pairings]] on [[BLS12-381]] curve
    - **Ethereum 2.0 implementation:**
      - Each [[validator]] has a BLS public key
      - Signatures from multiple validators aggregated into single proof
      - Dramatically reduces [[consensus]] overhead
      - [[Beacon chain]] uses BLS for [[attestations]] and [[blocks]]
    - **Trade-offs:**
      - More computationally expensive than ECDSA/Schnorr
      - Larger public keys (48 bytes vs 33 bytes)
      - Benefits scale with number of signatures aggregated

- ## Public Key Uses in Blockchain
  id:: public-key-uses

  - ### Transaction Verification
    - Public keys enable verification that a [[transaction]] was authorized by the private key holder
    - **[[Bitcoin]] transaction flow:**
      - 1. Sender creates transaction spending their [[UTXO]]
      - 2. Transaction is signed with private key, creating [[digital signature]]
      - 3. Signature and public key included in transaction
      - 4. [[Nodes]] verify: signature validates against public key + transaction data
      - 5. Nodes verify: public key corresponds to the [[address]] being spent
    - **Verification properties:**
      - **[[Authentication]]:** Proves transaction came from key holder
      - **[[Integrity]]:** Ensures transaction data hasn't been modified
      - **[[Non-repudiation]]:** Signer cannot deny creating signature
    - Public keys are revealed only when spending—receiving doesn't expose them

  - ### Address Derivation
    - [[Bitcoin addresses]] are cryptographic hashes of public keys
    - **Address generation process:**
      - 1. Start with public key (compressed or uncompressed)
      - 2. Apply [[SHA-256]] hash
      - 3. Apply [[RIPEMD-160]] hash to result
      - 4. Add version prefix and [[checksum]]
      - 5. Encode in [[Base58Check]] (legacy) or [[Bech32]] (SegWit)
    - **Address types:**
      - **[[P2PKH]]** (Pay-to-Public-Key-Hash): Legacy addresses starting with "1"
      - **[[P2SH]]** (Pay-to-Script-Hash): Multi-sig addresses starting with "3"
      - **[[P2WPKH]]** (Pay-to-Witness-Public-Key-Hash): Native SegWit "bc1q"
      - **[[P2TR]]** (Pay-to-Taproot): Taproot addresses "bc1p"
    - **Privacy considerations:**
      - [[Address reuse]] links transactions and reduces privacy
      - [[HD wallets]] generate new addresses for each transaction
      - Public keys remain hidden until spending, providing some privacy

  - ### Multi-Signature Schemes
    - **[[Multi-signature]]** (multisig) requires multiple public keys to authorize transactions
    - **[[M-of-N multisig]]:** M signatures from N public keys required
      - Example: 2-of-3 requires any 2 of 3 designated keys
    - **Traditional multisig ([[P2SH]]):**
      - All public keys stored in [[redeem script]]
      - Visible on blockchain when spending
      - Higher transaction fees due to larger size
    - **[[Schnorr]]-based multisig ([[MuSig2]]):**
      - Aggregate public key looks like single key
      - Smaller transaction size
      - Enhanced privacy—indistinguishable from single-sig
    - **Use cases:**
      - [[Escrow]] services (2-of-3: buyer, seller, arbiter)
      - Corporate treasury management
      - [[Cold storage]] with redundancy
      - [[Time-locked]] inheritance schemes

  - ### Encryption (Less Common)
    - While primarily used for signatures in blockchain, public keys can encrypt data
    - **[[Elliptic Curve Integrated Encryption Scheme]]** (ECIES):
      - Encrypt message with recipient's public key
      - Only recipient's private key can decrypt
    - **Blockchain applications:**
      - [[Stealth addresses]] in [[Monero]] use ECIES-like schemes
      - [[Confidential transactions]] encrypt amounts
      - [[Zero-knowledge proofs]] leverage public key encryption
    - **Limitations:**
      - ECC encryption less efficient than [[symmetric encryption]]
      - Typically used to encrypt symmetric keys ([[hybrid encryption]])
      - Not standard practice in [[Bitcoin]]—signatures are primary use

- ## HD Wallets and Extended Public Keys
  id:: public-key-hd-wallets

  - ### Hierarchical Deterministic Wallets (BIP-32)
    - **[[BIP-32]]** defines [[hierarchical deterministic wallets]] (HD wallets)
    - Generates unlimited key pairs from a single [[master seed]]
    - **Key derivation:**
      - Master seed → master private key + master chain code
      - Child keys derived deterministically using [[HMAC-SHA512]]
      - Derivation path notation: `m/purpose'/coin_type'/account'/change/address_index`
    - **[[Derivation path]] examples:**
      - [[BIP-44]]: `m/44'/0'/0'/0/0` (legacy Bitcoin)
      - [[BIP-49]]: `m/49'/0'/0'/0/0` (SegWit-compatible)
      - [[BIP-84]]: `m/84'/0'/0'/0/0` (native SegWit)
      - [[BIP-86]]: `m/86'/0'/0'/0/0` (Taproot)
    - **Hardened vs normal derivation:**
      - **Hardened** (denoted with '): Uses private key, cannot derive from xpub
      - **Normal** (no '): Can derive child public keys from parent public key

  - ### Extended Public Keys (xpub, ypub, zpub)
    - **Extended public key** ([[xpub]]) contains public key + chain code
    - Enables derivation of all child public keys without accessing private keys
    - **[[Watch-only wallet]]** functionality:
      - Import xpub to monitor balances and generate receive addresses
      - Cannot spend funds—requires private keys
      - Useful for merchants, auditors, cold storage monitoring
    - **xpub variants:**
      - **[[xpub]]**: Extended public key for [[BIP-44]] (P2PKH addresses)
      - **[[ypub]]**: Extended public key for [[BIP-49]] (P2SH-wrapped SegWit)
      - **[[zpub]]**: Extended public key for [[BIP-84]] (native SegWit)
    - **Security risks:**
      - xpub + any child private key = parent private key vulnerability
      - xpub reveals all addresses and transaction history
      - Should be protected—compromises privacy

  - ### BIP-32 and Address Gap Limit
    - **[[Gap limit]]**: Maximum number of consecutive unused addresses to check
    - Default is typically 20 addresses
    - [[Wallet]] scans blockchain for addresses derived from xpub
    - If 20 consecutive addresses have no transactions, scanning stops
    - Ensures reasonable blockchain scanning time while covering most use cases

- ## Public Key Standards and Specifications
  id:: public-key-standards

  - ### Bitcoin Improvement Proposals (BIPs)
    - **[[BIP-32]]:** Hierarchical Deterministic Wallets
      - Defines key derivation from master seed
      - Extended key format (xprv, xpub)
    - **[[BIP-39]]:** Mnemonic Code for Generating Deterministic Keys
      - 12-24 word [[seed phrases]] for key recovery
      - Wordlist standardization across wallets
    - **[[BIP-43]]:** Purpose Field for Deterministic Wallets
      - First level of derivation path indicates purpose
    - **[[BIP-44]]:** Multi-Account Hierarchy for Deterministic Wallets
      - Defines `m/44'/coin'/account'/change/index` structure
    - **[[BIP-49]]:** Derivation scheme for P2WPKH-nested-in-P2SH
      - SegWit addresses in P2SH format for compatibility
    - **[[BIP-84]]:** Derivation scheme for P2WPKH
      - Native SegWit (bech32) addresses
    - **[[BIP-86]]:** Key Derivation for Single Key P2TR Outputs
      - Taproot address derivation
    - **[[BIP-340]]:** Schnorr Signatures for secp256k1
      - Defines x-only public keys and Schnorr signature scheme
    - **[[BIP-341]]:** Taproot: SegWit version 1 spending rules
      - Pay-to-Taproot (P2TR) outputs
    - **[[BIP-342]]:** Validation of Taproot Scripts

  - ### Cryptographic Standards
    - **[[SEC 2]]:** Standards for Efficient Cryptography
      - Defines secp256k1 and other elliptic curves
    - **[[ANSI X9.62]]:** Public Key Cryptography for the Financial Services Industry
      - ECDSA specification
    - **[[FIPS 186-4]]:** Digital Signature Standard (DSS)
      - NIST standard covering ECDSA and other signature algorithms
    - **[[RFC 6979]]:** Deterministic Usage of the DSA and ECDSA
      - Prevents nonce reuse vulnerabilities
    - **[[RFC 8032]]:** Edwards-Curve Digital Signature Algorithm (EdDSA)
      - Defines Ed25519 signatures
    - **[[IEEE 1363]]:** Standard Specifications for Public Key Cryptography
      - Covers RSA, ECC, and other public key systems

  - ### International Standards
    - **[[ISO/IEC 14888]]:** Digital signatures with appendix
    - **[[ISO/IEC 15946]]:** Cryptographic techniques based on elliptic curves
    - **[[ISO/IEC 9796]]:** Digital signature schemes giving message recovery
    - **[[NIST SP 800-56A]]:** Recommendation for Pair-Wise Key-Establishment Schemes

- ## Security Considerations
  id:: public-key-security

  - ### Quantum Computing Threats
    - **[[Shor's algorithm]]** (1994) can break ECDSA and RSA in polynomial time on quantum computers
    - **[[Quantum computer|Quantum computers]]** with sufficient [[qubits]] could:
      - Derive private keys from public keys
      - Break all current blockchain signatures
    - **Threat timeline:**
      - Current quantum computers: ~1000 qubits (insufficient for cryptographic attacks)
      - Estimates suggest 4000+ qubits needed to break Bitcoin keys
      - Timeline uncertain—possibly 10-30 years
    - **[[Post-quantum cryptography]]** research:
      - [[Lattice-based cryptography]]: NTRU, CRYSTALS-Dilithium
      - [[Hash-based signatures]]: SPHINCS+
      - [[Code-based cryptography]]: McEliece
      - [[NIST Post-Quantum Competition]] standardizing algorithms
    - **Bitcoin's quantum resistance:**
      - Unspent P2PKH addresses hide public keys (hashed)
      - Only exposed when spending
      - [[Taproot]] uses x-only public keys (potentially more vulnerable)
      - Community discussing quantum-resistant upgrades

  - ### Public Key Exposure
    - **Address reuse** exposes public keys on blockchain permanently
    - **Best practices:**
      - Generate new address for each transaction
      - Never reuse addresses after spending
      - Use [[HD wallets]] for automatic address generation
    - **Exposure timeline:**
      - Receiving: Public key remains hidden (only hash visible)
      - Spending: Public key revealed in transaction signature
      - After spending: Public key permanently on blockchain
    - **Implications:**
      - Quantum computers could attack exposed keys
      - [[Privacy]] reduced—transactions linkable via public key
      - Old addresses from 2009-2012 particularly vulnerable

  - ### Key Validation and Verification
    - **Public key validation:**
      - Verify point is on the elliptic curve
      - Check coordinates are within valid range
      - Ensure point is not the identity element
      - Verify point order divides group order
    - **[[Invalid curve attack]]:** Malicious keys on wrong curves can leak private key info
    - **[[Small subgroup attack]]:** Keys with small order reduce security
    - **Software implementations must validate all received public keys**

  - ### Side-Channel Attacks
    - **[[Timing attacks]]:** Measure computation time to extract key bits
    - **[[Power analysis]]:** Monitor power consumption during signature generation
    - **[[Electromagnetic analysis]]:** Detect EM radiation from cryptographic operations
    - **Mitigations:**
      - [[Constant-time algorithms]] that don't leak timing information
      - [[Hardware security modules]] (HSMs) with physical protections
      - [[Blinding]] techniques randomize intermediate values
    - Particularly relevant for [[hardware wallets]] and embedded systems

- ## Public Key Infrastructure and Blockchain
  id:: public-key-pki

  - ### Traditional PKI vs Blockchain
    - **Traditional [[PKI]]:**
      - Centralized [[Certificate Authorities]] (CAs) validate identities
      - [[X.509 certificates]] bind public keys to identities
      - Hierarchical trust model—trust anchors at root CAs
      - Used in [[TLS]], [[SSL]], email encryption ([[S/MIME]])
    - **Blockchain PKI:**
      - Decentralized—no central authority
      - Public keys self-certified through cryptographic proofs
      - Trust established through [[consensus]] mechanisms
      - [[Self-sovereign identity]]—users control their own keys
    - **Hybrid approaches:**
      - [[Namecoin]]: Decentralized DNS using blockchain
      - [[Certificate Transparency]]: Blockchain-like logs for CA auditing
      - [[Decentralized identifiers]] (DIDs) on blockchain

  - ### Key Management Challenges
    - **Key generation:** Ensuring sufficient entropy and randomness
    - **Key storage:** Protecting private keys from theft
      - [[Hot wallets]]: Online, convenient but vulnerable
      - [[Cold storage]]: Offline, secure but less accessible
      - [[Hardware wallets]]: Dedicated devices ([[Ledger]], [[Trezor]])
    - **Key backup and recovery:**
      - [[Seed phrases]] enable recovery from device loss
      - [[Shamir's Secret Sharing]] splits seed into multiple parts
      - [[Multisig]] provides redundancy
    - **Key rotation:** Difficult in blockchain—addresses tied to keys
    - **Key revocation:** No effective mechanism once public key exposed

  - ### Web of Trust vs Blockchain Trust
    - **[[Web of Trust]]** ([[PGP]], [[GnuPG]]):
      - Decentralized identity verification
      - Users sign each other's public keys
      - Trust propagates through social network
    - **Blockchain trust model:**
      - Trustless—mathematical verification replaces social trust
      - [[Proof-of-work]] or [[proof-of-stake]] secures network
      - [[Byzantine fault tolerance]] handles malicious actors
      - No need for identity—pseudonymous public keys sufficient

- ## Advanced Topics
  id:: public-key-advanced

  - ### Threshold Signatures
    - **[[Threshold signature scheme]]:** n-of-m participants must cooperate to sign
    - **[[Shamir's Secret Sharing]]:**
      - Private key split into n shares
      - Any m shares can reconstruct signature
      - No single participant has full key
    - **[[MPC]] (Multi-Party Computation):**
      - Parties jointly compute signature without reconstructing private key
      - [[TSS]] (Threshold Signature Scheme) implementations:
        - [[GG18]], [[GG20]] for ECDSA
        - [[FROST]] for Schnorr signatures
    - **Use cases:**
      - [[Custody]] solutions for institutions
      - [[DAO]] treasury management
      - Enhanced security for [[exchanges]]

  - ### Adapter Signatures
    - **[[Adapter signatures]]** enable conditional payments in [[Bitcoin]]
    - Creates signatures that are "almost valid"—missing a secret value
    - Publishing valid signature reveals the secret
    - **Applications:**
      - [[Atomic swaps]] between different blockchains
      - [[Lightning Network]] [[PTLC]] (Point Time-Locked Contracts)
      - [[Payment channels]] with improved privacy
      - [[Discreet Log Contracts]] (DLCs)
    - Enabled by Schnorr signature linearity

  - ### Stealth Addresses
    - **[[Stealth addresses]]** provide payment privacy
    - Recipient publishes permanent stealth address
    - Sender generates unique one-time address for each payment
    - Only sender and recipient know payment destination
    - **Implementations:**
      - [[Monero]]: Built-in stealth addresses
      - [[Bitcoin]]: Proposed in [[BIP-47]] (Payment Codes), [[Silent Payments]]
    - Uses [[ECDH]] (Elliptic Curve Diffie-Hellman) key exchange

  - ### Deterministic Signatures (RFC 6979)
    - Traditional ECDSA requires random nonce k for each signature
    - **[[Nonce reuse attack]]:** Same k for two signatures reveals private key
    - **[[RFC 6979]]** solution: Derive k deterministically from:
      - Private key
      - Message hash
      - [[HMAC-SHA256]] for determinism
    - **Benefits:**
      - Eliminates nonce reuse vulnerability
      - Reproducible signatures (useful for testing)
      - No need for secure random number generator during signing
    - Widely adopted in modern Bitcoin implementations

- ## Metadata
  - **Migration Status:** Expanded comprehensive content 2025-11-15
  - **Last Updated:** 2025-11-15
  - **Review Status:** Bitcoin-focused cryptographic coverage
  - **Content Depth:** 380+ lines, 75+ wiki-links
  - **Quality Target:** ≥0.88
  - **Domain Focus:** Public key cryptography, Bitcoin, blockchain
