---
okf_version: "0.2"
type: Class
title: Webhook
resource: urn:ngm:class:webhook
domain: infrastructure
description: A webhook is an event-driven integration mechanism in which a server sends an HTTP request to a pre-registered URL when a specified event occurs, pushing data to consumers instead of requiring them to poll. It enables loosely coupled, near-real-time communication between web services and is a standard pattern for notifications, CI triggers, and payment events. Reliability concerns are addressed th
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
relatedTo:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:presence-indicator
---

# Webhook

A webhook is an event-driven integration mechanism in which a server sends an HTTP request to a pre-registered URL when a specified event occurs, pushing data to consumers instead of requiring them to poll. It enables loosely coupled, near-real-time communication between web services and is a standard pattern for notifications, CI triggers, and payment events. Reliability concerns are addressed through retries, idempotency keys, and signature verification.
