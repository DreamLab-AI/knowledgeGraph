---
okf_version: "0.2"
type: Class
title: UDP
resource: urn:ngm:class:udp
domain: infrastructure
description: The User Datagram Protocol (UDP) is a connectionless transport-layer protocol that sends discrete datagrams without establishing a session, handshaking, ordering or guaranteed delivery. By omitting the reliability and congestion-control machinery of connection-oriented protocols, UDP achieves low latency and minimal overhead, leaving any required reliability to the application layer. It is the fou
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:transport-protocol
requires:
  - urn:ngm:class:internet-protocol
  - urn:ngm:class:packet-switching
enables:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:dns
contrastsWith:
  - urn:ngm:class:congestion-control
uses:
  - urn:ngm:class:packet-switching
supports:
  - urn:ngm:class:quic
  - urn:ngm:class:gaming
partOf:
  - urn:ngm:class:network-protocol
  - urn:ngm:class:internet-protocol
relatedTo:
  - urn:ngm:class:network-layer
  - urn:ngm:class:latency
  - urn:ngm:class:bandwidth
  - urn:ngm:class:http
---

# UDP

The User Datagram Protocol (UDP) is a connectionless transport-layer protocol that sends discrete datagrams without establishing a session, handshaking, ordering or guaranteed delivery. By omitting the reliability and congestion-control machinery of connection-oriented protocols, UDP achieves low latency and minimal overhead, leaving any required reliability to the application layer. It is the foundation for real-time and high-throughput workloads such as voice, video, gaming, DNS and modern transport protocols built atop it.
