public:: true

# Cross-Chain Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-chain-communication",
  "@type": "Page",
  "vc:slug": "cross-chain-communication",
  "title": "Cross-Chain Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-chain-communication",
  "@type": "Class",
  "label": "Cross-Chain Communication",
  "definition": "Cross-chain communication is the exchange of messages, data, and asset-transfer instructions between distinct blockchain networks that do not natively share state. It is implemented through protocols, relays, and light-client verification that let one chain trust and act on events from another. It is the foundation of blockchain interoperability and multi-chain applications.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:light-client-verification", "label": "Light Client Verification"},
      {"@id": "urn:ngm:class:relayer", "label": "Relayer"},
      {"@id": "urn:ngm:class:merkle-proof", "label": "Merkle Proof"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"},
      {"@id": "urn:ngm:class:decentralized-finance", "label": "Decentralized Finance"},
      {"@id": "urn:ngm:class:atomic-swap", "label": "Atomic Swap"},
      {"@id": "urn:ngm:class:multi-chain-application", "label": "Multi-Chain Application"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:cosmos-ibc", "label": "Cosmos IBC"},
      {"@id": "urn:ngm:class:polkadot-xcm", "label": "Polkadot XCM"},
      {"@id": "urn:ngm:class:layerzero-protocol", "label": "LayerZero Protocol"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:hash-time-locked-contract", "label": "Hash Time-Locked Contract"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:oracle-network", "label": "Oracle Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:layer-2-scaling", "label": "Layer 2 Scaling"},
      {"@id": "urn:ngm:class:sidechain", "label": "Sidechain"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cosmos-ibc", "label": "Cosmos IBC"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"},
      {"@id": "urn:ngm:class:message-passing", "label": "Message Passing"},
      {"@id": "urn:ngm:class:token-bridge", "label": "Token Bridge"},
      {"@id": "urn:ngm:class:wrapped-token", "label": "Wrapped Token"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:interchain-communication", "label": "Interchain Communication"},
    {"@id": "urn:ngm:class:blockchain-messaging-protocol", "label": "Blockchain Messaging Protocol"}
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
  - Cross-chain communication is the protocol-mediated exchange of verified messages and value between separate blockchains. It is exemplified by [[Cosmos IBC]] and is the enabling layer for [[Blockchain Interoperability]].
- ### Content
  - Approaches range from light-client and relay schemes that cryptographically verify source-chain state to trust-minimised messaging and liquidity bridges. The central engineering tension is achieving low-latency, generic messaging without introducing trusted intermediaries whose compromise would put bridged assets at risk.
