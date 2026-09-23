---
okf_version: "0.2"
type: Class
title: Synchronous Communication
resource: urn:ngm:class:synchronous-communication
domain: infrastructure
description: Synchronous communication is an interaction pattern in which participants exchange messages in real time, with sender and receiver engaged simultaneously and responses expected without significant delay. In collaboration it covers video conferencing, live chat and voice calls; in distributed systems it covers blocking request-response exchanges where a caller waits for a reply. It favours immediac
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:real-time-communication
hasPart:
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:instant-messaging
dependsOn:
  - urn:ngm:class:latency
  - urn:ngm:class:presence
implements:
  - urn:ngm:class:remote-procedure-call
  - urn:ngm:class:web-rtc
contrastsWith:
  - urn:ngm:class:asynchronous-communication
uses:
  - urn:ngm:class:communication-protocol
  - urn:ngm:class:message-passing
supports:
  - urn:ngm:class:remote-collaboration
  - urn:ngm:class:telepresence
partOf:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:collaboration
relatedTo:
  - urn:ngm:class:collaboration
  - urn:ngm:class:remote-collaboration
  - urn:ngm:class:web-rtc
---

# Synchronous Communication

Synchronous communication is an interaction pattern in which participants exchange messages in real time, with sender and receiver engaged simultaneously and responses expected without significant delay. In collaboration it covers video conferencing, live chat and voice calls; in distributed systems it covers blocking request-response exchanges where a caller waits for a reply. It favours immediacy and tight coordination at the cost of requiring co-presence and tolerance to latency.
