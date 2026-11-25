---
okf_version: "0.2"
type: Class
title: Hyperspectral Imaging
resource: urn:ngm:class:hyperspectral-imaging
domain: earth-observation-and-geospatial-sensing
description: "Hyperspectral imaging records a spectrum at each spatial sample, producing a data cube with two spatial dimensions and one spectral dimension. Unlike a multispectral instrument with a small set of broad bands, a hyperspectral instrument usually samples many narrow, contiguous bands. There is no universal band-count threshold, so a useful specification gives wavelength range, spectral sampling and "
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:earth-observation-sensor
bridgesTo:
  - urn:ngm:class:dimensionality-reduction
relatedTo:
  - urn:ngm:class:earth-observation
  - urn:ngm:class:principal-component-analysis
  - urn:ngm:class:regression
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:space-corpus-research/0.1.0","process":"process:space-corpus-research/0.1.0","at":"2026-10-02T07:26:41Z"}
---

# Hyperspectral Imaging

Hyperspectral imaging records a spectrum at each spatial sample, producing a data cube with two spatial dimensions and one spectral dimension. Unlike a multispectral instrument with a small set of broad bands, a hyperspectral instrument usually samples many narrow, contiguous bands. There is no universal band-count threshold, so a useful specification gives wavelength range, spectral sampling and spectral response rather than relying on the label alone.
