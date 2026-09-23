---
okf_version: "0.2"
type: Class
title: Reactive Systems
resource: urn:ngm:class:reactive-systems
domain: distributed-systems
description: Reactive systems are software systems designed around asynchronous message passing and event propagation, responding to events as they occur rather than following a fixed, sequential control flow. They are commonly built using an event-driven architecture, in which discrete events drive computation, and the publish-subscribe pattern, which decouples event producers from consumers. This design supp
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:event-driven-architecture
requires:
  - urn:ngm:class:publish-subscribe-pattern
---

# Reactive Systems

Reactive systems are software systems designed around asynchronous message passing and event propagation, responding to events as they occur rather than following a fixed, sequential control flow. They are commonly built using an event-driven architecture, in which discrete events drive computation, and the publish-subscribe pattern, which decouples event producers from consumers. This design supports responsiveness, resilience and elasticity under variable load.
