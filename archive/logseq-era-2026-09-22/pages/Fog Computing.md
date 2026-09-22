public:: true

# Fog Computing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fog-computing",
  "@type": "Page",
  "vc:slug": "fog-computing",
  "title": "Fog Computing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fog-computing",
  "@type": "Class",
  "label": "Fog Computing",
  "definition": "Fog computing is a distributed architecture that places compute, storage, and networking resources in an intermediate tier between end devices and the cloud, typically in gateways, routers, and local servers near the data source. It extends cloud capabilities toward the network edge to reduce latency, conserve bandwidth, and improve resilience and privacy for geographically dispersed Internet-of-Things deployments. Distinct from edge computing's focus on the device itself, fog computing emphasises a coordinated, hierarchical layer of regional nodes orchestrating many edges.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:low-latency-computing", "label": "Low-Latency Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Fog computing is a distributed architecture placing compute, storage, and networking in an intermediate tier between end devices and the cloud, coordinating regional nodes near data sources to reduce latency and bandwidth.

- ### Relationships
  - Fog Computing is a subclass of [[Distributed Computing]] and works alongside [[Edge Computing]], which it uses and orchestrates as the device-level tier beneath it. It enables [[Low-Latency Computing]] for dispersed deployments and relates to [[Cloud Computing]], whose capabilities it extends toward the network edge.

- ### Content
  - Fog computing emerged from the recognition that the centralised cloud is poorly suited to the geography and volume of Internet-of-Things data. Sending every sensor reading to a distant data centre wastes bandwidth, adds round-trip latency intolerable for control loops, and creates a single point of failure for systems that must keep operating when connectivity falters. Fog computing inserts an intermediate processing tier closer to where data is produced and consumed.

  - The architecture is explicitly hierarchical. End devices and sensors form the lowest layer; fog nodes — gateways, routers, micro-data-centres, and local servers — form a regional middle tier that aggregates, filters, and analyses data, responding locally to time-critical events; and the cloud remains the top tier for heavy analytics, long-term storage, and global coordination. Work is placed at the layer that best balances latency, bandwidth, and computational cost.

  - The distinction from edge computing is one of scope and emphasis rather than a hard boundary. Edge computing concentrates on processing at or very near the individual device or sensor; fog computing emphasises the coordinated, networked layer of nodes between many edges and the cloud, providing orchestration, resource pooling, and a managed continuum. In practice the terms overlap, and many systems blend device-level edge processing with a regional fog tier.

  - Fog computing suits applications with dense, distributed sensing and real-time requirements: smart grids balancing local supply and demand, connected-vehicle and traffic systems, industrial automation, and smart cities. Its benefits — lower latency, reduced backhaul traffic, local autonomy during network outages, and keeping sensitive data nearer its source for privacy — come at the cost of greater operational complexity in managing, securing, and orchestrating a large fleet of heterogeneous intermediate nodes, which is the central engineering challenge of the model.
