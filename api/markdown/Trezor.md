public:: true

# Trezor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:77d660b9091aa590609077160a57be402bfb67c30790e62848c910273cce0d72",
  "@type": "Page",
  "vc:slug": "trezor",
  "title": "Trezor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:private-key",
      "vc:label": "Private Key"
    },
    {
      "@id": "urn:visionflow:linked:self-custody",
      "vc:label": "Self-Custody"
    },
    {
      "@id": "urn:visionflow:linked:key-management",
      "vc:label": "Key Management"
    },
    {
      "@id": "urn:visionflow:linked:cold-storage",
      "vc:label": "Cold Storage"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Trezor"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:trezor",
  "@type": "Class",
  "label": "Trezor",
  "definition": "Trezor is a line of hardware wallets developed by SatoshiLabs that store cryptocurrency private keys in a tamper-resistant, air-gapped physical device, preventing key exposure to internet-connected hosts. Transactions are signed entirely within the secure element of the device, meaning the private key never leaves the hardware even during active use. Trezor devices implement BIP32 hierarchical deterministic (HD) wallet derivation, BIP39 mnemonic seed phrases, and BIP44 multi-account structures, making them a foundational reference implementation for open-source hardware wallet design. As a mature consumer product launched in 2014, Trezor represents the established category of cold-storage self-custody devices that underpin non-custodial asset management in decentralised finance.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cold-storage",
      "label": "Cold Storage"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:secure-element",
        "label": "Secure Element"
      },
      {
        "@id": "urn:ngm:class:seed-phrase",
        "label": "Seed Phrase"
      },
      {
        "@id": "urn:ngm:class:pin-protection",
        "label": "PIN Protection"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:hardware-wallet",
        "label": "Hardware Wallet"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:bip39",
        "label": "BIP39"
      },
      {
        "@id": "urn:ngm:class:usb-interface",
        "label": "USB Interface"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:transaction-signing",
        "label": "Transaction Signing"
      },
      {
        "@id": "urn:ngm:class:multi-currency-support",
        "label": "Multi-Currency Support"
      },
      {
        "@id": "urn:ngm:class:passphrase-encryption",
        "label": "Passphrase Encryption"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:key-derivation-function",
        "label": "Key Derivation"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bip44",
        "label": "BIP44"
      },
      {
        "@id": "urn:ngm:class:open-source-firmware",
        "label": "Open-Source Firmware"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:shamir-secret-sharing",
        "label": "Shamir Secret Sharing"
      },
      {
        "@id": "urn:ngm:class:hierarchical-deterministic-wallet",
        "label": "Hierarchical Deterministic Wallet"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger"
      },
      {
        "@id": "urn:ngm:class:hot-wallet",
        "label": "Hot Wallet"
      },
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signing",
        "label": "Cryptographic Signing"
      },
      {
        "@id": "urn:ngm:class:wallet-connect",
        "label": "WalletConnect"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      },
      {
        "@id": "urn:ngm:class:supply-chain-security",
        "label": "Supply Chain Security"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:trezor-hardware-wallet",
      "label": "Trezor Hardware Wallet"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:trezor:b53952139312",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:77d660b9091aa590609077160a57be402bfb67c30790e62848c910273cce0d72"
  },
  "vc:resolutions": [
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:linked:private-key",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Custody]]",
      "resolved": "urn:visionflow:linked:self-custody",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Key Management]]",
      "resolved": "urn:visionflow:linked:key-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cold Storage]]",
      "resolved": "urn:visionflow:linked:cold-storage",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Trezor is a line of open-source [[Hardware Wallet]] devices produced by SatoshiLabs (Prague, Czech Republic) that store [[Private Key]] material in a tamper-resistant, offline physical device, enabling [[Self-Custody]] of [[Cryptocurrency]] without ever exposing cryptographic secrets to an internet-connected host. The device implements [[BIP32]] hierarchical deterministic derivation, [[BIP39]] mnemonic seed phrases, and [[BIP44]] multi-account structures, and performs all [[Transaction Signing]] operations internally so that the private key never traverses the USB or Bluetooth channel. Launched in 2014 as the world's first consumer hardware wallet, Trezor is a foundational reference in [[Cold Storage]] security and [[Key Management]] for decentralised assets.

