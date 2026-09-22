public:: true

# OpenZeppelin Governor Contracts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-zeppelin-governor-contracts",
  "@type": "Page",
  "vc:slug": "open-zeppelin-governor-contracts",
  "title": "OpenZeppelin Governor Contracts",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-zeppelin-governor-contracts",
  "@type": "Class",
  "label": "OpenZeppelin Governor Contracts",
  "definition": "OpenZeppelin Governor Contracts are a modular on-chain governance framework that lets DAOs run proposal, voting, and execution workflows tied to governance tokens. The Governor base contract integrates with token-based voting power (including delegation and timelock execution) and is configurable for quorum, voting periods, and vote-counting strategies. It is a widely adopted standard for implementing token-weighted decentralized governance.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:delegate-democracy", "label": "Delegate Democracy"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - OpenZeppelin Governor Contracts provide a modular on-chain governance framework that ties proposals and voting to a [[Governance Token]] and supports delegation patterns underlying [[Delegate Democracy]].
- ### Content
  - The Governor base integrates token-weighted voting power, configurable quorum and voting periods, and timelock-gated execution. Its modularity lets DAOs compose vote-counting and delegation strategies, making it a common standard for decentralized governance.
