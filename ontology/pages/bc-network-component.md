public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:114cfe357ae5b9d8ec187d62694300221d101f1c3db6cf8f9973e4f394a560a6",
  "@type": "Page",
  "vc:slug": "bc-network-component",
  "title": "Network Component",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:bc-network-component",
  "label": "Network Component (Blockchain)",
  "definition": "Taxonomy hub for the node and network-layer components of a blockchain system. Network components are the participant entities and communication infrastructure through which blocks and transactions are propagated, validated, and stored across a distributed ledger.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:full-node", "label": "Full Node"},
      {"@id": "urn:ngm:class:light-node", "label": "Light Node"},
      {"@id": "urn:ngm:class:archival-node", "label": "Archival Node"},
      {"@id": "urn:ngm:class:bootstrap-node", "label": "Bootstrap Node"},
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:gossip-protocol", "label": "Gossip Protocol"},
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:block-propagation", "label": "Block Propagation"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
