public:: true

# Cross-Chain DEX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-chain-dex",
  "@type": "Page",
  "vc:slug": "cross-chain-dex",
  "title": "Cross-Chain DEX",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-chain-dex",
  "@type": "Class",
  "label": "Cross-Chain DEX",
  "definition": "A cross-chain DEX is a decentralised exchange that lets users swap assets native to different blockchains without a centralised custodian. It relies on bridges, atomic swaps, or liquidity-network protocols to coordinate settlement across chains while preserving non-custodial trading. It extends decentralised finance beyond single-chain liquidity silos.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:de-fi", "label": "DeFi"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}, {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A cross-chain DEX is a non-custodial exchange that swaps assets across distinct blockchains. It is built on [[Cross-Chain Bridge]] infrastructure and supports broader [[Blockchain Interoperability]].
- ### Content
  - Implementations use locked-and-minted bridge assets, hashed time-locked atomic swaps, or shared liquidity routers to settle trades spanning chains. The design must manage bridge security, cross-chain finality differences, and liquidity fragmentation, since each external dependency expands the attack surface relative to a single-chain DEX.
