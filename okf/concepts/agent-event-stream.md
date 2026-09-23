---
okf_version: "0.2"
type: Class
title: Agent Event Stream
resource: urn:ngm:class:agent-event-stream
domain: artificial-intelligence
description: A real-time telemetry stream (surface S6) that emits ActivityStream|ActivityStreams-based JSON-LD events for agent lifecycle events (birth, startup, activity, completion, error, termination) via WebSocket, Nostr relay, or message queue, enabling external monitoring systems, dashboards, and or...
maturity: established
quality: 0.85
is-a:
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:event-emission
  - urn:ngm:class:real-time-streaming
  - urn:ngm:class:event-subscription
  - urn:ngm:class:event-filtering
  - urn:ngm:class:event-indexing
requires:
  - urn:ngm:class:json-data-interchange-format-ld-1-1
  - urn:ngm:class:web-socket
  - urn:ngm:class:web-socket
  - urn:ngm:class:activitystreams-vocabulary
  - urn:ngm:class:event-schemas
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:real-time-monitoring
  - urn:ngm:class:fleet-observability
  - urn:ngm:class:work-tracking
  - urn:ngm:class:automated-alerting
implements:
  - urn:ngm:class:json-data-interchange-format-ld-1-1
  - urn:ngm:class:activitystreams-2-0
  - urn:ngm:class:w3c-event-streams
bridgesTo:
  - urn:ngm:class:monitoring-system
  - urn:ngm:class:orchestration-system
  - urn:ngm:class:data-analytics-platform
---

# Agent Event Stream

A real-time telemetry stream (surface S6) that emits ActivityStream|ActivityStreams-based JSON-LD events for agent lifecycle events (birth, startup, activity, completion, error, termination) via WebSocket, Nostr relay, or message queue, enabling external monitoring systems, dashboards, and or...
