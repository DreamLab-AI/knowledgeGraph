---
okf_version: "0.2"
type: Class
title: Hateoas
resource: urn:ngm:class:hateoas
domain: infrastructure
description: HATEOAS, hypermedia as the engine of application state, is the REST constraint requiring that a client interact with an application entirely through hypermedia links and controls supplied dynamically by the server in its responses. Rather than hard-coding endpoint structures, the client discovers available actions and transitions at runtime by following links the server provides, mirroring how a b
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:rest
hasPart:
  - urn:ngm:class:http
requires:
  - urn:ngm:class:client-server-architecture
enables:
  - urn:ngm:class:interoperability
dependsOn:
  - urn:ngm:class:web-standards
implements:
  - urn:ngm:class:rest
bridgesTo:
  - urn:ngm:class:client-server-architecture
uses:
  - urn:ngm:class:http
supports:
  - urn:ngm:class:api-design
  - urn:ngm:class:interoperability
partOf:
  - urn:ngm:class:rest
relatedTo:
  - urn:ngm:class:api-design
  - urn:ngm:class:web-standards
  - urn:ngm:class:http
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Hateoas

HATEOAS, hypermedia as the engine of application state, is the REST constraint requiring that a client interact with an application entirely through hypermedia links and controls supplied dynamically by the server in its responses. Rather than hard-coding endpoint structures, the client discovers available actions and transitions at runtime by following links the server provides, mirroring how a browser navigates the web. This constraint decouples clients from fixed URI schemes and is the distinguishing feature of a fully RESTful, self-describing API.
