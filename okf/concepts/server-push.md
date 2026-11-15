---
okf_version: "0.2"
type: Class
title: Server Push
resource: urn:ngm:class:server-push
domain: infrastructure
description: Server push is an HTTP/2 mechanism that allows a server to proactively send resources to a client before the client explicitly requests them, anticipating what a page will need next. It reduces round-trip latency by eliminating the request phase for predictable secondary resources such as stylesheets or scripts. The related technique of Server-Sent Events uses a similar unidirectional push model o
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:http2
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Server Push

Server push is an HTTP/2 mechanism that allows a server to proactively send resources to a client before the client explicitly requests them, anticipating what a page will need next. It reduces round-trip latency by eliminating the request phase for predictable secondary resources such as stylesheets or scripts. The related technique of Server-Sent Events uses a similar unidirectional push model over a persistent connection to stream updates to a client.
