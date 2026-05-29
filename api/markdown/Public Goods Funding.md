public:: true

# public goods funding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2f2f467d45ccbfac04b2b13d63f5f19cd6c98fd1d64f94767e98d4ada354cffe",
  "@type": "Page",
  "vc:slug": "public-goods-funding",
  "title": "public goods funding",
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
  "@id": "urn:ngm:class:public-goods-funding",
  "@type": "Class",
  "label": "Public Goods Funding",
  "definition": "Public goods funding refers to mechanisms that finance resources which are non-excludable and non-rival — meaning consumption by one party does not diminish availability to others and exclusion is impractical. In decentralised ecosystems, on-chain coordination primitives such as quadratic funding, retroactive grants, and DAO-managed treasuries are used to allocate capital towards open-source software, protocol research, and shared infrastructure. These mechanisms attempt to correct the market failure of under-provision that arises when contributors cannot capture sufficient private value from their public-benefit work.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-defi-and-economics",
      "label": "DeFi and Economics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:quadratic-funding", "label": "Quadratic Funding"},
      {"@id": "urn:ngm:class:retroactive-public-goods-funding", "label": "Retroactive Public Goods Funding"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:dao", "label": "DAO"},
      {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Public goods funding refers to mechanisms that finance resources which are non-excludable and non-rival — meaning consumption by one party does not diminish availability to others and exclusion is impractical. In decentralised ecosystems, on-chain coordination primitives such as quadratic funding, retroactive grants, and DAO-managed treasuries are used to allocate capital towards open-source software, protocol research, and shared infrastructure. These mechanisms attempt to correct the market failure of under-provision that arises when contributors cannot capture sufficient private value from their public-benefit work.

- ### Semantic Classification
  - owl-class:: public-goods-funding:Public Goods Funding
  - owl-role:: Concept

- ### Relationships
  - hasPart [[Quadratic Funding]]
  - hasPart [[Retroactive Public Goods Funding]]
  - uses [[DAO]]
  - uses [[Treasury Management]]
  - relatedTo [[Smart Contract]]
  - relatedTo [[Quadratic Voting]]

- ### Content
  Public goods funding draws on classical welfare economics to address a structural problem in open ecosystems: free-rider dynamics discourage investment in shared infrastructure because individuals benefit regardless of whether they contribute. Blockchain-native coordination tools have revived interest in novel funding mechanisms that operate transparently on-chain.

  Quadratic funding, pioneered by Gitcoin Grants, allocates matching funds proportional to the square root of aggregate individual contributions, amplifying community signal rather than raw capital. Retroactive public goods funding, as implemented by Optimism's RetroPGF programme, inverts the timing by rewarding proven past impact, reducing speculative allocation risk. DAO treasuries governed by on-chain voting or conviction voting can sustain long-running grants programmes that operate without central intermediaries.

  Smart contracts enforce disbursement rules automatically, enabling milestone-based streaming payments and transparent audit trails. Sybil resistance mechanisms — including quadratic voting safeguards — are critical to preventing gaming of matching pools by coordinated fake identities. The broader challenge is designing mechanisms that are both capital-efficient and resistant to plutocratic capture, motivating ongoing research into mechanisms combining token-weighted and identity-based governance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
