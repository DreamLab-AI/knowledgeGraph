public:: true

# Protocol Upgrades
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:protocol-upgrades",
  "@type": "Page",
  "vc:slug": "protocol-upgrades",
  "title": "Protocol Upgrades",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:protocol-upgrades",
  "@type": "Class",
  "label": "Protocol Upgrades",
  "definition": "Protocol upgrades are coordinated modifications to the consensus rules, transaction format, or feature set of a blockchain network, deployed through soft forks, hard forks, or activation mechanisms. They allow a decentralised system to evolve while preserving network continuity and, where possible, backward compatibility. Because no central authority can impose changes, upgrades typically require broad stakeholder coordination and on-chain or social signalling.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Blockchain Governance and Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On-Chain Voting"},
      {"@id": "urn:ngm:class:decentralized-governance", "label": "Decentralized Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Protocol upgrades are coordinated changes to a blockchain's consensus rules or feature set, deployed via forks or activation thresholds. They are frequently authorised through [[On-Chain Voting]] and managed under [[Decentralized Governance]] processes.
- ### Content
  - Upgrades fall into soft forks (backward-compatible tightening of rules) and hard forks (non-compatible changes requiring all nodes to update). Activation can be miner-signalled, validator-signalled, or time/height-locked. The principal challenge is coordinating distributed stakeholders to avoid chain splits while still allowing the protocol to address security, scalability, and functional needs.
