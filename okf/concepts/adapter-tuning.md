---
okf_version: "0.2"
type: Class
title: Adapter Tuning
resource: urn:ngm:class:adapter-tuning
domain: artificial-intelligence
description: A parameter-efficient fine-tuning technique that adapts a frozen pre-trained neural network to new tasks by inserting small trainable modules — adapters — between or alongside its layers, typically bottleneck feed-forward blocks or low-rank projections, so that task-specific behaviour is learned in a fraction of a percent of the original parameter count; adapters preserve the base model's weights,
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:parameter-efficient-fine-tuning
partOf:
  - urn:ngm:class:cross-modal-conditioning
relatedTo:
  - urn:ngm:class:lo-ra-do-ra-etc
  - urn:ngm:class:fine-tuning
---

# Adapter Tuning

A parameter-efficient fine-tuning technique that adapts a frozen pre-trained neural network to new tasks by inserting small trainable modules — adapters — between or alongside its layers, typically bottleneck feed-forward blocks or low-rank projections, so that task-specific behaviour is learned in a fraction of a percent of the original parameter count; adapters preserve the base model's weights, allow many tasks to share one backbone through swappable modules, and underpin methods from Houlsby adapters to LoRA and ControlNet-style conditioning branches.
