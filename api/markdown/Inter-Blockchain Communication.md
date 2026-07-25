public:: true

# Inter-Blockchain Communication
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:inter-blockchain-communication", "@type":"Page", "title":"Inter-Blockchain Communication", "vc:slug":"inter-blockchain-communication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:inter-blockchain-communication",
  "@type":"Class",
  "label":"Inter-Blockchain Communication",
  "definition":"Inter-Blockchain Communication (IBC) is a standardised protocol that enables independent, sovereign blockchains to exchange data and transfer tokens trustlessly by verifying each other's consensus state. It defines transport, authentication and ordering semantics in which light clients on each chain verify the counterparty's headers, and relayers carry packets and acknowledgements between them. Originating in the Cosmos ecosystem, IBC provides a general-purpose interoperability layer for token transfers, cross-chain messaging and composable multi-chain applications.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cross-chain-interoperability","label":"Cross-Chain Interoperability"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:cosmos","label":"Cosmos"},
      {"@id":"urn:ngm:class:interoperability","label":"Interoperability"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:light-client","label":"Light Client"},
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:consensus-mechanism","label":"Consensus Mechanism"},
      {"@id":"urn:ngm:class:light-client","label":"Light Client"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:cross-chain-interoperability","label":"Cross-Chain Interoperability"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:atomic-swap","label":"Atomic Swap"},
      {"@id":"urn:ngm:class:decentralized-finance","label":"Decentralised Finance"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:tendermint","label":"Tendermint"},
      {"@id":"urn:ngm:class:cosmos-sdk","label":"Cosmos SDK"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:cross-chain-bridge","label":"Cross-Chain Bridge"},
      {"@id":"urn:ngm:class:polkadot","label":"Polkadot"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:validator-set","label":"Validator Set"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:on-chain-governance","label":"On-Chain Governance"},
      {"@id":"urn:ngm:class:digital-signature","label":"Digital Signature"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Inter-Blockchain Communication]] is a protocol that lets sovereign blockchains exchange data and tokens by verifying each other's consensus state.
	- It is a concrete realisation of [[Cross-Chain Interoperability]], using [[Light Client]]s and relayed [[Message Passing]].
	- Originating in [[Cosmos]], it underpins trust-minimised token transfer and cross-chain composition.
- ### Overview
	- IBC separates the transport, authentication and ordering layer from the application semantics carried over it.
	- Each chain runs a light client tracking the counterparty's headers, so packets are verified against the source chain's [[Consensus Mechanism]].
	- Off-chain relayers are permissionless: they move packets and acknowledgements but cannot forge messages.
	- The model contrasts with custodial or multisig bridges by minimising trusted intermediaries.
- ### Mechanisms
	- **Light-client verification**: each chain cryptographically verifies the other's state commitments.
	- **Packet lifecycle**: ordered or unordered channels carry packets with timeouts and acknowledgements.
	- **Token transfer (ICS-20)**: fungible tokens move across chains with escrow and voucher minting.
	- **Relayer network**: independent relayers ensure liveness without holding authority over correctness.
- ### Applications
	- Cross-chain token transfer across the Cosmos ecosystem of [[Cosmos SDK]] chains.
	- Cross-chain [[Decentralised Finance]] including interchain accounts and liquidity routing.
	- Generalised cross-chain messaging for composable multi-chain applications.
	- Interoperability bridging toward ecosystems such as [[Polkadot]] and beyond via [[Cross-Chain Bridge]] adapters.
- ### Relationships
	- partOf:: [[Cosmos]]
	- partOf:: [[Interoperability]]
	- hasPart:: [[Light Client]]
	- hasPart:: [[Message Passing]]
	- requires:: [[Consensus Mechanism]]
	- requires:: [[Light Client]]
	- implements:: [[Cross-Chain Interoperability]]
	- enables:: [[Atomic Swap]]
	- enables:: [[Decentralised Finance]]
	- uses:: [[Tendermint]]
	- uses:: [[Cosmos SDK]]
	- bridgesTo:: [[Cross-Chain Bridge]]
	- bridgesTo:: [[Polkadot]]
	- supports:: [[Validator Set]]
	- relatedTo:: [[On-Chain Governance]]
	- relatedTo:: [[Digital Signature]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
