public:: true

# Multi-Chain DeFi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:multi-chain-de-fi",
  "@type": "Page",
  "vc:slug": "multi-chain-de-fi",
  "title": "Multi-Chain DeFi",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:multi-chain-de-fi",
  "@type": "Class",
  "label": "Multi-Chain DeFi",
  "definition": "Multi-chain DeFi refers to decentralised finance applications and liquidity that operate across multiple independent blockchains rather than being confined to a single network. It relies on cross-chain bridges, messaging protocols, and interoperability standards to move assets and data between chains, letting users access yields and markets wherever they reside. It expands capital efficiency but introduces bridge and composability risks.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:de-fi", "label": "DeFi"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"},
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Multi-chain DeFi spreads decentralised finance across multiple blockchains, moving assets and liquidity between them. It is enabled by a [[Cross-Chain Bridge]] and depends on [[Blockchain Interoperability]].
- ### Content
  - Protocols deploy on several chains and connect them via bridges and cross-chain messaging, so users can supply, borrow, and trade across ecosystems. The model raises capital efficiency and reach but concentrates systemic risk in bridges, which have been frequent and high-value exploit targets.
