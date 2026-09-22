public:: true

# SMaRT-BFT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:smart-bft",
  "@type": "Page",
  "vc:slug": "smart-bft",
  "title": "SMaRT-BFT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:smart-bft",
  "@type": "Class",
  "label": "SMaRT-BFT",
  "definition": "SMaRT-BFT is a Byzantine fault tolerant consensus approach built on the SMaRt (State Machine Replication) library, used to order transactions deterministically across a fixed set of validating nodes. It tolerates up to f faulty replicas out of 3f+1 total while guaranteeing safety and liveness under partial synchrony. It is commonly deployed in permissioned ledgers where validator identity is known and high throughput with finality is required.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:consortium-blockchain", "label": "Consortium Blockchain"},
      {"@id": "urn:ngm:class:blockchain-as-a-service", "label": "Blockchain As A Service"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - SMaRT-BFT is a [[Byzantine Fault Tolerance]] [[Consensus Protocol]] derived from the SMaRt state machine replication framework, providing deterministic transaction ordering across a known validator set. It underpins finality in permissioned settings such as [[Consortium Blockchain]] networks.
- ### Content
  - The protocol tolerates up to f Byzantine replicas given 3f+1 total nodes, maintaining safety and liveness under partial synchrony. Because validator identity is established in advance, it avoids the energy cost of open-membership consensus and is frequently offered within [[Blockchain as a Service]] platforms where predictable throughput and immediate finality matter more than permissionless participation.
