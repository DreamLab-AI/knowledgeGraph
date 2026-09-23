
A generative model that pairs an encoder mapping inputs to a probability distribution over a latent space with a decoder that reconstructs inputs, trained to maximise a variational lower bound (ELBO) on the data likelihood via the reparameterisation trick.

- ### Semantic Classification

- ### Content
  - A variational autoencoder (VAE) treats the latent representation as a random variable with a prior, usually a standard Gaussian. The encoder outputs the parameters of an approximate posterior, and the reparameterisation trick allows gradients to flow through the sampling step during training.
  - The training objective combines a reconstruction term with a Kullback-Leibler divergence that keeps the approximate posterior close to the prior. This regularised latent space supports smooth interpolation and sampling, making VAEs useful for generation, representation learning and anomaly detection, though samples are often blurrier than those from adversarial methods.

- ### Provenance

