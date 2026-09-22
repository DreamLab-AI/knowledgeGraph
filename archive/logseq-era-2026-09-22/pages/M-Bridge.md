public:: true

# M-Bridge
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:m-bridge",
  "@type": "Page",
  "vc:slug": "m-bridge",
  "title": "M-Bridge",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:m-bridge",
  "@type": "Class",
  "label": "M-Bridge",
  "definition": "mBridge (Project mBridge) is a multi-central-bank digital currency platform built on distributed ledger technology to enable real-time, cross-border, multi-currency payments and foreign-exchange settlement. Developed by the BIS Innovation Hub with central banks including those of China, Hong Kong, Thailand, and the UAE, it lets participating institutions transact wholesale CBDCs on a shared ledger. It aims to reduce cost, latency, and intermediary dependence in correspondent banking.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:hyperledger-iroha", "label": "Hyperledger Iroha"}, {"@id": "urn:ngm:class:cbdcs", "label": "CBDCs"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - mBridge is a multi-CBDC distributed-ledger platform for instant cross-border wholesale settlement among participating central banks. Its early prototypes drew on [[Hyperledger Iroha]] and it operationalises wholesale [[CBDCs]].
- ### Content
  - The platform runs a custom validating-ledger consensus among central-bank nodes, allowing direct peer settlement without traditional correspondent chains. It is one of the most advanced multilateral CBDC experiments, raising questions about governance, interoperability with domestic systems, and the geopolitics of alternative settlement rails.
