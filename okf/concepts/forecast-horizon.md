---
okf_version: "0.2"
type: Class
title: Forecast Horizon
resource: urn:ngm:class:forecast-horizon
domain: data
description: The forecast horizon is the length of time into the future over which a predictive model generates estimates, measured as the number of time steps ahead from the last observation. It is a key design parameter in time-series forecasting that trades off relevance against uncertainty, since predictive error generally grows with the horizon. Choice of horizon shapes model selection, evaluation strateg
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
relatedTo:
  - urn:ngm:class:demand-forecasting
  - urn:ngm:class:time-series-forecasting
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Forecast Horizon

The forecast horizon is the length of time into the future over which a predictive model generates estimates, measured as the number of time steps ahead from the last observation. It is a key design parameter in time-series forecasting that trades off relevance against uncertainty, since predictive error generally grows with the horizon. Choice of horizon shapes model selection, evaluation strategy, and the operational decisions a forecast supports.
