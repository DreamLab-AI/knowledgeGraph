iri:: http://narrativegoldmine.com/blockchain#Wallet
uri:: urn:visionclaw:concept:blockchain:wallet
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:wallet
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Wallet
content-hash:: sha256-12-022faaecbba1
legacy-term-id:: WALLET-001
status:: production
maturity:: production
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - A software or hardware interface that stores cryptographic private keys and enables users to manage cryptocurrency assets, sign transactions, and interact with blockchain networks securely.

- ### Semantic Classification
  - owl-class:: blockchain:Wallet
  - owl-role:: KeyManagementSystem
  - belongs-to-domain:: [[BlockchainDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - A cryptocurrency wallet is a digital tool that stores [[private keys]] and enables users to manage [[cryptocurrency]] assets, sign [[transactions]], and interact with [[blockchain]] networks. Unlike physical wallets, crypto wallets don't actually store coins—they store the cryptographic keys that prove ownership of digital assets on the [[blockchain]].
  - ### Original Content
		- ```
  # Wallet
  ## Definition
		  A software or hardware interface that stores cryptographic private keys and enables users to manage cryptocurrency assets, sign transactions, and interact with blockchain networks securely.

		  ## OWL Functional Syntax


		  ## Properties

		  ### Object Properties
		  - **stores**: Wallet → PrivateKey (required, at least 1)
		  - **derivesAddresses**: Wallet → PublicAddress (required, at least 1)
		  - **signs**: Wallet → Transaction (0..*)
		  - **interactsWith**: Wallet → Blockchain (required, at least 1)
		  - **implements**: Wallet → KeyDerivationScheme (0..1)
		  - **generatesFrom**: Wallet → SeedPhrase (0..1)
		  - **supports**: Wallet → Cryptocurrency (1..*)
		  - **connectsTo**: Wallet → DApp (0..*)

		  ### Data Properties
		  - **keyCount**: xsd:integer (≥ 1)
		  - **encrypted**: xsd:boolean
		  - **passwordProtected**: xsd:boolean
		  - **multiSignature**: xsd:boolean
		  - **hierarchicalDeterministic**: xsd:boolean (HD wallet)
		  - **backupEnabled**: xsd:boolean
		  - **biometricEnabled**: xsd:boolean

		  ## Axioms


		  ## Subclass Hierarchy


		  ## Key Derivation


		  ## Security Features


		  ## Inference Rules

		  ```sparql
		  # Rule: Internet-connected wallet is hot wallet
		  [HotWalletInference:
		    (?w rdf:type :Wallet)
		    (?w :internetConnected "true"^^xsd:boolean)
		    ->
		    (?w rdf:type :HotWallet)
		  ]

		  # Rule: Offline wallet is cold wallet
		  [ColdWalletInference:
		    (?w rdf:type :Wallet)
		    (?w :internetConnected "false"^^xsd:boolean)
		    ->
		    (?w rdf:type :ColdWallet)
		  ]

		  # Rule: User controls keys implies non-custodial
		  [NonCustodialInference:
		    (?w rdf:type :Wallet)
		    (?w :stores ?key)
		    (?key :controlledBy :User)
		    ->
		    (?w rdf:type :NonCustodialWallet)
		    (?w :selfCustody "true"^^xsd:boolean)
		  ]

		  # Rule: Multiple signatures required
		  [MultiSigInference:
		    (?w rdf:type :Wallet)
		    (?w :requiresSignature ?key1)
		    (?w :requiresSignature ?key2)
		    differentFrom(?key1, ?key2)
		    ->
		    (?w rdf:type :MultiSigWallet)
		  ]

		  # Rule: High-value holdings require cold storage
		  [ColdStorageRequirement:
		    (?w rdf:type :Wallet)
		    (?w :holdsValue ?value)
		    greaterThan(?value, 100000) # $100k
		    ->
		    (?w :recommendedType :ColdWallet)
		  ]
		  ```

		  ## Multi-Signature Schemes


		  ## Examples

		  ### Hot Wallets (Software)
		  - MetaMask (Browser Extension)
		  - Trust Wallet (Mobile)
		  - Phantom (Solana)
		  - Exodus (Desktop)

		  ### Cold Wallets (Hardware)
		  - Ledger Nano X
		  - Trezor Model T
		  - ColdCard

		  ### Custodial
		  - Coinbase Wallet
		  - Binance Wallet

		  ### Non-Custodial
		  - MetaMask
		  - Ledger
		  - Trust Wallet

		  ### Multi-Sig
		  - Gnosis Safe
		  - BitGo

		  ## Related Terms
		  - PrivateKey
		  - PublicKey
		  - SeedPhrase
		  - BIP32
		  - BIP39
		  - BIP44
		  - MultiSig
		  - HardwareWallet
		  - ColdStorage
		  - Custody

		  ```

  ## Definition
  A software or hardware interface that stores cryptographic private keys and enables users to manage cryptocurrency assets, sign transactions, and interact with blockchain networks securely.

  ## OWL Functional Syntax

  ```owl
  Declaration(Class(:Wallet))
  SubClassOf(:Wallet :CryptographicKeyManagement)

  # Defining characteristics
  EquivalentClasses(:Wallet
  ObjectIntersectionOf(:KeyManagementSystem
    ObjectSomeValuesFrom(:stores :PrivateKey)
    ObjectSomeValuesFrom(:derivesAddresses :PublicAddress)
    ObjectSomeValuesFrom(:signs :Transaction)
    ObjectSomeValuesFrom(:interactsWith :Blockchain)))

  # Must store private keys
  SubClassOf(:Wallet
  ObjectSomeValuesFrom(:stores :PrivateKey))

  # Must derive public addresses
  SubClassOf(:Wallet
  ObjectSomeValuesFrom(:derivesAddresses :PublicAddress))

  # Must sign transactions
  SubClassOf(:Wallet
  ObjectSomeValuesFrom(:signs :Transaction))

  # Must interact with blockchain
  SubClassOf(:Wallet
  ObjectSomeValuesFrom(:interactsWith :Blockchain))

  # Can implement key derivation
  SubClassOf(:Wallet
  ObjectAllValuesFrom(:implements :KeyDerivationScheme))

  # Data constraints
  SubClassOf(:Wallet
  DataSomeValuesFrom(:keyCount
    DatatypeRestriction(xsd:integer
      xsd:minInclusive "1"^^xsd:integer)))

  # Disjoint major categories
  DisjointClasses(:HotWallet :ColdWallet)
  DisjointClasses(:CustodialWallet :NonCustodialWallet)
  ```

  ## Properties

  ### Object Properties
  - **stores**: Wallet → PrivateKey (required, at least 1)
  - **derivesAddresses**: Wallet → PublicAddress (required, at least 1)
  - **signs**: Wallet → Transaction (0..*)
  - **interactsWith**: Wallet → Blockchain (required, at least 1)
  - **implements**: Wallet → KeyDerivationScheme (0..1)
  - **generatesFrom**: Wallet → SeedPhrase (0..1)
  - **supports**: Wallet → Cryptocurrency (1..*)
  - **connectsTo**: Wallet → DApp (0..*)

  ### Data Properties
  - **keyCount**: xsd:integer (≥ 1)
  - **encrypted**: xsd:boolean
  - **passwordProtected**: xsd:boolean
  - **multiSignature**: xsd:boolean
  - **hierarchicalDeterministic**: xsd:boolean (HD wallet)
  - **backupEnabled**: xsd:boolean
  - **biometricEnabled**: xsd:boolean

  ## Axioms

  ```owl
  # Non-custodial wallets give users control
  EquivalentClasses(:NonCustodialWallet
  ObjectIntersectionOf(:Wallet
    ObjectAllValuesFrom(:stores
      ObjectSomeValuesFrom(:controlledBy :User))
    DataHasValue(:selfCustody "true"^^xsd:boolean)))

  # Custodial wallets are managed by third party
  EquivalentClasses(:CustodialWallet
  ObjectIntersectionOf(:Wallet
    ObjectAllValuesFrom(:stores
      ObjectSomeValuesFrom(:controlledBy :ThirdParty))
    DataHasValue(:selfCustody "false"^^xsd:boolean)))

  # Hot wallets are internet-connected
  SubClassOf(:HotWallet
  DataHasValue(:internetConnected "true"^^xsd:boolean))

  # Cold wallets are offline
  SubClassOf(:ColdWallet
  DataHasValue(:internetConnected "false"^^xsd:boolean))

  # HD wallets use BIP-32/44 derivation
  SubClassOf(:HDWallet
  ObjectSomeValuesFrom(:implements :BIP32))
  SubClassOf(:HDWallet
  ObjectSomeValuesFrom(:generatesFrom :SeedPhrase))
  SubClassOf(:HDWallet
  DataHasValue(:hierarchicalDeterministic "true"^^xsd:boolean))

  # Multi-sig wallets require multiple signatures
  SubClassOf(:MultiSigWallet
  DataHasValue(:multiSignature "true"^^xsd:boolean))
  SubClassOf(:MultiSigWallet
  ObjectMinCardinality(2 :requiresSignature :PrivateKey))

  # Hardware wallets provide cold storage
  SubClassOf(:HardwareWallet
  SubClassOf(:ColdWallet))
  SubClassOf(:HardwareWallet
  ObjectSomeValuesFrom(:usesDevice :SecureElement))
  ```

  ## Subclass Hierarchy

  ```owl
  # By Connectivity
  Declaration(Class(:HotWallet))
  SubClassOf(:HotWallet :Wallet)

  Declaration(Class(:ColdWallet))
  SubClassOf(:ColdWallet :Wallet)

  # By Custody
  Declaration(Class(:NonCustodialWallet))
  SubClassOf(:NonCustodialWallet :Wallet)

  Declaration(Class(:CustodialWallet))
  SubClassOf(:CustodialWallet :Wallet)

  # By Implementation
  Declaration(Class(:SoftwareWallet))
  SubClassOf(:SoftwareWallet :HotWallet)

  Declaration(Class(:HardwareWallet))
  SubClassOf(:HardwareWallet :ColdWallet)

  Declaration(Class(:PaperWallet))
  SubClassOf(:PaperWallet :ColdWallet)

  Declaration(Class(:WebWallet))
  SubClassOf(:WebWallet :SoftwareWallet)

  Declaration(Class(:MobileWallet))
  SubClassOf(:MobileWallet :SoftwareWallet)

  Declaration(Class(:DesktopWallet))
  SubClassOf(:DesktopWallet :SoftwareWallet)

  # By Features
  Declaration(Class(:HDWallet))
  SubClassOf(:HDWallet :Wallet)
  SubClassOf(:HDWallet
  DataHasValue(:hierarchicalDeterministic "true"^^xsd:boolean))

  Declaration(Class(:MultiSigWallet))
  SubClassOf(:MultiSigWallet :Wallet)

  Declaration(Class(:SmartContractWallet))
  SubClassOf(:SmartContractWallet :Wallet)
  SubClassOf(:SmartContractWallet
  ObjectSomeValuesFrom(:implementedAs :SmartContract))
  ```

  ## Key Derivation

  ```owl
  # BIP-32 Hierarchical Deterministic
  Declaration(Class(:BIP32))
  SubClassOf(:BIP32 :KeyDerivationScheme)

  # BIP-39 Mnemonic Seed Phrases
  Declaration(Class(:BIP39))
  SubClassOf(:BIP39 :KeyDerivationScheme)
  SubClassOf(:BIP39
  ObjectSomeValuesFrom(:generates :SeedPhrase))

  # BIP-44 Multi-Account Hierarchy
  Declaration(Class(:BIP44))
  SubClassOf(:BIP44 :KeyDerivationScheme)
  SubClassOf(:BIP44
  ObjectSomeValuesFrom(:extends :BIP32))

  # Seed phrase constraints
  SubClassOf(:SeedPhrase
  DataSomeValuesFrom(:wordCount
    DatatypeRestriction(xsd:integer
      xsd:enumeration "12"^^xsd:integer
      xsd:enumeration "15"^^xsd:integer
      xsd:enumeration "18"^^xsd:integer
      xsd:enumeration "21"^^xsd:integer
      xsd:enumeration "24"^^xsd:integer))) # 12, 15, 18, 21, or 24 words
  ```

  ## Security Features

  ```owl
  Declaration(Class(:WalletSecurity))

  # Encryption
  SubClassOf(:EncryptedWallet :Wallet)
  SubClassOf(:EncryptedWallet
  DataHasValue(:encrypted "true"^^xsd:boolean))
  SubClassOf(:EncryptedWallet
  ObjectSomeValuesFrom(:usesEncryption :AES256))

  # Multi-factor authentication
  SubClassOf(:MFAWallet :Wallet)
  SubClassOf(:MFAWallet
  ObjectSomeValuesFrom(:requires :MultiFactorAuth))

  # Biometric protection
  SubClassOf(:BiometricWallet :Wallet)
  SubClassOf(:BiometricWallet
  DataHasValue(:biometricEnabled "true"^^xsd:boolean))
  ```

  ## Inference Rules

  ```sparql
  # Rule: Internet-connected wallet is hot wallet
  [HotWalletInference:
  (?w rdf:type :Wallet)
  (?w :internetConnected "true"^^xsd:boolean)
  ->
  (?w rdf:type :HotWallet)
  ]

  # Rule: Offline wallet is cold wallet
  [ColdWalletInference:
  (?w rdf:type :Wallet)
  (?w :internetConnected "false"^^xsd:boolean)
  ->
  (?w rdf:type :ColdWallet)
  ]

  # Rule: User controls keys implies non-custodial
  [NonCustodialInference:
  (?w rdf:type :Wallet)
  (?w :stores ?key)
  (?key :controlledBy :User)
  ->
  (?w rdf:type :NonCustodialWallet)
  (?w :selfCustody "true"^^xsd:boolean)
  ]

  # Rule: Multiple signatures required
  [MultiSigInference:
  (?w rdf:type :Wallet)
  (?w :requiresSignature ?key1)
  (?w :requiresSignature ?key2)
  differentFrom(?key1, ?key2)
  ->
  (?w rdf:type :MultiSigWallet)
  ]

  # Rule: High-value holdings require cold storage
  [ColdStorageRequirement:
  (?w rdf:type :Wallet)
  (?w :holdsValue ?value)
  greaterThan(?value, 100000) # $100k
  ->
  (?w :recommendedType :ColdWallet)
  ]
  ```

  ## Multi-Signature Schemes

  ```owl
  Declaration(Class(:MultiSigScheme))

  # M-of-N signature requirement
  SubClassOf(:MultiSigWallet
  DataSomeValuesFrom(:requiredSignatures xsd:integer))
  SubClassOf(:MultiSigWallet
  DataSomeValuesFrom(:totalSigners xsd:integer))

  # Common schemes
  SubClassOf(:TwoOfThreeMultiSig :MultiSigWallet)
  SubClassOf(:TwoOfThreeMultiSig
  DataHasValue(:requiredSignatures "2"^^xsd:integer))
  SubClassOf(:TwoOfThreeMultiSig
  DataHasValue(:totalSigners "3"^^xsd:integer))

  SubClassOf(:ThreeOfFiveMultiSig :MultiSigWallet)
  SubClassOf(:ThreeOfFiveMultiSig
  DataHasValue(:requiredSignatures "3"^^xsd:integer))
  SubClassOf(:ThreeOfFiveMultiSig
  DataHasValue(:totalSigners "5"^^xsd:integer))
  ```
		  ```

  ## Wallet Types & Architecture

  ### Hot Wallets vs Cold Wallets
  - **[[Hot Wallets]]** are internet-connected wallets providing convenient access for daily [[transactions]]. They include [[software wallets]], [[mobile wallets]], [[web wallets]], and [[browser extensions]]. Popular examples include [[MetaMask]] (100M+ users), [[Phantom]], [[Trust Wallet]], and [[Exodus]]. Hot wallets prioritize accessibility and user experience, making them ideal for active trading and [[DeFi]] interactions.
  - **[[Cold Wallets]]** are offline storage solutions providing maximum [[security]] for long-term holdings. Types include [[hardware wallets]], [[paper wallets]], and [[air-gapped]] computers. Leading hardware wallets include [[Ledger]] (5M+ users), [[Trezor]], [[Coldcard]], and [[BitBox02]]. Cold storage is essential for securing large amounts of [[cryptocurrency]] against online threats.
  - The security-convenience tradeoff means users typically maintain both hot wallets for daily use and cold wallets for savings, following the "[[cold storage]]" principle for majority holdings.

  ### Custodial vs Non-Custodial
  - **[[Non-Custodial Wallets]]** give users complete control over their [[private keys]], embodying the principle "[[not your keys not your coins]]". Users are solely responsible for [[key management]] and [[seed phrase]] backup. Examples include [[MetaMask]], [[Ledger]], [[Electrum]], [[BlueWallet]], and [[Sparrow Wallet]].
  - **[[Custodial Wallets]]** are managed by third-party services that hold users' private keys. While convenient for beginners and offering account recovery, they introduce [[counterparty risk]] and regulatory exposure. Examples include [[exchange wallets]] from [[Coinbase]], [[Binance]], and [[Kraken]].
  - The [[self-custody]] movement emphasizes non-custodial solutions, especially post-[[FTX collapse]], highlighting risks of centralized custody and importance of [[financial sovereignty]].

  ### Software Wallet Categories
  - **[[Desktop Wallets]]** like [[Sparrow Wallet]], [[Electrum]], [[Wasabi Wallet]], and [[Bitcoin Core]] offer full control and advanced features like [[coin control]], [[CPFP]] (Child Pays For Parent), and [[RBF]] (Replace-By-Fee). Desktop wallets provide robust [[privacy]] features and support for [[Tor]] routing.
  - **[[Mobile Wallets]]** prioritize portability and ease-of-use. Leading [[Bitcoin]] mobile wallets include [[BlueWallet]] (supports [[SegWit]] and [[Taproot]]), [[Muun]] (integrated [[Lightning Network]]), [[Phoenix Wallet]] (Lightning-first), [[Breez]] (non-custodial Lightning), and [[Green Wallet]] by [[Blockstream]].
  - **[[Web Wallets]]** operate through browsers, offering instant access without installation. Examples include [[Blockchain.com Wallet]], [[MyEtherWallet]] (MEW), and exchange web interfaces. Web wallets face higher [[phishing]] risks and should only hold small amounts.
  - **[[Browser Extension Wallets]]** like [[MetaMask]], [[Phantom]], and [[Rabby]] integrate directly with [[Web3]] applications, enabling seamless [[DApp]] interactions while maintaining local [[key storage]].

  ## Major Wallet Ecosystems (2025)

  ### Hardware Wallets
  - **[[Ledger]]** (5M+ users) offers [[Ledger Nano S Plus]] and [[Ledger Nano X]] with [[Bluetooth]] support. Devices use [[secure element]] chips and support 5,500+ assets. [[Ledger Live]] software provides unified portfolio management. Recent [[Ledger Recover]] controversy highlights [[security model]] debates around [[key sharding]].
  - **[[Trezor]]** by [[SatoshiLabs]] provides [[Trezor Model One]] and [[Trezor Model T]] with [[touchscreen]]. Fully [[open source]] firmware builds trust through transparency. [[Trezor Suite]] desktop app supports [[coin control]], [[Tor]], and [[Coinjoin]] privacy features.
  - **[[Coldcard]]** by [[Coinkite]] focuses exclusively on [[Bitcoin]] with air-gapped operation, [[microSD]] card backups, and [[BIP-85]] child seed derivation. Popular among [[Bitcoin maximalists]] for advanced security features like [[duress PINs]] and [[brick me PIN]].
  - **[[BitBox02]]** by [[Shift Crypto]] offers minimalist design with [[dual-chip architecture]] and [[open source]] hardware. Swiss-made quality with focus on [[Bitcoin-only]] and [[multi-coin]] editions. [[BitBoxApp]] provides simple interface for beginners.
  - **[[Foundation Passport]]** provides [[QR code]]-based air-gapped operation with [[open source]] design. Uses [[Microchip ATECC608B]] secure element and [[avalanche noise source]] for entropy generation.

  ### Bitcoin-Focused Software Wallets
  - **[[Sparrow Wallet]]** is the premier desktop wallet for [[Bitcoin power users]], offering comprehensive [[UTXO management]], [[coin control]], [[multisig]] coordination, [[hardware wallet]] integration, and native [[Tor]] support. Supports [[Taproot]], [[PSBT]] (Partially Signed Bitcoin Transactions), and [[Whirlpool]] [[Coinjoin]].
  - **[[Electrum]]** (launched 2011) is the oldest popular [[Bitcoin]] wallet, known for [[SPV]] (Simplified Payment Verification), [[cold storage]] capabilities, and [[multisig]] support. Supports [[Lightning Network]] via plugins and hardware wallet integration.
  - **[[Wasabi Wallet]]** focuses on [[privacy]] through built-in [[Coinjoin]] using [[WabiSabi]] protocol. Features [[Tor]]-only connections and [[coin control]]. [[Wasabi Wallet 2.0]] improved user experience while maintaining privacy focus.
  - **[[Samourai Wallet]]** (mobile) provides advanced [[privacy features]] including [[Ricochet]], [[Stonewall]], [[Stowaway]], and [[Whirlpool Coinjoin]]. Integrates [[Dojo]] for full node backend and [[PayNym]] for reusable payment codes.
  - **[[BlueWallet]]** combines simplicity with advanced features, supporting [[SegWit]], [[Taproot]], [[multisig]], and [[Lightning Network]]. Open source mobile wallet with [[watch-only]] wallet support and [[PSBT]] compatibility.
  - **[[Green Wallet]]** by [[Blockstream]] features [[multisig security]] (2-of-2 with timelock recovery), [[Liquid Network]] support, and hardware wallet integration. Available on mobile and desktop.

  ### Lightning Network Wallets
  - **[[Phoenix Wallet]]** by [[ACINQ]] provides non-custodial [[Lightning]] with automated [[channel management]]. Uses [[Trampoline routing]] for simplified operation. Supports [[on-chain]] and [[Lightning]] with seamless [[swap]] functionality.
  - **[[Breez]]** offers non-custodial Lightning with [[Neutrino]] [[SPV]] client. Features [[Lightning Service Provider]] (LSP) model for automatic [[channel opening]]. Integrated [[podcast]] player with [[streaming sats]] payments.
  - **[[Muun Wallet]]** combines [[on-chain]] and [[Lightning]] in unified balance using [[submarine swaps]]. Non-custodial with [[2-of-2 multisig]] security model. Emergency kit provides recovery without Muun servers.
  - **[[Zeus]]** provides mobile interface for [[Lightning Network Daemon]] (LND), [[Core Lightning]] (CLN), and [[Eclair]] nodes. Supports [[Lightning Address]], [[LNURL]], and full node management from mobile device.
  - **[[Blixt Wallet]]** runs [[LND]] node directly on mobile device, providing full non-custodial control. Features [[Tor]] support, [[keysend]] payments, and advanced Lightning features.

  ### Multi-Chain & DeFi Wallets
  - **[[MetaMask]]** dominates [[Ethereum]] ecosystem with 100M+ users. Browser extension and mobile app support [[EVM-compatible]] chains, [[token]] management, [[NFTs]], and [[DApp]] browsing. [[MetaMask Snaps]] enable extensibility and [[Bitcoin]] integration.
  - **[[Phantom]]** leads on [[Solana]] with clean interface, [[NFT]] gallery, and integrated [[token swaps]]. Expanding to [[Ethereum]], [[Polygon]], and [[Bitcoin]] support in 2025.
  - **[[Exodus]]** provides beautiful desktop and mobile wallet supporting 260+ assets. Built-in [[exchange]] integration and [[staking]] for multiple chains. Focus on user experience for crypto beginners.
  - **[[Trust Wallet]]** by [[Binance]] offers mobile-first experience with [[DApp browser]], [[staking]], and support for 70+ blockchains. Open source with [[WalletConnect]] integration.
  - **[[Rainbow Wallet]]** (Ethereum) features innovative [[ENS]]-first design and beautiful [[NFT]] showcase. Mobile-focused with emphasis on [[DeFi]] accessibility.

  ## Key Management Standards

  ### BIP Standards
  - **[[BIP-32]]** (Hierarchical Deterministic Wallets) enables deriving multiple keys from single [[master seed]] using [[key derivation]] trees. Introduced [[extended keys]] (xpub/xprv) allowing [[watch-only]] wallets and deterministic key generation.
  - **[[BIP-39]]** standardized [[mnemonic]] [[seed phrases]] using 2048-word dictionary. Most wallets use 12 or 24 words providing 128 or 256 bits of entropy. [[Seed phrase]] becomes master key for [[HD wallet]] recovery across different wallet software.
  - **[[BIP-44]]** defined [[multi-account hierarchy]] standard: `m/44'/coin_type'/account'/change/address_index`. Enables wallet organization with separate accounts for different purposes while maintaining single backup.
  - **[[BIP-49]]** specified [[P2WPKH-nested-in-P2SH]] derivation path (`m/49'`) for backwards-compatible [[SegWit]] addresses (3-addresses).
  - **[[BIP-84]]** defined [[native SegWit]] derivation path (`m/84'`) for [[bech32]] addresses (bc1q-addresses), providing lowest transaction fees.
  - **[[BIP-86]]** introduced [[Taproot]] derivation path (`m/86'`) for [[bech32m]] addresses (bc1p-addresses), enabling Taproot privacy and efficiency benefits.
  - **[[BIP-85]]** enables deriving child seeds from master seed, allowing creation of separate wallets while maintaining single master backup. Useful for [[inheritance planning]] and segregated holdings.

  ### Derivation Paths
  - Standard [[Bitcoin]] derivation paths indicate address type and network:
  - Legacy (P2PKH): `m/44'/0'/0'/0/0`
  - Nested SegWit (P2SH-P2WPKH): `m/49'/0'/0'/0/0`
  - Native SegWit (P2WPKH): `m/84'/0'/0'/0/0`
  - Taproot (P2TR): `m/86'/0'/0'/0/0`
  - [[Coin type]] index (second level) identifies [[cryptocurrency]]: 0 for [[Bitcoin]], 1 for testnet, 60 for [[Ethereum]], 2301 for [[Litecoin]].
  - [[Account]] index enables multiple wallets from same seed, [[change]] index separates receiving (0) from change (1) addresses, [[address index]] generates sequential addresses.

  ### Seed Phrase Security
  - **[[12-word seed phrase]]** provides 128 bits of entropy (2^128 combinations), considered secure against brute force attacks. **[[24-word seed phrase]]** doubles to 256 bits for maximum security.
  - **[[Seed phrase backup]]** best practices: Write on metal (fire/water resistant), split storage across secure locations, never digital storage (no photos, cloud, or unencrypted files), use [[Shamir Secret Sharing]] for advanced splits.
  - **[[Passphrase]]** (BIP-39 extension, 25th word) adds another security layer, creating entirely different wallet. Without passphrase, seed phrase can't access funds. Enables [[plausible deniability]] with decoy wallet.
  - **[[Seed phrase attack vectors]]**: Physical discovery, [[shoulder surfing]], malware during generation, [[supply chain attacks]] on pre-generated seeds, [[phishing]] for "wallet verification".

  ## Multisignature Wallets

  ### Multisig Architecture
  - **[[Multisig]]** requires M-of-N signatures to authorize transactions, distributing trust and eliminating single points of failure. Common schemes: [[2-of-3 multisig]] (personal + backup + service), [[3-of-5 multisig]] (corporate governance), [[5-of-7 multisig]] (large organizations).
  - **[[Bitcoin multisig]]** uses [[P2SH]] (Pay-to-Script-Hash), [[P2WSH]] (Pay-to-Witness-Script-Hash), or [[P2TR]] (Pay-to-Taproot) for script commitments. Taproot multisig ([[MuSig2]]) provides same on-chain footprint as single-sig for privacy.
  - **[[Threshold signatures]]** like [[Schnorr signatures]] enable [[MuSig]], [[MuSig2]], and [[FROST]] protocols, creating single signature from multiple parties without revealing multisig structure on-chain.

  ### Multisig Wallets & Solutions
  - **[[Sparrow Wallet]]** excels at [[multisig coordination]] with [[PSBT]] workflow, supporting [[hardware wallet]] integration for all cosigners. Provides clear [[UTXO management]] and [[transaction verification]].
  - **[[Specter Desktop]]** focuses on multisig with multiple hardware wallets, offering [[watch-only]] coordination and [[air-gapped]] signing. Supports [[Bitcoin Core]] integration.
  - **[[Casa]]** provides managed multisig (2-of-3, 3-of-5) with mobile app coordination and hardware key distribution. Offers key replacement and inheritance services.
  - **[[Unchained Capital]]** offers multisig vaults with collaborative custody: user controls 2 keys, Unchained holds 1 key for recovery. Provides concierge service and lending against Bitcoin holdings.
  - **[[Gnosis Safe]]** (Ethereum/EVM) dominates smart contract multisig with modular security. Supports [[social recovery]], [[transaction batching]], and [[DApp]] integration. Secures $40B+ in assets.

  ### Multisig Use Cases
  - **[[Personal security]]**: 2-of-3 with user mobile + hardware wallet + backup hardware, protecting against single device loss while maintaining control.
  - **[[Corporate treasury]]**: 3-of-5 requiring CFO + CEO + any board member for spending authorization, preventing single-person risk.
  - **[[Inheritance planning]]**: 2-of-3 with owner + trusted family member + lawyer, enabling access if owner incapacitated without giving any single party control.
  - **[[Escrow services]]**: 2-of-3 with buyer + seller + arbitrator, releasing funds when two parties agree.

  ## Bitcoin Wallet Ecosystem 2025

  ### Taproot & Advanced Features
  - **[[Taproot]]** (activated November 2021) enables [[Schnorr signatures]], [[MAST]] (Merkelized Alternative Script Trees), and improved privacy. [[Taproot wallets]] include [[Sparrow]], [[BlueWallet]], [[Electrum 4.0+]], [[Ledger]], and [[Trezor]].
  - **[[Coin control]]** allows selecting specific [[UTXOs]] for transactions, crucial for [[privacy]] and [[fee optimization]]. Power user feature in [[Sparrow]], [[Electrum]], and [[Bitcoin Core]].
  - **[[PSBT]]** (Partially Signed Bitcoin Transactions, BIP-174) enables collaborative transaction construction and signing, essential for [[multisig]] and [[hardware wallet]] workflows. Supported by all major Bitcoin wallets.
  - **[[Replace-By-Fee]]** (RBF, BIP-125) allows replacing unconfirmed transaction with higher fee version. Useful when fees spike or transaction stuck in [[mempool]].
  - **[[Child-Pays-For-Parent]]** (CPFP) enables spending unconfirmed transaction output with higher fee to incentivize mining both transactions together.

  ### RGB Protocol Integration
  - **[[RGB]]** is [[Bitcoin]] [[Layer 2]] protocol for [[smart contracts]] and asset issuance, using [[client-side validation]]. [[RGB-compatible wallets]] emerging in 2025 include specialized builds of [[Electrum]] and new [[mobile wallets]].
  - [[RGB]] enables [[NFTs]], [[stablecoins]], and [[DeFi]] on Bitcoin without blockchain bloat. [[RGB-20]] standard for fungible tokens, [[RGB-21]] for NFTs.
  - Integration requires [[Lightning Network]] support as RGB transfers happen through Lightning channels. Watch for [[RGB-enabled Lightning wallets]] in 2025-2026.

  ### Privacy-Focused Wallets
  - **[[Coinjoin]]** wallets mix transactions for [[UTXO]] privacy. [[Wasabi Wallet]] uses [[WabiSabi]] protocol with [[zero-knowledge proofs]], [[Samourai Wallet]] offers [[Whirlpool]] with [[Tor]] integration.
  - **[[Joinmarket]]** enables earning fees for providing liquidity to Coinjoin transactions while mixing own UTXOs. Requires running Bitcoin full node.
  - **[[PayNym]]** (BIP-47) creates reusable payment codes preventing [[address reuse]] while enabling static payment identifiers. Implemented in [[Samourai]] and [[Sparrow]].
  - **[[Silent payments]]** (BIP proposal) enable static payment addresses without address reuse, improving [[UTXO privacy]] without additional protocols.

  ## Wallet Security Best Practices

  ### Key Management
  - **[[Never share seed phrases]]**: Legitimate services never ask. All [[phishing]] attacks target seed phrases. Be extremely skeptical of "wallet verification" or "wallet synchronization" requests.
  - **[[Hardware isolation]]**: Use [[hardware wallets]] for significant holdings. [[Secure element]] chips protect against physical attacks. [[Air-gapped]] signing prevents malware interception.
  - **[[Address verification]]**: Always verify [[receiving addresses]] on hardware wallet screen before sending. [[Clipboard malware]] can replace addresses.
  - **[[Firmware verification]]**: Check [[firmware]] authenticity using manufacturer's [[GPG signatures]]. [[Supply chain attacks]] can compromise pre-tampered devices.
  - **[[Backup redundancy]]**: Maintain multiple [[seed phrase backups]] in geographically separated secure locations. Consider [[metal backups]] for fire/water resistance.

  ### Transaction Security
  - **[[Fee estimation]]**: Use wallet's [[fee estimator]] or check [[mempool]] status. Avoid overpaying during low-fee periods. Enable [[RBF]] for flexibility.
  - **[[Transaction preview]]**: Review all transaction details before signing. Verify recipient address, amount, and fee. Watch for [[address poisoning]] attacks.
  - **[[Test transactions]]**: Send small amount first when using new address or wallet, especially for large transfers or [[multisig]].
  - **[[UTXO management]]**: Consolidate small UTXOs during low-fee periods. Avoid creating [[dust outputs]] that cost more to spend than value.

  ### Common Attack Vectors
  - **[[Phishing attacks]]**: Fake wallet websites, [[malicious browser extensions]], SMS/email scams requesting seed phrases. Always access wallets via bookmarked official URLs or verified apps.
  - **[[Clipboard malware]]**: Malware replacing copied addresses with attacker's address. Always verify pasted addresses match copied ones, especially for large amounts.
  - **[[Supply chain attacks]]**: Compromised wallets shipped with pre-generated seeds. Purchase hardware wallets directly from manufacturers, verify tamper-evident packaging.
  - **[[SIM swap attacks]]**: Attacker gains control of phone number to bypass [[2FA]]. Use [[authenticator apps]] instead of SMS, enable [[SIM PIN]].
  - **[[Dusting attacks]]**: Small amounts sent to addresses to trace [[UTXO]] relationships. Use [[coin control]] to avoid spending dust with privacy-sensitive UTXOs.
  - **[[Malicious updates]]**: Fake wallet updates installing malware. Only update through official sources, verify signatures for critical wallets.

  ## Wallet Standards & Protocols

  ### Address Formats
  - **[[Legacy addresses]]** (P2PKH) start with `1`, use most [[blockchain]] space, highest fees. Still widely supported but deprecated.
  - **[[P2SH addresses]]** start with `3`, used for [[multisig]] and wrapped [[SegWit]]. Moderate fees, good compatibility.
  - **[[Bech32 addresses]]** (native SegWit) start with `bc1q`, provide 40% lower fees than legacy. Case-insensitive with error detection.
  - **[[Bech32m addresses]]** (Taproot) start with `bc1p`, enable [[Schnorr signatures]] and [[MAST]]. Improved privacy and efficiency.

  ### Wallet Interoperability
  - **[[WalletConnect]]** protocol enables mobile wallets to connect with [[DApps]] via [[QR code]] scanning. Supports [[Ethereum]], [[Polygon]], [[BSC]], and 100+ chains.
  - **[[Web3 Modal]]** provides unified wallet connection interface for [[DApps]], supporting [[MetaMask]], [[WalletConnect]], [[Coinbase Wallet]], and others.
  - **[[Account Abstraction]]** ([[EIP-4337]]) introduces [[smart contract wallets]] on [[Ethereum]], enabling [[social recovery]], [[gasless transactions]], and [[transaction batching]].
  - **[[Lightning Address]]** creates email-style payment addresses for [[Lightning Network]] (user@domain.com), simplifying Lightning payments without invoices.

  ### Emerging Technologies
  - **[[MPC wallets]]** (Multi-Party Computation) distribute key generation and signing across multiple parties without creating reconstructable key shares. Institutional adoption growing via [[Fireblocks]], [[Coinbase Prime]].
  - **[[Shamir Secret Sharing]]** (SLIP-39) splits seed into shares requiring threshold to reconstruct. More sophisticated than simple geographic distribution.
  - **[[Miniscript]]** simplifies Bitcoin [[script]] composition, enabling easier [[smart contract]] creation and analysis.
  - **[[DLC wallets]]** (Discreet Log Contracts) enable Bitcoin-based [[derivatives]] and [[conditional payments]] using [[oracle]] data. [[Atomic Finance]] pioneering DLC integration.

  #### References
  1. Antonopoulos, A. M. (2024). Mastering Bitcoin: Programming the Open Blockchain (3rd ed.). O'Reilly Media.
  2. Bitcoin Improvement Proposals. (2025). BIP-32: Hierarchical Deterministic Wallets. https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki
  3. Bitcoin Improvement Proposals. (2025). BIP-39: Mnemonic code for generating deterministic keys. https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki
  4. Bitcoin Improvement Proposals. (2025). BIP-174: Partially Signed Bitcoin Transaction Format. https://github.com/bitcoin/bips/blob/master/bip-0174.mediawiki
  5. Sparrow Wallet Documentation. (2025). Advanced Features Guide. https://sparrowwallet.com/docs/
  6. Lightning Network Documentation. (2025). Lightning Network Wallets Comparison. https://lightningnetwork.plus/
  7. Ledger. (2025). Ledger Security Model White Paper. Ledger SAS.
  8. Trezor. (2025). Open Source Security Architecture. SatoshiLabs.
  9. RGB Protocol. (2025). RGB Smart Contracts on Bitcoin. https://rgb.tech/
  10. Bitcoin Optech. (2025). Taproot Wallet Compatibility Matrix. https://bitcoinops.org/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
