---
okf_version: "0.2"
type: Class
title: Continuous Authentication
resource: urn:ngm:class:continuous-authentication
domain: security
description: Continuous authentication is an approach to identity verification that repeatedly re-validates a user's identity throughout a session, rather than relying solely on a single login event. It draws on signals such as behavioural biometrics, device posture, and network context to detect anomalies that might indicate session hijacking or credential theft. It is increasingly used alongside biometric au
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:authentication
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Continuous Authentication

Continuous authentication is an approach to identity verification that repeatedly re-validates a user's identity throughout a session, rather than relying solely on a single login event. It draws on signals such as behavioural biometrics, device posture, and network context to detect anomalies that might indicate session hijacking or credential theft. It is increasingly used alongside biometric authentication and identity providers to reduce the window of exposure after initial login.
