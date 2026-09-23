---
okf_version: "0.2"
type: Class
title: Communication Protocols
resource: urn:ngm:class:communication-protocols
domain: infrastructure
description: Communication protocols are formal sets of rules, conventions, and standards that specify how data is formatted, transmitted, received, and acknowledged between two or more communicating entities, including computers, devices, and software systems. They define the syntax and semantics of messages, error detection and correction mechanisms, flow control, session management, and the sequencing of ex
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:network-protocol
hasPart:
  - urn:ngm:class:transport-layer
  - urn:ngm:class:application-layer
  - urn:ngm:class:data-link-layer
  - urn:ngm:class:session-management
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:data-encoding
enables:
  - urn:ngm:class:interoperability
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:real-time-communication
implements:
  - urn:ngm:class:osi-model
  - urn:ngm:class:tcp-ip
contrastsWith:
  - urn:ngm:class:proprietary-interface
bridgesTo:
  - urn:ngm:class:consensus-mechanism
  - urn:ngm:class:agent-communication-language
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:error-correction
  - urn:ngm:class:flow-control
  - urn:ngm:class:cryptographic-handshake
supports:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:edge-computing
standardizedBy:
  - urn:ngm:class:ietf
  - urn:ngm:class:ieee
  - urn:ngm:class:iso
relatedTo:
  - urn:ngm:class:http
  - urn:ngm:class:mqtt
  - urn:ngm:class:web-socket
  - urn:ngm:class:g-rpc
  - urn:ngm:class:message-queue
---

# Communication Protocols

Communication protocols are formal sets of rules, conventions, and standards that specify how data is formatted, transmitted, received, and acknowledged between two or more communicating entities, including computers, devices, and software systems. They define the syntax and semantics of messages, error detection and correction mechanisms, flow control, session management, and the sequencing of exchanges required to achieve reliable information transfer. Protocols operate across layered architectural models such as the OSI Reference Model and the TCP/IP suite, where each layer provides well-defined services to the layer above it while abstracting the implementation details below. Together, these layered agreements enable heterogeneous systems from different vendors and organisations to interoperate reliably across diverse network topologies.
