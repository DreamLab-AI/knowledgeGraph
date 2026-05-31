- ### Definition
  - Score matching is a method for fitting probability models by matching the gradient of the log-density, the score, of the model to that of the data, avoiding the intractable normalising constant. It underpins score-based generative models and diffusion models.

- ### Semantic Classification
  - owl-class:: machine-learning:ScoreMatching
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Machine Learning]]
  - bridges-to:: [[Generative Model]]
  - requires:: [[Probability Theory]], [[Statistics]]
  - enables:: [[Diffusion Model]]

- ### Content
  - Score matching estimates an unnormalised probability model by minimising the difference between the model's score function, the gradient of the log-density, and that of the data distribution. Because the score does not depend on the partition function, the method sidesteps computing an intractable normalising constant.
  - Denoising score matching and related estimators connect the idea to learning the score of noise-perturbed data, which is the basis of score-based generative models and diffusion models. These approaches generate samples by following estimated scores through a reverse noising process.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z