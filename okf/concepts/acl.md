---
okf_version: "0.2"
type: Class
title: ACL
resource: urn:ngm:class:acl
domain: security
description: "An Access Control List (ACL) is a data structure attached to a resource — such as a file, directory, or network interface — that enumerates which subjects (users, groups, or processes) are permitted to perform which operations on that resource. Each entry in the list is called an Access Control Entry (ACE) and specifies a principal, a set of permissions (read, write, execute, delete), and whether "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:policy-enforcement
  - urn:ngm:class:zero-trust-architecture
contrastsWith:
  - urn:ngm:class:policy-enforcement-point
uses:
  - urn:ngm:class:encryption
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:access-control-system
  - urn:ngm:class:digital-identity
---

# ACL

An Access Control List (ACL) is a data structure attached to a resource — such as a file, directory, or network interface — that enumerates which subjects (users, groups, or processes) are permitted to perform which operations on that resource. Each entry in the list is called an Access Control Entry (ACE) and specifies a principal, a set of permissions (read, write, execute, delete), and whether those permissions are granted or denied. ACLs originated in file-system security (POSIX, NTFS) and were subsequently extended to networking, where routers and firewalls use IP-level ACLs to filter packets by source address, destination port, and protocol. In distributed and cloud environments ACLs underpin fine-grained authorisation that complements role-based and attribute-based access-control models.
