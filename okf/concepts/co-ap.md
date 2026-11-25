---
okf_version: "0.2"
type: Class
title: CoAP
resource: urn:ngm:class:co-ap
domain: infrastructure
description: The Constrained Application Protocol (CoAP) is a specialised web transfer protocol defined in RFC 7252 (IETF, 2014) designed for use with constrained nodes and networks in the Internet of Things ecosystem. Modelled on HTTP's request-response semantics and RESTful resource model but optimised for low-power, lossy networks, CoAP uses UDP as its transport layer, features a compact binary header, supp
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:edge-computing
  - urn:ngm:class:building-automation
contrastsWith:
  - urn:ngm:class:mqtt
  - urn:ngm:class:http-protocol
uses:
  - urn:ngm:class:embedded-system
  - urn:ngm:class:rest-api
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# CoAP

The Constrained Application Protocol (CoAP) is a specialised web transfer protocol defined in RFC 7252 (IETF, 2014) designed for use with constrained nodes and networks in the Internet of Things ecosystem. Modelled on HTTP's request-response semantics and RESTful resource model but optimised for low-power, lossy networks, CoAP uses UDP as its transport layer, features a compact binary header, supports observe (pub/sub) extensions, and includes built-in mechanisms for reliability, multicast, and asynchronous communication. CoAP is a cornerstone protocol for IoT device management and machine-to-machine communication.
