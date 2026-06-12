public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7537a18ded1455d5c61badd12fd3e262223b0b8eb0a44e0a6a85625c1d95ff44",
  "@type": "Page",
  "vc:slug": "infra-computing-and-cloud",
  "title": "Computing and Cloud",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:infra-computing-and-cloud",
  "label": "Computing and Cloud",
  "definition": "Taxonomy hub covering computing paradigms and cloud service models within the infrastructure domain, including distributed systems, edge computing, serverless architectures, and specialised hardware accelerators. It organises concepts ranging from physical compute infrastructure to platform and software services delivered over networks.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technology-infrastructure-domain",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"},
      {"@id": "urn:ngm:class:cloud-native-applications", "label": "Cloud-Native Applications"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:serverless-architecture", "label": "Serverless Architecture"},
      {"@id": "urn:ngm:class:microservices-architecture", "label": "Microservices Architecture"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:quantum-computation-paradigm", "label": "Quantum Computing"},
      {"@id": "urn:ngm:class:tpu", "label": "TPU"},
      {"@id": "urn:ngm:class:fpga", "label": "FPGA"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"},
      {"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communication"},
      {"@id": "urn:ngm:class:compute-infrastructure", "label": "Compute Infrastructure"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
