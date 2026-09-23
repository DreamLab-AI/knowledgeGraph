---
okf_version: "0.2"
type: Class
title: Resolution Bucketing
resource: urn:ngm:class:resolution-bucketing
domain: ai
description: Resolution bucketing is a training-data preparation technique for diffusion and other image-generation models that groups training images into a fixed set of aspect-ratio and size buckets rather than forcing every image to a single square resolution. Each batch is drawn from a single bucket so images share dimensions, avoiding distortion from cropping or stretching while preserving GPU batching ef
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:machine-learning-discipline-technique
relatedTo:
  - urn:ngm:class:kohya-dreambooth-and-similar
---

# Resolution Bucketing

Resolution bucketing is a training-data preparation technique for diffusion and other image-generation models that groups training images into a fixed set of aspect-ratio and size buckets rather than forcing every image to a single square resolution. Each batch is drawn from a single bucket so images share dimensions, avoiding distortion from cropping or stretching while preserving GPU batching efficiency. It improves fidelity for non-square data and is a standard step in fine-tuning pipelines such as Kohya-based DreamBooth and LoRA training.
