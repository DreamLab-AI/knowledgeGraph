public:: true

# Contract Code
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:contract-code",
  "@type": "Page",
  "vc:slug": "contract-code",
  "title": "Contract Code",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:contract-code",
  "@type": "Class",
  "label": "Contract Code",
  "definition": "Contract code is the executable program logic that defines the rules, state, and behaviour of a smart contract deployed on a distributed ledger. It is typically written in a high-level language such as Solidity or Kotlin and compiled to bytecode that nodes execute deterministically. Because it is immutable once deployed and controls value, contract code is a primary target for auditing and formal verification.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:r3-corda", "label": "R3 Corda"}],
    "partOf": [{"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Contract code is the executable logic of a [[Smart Contract]], compiled to deterministic bytecode and used in platforms such as [[R3 Corda]].
- ### Content
  - Authored in languages such as Solidity, Vyper, or Corda's Kotlin/Java, contract code encodes state transitions and access rules and is generally immutable after deployment. Its determinism is essential for consensus, and its irreversibility makes static analysis, auditing, and formal verification standard pre-deployment practice.
