public:: true

# Cryptocurrency Mining

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-cryptocurrency-mining",
  "@type": "Page",
  "vc:slug": "cryptocurrency-mining",
  "title": "Cryptocurrency Mining",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cryptocurrency-mining",
  "@type": "Class",
  "label": "Cryptocurrency Mining",
  "definition": "Cryptocurrency Mining is the process by which nodes in a proof-of-work blockchain network compete to solve computationally intensive cryptographic puzzles in order to validate pending transactions and append new blocks to the chain. Successful miners are rewarded with newly minted coins and transaction fees, providing the economic incentive that secures the network. The energy intensity and hardware specialisation of mining have significant environmental and economic implications.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hard-fork", "label": "Hard Fork"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - The proof-of-work process in which network nodes solve cryptographic puzzles to validate transactions and mint new coins, providing the economic security mechanism of permissionless blockchains.
