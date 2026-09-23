---
okf_version: "0.2"
type: Class
title: Identity and Access Management
resource: urn:ngm:class:identity-and-access-management
domain: infrastructure
description: Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how digital identities are created, authenticated, authorised, and managed throughout their lifecycle within and across organisational boundaries. IAM systems enforce the principle of least privilege by ensuring that subjects—users, applications, devices, and s
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:infra-security-and-identity
hasPart:
  - urn:ngm:class:authentication
  - urn:ngm:class:authorisation
  - urn:ngm:class:privileged-access-management
  - urn:ngm:class:directory-service
  - urn:ngm:class:identity-governance-and-administration
  - urn:ngm:class:directory-service
requires:
  - urn:ngm:class:cryptography
  - urn:ngm:class:digital-certificate
  - urn:ngm:class:digital-certificate
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:single-sign-on
  - urn:ngm:class:least-privilege
  - urn:ngm:class:audit-and-compliance
implements:
  - urn:ngm:class:role-based-access-control
  - urn:ngm:class:attribute-based-access-control
contrastsWith:
  - urn:ngm:class:network-access-control
  - urn:ngm:class:perimeter-security
bridgesTo:
  - urn:ngm:class:self-sovereign-identity
  - urn:ngm:class:decentralised-identity
uses:
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:open-id-connect
  - urn:ngm:class:saml
  - urn:ngm:class:ldap
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:cryptographic-infrastructure
standardizedBy:
  - urn:ngm:class:iso-iec-27001
  - urn:ngm:class:nist-sp-800-53
  - urn:ngm:class:scim
relatedTo:
  - urn:ngm:class:identity-management
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:data-governance
---

# Identity and Access Management

Identity and Access Management (IAM) is a security discipline comprising the frameworks, policies, technologies, and processes that govern how digital identities are created, authenticated, authorised, and managed throughout their lifecycle within and across organisational boundaries. IAM systems enforce the principle of least privilege by ensuring that subjects—users, applications, devices, and service accounts—can access only the resources required for their legitimate purpose at the appropriate time. The discipline spans directory services, multi-factor authentication, role-based and attribute-based access control, privileged access management, identity governance and administration, and federated identity protocols that extend trust across cloud and partner environments. IAM is a foundational control domain within information security frameworks such as ISO/IEC 27001, NIST SP 800-53, and Zero Trust architecture models.
