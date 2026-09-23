---
okf_version: "0.2"
type: Class
title: User Authentication
resource: urn:ngm:class:user-authentication
domain: security
description: "User authentication is the process of verifying that a person claiming a digital identity is who they assert to be, by validating one or more authentication factors: something they know (password, PIN), something they have (hardware token, mobile device), or something they are (biometric). It is the gateway control between unauthenticated network access and authorised use of a system or resource, "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:authentication
enables:
  - urn:ngm:class:access-control
  - urn:ngm:class:identity-and-access-management
uses:
  - urn:ngm:class:fido2
  - urn:ngm:class:oauth-2-0
  - urn:ngm:class:web-authn
supports:
  - urn:ngm:class:single-sign-on
relatedTo:
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:passwordless-authentication
  - urn:ngm:class:identity-verification
---

# User Authentication

User authentication is the process of verifying that a person claiming a digital identity is who they assert to be, by validating one or more authentication factors: something they know (password, PIN), something they have (hardware token, mobile device), or something they are (biometric). It is the gateway control between unauthenticated network access and authorised use of a system or resource, and its assurance level — defined by standards such as NIST SP 800-63 — must be calibrated to the sensitivity of protected resources. Modern implementations favour phishing-resistant factors (passkeys, hardware security keys) over knowledge-based authentication.
