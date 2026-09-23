
IP addressing is the scheme by which every host and interface on an Internet Protocol network is assigned a numeric identifier used to locate and route datagrams to it. It encompasses the structure of IPv4 and IPv6 address spaces, the partition of addresses into network and host portions via subnet masks and prefixes, and the assignment mechanisms that allocate addresses to devices. Correct addressing is the precondition for routing decisions and end-to-end delivery across interconnected networks.

- ### Overview
  - An IP address is a fixed-length binary value: 32 bits in IPv4 (written as dotted decimal) and 128 bits in IPv6 (written as colon-separated hexadecimal groups).
  - The leading bits identify the network or subnet; the remaining bits identify the host within that network. The split is described by a subnet mask or a CIDR prefix length.
  - Classless Inter-Domain Routing (CIDR) replaced the legacy classful model, allowing arbitrary prefix lengths and more efficient allocation of the finite address space.
  - Addresses may be assigned statically by an administrator or dynamically via DHCP; IPv6 additionally supports stateless address autoconfiguration.
- ### Key aspects
  - Address space: IPv4 exhaustion drove adoption of network address translation and the much larger IPv6 space.
  - Hierarchy: prefix-based aggregation keeps routing tables compact across the global Internet.
  - Special ranges: private, loopback, link-local, and multicast ranges have reserved semantics.
  - Mapping: the address layer is decoupled from human-readable names resolved by the Domain Name System.
- ### Applications
  - Routing decisions at every hop are made by matching destination addresses against forwarding tables.
  - Host configuration, firewalling, and access control are expressed in terms of addresses and prefixes.
  - Service discovery and load balancing rely on stable, well-known address assignments.
- ### Provenance

