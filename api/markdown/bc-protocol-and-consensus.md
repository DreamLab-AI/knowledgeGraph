public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:af99b703eec35295430f2e279ba00d1f3c6bd5242d1ef215d935a07a52e40402",
  "@type": "Page",
  "vc:slug": "bc-protocol-and-consensus",
  "title": "Protocol and Consensus",
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
  "@id": "urn:ngm:class:bc-protocol-and-consensus",
  "label": "Protocol and Consensus",
  "definition": "Taxonomy category grouping all protocol-level and consensus-layer concepts within the blockchain domain, including proof-of-work and proof-of-stake variants, Byzantine fault-tolerant algorithms, finality models, and the rules governing block production and chain selection.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"},
      {"@id": "urn:ngm:class:pure-proof-of-stake", "label": "Pure Proof of Stake"},
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"},
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"},
      {"@id": "urn:ngm:class:blockchain-scalability", "label": "Blockchain Scalability"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:immutability", "label": "Immutability"},
      {"@id": "urn:ngm:class:distributed-ledger-technology", "label": "Distributed Ledger Technology"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
