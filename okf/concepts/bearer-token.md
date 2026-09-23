---
okf_version: "0.2"
type: Class
title: Bearer Token
resource: urn:ngm:class:bearer-token
domain: security
description: A bearer token is a security credential that grants access to a protected resource to any party that presents it, without requiring the holder to prove possession of an associated cryptographic key. Commonly issued by authorisation servers and transmitted in an HTTP Authorization header, it is simple to use but must be protected in transit and at rest because anyone who obtains it can use it. Bear
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:token
requires:
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:api
dependsOn:
  - urn:ngm:class:authorization
implements:
  - urn:ngm:class:authorization
contrastsWith:
  - urn:ngm:class:cryptography
bridgesTo:
  - urn:ngm:class:identity
uses:
  - urn:ngm:class:oauth
  - urn:ngm:class:tls
supports:
  - urn:ngm:class:authentication
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:token
  - urn:ngm:class:oauth
  - urn:ngm:class:authentication
  - urn:ngm:class:identity
---

# Bearer Token

A bearer token is a security credential that grants access to a protected resource to any party that presents it, without requiring the holder to prove possession of an associated cryptographic key. Commonly issued by authorisation servers and transmitted in an HTTP Authorization header, it is simple to use but must be protected in transit and at rest because anyone who obtains it can use it. Bearer tokens are central to modern API authorisation flows such as OAuth.
