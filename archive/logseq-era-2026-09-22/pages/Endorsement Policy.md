public:: true

# Endorsement Policy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:endorsement-policy",
  "@type": "Page",
  "vc:slug": "endorsement-policy",
  "title": "Endorsement Policy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:endorsement-policy",
  "@type": "Class",
  "label": "Endorsement Policy",
  "definition": "An Endorsement Policy is a rule, used in permissioned blockchains such as Hyperledger Fabric, that specifies which organisations' peers must execute and cryptographically sign a transaction proposal before it is considered valid. It encodes the trust and approval requirements for a smart contract, for example requiring signatures from a majority or a named set of consortium members. Endorsement policies are central to multi-party governance of enterprise distributed ledgers.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:consortium-blockchain", "label": "Consortium Blockchain"}, {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Endorsement Policy specifies which organisations' peers must execute and sign a transaction before it is valid on a permissioned ledger. It is a core governance component of a [[Consortium Blockchain]] and of [[Enterprise Smart Contracts]].
- ### Content
  - In Hyperledger Fabric, endorsement policies are attached to chaincode and expressed as logical combinations of organisation signatures, such as "AND", "OR", or "N-of-M". They let a consortium encode trust assumptions directly into transaction validation, ensuring no single party can unilaterally commit state changes.
