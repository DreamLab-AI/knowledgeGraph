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
uses:
  - urn:ngm:class:machine-learning-model
supports:
  - urn:ngm:class:fairness
partOf:
  - urn:ngm:class:model-performance
---

# Mean Absolute Error

A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable. MAE treats all errors equally regardless of direction and is less sensitive to outliers than squared error metrics such as RMSE.
