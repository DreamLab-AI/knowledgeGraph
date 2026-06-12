public:: true

# Bitcoin DeFi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-de-fi",
  "@type": "Page",
  "vc:slug": "bitcoin-de-fi",
  "title": "Bitcoin DeFi",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-de-fi",
  "@type": "Class",
  "label": "Bitcoin DeFi",
  "definition": "Bitcoin DeFi is the emerging set of decentralised finance applications, such as lending, swaps, and stablecoins, built on or anchored to the Bitcoin network. Because Bitcoin's base layer has limited scripting, these applications typically rely on layers and sidechains, including Lightning, Taproot assets, RGB, and Layer-3 protocols, to add programmability. The goal is to bring DeFi functionality to Bitcoin's liquidity and security while preserving its conservative base-layer design.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:de-fi", "label": "DeFi"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:btc-layer-3", "label": "BTC Layer-3"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Bitcoin DeFi brings decentralised finance to the Bitcoin economy, largely enabled by higher layers such as [[BTC Layer-3]] that add programmability without changing the base chain.
- ### Content
  - Lacking rich on-chain smart contracts, Bitcoin DeFi composes functionality across Lightning, client-side-validated assets, and dedicated DeFi layers. This stacked architecture aims to deliver lending, trading, and stablecoin rails secured by Bitcoin while keeping the base protocol minimal.
