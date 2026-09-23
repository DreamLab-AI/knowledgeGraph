---
okf_version: "0.2"
type: Class
title: Conditioning Signal
resource: urn:ngm:class:conditioning-signal
domain: artificial-intelligence
description: A conditioning signal is auxiliary input - such as a text prompt, class label, pose map, or edge map - supplied to a generative model to steer its output toward desired attributes without retraining the base model. Techniques such as classifier-free guidance and ControlNet-style spatial conditioning inject these signals at specific points in the generation process to control content, structure, or
maturity: established
quality: 0
is-a:
  - urn:ngm:class:control-signal
---

# Conditioning Signal

A conditioning signal is auxiliary input - such as a text prompt, class label, pose map, or edge map - supplied to a generative model to steer its output toward desired attributes without retraining the base model. Techniques such as classifier-free guidance and ControlNet-style spatial conditioning inject these signals at specific points in the generation process to control content, structure, or style. The strength and fidelity of a conditioning signal determine how closely generated output adheres to the intended constraint.
