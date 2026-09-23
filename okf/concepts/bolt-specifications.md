---
okf_version: "0.2"
type: Class
title: BOLT Specifications
resource: urn:ngm:class:bolt-specifications
domain: blockchain
description: The BOLT (Basis of Lightning Technology) specifications are the open, community-maintained set of documents defining the Lightning Network protocol, covering peer messaging, channel establishment and closure, commitment transactions, onion-routed payments, and invoice formats. By specifying the wire protocol and behaviour precisely, BOLTs ensure that independently developed Lightning implementatio
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:technical-standard
enables:
  - urn:ngm:class:interoperability
uses:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:lightning-network
  - urn:ngm:class:bitcoin-proof-of-work-protocol
---

# BOLT Specifications

The BOLT (Basis of Lightning Technology) specifications are the open, community-maintained set of documents defining the Lightning Network protocol, covering peer messaging, channel establishment and closure, commitment transactions, onion-routed payments, and invoice formats. By specifying the wire protocol and behaviour precisely, BOLTs ensure that independently developed Lightning implementations interoperate on a single payment network layered atop Bitcoin. They are the normative reference that makes the Lightning Network a multi-implementation open standard rather than a single product.
