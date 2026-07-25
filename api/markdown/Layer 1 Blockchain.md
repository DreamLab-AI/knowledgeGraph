public:: true

# Layer 1 Blockchain

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:layer-1-blockchain", "@type":"Page", "title":"Layer 1 Blockchain", "vc:slug":"layer-1-blockchain", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:layer-1-blockchain",
  "@type":"Class",
  "label":"Layer 1 Blockchain",
  "definition":"A Layer 1 Blockchain is a base-layer distributed ledger that provides its own consensus, settlement and security without relying on another chain. It defines the native protocol, block production rules and economic security that applications and higher layers build upon, and is where transactions achieve final settlement. Examples include Bitcoin, Ethereum, Avalanche and Cardano. Layer 1 design choices around consensus and data structures determine the throughput, decentralisation and security trade-offs that Layer 2 solutions later seek to extend.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:blockchain-network","label":"Blockchain Network"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},{"@id":"urn:ngm:class:distributed-ledger","label":"Distributed Ledger"}],
    "requires":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
    "supports":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"},{"@id":"urn:ngm:class:layer-2-solutions","label":"Layer 2 Solutions"}],
    "enables":[{"@id":"urn:ngm:class:layer-2-scaling","label":"Layer 2 Scaling"}],
    "uses":[{"@id":"urn:ngm:class:proof-of-stake","label":"Proof of Stake"},{"@id":"urn:ngm:class:proof-of-work","label":"Proof of Work"}],
    "implements":[{"@id":"urn:ngm:class:distributed-ledger","label":"Distributed Ledger"}],
    "contrastsWith":[{"@id":"urn:ngm:class:layer-2-solutions","label":"Layer 2 Solutions"},{"@id":"urn:ngm:class:layer-2-scaling","label":"Layer 2 Scaling"}],
    "dependsOn":[{"@id":"urn:ngm:class:scalability","label":"Scalability"}],
    "relatedTo":[{"@id":"urn:ngm:class:sharding","label":"Sharding"},{"@id":"urn:ngm:class:ethereum","label":"Ethereum"},{"@id":"urn:ngm:class:bitcoin","label":"Bitcoin"}],
    "bridgesTo":[{"@id":"urn:ngm:class:avalanche","label":"Avalanche"},{"@id":"urn:ngm:class:cardano","label":"Cardano"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:base-layer-blockchain","label":"Base Layer Blockchain"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Layer 1 Blockchain]] is the base-layer [[Distributed Ledger]] that provides its own [[Consensus Mechanism]], settlement and security without depending on another chain.
	- It defines the native protocol and block-production rules upon which applications and higher layers build, and is where transactions reach final settlement.
	- Canonical examples include [[Bitcoin]], [[Ethereum]], [[Avalanche]] and [[Cardano]].
	- Its design choices set the throughput, decentralisation and security trade-offs that [[Layer 2 Solutions]] later extend.
- ### Overview
	- The term contrasts the base protocol (Layer 1) with off-chain or secondary protocols (Layer 2) that inherit security from it.
	- Layer 1 owns the canonical state and ordering of transactions, secured by economic incentives and a consensus protocol.
	- Because every full node validates Layer 1 transactions, raw on-chain throughput is bounded, motivating the blockchain trilemma framing of security, decentralisation and scalability.
	- Some Layer 1 chains pursue on-chain scaling (e.g. [[Sharding]] or high-throughput consensus), while others delegate scaling to Layer 2.
	- The native token typically pays transaction fees and secures the network through staking or mining.
- ### Key aspects
	- Native consensus: the chain runs its own [[Proof of Stake]] or [[Proof of Work]] (or other) consensus rather than borrowing security.
	- Final settlement: transactions confirmed at Layer 1 are the source of truth for all dependent systems.
	- Economic security: validators or miners are rewarded for honest participation and penalised for misbehaviour.
	- Execution environment: programmable Layer 1 chains expose a virtual machine for [[Smart Contract]] deployment.
	- Scalability strategy: choices between monolithic and modular designs shape how the chain grows.
- ### Applications
	- Hosting decentralised applications, tokens and DeFi protocols at the settlement layer.
	- Anchoring [[Layer 2 Scaling]] rollups and channels that post proofs or data back to Layer 1.
	- Providing the security base for cross-chain and interoperability protocols.
	- Serving as the trust root for digital assets and on-chain identity.
- ### Relationships
	- hasPart:: [[Consensus Mechanism]]
	- hasPart:: [[Distributed Ledger]]
	- requires:: [[Consensus Mechanism]]
	- supports:: [[Smart Contract]]
	- supports:: [[Layer 2 Solutions]]
	- enables:: [[Layer 2 Scaling]]
	- uses:: [[Proof of Stake]]
	- uses:: [[Proof of Work]]
	- implements:: [[Distributed Ledger]]
	- contrastsWith:: [[Layer 2 Solutions]]
	- contrastsWith:: [[Layer 2 Scaling]]
	- dependsOn:: [[Scalability]]
	- relatedTo:: [[Sharding]]
	- relatedTo:: [[Ethereum]]
	- relatedTo:: [[Bitcoin]]
	- bridgesTo:: [[Avalanche]]
	- bridgesTo:: [[Cardano]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
