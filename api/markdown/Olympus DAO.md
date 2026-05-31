public:: true

# Olympus DAO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:olympus-dao",
  "@type": "Page",
  "vc:slug": "olympus-dao",
  "title": "Olympus DAO",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:olympus-dao",
  "@type": "Class",
  "label": "Olympus DAO",
  "definition": "Olympus DAO is a decentralised autonomous organisation that pioneered the protocol-owned-liquidity model and the OHM reserve-currency token backed by a treasury of assets. It introduced bonding, where users sell assets to the protocol for discounted tokens, and staking rewards, aiming to build a community-owned treasury rather than relying on rented liquidity. It became a widely studied and forked template in decentralised finance.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:bc-defi-and-economics", "label": "DeFi and Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:treasury-management", "label": "Treasury Management"},
      {"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Olympus DAO is a DeFi protocol built around protocol-owned liquidity and a treasury-backed token. It is a reference case for [[Treasury Management]] and [[Tokenomics Governance]].
- ### Content
  - Its mechanism combined bonding to acquire reserve assets with high staking yields to incentivise holding, while governance controlled treasury policy. The model demonstrated both the appeal of protocol-owned liquidity and the fragility of reflexive, high-emission token economies, influencing subsequent designs and cautionary analyses of sustainable tokenomics.
