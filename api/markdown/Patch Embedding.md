Patch embedding is the mechanism by which a Vision Transformer (ViT) converts a 2D image into a sequence of fixed-size vector representations suitable for processing by a self-attention mechanism. The image is divided into non-overlapping rectangular patches; each patch is flattened and projected to a latent dimension via a learnable linear transformation, yielding a sequence of token embeddings analogous to word embeddings in language models. Positional embeddings are added to encode spatial location, and a classification token is prepended to aggregate global information.

### Overview

- Patch embedding was introduced in the Vision Transformer (ViT) paper by Dosovitskiy et al. (2020) as a minimal adaptation enabling standard Transformer blocks to operate on images. By treating fixed-size image patches as tokens, ViT demonstrated that a pure attention-based architecture can match or exceed CNN performance on image classification when pre-trained on large datasets.
- The patch size is a hyperparameter (commonly 16×16 or 32×32 pixels) that controls the sequence length: smaller patches yield longer sequences with finer granularity, increasing computational cost quadratically due to self-attention's O(n²) complexity. Subsequent work such as DeiT introduced distillation tokens; hierarchical models like Swin Transformer replaced global attention with local shifted windows to reduce cost while maintaining accuracy.

### Key aspects

- **Patch size trade-off** — smaller patches capture finer detail but increase sequence length and quadratic attention cost; 16×16 is a common balance point.
- **Positional embedding variants** — learnable 1D, 2D sinusoidal, or relative position biases; interpolation allows adapting to different resolutions at inference time.
- **Classification token** — a learnable vector prepended to the sequence whose final representation is used for classification, analogous to BERT's [CLS] token.
- **Convolutional stem** — some ViT variants replace the flat linear projection with a small CNN stem to improve training stability and low-data performance.

### Applications

- Image classification on large-scale benchmarks such as ImageNet.
- Object detection and segmentation backbones in architectures like DINO and SAM.
- Vision-language models where patch embeddings are aligned with text token embeddings.
- Video understanding by extending patch embedding across temporal dimensions.

### Mechanisms

- **Flattening** — each P×P patch is reshaped to a vector of length P²×C (C = channels).
- **Linear projection** — a weight matrix W ∈ R^(d × P²C) maps each flattened patch to the model's latent dimension d.
- **Positional addition** — patch position embeddings are summed element-wise with the projected patch vectors before the first Transformer block.

### Provenance

