---
okf_version: "0.2"
type: Class
title: Centralized Identity Provider
resource: urn:ngm:class:centralized-identity-provider
domain: security
description: An identity service in which a single organisation issues, stores and authenticates user credentials on behalf of relying parties. It contrasts with decentralised identity models where control rests with the user.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:identity-provider
requires:
  - urn:ngm:class:identity-management
enables:
  - urn:ngm:class:identity-verification-system
bridgesTo:
  - urn:ngm:class:decentralized-identifier
---

# Centralized Identity Provider

An identity service in which a single organisation issues, stores and authenticates user credentials on behalf of relying parties. It contrasts with decentralised identity models where control rests with the user.
