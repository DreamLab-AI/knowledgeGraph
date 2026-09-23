---
okf_version: "0.2"
type: Class
title: Checkpoint Recovery
resource: urn:ngm:class:checkpoint-recovery
domain: ai
description: Checkpoint recovery is the process of resuming a computation, most commonly a machine learning training run, from a previously saved checkpoint after an interruption such as a hardware failure, pre-emption or planned restart. It requires that checkpoints capture sufficient state, including model parameters, optimiser state and progress markers, to continue correctly without repeating completed wor
maturity: established
quality: 0.65
is-a:
  - urn:ngm:class:model-checkpoint
requires:
  - urn:ngm:class:model-checkpoint
---

# Checkpoint Recovery

Checkpoint recovery is the process of resuming a computation, most commonly a machine learning training run, from a previously saved checkpoint after an interruption such as a hardware failure, pre-emption or planned restart. It requires that checkpoints capture sufficient state, including model parameters, optimiser state and progress markers, to continue correctly without repeating completed work. Reliable checkpoint recovery is essential for large-scale and decentralised training where node failures are expected rather than exceptional.
