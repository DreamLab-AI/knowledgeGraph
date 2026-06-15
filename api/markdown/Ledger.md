public:: true

# Ledger
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9664427c2014914631cc5f96c9a529974bc1c39804f6c3ec680ce2a261adcb1",
  "@type": "Page",
  "vc:slug": "ledger",
  "title": "Ledger",
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
      "vc:value": "Ledger"
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
  "@id": "urn:ngm:class:ledger",
  "@type": "Class",
  "label": "Ledger",
  "definition": "A ledger is a structured, authoritative record of financial transactions or state changes, historically maintained as a physical or centralised book of accounts and now realised as a distributed, cryptographically secured data structure in blockchain systems. In the distributed-ledger paradigm, every participating node holds a replica of the same append-only log, with consensus mechanisms ensuring that all copies remain consistent and tamper-evident. The concept spans traditional double-entry bookkeeping, centralised database ledgers (as in banking core systems), and fully decentralised [[Distributed Ledger Technology]] implementations such as [[Bitcoin]] and [[Ethereum]]. Ledger (the company, Ledger SAS) is a notable specific instantiation of hardware-wallet technology designed to protect the cryptographic keys that authorise writes to a blockchain ledger.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-ledger-technology",
      "label": "Distributed Ledger Technology"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:account-ledger",
      "label": "Account Ledger"
    },
    {
      "@id": "urn:ngm:class:general-ledger",
      "label": "General Ledger"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction-record",
        "label": "Transaction Record"
      },
      {
        "@id": "urn:ngm:class:merkle-tree",
        "label": "Merkle Tree"
      },
      {
        "@id": "urn:ngm:class:block",
        "label": "Block"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash",
        "label": "Cryptographic Hash"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-custody",
        "label": "Self-Custody"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:double-entry-bookkeeping",
        "label": "Double-Entry Bookkeeping"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cold-storage",
        "label": "Cold Storage"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-database",
        "label": "Centralised Database"
      },
      {
        "@id": "urn:ngm:class:custodial-wallet",
        "label": "Custodial Wallet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:supply-chain-traceability",
        "label": "Supply Chain Traceability"
      },
      {
        "@id": "urn:ngm:class:data-provenance",
        "label": "Data Provenance"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:account-model",
        "label": "Account Model"
      }
    ]
  },
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ledger:fe14010b4fe8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c9664427c2014914631cc5f96c9a529974bc1c39804f6c3ec680ce2a261adcb1"
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
  - A ledger is the fundamental record-keeping artefact of any financial or transactional system — a structured, append-oriented log of debits, credits, and state transitions that provides an authoritative account of ownership and value flow. In classical accounting it is the [[General Ledger]] that aggregates journal entries via [[Double-Entry Bookkeeping]]. In the blockchain era, the ledger concept has been radicalised: rather than residing in a single institution's database, it is replicated across a [[Peer-to-Peer Network]] of nodes whose collective agreement on order and validity is enforced by a [[Consensus Mechanism]], yielding a tamper-evident, censorship-resistant [[Distributed Ledger Technology]] that eliminates the need for a central clearing authority.

- ### Overview
  - The ledger is arguably the oldest information technology still in active use, tracing back to cuneiform accounting tablets of ancient Mesopotamia. Every banking system, stock exchange, and public registry ultimately reduces to a ledger — an ordered sequence of accepted writes whose cumulative state determines who owns what.
  - [[Blockchain]] extends the ledger concept with three properties absent from traditional databases:
    - **Append-only immutability** — accepted entries are secured by [[Cryptographic Hash]] chaining so that retroactive alteration breaks the hash chain and is detectable by any participant.
    - **Decentralised replication** — every full node holds a complete copy; no single party can selectively withhold or alter history.
    - **Permissionless write access** — in public chains, anyone can submit a transaction; validity is determined by protocol rules rather than institutional gatekeeping.
  - The specific company **Ledger SAS** (founded 2014, Paris) manufactures hardware security modules marketed as hardware wallets — physical devices containing a secure element chip that stores [[Private Key]] material and signs transactions without ever exposing the key to the host computer. This is a hardware product designed to protect access to a blockchain ledger, but should not be conflated with the ledger concept itself.

- ### Key Components
  - **Transaction Record** — the atomic unit; records sender, receiver, amount/asset, timestamp, and [[Digital Signature]] authorising the transfer. In Bitcoin these are [[UTXO]]-based; in Ethereum they follow the [[Account Model]].
  - **Block** — a batched, ordered set of validated transaction records, linked to its predecessor via a hash pointer, forming the [[Blockchain]] chain structure.
  - **[[Merkle Tree]]** — the data structure used within each block to hash-summarise all transactions, enabling efficient proof of inclusion (Simplified Payment Verification) without downloading the full ledger.
  - **[[Consensus Mechanism]]** — the protocol (Proof-of-Work, Proof-of-Stake, PBFT, etc.) that achieves agreement among nodes on the canonical order of entries, preventing double-spend.
  - **State Database** — derived from replaying the ledger; represents current balances or smart-contract storage. Ethereum maintains a global state trie; Bitcoin computes the UTXO set.
  - **[[Public-Key Cryptography]]** — every account or address is a public key; ownership is proven by possession of the corresponding [[Private Key]] and the ability to produce a valid [[Digital Signature]].

