- ### Definition
  - Synchronous communication is real-time interaction where participants are engaged simultaneously, a mode of [[Real-Time Communication]].
  - It includes [[Video Conferencing]] and [[Instant Messaging]] and underpins live [[Collaboration]].
  - It contrasts with [[Asynchronous Communication]], trading flexibility for immediacy.

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

- ### Relationships
  - subClassOf:: [[Real-Time Communication]]
  - hasPart:: [[Video Conferencing]]
  - hasPart:: [[Instant Messaging]]
  - partOf:: [[Real-Time Communication]]
  - partOf:: [[Collaboration]]
  - contrastsWith:: [[Asynchronous Communication]]
  - implements:: [[Remote Procedure Call]]
  - implements:: [[WebRTC]]
  - uses:: [[Communication Protocol]]
  - uses:: [[Message Passing]]
  - dependsOn:: [[Latency]]
  - dependsOn:: [[Presence]]
  - supports:: [[Remote Collaboration]]
  - supports:: [[Telepresence]]
  - relatedTo:: [[Collaboration]]
  - relatedTo:: [[Remote Collaboration]]
  - relatedTo:: [[WebRTC]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation