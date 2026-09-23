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
---

# Remote Procedure Call

A remote procedure call (RPC) is a communication paradigm in which a program invokes a procedure that executes on a different address space, typically another machine on a network, as if it were a local call. The runtime marshals arguments, transmits them over a transport, executes the procedure remotely, and returns the result, hiding the underlying network mechanics from the caller. RPC underpins distributed systems and service-to-service communication, with modern frameworks adding streaming, code generation, and efficient binary serialisation.
