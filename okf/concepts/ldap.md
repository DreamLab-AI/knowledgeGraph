---
okf_version: "0.2"
type: Class
title: LDAP
resource: urn:ngm:class:ldap
domain: infrastructure
description: The Lightweight Directory Access Protocol (LDAP) is an open, vendor-neutral application protocol for accessing and maintaining distributed directory information services over an IP network, standardised in RFC 4511 (2006) as a simplification of the X.500 Directory Access Protocol. LDAP organises directory entries in a hierarchical tree structure (Directory Information Tree, DIT) where entries cont
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:tcp-ip
  - urn:ngm:class:tls
enables:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-management
  - urn:ngm:class:access-control
  - urn:ngm:class:single-sign-on
contrastsWith:
  - urn:ngm:class:scim
  - urn:ngm:class:kerberos
bridgesTo:
  - urn:ngm:class:active-directory
  - urn:ngm:class:saml
  - urn:ngm:class:oauth-2-0
supports:
  - urn:ngm:class:enterprise-architecture
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:multi-factor-authentication
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:federated-identity
  - urn:ngm:class:authentication-standards
  - urn:ngm:class:directory-service
---

# LDAP

The Lightweight Directory Access Protocol (LDAP) is an open, vendor-neutral application protocol for accessing and maintaining distributed directory information services over an IP network, standardised in RFC 4511 (2006) as a simplification of the X.500 Directory Access Protocol. LDAP organises directory entries in a hierarchical tree structure (Directory Information Tree, DIT) where entries contain typed attribute-value pairs conforming to object class schemas, and supports operations for search, add, modify, delete, compare, and bind (authentication). It serves as the foundational protocol for enterprise identity management, enabling centralised authentication, authorisation, and user attribute storage across heterogeneous systems.
