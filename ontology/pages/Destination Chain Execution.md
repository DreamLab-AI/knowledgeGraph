public:: true

# Destination Chain Execution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:destination-chain-execution",
  "@type": "Page",
  "vc:slug": "destination-chain-execution",
  "title": "Destination Chain Execution",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:destination-chain-execution",
  "@type": "Class",
  "label": "Destination Chain Execution",
  "definition": "Destination chain execution is the phase of a cross-chain operation in which a message or transaction validated from a source chain is finally executed on the target blockchain. After relayers and verification prove the source event, the destination chain mints, releases, or calls a contract to complete the bridged action. Correct execution requires replay protection, message ordering guarantees, and trust in the verification layer.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"},
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Destination chain execution is the step where a verified cross-chain message is applied on the target chain, completing the transfer or call. It is required by [[Blockchain Interoperability]] designs and is the settlement half of a [[Cross-Chain Bridge]].
- ### Content
  - The destination contract checks proofs and a unique message identifier before executing, preventing replay and double-spend. Failure modes include stuck or unexecuted messages, reorg-induced inconsistency, and reliance on the bridge's validator or light-client security assumptions.