- ### Mechanisms
  - **Double-Entry Bookkeeping Implementation** — blockchain ledgers implicitly implement [[Double-Entry Bookkeeping]]: every debit from one account is a credit to another; the sum of all UTXOs or account balances is conserved (minus fees destroyed or redistributed).
  - **Append-Only Log Semantics** — entries are never mutated or deleted; history is permanent. This contrasts sharply with a [[Centralised Database]] where rows may be updated or rolled back by an administrator.
  - **Fork Resolution** — competing chains (forks) arise when two miners find valid blocks simultaneously; the protocol's longest-chain or heaviest-chain rule resolves ambiguity deterministically.
  - **Finalisation** — in Proof-of-Stake systems (e.g. post-Merge Ethereum), economic finality is achieved when a supermajority of validators have attested to a checkpoint; reversal would require slashing a third of staked value.
  - **Sharding and Layer-2** — to scale throughput, ledgers may be partitioned (sharding) or transaction batching may be delegated to off-chain [[Layer-2 Protocol]] systems (rollups, payment channels) that periodically commit summaries back to the main ledger.

- ### Applications / Use Cases
  - **Cryptocurrency Transfers** — [[Bitcoin]] and [[Ethereum]] ledgers record peer-to-peer value transfers without banks; settlement is final within minutes rather than days.
  - **[[Smart Contract]] Execution** — programmable ledgers (Ethereum, Solana, Cardano) record not only value transfers but also the execution results of self-enforcing code, enabling [[Decentralised Finance]] protocols, NFT registries, and DAO governance.
  - **[[Tokenisation]]** — real-world assets (real estate, bonds, carbon credits) can be represented as tokens on a ledger, enabling fractional ownership and 24/7 secondary market trading.
  - **[[Central Bank Digital Currency]]** — central banks are exploring permissioned ledgers (e.g. the Digital Pound, Digital Euro pilots) that retain state control while offering programmable money features.
  - **[[Supply Chain Traceability]]** — permissioned ledgers (Hyperledger Fabric, R3 Corda) record custody transfers, provenance attestations, and compliance certificates across multi-party supply chains without requiring a trusted intermediary.
  - **[[Digital Identity]]** — self-sovereign identity systems use ledgers to anchor decentralised identifiers (DIDs) and verifiable credential schemas, enabling [[Data Provenance]] and auditability without centralised registries.
  - **Hardware Wallet Key Protection (Ledger SAS)** — the company Ledger produces the Ledger Nano and Ledger Stax devices; these are [[Cold Storage]] hardware security modules that protect [[Private Key]] material used to authorise writes to blockchain ledgers, supporting [[Self-Custody]] of [[Digital Asset|digital assets]].

- ### Relationships
  - hasPart:: [[Transaction Record]]
  - hasPart:: [[Merkle Tree]]
  - hasPart:: [[Block]]
  - partOf:: [[Blockchain]]
  - requires:: [[Consensus Mechanism]]
  - requires:: [[Cryptographic Hash]]
  - requires:: [[Private Key]]
  - enables:: [[Self-Custody]]
  - enables:: [[Digital Asset]]
  - enables:: [[Smart Contract]]
  - enables:: [[Tokenisation]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - dependsOn:: [[Public-Key Cryptography]]
  - implements:: [[Double-Entry Bookkeeping]]
  - uses:: [[Cold Storage]]
  - uses:: [[Key Management]]
  - uses:: [[Digital Signature]]
  - supports:: [[Decentralised Finance]]
  - supports:: [[Central Bank Digital Currency]]
  - contrastsWith:: [[Centralised Database]]
  - contrastsWith:: [[Custodial Wallet]]
  - bridges-to:: [[Supply Chain Traceability]]
  - bridges-to:: [[Data Provenance]]
  - bridges-to:: [[Digital Identity]]
  - relatedTo:: [[UTXO]]
  - relatedTo:: [[Account Model]]

- ### Standards & Context
  - **ISO 22739:2020** — the ISO Blockchain and DLT Vocabulary standard, which defines 'ledger', 'distributed ledger', and related terms for normative use.
  - **W3C DID Core** — specifies decentralised identifiers anchored to ledgers, enabling self-sovereign identity without centralised registrars.
  - **FATF Travel Rule (Recommendation 16)** — financial-action task-force guidance that treats blockchain ledger records as subject to the same anti-money-laundering requirements as traditional financial records.
  - **MiCA (EU Markets in Crypto-Assets Regulation)** — EU regulation (effective 2024) that governs assets issued on public ledgers, treating blockchain records as legally binding ownership evidence.
  - **Hyperledger** — Linux Foundation umbrella project hosting permissioned ledger frameworks (Fabric, Besu, Indy) targeting enterprise and consortium deployments.
  - **Ledger SAS** — private company founded 2014; products include Ledger Nano S Plus, Ledger Nano X, Ledger Stax; the Ledger Connect Kit supply-chain attack of December 2023 highlighted the security criticality of [[Key Management]] in hardware wallet ecosystems.

- ### Provenance
  - sources:: ISO 22739:2020; Satoshi Nakamoto — Bitcoin Whitepaper (2008); Ethereum Yellow Paper (Gavin Wood, 2014); Hyperledger documentation; Ledger SAS corporate documentation
  - updated:: 2026-06-13
