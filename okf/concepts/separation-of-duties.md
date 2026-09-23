---
okf_version: "0.2"
type: Class
title: Separation Of Duties
resource: urn:ngm:class:separation-of-duties
domain: security
description: Separation of duties is a control principle that divides a sensitive task among multiple people or roles so that no single individual can complete it alone, reducing the risk of fraud, error and abuse of privilege. It requires collusion to subvert controls and is foundational to access governance, financial controls and compliance regimes. It complements least-privilege and is operationalised thro
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:least-privilege
  - urn:ngm:class:audit-trail
requires:
  - urn:ngm:class:role-based-access-control
enables:
  - urn:ngm:class:fraud-prevention
  - urn:ngm:class:compliance
implements:
  - urn:ngm:class:access-control
contrastsWith:
  - urn:ngm:class:least-privilege
bridgesTo:
  - urn:ngm:class:compliance
uses:
  - urn:ngm:class:role-based-access-control
supports:
  - urn:ngm:class:identity-management
  - urn:ngm:class:governance
relatedTo:
  - urn:ngm:class:segregation-of-duties
  - urn:ngm:class:least-privilege
---

# Separation Of Duties

Separation of duties is a control principle that divides a sensitive task among multiple people or roles so that no single individual can complete it alone, reducing the risk of fraud, error and abuse of privilege. It requires collusion to subvert controls and is foundational to access governance, financial controls and compliance regimes. It complements least-privilege and is operationalised through role-based access control.
