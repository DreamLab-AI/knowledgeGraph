public:: true

# Payment Channel Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:payment-channel-network",
  "@type": "Page",
  "vc:slug": "payment-channel-network",
  "title": "Payment Channel Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:payment-channel-network",
  "@type": "Class",
  "label": "Payment Channel Network",
  "definition": "A Payment Channel Network is a layer-2 scaling architecture in which participants open bilateral payment channels and route payments across a graph of connected channels without settling each transaction on the underlying blockchain. Funds are locked in multisignature channels, and balances update off-chain through signed state, with only channel opening and closing recorded on-chain. This enables high-throughput, low-fee, near-instant payments while inheriting base-layer security.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Network Component"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:payment-channel", "label": "Payment Channel"},
      {"@id": "urn:ngm:class:hash-time-locked-contract", "label": "Hash Time-Locked Contract"},
      {"@id": "urn:ngm:class:onion-routing", "label": "Onion Routing"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:multisignature-wallet", "label": "Multisignature Wallet"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:timelock", "label": "Timelock"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:micropayment", "label": "Micropayment"},
      {"@id": "urn:ngm:class:streaming-payment", "label": "Streaming Payment"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:digital-signature", "label": "Digital Signature"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:layer-2-protocol", "label": "Layer 2 Protocol"},
      {"@id": "urn:ngm:class:state-channel", "label": "State Channel"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:source-routing", "label": "Source Routing"},
      {"@id": "urn:ngm:class:gossip-protocol", "label": "Gossip Protocol"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rollup", "label": "Rollup"},
      {"@id": "urn:ngm:class:sidechain", "label": "Sidechain"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:finance", "label": "Finance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:raiden-network", "label": "Raiden Network"},
      {"@id": "urn:ngm:class:liquidity-management", "label": "Liquidity Management"},
      {"@id": "urn:ngm:class:channel-rebalancing", "label": "Channel Rebalancing"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:off-chain-payment-network", "label": "Off-Chain Payment Network"},
    {"@id": "urn:ngm:class:layer2-payment-network", "label": "Layer 2 Payment Network"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A Payment Channel Network routes off-chain payments across a graph of bilateral channels, the architecture generalized by the [[Lightning Network]] for scalable blockchain payments.
- ### Content
  - Participants lock funds in multisignature channels and exchange signed balance updates off-chain, committing only channel opens and closes to the base layer. Routing payments through intermediary channels yields near-instant, low-fee transactions while inheriting the settlement security of the underlying chain.
