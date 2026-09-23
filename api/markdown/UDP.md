
The User Datagram Protocol (UDP) is a connectionless transport-layer protocol that sends discrete datagrams without establishing a session, handshaking, ordering or guaranteed delivery. By omitting the reliability and congestion-control machinery of connection-oriented protocols, UDP achieves low latency and minimal overhead, leaving any required reliability to the application layer. It is the foundation for real-time and high-throughput workloads such as voice, video, gaming, DNS and modern transport protocols built atop it.

- ### Overview
	- UDP exposes a thin interface over IP: a source and destination port, length and checksum, then the payload.
	- It is described as fire-and-forget: there is no acknowledgement, retransmission or flow control built in.
	- Applications that need reliability implement it themselves, choosing exactly which guarantees to pay for.
	- Its simplicity makes it ideal for request-response queries and for streaming media where late data is useless.
- ### Key aspects
	- **Connectionless**: each datagram is independent, with no session state on either end.
	- **Low overhead**: an 8-byte header and no handshake minimise per-message cost and round trips.
	- **No congestion control**: applications or higher protocols must avoid overwhelming the network.
	- **Datagram boundaries**: message framing is preserved, unlike byte-stream transports.
- ### Applications
	- [[DNS]] lookups and other lightweight request-response queries.
	- Voice and video conferencing and live streaming, where [[Latency]] matters more than perfect reliability.
	- Online [[Gaming]] requiring rapid state updates.
	- Modern transports such as [[QUIC]] that build reliability and security on top of UDP.
- ### Provenance

