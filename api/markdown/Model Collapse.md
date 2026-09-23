
Model collapse is a degenerative process in which generative models trained recursively on their own (or other models') synthetic outputs progressively lose information about the true data distribution. Tails of the distribution disappear first, leading to reduced diversity, amplified biases, and eventual convergence on degenerate outputs. It is a key risk as AI-generated content increasingly contaminates web-scale training corpora.

- ### Content
  - Each generation of training on prior model outputs narrows the learned distribution, first dropping low-probability events then collapsing toward the mean, so accuracy and variety decay. Mitigations include preserving provenance, retaining a fraction of genuine human data, and watermarking or filtering synthetic content.

