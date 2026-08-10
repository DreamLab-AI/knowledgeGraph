public:: true

# Bitcoin Improvement Proposals
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-improvement-proposals",
  "@type": "Page",
  "vc:slug": "bitcoin-improvement-proposals",
  "title": "Bitcoin Improvement Proposals",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals",
  "@type": "Class",
  "label": "Bitcoin Improvement Proposals",
  "definition": "Bitcoin Improvement Proposals (BIPs) are the formal design documents through which changes, enhancements, and new features are proposed and ratified for the Bitcoin protocol and its broader ecosystem. First introduced by Amir Taaki in 2011, modelled on Python's PEP and Python Enhancement Proposal process, BIPs serve as the primary coordination mechanism for a decentralised developer community that lacks any central authority. Each BIP progresses through a defined lifecycle — draft, proposed, final, and optionally superseded — and must achieve rough consensus among economic nodes, miners, and users before activation. BIPs are organised into three tracks: Standards Track (protocol-level changes requiring network-wide adoption), Informational (guidelines and best practices), and Process (procedural rules governing the BIP process itself).",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-governance",
      "label": "Blockchain Governance"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:bip-32",
        "label": "BIP-32 HD Wallets"
      },
      {
        "@id": "urn:ngm:class:bip-141",
        "label": "BIP-141 SegWit"
      },
      {
        "@id": "urn:ngm:class:bip-340",
        "label": "BIP-340"
      },
      {
        "@id": "urn:ngm:class:bip-341",
        "label": "BIP-341"
      },
      {
        "@id": "urn:ngm:class:bip-173",
        "label": "BIP-173 Bech32"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:open-source-governance",
        "label": "Open Source Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:rough-consensus",
        "label": "Rough Consensus"
      },
      {
        "@id": "urn:ngm:class:peer-review",
        "label": "Peer Review"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview",
        "label": "Bitcoin Technical Overview"
      },
      {
        "@id": "urn:ngm:class:soft-fork",
        "label": "Soft Fork"
      },
      {
        "@id": "urn:ngm:class:hard-fork",
        "label": "Hard Fork"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrades",
        "label": "Protocol Upgrade"
      },
      {
        "@id": "urn:ngm:class:schnorr-signatures",
        "label": "Schnorr Signatures"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-core",
        "label": "Bitcoin Core"
      },
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
        "label": "Bitcoin Network"
      },
      {
        "@id": "urn:ngm:class:consensus-rule",
        "label": "Consensus Rule"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:decentralised-governance",
        "label": "Decentralised Governance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:git-hub",
        "label": "GitHub"
      },
      {
        "@id": "urn:ngm:class:user-activated-soft-fork",
        "label": "User-Activated Soft Fork"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:blockchain-protocol",
        "label": "Blockchain Protocol"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ethereum-improvement-proposal",
        "label": "Ethereum Improvement Proposals"
      },
      {
        "@id": "urn:ngm:class:ietf-rfc",
        "label": "IETF RFC"
      },
      {
        "@id": "urn:ngm:class:w3c-recommendation",
        "label": "W3C Recommendation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems-governance",
        "label": "Distributed Systems Governance"
      },
      {
        "@id": "urn:ngm:class:cryptographic-protocol",
        "label": "Cryptographic Protocol"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:hd-wallet",
        "label": "HD Wallet"
      },
      {
        "@id": "urn:ngm:class:segregated-witness",
        "label": "Segregated Witness"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:bips",
      "label": "BIPs"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Bitcoin Improvement Proposals (BIPs) are the formal design and specification documents through which changes, enhancements, and new features are proposed, debated, and ratified for the [[Bitcoin Network]] and its surrounding ecosystem. Modelled on the [[Python Enhancement Proposal]] (PEP) process, they were introduced in 2011 as the primary coordination mechanism for a globally distributed developer community operating without any central authority. Governance occurs through [[Rough Consensus]] — a change is adopted only when the economic majority of nodes, users, and miners run software that enforces it, making BIPs the canonical instrument of [[Blockchain Governance]] for Bitcoin.

- ### Overview
  - BIPs were created out of necessity: the [[Bitcoin Network]] is permissionless and global, meaning there is no CEO, board, or standards body that can unilaterally push a protocol change. Without a transparent, public forum for technical debate, forks and incompatibilities would proliferate unchecked. The BIP process establishes a structured path from informal idea to ratified network rule.
  - The canonical BIP repository is hosted on [[GitHub]] and is maintained by BIP editors who check format compliance but do not endorse technical merit. This separation of editorial and technical authority reflects the process's commitment to meritocracy over gatekeeping.
  - BIPs matter far beyond Bitcoin. They have become a model for [[Open Source Governance]] in high-stakes, adversarial environments, influencing similar processes in [[Ethereum Improvement Proposals]], the [[Lightning Network]] specification process (BOLTs), and other blockchain ecosystems.

- ### Key Components
  - #### BIP Tracks
    - **Standards Track** — Proposals that change the [[Bitcoin Network]] protocol, transaction validation, or block structure. Require broad network adoption and are the most consequential. Examples: [[BIP-141 SegWit]], [[BIP-340 Schnorr Signatures]], [[BIP-341 Taproot]].
    - **Informational** — Guidelines and best practices that do not mandate network-wide adoption. Examples: [[BIP-32 HD Wallets]] defining hierarchical deterministic key derivation.
    - **Process** — Rules governing the BIP process itself, the role of BIP editors, and procedural norms. Example: BIP-0001 and BIP-0002.
  - #### BIP Lifecycle States
    - **Draft** — Initial submission; open for community feedback and revision.
    - **Proposed** — Author believes the BIP is ready; seeking broader review and implementation.
    - **Final** — Accepted and deployed on the mainnet; considered part of the standard.
    - **Superseded** — Replaced by a newer BIP that addresses the same scope.
    - **Withdrawn / Rejected** — Author withdrew, or the community reached negative consensus.
  - #### Activation Mechanisms
    - **BIP-9 (Version Bits)** — Miners signal readiness by setting version bits in block headers. A threshold (typically 95%) of blocks in a retargeting window triggers lock-in, then activation. Used for [[Segregated Witness]].
    - **BIP-8 (Version Bits with Guaranteed Activation)** — Extends BIP-9 with a mandatory flag-day activation (`lockinontimeout=true`) to prevent indefinite miner veto. Used in the Taproot activation debate.
    - **User-Activated Soft Fork (UASF)** — Economic nodes signal activation directly, bypassing miner signalling. BIP-148 demonstrated this path during the [[Segregated Witness]] controversy of 2017, establishing that [[Consensus Rule]] enforcement ultimately lies with node operators, not miners.
  - #### BIP Structure
    - Each BIP document includes a preamble (BIP number, title, author, status, type, created date), abstract, motivation, specification, rationale, backward compatibility notes, and test vectors where applicable. This standardised structure supports [[Peer Review]] by enabling rapid orientation.

- ### Landmark BIPs
  - **BIP-0001 / BIP-0002** — Define the BIP process itself; authored by Amir Taaki and Luke Dashjr respectively. The foundational meta-documents.
  - **BIP-11 (M-of-N Multisig)** — Enabled multi-signature transaction output scripts; foundational to [[Multisignature Wallets]] and later [[Smart Contracts]] on Bitcoin.
  - **BIP-32 ([[HD Wallet]])** — Hierarchical Deterministic key derivation allowing the entire key tree to be derived from a single seed. Underpins modern wallet software and [[Hardware Wallet]] standards.
  - **BIP-39 (Mnemonic Seed Phrases)** — Encoding HD wallet seeds as human-readable word lists; now the de facto standard for [[Wallet Recovery]].
  - **BIP-141 ([[Segregated Witness]])** — Separated transaction signatures from transaction data, fixing transaction malleability and enabling the [[Lightning Network]] as a second-layer [[Payment Channel Network]].
  - **BIP-173 ([[Bech32]] addresses)** — Native SegWit address format; improved error detection and QR-code efficiency.
  - **BIP-340 ([[Schnorr Signatures]])** — Introduced linear signature aggregation to Bitcoin, improving privacy, efficiency, and [[Multi-Party Computation]] compatibility.
  - **BIP-341 ([[Taproot]])** — Merged Pay-to-Taproot (P2TR) output type, enabling Merkle-tree-structured [[Smart Contract]] commitments indistinguishable from simple payments when conditions are met cooperatively.
  - **BIP-342 (Tapscript)** — Updated [[Script]] validation rules for Taproot inputs, enabling a more modular and extensible scripting framework.
  - **BIP-370 (PSBT v2)** — Extended [[Partially Signed Bitcoin Transactions]] for complex multi-party signing workflows used in [[Hardware Wallet]] and CoinJoin contexts.

- ### Applications / Use Cases
  - **Protocol Upgrades** — Every non-trivial change to Bitcoin's [[Consensus Rule]] set (e.g., block size, signature types, script opcodes) requires a Standards Track BIP with community debate and documented activation parameters.
  - **Wallet Interoperability** — BIP-32, BIP-39, and BIP-44 together define the derivation paths and seed encoding that allow any [[HD Wallet]] implementation to recover funds from any other. Without these BIPs, wallet portability would not exist.
  - **Layer-2 Enablement** — [[BIP-141 SegWit]] removed the transaction malleability obstacle that blocked channel-based protocols, directly enabling the [[Lightning Network]] and all its downstream applications.
  - **Privacy Enhancements** — BIP-340 and BIP-341 (Taproot) make complex multi-party transactions indistinguishable from simple payments on-chain, improving [[Privacy-Preserving Computation]] properties of the base layer.
  - **Hardware Security** — PSBT-related BIPs (BIP-174, BIP-370) define standard interfaces between software wallets and [[Hardware Wallet]] devices, enabling secure [[Air-Gapped Signing]] workflows.
  - **Cross-Client Compatibility** — Informational BIPs (e.g., URI schemes via BIP-21) ensure that wallets, explorers, and payment processors can interoperate across different [[Bitcoin Core]] implementations.
  - **Governance Research** — The BIP process serves as a real-world case study for researchers in [[Distributed Systems Governance]], [[Open Source Governance]], and [[Mechanism Design]], demonstrating how rough consensus functions under adversarial conditions without formal authority.

- ### Relationships
  - hasPart:: [[BIP-32 HD Wallets]]
  - hasPart:: [[BIP-141 SegWit]]
  - hasPart:: [[BIP-340 Schnorr Signatures]]
  - hasPart:: [[BIP-341 Taproot]]
  - hasPart:: [[BIP-173 Bech32]]
  - partOf:: [[Open Source Governance]]
  - requires:: [[Rough Consensus]]
  - requires:: [[Peer Review]]
  - enables:: [[Soft Fork]]
  - enables:: [[Hard Fork]]
  - enables:: [[Protocol Upgrade]]
  - enables:: [[Schnorr Signatures]]
  - enables:: [[Taproot]]
  - enables:: [[Bitcoin Technical Overview]]
  - dependsOn:: [[Bitcoin Core]]
  - dependsOn:: [[Bitcoin Network]]
  - dependsOn:: [[Consensus Rule]]
  - implements:: [[Decentralised Governance]]
  - implements:: [[Standards Process]]
  - uses:: [[GitHub]]
  - uses:: [[Miner Signalling]]
  - uses:: [[User-Activated Soft Fork]]
  - standardizedBy:: [[Blockchain Protocol]]
  - contrastsWith:: [[Ethereum Improvement Proposals]]
  - contrastsWith:: [[IETF RFC]]
  - contrastsWith:: [[W3C Recommendation]]
  - bridges-to:: [[Distributed Systems Governance]]
  - bridges-to:: [[Cryptographic Protocol]]
  - relatedTo:: [[Lightning Network]]
  - relatedTo:: [[Digital Signature]]
  - relatedTo:: [[HD Wallet]]
  - relatedTo:: [[Segregated Witness]]

- ### Standards & Context
  - **Comparison with Traditional Standards Bodies** — Unlike the [[IETF RFC]] process or [[W3C Recommendation]] track, BIPs carry no institutional authority. There are no membership fees, formal voting, or binding decisions. A BIP achieves "Final" status when the network has adopted it, not when an editor stamps it. This makes the process more democratic but also more unpredictable.
  - **Comparison with [[Ethereum Improvement Proposals]]** — EIPs share the same document-centric lineage but differ in governance: Ethereum has a Core Devs call with a more visible decision-making group and has executed hard forks more frequently. Bitcoin's process is notably more conservative, reflecting its role as a monetary settlement layer where stability is paramount.
  - **IETF Rough Consensus** — The phrase "rough consensus and running code" from [[IETF RFC]] 7282 (Russ Housley) is often cited in BIP discussions. Bitcoin's process adapted this to an adversarial, permissionless context where "running code" means nodes actually enforcing new rules on mainnet.
  - **Relationship to BOLTs** — The [[Lightning Network]] specification uses a separate process (Basis of Lightning Technology, BOLTs) that is parallel to but compatible with BIPs, since Lightning operates as a Layer-2 protocol that does not require on-chain consensus for its own upgrades.
  - **Security and Conservatism** — Bitcoin's monetary role demands extreme conservatism. BIPs proposing consensus changes undergo multi-year review periods, formal verification efforts, and extensive testnet deployment before mainnet activation, reflecting the asymmetric cost of errors in a $1+ trillion asset network with no rollback mechanism.

- ### Current Landscape (2026)
  - The governance process itself was overhauled: BIP 3 ("Updated BIP Process", authored by Murch, assigned 9 January 2025 and now Deployed) replaced BIP 2, collapsing the old nine statuses into four (Draft, Complete, Deployed, Closed), abolishing the comment system and removing the three-year staleness closure rule.
  - Covenant proposals dominate the standards-track debate, centred on OP_CHECKTEMPLATEVERIFY (CTV, BIP 119) and OP_CAT (BIP 347); OP_CAT reached "Complete" specification status on 1 March 2026, while a CTV activation client published a Speedy Trial with a signalling window from 30 March 2026 to 30 March 2027 and a 90% miner threshold.
  - That CTV activation attempt has stalled — miner signalling stood at 0% as of late May 2026 despite roughly 66 developer endorsements — illustrating that no soft fork has activated since Taproot in November 2021 and that consensus, not specification, remains the binding constraint.
  - A cluster of data-restriction proposals emerged after Bitcoin Core v30 lifted the OP_RETURN size limit: the pseudonymous "Reduced Data Temporary Softfork" (published October 2025, later assigned BIP 110, with Luke Dashjr credited on the original draft) proposes a one-year temporary soft fork capping OP_RETURN at 83 bytes, with a mandatory-signalling lock-in phase scheduled for around August 2026.
  - Quantum resistance became a live workstream: BIP 360 (Pay-to-Merkle-Root / P2QRH, a Taproot output with the key-path spend removed) was merged on 11 February 2026, and the companion BIP 361 ("Post Quantum Migration and Legacy Signature Sunset", published 14 April 2026) controversially proposes eventually sunsetting spends from quantum-vulnerable outputs holding an estimated 6.5–6.9 million BTC.
  - Housekeeping progressed where consensus is broader: the Consensus Cleanup soft fork was drafted, merged as BIP 54 in 2025 with an implementation and test vectors, and forbids problematic constructs such as 64-byte transactions (BIP 53), addressing long-known attack vectors.
  - Key players and venues include Bitcoin Core and Bitcoin Knots maintainers, the bitcoindev mailing list and Delving Bitcoin forum, Bitcoin Inquisition's signet for testing, Jeremy Rubin (CTV), Ethan Heilman and Armin Sabouri (OP_CAT), and Hunter Beast, Ethan Heilman and Isabel Foxen Duke (BIP 360); Anthony Towns' 2025 "Bitcoin Forking Guide" codified a four-stage community-consensus path.
  - The central open challenge as of 2026 is activation legitimacy: whether Speedy Trial-style miner signalling is appropriate for proposals lacking overwhelming consensus, amid a growing institutional camp arguing Bitcoin's consensus rules should be treated as effectively immutable.

- ### References
  - 1. Bitcoin Optech (2025). Newsletter #385: 2025 Year-in-Review Special. https://bitcoinops.org/en/newsletters/2025/12/19/
  - 2. Spark (2026). Bitcoin Covenant Activation: Navigating the Path Forward After Years of Debate. https://www.spark.money/research/bitcoin-covenant-activation-path-forward
  - 3. Murch (2025). BIP 3: Updated BIP Process. https://bips.dev/3/
  - 4. crypto.news (2026). Bitcoin is going quantum-proof: Inside BIP-360 and the migration. https://crypto.news/bitcoin-is-going-quantum-proof-inside-bip-360-and-the-migration/
  - 5. Bitfinex (2026). BIP-110 and Bitcoin's High Bar for Consensus Change. https://blog.bitfinex.com/industry-news/bip-110-and-bitcoins-high-bar-for-consensus-change/
  - 6. Amina Group (2026). Bitcoin Fork August 2026: BIP-110, eCash, Covenants and the Quantum Clock. https://aminagroup.com/research/bitcoin-fork-august-2026-bip-110-ecash-covenants-and-the-quantum-clock/

- ### Provenance
  - sources:: Bitcoin BIP repository (github.com/bitcoin/bips), Bitcoin Developer Documentation, BIP-0001 (Amir Taaki), BIP-0002 (Luke Dashjr), academic literature on blockchain governance
  - updated:: 2026-06-13
