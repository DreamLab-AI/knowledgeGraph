---
okf_version: "0.2"
type: Class
title: Real-Time Collaborative Editing
resource: urn:ngm:class:real-time-collaborative-editing
domain: infrastructure
description: Real-time collaborative editing is the capability for multiple users to concurrently modify a shared document or data structure and see each other's changes near-instantaneously with automatic conflict resolution. It depends on synchronisation algorithms such as operational transformation or conflict-free replicated data types to maintain a consistent merged state across replicas. It underpins sha
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:crdt
---

# Real-Time Collaborative Editing

Real-time collaborative editing is the capability for multiple users to concurrently modify a shared document or data structure and see each other's changes near-instantaneously with automatic conflict resolution. It depends on synchronisation algorithms such as operational transformation or conflict-free replicated data types to maintain a consistent merged state across replicas. It underpins shared documents, whiteboards, and collaborative virtual workspaces.
