TCP/IP is the layered suite of communication protocols that underpins the Internet, named after its two core members: the Transmission Control Protocol and the Internet Protocol. It organises networking into link, internet, transport, and application layers, providing addressing, routing, and reliable end-to-end byte streams over heterogeneous physical networks. Its packet-switched, best-effort design with end-to-end reliability above the network layer enabled global interoperability.

- TCP/IP is the layered [[Network Protocol]] suite that defines how the Internet addresses, routes, and reliably delivers data. It comprises a [[Transport Layer]], a [[Network Layer]], and an [[Application Layer]], and it is contrasted with the reference [[OSI Model]].

### Overview

- The suite splits networking responsibilities into layers so that each can evolve independently while presenting stable interfaces to its neighbours.
- The Internet Protocol provides connectionless, best-effort packet delivery and global addressing, while the Transmission Control Protocol adds reliability, ordering, and flow control on top.
- This division of labour, with intelligence pushed to the endpoints, is what made the Internet scalable and interoperable across diverse physical media.

### Mechanisms

- IP fragments data into packets, assigns source and destination addresses, and routes them hop-by-hop across the [[Network Layer]].
- TCP establishes connections, retransmits lost segments, and adapts sending rate via congestion control, exposing a reliable byte stream to applications.
- UDP offers a lightweight alternative without reliability, favoured by latency-sensitive traffic.
- Application protocols such as [[HTTP]] and [[DNS]] run atop the transport layer, while link-layer technologies carry packets over the wire.

### Applications

- Carrying virtually all Internet traffic, including web, email, streaming, and APIs.
- Underpinning [[REST API]] communication and service meshes.
- Enabling [[Edge Computing]] and distributed systems that span data centres.
- Network diagnostics and performance work centred on [[Latency]] and [[Bandwidth]].

### Provenance

