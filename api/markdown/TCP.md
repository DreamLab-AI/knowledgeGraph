
The Transmission Control Protocol (TCP) is a connection-oriented transport-layer protocol that provides reliable, ordered, and error-checked delivery of a byte stream between applications over an IP network. It establishes connections via a three-way handshake, segments data, acknowledges receipt, retransmits lost segments, and applies flow and congestion control to share network capacity fairly. TCP is one of the core protocols of the Internet protocol suite, underlying most application protocols that demand reliability.

- ### Overview
  - TCP opens a connection with a three-way handshake, after which both endpoints can send data as a continuous stream segmented into packets.
  - Each segment carries a sequence number; the receiver acknowledges received bytes, letting the sender detect and retransmit losses.
  - Flow control via a sliding window prevents a fast sender from overwhelming a slow receiver, while congestion control adapts the sending rate to network conditions.
  - The connection is closed gracefully with a teardown exchange, releasing resources at both ends.
- ### Mechanisms
  - **Three-way handshake**: SYN, SYN-ACK, ACK establishes synchronised sequence numbers.
  - **Reliable delivery**: cumulative acknowledgements and timeouts trigger retransmission of lost segments.
  - **Ordering**: sequence numbers let the receiver reassemble the stream in order.
  - **Congestion control**: algorithms such as slow start and congestion avoidance adjust the window to avoid collapse.
- ### Applications
  - Web traffic carried over HTTP and HTTPS.
  - Email transport, file transfer, and remote shell sessions.
  - Any application requiring guaranteed, in-order delivery over IP.
  - Foundation for TLS-secured channels.
- ### Provenance

