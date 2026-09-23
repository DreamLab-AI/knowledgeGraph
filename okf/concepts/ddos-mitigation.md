---
okf_version: "0.2"
type: Class
title: DDoS Mitigation
resource: urn:ngm:class:ddos-mitigation
domain: security
description: DDoS mitigation is the set of techniques and infrastructure used to detect and absorb distributed denial-of-service traffic so that a targeted service remains available to legitimate users. Approaches include traffic scrubbing, rate limiting, anycast-based load distribution, and edge filtering at content delivery networks positioned close to end users. Effective mitigation depends on capacity head
maturity: mature
quality: 0.55
is-a:
  - urn:ngm:class:network-security
partOf:
  - urn:ngm:class:network-security
---

# DDoS Mitigation

DDoS mitigation is the set of techniques and infrastructure used to detect and absorb distributed denial-of-service traffic so that a targeted service remains available to legitimate users. Approaches include traffic scrubbing, rate limiting, anycast-based load distribution, and edge filtering at content delivery networks positioned close to end users. Effective mitigation depends on capacity headroom large enough to absorb attack volumes while distinguishing malicious traffic from genuine demand spikes.
