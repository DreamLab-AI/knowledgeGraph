- ### Definition
  - [[Ipv6]] is the 128-bit-address generation of the [[Internet Protocol]], using [[IP Addressing]] and [[Network Protocol]] mechanisms over [[Packet Switching]] and [[TCP/IP]] to enable the [[Internet of Things]] and sustain internet growth.

- ### Overview
  - IPv6 was designed to address the central limitation of IPv4: the exhaustion of its 32-bit address space. Its 128-bit addresses provide a practically unlimited supply, restoring true end-to-end addressing.
  - Beyond addressing, IPv6 streamlines the packet header, mandates support for IPsec, and provides stateless address autoconfiguration so that devices can self-assign addresses without a configuration server.
  - Adoption has been gradual, with dual-stack and transition mechanisms allowing IPv6 and IPv4 to coexist; the proliferation of IoT devices accelerates the case for ubiquitous IPv6.

- ### Key aspects
  - Address space: 128-bit addresses eliminate scarcity and the need for pervasive network address translation.
  - Autoconfiguration: stateless address autoconfiguration lets hosts derive addresses from router advertisements.
  - Simplified header: a fixed-format base header with extension headers improves router efficiency.
  - Transition: dual-stack operation and tunnelling bridge the IPv4-to-IPv6 migration.

- ### Applications
  - Addressing the vast device population of the Internet of Things.
  - Restoring end-to-end connectivity for peer-to-peer and real-time applications.
  - Underpinning next-generation mobile and broadband networks.

- ### Relationships
  - hasPart:: [[IP Addressing]]
  - hasPart:: [[Network Protocol]]
  - requires:: [[Routing Protocol]]
  - requires:: [[Packet Switching]]
  - uses:: [[TCP/IP]]
  - uses:: [[DNS]]
  - enables:: [[Internet of Things]]
  - enables:: [[Edge Computing]]
  - supports:: [[Broadband Connectivity]]
  - supports:: [[Network Infrastructure]]
  - implements:: [[Internet Protocol]]
  - contrastsWith:: [[Network Topology]]
  - relatedTo:: [[Thread Protocol]]
  - partOf:: [[Internet Protocol]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation