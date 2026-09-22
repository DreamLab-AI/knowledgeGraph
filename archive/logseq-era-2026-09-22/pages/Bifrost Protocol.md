public:: true

# Bifrost Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bifrost-protocol",
  "@type": "Page",
  "vc:slug": "bifrost-protocol",
  "title": "Bifrost Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bifrost-protocol",
  "@type": "Class",
  "label": "Bifrost Protocol",
  "definition": "Bifrost is a Bitcoin-focused protocol stack associated with RGB and client-side validation, providing transport and interoperability for off-chain smart-contract state. In the RGB ecosystem it handles the peer-to-peer exchange of consignments and validation data so that asset and contract state can move between parties without publishing it on-chain. By keeping contract data client-side, it preserves Bitcoin's scalability and privacy while enabling rich asset issuance.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rgb-and-client-side-validation", "label": "RGB and Client Side Validation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Bifrost is the transport and interoperability layer used by [[RGB and Client-Side Validation]] to exchange off-chain contract state between participants.
- ### Content
  - Because RGB keeps smart-contract state off the Bitcoin chain and validates it client-side, peers must reliably share consignments and proofs. Bifrost provides this communication layer, enabling private, scalable asset issuance anchored to Bitcoin UTXOs without bloating the base chain.
