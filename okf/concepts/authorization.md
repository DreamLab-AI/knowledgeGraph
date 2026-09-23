---
okf_version: "0.2"
type: Class
title: Authorization
resource: urn:ngm:class:authorization
domain: security
description: The security process that determines what actions an authenticated principal is permitted to perform on specific resources within a system. Authorization evaluates the subject's identity, role, attributes, and contextual factors against a policy to produce an access decision, operating as a distinct layer from authentication and separate from audit.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:access-control
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-and-access-management
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:compliance
uses:
  - urn:ngm:class:policy-decision-point
  - urn:ngm:class:role-based-access-control
relatedTo:
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:audit
---

# Authorization

The security process that determines what actions an authenticated principal is permitted to perform on specific resources within a system. Authorization evaluates the subject's identity, role, attributes, and contextual factors against a policy to produce an access decision, operating as a distinct layer from authentication and separate from audit.