- ### Overview
  - Trezor devices operate on the principle of isolation: the [[Private Key]] is generated on the device itself, stored in encrypted flash memory protected by a user-defined [[PIN Protection]], and never transmitted in plaintext to any connected computer or application.
  - When a transaction is initiated via a companion application (Trezor Suite or a compatible third-party wallet), the unsigned transaction payload is sent to the device, verified on its own display, and signed internally; only the signed transaction is returned to the host.
  - This architecture defeats the most common attack vectors against software wallets — malware, clipboard hijacking, and remote key exfiltration — because there is no pathway for an attacker to read the key from a compromised host machine.
  - SatoshiLabs publishes both firmware and hardware designs under open-source licences (GPL v3 for firmware, CERN OHL for hardware schematics), making Trezor one of the few fully auditable hardware wallet platforms.
  - Two principal product lines exist: **Trezor Model One** (entry-level, USB-A/microUSB, monochrome display, no secure-chip dedicated silicon) and **Trezor Model T** (touch-screen, USB-C, microSD slot for encrypted backups, Shamir Backup support).
  - The companion desktop and web application **Trezor Suite** provides [[Portfolio Management]], [[Coin Control]], [[Tor]] privacy routing, and direct [[Decentralised Finance]] integrations via [[WalletConnect]].

- ### Key Components
  - **Microcontroller (MCU)**: ARM Cortex-M class processor running open-source TrezorOS firmware; there is no proprietary secure-element silicon on Model One (a deliberate openness trade-off).
  - **Display**: Used to verify destination addresses and transaction amounts before signing; critical defence against [[Man-in-the-Middle Attack]] on transaction data.
  - **[[Seed Phrase]] (BIP39 Mnemonic)**: A 12- or 24-word recovery phrase generated on-device at setup; encodes the [[Master Seed]] from which all child keys are derived via [[BIP32]] [[Key Derivation]].
  - **[[PIN Protection]]**: A randomly shuffled on-screen keypad that makes PIN entry resistant to shoulder-surfing and USB sniffing.
  - **[[Passphrase Encryption]] (BIP39 Passphrase / "25th word")**: An optional passphrase layered on top of the seed, creating a completely separate wallet namespace — allows plausible deniability and hardened security for high-value accounts.
  - **[[Shamir Secret Sharing]] (SLIP39 — Trezor Model T)**: Splits the master secret into N shares of which M are required to recover the wallet, enabling distributed physical backup without a single point of failure.
  - **USB / Bluetooth Interface**: Communication channel carries only transaction payloads and signed outputs, never the raw key.
  - **[[Open-Source Firmware]]**: Both firmware and bootloader are publicly auditable; firmware updates are signed and verified on-device to prevent downgrade attacks.

- ### Mechanisms
  - **[[Hierarchical Deterministic Wallet]] (HD Wallet)**: BIP32 tree of keys derived from a single [[Master Seed]]; each account, coin type, and address index is a separate derivation path (e.g. `m/44'/0'/0'/0/0` for Bitcoin mainnet).
  - **[[Transaction Signing]] Flow**: Host application constructs an unsigned transaction → serialises it → passes to Trezor via HID/WebUSB → device parses and displays recipient and amount → user confirms physical button press → device signs with the relevant derived [[Private Key]] → returns DER-encoded signature to host → host broadcasts to the [[Blockchain]] network.
  - **Firmware Verification**: On boot, the bootloader checks a cryptographic signature over the firmware image; tampering voids the hardware seal indicator and is flagged on-screen.
  - **[[Supply Chain Security]]**: SatoshiLabs ships devices in tamper-evident packaging; the bootloader verifies firmware on first boot so that even a compromised supply chain device would be detectable before use.

- ### Applications and Use Cases
  - **Personal [[Self-Custody]] of [[Bitcoin]] and [[Ethereum]]**: Primary use case — individuals holding significant cryptocurrency balances use Trezor to eliminate exchange-custody and hot-wallet risk.
  - **[[Decentralised Finance]] (DeFi) Participation**: Via [[WalletConnect]] and MetaMask hardware-wallet mode, Trezor signs DeFi protocol transactions (lending, staking, swaps) without exposing keys to browser-based attack surfaces.
  - **[[Multi-Signature]] Schemes**: Trezor devices participate in m-of-n multisig configurations (e.g. 2-of-3) for institutional or high-security setups using [[Bitcoin Script]] or [[Ethereum]] smart-contract wallets.
  - **Password Manager**: Trezor can encrypt and decrypt a [[Password Manager]] database (via SLIP-0016) so that credentials are only accessible when the physical device is present.
  - **SSH Authentication and GPG Signing**: Trezor can serve as a hardware token for SSH key pairs and [[GPG]] code-signing, bridging blockchain key management to general [[Public Key Infrastructure]] use cases.
  - **[[NFT]] and Token Management**: Trezor Suite integrates with [[ERC-20]] and [[ERC-721]] standards, enabling token and [[NFT]] management without leaving keys on a hot device.
  - **Corporate Treasury**: Organisations holding crypto reserves use Trezor combined with [[Multi-Signature]] smart contracts and [[Shamir Secret Sharing]] to distribute custodial risk across multiple key holders and geographies.

