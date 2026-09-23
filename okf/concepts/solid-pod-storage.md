---
okf_version: "0.2"
type: Class
title: Solid Pod Storage
resource: urn:ngm:class:solid-pod-storage
domain: infrastructure
description: Solid Pod Storage refers to the personal online data stores used in the Solid project, a web specification initiated by Tim Berners-Lee for decentralising data ownership. A Pod is a user-controlled storage space that holds data as linked-data resources, with access governed by the user rather than the applications that consume it. Applications authenticate against a Pod and read or write data only
maturity: developing
quality: 0.6
is-a:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:distributed-systems-domain
requires:
  - urn:ngm:class:linked-data
  - urn:ngm:class:rdf
  - urn:ngm:class:webid-decentralised-identity-uri
enables:
  - urn:ngm:class:data-sovereignty
  - urn:ngm:class:decentralised-identity
bridgesTo:
  - urn:ngm:class:semantic-web-linked-data-standard
  - urn:ngm:class:self-sovereign-identity
---

# Solid Pod Storage

Solid Pod Storage refers to the personal online data stores used in the Solid project, a web specification initiated by Tim Berners-Lee for decentralising data ownership. A Pod is a user-controlled storage space that holds data as linked-data resources, with access governed by the user rather than the applications that consume it. Applications authenticate against a Pod and read or write data only with the owner's permission, separating data from the services built on top of it.
