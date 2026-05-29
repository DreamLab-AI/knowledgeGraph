public:: true

# Wormhole
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wormhole",
  "@type": "Page",
  "vc:slug": "wormhole",
  "title": "Wormhole",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wormhole",
  "@type": "Class",
  "label": "Wormhole",
  "definition": "Wormhole is a decentralised cross-chain messaging and asset-transfer protocol that enables the movement of tokens, NFTs, and arbitrary messages between heterogeneous blockchain networks by relying on a network of off-chain guardian validators who attest to events on one chain, producing signed VAA (Verified Action Approval) messages that unlock corresponding assets or trigger logic on the destination chain. Originally launched as a wrapped-asset bridge between Solana and Ethereum in 2020, Wormhole has evolved into a generic interoperability layer supporting over 30 ecosystems. A significant exploit in February 2022 resulted in the theft of approximately 120,000 wETH, subsequently made whole by Jump Crypto.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:cross-chain-asset-transfer", "label": "Cross Chain Asset Transfer"},
      {"@id": "urn:ngm:class:cross-chain-messaging", "label": "Cross Chain Communication"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:bridge-contract", "label": "Bridge Contract"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-chain-interoperability", "label": "Cross-Chain Interoperability"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Wormhole]] is a generic [[Cross-Chain Bridge]] and message-passing protocol that connects over 30 layer-1 and layer-2 blockchain networks, enabling bidirectional transfer of tokens, non-fungible tokens, and arbitrary data payloads. Its security model relies on a permissioned set of guardian validators — 19 entities operating nodes across all supported chains — who must reach a two-thirds supermajority before issuing a VAA (Verified Action Approval). Smart contracts on source and destination chains lock or mint assets in accordance with the VAA, making Wormhole a lock-and-mint bridge rather than a trustless light-client approach.

- ### Relationships
  - [[Wormhole]] is a prominent instance of [[Cross-Chain Bridge]] infrastructure, enabling [[Cross Chain Asset Transfer]] and general [[Cross Chain Communication]] across heterogeneous ecosystems. It deploys [[Bridge Contract]] and [[Smart Contract]] code on each supported chain as the on-chain endpoint of the VAA verification pipeline. Its operation contributes to [[Blockchain Interoperability]] and broader [[Cross-Chain Interoperability]] goals pursued by multi-chain application developers.

- ### Content
  - Wormhole was developed by Certus One (later acquired by Jump Crypto) and launched in 2020 as a Solana-Ethereum token bridge during the peak of decentralised finance growth. The initial version used a limited guardian set to relay attestations, a model chosen for operational simplicity over fully trust-minimised light-client verification. The February 2022 exploit — which drained 120,000 wETH (approximately $320 million at the time) by forging guardian signatures via a Solana programme vulnerability — prompted an emergency recapitalisation by Jump Crypto and an extensive security overhaul.

  - The Wormhole protocol uses a two-step process: (1) a transaction on the source chain emits an event that guardians observe and sign independently; (2) once a quorum (13 of 19) of guardian signatures is gathered, a VAA is formed and submitted to the destination chain's core contract for verification. This architecture supports not just asset transfers but any arbitrary payload, making Wormhole a general-purpose messaging layer. The native PYTH oracle network and several NFT bridges are built on the same guardian infrastructure.

  - As of 2024, Wormhole is one of the highest-volume cross-chain messaging systems, with cumulative transfers exceeding tens of billions of dollars in notional value. It supports Ethereum, Solana, BNB Chain, Polygon, Avalanche, Aptos, Sui, and numerous other networks. The Wormhole Foundation was established in 2023 to steward the open protocol independently of Jump Crypto, and the W token was launched in 2024 via an airdrop to incentivise governance participation.

  - The 2024-2025 landscape sees Wormhole competing and coexisting with other cross-chain messaging systems, including LayerZero and Axelar. Ongoing research focuses on reducing trust assumptions through zero-knowledge proof verification of guardian attestations, which would allow destination chains to verify proofs of source-chain state without depending on the guardian set's honesty. Integration with intent-based bridging protocols represents a further evolution of its role in the multi-chain application stack.