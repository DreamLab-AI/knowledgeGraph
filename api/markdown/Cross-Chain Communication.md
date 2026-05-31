public:: true

# Cross-Chain Communication
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cross-chain-communication",
  "@type": "Page",
  "vc:slug": "cross-chain-communication",
  "title": "Cross-Chain Communication",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cross-chain-communication",
  "@type": "Class",
  "label": "Cross-Chain Communication",
  "definition": "Cross-chain communication is the exchange of messages, data, and asset-transfer instructions between distinct blockchain networks that do not natively share state. It is implemented through protocols, relays, and light-client verification that let one chain trust and act on events from another. It is the foundation of blockchain interoperability and multi-chain applications.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cosmos-ibc", "label": "Cosmos IBC"}, {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cross-chain communication is the protocol-mediated exchange of verified messages and value between separate blockchains. It is exemplified by [[Cosmos IBC]] and is the enabling layer for [[Blockchain Interoperability]].
- ### Content
  - Approaches range from light-client and relay schemes that cryptographically verify source-chain state to trust-minimised messaging and liquidity bridges. The central engineering tension is achieving low-latency, generic messaging without introducing trusted intermediaries whose compromise would put bridged assets at risk.
