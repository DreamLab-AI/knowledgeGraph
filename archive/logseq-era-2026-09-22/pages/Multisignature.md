public:: true

# Multisignature
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multisignature",
  "@type": "Page",
  "vc:slug": "multisignature",
  "title": "Multisignature",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multisignature",
  "@type": "Class",
  "label": "Multisignature",
  "definition": "Multisignature (multisig) is a cryptographic access-control scheme in which a transaction or operation requires a quorum of M independent signatures drawn from a declared set of N authorised keyholders before it can be validated and executed. Applied to cryptocurrency wallets, smart contracts, and DAO treasuries, the M-of-N threshold eliminates single points of failure in key custody by distributing signing authority across multiple parties, devices, or organisations. More advanced variants — threshold signature schemes (TSS) and multi-party computation (MPC) — achieve the same security guarantee without assembling the full key set on-chain, reducing transaction cost and improving privacy.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-signature",
      "label": "Cryptographic Signature"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:multisig",
      "label": "Multisig"
    },
    {
      "@id": "urn:ngm:class:m-of-n-signature",
      "label": "M-of-N Signature"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signatures",
        "label": "Digital Signatures"
      },
      {
        "@id": "urn:ngm:class:threshold-cryptography",
        "label": "Threshold Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      },
      {
        "@id": "urn:ngm:class:schnorr-signature",
        "label": "Schnorr Signature"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-signature-wallet",
        "label": "Multi-Signature Wallet"
      },
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "DAO Treasury Management"
      },
      {
        "@id": "urn:ngm:class:institutional-custody",
        "label": "Institutional Custody"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:quorum-threshold",
        "label": "Quorum Threshold"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:distributed-trust",
        "label": "Distributed Trust"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:multi-sig-governance",
        "label": "Multi Sig Governance"
      },
      {
        "@id": "urn:ngm:class:multi-party-computation",
        "label": "Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:account-abstraction",
        "label": "Account Abstraction"
      },
      {
        "@id": "urn:ngm:class:hardware-security-module",
        "label": "Hardware Security Module"
      },
      {
        "@id": "urn:ngm:class:secret-sharing",
        "label": "Secret Sharing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:single-key-wallet",
        "label": "Single-Key Wallet"
      },
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
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
  - [[Multisignature]] (multisig) is a cryptographic access-control mechanism that requires a minimum quorum (M) of keyholders out of a defined set (N) to independently co-sign an authorisation before it is valid and executable. In the context of [[Blockchain]] and cryptocurrency, multisig policies are enforced natively in [[Bitcoin Script]] through the OP_CHECKMULTISIG opcode and through [[Smart Contract]] logic on EVM-compatible chains. The scheme eliminates the single-key vulnerability — loss or compromise of one [[Private Key]] does not forfeit control — and enables governance structures in which funds or protocol parameters can only be changed with collective consent, as formalised by [[Multi Sig Governance]]. Advanced variants including [[Threshold Cryptography]] and [[Multi-Party Computation]] achieve equivalent security without exposing individual keyshares on-chain.

- ### Overview
  - Multisignature predates blockchain, with roots in Shamir's Secret Sharing (1979) and threshold signature research throughout the 1980s and 1990s in academic cryptography.
  - Bitcoin introduced native multisig support through OP_CHECKMULTISIG from early versions, with the P2SH address format (BIP 16, 2012) allowing multisig policies to be encoded in standard-looking addresses.
  - The core value proposition is resilience: a 2-of-3 configuration can withstand the loss of any single key while an attacker must compromise any two of three keyholders to gain unauthorised access.
  - Multisig is widely considered the baseline for institutional-grade [[Self-Custody]] and [[DAO Treasury Management]], underpinning billions of dollars in on-chain assets.
  - The concept generalises beyond cryptocurrency to any context where a cryptographically enforced quorum is needed: code-signing, certificate issuance, and protocol upgrades.

