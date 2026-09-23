---
okf_version: "0.2"
type: Class
title: Credential Store
resource: urn:ngm:class:credential-store
domain: security
description: A credential store is the component within an identity system that holds user identifiers, secrets, and account attributes used during authentication. Implemented as a directory, database, or secrets vault, it is queried by an identity provider to validate sign-in attempts and issue tokens. Its integrity and confidentiality are critical to the security of the surrounding identity infrastructure.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-security-and-identity
relatedTo:
  - urn:ngm:class:identity-provider
  - urn:ngm:class:authentication
---

# Credential Store

A credential store is the component within an identity system that holds user identifiers, secrets, and account attributes used during authentication. Implemented as a directory, database, or secrets vault, it is queried by an identity provider to validate sign-in attempts and issue tokens. Its integrity and confidentiality are critical to the security of the surrounding identity infrastructure.
