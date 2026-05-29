```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:byzantine-fault-tolerant-system",
  "title": "Byzantine Fault Tolerant System",
  "vc:slug": "byzantine-fault-tolerant-system",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:byzantine-fault-tolerant-system",
  "@type": "Class",
  "label": "Byzantine Fault Tolerant System",
  "definition": "A Byzantine Fault Tolerant System is a distributed computing system designed to continue operating correctly even when a subset of its nodes exhibit arbitrary failures, including malicious or contradictory behaviour. It implements protocols guaranteeing safety and liveness as long as fewer than one-third of participants are faulty, underpinning consensus in blockchain and distributed ledger networks.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:consensus-protocol", "label": "Consensus Protocol"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:blockchain-network", "label": "Blockchain Network"}
    ]
  }
}
```

## Byzantine Fault Tolerant System

A Byzantine Fault Tolerant System is a distributed computing system designed to continue operating correctly even when a subset of its nodes exhibit arbitrary failures, including malicious or contradictory behaviour. It implements protocols guaranteeing safety and liveness as long as fewer than one-third of participants are faulty, underpinning consensus in blockchain and distributed ledger networks.

### Relationships
- implements:: [[Byzantine Fault Tolerance]]
- enables:: [[Consensus Mechanism]], [[Consensus Protocol]]
- requires:: [[Consensus Algorithm]]
- supports:: [[Blockchain Network]]
