---
okf_version: "0.2"
type: Class
title: Rectified Flow
resource: urn:ngm:class:rectified-flow
domain: artificial-intelligence
description: Rectified Flow is a generative modelling framework that trains a velocity field to transport samples along straight-line trajectories in the ODE sense between a source noise distribution and a target data distribution. By reflow iterations—repeatedly pairing coupled samples and re-training—the learned trajectories become increasingly linear, minimising the number of function evaluations (NFEs) req
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-model-architecture
enables:
  - urn:ngm:class:image-generation
  - urn:ngm:class:sampling
uses:
  - urn:ngm:class:generative-model
relatedTo:
  - urn:ngm:class:flow-matching
  - urn:ngm:class:diffusion-model
---

# Rectified Flow

Rectified Flow is a generative modelling framework that trains a velocity field to transport samples along straight-line trajectories in the ODE sense between a source noise distribution and a target data distribution. By reflow iterations—repeatedly pairing coupled samples and re-training—the learned trajectories become increasingly linear, minimising the number of function evaluations (NFEs) required at inference time. The approach unifies flow matching and score-based diffusion models, offering competitive image and video generation quality with substantially faster sampling compared to standard diffusion schedules.
