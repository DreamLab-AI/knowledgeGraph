---
okf_version: "0.2"
type: Class
title: Risk-Based Authentication
resource: urn:ngm:class:risk-based-authentication
domain: security
description: Risk-based authentication (RBA) is an adaptive security method that adjusts the strength of identity verification based on the assessed risk of a login attempt. It evaluates contextual signals such as device, location, network reputation, and behaviour to decide whether to allow access, require step-up factors, or block the request. RBA balances security and usability by escalating friction only w
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:authentication
relatedTo:
  - urn:ngm:class:trust-framework
  - urn:ngm:class:identity-provider
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Risk-Based Authentication

Risk-based authentication (RBA) is an adaptive security method that adjusts the strength of identity verification based on the assessed risk of a login attempt. It evaluates contextual signals such as device, location, network reputation, and behaviour to decide whether to allow access, require step-up factors, or block the request. RBA balances security and usability by escalating friction only when risk is elevated.
