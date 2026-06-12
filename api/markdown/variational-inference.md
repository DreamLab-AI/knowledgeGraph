- ### Definition
  - Variational inference is a Bayesian machine learning method that approximates complex, intractable posterior distributions using a simpler parameterised family by optimising the evidence lower bound (ELBO) via gradient-based methods. Rather than sampling from the posterior as in Markov chain Monte Carlo approaches, variational inference reframes posterior estimation as an optimisation problem, making it tractable for large-scale models. It is the foundational inference mechanism underlying Variational Autoencoders and is widely applied in probabilistic topic modelling, latent variable models, and Bayesian deep learning.

- ### Semantic Classification
  - owl-class:: variational-inference:Variational Inference
  - owl-role:: Concept

- ### Relationships
  - requires [[Bayesian Inference]]
  - enables [[VAE]]
  - enables [[Generative Model]]
  - relatedTo [[Deep Learning]]
  - relatedTo [[Neural Network Latent Space]]

- ### Content
  Variational inference (VI) addresses the fundamental challenge that the posterior distribution p(z|x) over latent variables z given data x is almost always analytically intractable for models of practical interest. VI introduces a tractable approximate posterior q(z; φ) from a chosen family—commonly a mean-field Gaussian—and optimises its parameters φ to minimise the KL divergence between q and the true posterior, which is equivalent to maximising the Evidence Lower BOund (ELBO) on the log marginal likelihood.

  The reparameterisation trick, which rewrites samples from q as differentiable transformations of noise variables, enables gradient-based optimisation of the ELBO using standard deep learning frameworks, and is the key technical ingredient that makes Variational Autoencoders trainable end-to-end with backpropagation. Normalising flows extend VI by composing invertible transformations to produce more expressive approximate posteriors.

  Variational inference sits at the intersection of Bayesian statistics and deep learning, and its techniques underpin a broad range of generative models including VAEs, hierarchical VAEs (NVAE, VDVAE), and probabilistic programming systems. In contrast to Monte Carlo methods, VI trades unbiasedness for computational tractability, making it the preferred inference approach in high-dimensional generative settings.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z