public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:28b22515db336e82efcc6f71aa906920b7d30084c3ad4896fe79e4f8cddfee33",
  "@type": "Page",
  "vc:slug": "infra-network-and-comms",
  "title": "Network and Communication",
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
  "@id": "urn:ngm:class:infra-network-and-comms",
  "label": "Network and Communication",
  "definition": "Taxonomy hub covering the protocols, architectures, and physical/virtual infrastructure that enable data exchange between systems and devices. This category spans networking layers, communication protocols, edge computing, distributed systems, and the transport fabric underpinning cloud and IoT deployments.",
  "domain": "infrastructure",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technology-infrastructure-domain",
      "label": "Infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:distributed-system", "label": "Distributed System"},
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:content-delivery-network", "label": "Content Delivery Network"},
      {"@id": "urn:ngm:class:latency", "label": "Latency"},
      {"@id": "urn:ngm:class:network-topology", "label": "Network Topology"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:infra-security-and-identity", "label": "Security and Identity"},
      {"@id": "urn:ngm:class:infra-data-management", "label": "Data Management"},
      {"@id": "urn:ngm:class:cloud-infrastructure", "label": "Cloud Infrastructure"}
    ]
  },
  "qualityScore": 0.8,
  "maturity": "established"
}
```
