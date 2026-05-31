public:: true

# GoQuorum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:go-quorum",
  "@type": "Page",
  "vc:slug": "go-quorum",
  "title": "GoQuorum",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:go-quorum",
  "@type": "Class",
  "label": "GoQuorum",
  "definition": "GoQuorum is an open-source, enterprise-focused Ethereum client originally developed by J.P. Morgan and forked from go-ethereum to support permissioned consortium networks. It adds private transactions and contracts, permissioning, and pluggable consensus algorithms such as IBFT, QBFT, and Raft suited to known-validator settings. It is widely used to build private and consortium blockchains for financial and supply-chain applications.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Blockchain Network Component"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:quorum-blockchain", "label": "Quorum Blockchain"}, {"@id": "urn:ngm:class:consortium-blockchain", "label": "Consortium Blockchain"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GoQuorum is a permissioned Ethereum client; it is a core part of the [[Quorum Blockchain]] platform and is widely used to operate [[Consortium Blockchain]] networks with private transactions.
- ### Content
  - GoQuorum extends go-ethereum with a privacy manager (Tessera) that keeps the payloads of private transactions off the public state, sharing only hashes on-chain. It replaces proof-of-work with Byzantine-fault-tolerant consensus such as QBFT/IBFT or crash-fault-tolerant Raft, appropriate for vetted validator sets. Account- and node-level permissioning controls who may join the network and submit transactions.
