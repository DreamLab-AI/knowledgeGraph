
A local area network (LAN) is a communications network that interconnects devices within a limited geographic area such as a building, campus, or data centre floor, typically under a single administrative domain. LANs provide high-bandwidth, low-latency connectivity enabling resource sharing, collaborative computing, and access to shared infrastructure services. Modern LANs are predominantly implemented using Ethernet (IEEE 802.3) and Wi-Fi (IEEE 802.11) technologies, with switching and VLAN segmentation providing logical isolation.

- ### Overview
  - LANs emerged from PARC's Ethernet experiments in the 1970s and became commercially dominant through the 1990s with 10/100 Mbps Fast Ethernet. Modern data-centre LANs run at 25/100/400 Gbps, while enterprise campus LANs combine 1/10 GbE wired and Wi-Fi 6/6E wireless infrastructure. [[Virtual Local Area Network]] (VLAN) segmentation provides logical isolation across shared physical infrastructure, and [[Software-Defined Networking]] overlays provide programmable control. LANs underpin [[Edge Computing]] deployments, [[Internet of Things]] device connectivity, and private [[High Performance Computing]] clusters.

- ### Key aspects
  - **Topology** — star topology with central switches; hierarchical core/distribution/access design in campuses.
  - **Addressing** — MAC addresses at Layer 2; IPv4/IPv6 at Layer 3 via [[TCP-IP]].
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

- ### Provenance

