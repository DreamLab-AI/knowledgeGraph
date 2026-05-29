- ### Definition
  - A Variational Autoencoder (VAE) is a generative model that learns a probabilistic latent-space representation of data by jointly optimising a reconstruction loss and a KL-divergence regularisation term, using variational inference to make the latent posterior tractable. The encoder network maps input data to a distribution over latent codes, whilst the decoder network reconstructs data from samples drawn from that distribution, enabling the model to generate novel, coherent samples at inference time. VAEs are foundational to latent diffusion models, image synthesis pipelines, and representation learning tasks where structured, disentangled latent spaces are desirable.

- ### Semantic Classification
  - owl-class:: vae:VAE
  - owl-role:: Concept

- ### Relationships
  - requires [[Variational Inference]]
  - requires [[Autoencoder]]
  - enables [[Latent Diffusion]]
  - enables [[Image Generation]]
  - relatedTo [[latent space]]
  - relatedTo [[Deep Generative Model]]

- ### Content
  The Variational Autoencoder (VAE) unifies the encoder-decoder architecture of classical autoencoders with the probabilistic framework of variational inference. The encoder network—also called the recognition model—takes an input x and outputs the parameters (mean and variance) of a Gaussian distribution over latent codes z, rather than a single deterministic code. The decoder network takes a sample drawn from that distribution and reconstructs the input, trained with a composite loss consisting of a reconstruction term (pixel-wise MSE or cross-entropy) and a KL divergence term that regularises the posterior to stay close to a unit Gaussian prior, ensuring the latent space is smooth and continuously traversable.

  The reparameterisation trick—expressing z = μ + σ · ε where ε ~ N(0,I)—makes the sampling operation differentiable, enabling end-to-end backpropagation through the stochastic node. This technical device was central to the original VAE formulation and is reused in many subsequent probabilistic deep learning architectures.

  VAEs are a key component in Latent Diffusion Models such as Stable Diffusion, where the VAE compresses images into a lower-dimensional latent space in which the diffusion process operates, dramatically reducing computational cost. Extensions including hierarchical VAEs, VQ-VAEs (vector-quantised), and DALL-E's discrete VAE have broadened the applicability of the framework to high-fidelity image and audio generation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z