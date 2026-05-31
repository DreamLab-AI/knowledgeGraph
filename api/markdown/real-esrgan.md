- ### Definition
  - Real-ESRGAN is an image super-resolution model that upscales and restores low-quality images, with particular attention to real-world degradations. It extends the ESRGAN architecture using a generative adversarial network trained on synthetic degradation data.

- ### Semantic Classification
  - owl-class:: computer-vision:RealESRGAN
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Generative Adversarial Network]]
  - bridges-to:: [[Computer Vision]], [[Deep Learning]]
  - requires:: [[Generative Adversarial Network]], [[Convolutional Neural Network]]
  - enables:: [[Image Generation]]

- ### Content
  - Real-ESRGAN targets practical image restoration where the degradation process is unknown, simulating blur, noise and compression artefacts during training so the model generalises to photographs and scanned material. It is widely used for upscaling images and video frames.
  - The architecture pairs a residual-in-residual dense generator with a discriminator that judges perceptual quality. It is distributed as open source and is commonly used as a preprocessing step in content pipelines.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z