Packet switching is a method of data transmission in which messages are divided into discrete packets that are routed independently across a shared network and reassembled at the destination. Each packet carries addressing information allowing intermediate nodes to forward it along varying paths, making efficient use of shared links. It is the foundational technique of the internet, contrasting with circuit switching that dedicates a fixed path for a session.

### Overview

- Packet switching breaks a message into small, independently addressed packets that traverse a shared network rather than reserving a dedicated circuit.
- Each intermediate node inspects a packet's destination address and forwards it on, so different packets of one message may follow different paths.
- At the destination, packets are reassembled in order, with protocols handling loss, duplication and reordering.

### Mechanisms

- Messages are segmented into packets, each prefixed with addressing and control headers.
- Routers forward packets hop by hop using routing tables and forwarding decisions.
- Store-and-forward buffering lets nodes absorb bursts and select alternative paths.
- Transport protocols reorder, acknowledge and retransmit packets to provide reliable delivery.

### Applications

- The internet and all IP-based communication.
- Voice-over-IP and real-time media carried as datagrams.
- Mobile data networks multiplexing many users over shared spectrum.
- Data-centre fabrics moving traffic between servers and storage.

### Provenance

