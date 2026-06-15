public:: true

# Local Area Network

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:local-area-network",
  "@type": "Page",
  "title": "Local Area Network",
  "vc:slug": "local-area-network",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:local-area-network",
  "@type": "Class",
  "label": "Local Area Network",
  "definition": "A local area network (LAN) is a communications network that interconnects devices within a limited geographic area such as a building, campus, or data centre floor, typically under a single administrative domain. LANs provide high-bandwidth, low-latency connectivity enabling resource sharing, collaborative computing, and access to shared infrastructure services. Modern LANs are predominantly implemented using Ethernet (IEEE 802.3) and Wi-Fi (IEEE 802.11) technologies, with switching and VLAN segmentation providing logical isolation.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:infrastructure", "label": "Infrastructure"}],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"},
      {"@id": "urn:ngm:class:wide-area-network", "label": "Wide Area Network"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:resource-sharing", "label": "Resource Sharing"},
      {"@id": "urn:ngm:class:distributed-computing", "label": "Distributed Computing"},
      {"@id": "urn:ngm:class:network-attached-storage", "label": "Network Attached Storage"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:wide-area-network", "label": "Wide Area Network"},
      {"@id": "urn:ngm:class:internet", "label": "Internet"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:network-switch", "label": "Network Switch"},
      {"@id": "urn:ngm:class:wireless-access-point", "label": "Wireless Access Point"},
      {"@id": "urn:ngm:class:network-router", "label": "Network Router"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:ethernet", "label": "Ethernet"},
      {"@id": "urn:ngm:class:wi-fi", "label": "Wi-Fi"},
      {"@id": "urn:ngm:class:tcp-ip", "label": "TCP/IP"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ieee-802", "label": "IEEE 802"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:high-performance-computing", "label": "High Performance Computing"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:virtual-local-area-network", "label": "Virtual Local Area Network"},
      {"@id": "urn:ngm:class:software-defined-networking", "label": "Software-Defined Networking"},
      {"@id": "urn:ngm:class:network-security", "label": "Network Security"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:wide-area-network", "label": "Wide Area Network"},
      {"@id": "urn:ngm:class:metropolitan-area-network", "label": "Metropolitan Area Network"}
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Local Area Network]] (LAN) is a high-speed, geographically bounded network interconnecting computing devices within a single administrative domain.
  - Standardised under [[IEEE 802]], LANs use [[Ethernet]] for wired connectivity and [[Wi-Fi]] for wireless, with [[Network Switch]] hardware providing MAC-addressed frame forwarding.
  - LANs form the access layer of hierarchical network designs, bridging to [[Wide Area Network]] and [[Internet]] connectivity via routers and firewalls.

- ### Overview
  - LANs emerged from PARC's Ethernet experiments in the 1970s and became commercially dominant through the 1990s with 10/100 Mbps Fast Ethernet. Modern data-centre LANs run at 25/100/400 Gbps, while enterprise campus LANs combine 1/10 GbE wired and Wi-Fi 6/6E wireless infrastructure. [[Virtual Local Area Network]] (VLAN) segmentation provides logical isolation across shared physical infrastructure, and [[Software-Defined Networking]] overlays provide programmable control. LANs underpin [[Edge Computing]] deployments, [[Internet of Things]] device connectivity, and private [[High Performance Computing]] clusters.

- ### Key aspects
  - **Topology** — star topology with central switches; hierarchical core/distribution/access design in campuses.
  - **Addressing** — MAC addresses at Layer 2; IPv4/IPv6 at Layer 3 via [[TCP/IP]].
  - **Segmentation** — VLANs, subnets, and ACLs enforce security boundaries.
  - **Performance** — sub-millisecond latency within a LAN; deterministic with QoS for time-sensitive applications.
  - **Wireless integration** — Wi-Fi 6 (802.11ax) and 6E provide multi-Gbps wireless LAN access.

- ### Mechanisms
  - Devices connect to switches via ports; switches learn MAC→port mappings by inspecting frames and forward unicast traffic accordingly. Spanning Tree Protocol (STP/RSTP) prevents loops. DHCP servers assign IP configuration; DNS resolves names. VLANs use 802.1Q tagging to multiplex isolated broadcast domains over shared links.

- ### Applications
  - Enterprise office connectivity and shared printer/storage access.
  - Data-centre interconnect for compute and storage clusters.
  - Industrial automation and process-control networks (OT LANs).
  - Home networks providing broadband sharing and smart-device connectivity.
  - Campus wireless networks for mobile device access.

- ### Relationships
  - partOf:: [[Network Infrastructure]]
  - enables:: [[Resource Sharing]]
  - enables:: [[Distributed Computing]]
  - enables:: [[Network Attached Storage]]
  - bridgesTo:: [[Wide Area Network]]
  - bridgesTo:: [[Internet]]
  - hasPart:: [[Network Switch]]
  - hasPart:: [[Wireless Access Point]]
  - uses:: [[Ethernet]]
  - uses:: [[Wi-Fi]]
  - uses:: [[TCP/IP]]
  - standardizedBy:: [[IEEE 802]]
  - supports:: [[Edge Computing]]
  - supports:: [[Internet of Things]]
  - relatedTo:: [[Virtual Local Area Network]]
  - relatedTo:: [[Software-Defined Networking]]
  - contrastsWith:: [[Wide Area Network]]

- ### Provenance
  - updated:: 2026-06-15
