---
okf_version: "0.2"
type: Class
title: Push Notification
resource: urn:ngm:class:push-notification
domain: infrastructure
description: A push notification is a server-initiated message delivered to a client device or application without an explicit client request, enabling real-time alerts about events, state changes, or incoming communications. It relies on persistent connections or platform push services that maintain a delivery channel even when the application is backgrounded. It is a foundational primitive for presence, mess
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:communication-protocol
relatedTo:
  - urn:ngm:class:presence-indicator
  - urn:ngm:class:identity-provider
---

# Push Notification

A push notification is a server-initiated message delivered to a client device or application without an explicit client request, enabling real-time alerts about events, state changes, or incoming communications. It relies on persistent connections or platform push services that maintain a delivery channel even when the application is backgrounded. It is a foundational primitive for presence, messaging, and event-driven user engagement.
