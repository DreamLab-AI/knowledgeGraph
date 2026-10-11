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
---

# Time Series

A time series is a sequence of data points indexed in chronological order, typically sampled at consistent intervals, that captures how a measured quantity changes over time. Time series data underpins forecasting, trend analysis, and anomaly detection, and requires specialised handling for properties such as seasonality, trend, and autocorrelation that are absent from unordered datasets. Derived statistics such as moving averages are computed directly over a time series to smooth noise and reveal underlying patterns.
