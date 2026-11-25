---
okf_version: "0.2"
type: Class
title: Remote Procedure Call
resource: urn:ngm:class:remote-procedure-call
domain: infrastructure
description: A remote procedure call (RPC) is a communication paradigm in which a program invokes a procedure that executes on a different address space, typically another machine on a network, as if it were a local call. The runtime marshals arguments, transmits them over a transport, executes the procedure remotely, and returns the result, hiding the underlying network mechanics from the caller. RPC underpin
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:protocol
  - urn:ngm:class:service-discovery
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:distributed-computing
implements:
  - urn:ngm:class:synchronous-communication
  - urn:ngm:class:message-passing
  - urn:ngm:class:message-passing
contrastsWith:
  - urn:ngm:class:asynchronous-communication
  - urn:ngm:class:rest-api
uses:
  - urn:ngm:class:http
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:api-design
  - urn:ngm:class:service-mesh
partOf:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:networking
relatedTo:
  - urn:ngm:class:distributed-protocol
  - urn:ngm:class:api
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Remote Procedure Call

A remote procedure call (RPC) is a communication paradigm in which a program invokes a procedure that executes on a different address space, typically another machine on a network, as if it were a local call. The runtime marshals arguments, transmits them over a transport, executes the procedure remotely, and returns the result, hiding the underlying network mechanics from the caller. RPC underpins distributed systems and service-to-service communication, with modern frameworks adding streaming, code generation, and efficient binary serialisation.
