public:: true

# Blockchain Node
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:blockchain-node", "@type":"Page", "title":"Blockchain Node", "vc:slug":"blockchain-node", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:blockchain-node",
  "@type":"Class",
  "label":"Blockchain Node",
  "definition":"A blockchain node is a computer running the protocol software of a blockchain network that maintains a copy of the ledger, validates transactions and blocks, and relays them to peers. Nodes collectively enforce the consensus rules and provide the decentralisation and redundancy that make the network trustworthy. They range from full nodes that store and verify the complete chain to light clients that verify selectively, and validator nodes that additionally participate in block production.",
  "domain":"blockchain",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"},{"@id":"urn:ngm:class:blockchain","label":"Blockchain"}],
    "hasPart":[{"@id":"urn:ngm:class:mempool","label":"Mempool"},{"@id":"urn:ngm:class:full-node","label":"Full Node"}],
    "dependsOn":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},{"@id":"urn:ngm:class:peer-to-peer-network","label":"Peer-to-Peer Network"}],
    "requires":[{"@id":"urn:ngm:class:transaction-validation","label":"Transaction Validation"}],
    "supports":[{"@id":"urn:ngm:class:decentralisation","label":"Decentralisation"},{"@id":"urn:ngm:class:distributed-ledger","label":"Distributed Ledger"}],
    "implements":[{"@id":"urn:ngm:class:block-propagation","label":"Block Propagation"}],
    "uses":[{"@id":"urn:ngm:class:state-synchronisation","label":"State Synchronisation"}],
    "enables":[{"@id":"urn:ngm:class:validator","label":"Validator"}],
    "relatedTo":[{"@id":"urn:ngm:class:full-node","label":"Full Node"},{"@id":"urn:ngm:class:light-client","label":"Light Client"},{"@id":"urn:ngm:class:consensus","label":"Consensus"}],
    "bridgesTo":[{"@id":"urn:ngm:class:distributed-systems","label":"Distributed Systems"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- A blockchain node is a computer running protocol software that maintains a copy of the ledger, validates transactions and blocks, and relays them across the [[Peer-to-Peer Network]]. Nodes collectively enforce the [[Consensus Mechanism]] and provide the [[Decentralisation]] that underpins a [[Distributed Ledger]].
- ### Overview
- The network is the sum of its nodes. Each node independently verifies that incoming blocks and transactions obey the protocol rules, so no central authority is required to police the system.
- Full nodes download, validate and store the entire chain, giving them the ability to verify history from genesis without trusting anyone. They form the backbone of the network's integrity.
- Light clients verify only block headers and selective proofs, trading completeness for low resource requirements suitable for mobile and embedded use.
- Validator nodes go further, staking or expending resources to propose and attest to new blocks under the consensus protocol.
- ### Mechanisms
- Peer discovery and gossip allow nodes to find one another and propagate transactions and blocks across the network.
- The mempool holds pending, validated transactions awaiting inclusion in a block.
- Validation applies the protocol rules to each transaction and block, rejecting anything invalid before relaying it.
- State synchronisation lets a newly joined node catch up to the current ledger state from peers.
- ### Applications
- Running infrastructure that serves wallets, explorers and decentralised applications via remote procedure calls.
- Participating in consensus as a [[Validator]] to earn rewards and secure the chain.
- Providing independent verification so users need not trust third-party services.
- Supporting data availability and archival access to historical state.
- ### Key aspects
- The number and distribution of independent nodes is a key measure of a network's decentralisation and censorship resistance.
- Storage, bandwidth and synchronisation costs shape who can practically run a full node.
- Node software diversity reduces the risk that a single implementation bug halts the network.
- ### Relationships
- partOf:: [[Peer-to-Peer Network]]
- partOf:: [[Blockchain]]
- hasPart:: [[Mempool]]
- hasPart:: [[Full Node]]
- dependsOn:: [[Consensus Mechanism]]
- dependsOn:: [[Peer-to-Peer Network]]
- requires:: [[Transaction Validation]]
- supports:: [[Decentralisation]]
- supports:: [[Distributed Ledger]]
- implements:: [[Block Propagation]]
- uses:: [[State Synchronisation]]
- enables:: [[Validator]]
- relatedTo:: [[Full Node]]
- relatedTo:: [[Light Client]]
- relatedTo:: [[Consensus]]
- bridgesTo:: [[Distributed Systems]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
