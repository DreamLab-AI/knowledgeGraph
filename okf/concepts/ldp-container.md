---
okf_version: "0.2"
type: Class
title: LDP Container
resource: urn:ngm:class:ldp-container
domain: data
description: An LDP Container is a resource defined by the W3C Linked Data Platform specification that groups and manages other linked-data resources, exposing them through HTTP affordances for creation, retrieval, and deletion. Containers come in basic, direct, and indirect variants that differ in how membership triples are generated. They provide the hierarchical, REST-like structure that Solid pods and othe
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:data-management
relatedTo:
  - urn:ngm:class:solid-pod
  - urn:ngm:class:solid
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# LDP Container

An LDP Container is a resource defined by the W3C Linked Data Platform specification that groups and manages other linked-data resources, exposing them through HTTP affordances for creation, retrieval, and deletion. Containers come in basic, direct, and indirect variants that differ in how membership triples are generated. They provide the hierarchical, REST-like structure that Solid pods and other LDP servers use to organise data.
