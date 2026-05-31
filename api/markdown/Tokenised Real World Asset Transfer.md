public:: true

# Tokenised Real World Asset Transfer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tokenised-real-world-asset-transfer",
  "@type": "Page",
  "vc:slug": "tokenised-real-world-asset-transfer",
  "title": "Tokenised Real World Asset Transfer",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tokenised-real-world-asset-transfer",
  "@type": "Class",
  "label": "Tokenised Real World Asset Transfer",
  "definition": "Tokenised real-world asset transfer is the movement of on-chain tokens representing claims on off-chain assets such as real estate, commodities, or securities between parties or across blockchain networks. It requires that the cryptographic transfer of the token remains legally and operationally bound to the underlying asset, often relying on cross-chain bridges and interoperability protocols to preserve provenance across ledgers.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:bc-token-and-asset", "label": "Blockchain Token and Asset"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}, {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The transfer of tokens representing off-chain assets between parties or chains while preserving the legal link to the underlying asset. It is enabled by [[Cross-Chain Bridge]] mechanisms and broader [[Blockchain Interoperability]].
- ### Content
  - Such transfers must reconcile on-chain settlement with off-chain custody and legal title, demanding trusted oracles, registries, and compliance checks. Cross-chain movement adds complexity, as the asset claim must remain valid and non-duplicated when bridged between heterogeneous ledgers.
