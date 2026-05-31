- ### Definition
  - A convolutional neural network architecture with a symmetric encoder-decoder structure and skip connections, originally designed for biomedical image segmentation.

- ### Semantic Classification
  - owl-class:: computer-vision:UNet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Convolutional Neural Network]]
  - bridges-to:: [[Semantic Segmentation]]
  - requires:: [[Convolution]], [[Encoder]], [[Decoder]]
  - enables:: [[Image Segmentation]]

- ### Content
  - U-Net contracts the input through successive convolution and downsampling layers to capture context, then expands it through upsampling layers to recover spatial resolution. Skip connections copy feature maps from the contracting path to the expanding path, preserving fine spatial detail.
  - Originally introduced for medical image segmentation with limited training data, the architecture became a general backbone for dense prediction tasks. It is also used as the denoising network in many diffusion models, where its multi-scale structure suits image generation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z