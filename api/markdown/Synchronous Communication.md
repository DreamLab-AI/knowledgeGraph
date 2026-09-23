
Synchronous communication is an interaction pattern in which participants exchange messages in real time, with sender and receiver engaged simultaneously and responses expected without significant delay. In collaboration it covers video conferencing, live chat and voice calls; in distributed systems it covers blocking request-response exchanges where a caller waits for a reply. It favours immediacy and tight coordination at the cost of requiring co-presence and tolerance to latency.

- ### Overview
  - In synchronous exchange a participant sends a message and expects a near-immediate response, requiring all parties to be available at once.
  - In distributed systems the analogous pattern is a blocking [[Remote Procedure Call]] where the caller waits for the result.
  - The mode is sensitive to [[Latency]]; high delay degrades the experience and can make real-time coordination impractical.

- ### Key aspects
  - Co-presence: parties active at the same time.
  - Immediate feedback loops and tight turn-taking.
  - Sensitivity to latency and jitter in the transport.
  - Ephemerality unless the session is explicitly recorded.

- ### Applications
  - Live meetings via [[Video Conferencing]] and [[Telepresence]].
  - Real-time text exchange via [[Instant Messaging]].
  - Browser-based audio and video using [[WebRTC]].
  - Blocking service calls implemented over [[Remote Procedure Call]].

- ### Provenance

