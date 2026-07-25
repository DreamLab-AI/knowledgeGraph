public:: true

# Interconnect

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:interconnect", "@type":"Page", "title":"Interconnect", "vc:slug":"interconnect", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:interconnect",
  "@type":"Class",
  "label":"Interconnect",
  "definition":"An interconnect is the network fabric that links compute nodes, processors, accelerators and memory within or across systems, providing the high-bandwidth, low-latency communication paths required for parallel and distributed workloads. In high-performance computing and data centres, interconnects determine how efficiently many processors can exchange data and synchronise. Examples include on-chip buses, PCIe links between devices, and cluster fabrics such as InfiniBand or high-speed Ethernet.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:computing-infrastructure","label":"Computing Infrastructure"}],
  "relations":{
    "enables":[
      {"@id":"urn:ngm:class:parallel-processing","label":"Parallel Processing"},
      {"@id":"urn:ngm:class:high-performance-computing","label":"High-Performance Computing"},
      {"@id":"urn:ngm:class:collective-communication","label":"Collective Communication"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:ethernet","label":"Ethernet"},
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:network-topology","label":"Network Topology"},
      {"@id":"urn:ngm:class:networking","label":"Networking"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:message-passing","label":"Message Passing"},
      {"@id":"urn:ngm:class:distributed-computing","label":"Distributed Computing"},
      {"@id":"urn:ngm:class:scalability","label":"Scalability"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:high-performance-computing","label":"High-Performance Computing"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:gpu","label":"GPU"},
      {"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:networking","label":"Networking"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- An interconnect is the communication fabric linking processors, accelerators and memory, providing the bandwidth and latency characteristics that [[High-Performance Computing]] and [[Parallel Processing]] depend on.
- It carries the traffic for [[Message Passing]] and [[Collective Communication]] across [[Distributed Computing]] systems.
- ### Overview
- Interconnects span scales from on-chip and on-board links through to inter-node cluster fabrics.
- Their performance, measured in bandwidth and latency, often dominates the scalability of tightly coupled parallel applications.
- The choice of [[Network Topology]] shapes how nodes are wired and how communication patterns map onto the physical fabric.
- ### Key aspects
- Bandwidth: sustained data rate between endpoints.
- Latency: time for a message to traverse the fabric, critical for synchronisation.
- Topology: arrangement of links such as fat-tree, dragonfly or torus.
- Scalability: ability to add nodes without disproportionate communication overhead.
- Congestion management and routing to avoid hotspots.
- ### Mechanisms
- Switched fabrics route packets between endpoints over multiple hops.
- Remote direct memory access reduces CPU involvement in data transfer.
- Collective operations are mapped onto topology-aware communication trees.
- [[Ethernet]] and specialised cluster fabrics offer different bandwidth and latency trade-offs.
- ### Applications
- Supercomputers and HPC clusters running scientific simulations.
- Multi-GPU training systems for large neural networks.
- Distributed databases and analytics needing fast node-to-node exchange.
- Cloud data centres aggregating many servers.
- ### Relationships
- subClassOf:: [[Computing Infrastructure]]
- enables:: [[Parallel Processing]]
- enables:: [[High-Performance Computing]]
- enables:: [[Collective Communication]]
- uses:: [[Ethernet]]
- uses:: [[Network Topology]]
- requires:: [[Network Topology]]
- requires:: [[Networking]]
- supports:: [[Message Passing]]
- supports:: [[Distributed Computing]]
- supports:: [[Scalability]]
- partOf:: [[High-Performance Computing]]
- relatedTo:: [[GPU]]
- bridgesTo:: [[Networking]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
