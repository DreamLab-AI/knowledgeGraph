---
okf_version: "0.2"
type: Class
title: Session Management
resource: urn:ngm:class:session-management
domain: infrastructure
description: Session management is the set of mechanisms by which a networked system creates, maintains, secures, and terminates bounded interaction contexts — called sessions — between a client and a server or distributed service. It encompasses token issuance and validation, state serialisation and synchronisation, session expiry and renewal, concurrent-session policy, and secure revocation. Session manageme
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:infra-security-and-identity
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-management
  - urn:ngm:class:token
  - urn:ngm:class:token
enables:
  - urn:ngm:class:persistent-state
  - urn:ngm:class:api
  - urn:ngm:class:multi-user-systems
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:api
  - urn:ngm:class:multi-user-systems
dependsOn:
  - urn:ngm:class:tls
  - urn:ngm:class:key-management
contrastsWith:
  - urn:ngm:class:stateless-architecture
  - urn:ngm:class:anonymous-access
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:json-data-interchange-format-web-token
  - urn:ngm:class:cache-layer
  - urn:ngm:class:cookie
  - urn:ngm:class:cache-layer
supports:
  - urn:ngm:class:access-control
  - urn:ngm:class:audit-logging
  - urn:ngm:class:compliance
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:oauth-2-0
---

# Session Management

Session management is the set of mechanisms by which a networked system creates, maintains, secures, and terminates bounded interaction contexts — called sessions — between a client and a server or distributed service. It encompasses token issuance and validation, state serialisation and synchronisation, session expiry and renewal, concurrent-session policy, and secure revocation. Session management bridges authentication (establishing identity) and authorisation (enforcing capability) by preserving verified context across otherwise stateless request–response cycles. It is a foundational layer for any multi-user application, from web platforms and APIs to real-time collaborative environments and spatial computing runtimes.