- ### Key Components
  - **M-of-N threshold**: the core parameter pair — M is the minimum number of signatures required, N is the total number of authorised signers. Common configurations include 2-of-3 (personal backup), 3-of-5 (team treasury), and 4-of-7 (DAO councils).
  - **Signing keys**: each participant holds an independent [[Private Key]] generated and stored separately. Security relies on the independence and geographic or custodial distribution of these keys.
  - **Locking script / redeem script**: in [[Bitcoin Script]], the multisig policy is encoded in a P2SH or P2WSH redeem script listing the N public keys and the threshold M. Spending requires providing M valid [[Digital Signatures]] over the transaction hash.
  - **[[Smart Contract]] enforcement**: on EVM chains, multisig logic lives in contract code — exemplified by Gnosis Safe — where the contract checks collected approvals before executing any call.
  - **[[Quorum Threshold]]**: the abstract formalisation of M-of-N as a discrete voting rule, shared with [[Decentralised Governance]] and consensus research.
  - **[[Schnorr Signature]] aggregation (MuSig2)**: an interactive protocol allowing N participants to collaboratively produce a single Schnorr signature that appears identical to a single-signer signature on-chain, introduced with [[Bitcoin]] Taproot (BIP 340–342, 2021). This eliminates the on-chain overhead of classical multisig and enhances privacy.
  - **[[Threshold Cryptography]] / TSS**: threshold signature schemes distribute key generation and signing such that the private key is never assembled in a single location. The resulting signature is standard and indistinguishable from a single-key signature.
  - **[[Multi-Party Computation]] (MPC)**: a broader cryptographic framework enabling multiple parties to jointly compute a function (including signing) without revealing their inputs. MPC-based custody increasingly competes with on-chain multisig for institutional adoption.
  - **[[Hardware Security Module]] (HSM)**: tamper-resistant hardware commonly used to store individual signing keys in enterprise multisig deployments, preventing key extraction.

- ### Mechanisms
  - **Bitcoin OP_CHECKMULTISIG**: the canonical on-chain multisig. A scriptPubKey or P2SH redeem script encodes `M <pubkey1> ... <pubkeyN> N OP_CHECKMULTISIG`. The spending script must supply M valid signatures. Each signature adds roughly 72 bytes, scaling transaction size linearly with M.
  - **P2SH and P2WSH**: Pay-to-Script-Hash and its SegWit counterpart wrap the redeem script in a hash, producing a standard-looking address. The redeem script (and hence the full public key list) is revealed only when spending, improving address privacy.
  - **MuSig2 (BIP 327)**: a two-round interactive aggregated Schnorr protocol. Participants exchange nonces, aggregate public keys into a single key, and collaboratively produce a single signature. Compatible with Bitcoin Taproot key-path spending — the resulting signature is a standard 64-byte Schnorr signature.
  - **Gnosis Safe (Safe{Wallet})**: the dominant Ethereum multisig smart contract. Owners submit off-chain signed approvals; the contract collects them and executes the bundled call when the threshold is reached. Supports arbitrary calldata, delegate calls, and module extensions.
  - **ERC-4337 Account Abstraction**: Ethereum's account abstraction standard enables multisig (and more complex policies) at the account level without requiring changes to the consensus layer. [[Account Abstraction]] wallets can enforce M-of-N approval, social recovery, and spending limits natively.
  - **Off-chain signing with on-chain settlement**: institutional platforms (Fireblocks, BitGo, Anchorage) collect signatures off-chain through policy engines and broadcast the completed transaction, reducing latency and enabling rich policy rules beyond raw M-of-N.

- ### Applications
  - **Personal cryptocurrency custody**: 2-of-3 configurations where keys are distributed across a hardware wallet, a hot device, and an offline backup. Loss of any single key is non-fatal.
  - **[[DAO Treasury Management]]**: DAOs such as Uniswap, Aave, and Gitcoin use Gnosis Safe 3-of-5 or 5-of-9 multisig treasuries to manage protocol funds, requiring council consensus for any expenditure.
  - **[[Multi Sig Governance]]**: multisig is applied not just to fund custody but to protocol parameter upgrades, contract ownership transfers, and oracle configuration, enforcing collective consent as a governance primitive.
  - **Exchange and custodian cold wallets**: cryptocurrency exchanges distribute cold-storage signing keys across geographically separated HSMs and staff, typically with 3-of-5 or higher thresholds, to prevent insider theft and external compromise.
  - **Cross-chain bridge security**: bridge contracts on source and destination chains are often controlled by multisig councils. Weaknesses in bridge multisig configuration have resulted in major exploits (e.g., Ronin bridge, 2022), highlighting the operational security requirements.
  - **[[Institutional Custody]]**: regulated custodians use on-chain multisig or MPC-backed custody with policy engines enforcing spending limits, destination whitelists, and time-locks for institutional clients including hedge funds and ETF issuers.
  - **Code-signing and software release**: multisig principles apply to GPG-signed software releases where multiple maintainers must sign a release before it is published, preventing a single compromised maintainer from distributing malicious code.
  - **Certificate authority operations**: HSM-backed M-of-N ceremony processes for root CA key generation and use in [[Public Key Infrastructure]] follow multisig-equivalent procedures enforced by policy and physical controls.
  - **Smart contract upgrade governance**: proxy contract ownership is often delegated to a multisig, requiring collective approval before an implementation upgrade is authorised — a critical pattern for DeFi protocol security.

