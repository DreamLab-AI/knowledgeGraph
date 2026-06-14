public:: true

# Decentralised Application
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:decentralised-application",
  "@type": "Page",
  "vc:slug": "decentralised-application",
  "title": "Decentralised Application",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:decentralised-application",
  "@type": "Class",
  "label": "Decentralised Application",
  "definition": "A decentralised application (dApp) is software whose backend logic runs on a decentralised peer-to-peer network, typically as smart contracts on a blockchain, rather than on centrally controlled servers. It combines on-chain contracts for trustless state and logic with off-chain front ends and storage. dApps are a defining component of Web3, enabling permissionless, censorship-resistant services such as exchanges, lending and marketplaces.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:frontend-interface", "label": "Frontend Interface"},
      {"@id": "urn:ngm:class:wallet-integration", "label": "Wallet Integration"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:cryptocurrency-wallet", "label": "Cryptocurrency Wallet"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:non-fungible-token", "label": "Non-Fungible Token"},
      {"@id": "urn:ngm:class:decentralised-autonomous-organisation", "label": "Decentralised Autonomous Organisation"},
      {"@id": "urn:ngm:class:permissionless-access", "label": "Permissionless Access"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:decentralised-storage", "label": "Decentralised Storage"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:web3-protocol", "label": "Web3 Protocol"},
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ethereum", "label": "Ethereum"},
      {"@id": "urn:ngm:class:ipfs", "label": "IPFS"},
      {"@id": "urn:ngm:class:oracle", "label": "Oracle"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:centralised-application", "label": "Centralised Application"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:distributed-systems", "label": "Distributed Systems"},
      {"@id": "urn:ngm:class:digital-governance", "label": "Digital Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:web3", "label": "Web3"},
      {"@id": "urn:ngm:class:token-economy", "label": "Token Economy"},
      {"@id": "urn:ngm:class:censorship-resistance", "label": "Censorship Resistance"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:dapp", "label": "dApp"},
    {"@id": "urn:ngm:class:decentralized-application", "label": "Decentralized Application"}
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
  - A decentralised application runs its backend logic as smart contracts on a peer-to-peer blockchain network, a defining building block of [[Web3]] that removes reliance on central servers.
- ### Content
  - A dApp's trust-critical logic and state live on-chain in [[Smart Contract]] code, while user interfaces and bulk data sit off-chain. This architecture yields permissionless access and censorship resistance at the cost of latency, gas fees and the immutability of deployed contracts.
