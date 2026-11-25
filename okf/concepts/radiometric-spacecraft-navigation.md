---
okf_version: "0.2"
type: Class
title: Radiometric Spacecraft Navigation
resource: urn:ngm:class:radiometric-spacecraft-navigation
domain: space-science-and-systems
description: Radiometric spacecraft navigation uses radio-link observables to estimate a spacecraft trajectory. The principal deep-space measurements are range, Doppler and very-long-baseline angular data. Each is a scalar or small set of observables tied to a signal path, station geometry, frequency reference and epoch. Orbit determination combines them with a dynamical model; it does not read a full position
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-navigation
relatedTo:
  - urn:ngm:class:orbit-determination
  - urn:ngm:class:satellite-doppler-shift
  - urn:ngm:class:spacecraft-navigation
  - urn:ngm:class:spacecraft-ranging
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T09:03:18Z"}
---

# Radiometric Spacecraft Navigation

Radiometric spacecraft navigation uses radio-link observables to estimate a spacecraft trajectory. The principal deep-space measurements are range, Doppler and very-long-baseline angular data. Each is a scalar or small set of observables tied to a signal path, station geometry, frequency reference and epoch. Orbit determination combines them with a dynamical model; it does not read a full position and velocity directly from the radio.[^1][^4]
