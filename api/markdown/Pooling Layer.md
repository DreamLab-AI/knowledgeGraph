
A parameter-free neural network layer that summarises local regions or whole sets of feature activations into a single value each — typically the maximum or the mean — thereby reducing spatial resolution, enlarging receptive fields, and conferring a degree of translation invariance in convolutional networks, or collapsing token sequences into fixed-length vectors in embedding models. Pooling trades fine positional detail for compactness and robustness, and its choice (max, average, global, attention-weighted) materially affects what a representation preserves.

- ### Semantic Classification

- ### Content

  ## Definition

  A **pooling layer** is a downsampling component of a [[Neural Network]] that aggregates groups of activations into single summary values without any learned weights. In a [[Convolutional Neural Network]] a pooling window (commonly 2×2 with stride 2) slides over each channel of a [[Feature Map]] and emits one number per position — the maximum for *max pooling*, the mean for *average pooling* — halving spatial resolution while keeping channel count fixed. Where a convolutional layer *detects* features, pooling *summarises* them: the contrast is between a rich spatial map of responses and a compressed statement of whether and roughly where a feature occurred.

  Pooling serves three purposes. It cuts computation and memory for subsequent layers; it grows the effective receptive field so deeper layers integrate evidence over larger image regions; and it grants local translation invariance, since shifting a feature by a pixel or two usually leaves the pooled maximum unchanged. The lineage runs from the complex cells of Hubel and Wiesel's visual cortex model through Fukushima's Neocognitron and LeCun's LeNet to AlexNet and VGG, where max pooling was standard equipment.

  The idea generalises beyond spatial grids. *Global* average or max pooling collapses each channel's entire map to one scalar, replacing bulky fully connected heads (as in ResNet and most modern classifiers) and enabling class activation mapping. In sentence [[Embedding Model]] architectures, mean pooling over token vectors (or [CLS]-token selection, or attention-weighted pooling) converts a variable-length transformer output into the fixed-length vector that retrieval and semantic-search systems index. Set and graph networks likewise rely on permutation-invariant pooling (sum, mean, max, attention) to summarise nodes into graph-level representations.

  ## Technical Details

  - **Common variants**: max, average, global max/average, stochastic pooling, Lp-norm pooling, spatial pyramid pooling (fixed-length outputs from variable inputs), RoI pooling/align in detection, and attentive pooling with learned query vectors.
  - **Arithmetic**: output size ⌊(n + 2p − k)/s⌋ + 1 per dimension for window k, stride s, padding p; channels pass through unchanged; no parameters are added.
  - **Backpropagation**: max pooling routes the gradient solely to the argmax position (requiring stored switch indices); average pooling distributes it uniformly across the window.
  - **Design debate**: strided convolutions can replace pooling ("all-convolutional" networks), and vision transformers largely abandon it within blocks, yet patch merging and final mean pooling play the same summarising role; anti-aliased (blur) pooling restores shift robustness lost to naive downsampling.
  - **Trade-off**: aggressive pooling discards localisation detail that dense-prediction tasks need — hence encoder-decoder designs (U-Net) that pool on the way down and restore resolution with skip connections on the way up.

  ## Current Landscape

  - **Transformers relocate pooling, not abandon it**: vision transformers collapse token sequences into a class prediction using either a dummy `[CLS]` token, global average pooling (GAP, noted as equally good in the original ViT), or multihead attention pooling (MAP) with a learnable query; hierarchical designs such as Swin insert 2×2 "patch merging" layers that are directly analogous to strided pooling.
  - **Pooling choice is task-dependent**: recent analysis of pooling in transformer-based models finds `CLS`/last-token pooling generally best for classification while average/weighted-average pooling wins on inpainting and segmentation, with the CLS-vs-average gap narrowing as models grow larger.
  - **GAP for translation invariance**: global average pooling remains widely adopted in ViTs for its translation-invariant behaviour, though 2025 work (e.g. MPVG) shows GAP can conflict with position embeddings in layer-wise structures and proposes fixes.
  - **Sequence/embedding models**: mean pooling, attention-weighted pooling, and CLS selection over transformer token outputs are the standard ways to produce the fixed-length vectors that retrieval and semantic-search indexes consume.

  **Sources**:
  - https://en.wikipedia.org/wiki/Vision_transformer
  - https://openreview.net/pdf?id=8uhXfdSJmA
  - https://arxiv.org/html/2502.02919

