- ### Definition
  - The Generative Modelling Domain covers statistical models that learn a data distribution and can sample new instances from it. Its scope includes latent variable models, autoregressive models, diffusion processes and adversarial training. It is a methodological sub-area of the Artificial Intelligence Domain situated within the Machine Learning Domain. The boundary is the modelling of distributions, distinguishing it from the applied Generative AI Domain that deploys such models in products.

- ### Semantic Classification
  - owl-class:: genmodel:GenerativeModellingDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence Domain]]
  - bridges-to:: [[Generative AI Domain]], [[Deep Learning Domain]], [[Creative AI Domain]]
  - has-part:: [[Variational Autoencoder]], [[Generative Adversarial Network]], [[Diffusion Model]], [[Autoregressive Model]], [[Normalising Flow]]
  - requires:: [[Machine Learning Domain]], [[Probability Theory]], [[Information Theory]]
  - enables:: [[Data Synthesis]], [[Density Estimation]], [[Generative AI Domain]]

- ### Content
  - The Generative Modelling Domain studies how to represent and sample from probability distributions over complex data such as images, audio and text. Its scope covers the principal model families and the training objectives that fit them, including likelihood maximisation, variational bounds and adversarial games. The boundary is the formal modelling task; deploying a trained generator in an application is a matter for the Generative AI Domain.
  - Member concepts include the Variational Autoencoder, Generative Adversarial Network, Diffusion Model, Autoregressive Model and Normalising Flow, each offering a distinct trade-off between sample quality, likelihood tractability and training stability. These rest on machine learning practice, probability theory for the distributional view and information theory for objectives such as divergence minimisation.
  - The domain bridges to the Deep Learning Domain, which supplies the neural parameterisations, to the applied Generative AI Domain that productises these models, and to the Creative AI Domain where generation supports artistic work. It enables data synthesis, density estimation and anomaly detection.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z