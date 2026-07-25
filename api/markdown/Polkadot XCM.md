public:: true

# Polkadot XCM

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:polkadot-xcm", "@type":"Page", "title":"Polkadot XCM", "vc:slug":"polkadot-xcm", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:polkadot-xcm",
  "@type":"Class",
  "label":"Polkadot XCM",
  "definition":"Polkadot XCM (Cross-Consensus Messaging) is a format and language for communicating intent between consensus systems within and beyond the Polkadot network. Rather than transferring assets directly, XCM expresses instructions that a receiving chain interprets and executes locally, enabling asset transfers, remote calls and governance actions across parachains and the relay chain. It is transport-agnostic, relying on underlying delivery layers such as XCMP and HRMP, and is designed to be extensible and version-negotiated.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cross-chain-communication","label":"Cross-Chain Communication"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:polkadot","label":"Polkadot"}],
    "implements":[{"@id":"urn:ngm:class:cross-chain-communication","label":"Cross-Chain Communication"}],
    "standardizedBy":[{"@id":"urn:ngm:class:interoperability-protocol","label":"Interoperability Protocol"}],
    "uses":[{"@id":"urn:ngm:class:message-passing","label":"Message Passing"},{"@id":"urn:ngm:class:web-assembly","label":"WebAssembly"}],
    "requires":[{"@id":"urn:ngm:class:polkadot","label":"Polkadot"}],
    "enables":[{"@id":"urn:ngm:class:cross-chain-interoperability","label":"Cross-Chain Interoperability"}],
    "dependsOn":[{"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"}],
    "supports":[{"@id":"urn:ngm:class:smart-contract","label":"Smart Contract"}],
    "contrastsWith":[{"@id":"urn:ngm:class:cosmos-ibc","label":"Cosmos IBC"},{"@id":"urn:ngm:class:layer-zero","label":"LayerZero"}],
    "bridgesTo":[{"@id":"urn:ngm:class:cross-chain-bridge","label":"Cross-Chain Bridge"}],
    "relatedTo":[{"@id":"urn:ngm:class:distributed-ledger","label":"Distributed Ledger"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:cross-consensus-messaging","label":"Cross-Consensus Messaging"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Polkadot XCM]] (Cross-Consensus Messaging) is a language for expressing intent between consensus systems, allowing chains in the [[Polkadot]] ecosystem to instruct one another.
	- It is a form of [[Cross-Chain Communication]] that conveys instructions rather than raw asset movements, which a receiving chain interprets and executes locally.
	- XCM is transport-agnostic and relies on lower-level [[Message Passing]] channels for delivery, making it a building block for [[Cross-Chain Interoperability]].
- ### Overview
	- Polkadot connects multiple application-specific chains (parachains) to a shared relay chain that provides pooled security and ordering.
	- XCM defines what messages mean across these heterogeneous consensus systems, abstracting over how messages are physically delivered.
	- Delivery is handled by transport layers such as HRMP (relayed via the relay chain) and the planned XCMP for direct parachain-to-parachain channels.
	- An XCM message is an ordered list of instructions (e.g. withdraw asset, buy execution, deposit asset) executed by an on-chain virtual machine.
	- Version negotiation lets chains running different XCM versions agree on a common dialect, supporting gradual upgrades.
- ### Mechanisms
	- Instruction model: messages are programs of typed instructions interpreted by the Cross-Consensus Virtual Machine on the destination chain.
	- Asset abstraction: assets are described by location and amount, so the same instruction works across different chains' native tokens.
	- Fee payment: senders include instructions that purchase local execution weight, ensuring the destination is compensated for processing.
	- Origin and barriers: receiving chains apply barrier filters to authorise which origins may execute which instructions, a core safety mechanism.
	- Error handling: messages can specify how to react to partial failures, including refunds and reporting.
- ### Applications
	- Cross-chain asset transfers between parachains without a custodial bridge.
	- Remote execution where one chain triggers a [[Smart Contract]] or runtime call on another.
	- Cross-chain governance and staking actions coordinated across the ecosystem.
	- Liquidity routing and DeFi composition spanning multiple parachains.
- ### Relationships
	- partOf:: [[Polkadot]]
	- implements:: [[Cross-Chain Communication]]
	- standardizedBy:: [[Interoperability Protocol]]
	- uses:: [[Message Passing]]
	- uses:: [[WebAssembly]]
	- requires:: [[Polkadot]]
	- enables:: [[Cross-Chain Interoperability]]
	- dependsOn:: [[Consensus Mechanism]]
	- supports:: [[Smart Contract]]
	- contrastsWith:: [[Cosmos IBC]]
	- contrastsWith:: [[LayerZero]]
	- bridgesTo:: [[Cross-Chain Bridge]]
	- relatedTo:: [[Distributed Ledger]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
