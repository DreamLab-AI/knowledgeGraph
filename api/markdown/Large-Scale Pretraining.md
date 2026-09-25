Large-scale pretraining is the training of a high-capacity neural network on a very large, broad corpus using a self-supervised objective, producing a general-purpose foundation model before any task-specific adaptation. It typically optimises an objective such as next-token prediction over web-scale text or paired multimodal data, learning transferable representations. The resulting model is later fine-tuned or prompted for downstream tasks.

### Overview

- The dominant recipe optimises next-token prediction (or masked prediction) over web-scale data using a [[Transformer Architecture]].
- Self-supervision removes the need for human labels at scale, letting models learn from raw text, code, images, and other modalities.
- Scaling laws describe how loss improves predictably with model size, data, and compute, guiding resource allocation.
- Pretraining is enormously resource-intensive, requiring large [[Compute Cluster]] deployments of accelerators and careful data curation.

### Key aspects

- Objective: a self-supervised loss such as autoregressive or masked language modelling.
- Scale: parameters, tokens, and compute are jointly increased per scaling-law guidance.
- Data: deduplicated, filtered, and balanced corpora strongly affect downstream quality.
- Efficiency: parallelism, mixed precision, and checkpointing make training tractable.

### Applications

- Producing foundation models that are subsequently fine-tuned or instruction-tuned.
- Enabling transfer learning across many downstream tasks from a single base model.
- Underpinning emergent capabilities that appear only at sufficient scale.

### Provenance

