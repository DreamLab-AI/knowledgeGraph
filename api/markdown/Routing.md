public:: true

# Routing
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-routing",
  "@type": "Page",
  "vc:slug": "routing",
  "title": "Routing",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:routing",
  "@type": "Class",
  "label": "Routing",
  "definition": "Routing is the process of selecting paths in a network along which data packets or messages are forwarded from source to destination. Routing algorithms and protocols such as BGP, OSPF, and segment routing determine optimal or policy-compliant paths based on metrics including latency, bandwidth, and cost. It is a foundational function of IP networks, software-defined networking, and overlay networks.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communications"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - Routing is the network function of selecting forwarding paths for data packets between source and destination nodes, governed by protocols and algorithms that optimise for latency, cost, or policy compliance.
