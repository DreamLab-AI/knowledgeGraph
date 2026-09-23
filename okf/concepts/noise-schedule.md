---
okf_version: "0.2"
type: Class
title: Noise Schedule
resource: urn:ngm:class:noise-schedule
domain: ai
description: A noise schedule is the function that determines how much Gaussian noise is added at each step of a diffusion model's forward process and, correspondingly, removed during sampling. It governs the variance trajectory from clean data to pure noise and strongly affects sample quality, training stability, and the number of steps required. Common forms include linear, cosine, and learned schedules.
maturity: emerging
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
relatedTo:
  - urn:ngm:class:diffusion-models
  - urn:ngm:class:sampling
---

# Noise Schedule

A noise schedule is the function that determines how much Gaussian noise is added at each step of a diffusion model's forward process and, correspondingly, removed during sampling. It governs the variance trajectory from clean data to pure noise and strongly affects sample quality, training stability, and the number of steps required. Common forms include linear, cosine, and learned schedules.
