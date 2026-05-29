## Diffusion Model

A Diffusion Model is a class of generative model that learns to synthesise data by reversing a gradual noising process. During training the model observes how data is progressively corrupted by Gaussian noise; at inference time it iteratively denoises a random sample, guided by a learned score function, to produce high-fidelity outputs such as images, audio, or video. Diffusion models underpin systems like Stable Diffusion and DALL-E 3.

### Relationships
  - enables:: [[Image Generation]]
  - enables:: [[Text-to-Image]]
  - uses:: [[Training Data]]
  - uses:: [[Neural Network]]
  - contrastsWith:: [[Generative Adversarial Network]]