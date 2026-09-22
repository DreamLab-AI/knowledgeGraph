public:: true

# Cross-Chain Swap

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:cross-chain-swap", "@type":"Page", "title":"Cross-Chain Swap", "vc:slug":"cross-chain-swap", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-chain-swap",
  "@type": "Class",
  "label": "Cross-Chain Swap",
  "definition": "A cross-chain swap is the exchange of a token or asset held on one blockchain network for a different asset held on another network, without relying on a centralised exchange as intermediary. It is typically executed via a cross-chain bridge that locks or burns the source asset and mints or releases an equivalent representation on the destination chain, or via atomic swap protocols that guarantee both legs settle or neither does. Cross-chain swaps are a core primitive for multi-chain liquidity, enabling decentralised exchanges such as Osmosis to route trades across ecosystems.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cross-chain-bridge",
      "label": "Cross-Chain Bridge"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A cross-chain swap is the exchange of a token or asset held on one blockchain network for a different asset held on another network, without relying on a centralised exchange as intermediary. It is typically executed via a cross-chain bridge that locks or burns the source asset and mints or releases an equivalent representation on the destination chain, or via atomic swap protocols that guarantee both legs settle or neither does. Cross-chain swaps are a core primitive for multi-chain liquidity, enabling decentralised exchanges such as Osmosis to route trades across ecosystems.
