---
okf_version: "0.2"
type: Class
title: Teacher Student Training
resource: urn:ngm:class:teacher-student-training
domain: artificial-intelligence
description: Teacher-Student Training is a machine learning paradigm in which a larger, higher-capacity teacher model supervises the training of a smaller student model, transferring knowledge through soft probability distributions (dark knowledge), intermediate feature representations, or attention maps rather than hard labels alone. The approach underpins knowledge distillation for model compression and is w
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:ai-technique
  - urn:ngm:class:training-method
enables:
  - urn:ngm:class:model-compression-for-edge
  - urn:ngm:class:knowledge-distillation-for-edge
implements:
  - urn:ngm:class:knowledge-distillation
  - urn:ngm:class:transfer-learning
uses:
  - urn:ngm:class:deep-learning
  - urn:ngm:class:machine-learning-discipline
relatedTo:
  - urn:ngm:class:computer-vision
---

# Teacher Student Training

Teacher-Student Training is a machine learning paradigm in which a larger, higher-capacity teacher model supervises the training of a smaller student model, transferring knowledge through soft probability distributions (dark knowledge), intermediate feature representations, or attention maps rather than hard labels alone. The approach underpins knowledge distillation for model compression and is widely used to deploy efficient models on edge hardware without sacrificing task performance.
