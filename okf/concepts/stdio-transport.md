---
okf_version: "0.2"
type: Class
title: Stdio Transport
resource: urn:ngm:class:stdio-transport
domain: infrastructure
description: Stdio transport is a communication mechanism in which a client and server exchange messages over the standard input and standard output streams of a locally spawned process. It is one of the primary transports defined by the Model Context Protocol, where the host launches the server as a subprocess and frames JSON-RPC messages through stdin/stdout. It suits local, single-machine integrations becau
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:communication-protocol
relatedTo:
  - urn:ngm:class:model-context-protocol
  - urn:ngm:class:model-control-protocols-like-mcp
---

# Stdio Transport

Stdio transport is a communication mechanism in which a client and server exchange messages over the standard input and standard output streams of a locally spawned process. It is one of the primary transports defined by the Model Context Protocol, where the host launches the server as a subprocess and frames JSON-RPC messages through stdin/stdout. It suits local, single-machine integrations because it requires no network sockets and inherits the operating system's process isolation.
