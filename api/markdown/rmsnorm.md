- ### Definition
  - Root Mean Square Layer Normalisation (RMSNorm) is a neural network normalisation technique that re-scales each activation vector by the inverse of the root mean square of its elements, eliminating the mean-subtraction and bias terms present in standard Layer Normalisation. By removing the re-centring computation, RMSNorm reduces operational cost while achieving comparable training stability and generalisation performance to Layer Normalisation in transformer architectures. RMSNorm has been adopted as the default normalisation layer in several state-of-the-art large language models including LLaMA and Mistral, reflecting both its empirical effectiveness and its computational efficiency on GPU hardware.

- ### Semantic Classification
  - owl-class:: rmsnorm:RMSNorm
  - owl-role:: Concept

- ### Relationships
  - contrastsWith [[Layer Normalisation]]
  - contrastsWith [[Batch Normalisation]]
  - partOf [[Neural Network Layer]]
  - enables [[Training and fine tuning]]
  - relatedTo [[Attention Mechanism]]
  - relatedTo [[Large Language Models]]

- ### Content
  - The RMSNorm operation for an input vector x of dimension d is defined as: RMSNorm(x) = x / RMS(x) * g, where RMS(x) = √(1/d ∑x_i²) and g is a learned per-element gain parameter. This omits both the mean-subtraction step and the bias parameter β present in Layer Normalisation (LN), based on the hypothesis that re-centring is not necessary for training stability and that the re-scaling is the primary factor ensuring stable gradient flow.
  - Empirically, RMSNorm achieves training loss curves and downstream task performance comparable to LN whilst reducing per-token normalisation compute by roughly 7–15% depending on the implementation. On GPU hardware, fused CUDA kernels for RMSNorm are simpler to implement than LN because the reduction over elements only needs to compute a sum of squares rather than both mean and variance. This makes RMSNorm particularly attractive for inference-latency-sensitive production deployments of large language models.
  - RMSNorm is placed pre-normalisation (before attention and feed-forward sublayers) in LLaMA-family models, in contrast to the post-normalisation placement of the original transformer paper. Pre-normalisation tends to improve gradient flow and allow higher learning rates. Variants of RMSNorm such as QK-Norm (applied specifically to query and key projections within attention heads) have been explored to stabilise attention logits in very deep or very wide transformer models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z