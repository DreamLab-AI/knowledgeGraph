public:: true

# bitcoin standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:73e823889109fd0c1987ee5553f04d6c1b6e743e5a3b78f864d852d8a5e1b478",
  "@type": "Page",
  "vc:slug": "bitcoin-standard",
  "title": "bitcoin standard",
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
  "@id": "urn:ngm:class:bitcoin-standard",
  "@type": "Class",
  "label": "Bitcoin Standard",
  "definition": "The Bitcoin Standard is an economic and monetary thesis proposing that Bitcoin's fixed supply cap of 21 million units, its decentralised consensus via Proof of Work, and its censorship-resistant issuance schedule make it a superior store of value and a viable basis for a new international monetary order, analogous to the historical gold standard. Proponents argue that Bitcoin's predictable, algorithmically enforced monetary policy immunises it against political inflation, contrasting with fiat currencies subject to central bank intervention. The thesis draws on Austrian economics, particularly the concept of sound money.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-as-money", "label": "Bitcoin As Money"},
      {"@id": "urn:ngm:class:bitcoin-value-proposition", "label": "Bitcoin Value Proposition"},
      {"@id": "urn:ngm:class:monetary-system", "label": "Monetary System"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:inflation", "label": "Inflation"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - The Bitcoin Standard is an economic and monetary thesis proposing that Bitcoin's fixed supply cap of 21 million units, its decentralised consensus via Proof of Work, and its censorship-resistant issuance schedule make it a superior store of value and a viable basis for a new international monetary order, analogous to the historical gold standard. Proponents argue that Bitcoin's predictable, algorithmically enforced monetary policy immunises it against political inflation, contrasting with fiat currencies subject to central bank intervention. The thesis draws on Austrian economics, particularly the concept of sound money.

- ### Semantic Classification
  - owl-class:: bitcoin-standard:Bitcoin Standard
  - owl-role:: Concept

- ### Relationships
  - relatedTo [[Bitcoin As Money]]
  - relatedTo [[Bitcoin Value Proposition]]
  - relatedTo [[Monetary System]]
  - uses [[Proof Of Work]]
  - uses [[Cryptocurrency]]
  - contrastsWith [[Inflation]]

- ### Content
  - The Bitcoin Standard thesis frames Bitcoin not merely as a payment network or speculative asset but as the culmination of a centuries-long search for incorruptible money. Its core properties — a fixed 21 million supply enforced by Proof of Work consensus, a disinflationary issuance schedule halving approximately every four years, and a decentralised network resistant to unilateral protocol changes — are compared favourably to commodity money (gold) in portability, divisibility, and verifiability, whilst surpassing gold in fungibility and transferability over the internet.
  - Critics of the Bitcoin Standard thesis point to Bitcoin's price volatility, limited transaction throughput, high energy consumption associated with Mining, and the absence of a lender of last resort as structural barriers to its adoption as a unit of account or medium of exchange in everyday commerce. Inflation dynamics in fiat monetary systems, they argue, are a feature rather than a bug when managed by capable central banks targeting price stability. The debate intersects Monetary Sovereignty concerns as sovereign states consider whether Bitcoin holdings threaten central bank control of monetary policy.
  - In practice, the concept has informed corporate treasury strategies (allocating Bitcoin reserves as an inflation hedge), nation-state legal tender experiments, and the design of Bitcoin ETF products. Bitcoin Mining economics — the relationship between hash rate, block reward, transaction fees, and mining profitability — are central to evaluating the long-run security budget of a Bitcoin-standard monetary system. The Monetary System implications extend to questions of capital controls, banking system disintermediation, and international settlement outside the SWIFT network.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
