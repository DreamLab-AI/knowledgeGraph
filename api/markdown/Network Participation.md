public:: true

# Network Participation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:network-participation",
  "@type": "Page",
  "vc:slug": "network-participation",
  "title": "Network Participation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-participation",
  "@type": "Class",
  "label": "Network Participation",
  "definition": "Network participation is the act of an entity contributing resources or actions to a decentralised network in exchange for the right to influence and benefit from it. In blockchain systems this includes running nodes, validating or proposing blocks, providing liquidity, or voting, typically backed by staked capital or computational work. Participation rules and incentives determine the network's security, decentralisation, and reward distribution.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-entity", "label": "Blockchain Entity"},
      {"@id": "urn:ngm:class:reward-distribution", "label": "Reward Distribution"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Network participation is an entity's resource contribution to a decentralised network in return for influence and rewards. It is required of a [[Blockchain Entity]] and drives [[Reward Distribution]].
- ### Content
  - Protocols encode participation through validator sets, staking thresholds, slashing conditions, and governance weights, aligning individual incentives with network health. Higher and more diverse participation improves security and censorship resistance, while concentration of stake or compute among few actors undermines the decentralisation the network depends on.
