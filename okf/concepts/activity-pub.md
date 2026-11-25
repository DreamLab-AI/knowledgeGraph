---
okf_version: "0.2"
type: Class
title: ActivityPub
resource: urn:ngm:class:activity-pub
domain: distributed-systems
description: "ActivityPub is a W3C-standardised decentralised social networking protocol that defines two layers: a server-to-server federation protocol enabling independent server instances to share content with one another, and a client-to-server protocol allowing applications to interact with a user's social data. Based on the ActivityStreams 2.0 vocabulary and JSON-LD serialisation, it enables interoperable"
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-protocol
requires:
  - urn:ngm:class:transport-protocol
enables:
  - urn:ngm:class:federated-social-networks
  - urn:ngm:class:decentralised-web
  - urn:ngm:class:federation
  - urn:ngm:class:content-moderation
implements:
  - urn:ngm:class:web-standard
  - urn:ngm:class:interoperability-protocol
contrastsWith:
  - urn:ngm:class:at-protocol
bridgesTo:
  - urn:ngm:class:decentralised-identity
  - urn:ngm:class:ipfs
uses:
  - urn:ngm:class:json-data-interchange-format-ld
  - urn:ngm:class:linked-data
  - urn:ngm:class:digital-signatures
standardizedBy:
  - urn:ngm:class:world-wide-web-consortium
relatedTo:
  - urn:ngm:class:semantic-web
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# ActivityPub

ActivityPub is a W3C-standardised decentralised social networking protocol that defines two layers: a server-to-server federation protocol enabling independent server instances to share content with one another, and a client-to-server protocol allowing applications to interact with a user's social data. Based on the ActivityStreams 2.0 vocabulary and JSON-LD serialisation, it enables interoperable federated social networks where users on different server instances can follow, reply to, and interact with each other across instance boundaries.
