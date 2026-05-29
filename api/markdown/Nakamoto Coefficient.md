public:: true

# nakamoto coefficient
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:622538f95e25ba0cb85fb0b5097e4cdc271abb3505f4ac748a95b265a6f2bc14",
  "@type": "Page",
  "vc:slug": "nakamoto-coefficient",
  "title": "nakamoto coefficient",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nakamoto-coefficient",
  "@type": "Class",
  "label": "Nakamoto Coefficient",
  "definition": "The Nakamoto Coefficient is a quantitative metric for blockchain decentralisation, defined as the minimum number of independent entities in a given subsystem (such as mining pool concentration, validator set, or client software diversity) whose collusion or failure would be sufficient to compromise network security, liveness, or integrity. A higher Nakamoto Coefficient indicates a more resilient, decentralised network; a coefficient of one denotes a single point of failure. The metric is applicable across multiple dimensions of a network simultaneously, yielding a multi-dimensional decentralisation profile rather than a single scalar.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Blockchain Governance and Regulation"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:51-attack", "label": "51% Attack"},
      {"@id": "urn:ngm:class:sybil-resistance", "label": "Sybil Resistance"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The Nakamoto Coefficient is a quantitative metric for blockchain decentralisation, defined as the minimum number of independent entities in a given subsystem (such as mining pool concentration, validator set, or client software diversity) whose collusion or failure would be sufficient to compromise network security, liveness, or integrity. A higher Nakamoto Coefficient indicates a more resilient, decentralised network; a coefficient of one denotes a single point of failure. The metric is applicable across multiple dimensions of a network simultaneously, yielding a multi-dimensional decentralisation profile rather than a single scalar.

- ### Semantic Classification
  - owl-class:: nakamoto-coefficient:Nakamoto Coefficient
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[51% Attack]]
  - relatedTo [[Sybil Resistance]]
  - relatedTo [[Blockchain Governance]]
  - supports [[Proof of Stake]]
  - supports [[Validator Set]]

- ### Content
  - The Nakamoto Coefficient was proposed by Balaji Srinivasan and Leland Lee as a single-number summary of how concentrated control is within a specific subsystem of a blockchain network. For a proof-of-work network, the relevant subsystem is the mining hashrate distribution across pools; for a proof-of-stake network, it is the distribution of staked tokens across validators. The coefficient is computed by ranking entities in descending order of control and finding the smallest prefix of that list whose combined share exceeds 33% (for Byzantine agreement) or 50% (for a simple majority attack).
  - Different subsystems of the same network can exhibit very different Nakamoto Coefficients. A network might have a hashrate coefficient of eight (requiring eight mining pools to collude) but a client software coefficient of two (if two client implementations dominate, as occurred during Ethereum's early history). A full decentralisation audit therefore reports a vector of coefficients across subsystems including block production, client diversity, geographical distribution, exchange custody, and governance token concentration.
  - The concept is closely related to the security threshold of Byzantine fault-tolerant consensus protocols, which can tolerate at most ⌊(n−1)/3⌋ Byzantine failures in a network of n validators. In practice, Nakamoto Coefficient analysis informs protocol design decisions such as minimum validator set sizes, stake decentralisation incentives, and client diversity programmes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
