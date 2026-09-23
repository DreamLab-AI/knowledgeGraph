---
okf_version: "0.2"
type: Class
title: Zero Trust Architecture
resource: urn:ngm:class:zero-trust-architecture
domain: security
description: "Zero Trust Architecture (ZTA) is a cybersecurity paradigm that abandons the notion of a trusted network perimeter and instead requires explicit, continuous verification of every principal — user, device, or service — for every request regardless of network origin. Grounded in least-privilege access, ZTA evaluates contextual signals including identity assertions, device health posture, behavioural "
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:cybersecurity
requires:
  - urn:ngm:class:authentication
  - urn:ngm:class:identity-and-access-management
  - urn:ngm:class:multi-factor-authentication
  - urn:ngm:class:device-attestation
enables:
  - urn:ngm:class:continuous-monitoring
  - urn:ngm:class:just-in-time-access
  - urn:ngm:class:least-privilege-access
implements:
  - urn:ngm:class:software-defined-perimeter
  - urn:ngm:class:secure-access-service-edge
contrastsWith:
  - urn:ngm:class:perimeter-security
  - urn:ngm:class:virtual-private-network
bridgesTo:
  - urn:ngm:class:threat-detection
  - urn:ngm:class:federated-identity
  - urn:ngm:class:threat-detection
uses:
  - urn:ngm:class:policy-engine
  - urn:ngm:class:access-control
  - urn:ngm:class:mutual-tls
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:micro-segmentation
supports:
  - urn:ngm:class:cloud-security
  - urn:ngm:class:privileged-access-management
standardizedBy:
  - urn:ngm:class:nist-sp-800-207
relatedTo:
  - urn:ngm:class:confidential-computing
  - urn:ngm:class:endpoint-detection-and-response
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:supply-chain-security
---

# Zero Trust Architecture

Zero Trust Architecture (ZTA) is a cybersecurity paradigm that abandons the notion of a trusted network perimeter and instead requires explicit, continuous verification of every principal — user, device, or service — for every request regardless of network origin. Grounded in least-privilege access, ZTA evaluates contextual signals including identity assertions, device health posture, behavioural risk, and data sensitivity at each access decision point, enforced by a Policy Decision Point and Policy Enforcement Point pair operating across micro-segmented environments. Formalised in NIST SP 800-207, ZTA has become the dominant enterprise security reference model in response to the dissolution of traditional perimeter boundaries by cloud-native, remote-work, and supply-chain threat vectors.
