public:: true

# ETSI MEC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:etsi-mec",
  "@type": "Page",
  "vc:slug": "etsi-mec",
  "title": "ETSI MEC",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:etsi-mec",
  "@type": "Class",
  "label": "ETSI MEC",
  "definition": "ETSI MEC (Multi-access Edge Computing) is a set of standards from the European Telecommunications Standards Institute defining an open framework for running applications at the edge of mobile and fixed networks, close to end users. It specifies APIs and a reference architecture so applications can access low-latency compute, radio-network information, and location services hosted at base stations or aggregation points. MEC is foundational to latency-sensitive use cases such as AR, autonomous systems, and IoT.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:technical-standard", "label": "Technical Standard"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}, {"@id": "urn:ngm:class:hardware-and-edge", "label": "Hardware and Edge"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - ETSI MEC is the standard framework for [[Edge Computing]] at the network edge, defining APIs and architecture that standardise [[Hardware and Edge]] deployments for low-latency applications.
- ### Content
  - The specification exposes radio-network, location, and bandwidth-management services through standard APIs so applications can run on operator edge infrastructure. This enables consistent, portable deployment of latency-critical AR, vehicular, and IoT workloads across networks.
