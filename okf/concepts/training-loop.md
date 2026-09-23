---
okf_version: "0.2"
type: Class
title: Training Loop
resource: urn:ngm:class:training-loop
domain: artificial-intelligence
description: A Training Loop is the iterative control structure that drives model training, repeatedly performing a forward pass, loss computation, backward pass, and parameter update over batches of data until a stopping condition is reached. It coordinates gradient descent steps with logging, checkpointing, and evaluation at regular intervals. Its structure is common across frameworks even though the specifi
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:gradient-descent
---

# Training Loop

A Training Loop is the iterative control structure that drives model training, repeatedly performing a forward pass, loss computation, backward pass, and parameter update over batches of data until a stopping condition is reached. It coordinates gradient descent steps with logging, checkpointing, and evaluation at regular intervals. Its structure is common across frameworks even though the specific optimiser and schedule vary.
