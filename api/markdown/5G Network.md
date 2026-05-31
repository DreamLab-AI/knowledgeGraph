public:: true
alias:: 5G Networks

# 5G Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5-g-network",
  "@type": "Page",
  "vc:slug": "5-g-network",
  "title": "5G Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:5-g-network",
  "@type": "Class",
  "label": "5G Network",
  "definition": "A 5G Network is the complete physical and logical telecommunications infrastructure that delivers 5G services, comprising gNB base stations with 5G NR radio access, a cloud-native 5G Core with service-based architecture network functions (AMF, SMF, UPF, etc.), transport networks interconnecting radio and core, and operations support systems. It supports network slicing to virtualise multiple logical networks over shared physical resources and integrates multi-access edge computing nodes for low-latency application hosting. 5G Networks form the foundational connectivity layer for advanced XR, industrial IoT, and autonomous system deployments.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:telecommunications-infrastructure", "label": "Telecommunications Infrastructure"}
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:5-g-connectivity", "label": "5G Connectivity"},
      {"@id": "urn:ngm:class:multi-access-edge-computing", "label": "MultiAccessEdgeComputing"},
      {"@id": "urn:ngm:class:io-t-infrastructure", "label": "IoT Infrastructure"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:network-function-virtualization", "label": "Network Function Virtualization"},
      {"@id": "urn:ngm:class:network-architecture", "label": "Network Architecture"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:3-gpp", "label": "3GPP"},
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:6-g-network-slice", "label": "6G Network Slice"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A 5G Network is the end-to-end infrastructure system delivering fifth-generation mobile services, consisting of a 5G NR radio access network (gNB base stations), a cloud-native 5G Core implementing a service-based architecture, and the transport infrastructure linking them. [[Network Function Virtualization]] enables the 5G Core functions — including the Access and Mobility Management Function (AMF), Session Management Function (SMF), and User Plane Function (UPF) — to run as software containers on commodity hardware. [[Edge Computing]] nodes co-located with or near base stations support [[MultiAccessEdgeComputing]], bringing compute close to devices for latency-sensitive [[5G Connectivity]] services.

- ### Relationships
  - 5G Networks enable [[5G Connectivity]] as their primary service, enable [[MultiAccessEdgeComputing]] through edge node integration, and underpin [[IoT Infrastructure]] at device-dense scale. They use [[Network Function Virtualization]] for the cloud-native core, rely on [[Network Architecture]] frameworks defined by [[3GPP]], and employ [[Edge Computing]] for latency optimisation. 5G Networks are closely related to [[Network Infrastructure]] investment trends and anticipate evolution towards [[6G Network Slice]] architectures.

- ### Content
  - The transition from 4G LTE to 5G networks was motivated by three converging forces: spectrum scarcity in congested 4G bands, the need for deterministic low-latency services for industrial IoT and autonomous systems, and the anticipated explosion of connected devices. First commercial 5G networks launched in South Korea and the USA in 2019, with rapid rollout across major markets through 2020–2022. By end of 2023, 5G network subscriptions exceeded 1.4 billion globally (GSMA data), spanning over 100 countries.

  - The 5G network architecture is a departure from 4G's monolithic evolved packet core. The 5G Core adopts a microservices design: network functions are independently deployable software units communicating over a service-based interface using HTTP/2 and JSON. This enables cloud-native deployment on Kubernetes clusters, independent scaling of control-plane and user-plane functions, and separation of the user plane (data forwarding) from the control plane (signalling). The UPF can be deployed at the network edge close to base stations, reducing round-trip latency for edge-cached content and local breakout applications.

  - Network slicing is a defining capability of 5G networks. A physical 5G network can be divided into multiple logically isolated slices, each with its own QoS parameters, security domains, and resource allocations. A factory operator can purchase an URLLC slice with guaranteed 1 ms latency for machine control, while consumer devices on the same physical infrastructure use an eMBB slice for video streaming. Open RAN (O-RAN Alliance specifications) introduces disaggregation of the base station hardware and software, enabling multi-vendor interoperability and programmable RAN control through standardised interfaces.

  - In 2024–2025, 5G network deployments are deepening: operators are densifying small-cell grids for coverage and capacity, migrating to standalone architectures to unlock network slicing and edge services, and beginning Release 18 (5G-Advanced) feature rollouts. Private 5G networks are proliferating across manufacturing campuses, ports, and airports for precision connectivity. AI-driven network management — dynamic spectrum allocation, predictive interference mitigation, and energy-proportional operation — is entering commercial deployment, and the standardisation community is actively designing the evolution path toward 6G by 2030.

