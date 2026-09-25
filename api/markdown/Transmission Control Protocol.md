The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of byte streams between applications over an IP network. It establishes connections through a handshake and uses acknowledgements, retransmission, and flow and congestion control to ensure data arrives intact. TCP is the dominant reliable transport underlying most internet applications.

### Overview

- TCP turns the unreliable, best-effort packet delivery of IP into a dependable stream abstraction for applications.
- A connection is established through a three-way handshake before data flows, and torn down gracefully afterwards.
- Lost or corrupted segments are detected and retransmitted, and segments are reordered into the original sequence.
- Congestion and flow control adapt the sending rate to the network and the receiver's capacity.

### Mechanisms

- Sequence numbers and acknowledgements track which bytes have been received.
- Retransmission timers and fast retransmit recover lost data.
- [[Flow Control]] uses a receiver-advertised window to avoid overwhelming the destination.
- [[Congestion Control]] algorithms probe and back off to share network capacity fairly.

### Key aspects

- Reliability: every byte is delivered or the connection fails explicitly.
- Ordering: data is presented to the application in the order it was sent.
- Connection orientation: state is maintained for the duration of a session.
- Adaptivity: rate control responds to changing network conditions.

### Applications

- Carrying [[HTTP]] traffic for the web.
- Email, file transfer, and remote access protocols.
- Any [[Application Layer]] service needing reliable delivery.
- Tunnelling and overlay protocols built atop reliable streams.

### Provenance

