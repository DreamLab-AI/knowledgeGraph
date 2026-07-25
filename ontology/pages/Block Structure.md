public:: true

# Block Structure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:block-structure",
  "@type": "Page",
  "vc:slug": "block-structure",
  "title": "Block Structure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:block-structure",
  "@type": "Class",
  "label": "Block Structure",
  "definition": "Block structure is the internal data layout of a block in a blockchain or distributed ledger, specifying the fields, encoding formats, and cryptographic commitments that constitute a valid unit of the chain. A block consists of a header containing metadata — including the parent block hash, timestamp, nonce, and Merkle root of the transaction set — and a body containing the ordered list of transactions or state transitions. The specific fields, size limits, and serialisation rules of the block structure are defined by the network's consensus protocol and directly govern the chain's security properties, throughput, and upgrade path.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:block", "label": "Block"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:block-header", "label": "Block Header"},
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:merkle-root", "label": "Merkle Root"},
      {"@id": "urn:ngm:class:nonce", "label": "Nonce"},
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:block-size", "label": "Block Size"},
      {"@id": "urn:ngm:class:block-time", "label": "Block Time"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Block Structure]] defines the internal data layout of a [[Blockchain]] block, comprising a [[Block Header]] with parent-hash, timestamp, [[Nonce]], and [[Merkle Root]] commitment, plus a body of ordered [[Transaction]] records, all serialised and integrity-protected by [[Cryptographic Hash]] chaining.

- ### Relationships
  - Block structure is a [[Block]] with internal composition defined by two primary parts: the [[Block Header]] containing cryptographic linkage and consensus metadata, and the transaction body whose integrity is summarised by a [[Merkle Root]] derived from a [[Merkle Tree]]. The [[Nonce]] field is specifically consumed during [[Proof Of Work]] mining. [[Block Size]] and [[Block Time]] parameters constrain the structure's practical throughput characteristics and are defined by the parent [[Blockchain]] protocol.

- ### Content
  - The concept of chaining blocks through cryptographic hash references was formalised in Satoshi Nakamoto's 2008 Bitcoin whitepaper, though antecedents appear in Stuart Haber and W. Scott Stornetta's 1991 work on timestamped document chains. Bitcoin's block structure introduced the now-canonical two-part layout: a fixed-size 80-byte header containing six fields (version, previous block hash, Merkle root, timestamp, difficulty target, and nonce), followed by a variable-length list of transactions. This design balanced the need for lightweight verification (the header alone suffices for SPV proofs) with the completeness required for full validation.

  - The header's previous-block-hash field is the mechanism that creates the chain: any modification to a historical block changes its hash, invalidating all subsequent headers and requiring regeneration of all descendant blocks' proof-of-work. The Merkle tree organises transactions into a binary hash tree; its root, stored in the header, allows cryptographic proof that any specific transaction is included in the block without downloading the entire block body. The nonce is iterated by miners searching for a header hash below the network difficulty target, and the timestamp enables difficulty adjustment across block windows.

  - Block structure variations across networks reflect different engineering trade-offs. Bitcoin's structure prioritises simplicity and auditability. Ethereum's blocks include additional fields for gas limits, uncle references, state root, and receipts root — reflecting its account-based execution model. Post-Merge Ethereum separates execution payloads from consensus beacon blocks, layering two distinct structures. Other chains introduce fields for validator signatures (proof-of-stake), erasure coding commitments (data availability), or parallel execution DAG references.

  - As of 2024–2025, block structure design is central to scaling research. Ethereum's EIP-4844 (blob transactions) extended the structure with a new transaction type carrying large binary objects for rollup data, with only the commitment stored on-chain. Bitcoin's Taproot upgrade reorganised the witness data field to improve privacy and smart contract expressiveness. Future proposals including Ethereum's Pectra upgrade and Bitcoin's next soft fork cycle continue to add fields and modify serialisation rules, demonstrating that block structure is a living specification rather than a fixed standard.

