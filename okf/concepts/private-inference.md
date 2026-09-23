---
okf_version: "0.2"
type: Class
title: Private Inference
resource: urn:ngm:class:private-inference
domain: security
description: Private inference is the execution of a machine learning model's forward pass such that neither the input data nor the model's internal state is revealed to the party running the computation, preserving confidentiality of both user data and, where required, model weights. It is commonly implemented using confidential computing hardware such as trusted execution environments, which isolate computat
maturity: draft
quality: 0.5
is-a:
  - urn:ngm:class:confidential-computing
requires:
  - urn:ngm:class:tee
---

# Private Inference

Private inference is the execution of a machine learning model's forward pass such that neither the input data nor the model's internal state is revealed to the party running the computation, preserving confidentiality of both user data and, where required, model weights. It is commonly implemented using confidential computing hardware such as trusted execution environments, which isolate computation from the host operating system. It enables sensitive applications, such as processing medical or financial data, to use cloud-hosted models without exposing raw inputs.
