public:: true

# Vote Escrow
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:vote-escrow",
  "@type": "Page",
  "vc:slug": "vote-escrow",
  "title": "Vote Escrow",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:vote-escrow",
  "@type": "Class",
  "label": "Vote Escrow",
  "definition": "Vote escrow (ve) is a tokenomics mechanism in which holders lock governance tokens for a chosen duration in exchange for non-transferable, time-decaying voting power and often boosted protocol rewards. Popularised by Curve's veCRV model, it aligns voter incentives with long-term protocol health by rewarding commitment over short-term speculation. Locked positions decay linearly to zero at unlock, requiring periodic re-locking to maintain influence.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"}, {"@id": "urn:ngm:class:on-chain-voting", "label": "On-Chain Voting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Vote escrow grants time-weighted, non-transferable voting power for locking tokens, a core lever in [[Tokenomics Governance]] that feeds weight into [[On-Chain Voting]].
- ### Content
  - The veToken model couples governance with emission direction (gauge voting) and fee sharing, spawning a "bribe" market where protocols incentivise lockers to steer rewards. Trade-offs include reduced token liquidity, governance capture by large lockers, and the operational burden of managing decaying, illiquid positions.
