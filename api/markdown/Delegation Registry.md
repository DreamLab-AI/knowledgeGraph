public:: true

# Delegation Registry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:delegation-registry",
  "@type": "Page",
  "vc:slug": "delegation-registry",
  "title": "Delegation Registry",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:delegation-registry",
  "@type": "Class",
  "label": "Delegation Registry",
  "definition": "A delegation registry is an on-chain contract that records mappings from a token holder's address to a delegate authorised to act or vote on their behalf. In DAO governance it lets holders assign their voting power to a representative without transferring assets, and the registry serves as the canonical source consulted when tallying votes. It enables liquid democracy patterns and separation of custody from voting authority.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:snapshot-voting", "label": "Snapshot Voting"},
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On-Chain Voting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A delegation registry is a smart contract storing who has delegated voting power to whom, so governance systems can resolve a holder's delegate at tally time. It is a shared component of both [[Snapshot Voting]] and [[On-Chain Voting]].
- ### Content
  - Holders call the registry to set or revoke a delegate; vote-counting then walks these mappings to attribute power correctly. Standardised registries (e.g. ERC-5639-style designs) allow multiple governance front-ends to share one authoritative delegation graph, reducing fragmentation.
