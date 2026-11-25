---
okf_version: "0.2"
type: Class
title: Credential Presentation
resource: urn:ngm:class:credential-presentation
domain: security
description: Credential presentation is the process by which a holder of a verifiable credential shares proof of that credential, or selected claims derived from it, with a verifying party in order to satisfy a request, typically as a signed verifiable presentation rather than the raw credential itself. It follows credential issuance in the standard verifiable-credential lifecycle of issuance, storage, present
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:credential-issuance
partOf:
  - urn:ngm:class:credential-issuance
relatedTo:
  - urn:ngm:class:credential-issuance
  - urn:ngm:class:didcomm
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Credential Presentation

Credential presentation is the process by which a holder of a verifiable credential shares proof of that credential, or selected claims derived from it, with a verifying party in order to satisfy a request, typically as a signed verifiable presentation rather than the raw credential itself. It follows credential issuance in the standard verifiable-credential lifecycle of issuance, storage, presentation and verification, and may use selective disclosure so the holder reveals only the attributes required rather than the full credential. Credential presentation protocols, such as those built on DIDComm or OpenID for Verifiable Presentations, define how the request, proof and response are exchanged between holder and verifier.
