public:: true

# Channel Factory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:channel-factory",
  "@type": "Page",
  "vc:slug": "channel-factory",
  "title": "Channel Factory",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:channel-factory",
  "@type": "Class",
  "label": "Channel Factory",
  "definition": "A channel factory is a Bitcoin Lightning Network scaling construction in which multiple participants share a single on-chain funding transaction (a multiparty channel) from which many off-chain payment channels can be opened, closed, and rebalanced without further on-chain transactions. By amortising one on-chain output across many channels, it reduces the on-chain footprint and cost of channel management. It matters because it improves the capital efficiency and scalability of layer-2 payments.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Channel Factory is a multiparty funding construct on the [[Lightning Network]] that lets a group open and reshuffle many payment channels off-chain from a single shared on-chain UTXO.
- ### Content
  - Participants jointly fund a multisig output and use off-chain allocation transactions to create and adjust subchannels, settling on-chain only when the factory disbands or disputes arise. The design lowers per-channel on-chain cost and reduces blockchain load, at the cost of greater coordination and liveness requirements among members.
