
Real-time messaging is the exchange of messages between participants with sub-second latency, so that communication feels instantaneous and conversational. It relies on persistent, bidirectional transport such as WebSockets and on patterns like publish-subscribe to fan out events to many recipients. Real-time messaging underpins chat, presence, notifications and live collaboration across distributed systems.

- ### Overview
  - Where request-response communication is initiated by clients polling a server, real-time messaging keeps a persistent channel open so the server can push messages the instant they occur.
  - Achieving low, consistent latency at scale requires careful transport choice, connection management and message routing, often combining direct sockets for delivery with brokers for durability and fan-out.
  - The pattern is foundational to collaborative tools, where multiple users must see each other's actions, presence and messages without perceptible delay.
- ### Key aspects
  - Low latency: messages propagate in well under a second.
  - Bidirectional transport: persistent connections allow server-initiated pushes.
  - Fan-out: publish-subscribe distributes one message to many subscribers.
  - Ordering and delivery guarantees: at-least-once or exactly-once semantics where required.
  - Presence and typing indicators: ambient signals about participant state.
- ### Mechanisms
  - WebSocket or similar persistent transport for client connections.
  - Message brokers and queues for durability, buffering and routing.
  - Publish-subscribe channels mapping topics to interested subscribers.
  - Backpressure and reconnection handling to survive transient failures.
- ### Applications
  - Team chat and collaboration platforms.
  - Live notifications and activity feeds.
  - Multiplayer and co-editing presence.
  - Operational event streaming and alerting.
- ### Provenance

