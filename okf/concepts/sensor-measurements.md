---
okf_version: "0.2"
type: Class
title: Sensor Measurements
resource: urn:ngm:class:sensor-measurements
domain: robotics
description: Sensor measurements are the time-stamped observations produced by physical or virtual sensors, each carrying a value, a unit, and an associated uncertainty or noise model. In probabilistic robotics they form the observation stream that estimators condition on to infer latent state such as pose or velocity. Their statistical characterisation is essential for filtering, fusion, and localisation.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-perception
relatedTo:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:monte-carlo-localization
---

# Sensor Measurements

Sensor measurements are the time-stamped observations produced by physical or virtual sensors, each carrying a value, a unit, and an associated uncertainty or noise model. In probabilistic robotics they form the observation stream that estimators condition on to infer latent state such as pose or velocity. Their statistical characterisation is essential for filtering, fusion, and localisation.
