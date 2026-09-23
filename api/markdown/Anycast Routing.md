
Anycast routing is a network addressing and routing technique in which a single IP address is advertised from multiple geographically distributed locations, and packets are delivered to whichever instance is nearest by the routing metric. It uses standard internet routing to steer each client to the closest available node, reducing latency and distributing load without client awareness. Anycast underpins resilient DNS, content delivery, and DDoS mitigation by enabling automatic failover and traffic absorption across many sites.

- Anycast routing advertises a single IP address from many distributed locations so packets reach the nearest instance by the [[Routing]] metric.
- It uses standard internet [[Network Routing]] and [[IP Addressing]] to steer each client to the closest node, cutting [[Latency]] without client awareness.
- It underpins resilient [[DNS]], content delivery, and DDoS mitigation through automatic failover and traffic absorption.
- ### Overview
- With anycast, the network itself selects the destination, so the same service appears at one address yet is served from wherever is closest.
- This contrasts with unicast, where an address maps to a single host, and removes the need for clients to know about replication.
- The technique relies on geographic distribution of identical nodes and consistent route advertisement across them.
- Because traffic is dispersed across many sites, anycast naturally improves resilience and absorbs volumetric attacks.
- ### Mechanisms
- Route advertisement: the same prefix is announced from multiple points of presence.
- Nearest-node selection: routers deliver packets to the topologically closest instance.
- Health-aware withdrawal: failing nodes stop advertising so traffic reroutes automatically.
- Load distribution: clients are spread across sites according to routing topology.
- Attack absorption: distributed capacity dilutes denial-of-service traffic.
- ### Applications
- Authoritative and recursive DNS deployed at global scale.
- Content delivery networks serving users from the nearest edge.
- DDoS mitigation and scrubbing services absorbing distributed traffic.
- High-availability internet services requiring transparent failover.
- ### Provenance

