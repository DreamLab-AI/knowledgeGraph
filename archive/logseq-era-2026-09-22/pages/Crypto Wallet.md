public:: true

# Crypto Wallet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:crypto-wallet",
  "@type": "Page",
  "vc:slug": "crypto-wallet",
  "title": "Crypto Wallet",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crypto-wallet",
  "@type": "Class",
  "label": "Crypto Wallet",
  "definition": "A crypto wallet is software or hardware that manages the private keys controlling blockchain assets and enables users to sign transactions, hold tokens, and interact with decentralised applications. Wallets may be custodial or non-custodial, hot or cold, and increasingly serve as the identity and access layer for Web3. They do not store assets themselves but the cryptographic keys that authorise control over on-chain balances.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Network Component"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:web3", "label": "Web3"}, {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A crypto wallet manages the private keys that authorise control of on-chain assets and signs blockchain transactions. It is a core component of the [[Web3]] stack and often anchors a user's [[Web3 Domain]] identity.
- ### Content
  - Wallets generate and protect key pairs, derive addresses, and expose signing interfaces to dApps, with non-custodial designs placing key custody entirely with the user. Security hinges on seed-phrase protection, hardware isolation, and increasingly on account abstraction and social recovery, since loss or theft of keys is irreversible.
