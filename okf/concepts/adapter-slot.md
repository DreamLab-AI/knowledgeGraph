---
okf_version: "0.2"
type: Class
title: Adapter Slot
resource: urn:ngm:class:adapter-slot
domain: infrastructure
description: "A pluggable interface architecture (ADR-005) providing five standardised slots through which a VisionClaw Agentic Container|VisionClaw agent interacts with its environment: Solid Pod Storage|Pod (persistent storage), Agent Memory|Memory (episodic and semantic),"
maturity: established
quality: 0.89
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:pod-adapter
  - urn:ngm:class:memory-adapter
  - urn:ngm:class:event-adapter
  - urn:ngm:class:bead-adapter
  - urn:ngm:class:orchestrator-adapter
requires:
  - urn:ngm:class:manifest-declaration
  - urn:ngm:class:interface-specification
  - urn:ngm:class:runtime-initialization
enables:
  - urn:ngm:class:pluggable-storage
  - urn:ngm:class:pluggable-memory
  - urn:ngm:class:pluggable-telemetry
  - urn:ngm:class:pluggable-work-distribution
  - urn:ngm:class:deployment-flexibility
implements:
  - urn:ngm:class:strategy-pattern
  - urn:ngm:class:adapter-pattern
  - urn:ngm:class:dependency-injection
bridgesTo:
  - urn:ngm:class:containerisation
  - urn:ngm:class:microservices-architecture
---

# Adapter Slot

A pluggable interface architecture (ADR-005) providing five standardised slots through which a VisionClaw Agentic Container|VisionClaw agent interacts with its environment: Solid Pod Storage|Pod (persistent storage), Agent Memory|Memory (episodic and semantic),
