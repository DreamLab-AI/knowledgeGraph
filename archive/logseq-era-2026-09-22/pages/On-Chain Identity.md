public:: true

# On-Chain Identity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:on-chain-identity",
  "@type": "Page",
  "vc:slug": "on-chain-identity",
  "title": "On-Chain Identity",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-chain-identity",
  "@type": "Class",
  "label": "On-Chain Identity",
  "definition": "On-chain identity is a persistent, cryptographically controlled identifier recorded on a blockchain that an entity uses to accumulate verifiable attributes, history, and reputation. Anchored to an address or smart contract and controlled by private keys, it can hold credentials, tokens, and attestations that other applications read trustlessly. It enables portable reputation and access control across decentralised applications.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:reputation-system", "label": "Reputation System"},
      {"@id": "urn:ngm:class:nft-minting", "label": "NFT Minting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - On-chain identity is a key-controlled, blockchain-anchored identifier that accrues verifiable attributes and history. It is required by a [[Reputation System]] and enables [[NFT Minting]] tied to a persistent profile.
- ### Content
  - Identities can attach soulbound tokens, attestations, and naming records to build composable reputation that any contract can verify without a central authority. The main tensions are privacy versus the transparency of public ledgers and the difficulty of recovery and revocation when control depends on private keys.