- ### Relationships
  - uses:: [[Digital Signatures]]
  - uses:: [[Threshold Cryptography]]
  - uses:: [[Key Management]]
  - uses:: [[Elliptic Curve Cryptography]]
  - uses:: [[Schnorr Signature]]
  - uses:: [[Hash Function]]
  - enables:: [[Multi-Signature Wallet]]
  - enables:: [[Self-Custody]]
  - enables:: [[DAO Treasury Management]]
  - enables:: [[Institutional Custody]]
  - requires:: [[Private Key]]
  - requires:: [[Public Key Infrastructure]]
  - requires:: [[Quorum Threshold]]
  - implements:: [[Access Control]]
  - implements:: [[Distributed Trust]]
  - dependsOn:: [[Bitcoin Script]]
  - dependsOn:: [[Smart Contract]]
  - relatedTo:: [[Multi Sig Governance]]
  - relatedTo:: [[Multi-Party Computation]]
  - relatedTo:: [[Account Abstraction]]
  - relatedTo:: [[Hardware Security Module]]
  - relatedTo:: [[Secret Sharing]]
  - contrastsWith:: [[Single-Key Wallet]]
  - contrastsWith:: [[Custodial Wallet]]
  - bridges-to:: [[Decentralised Governance]]
  - bridges-to:: [[Zero-Knowledge Proof]]

- ### Standards and Context
  - **BIP 11** (M-of-N Standard Transactions, 2011): the original Bitcoin Improvement Proposal formalising OP_CHECKMULTISIG transaction patterns.
  - **BIP 16** (Pay to Script Hash, 2012): introduced P2SH addresses encoding multisig policies behind a hash, enabling multisig without revealing the policy until spend time.
  - **BIP 141/143** (Segregated Witness, 2017): P2WSH (Pay-to-Witness-Script-Hash) extended multisig into SegWit transactions, reducing fees for multisig inputs.
  - **BIP 340** (Schnorr Signatures), **BIP 341** (Taproot), **BIP 342** (Tapscript): the 2021 Bitcoin Taproot upgrade introduced Schnorr signatures enabling [[Schnorr Signature]] aggregation. MuSig2 (BIP 327) formalised the interactive aggregation protocol.
  - **ERC-4337** (Account Abstraction, Ethereum, 2021–2023): enables smart contract accounts with custom validation logic including multisig, without consensus-layer changes.
  - **Gnosis Safe Smart Contract Audit Standards**: Safe{Wallet} contracts have undergone multiple formal security audits and are the reference implementation for EVM multisig.
  - **NIST SP 800-57** (Key Management Guidelines): while not multisig-specific, NIST guidance on key management, lifecycle, and distribution informs enterprise multisig operational practice.
  - **FIPS 140-2/3**: the standard governing cryptographic modules (HSMs) used to store multisig participant keys in regulated environments.
  - Regulatory context: custodians regulated under frameworks such as the US OCC guidance on digital asset custody or EU MiCA requirements must demonstrate key management controls, for which multisig or MPC custody serves as evidence.

- ### Security Considerations
  - Multisig does not eliminate risk — it redistributes it. Poor key distribution (all keys on the same device or cloud provider) negates the M-of-N guarantee.
  - Social engineering attacks targeting multiple keyholders simultaneously (spear phishing, SIM swapping, insider threats) can circumvent multisig if the keyholder set is small or insufficiently distributed.
  - The threshold must balance security (higher M) with operational availability (lower M to avoid loss of access if signers are unavailable). 2-of-3 and 3-of-5 are the most common practical configurations.
  - On-chain multisig exposes the full public key set when funds are spent, creating linkability. MuSig2 Taproot and MPC approaches address this by producing single-key-indistinguishable signatures.
  - Smart contract multisig introduces additional attack surface: contract bugs, signature replay, malicious calldata, and governance manipulation. Formal verification and audit are essential.
  - Time-lock extensions (CLTV/CSV in Bitcoin, TimelockController in OpenZeppelin) are frequently combined with multisig to add a delay period during which a disputed transaction can be vetoed.

- ### Provenance
  - sources:: Bitcoin BIP 11, BIP 16, BIP 327, BIP 340-342; Ethereum ERC-4337; Gnosis Safe documentation; NIST SP 800-57; academic literature on threshold signatures and MPC (Shamir 1979, Boneh et al.)
  - updated:: 2026-06-13
