- ### Definition
  - Generative adversarial network: a generative model in which a generator and a discriminator are trained in opposition, the generator producing samples and the discriminator distinguishing real from generated data.

- ### Semantic Classification
  - owl-class:: deep-learning:GAN
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Generative Adversarial Network]]
  - bridges-to:: [[Generative Model]]
  - requires:: [[Backpropagation]]
  - enables:: [[Image Generation]]

- ### Content
  - A GAN frames generation as a two-player game. The generator maps noise to samples, and the discriminator estimates the probability that a sample is real. Training updates both networks so that the generator improves at fooling the discriminator while the discriminator improves at detection.
  - GANs can produce sharp, realistic samples but are notoriously difficult to train, with issues such as mode collapse and unstable convergence. Many variants modify the loss function or architecture to stabilise training, and the approach has been applied to image synthesis, super-resolution and image-to-image translation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z