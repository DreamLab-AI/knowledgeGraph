public:: true

# Peer-to-Peer Trading
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:peer-to-peer-trading",
  "@type": "Page",
  "vc:slug": "peer-to-peer-trading",
  "title": "Peer-to-Peer Trading",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:peer-to-peer-trading",
  "@type": "Class",
  "label": "Peer-to-Peer Trading",
  "definition": "Peer-to-peer trading is the direct exchange of assets between two parties without a centralised intermediary holding or matching the order. On blockchains it is typically mediated by smart contracts that escrow assets and enforce settlement atomically, removing custodial risk. It enables markets for tokens, NFTs, and goods to operate trustlessly through code rather than a central exchange.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:nft-swapping", "label": "NFT Swapping"}, {"@id": "urn:ngm:class:barter-system", "label": "Barter System"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Peer-to-peer trading is direct asset exchange between parties without a custodial intermediary, enabling mechanisms such as [[NFT Swapping]] and on-chain [[Barter System]] arrangements.
- ### Content
  - In decentralised settings, escrow and atomic-swap smart contracts guarantee that either both legs of a trade execute or neither does, eliminating counterparty default. This model supports order-book DEXs, NFT swap protocols, and bilateral barter, trading the convenience of a central matchmaker for self-custody and censorship resistance.
