---
okf_version: "0.2"
type: Class
title: Api Key Authentication
resource: urn:ngm:class:api-key-authentication
domain: blockchain
description: API key authentication is a simple scheme in which a client includes a static, secret key with each request to identify and authenticate itself to an API. The server checks the key against issued keys to grant or deny access and to attribute usage and rate limits. Although easy to adopt, it offers coarse-grained control and weaker security than token-based or signature-based schemes because the lo
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:authentication
requires:
  - urn:ngm:class:encryption
enables:
  - urn:ngm:class:api
dependsOn:
  - urn:ngm:class:authentication
implements:
  - urn:ngm:class:authentication
contrastsWith:
  - urn:ngm:class:bearer-token
  - urn:ngm:class:mutual-tls
bridgesTo:
  - urn:ngm:class:identity-provider
uses:
  - urn:ngm:class:token
supports:
  - urn:ngm:class:authorization
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:oauth
  - urn:ngm:class:token
  - urn:ngm:class:api
  - urn:ngm:class:authorization
---

# Api Key Authentication

API key authentication is a simple scheme in which a client includes a static, secret key with each request to identify and authenticate itself to an API. The server checks the key against issued keys to grant or deny access and to attribute usage and rate limits. Although easy to adopt, it offers coarse-grained control and weaker security than token-based or signature-based schemes because the long-lived key alone confers access.
