---
okf_version: "0.2"
type: Class
title: Exponential Moving Average
resource: urn:ngm:class:exponential-moving-average
domain: blockchain
description: An exponential moving average (EMA) is a weighted moving average that applies exponentially decreasing weights to successive observations in a time series, giving greater significance to recent data than to older data. It is computed recursively as a convex combination of the current observation and the previous EMA value, governed by a smoothing factor derived from a chosen window length. In bloc
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:statistical-analysis
requires:
  - urn:ngm:class:statistical-analysis
enables:
  - urn:ngm:class:algorithmic-trading
  - urn:ngm:class:quantitative-finance
dependsOn:
  - urn:ngm:class:time-series
bridgesTo:
  - urn:ngm:class:oracle
uses:
  - urn:ngm:class:time-series
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:oracle
  - urn:ngm:class:risk-management
partOf:
  - urn:ngm:class:time-series
relatedTo:
  - urn:ngm:class:quantitative-finance
  - urn:ngm:class:signal-processing
  - urn:ngm:class:algorithmic-trading
---

# Exponential Moving Average

An exponential moving average (EMA) is a weighted moving average that applies exponentially decreasing weights to successive observations in a time series, giving greater significance to recent data than to older data. It is computed recursively as a convex combination of the current observation and the previous EMA value, governed by a smoothing factor derived from a chosen window length. In blockchain and decentralised finance contexts the EMA is widely used to smooth on-chain price feeds, dampen oracle noise, and drive technical-analysis signals and adaptive parameters in automated trading and risk systems.
