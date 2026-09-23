---
okf_version: "0.2"
type: Class
title: Jitter
resource: urn:ngm:class:jitter
domain: infrastructure
description: Jitter is the variation in a signal's timing from its ideal or expected schedule — in packet networks, the variability of one-way delay between successive packets of a flow (packet delay variation, RFC 3393/5481), and in digital electronics, the deviation of clock edges from their nominal instants. Where latency measures how late data arrives, jitter measures how inconsistently it arrives; it is c
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:network-performance-metrics
contrastsWith:
  - urn:ngm:class:latency
relatedTo:
  - urn:ngm:class:propagation-delay
  - urn:ngm:class:quality-of-service
  - urn:ngm:class:real-time-communication
---

# Jitter

Jitter is the variation in a signal's timing from its ideal or expected schedule — in packet networks, the variability of one-way delay between successive packets of a flow (packet delay variation, RFC 3393/5481), and in digital electronics, the deviation of clock edges from their nominal instants. Where latency measures how late data arrives, jitter measures how inconsistently it arrives; it is caused by queueing, scheduling, and route changes, degrades real-time audio, video, and control traffic, and is absorbed at receivers by de-jitter buffers at the price of added delay.
