public:: true

# Bitcoin Halving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-halving",
  "@type": "Page",
  "vc:slug": "bitcoin-halving",
  "title": "Bitcoin Halving",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-halving",
  "@type": "Class",
  "label": "Bitcoin Halving",
  "definition": "The Bitcoin halving is a protocol-enforced event, occurring approximately every 210,000 blocks (roughly four years), at which the block subsidy paid to miners is cut in half. It implements Bitcoin's disinflationary monetary policy, capping total supply at 21 million coins and progressively reducing new issuance until it reaches zero around the year 2140. Halvings have historically preceded major shifts in mining economics and market price, and they are central to Bitcoin's narrative as a scarce, predictably issued digital asset.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:mechanism-design", "label": "Mechanism Design"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin", "label": "Bitcoin"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof of Work"},
      {"@id": "urn:ngm:class:mining-pool", "label": "Mining Pool"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The Bitcoin halving is the protocol-scheduled event, every 210,000 blocks, that halves the miner block subsidy, enforcing Bitcoin's fixed disinflationary issuance toward a 21-million-coin cap.

- ### Relationships
  - Bitcoin Halving is a subclass of [[Mechanism Design]], encoding monetary policy directly into consensus rules. It relates intrinsically to [[Bitcoin]] as the asset whose supply it governs, to [[Proof of Work]] as the issuance mechanism it throttles, and to [[Mining Pool]] economics, which it periodically and sharply reprices.

- ### Content
  - The halving is the mechanism by which Bitcoin enforces verifiable scarcity. When the network launched in 2009, each mined block created 50 new bitcoin. The protocol reduces this subsidy by half at fixed block-height intervals: to 25 in 2012, 12.5 in 2016, 6.25 in 2020, and 3.125 in 2024. Because the schedule is fixed in code and enforced by every node, the future supply of bitcoin is known with precision decades in advance — a stark contrast to discretionary central-bank monetary policy.

  - Economically, each halving is a supply shock to mining revenue. Miners' income from new issuance is instantly cut in half while their electricity and hardware costs are unchanged, forcing the least efficient operations offline until difficulty adjusts and, historically, until price appreciation restores profitability. This periodic culling drives continual improvement in mining efficiency and a migration toward the cheapest available energy.

  - The halving has become the organising event of Bitcoin's market cycles. The reduction in new supply, against roughly steady or growing demand, has historically been associated with subsequent price appreciation, giving rise to widely-discussed but not guaranteed cyclical patterns. Analysts debate how much of the effect is mechanical scarcity versus narrative and reflexive expectation, and whether efficient markets should price a fully predictable event in advance.

  - In the very long run, the halving schedule resolves a foundational design question: how to secure the network once issuance approaches zero. As the subsidy shrinks toward its terminal value around 2140, transaction fees must increasingly compensate miners for the work that secures the chain. The halving thus encodes not just a monetary policy but a slow, deliberate transition in Bitcoin's security budget from inflationary subsidy to a fee-based market, the success of which is one of the most important open questions about the protocol's century-scale viability.
