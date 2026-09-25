Transformer-based neural network architectures applied to images by splitting an image into fixed-size patches and treating those patches as a sequence of tokens for self-attention, enabling global context modelling across the full image without relying on local convolutional receptive fields.

### Semantic Classification

### Content

- Vision transformers divide an image into fixed-size patches, embed each patch as a vector and add positional information before passing the sequence through transformer encoder layers. Self-attention lets the model relate distant regions of the image directly, in contrast to the local receptive fields of convolution.
- With sufficient data or pre-training, vision transformers match or exceed convolutional networks on classification and other vision tasks. Variants introduce hierarchical structure and local attention to improve efficiency, and the architecture has been extended to detection, segmentation and multimodal models.

### Provenance

