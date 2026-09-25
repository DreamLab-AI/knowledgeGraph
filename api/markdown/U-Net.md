A convolutional neural network architecture with a symmetric encoder-decoder structure and skip connections, originally designed for biomedical image segmentation and widely adopted for dense prediction tasks including diffusion model denoising.

### Semantic Classification

### Content

- U-Net contracts the input through successive convolution and downsampling layers to capture context, then expands it through upsampling layers to recover spatial resolution. Skip connections copy feature maps from the contracting path to the expanding path, preserving fine spatial detail.
- Originally introduced for medical image segmentation with limited training data, the architecture became a general backbone for dense prediction tasks. It is also used as the denoising network in many diffusion models, where its multi-scale structure suits image generation.

### Provenance

