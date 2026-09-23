---
okf_version: "0.2"
type: Class
title: Directory Service
resource: urn:ngm:class:directory-service
domain: infrastructure
description: A directory service is a specialised database that stores, organises, and provides access to information about the entities of a network — users, groups, devices, and services — optimised for high-volume reads and hierarchical lookup. Accessed through protocols such as LDAP, it underpins authentication, authorisation, and resource discovery in enterprise environments, with implementations includin
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:identity-provider
enables:
  - urn:ngm:class:federated-identity
uses:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:decentralized-identity
---

# Directory Service

A directory service is a specialised database that stores, organises, and provides access to information about the entities of a network — users, groups, devices, and services — optimised for high-volume reads and hierarchical lookup. Accessed through protocols such as LDAP, it underpins authentication, authorisation, and resource discovery in enterprise environments, with implementations including Active Directory and OpenLDAP. Directory services centralise identity data so that credentials and access policies can be managed once and enforced consistently across many systems.
