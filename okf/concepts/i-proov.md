---
okf_version: "0.2"
type: Class
title: iProov
resource: urn:ngm:class:i-proov
domain: security
description: iProov is a British biometric technology company founded in 2011 that specialises in remote face verification and liveness detection for digital identity assurance. Its core technology, Genuine Presence Assurance, uses controlled illumination sequences to verify that a real, live person is present during an online authentication event, distinguishing genuine users from spoofing attacks using photo
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:biometric-authentication
hasPart:
  - urn:ngm:class:genuine-presence-assurance
  - urn:ngm:class:flashmark
requires:
  - urn:ngm:class:facial-recognition
  - urn:ngm:class:liveness-detection
  - urn:ngm:class:camera-hardware
enables:
  - urn:ngm:class:identity-verification-system
  - urn:ngm:class:know-your-customer
  - urn:ngm:class:digital-onboarding
  - urn:ngm:class:remote-authentication
contrastsWith:
  - urn:ngm:class:onfido
  - urn:ngm:class:jumio
  - urn:ngm:class:face-id
bridgesTo:
  - urn:ngm:class:deepfake-detection
  - urn:ngm:class:presentation-attack-detection
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:anti-money-laundering
  - urn:ngm:class:digital-wallet
  - urn:ngm:class:electronic-identity
partOf:
  - urn:ngm:class:identity-orchestration
relatedTo:
  - urn:ngm:class:gdpr
  - urn:ngm:class:eidas-regulation
  - urn:ngm:class:iso-30107
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# iProov

iProov is a British biometric technology company founded in 2011 that specialises in remote face verification and liveness detection for digital identity assurance. Its core technology, Genuine Presence Assurance, uses controlled illumination sequences to verify that a real, live person is present during an online authentication event, distinguishing genuine users from spoofing attacks using photographs, videos, or synthetic deepfakes. iProov is deployed by governments, financial institutions, and healthcare providers to underpin Know Your Customer (KYC) onboarding, border control systems, and high-assurance remote authentication. The platform integrates with broader identity document verification and identity orchestration frameworks, providing a biometric binding layer within electronic identity (eID) and digital wallet schemes.
