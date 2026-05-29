## Deep Generative Model

### Definition

A Deep Generative Model is a neural network architecture trained to learn the underlying probability distribution of a dataset and draw new samples from it. The principal families include Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), normalising flows, and diffusion models, each offering different trade-offs between sample quality, diversity, training stability, and latent-space interpretability.

### Relationships
  - hasPart [[Generative Adversarial Network]]
  - hasPart [[Diffusion Model]]
  - hasPart [[Autoencoder]]
  - enables [[Image Generation]]
  - enables [[Synthetic Data]]
  - partOf [[Generative AI]]

### Content

Deep Generative Models have become central to modern AI by enabling machines to create novel, high-fidelity artefacts — images, audio, video, text, and molecular structures — rather than merely classifying existing ones. GANs use an adversarial training loop between generator and discriminator networks; VAEs learn a continuous latent space from which new samples are decoded; diffusion models iteratively denoise Gaussian noise into structured outputs, currently achieving state-of-the-art image synthesis quality. These model families are not mutually exclusive: hybrid architectures combine GAN discriminators with diffusion denoisers, or use VAE encoders to provide latent conditioning for diffusion processes. Applications span creative media generation, data augmentation for data-efficient learning, drug discovery via molecular generation, and privacy-preserving synthetic dataset creation. Evaluation remains challenging due to the absence of a single ground-truth distribution, with FID and IS scores for images serving as proxy metrics with known limitations.