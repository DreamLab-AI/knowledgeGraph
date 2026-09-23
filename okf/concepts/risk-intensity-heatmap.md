---
okf_version: "0.2"
type: Class
title: Risk Intensity Heatmap
resource: urn:ngm:class:risk-intensity-heatmap
domain: infrastructure
description: A heatmap is a data visualisation technique that encodes numerical values as colour intensities in a two-dimensional matrix, allowing rapid visual comparison of magnitudes across categorical dimensions. In the context of AI risk and impact analysis, heatmaps are used to compare urgency, impact, and composite severity scores across AI risk categories (such as security risks, algorithmic bias, job a
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:software-engineering
uses:
  - urn:ngm:class:data-visualisation
  - urn:ngm:class:data-analytics
supports:
  - urn:ngm:class:ai-risk-management
  - urn:ngm:class:ai-regulation
  - urn:ngm:class:visualization-layer
relatedTo:
  - urn:ngm:class:ai-risk
  - urn:ngm:class:ai-ethics
  - urn:ngm:class:ai-governance
  - urn:ngm:class:algorithmic-bias
---

# Risk Intensity Heatmap

A heatmap is a data visualisation technique that encodes numerical values as colour intensities in a two-dimensional matrix, allowing rapid visual comparison of magnitudes across categorical dimensions. In the context of AI risk and impact analysis, heatmaps are used to compare urgency, impact, and composite severity scores across AI risk categories (such as security risks, algorithmic bias, job automation, and AI ethics), guiding prioritisation for governance and regulation. Heatmaps are typically rendered with colour-scheme gradients (e.g., Vega-Lite's blues scheme) and can be embedded directly in knowledge-graph pages for interactive analysis.
