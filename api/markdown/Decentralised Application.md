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
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:web3", "label": "Web3"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A decentralised application runs its backend logic as smart contracts on a peer-to-peer blockchain network, a defining building block of [[Web3]] that removes reliance on central servers.
- ### Content
  - A dApp's trust-critical logic and state live on-chain in [[Smart Contract]] code, while user interfaces and bulk data sit off-chain. This architecture yields permissionless access and censorship resistance at the cost of latency, gas fees and the immutability of deployed contracts.
