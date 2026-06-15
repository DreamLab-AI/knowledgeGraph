- ### Definition
  - The Internet Protocol (IP) is the principal network-layer protocol of the Internet protocol suite, responsible for addressing hosts and routing packets of data from a source to a destination across interconnected networks. It defines a best-effort, connectionless delivery service in which each datagram is forwarded independently using hierarchical addresses. IP provides the universal addressing and packet format on which higher-layer transport and application protocols depend.
  - Related concepts: [[Network Layer]] [[Packet Switching]] [[TCP]] [[Transport Layer]] [[Routing Protocol]]

- ### Overview
  - The Internet Protocol is the thin waist of the Internet architecture: a single, simple addressing and forwarding service over which an enormous diversity of link technologies below and applications above interoperate. Its connectionless, best-effort model pushes reliability and ordering to the transport layer, keeping the network core stateless and scalable.

- ### Mechanisms
  - Hierarchical addressing assigns each interface an IP address that encodes network and host parts for scalable routing.
  - Datagram forwarding moves each packet hop by hop based on its destination address and routers' forwarding tables.
  - Fragmentation and reassembly adapt datagrams to the maximum transmission unit of each underlying link.
  - IPv4 and IPv6 define the two deployed address formats, with IPv6 vastly expanding the address space.

- ### Applications
  - Universal addressing and packet delivery for all Internet communication.
  - Foundation for transport protocols such as TCP and UDP.
  - Interconnection of heterogeneous link-layer networks into a single internetwork.

- ### Relationships
  - implements:: [[Network Layer]]
  - implements:: [[Packet Switching]]
  - requires:: [[Routing Protocol]]
  - has-part:: [[IPv6]]
  - has-part:: [[DNS]]
  - enables:: [[TCP]]
  - enables:: [[UDP]]
  - enables:: [[TCP/IP]]
  - supports:: [[Transport Layer]]
  - supports:: [[Networking]]
  - depends-on:: [[Packet Switching]]
  - uses:: [[OSI Model]]
  - related-to:: [[Network Protocol]]
  - related-to:: [[Communication Protocol]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation