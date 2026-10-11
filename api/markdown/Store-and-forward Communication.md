
Store-and-forward communication holds a message or data unit at an intermediate node until an onward link becomes available, then forwards it towards its destination.

In space networks this behaviour is useful when links are intermittent, delayed, asymmetric or temporarily unavailable. Delay-tolerant networking (DTN) is a broader network architecture for these conditions. Its Bundle Protocol (BP) provides a network-layer store-and-forward service above underlying links and can operate across heterogeneous networks through convergence-layer adapters. Thus store-and-forward is a mechanism used by DTN, but is not by itself synonymous with deploying DTN.[^1][^4]

A spacecraft recorder that queues instrument data for later downlink, or a relay that buffers traffic, may store and forward data without acting as a DTN router. A BP node forwards bundles according to network-layer procedures and endpoint addressing. Identify whether a description refers to mission data recording, link-layer buffering, or a BP-based network service.[^1][^2]

CCSDS describes DTN as suited to large or variable delays and interrupted connectivity; a Bundle Protocol agent can retain a bundle while waiting for the next-hop link. The specific links still use their own data-link and transport services. BP itself does not guarantee every end-to-end property: the cited CCSDS Bundle Protocol issue states that BP alone does not provide acknowledgement, retransmission or in-order delivery without omission or duplication. Reliability and ordering therefore depend on additional protocol functions where the application needs them.[^2][^3]

The CCSDS Bundle Protocol specification cited here is issue 1 from 2015, retained for its normative annex on delay-tolerant payload conditioning and its stated service limitations. It should not be mistaken for the latest protocol version or a requirement that every mission use DTN.[^3]

[^1]: https://ccsds.org/Pubs/130x0g4e1.pdf
[^2]: https://ccsds.org/Pubs/901x1m1.pdf
[^3]: https://ccsds.org/Pubs/734x2b1.pdf
[^4]: https://ccsds.org/