- ### Relationships
  - partOf:: [[Hardware Wallet]]
  - partOf:: [[Self-Custody]]
  - hasPart:: [[Seed Phrase]]
  - hasPart:: [[Secure Element]]
  - hasPart:: [[PIN Protection]]
  - requires:: [[Private Key]]
  - requires:: [[BIP39]]
  - requires:: [[USB Interface]]
  - enables:: [[Self-Custody]]
  - enables:: [[Transaction Signing]]
  - enables:: [[Multi-Currency Support]]
  - enables:: [[Passphrase Encryption]]
  - dependsOn:: [[Key Derivation]]
  - dependsOn:: [[Elliptic Curve Cryptography]]
  - implements:: [[BIP32]]
  - implements:: [[BIP44]]
  - implements:: [[Open-Source Firmware]]
  - uses:: [[Shamir Secret Sharing]]
  - uses:: [[Hierarchical Deterministic Wallet]]
  - supports:: [[Bitcoin]]
  - supports:: [[Ethereum]]
  - supports:: [[Decentralised Finance]]
  - contrastsWith:: [[Ledger]]
  - contrastsWith:: [[Hot Wallet]]
  - contrastsWith:: [[Custodial Wallet]]
  - relatedTo:: [[Key Management]]
  - relatedTo:: [[Cryptographic Signing]]
  - relatedTo:: [[WalletConnect]]
  - bridges-to:: [[Trusted Execution Environment]]
  - bridges-to:: [[Supply Chain Security]]

