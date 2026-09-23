---
okf_version: "0.2"
type: Class
title: Session Initiation Protocol
resource: urn:ngm:class:session-initiation-protocol
domain: infrastructure
description: The Session Initiation Protocol (SIP) is an application-layer signalling protocol used to establish, modify and terminate real-time communication sessions such as voice and video calls over IP networks. It handles user location, session setup negotiation and call control, delegating the actual media transport to companion protocols. SIP is text-based and request-response oriented, modelled on HTTP
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:communication-protocol
hasPart:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:network-protocol
enables:
  - urn:ngm:class:video-conferencing
dependsOn:
  - urn:ngm:class:infrastructure
implements:
  - urn:ngm:class:communication-protocol
contrastsWith:
  - urn:ngm:class:network-protocol
bridgesTo:
  - urn:ngm:class:real-time-communication
uses:
  - urn:ngm:class:network-protocol
supports:
  - urn:ngm:class:real-time-communication
standardizedBy:
  - urn:ngm:class:standards
partOf:
  - urn:ngm:class:real-time-communication
relatedTo:
  - urn:ngm:class:video-conferencing
  - urn:ngm:class:communication-protocol
---

# Session Initiation Protocol

The Session Initiation Protocol (SIP) is an application-layer signalling protocol used to establish, modify and terminate real-time communication sessions such as voice and video calls over IP networks. It handles user location, session setup negotiation and call control, delegating the actual media transport to companion protocols. SIP is text-based and request-response oriented, modelled on HTTP, and underpins much of modern internet telephony and unified communications.
