Full-duplex communication is a mode of data exchange in which both endpoints can transmit and receive simultaneously over a single connection. It contrasts with half-duplex, where only one side may send at a time. Full-duplex channels enable low-latency, bidirectional interaction and are central to technologies such as web sockets and real-time messaging.

### Overview

- In half-duplex links a side must finish sending before the other can reply, adding latency and limiting interactivity.
- Full-duplex channels remove that turn-taking constraint, allowing continuous two-way data flow.
- Modern web sockets establish a persistent full-duplex channel after an initial handshake, typically over [[Transmission Control Protocol]].
- This mode is essential where both peers must push data spontaneously rather than only respond.

### Mechanisms

- A persistent connection is opened and kept alive for the session's duration.
- Each direction has an independent logical stream so sends and receives do not block one another.
- Framing delimits discrete messages within the continuous byte stream.
- Underlying reliable transport ensures messages arrive intact in both directions.

### Key aspects

- Simultaneity: sending and receiving overlap freely.
- Persistence: the channel remains open across many messages.
- Low latency: no per-message connection setup is required.
- Symmetry: both peers can initiate communication at any time.

### Applications

- Web socket-based live updates and chat.
- Multiplayer and [[Real-Time Communication]] in collaborative tools.
- Streaming telemetry and push notifications.
- Interactive control channels for remote devices.

### Provenance

