---
okf_version: "0.2"
type: Class
title: User Provisioning
resource: urn:ngm:class:user-provisioning
domain: security
description: User provisioning is the identity-and-access-management process of creating, configuring, maintaining and eventually removing user accounts and their associated access entitlements across systems and applications. It encompasses the full account lifecycle — from initial onboarding through entitlement changes to deprovisioning at offboarding — and is increasingly automated through directory service
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:identity-and-access-management
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:directory-service
enables:
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:role-based-access-control
dependsOn:
  - urn:ngm:class:identity-verification
contrastsWith:
  - urn:ngm:class:access-control
uses:
  - urn:ngm:class:scim
  - urn:ngm:class:directory-service
supports:
  - urn:ngm:class:access-control
  - urn:ngm:class:authorization
  - urn:ngm:class:compliance
standardizedBy:
  - urn:ngm:class:scim
partOf:
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:lifecycle-management
relatedTo:
  - urn:ngm:class:identity-federation
  - urn:ngm:class:audit-trail
---

# User Provisioning

User provisioning is the identity-and-access-management process of creating, configuring, maintaining and eventually removing user accounts and their associated access entitlements across systems and applications. It encompasses the full account lifecycle — from initial onboarding through entitlement changes to deprovisioning at offboarding — and is increasingly automated through directory services and standards such as SCIM. Effective provisioning ensures that each identity holds exactly the access required, supporting least-privilege and timely revocation.
