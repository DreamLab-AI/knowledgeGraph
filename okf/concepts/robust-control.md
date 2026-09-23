---
okf_version: "0.2"
type: Class
title: Robust Control
resource: urn:ngm:class:robust-control
domain: spatial-computing
description: Robust Control is a branch of control theory that designs controllers guaranteeing stable and acceptable performance across a bounded set of model uncertainties and disturbances. It formalises worst-case design requirements through H-infinity and H2 optimisation frameworks, ensuring actuated systems remain within specification even when plant parameters deviate from nominal values.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:sc-content-and-assets
  - urn:ngm:class:controlalgorithms
enables:
  - urn:ngm:class:motion-control
  - urn:ngm:class:robot-control
contrastsWith:
  - urn:ngm:class:adaptive-control
bridgesTo:
  - urn:ngm:class:control-algorithm
uses:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:pid-control
supports:
  - urn:ngm:class:robot-safety
  - urn:ngm:class:trajectory-control
---

# Robust Control

Robust Control is a branch of control theory that designs controllers guaranteeing stable and acceptable performance across a bounded set of model uncertainties and disturbances. It formalises worst-case design requirements through H-infinity and H2 optimisation frameworks, ensuring actuated systems remain within specification even when plant parameters deviate from nominal values.
