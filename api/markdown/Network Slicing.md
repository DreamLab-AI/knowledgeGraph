public:: true
alias:: NetworkSlicing

# Network Slicing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:network-slicing",
  "@type": "Page",
  "vc:slug": "network-slicing",
  "title": "Network Slicing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-slicing",
  "@type": "Class",
  "label": "Network Slicing",
  "definition": "Network slicing is a virtualisation architecture that partitions a single physical network infrastructure into multiple isolated, logically independent virtual networks — called slices — each configured to provide the specific performance characteristics, security posture, and service topology required by a distinct application or tenant. Defined within 3GPP Release 15 and later releases for 5G networks, each slice is instantiated through software-defined networking and network function virtualisation, enabling differentiated service-level guarantees — such as ultra-low latency for industrial automation or high-throughput for video streaming — without dedicated physical hardware. Slices span radio access, transport, and core network domains and can be dynamically provisioned, scaled, and torn down.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-function-virtualization", "label": "Network Function Virtualization"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:quality-of-service", "label": "Quality Of Service"},
      {"@id": "urn:ngm:class:guaranteed-bandwidth", "label": "Guaranteed Bandwidth"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:6-g-network-slice", "label": "6G Network Slice"},
      {"@id": "urn:ngm:class:latency", "label": "Latency"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:edge-computing-architecture", "label": "Edge Computing Architecture"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Network Slicing]] is a 5G and beyond virtualisation paradigm that partitions physical network infrastructure into isolated virtual networks, each with independently configured [[Quality Of Service]] parameters, enabling operators to simultaneously support diverse use cases — from ultra-reliable low-latency communications to massive IoT deployments — on a shared hardware substrate.

- ### Relationships
  - Network slicing is a direct application of [[Network Function Virtualization]] principles to end-to-end service delivery, spanning radio access, transport, and core network domains. It is the foundational mechanism by which [[Quality Of Service]] guarantees — including [[Guaranteed Bandwidth]] and strict [[Latency]] bounds — can be enforced per-tenant rather than on a best-effort basis. The architecture integrates naturally with [[Edge Computing]] and [[Edge Computing Architecture]] to support latency-sensitive applications by instantiating slice functions close to the end device. Evolution towards [[6G Network Slice]] architectures extends the paradigm with AI-driven slice management and sub-millisecond control loops.

- ### Content
  - The concept of network slicing grew out of software-defined networking (SDN) research in the early 2010s and was formalised by the 3GPP standardisation body in Release 15 (2018) as a first-class architectural feature of 5G New Radio and the 5G Core (5GC). Prior generations of mobile networks served all users with undifferentiated best-effort connectivity; 5G slicing enables operators to contractually separate a slice for emergency services (with guaranteed availability), a slice for connected factory floor machinery (with sub-10ms latency), and a consumer broadband slice — all on the same physical radio and core infrastructure.

  - Each network slice is constructed from a set of virtualised network functions (VNFs) assembled into a service function chain. Orchestration platforms such as ETSI NFV MANO allocate compute, storage, and radio resources to each slice according to a slice template (3GPP defined as Network Slice Type, NEST). The RAN is sliced through radio resource management policies that allocate physical resource blocks preferentially, while the transport network uses MPLS or segment routing to provide per-slice traffic isolation. Dynamic scaling allows slice capacity to track real-time demand, reducing waste compared to static provisioning.

  - Network slicing has become commercially significant for private 5G deployments in industrial, logistics, and healthcare settings, where enterprises require predictable connectivity isolated from public traffic. Automotive V2X (vehicle-to-everything) applications depend on slices with carrier-grade reliability and <5ms latency for safety-critical message exchange. Multi-access edge computing (MEC) integrates with slicing so that computation can be placed within the slice boundary, reducing round-trip latency for real-time applications such as extended reality and robotic teleoperation.

  - In 2024-2025 the focus has shifted to cross-operator slice roaming, allowing a slice to span multiple carrier networks — critical for international logistics and connected transport. AI-driven slice lifecycle management, using reinforcement learning to predict and pre-empt SLA violations, is entering production deployments. The transition planning for 6G is already embedding intent-based networking principles that treat each slice as an autonomous policy-governed entity, with significantly more granular isolation down to individual device sessions.