public:: true
alias:: Self Custody

# self-custody
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f973d4b1671f4311b39c4f28e9543696d17496aa54a3a5740f67ad5f5fe0cee",
  "@type": "Page",
  "vc:slug": "self-custody",
  "title": "self-custody",
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
  "@id": "urn:ngm:class:self-custody",
  "@type": "Class",
  "label": "Self-Custody",
  "definition": "Self-custody is the security model and operational practice whereby an individual or entity retains exclusive, unmediated control of the private cryptographic keys that authorise transactions over their digital assets, entirely without delegating that custody to a centralised exchange, broker, or financial institution. The axiom underpinning self-custody — 'not your keys, not your coins' — reflects the fact that whoever controls the private key controls the asset on-chain; counterparty risk from exchange insolvency, fraud, or regulatory asset freezes is therefore eliminated, but operational responsibility for key generation, backup, and signing security is transferred fully to the key holder. Self-custody is realised through software wallets (hot wallets), dedicated hardware security devices (cold wallets), multi-signature threshold schemes that distribute key material across several signatories, and advanced constructions such as threshold signature schemes (TSS) and social recovery wallets. Loss or compromise of the controlling private key or seed phrase results in permanent, irrecoverable loss of the associated assets with no recourse.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:key-management",
      "label": "Key Management"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:non-custodial-storage",
      "label": "Non-Custodial Storage"
    },
    {
      "@id": "urn:ngm:class:sovereign-custody",
      "label": "Sovereign Custody"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      },
      {
        "@id": "urn:ngm:class:random-number-generation",
        "label": "Secure Random Number Generation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      },
      {
        "@id": "urn:ngm:class:multi-signature",
        "label": "Multi-Signature"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature Scheme"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:hierarchical-deterministic-wallet",
        "label": "Hierarchical Deterministic Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:financial-sovereignty",
        "label": "Financial Sovereignty"
      },
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:custodial-exchange",
        "label": "Custodial Exchange"
      },
      {
        "@id": "urn:ngm:class:qualified-custodian",
        "label": "Qualified Custodian"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:social-recovery",
        "label": "Social Recovery Wallet"
      },
      {
        "@id": "urn:ngm:class:air-gap",
        "label": "Air Gap"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:verifiable-credential-vc",
        "label": "Verifiable Credential"
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
  - Self-custody is the security model and operational practice whereby an individual or entity retains exclusive, unmediated control of the [[Private Key]] material that authorises transactions over their [[Digital Asset]]s — entirely without delegating that custody to a centralised [[Custodial Exchange]], broker, or financial institution. The defining axiom — "not your keys, not your coins" — reflects the principle that whoever holds the private key controls the asset on-chain; by eliminating the intermediary, self-custody removes counterparty risk but transfers full operational responsibility to the key holder. It is realised through a spectrum of technical approaches ranging from software [[Wallet]]s (hot wallets) and dedicated [[Hardware Wallet]]s (cold wallets) to advanced constructions such as [[Multi-Signature]] schemes and [[Threshold Signature Scheme]]s.

- ### Overview
  - Self-custody emerged as a foundational philosophy in the [[Bitcoin]] community, rooted in the cypherpunk ethos of individual sovereignty and scepticism toward centralised financial intermediaries. Its relevance was dramatically underscored by high-profile exchange collapses (Mt. Gox 2014, FTX 2022) that demonstrated the catastrophic counterparty risk inherent in delegating custody to third parties.
  - The core value proposition is straightforward: a self-custodied asset is accessible to the key holder at any time, cannot be frozen by an exchange, and is not subject to the credit risk or fraud risk of a custodian. This aligns with the [[Censorship Resistance]] and [[Financial Sovereignty]] properties that [[Blockchain]] networks are designed to provide.
  - The principal challenge of self-custody is the inverse of its strength: the key holder bears sole responsibility for operational security. Mistakes in key generation, insecure backups, exposure to malware, or physical loss of the [[Seed Phrase]] result in permanent, irrecoverable loss of assets with no recourse mechanism. This trade-off between sovereignty and operational burden is the central tension that all self-custody solutions attempt to manage.
  - Self-custody is not binary — it spans a spectrum from fully sovereign single-key control to sophisticated multi-party arrangements that approximate the resilience of institutional custody while preserving the non-custodial property.

- ### Key Components
  - #### Private Key Infrastructure
    - [[Private Key]]: a 256-bit secret scalar (in [[Elliptic Curve Cryptography]] over secp256k1 for Bitcoin) from which a [[Public Key]] and blockchain address are deterministically derived; the key that must remain secret.
    - [[Seed Phrase]] (BIP-39 mnemonic): a 12- or 24-word human-readable encoding of the master entropy from which all child keys in a [[Hierarchical Deterministic Wallet]] are derived; the canonical backup format.
    - [[Secure Random Number Generation]]: key generation quality is entirely dependent on entropy quality; hardware random number generators or OS-level CSPRNGs are mandatory — weak entropy is a catastrophic vulnerability.
    - [[Key Derivation Function]]: deterministic path-based key derivation (BIP-32/44/84/86) allows a single seed to generate an unlimited structured tree of key pairs for multiple blockchains and accounts.

  - #### Wallet Architectures
    - **Hot Wallets** (software wallets): private keys stored in encrypted form on internet-connected devices (mobile apps, browser extensions, desktop software). Convenient but exposed to malware, phishing, and OS exploits. Examples: MetaMask, Electrum, Sparrow, BlueWallet.
    - **Cold Wallets** ([[Hardware Wallet]]s): dedicated signing devices with a secure element that stores the private key and performs signing internally; raw key material never leaves the device. The host computer constructs the unsigned transaction; the device displays it for user confirmation before signing. Examples: Ledger, Trezor, Foundation Passport, Coldcard.
    - **Air-Gapped Signing** ([[Air Gap]]): signing devices that have never and will never connect to any network; communication via QR codes (animated PSBT streams) or microSD card. Maximum isolation from remote attack vectors.
    - **Paper Wallets**: private keys or seeds printed or engraved on physical media; simple but fragile, vulnerable to physical damage and single-point-of-failure.

  - #### Multi-Party and Threshold Schemes
    - [[Multi-Signature]] (multisig): an on-chain script mechanism requiring m signatures from a set of n public keys (m-of-n) to authorise a transaction. The keys can reside on separate hardware wallets in separate locations, eliminating single-point-of-failure without requiring trust in a single device. Bitcoin's P2SH, P2WSH, and Taproot enable native multisig.
    - [[Threshold Signature Scheme]] (TSS): a cryptographic protocol (e.g. GG18, GG20, FROST) where a signing key is distributed as n shares such that any m participants can collaboratively produce a valid signature without ever reconstructing the full key. Unlike multisig, TSS produces a single signature indistinguishable on-chain from a single-signer transaction, preserving privacy.
    - [[Social Recovery Wallet]]: a smart-contract wallet (e.g. Argent) that designates trusted guardians who can collectively initiate account recovery if the primary key is lost, without any single guardian having unilateral access. Relies on [[Smart Contract]] logic rather than raw key custody.
    - [[Shamir Secret Sharing]] (SSS): the master seed or key is split into n shards using Shamir's scheme such that any m shards can reconstruct it, but fewer than m reveal no information. Allows geographically distributed backup of a single key.

- ### Applications and Use Cases
  - **Individual Bitcoin and Cryptocurrency Holders**: the primary and most common use case; individuals holding BTC, ETH, or other tokens in hardware or software wallets to avoid exchange counterparty risk. Post-FTX, hardware wallet sales accelerated significantly.
  - **Institutional Treasury Management**: corporate treasuries and family offices holding digital assets use multi-signature arrangements with keys distributed across officers, locations, and legal jurisdictions; often combined with time-locks and spending limits encoded in [[Taproot]] scripts.
  - **DeFi Participation**: interacting with [[Decentralised Finance]] protocols (Uniswap, Aave, Compound) requires a self-custodied wallet because smart contract interactions are signed directly by the user; there is no account login or password — only key control.
  - **NFT and Digital Collectibles Ownership**: [[Non-Fungible Token]] (NFT) ownership is predicated on holding the controlling key; custodial wallet providers can freeze or revoke access, making genuine ownership contingent on self-custody.
  - **Cross-Border and Sanction-Resistant Value Transfer**: individuals in jurisdictions with capital controls or monetary instability use self-custody to hold assets outside the reach of local financial systems.
  - **Decentralised Identity**: [[Self-Sovereign Identity]] systems (DID methods) use the same private key / public key paradigm; self-custody of the DID key is the foundation of identity sovereignty.
  - **Lightning Network**: operating a [[Lightning Network]] node in a non-custodial manner requires custody of channel funds' private keys and management of on-chain and off-chain state; custodial Lightning wallets (Strike, Wallet of Satoshi) sacrifice self-custody for UX simplicity.
  - **Inheritance and Estate Planning**: self-custody creates unique estate planning challenges; solutions include time-locked multisig, Shamir splits distributed to heirs, and dead-man's switch contracts.

- ### Relationships
  - requires:: [[Private Key]]
  - requires:: [[Seed Phrase]]
  - requires:: [[Secure Random Number Generation]]
  - uses:: [[Wallet]]
  - uses:: [[Hardware Wallet]]
  - uses:: [[Multi-Signature]]
  - uses:: [[Threshold Signature Scheme]]
  - uses:: [[Cryptography]]
  - uses:: [[Hierarchical Deterministic Wallet]]
  - enables:: [[Financial Sovereignty]]
  - enables:: [[Censorship Resistance]]
  - enables:: [[Decentralised Finance]]
  - contrastsWith:: [[Custodial Exchange]]
  - contrastsWith:: [[Third-Party Custody]]
  - contrastsWith:: [[Qualified Custodian]]
  - relatedTo:: [[Digital Asset]]
  - relatedTo:: [[Bitcoin]]
  - relatedTo:: [[Decentralised Identity]]
  - relatedTo:: [[Social Recovery Wallet]]
  - relatedTo:: [[Air Gap]]
  - bridges-to:: [[Self-Sovereign Identity]]
  - bridges-to:: [[Verifiable Credential]]

- ### Standards and Context
  - **BIP-32** (Hierarchical Deterministic Wallets): the foundational standard for deriving a tree of key pairs from a single master seed, enabling a single backup to cover all accounts and chains.
  - **BIP-39**: defines the 2048-word English wordlist and checksum scheme for encoding seed entropy as a mnemonic phrase; the universal backup standard across wallets.
  - **BIP-44 / BIP-49 / BIP-84 / BIP-86**: coin-type and account derivation path conventions for [[Bitcoin]] and multi-coin wallets; BIP-86 covers Taproot (P2TR) derivation.
  - **PSBT (BIP-174 / BIP-370)**: Partially Signed Bitcoin Transaction format; the interchange standard enabling offline signers (hardware wallets, air-gapped devices) to collaborate in constructing a transaction without sharing keys.
  - **SLIP-39** (Shamir's Secret-Sharing for Mnemonic Codes): a Trezor-originated standard for splitting a master seed into mnemonic shares using Shamir Secret Sharing, providing structured multi-backup.
  - **FROST (Flexible Round-Optimised Schnorr Threshold Signatures)**: an IETF draft RFC specifying a threshold Schnorr signature protocol suitable for [[Taproot]] wallets; enables round-efficient, non-interactive threshold signing.
  - **ERC-4337** (Account Abstraction): an Ethereum standard enabling smart-contract wallets (including social recovery designs) that do not require an EOA (externally owned account) private key to initiate transactions; a significant evolution in self-custody UX.
  - **Regulatory Environment**: travel rule obligations (FATF Recommendation 16) apply to virtual asset service providers (VASPs), not to self-custodied wallets; EU's Markets in Crypto-Assets Regulation (MiCA) exempts peer-to-peer transactions. However, some jurisdictions have sought to impose KYC obligations on unhosted wallets, making the regulatory status of pure self-custody a live policy debate.
  - **Qualified Custodians**: under US SEC rules (e.g. proposed custody rules under the Investment Advisers Act), investment advisers managing client assets may be required to use [[Qualified Custodian]]s; pure self-custody may not satisfy these requirements for institutional managers, creating compliance tension.

- ### Security Threat Model
  - **Seed phrase compromise**: physical theft, surveillance, or digital exfiltration of backup seed phrase is the primary attack vector. Mitigations: metal backup (fire/water resistant), geographically distributed copies, passphrase (BIP-39 25th word) hardening.
  - **Malware and clipboard hijacking**: software wallets on internet-connected devices are vulnerable to keyloggers, screen capture, and clipboard address replacement (where a copied address is silently replaced with an attacker's address). Mitigations: dedicated signing device, hardware wallet address verification on-device.
  - **Supply chain attacks**: tampered hardware wallets shipped with compromised firmware or pre-generated seeds. Mitigations: purchase direct from manufacturer, verify firmware signatures, generate fresh seed on first use.
  - **Wrench attack (physical coercion)**: an adversary with physical access to the key holder may coerce disclosure of the seed phrase. Mitigations: plausible deniability via multi-passphrase wallets, duress wallets, geographic separation of key shards.
  - **Smart contract risk (for smart-contract wallets)**: social recovery and account abstraction wallets depend on smart contract correctness; bugs in the contract can result in loss of funds. Mitigations: audited contracts, timelocks on recovery operations.
  - **Inheritance failure**: key holders who die without providing secure succession instructions result in permanent asset loss. Mitigations: documented inheritance procedures with Shamir splits held by trusted parties.

- ### Provenance
  - sources:: Bitcoin Core documentation, BIP-32/39/44/84/86/174/370, SLIP-39, FROST IETF Draft, ERC-4337, FATF Guidance on Virtual Assets, MiCA Regulation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
