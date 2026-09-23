---
okf_version: "0.2"
type: Class
title: Real Time Messaging
resource: urn:ngm:class:real-time-messaging
domain: distributed-collaboration
description: Real-time messaging is the exchange of messages between participants with sub-second latency, so that communication feels instantaneous and conversational. It relies on persistent, bidirectional transport such as WebSockets and on patterns like publish-subscribe to fan out events to many recipients. Real-time messaging underpins chat, presence, notifications and live collaboration across distribut
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:real-time-communication
hasPart:
  - urn:ngm:class:presence-awareness
  - urn:ngm:class:notification-system
enables:
  - urn:ngm:class:event-driven-architecture
dependsOn:
  - urn:ngm:class:event-streaming
implements:
  - urn:ngm:class:instant-messaging
  - urn:ngm:class:event-streaming
uses:
  - urn:ngm:class:web-socket
  - urn:ngm:class:message-queue
supports:
  - urn:ngm:class:slack
relatedTo:
  - urn:ngm:class:real-time-communication
  - urn:ngm:class:message-queue
  - urn:ngm:class:notification-system
---

# Real Time Messaging

Real-time messaging is the exchange of messages between participants with sub-second latency, so that communication feels instantaneous and conversational. It relies on persistent, bidirectional transport such as WebSockets and on patterns like publish-subscribe to fan out events to many recipients. Real-time messaging underpins chat, presence, notifications and live collaboration across distributed systems.
