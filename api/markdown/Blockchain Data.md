public:: true

# Blockchain Data

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:blockchain-data",
  "@type": "Page",
  "title": "Blockchain Data",
  "vc:slug": "blockchain-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blockchain-data",
  "@type": "Class",
  "label": "Blockchain Data",
  "definition": "Blockchain Data refers to the structured information stored on a distributed ledger, comprising transaction records, state data, smart contract bytecode, event logs, and cryptographic proofs organised into immutable, hash-linked blocks. It is characterised by append-only semantics, cryptographic integrity, and public verifiability. The data model differs fundamentally from traditional databases in that history cannot be altered without recomputing the entire subsequent chain.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:decentralised-application", "label": "Decentralised Application"},
      {"@id": "urn:ngm:class:data-provenance", "label": "Data Provenance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data", "label": "Data"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:merkle-tree", "label": "Merkle Tree"},
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:audit-trail", "label": "Audit Trail"},
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:centralised-database", "label": "Centralised Database"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:data-analytics", "label": "Data Analytics"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Blockchain Data]] is the structured information persisted on a [[Distributed Ledger]], organised into cryptographically linked blocks with [[Immutability]] guarantees.
  - Each block contains a set of [[Transaction]] records, a reference to the previous block's [[Cryptographic Hash]], and metadata including timestamps.
  - The data model supports [[Data Provenance]] and enables [[Audit Trail]] functions critical to finance, supply chain, and identity domains.

- ### Overview
  - Unlike relational databases, blockchain data is append-only: once committed and confirmed by [[Consensus Mechanism]], records cannot be deleted or altered.
  - State is represented differently across platforms: Ethereum uses an account/state-trie model; Bitcoin uses an unspent transaction output (UTXO) model.
  - On-chain storage is expensive; many systems keep hashes on-chain and bulk data off-chain via IPFS or similar.

- ### Key Aspects
  - **Block structure**: Header (previous hash, nonce, timestamp, Merkle root) + transaction list.
  - **State model**: Account-based vs UTXO.
  - **Event logs**: Smart contract emissions queryable via Bloom filters.
  - **Indexing**: The Graph Protocol and similar indexers make blockchain data queryable at scale.

- ### Mechanisms
  - [[Merkle Tree]] structures allow efficient and tamper-evident verification of inclusion of any transaction.
  - Light clients download only block headers and verify proofs, reducing storage requirements.
  - Archival nodes store the full history; pruned nodes retain only recent state.

- ### Applications
  - DeFi protocols use blockchain data to determine token balances and liquidity positions.
  - Supply chain systems anchor provenance records for physical goods on-chain.
  - Identity systems use on-chain data to verify credential issuance.

- ### Relationships
  - requires:: [[Cryptographic Hash]]
  - requires:: [[Distributed Ledger]]
  - supports:: [[Smart Contract]]
  - supports:: [[Data Provenance]]
  - relatedTo:: [[Data]]
  - relatedTo:: [[Consensus Mechanism]]
  - relatedTo:: [[Immutability]]
  - hasPart:: [[Merkle Tree]]
  - hasPart:: [[Transaction]]
  - dependsOn:: [[Peer-to-Peer Network]]
  - enables:: [[Audit Trail]]
  - enables:: [[Tokenisation]]
  - contrastsWith:: [[Centralised Database]]
  - bridgesTo:: [[Data Analytics]]

- ### Provenance
  - updated:: 2026-06-15
