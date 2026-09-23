---
okf_version: "0.2"
type: Class
title: Time Series Data
resource: urn:ngm:class:time-series-data
domain: infrastructure
description: Time series data is a sequence of observations indexed in time order, typically recorded at regular or irregular intervals from sensors, systems or markets. Its temporal structure exposes trends, seasonality and autocorrelation that distinguish it from cross-sectional data and demand specialised storage, querying and analysis. Time series underpin monitoring, forecasting and anomaly detection acro
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:data
hasPart:
  - urn:ngm:class:timestamp
  - urn:ngm:class:sensor-data
requires:
  - urn:ngm:class:time-series-database
  - urn:ngm:class:data-storage
enables:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:time-series-analysis
contrastsWith:
  - urn:ngm:class:data-structure
bridgesTo:
  - urn:ngm:class:data-pipeline
uses:
  - urn:ngm:class:timestamp
  - urn:ngm:class:sampling
supports:
  - urn:ngm:class:monitoring
  - urn:ngm:class:stream-processing
partOf:
  - urn:ngm:class:data
relatedTo:
  - urn:ngm:class:telemetry
  - urn:ngm:class:monitoring
  - urn:ngm:class:data-analytics
  - urn:ngm:class:data
---

# Time Series Data

Time series data is a sequence of observations indexed in time order, typically recorded at regular or irregular intervals from sensors, systems or markets. Its temporal structure exposes trends, seasonality and autocorrelation that distinguish it from cross-sectional data and demand specialised storage, querying and analysis. Time series underpin monitoring, forecasting and anomaly detection across many domains.
