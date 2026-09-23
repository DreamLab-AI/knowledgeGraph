---
okf_version: "0.2"
type: Class
title: Session Manager
resource: urn:ngm:class:session-manager
domain: infrastructure
description: A Session Manager is a software component responsible for creating, maintaining, tracking, and terminating user or application sessions within a computing system, ensuring that stateful context is preserved across multiple interactions or network requests. It issues session tokens or identifiers, enforces timeout and expiry policies, replicates session state for high-availability scenarios, and in
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:middleware
enables:
  - urn:ngm:class:user-experience
  - urn:ngm:class:api-gateway
uses:
  - urn:ngm:class:authentication-service
  - urn:ngm:class:authentication
  - urn:ngm:class:state-management
  - urn:ngm:class:web-socket-protocol
relatedTo:
  - urn:ngm:class:state-machine
  - urn:ngm:class:distributed-system
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:data-persistence
  - urn:ngm:class:middleware-layer
---

# Session Manager

A Session Manager is a software component responsible for creating, maintaining, tracking, and terminating user or application sessions within a computing system, ensuring that stateful context is preserved across multiple interactions or network requests. It issues session tokens or identifiers, enforces timeout and expiry policies, replicates session state for high-availability scenarios, and integrates with authentication services to verify that sessions remain bound to authenticated principals. Session managers are critical security components: misconfigurations can lead to session fixation, hijacking, or replay attacks. In distributed architectures they must handle session affinity, cross-node replication, and graceful failover without exposing stale state.
