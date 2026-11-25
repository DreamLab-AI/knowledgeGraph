---
okf_version: "0.2"
type: Class
title: Time Series
resource: urn:ngm:class:time-series
domain: data
description: "A time series is a sequence of data points indexed in chronological order, typically sampled at consistent intervals, that captures how a measured quantity changes over time. Time series data underpins forecasting, trend analysis, and anomaly detection, and requires specialised handling for properties such as seasonality, trend, and autocorrelation that are absent from unordered datasets. Derived "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:data-structure
bridgesTo:
  - urn:ngm:class:change-detection
  - urn:ngm:class:climate-data-record
  - urn:ngm:class:earth-science-data-record
  - urn:ngm:class:time-domain-astronomy
relatedTo:
  - urn:ngm:class:astronomical-photometry
  - urn:ngm:class:exoplanet-transit-method
  - urn:ngm:class:solar-cycle
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Time Series

A time series is a sequence of data points indexed in chronological order, typically sampled at consistent intervals, that captures how a measured quantity changes over time. Time series data underpins forecasting, trend analysis, and anomaly detection, and requires specialised handling for properties such as seasonality, trend, and autocorrelation that are absent from unordered datasets. Derived statistics such as moving averages are computed directly over a time series to smooth noise and reveal underlying patterns.
