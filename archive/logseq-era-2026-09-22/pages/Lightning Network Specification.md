public:: true

# Lightning Network Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lightning-network-specification",
  "@type": "Page",
  "vc:slug": "lightning-network-specification",
  "title": "Lightning Network Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lightning-network-specification",
  "@type": "Class",
  "label": "Lightning Network Specification",
  "definition": "The Lightning Network Specification, known as BOLT (Basis of Lightning Technology), is the set of documents defining the peer-to-peer protocol for Bitcoin's Lightning payment-channel network. It standardises channel establishment, commitment transactions, HTLC-based routing, onion message encryption, and gossip propagation so that independent implementations interoperate. The specification is the canonical reference enabling trust-minimised off-chain Bitcoin payments.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:taproot-assets", "label": "Taproot Assets"}, {"@id": "urn:ngm:class:btc-layer-3", "label": "BTC Layer 3"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Lightning Network Specification (BOLT) standardises Bitcoin's payment-channel protocol; it provides the foundation that [[Taproot Assets]] extends and that [[BTC Layer 3]] constructions build upon.
- ### Content
  - The BOLT documents cover transport encryption, channel funding, the commitment-transaction state machine, HTLC forwarding, and the gossip protocol for route discovery. Adherence guarantees interoperability across implementations such as LND, Core Lightning, and Eclair.
