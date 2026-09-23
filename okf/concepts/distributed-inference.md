---
okf_version: "0.2"
type: Class
title: Distributed Inference
resource: urn:ngm:class:distributed-inference
domain: machine-learning
description: Distributed inference is the execution of a machine learning model's forward pass across multiple devices or machines so that models too large or too demanding for a single accelerator can serve predictions. It partitions the model and its computation using strategies such as tensor, pipeline and data parallelism, and coordinates the resulting workers with high-bandwidth interconnects. Distributed
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:model-serving
  - urn:ngm:class:ai-infrastructure
hasPart:
  - urn:ngm:class:tensor-parallelism
requires:
  - urn:ngm:class:gpu
enables:
  - urn:ngm:class:large-language-model
dependsOn:
  - urn:ngm:class:distributed-systems
implements:
  - urn:ngm:class:model-parallelism
bridgesTo:
  - urn:ngm:class:distributed-systems
uses:
  - urn:ngm:class:pipeline-parallelism
supports:
  - urn:ngm:class:model-serving
standardizedBy:
  - urn:ngm:class:machine-learning-discipline
partOf:
  - urn:ngm:class:model-serving
relatedTo:
  - urn:ngm:class:model-parallelism
  - urn:ngm:class:kv-cache
---

# Distributed Inference

Distributed inference is the execution of a machine learning model's forward pass across multiple devices or machines so that models too large or too demanding for a single accelerator can serve predictions. It partitions the model and its computation using strategies such as tensor, pipeline and data parallelism, and coordinates the resulting workers with high-bandwidth interconnects. Distributed inference is essential for serving very large language and vision models at acceptable latency and throughput.
