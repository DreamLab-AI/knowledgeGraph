---
okf_version: "0.2"
type: Class
title: Bode Plot
resource: urn:ngm:class:bode-plot
domain: infrastructure
description: "A Bode Plot is a pair of frequency-domain graphs used in control engineering and signal analysis to characterise the frequency response of a linear time-invariant system: one graph plots the magnitude of the system's transfer function in decibels against log-frequency, and the second plots the phase angle in degrees against log-frequency. Together they reveal gain margins, phase margins, bandwidth"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:control-system
enables:
  - urn:ngm:class:stability-analysis
  - urn:ngm:class:pid-controller
uses:
  - urn:ngm:class:transfer-function
  - urn:ngm:class:signal-processing
relatedTo:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:feedback-loop
---

# Bode Plot

A Bode Plot is a pair of frequency-domain graphs used in control engineering and signal analysis to characterise the frequency response of a linear time-invariant system: one graph plots the magnitude of the system's transfer function in decibels against log-frequency, and the second plots the phase angle in degrees against log-frequency. Together they reveal gain margins, phase margins, bandwidth, and resonant behaviour, making Bode plots the primary graphical tool for assessing open-loop stability and designing compensators.
