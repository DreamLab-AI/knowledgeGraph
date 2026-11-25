---
okf_version: "0.2"
type: Class
title: IoT Platform
resource: urn:ngm:class:iot-platform
domain: infrastructure
description: A managed software layer that connects fleets of physical devices to applications and analytics, providing device provisioning and identity, secure bidirectional messaging, telemetry ingestion, rule-based event processing, over-the-air updates, and digital twin state management, so that organisations can operate heterogeneous sensor and actuator networks at scale without building the connectivity,
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:cloud-computing
hasPart:
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:smart-home-automation
  - urn:ngm:class:digital-twin
dependsOn:
  - urn:ngm:class:edge-computing
uses:
  - urn:ngm:class:mqtt
  - urn:ngm:class:message-broker
  - urn:ngm:class:event-driven-architecture
partOf:
  - urn:ngm:class:internet-of-things
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# IoT Platform

A managed software layer that connects fleets of physical devices to applications and analytics, providing device provisioning and identity, secure bidirectional messaging, telemetry ingestion, rule-based event processing, over-the-air updates, and digital twin state management, so that organisations can operate heterogeneous sensor and actuator networks at scale without building the connectivity, security, and data-pipeline plumbing themselves.
