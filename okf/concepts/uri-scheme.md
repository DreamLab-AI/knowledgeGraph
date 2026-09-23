---
okf_version: "0.2"
type: Class
title: Uri Scheme
resource: urn:ngm:class:uri-scheme
domain: security
description: A URI scheme is the leading component of a Uniform Resource Identifier that names the namespace, protocol, or resolution mechanism by which the remainder of the identifier is to be interpreted, appearing before the colon delimiter (for example http, https, mailto, did, urn, or ipfs). Schemes are registered with IANA under provisional or permanent status and define the syntax and semantics of the s
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:protocol
enables:
  - urn:ngm:class:did
  - urn:ngm:class:verifiable-credentials
  - urn:ngm:class:authentication
implements:
  - urn:ngm:class:naming-scheme
  - urn:ngm:class:protocol
bridgesTo:
  - urn:ngm:class:did
uses:
  - urn:ngm:class:identifier
  - urn:ngm:class:standards
supports:
  - urn:ngm:class:did
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:did
relatedTo:
  - urn:ngm:class:web
  - urn:ngm:class:naming-scheme
---

# Uri Scheme

A URI scheme is the leading component of a Uniform Resource Identifier that names the namespace, protocol, or resolution mechanism by which the remainder of the identifier is to be interpreted, appearing before the colon delimiter (for example http, https, mailto, did, urn, or ipfs). Schemes are registered with IANA under provisional or permanent status and define the syntax and semantics of the scheme-specific part. Custom and decentralised schemes such as did: and ipfs: extend the URI model to identity and content-addressed systems, making the scheme a foundational element of how distributed resources are addressed and trusted.
