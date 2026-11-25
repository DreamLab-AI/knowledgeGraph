---
okf_version: "0.2"
type: Class
title: Mean Absolute Error
resource: urn:ngm:class:mean-absolute-error
domain: artificial-intelligence
description: A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable. MAE treats all errors equally regardless of direction and is less sensiti
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:model-performance
contrastsWith:
  - urn:ngm:class:root-mean-square-error
bridgesTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:demand-forecasting
uses:
  - urn:ngm:class:machine-learning-discipline-model
supports:
  - urn:ngm:class:fairness
partOf:
  - urn:ngm:class:model-performance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Mean Absolute Error

A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable. MAE treats all errors equally regardless of direction and is less sensitive to outliers than squared error metrics such as RMSE.
