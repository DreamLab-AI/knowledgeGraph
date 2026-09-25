Denoising score matching is a training objective for learning the score function, the gradient of the log probability density, of a data distribution. Rather than estimating the score directly, it perturbs data with known Gaussian noise and trains a model to predict the noise, which is equivalent to estimating the score of the noise-perturbed distribution. This objective avoids the intractable normalising constant of energy-based models and underpins score-based generative models and diffusion models, where the learned score guides iterative sampling from noise back to data.

### Overview

- Estimating a probability density directly requires its normalising constant, which is intractable for high-dimensional data.
- Score matching circumvents this by learning the score function instead, since the score does not depend on the normaliser.
- The denoising variant adds known noise and reduces the objective to a simple regression: predict the added noise.
- Sampling then follows the learned score, for example via Langevin dynamics or by reversing a noising process.

### Mechanisms

- Noise perturbation: data are corrupted at multiple noise scales to cover the distribution broadly.
- Score estimation: the model output relates directly to the gradient of the log density of the perturbed data.
- Equivalence: minimising the denoising objective is provably equivalent to matching the perturbed-data score.
- Iterative sampling: starting from noise, repeated score-guided steps transport samples back toward the data manifold.

### Applications

- High-fidelity image, audio and video synthesis through diffusion models.
- Conditional generation such as text-to-image and inpainting.
- Inverse problems and scientific data generation where the score guides reconstruction.
- Likelihood-free density modelling in energy-based and score-based frameworks.

### Provenance

