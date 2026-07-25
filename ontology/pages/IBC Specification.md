public:: true

# IBC Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ibc-specification",
  "@type": "Page",
  "vc:slug": "ibc-specification",
  "title": "IBC Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ibc-specification",
  "@type": "Class",
  "label": "IBC Specification",
  "definition": "The Inter-Blockchain Communication (IBC) specification is an open protocol standard for authenticated, ordered, and reliable message passing between independent distributed ledgers. Originating in the Cosmos ecosystem, it uses light-client verification and Merkle proofs so that two chains can trustlessly relay packets such as token transfers without a trusted intermediary. IBC underpins much of the modular and cross-chain interoperability landscape.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"}],
    "enables": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The IBC Specification is a standard for trust-minimised message passing between sovereign chains, enabling [[Blockchain Interoperability]] and serving as the transport layer for many a [[Cross-Chain Bridge]].
- ### Content
  - IBC separates a transport, authentication, and ordering layer (TAO) from the application layer, allowing arbitrary packet semantics atop a common connection-and-channel handshake. Relayers carry packets and proofs between chains, while each chain verifies the counterparty's consensus via an embedded light client.