- ### Standards and Context
  - **BIP32** — Hierarchical Deterministic Wallets; defines the master-seed-to-key-tree derivation that all modern hardware wallets including Trezor rely on.
  - **BIP39** — Mnemonic code for generating deterministic keys; defines the 12/24-word seed phrase standard that Trezor implements for backup and recovery.
  - **BIP44** — Multi-account hierarchy for deterministic wallets; defines the coin-type path structure (`m/44'/coin_type'/account'/change/address_index`).
  - **SLIP39 (Shamir's Secret-Sharing for Mnemonic Codes)** — SatoshiLabs Improvement Proposal extending BIP39 with Shamir-split backup, implemented on Trezor Model T.
  - **SLIP-0016** — Standard for encrypted key-value storage using Trezor as a hardware password manager.
  - **WebUSB / HID** — Browser-level and OS-level transport protocols used by Trezor Bridge and Trezor Suite to communicate with the device without requiring device drivers on modern systems.
  - **GPL v3 / CERN OHL** — Open-source licences governing Trezor firmware and hardware designs respectively; the openness distinguishes Trezor from closed-source competitors such as [[Ledger]].
  - **Czech Trade Inspection Authority / EU Consumer Electronics Regulation** — Trezor devices sold in the EU comply with CE marking and RoHS directives; no specific cryptocurrency hardware regulation currently governs the device category at EU level as of 2025.

- ### Comparison with Competitors
  - **vs [[Ledger]]**: Ledger uses a proprietary certified secure-element chip (ST33/CC EAL5+) and historically kept firmware closed-source; Trezor Model One uses a general-purpose MCU with fully open firmware. The trade-off is that Ledger's chip provides stronger tamper-resistance against physical attacks, while Trezor's open design enables independent security auditing of the entire codebase. Ledger's 2023 ConnectKit supply-chain compromise highlighted that open-source transparency can be a meaningful security advantage.
  - **vs Software / [[Hot Wallet]]**: Software wallets (MetaMask, Exodus) hold private keys in OS memory on internet-connected devices, creating persistent attack surfaces. Trezor eliminates this by ensuring the key is only accessible on a purpose-built offline device.
  - **vs [[Custodial Wallet]]**: Exchange-held wallets (Coinbase, Binance) retain custody of user keys; Trezor inverts this, making the user the sole keyholder and embodying the blockchain maxim "not your keys, not your coins."
  - **vs [[Paper Wallet]]**: Paper wallets are a form of [[Cold Storage]] but require digital import to spend funds, temporarily exposing keys. Trezor signs transactions without this exposure.
  - **vs [[Air-Gapped Signing]]**: Devices like Passport or Keystone use QR codes for fully air-gapped transaction signing, avoiding any USB connection. Trezor's USB/WebUSB model is more convenient but theoretically narrows the air gap.

- ### Security Considerations
  - **Physical Access Attacks**: Trezor has been subject to published physical extraction attacks (e.g. voltage glitching against Model One's STM32 chip) requiring device possession; the Trezor Model T's [[Secure Element]] for PIN verification mitigates some attack vectors.
  - **Evil-Maid / Supply Chain**: Tamper-evident packaging and firmware attestation on first boot are primary mitigations; users should verify the firmware hash on initial setup.
  - **[[Phishing]] and Fake Companion Apps**: The most common real-world attack; Trezor displays the destination address on its own screen, so users must verify the device display rather than relying on host-side software.
  - **Seed Phrase Storage**: The security of a Trezor wallet ultimately depends on physical security of the BIP39 seed phrase; metal backup solutions ([[Cryptosteel]], [[Bilodeau Plates]]) are recommended for durable offline storage.
  - **Passphrase as Second Factor**: The BIP39 passphrase creates a hidden wallet unrecoverable without both the seed and the passphrase; it provides protection even if the physical device and seed phrase are simultaneously compromised.

- ### Current Landscape (2026)
  - Trezor (SatoshiLabs) launched the Trezor Safe 7 flagship in October 2025 (shipping from 23 November 2025, $249/€249), its first wallet with Bluetooth Low Energy, Qi2 wireless charging, a 2.5" colour touchscreen and an anodised aluminium unibody.
  - The Safe 7 introduced a dual-secure-element, three-chip architecture: the TROPIC01 chip (built with sister company Tropic Square) alongside an NDA-free EAL6+ Infineon OPTIGA Trust M and an STMicro STM32U5 MCU, marketed as the first consumer hardware wallet with a fully transparent, auditable secure element.
  - It is positioned as the first quantum-ready hardware wallet, using post-quantum signatures (SLH-DSA-128 for device integrity, ML-DSA-44 for signing) to secure the boot process, firmware updates and device authentication.
  - On 3 June 2026 Trezor and Tropic Square disclosed a TROPIC01 vulnerability found by rival Ledger's Donjon team, who used a 1064 nm laser fault-injection attack on a decapsulated chip to bypass firmware signature verification; Tropic Square then found a further path affecting the MAC-and-Destroy PIN mechanism.
  - The flaw affects all production TROPIC01 chips in the field and cannot be fully patched by firmware; a hardened silicon revision is targeted for late 2026 with full technical details expected spring 2027, while disabling MAINTENANCE mode mitigates the primary entry point. Trezor maintains user funds are not at risk given the layered design and advises no user action.
  - Phishing off the back of a January 2024 third-party support-portal breach remains the live threat: roughly 66,000 support contacts were exposed, and in June 2025 attackers abused Trezor's contact form and auto-reply system to send convincing fake support emails, with a purported 470k-record "leads" database later touted for sale.
  - Open challenges as of 2026 include hardening open secure-element silicon against invasive physical attacks, sustaining supply of the quantum-ready and BLE-equipped Safe 7 amid geo-staggered availability, and countering seed-phrase phishing that increasingly leans on leaked contact data rather than device compromise.

- ### References
  - 1. Trezor / SatoshiLabs (2025). Meet Trezor Safe 7: the first quantum-ready hardware wallet with a next-gen Secure Element chip. https://trezor.io/blog/news/meet-trezor-safe-7-the-first-quantum-ready-hardware-wallet-with-a-next-gen-secure-element-chip
  - 2. CryptoSlate (2026). Trezor Safe 7 Review 2026: Open Secure Element, Real Price. https://cryptoslate.com/crypto-wallets/trezor-safe-7-review/
  - 3. Trezor (2026). Trezor response: TROPIC01 chip disclosure (no impact to your funds). https://trezor.io/blog/news/Trezor-response-TROPIC01-chip-disclosure-no-impact-to-your-funds
  - 4. The Block (2026). Ledger researchers find flaw in chip used by Trezor Safe 7; Trezor says user funds safe. https://www.theblock.co/news/business/2026-06-03-ledger-researchers-find-flaw-in-chip-used-by-trezor-safe-7-trezor-says-user-funds-safe-403492
  - 5. BleepingComputer (2025). Trezor's support platform abused in crypto theft phishing attacks. https://www.bleepingcomputer.com/news/security/trezors-support-platform-abused-in-crypto-theft-phishing-attacks/

- ### Provenance
  - sources:: SatoshiLabs documentation; BIP32/BIP39/BIP44 specification texts; SLIP39 specification; published academic and security research on hardware wallet attack surfaces
  - updated:: 2026-06-13
